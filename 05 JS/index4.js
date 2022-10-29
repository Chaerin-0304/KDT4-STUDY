// let a='3';
//         let b=2;
//         let c='18';

//         console.log (a-c)

//         function add(a,b){
//             return a+b;
//         }

//         function multiply(a,b){
//             return a*b;
//         }
        
//         function square(a) {
//             console.log(a**2);
//         }

//         console.log(multiply(3,7));

//         square(5)
//         square(7)

//         let coun2=0;

//         function count(){
//             let count2=7;
//             console.log(count2);
//         }

//         count();

//         function myFunction() {
//             alert("클릭이 되었어요!");
//         }


        // if 문

        // let number=Number(prompt('숫자를 입력해주세요'));

        // if(number>10){
        //     console.log('10보다 큰 수입니다.');
        // } else {
        //     console.log('입력받은 수가 10보다 크거나 같스빈다.');

        // }

        // if(number>100){
        //     console.log('잘못된 점수입니다.');
        // } else if(number>=90){
        //     console.log('A');
        // } else if(number >=80){
        //     console.log('B');
        // } else if (number >=70){
        //     console.log('C');
        // } else if (number>=60){
        //     console.log('D');
        // } else {
        //     console.log('F'); 
        // }


        // let age = Number(prompt('나이를 입력해주세요'));

        // if(age>20){
        //     console.log('성인');
        // } else if(age>=17){
        //     console.log('고등학생');
        // } else if(age>=14){
        //     console.log('중학생');
        // } else if(age>=8) {
        //     console.log('초등학생');
        // } else {
        //     console.log('유아');
        // }

        // 0<=age<8
        // if(age>=0 && age<8){
        //     console.log('유아');
        // } else if( age>=8 && age<14){
        //     console.log('초딩');
        // } else if ( age>=14 && age<17){
        //     console.log('중딩');
        // } else if ( age>=17 && age<20){
        //     console.log('고딩');
        // } else {
        //     console.log('성인');
        // }


        // let userId='user01';
        // let userPw='1234qwer';

        // function longinUser(){
        //     let inputId=prompt('id를 입력해주세요');
        //     let inputPw=prompt('비밀번호를 입력해주세요');
        // }

        // if(userId===inputId){
        //     if(userPw===inputPw){
        //         console.log('로그인 성공!');
        //             alert('안녕하세요 $(userId님');
        //     } else {
        //         console.log('비밀번호가 일치하지 않습니다');
        //     }        
        // }    else if(inputId===''){
        //     alert('아이디를 입력하지 않았습니다.');
        //     } else{
        //         alert('없는 아이디입니다.');
        //     };

// 스위치문
     let a=5 ;
     switch(a){
        case 3:
            console.log('입력값이 4보다 작습니다.');
            break;
        case 4:
            console.log('입력값이 4입니다.');
            break;
        case 5:
            console.log('입력값이 4보다 큽니다');
            break;
        default:
            console.log('어느수인지 파악이 안돼요');
            break;    
     }          

     let number=99;
     console.log(parseInt(number/10));
     switch(parseInt(number/10)){
        case 10:
        case 9:
            console.log('A')
            break;
        case 8:
            console.log('B')
            break;
        default:
            console.log('F');
            break;
    }

    // 상향인산자
    let num=6;

    if(num % 2 === 1){
        console.log('홀수');
    } else {
        console.log('짝수');
    }

    let result = num%2==1 ? '짝수':'홀수';

    console.log(result);

    let fruit = 'banana';
    console.log(fruit=== 'banana'? '바나나' : '바나나가 아닙니다.');


    let now= new Date().getHours();

    if(now>=12){
        console.log('오후');
    } else {
        console.log('오전');
    }

    console.log( now>=12 ? '오후' : '오전');
    console.log( now < 12 ? 'am' : 'pm');


    
    function rectangle(a,b){
        return a*b;
    }
    
    console.log(rectangle(10,5));

    function triangle(a,b){
        return (a*b)/2;
    }

    console.log(triangle(4,3));

    function circle() {
        return (a**2)*3.14
    }

    console.log(circle(10));


    let x =2;
    switch(x) {
        case 1:
        case 2:
            console.log('a');
            console.log('b');
        case 3:
            console.log('c');
            break;
        default:
            console.log('f');    
    }

// For 문
