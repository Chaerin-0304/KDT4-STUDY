// 문자열 관련 method
let str1 = "Strawberry Moon";
let str2 = "     Strawberry Moon      ";

console.log(str1[1]);
console.log(str1[0] + str1[3]);

console.log(str1.length);
console.log(str2.length);

console.log("Strawberry".toUpperCase());
console.log("Strawberry".toLowerCase());

// trim 공백 없애기

let str3 = str2.trim();
console.log(str3);
console.log(str3.length);

let fruit = "applemango";
let msg1 = "Wow! It is so amazing!!";
console.log(fruit.indexOf("apple"));

// charAt()
console.log(fruit.charAt(8));

// Slice
console.log(fruit.slice(5));

// replace
console.log(msg1.replace("Wow", "ah"));

// 2022.10.27 -> 2022-10-27
console.log("2022.10.27".replaceAll(".", "-"));

// repeat
console.log("ㅎ".repeat(10));

// split
let hello = "hello";
console.log(typeof hello);
hello = hello.split("l");
console.log(typeof hello);

//
let day = "2022.10.27";
console.log(day.split("."));

// 배열관련 함수
let arr1 = [1, 2, 3, 4, 5];
let arr2 = ["quakka", "puppy", "rabbit", "hamster"];

// push 뒤쪽에 추가 - 기존 배열 변화
arr1.push(6);
console.log(arr1);
arr1.pop();
console.log(arr1);

// unshift 앞쪽에 추가
arr2.unshift("cat");
console.log(arr2);
arr2.shift();
console.log(arr2);

arr1[5] = 8;
console.log(arr1);

// include - true / false 반환 - 기존 배열 변호 x

console.log(arr1.includes(1));
console.log(arr2.includes("hamster"));

// indexOf
console.log(arr1.indexOf(3));
console.log(arr2.indexOf("quakka"));

// reverse - 기존 배열 변화

arr1.reverse();
console.log(arr1);

//  join 배열을 문자열로 바꿔줌 - 기존 배열 변화 X join 안에 뭐 넣어주면 +됨
let str4 = arr1.join("+");
console.log(str4); //5+4+3+2+1

//  for of / forEach
// arr1

let alphabets = ["a", "b", "c", "d", "e"];
let arr4 = [1, 2, 3, 4, 5];
for (let i = 0; i < arr1.length; i++) {
  console.log(arr4[i]);
}

// for of
for (let el of arr4) {
  console.log(el);
}

for (let el of alphabets) {
  console.log(el);
}

alphabets.forEach(function (el, index, arr) {
  //   console.log(el);
  //   console.log(index);
  console.log(arr);
});

// let arr1 = [1,2,3,4,5];
let sum1 = 0;
let sum2 = 0;
let sum3 = 0;

// 기본 for문
for (let i = 0; i < arr1.length; i++) {
  sum1 = sum1 + arr1[i];
}

// for of
for (let el of arr1) {
  sum2 = sum2 + el;
}

console.log(sum1);
console.log(sum2);

// forEach
arr1.forEach((el) => {
  sum3 += el;
});

console.log(sum3);

console.log("-----");

// filter
// filter - 기존 배열을 변형하지 않음
//arr2 = ["quakka", "puppy", "rabbit", "hamster"];
arr2.filter(function (word) {
  return word.length === 6;
});
console.log(arr2);

let sixAlphabets = arr2.filter(function (word) {
  return word.length === 6;
});
console.log(sixAlphabets);

// map
arr1.map(function (num) {
  return num * 3;
});

let arr5 = arr1.map(function (num) {
  return num * 3;
});

console.log(arr5);

// find
let cute = arr2.find(function (el) {
  return el.length === 6;
});
console.log(cute);

// function 안쓰려면 =>

let cute2 = arr2.find((el) => {
  return el.length === 5;
});
console.log(cute2);

let cute3 = arr2.find((el) => el.length === 7);
console.log(cute3);

let fruits1 = [
  "사과",
  "딸기",
  "파인애플",
  "수박",
  "참외",
  "오렌지",
  "자두",
  "망고",
];

let fruits2 = ["수박", "사과", "참외", "오렌지", "파인애플", "망고"];

// for 문

let same = [];
let diff = [];
for (let i = 0; i < fruits1.length; i++) {
  if (fruits2.includes(fruits1[i])) {
    same.push(fruits1[i]);
  } else {
    diff.push(fruits1[i]);
  }
}

console.log(same);
console.log(diff);

// filter

let same2 = fruits1.filter((fr) => fruits2.includes(fr));
let diff2 = fruits1.filter((fr) => !fruits2.includes(fr));
//  반대면 앞쪽에 ! 찍어주기

function solution(n) {
  let answer = 0;
  while (n !== 0) {
    answer = answer + (n % 10);
  }
}
