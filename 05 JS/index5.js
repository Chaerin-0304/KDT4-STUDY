// for(변수 선언(초기값); 조건식(어디까지 증가?); 증감;) {
//     반복 코드;
// }

// 1. for
for(let i=0; i<10; i++){
    console.log('안녕', i);
}

console.log('---');

// i+=2 / i=i+2
for(let i=0; i<10; i+=2){
    console.log(`안녕 ${i}`);
}

for(let i=0; i<10; i=i+3){
    console.log('3씩 늘어나겠네요!!', i);
}

// i부터 5까지 출력하는 방법
for(let i=1 ; i<=5; i++){
    console.log(i);
}

for(let i=0; i<5; i++){
    console.log(i+1);
}

for(let i=1; i<6; i++){
    console.log(i);;
}

for(let i=5; i>0; i--){
    console.log(i);
}

console.log('--');


// 1부터 n까지의 합을 구하기, -> N 선언하기 
let n= 12;
let sum1=0; 
// 초기화 단계
for(let i=1; i<n+1; i++){
    sum1=sum1+i;
    // sum1+=i
    console.log(sum1);
}

// 배열과 함께 쓰는 for 문
// 배열 선언

let fruits=['apple', 'mango', 'orange', 'mangostin'];
console.log(fruits.length);

for(let i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}

let numsArr= [99, 99, 98, 85, 77];
let sum2=0;
for(let i=0; i<numsArr.length; i++){
    sum2=sum2+numsArr[i]
}
console.log(sum2/numsArr.length);

// 0-20 까지의 짝수일 때의 합
let sum3 =0;
for(i=0; i<=20; i++){
    if(i%2 ===0){
        sum3=sum3+i;
    }
}
console.log(sum3);

// while 문
let n2=1;
while (n2 <=5) {
    console.log(n2);
    n2++;
}

let n3 = 9;
while (n3 >= 4){
    console.log(n3);
    n3--;
    // 순서 바뀌면 8부터 출력됨;
}

//  1부터 10까지의 짝수 출력
// n2 재선언
n2=1;
while(n2 <=10) {
    if(n2%2===0){
        console.log(n2);
    }
    n2++;
}

// 무한 루프

// let a =0;
// while(true){
//     console.log(a);
//     a++
    
//     if(a >10){
//         break;
//     }
// }

// let b =0;
// confirm('dd')
// while(confirm('계속 띄울까요?')){
//     b++;
//     alert(`${b}번째 alert 창`);
// }

// continue
let sum4=0;
for(let i =0; i <=10; i++) {
    if(i%2 ===0) {
        continue;
    }
    sum4+=i;
}

console.log(sum4);

// 실습 1 구구단

for(let i=2; i<10; i++){
    console.log(`===${i} 단 ===`);
    for(let j=1; j<10; j++){
        console.log(`${i} x ${j} = ${i*j}`);
    }
}

// 실습 2 2또는 5의 배수 합
let sum25=0;
for(i=0; i<=100; i++){
    if(i%2===0 || i%5===0){
        sum25+=i;
    }
}

console.log(sum25);