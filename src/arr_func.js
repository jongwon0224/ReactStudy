// map 함수 => 변수명.map(item, index) => { return ~~};
// 기본 배열
let arr = [ 10, 20, 30, 40 ];

arr.map(function () {
    console.log('arr.map'); // 반복 실행하면서 return 가능
});
//============================================================
arr.forEach(() => {
    console.log('arr for each'); // 반복문 내부에 코드 실행
});

//============================================================
arr.map((item, index) => {
    console.log('값' + item + ' index: ' + index + ' 배열[index]: ' + arr[ index ]); // map내부 함수 매개변수 (item, index)배열안에 값과 인덱스 주입
});
//============================================================
let result1 = arr.map(() => {
    return 99; // return 값을 99로 설정해서 arr배열의 데이터가 아닌 99를 4번
});

console.log(result1);

//============================================================
let result2 = arr.map((item) => {
    console.log(item); // 리턴값이 없어서 undefined 4번 출력; => return값이 있어야 출력됨
});

console.log(result2);
//============================================================
let result3 = arr.map((item) => {
    return item + 100; // return 값100 => item값 10,20,30,40 => 110,120,130,140출력;
});

console.log(result3);
//============================================================
let result4 = arr.map((item) => {
    return '보유한 값: ' + item; // return 값100 => item값 10,20,30,40 => 110,120,130,140출력;
});

console.log(result4);
//============================================================
let menuArr = [ '우동', '라면', '김밥' ];

let result5 = menuArr.map((item, index) => {
    return '<p>' + item + '</p>';
})
console.log(result5);
//============================================================

// 화살표 함수 중괄호 없애고 괄호사용시 자동 return 됨
let result6 = menuArr.map((item, index) => '<p>' + item + '</p>');
console.log(result6);

//============================================================

//2) filter 함수
// 조건 결과가 참인 값만 리턴 => value가 20이 아니면 arr값에서 20을 뺀 값 출력
// 10,20,30,40 => 10,30,40
let result7 = arr.filter((value) => {
    return value != 20;
});
console.log(result7); // 10,30,40
//============================================================

//3) find 함수 => 조건에 맞는 값을 찾아줌..
// filter <==> find 함수 서로 반대인 느낌..
//

let result8 = arr.find((value) => {
    return value == 20; // false일경우 'undefined'반환
});

// false일경우 undefined반환해서 유효성검사에 사용가능!
if(result8 === undefined) {
    result8 = 30;
}

console.log(result8); // 30


//============================================================

//4) findIndex 함수
// 배열변수에 들어있는 인덱스번호를 찾아줌

let result9 = arr.findIndex( (value) => {
    return value == 40; // false일경우 '-1' 반환
});
console.log(result9); // 3
//============================================================
// 자바스크립트는 배열을 배열에 대입할수있음
// ex) n1=10, n2=20, n3=30이랑 동일
let [n1,n2,n3] = [10,20,30];
console.log(n1); //10
console.log(n2); //20
console.log(n3); //30

// 자바스크립트 객체를 {key1, key2} = obj에 대입가능
// num1 = {num1 : 30}
// num2 = {num1 : 30}

let obj = {num1 : 30, num2 : 50};
console.log(obj.num2);

let {num1, num2} = obj;
console.log(num1); // 30
console.log(num2); // 50
