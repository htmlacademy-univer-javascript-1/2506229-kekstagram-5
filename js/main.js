const messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const names = [
  'Алексей',
  'Мария',
  'Игнатий',
  'Светлана',
  'Дмитрий',
  'Екатерина',
  'Николай',
  'Ольга'
];
function generatePhotos() {
  const photos = [];
  for (let i = 1; i <= 25; i++) {
    const likes = Math.floor(Math.random() * (200 - 15 + 1)) + 15;
    const commentsCount = Math.floor(Math.random() * (30 + 1));
    const comments = [];
    for (let j = 0; j < commentsCount; j++) {
      const avatarId = Math.floor(Math.random() * 6) + 1;
      const messageIndex = Math.floor(Math.random() * messages.length);
      const nameIndex = Math.floor(Math.random() * names.length);
      comments.push({
        id: j + 1,
        avatar: `img/avatar-${avatarId}.svg`,
        message: messages[messageIndex],
        name: names[nameIndex],
      });
    }
    photos.push({
      id: i,
      url: `photos/${i}.jpg`,
      description: `Описание фотографии номер ${i}. Обратите внимание на детали.`,
      likes: likes,
      comments: comments,
    });
  }
  return photos;
}
const generatedPhotos = generatePhotos();
console.log(generatedPhotos);
