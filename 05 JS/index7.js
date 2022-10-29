let now = new Date();
console.log(now);

// console.log(now.getFullYear(), '년');
// console.log(now.getMonth()+1, '월');
// // 현재 월을 보고 싶다면?
// console.log(now.getDate(), '일');
// console.log(now.getHours(), '시');
// console.log(now.getMinutes(), '분');
// console.log(now.getSeconds(), '초');
// console.log(now.getMilliseconds(), 'ms');
// console.log(now.getDay(), '요일');
// // 일요일 부터 셈

console.log(now.getDay()+1, '요일');

if(now.getDay() ===5 || now.getDay() ===4 ||now.getDay() ===3 ||now.getDay() ===2 ||now.getDay() ===1) {
    console.log('평일');

} else {
    console.log('주말');
}

// 상황 연산자 
console.log(now.getDay()===0 || now.getDay()===6 ? '주말' : '평일' )

//  math 객체
console.log(Math.PI);

console.log(Math.min(100,45,23,88));
// 정수로 반올림
console.log(Math.round(5.8));
// 
console.log(Math.floor(5.8));

// 0 <= x <1 소수 생성
console.log(Math.random());

console.log(Math.floor(Math.random()*100));

// 0 <= x <= 9 -> 0 <=x<10
console.log(Math.floor(Math.random()*9));
// 0<x<=10 -> 0<=x<11 -> 1<=x<11
console.log(Math.floor(Math.random()*10)+1);
// 1<x<=100 -> 2<=x<101
console.log(Math.floor(Math.random()*99)+2);
// 20<x<=22 -> 21<=x<23 (21,22을 포함한 난수임)
console.log(Math.floor(Math.random()*2)+21);


let i=0;
sum10=0;
while(i<100){
    if(i%2===0 || i%3===0){
        sum10=sum10+i;
    }
    i++;
}
console.log(`1과 99까지 중에서 2 또는 3의 배수의 합: ${sum10}`);



function drawStars(n){
    let lines='*';
    for(i=n; i>0; i--){
        console.log(lines.repeat(i));
    }
}

drawStars(5);

function drawStars2(n){
    let lines='*';
    let zero=" ";
    for(i=1; i<n; i++){
        console.log(`${zero.repeat(n-i)}${lines.repeat(i)}`);
    }
}

drawStars2(5);

