import { getRandomInteger, getRandomArrayElement, createIdGenerator } from './utils.js';

const PHOTO_COUNT = 25;
const MIN_LIKES = 15;
const MAX_LIKES = 200;
const MAX_COMMENTS = 30;
const AVATAR_COUNT = 6;
const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const DESCRIPTIONS = [
  'Захваченный момент, когда солнце прощается с днем. #Закат #Природа',
  'Новый рецепт, который покорил мое сердце!  #Еда #Вкусно',
  'Солнечные дни и морской бриз — идеальное сочетание! #Отпуск #МорскойОтдых',
  'Каждый цветок — это маленькое чудо природы. #Цветы #Красота',
  'На пути к новым приключениям! #АктивныйОтдых #Приключения',
  'Утренний кофе — мой ритуал счастья. #Кофе #Утро',
  'Творчество — это способ выразить себя. #Искусство #Творчество',
  'Немного любви от моего пушистого друга! #Питомцы #Счастье'
];
const NAMES = [
  'Александр',
  'Мария',
  'Игорь',
  'Светлана',
  'Дмитрий',
  'Елизавета',
  'Николай',
  'Олеся'
];
const generateCommentId = createIdGenerator();
const createMessage = () => Array.from(
  { length: getRandomInteger(1, 2) },
  () => getRandomArrayElement(MESSAGE),
).join('');
const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInteger(1, AVATAR_COUNT)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(NAMES),
});
const createPicture = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  descriptions: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(MIN_LIKES, MAX_LIKES),
  comments: Array.from(
    { length: getRandomInteger(0, MAX_COMMENTS) },
    createComment,
  ),
});
export const getPictures = () => Array.from(
  { length: PHOTO_COUNT },
  (_, index) => createPicture(index + 1),
);
