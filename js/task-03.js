/*
Задача 2-3
Поиск самого длинного слово в строке с пробелами

Напиши функцию findLongestWord(string = ""), которая принимает параметром произвольную строку 
(в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.
*/

function findLongestWord(string = '') {
  // Write code under this line
  const ARRAY = string.split(' ');

  let word = '';

  for (const item of ARRAY) {
    if (word.length < item.length) {
      word = item;
    }
  }

  return word;
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// 'jumped'

console.log(findLongestWord('Google do a roll'));
// 'Google'

console.log(findLongestWord('May the force be with you'));
// 'force'
