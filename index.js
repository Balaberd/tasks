// Задание 1 – Создать объект counter всеми возможными способами;
let counter = {}
counter = new Object()
counter = Object.create(null)
counter = JSON.parse('{}')

function ObjectCreator() { }
counter = new ObjectCreator()


// Задание 2 – Скопировать объект counter всеми возможными способами;
const copy1 = { ...counter }
const copy2 = Object.assign({}, counter)
const copy3 = JSON.parse(JSON.stringify(counter))

const copy4 = {}
for (key in counter) {
  copy4[key] = counter[key]
}


// Задание 3 – Создать функцию makeCounter всеми описанными и возможными способами;
function makeCounter1() { }
const makeCounter2 = function () { }
const makeCounter3 = function someName() { }
const makeCounter4 = new Function()
const makeCounter5 = () => { }
(function makeCounter6() { })()


// Бонус Задание 1 – Написать функцию глубокого сравнения двух обьектов:
const someObj = { a: 'hello' }
const obj1 = { here: { is: "on", other: "3" }, object: Z };
const obj2 = { here: { is: "on", other: "2" }, object: Z };

const deepEqual = (obj1, obj2) => {
  const arr1 = Object.entries(obj1);
  const arr2 = Object.entries(obj2);

  if (arr1.length !== arr2.length) return false

  for (let i = 0; i < arr1.length; i++) {
    const [key1, value1] = arr1[i];
    const [key2, value2] = arr2[i];

    if (key1 === key2 && value1 === value2) {
      continue
    } else if (Array.isArray(value1)) {
      // ...
    } else if (typeof value1 === 'object') {
      if (deepEqual(value1, value2)) continue
    }
    return false
  }
  return true

};


// Бонус Задание 2 – Развернуть  строку в обратном направлении при помощи методов массивов:
function reverseStr(str) {
  return str.split('').reverse().join('')
}