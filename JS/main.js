const array = [2, 4, 7, 5, 4, 3, 8];
const result = array.filter(function (value, index, array)
{
    //インデックス番号を比較して重複データのみ排除
    return array.indexOf( value ) === index;
})
console.log(result);

function isLeapYear(year) {
  return (year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0);
}

function isLeapYear(year) {
  return new Date(year, 2, 0).getDate() === 29;
}
let message = "2020年"
console.log(message)
console.log(isLeapYear(2020));
let message1 = "2021年"
console.log(message1)
console.log(isLeapYear(2021));

