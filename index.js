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
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  
  if(keys1.length !== keys2.length) return false
  
  for(let i = 0; i < keys1.length; i++) {
    const key = keys1[i]
    
    if(obj1[key] === obj2[key]) {
      continue
    } else if(typeof obj1[key] === 'object') {
      if(deepEqual(obj1[key], obj2[key])) continue
    }
    return false
  }
  
  return true
};


// Бонус Задание 2 – Развернуть  строку в обратном направлении при помощи методов массивов:
function reverseStr(str) {
  return str.split('').reverse().join('')
}