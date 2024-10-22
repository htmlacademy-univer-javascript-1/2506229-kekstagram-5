function lineSize(string, length){
  return string.lenght <= length;
}
lineSize('проверяемая строка', 20);
function isPalindrome (str){
  const string = str.replaceAll(' ', '').toLowerCase();
  for (let n = 0; n < string.length / 2; n++){
    if (string.at(n) !== string.at(- n - 1)){
      return false;
    }
  }
  return true;
}
isPalindrome('топот');
isPalindrome('ДовОд');
isPalindrome('Кекс');
isPalindrome('Лёша на полке клопа нашёл');
