/* ------------------------ */
/* Data Types               */
/* ------------------------ */

/* ECMAScript의 8가지 데이터 타입 -------------------------------------------- */

// 1. 존재하지 않는(nothing) 값 / 비어있는(empty) 값 / 알 수 없는(unknown) 값

let empty = null;
console.log(typeof empty);

// 2. 값이 할당되지 않은 상태
let undef;
console.log(typeof undef);

// 3. 따옴표를 사용해 묶은 텍스트(큰", 작은', 역`)
const double = 'hello';
const single = 'hello';
const backtick = `hello ${10 + 5}`;

console.log(typeof backtick);

const str = new String('hello');

//string 생성자 함수를 사용하여 문자열 객체를 만든다

console.log(str);

// 4. 정수, 부동 소수점 숫자(길이 제약)
// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용)
// 6. 참(true, yes) 또는 거짓(false, no)
// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)

// 8. 고유한 식별자(unique identifier)

const id = Symbol('uuid');
const id2 = Symbol('uuid');

console.log(typeof id);

/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

// 1) 연산자 typeof
// 2) 함수 typeof()

// 언어 상, 오류
console.clear();
// Object
const user = {
  name: 'tiger',
  age: 20,
  sum: function (a, b) {  //객체 안 함수는 키 : function 으로 사용 메서드(method)라고 부른다 
    return a + b;
  },

  sayHi:function(){
    return:'hello'; //normal function 프로토타입객체가 내장되어있음 = 무겁다
  }

  sayHi2:() => {
    return this  //arrow function 프로토타입객체가 내장되어있지 않음 = 가볍다 this 바인딩을 안함 /this하면 window인 전역객체가 나옴
  },

  sayHi3(){
    return 'hola'  // concise method 제일 많이 쓰는 이유 1 빨리 쓸 수 있다 (간결한 코드) 2. 가볍다. 생성자(constructor) 가 없다. 함수의 일만 처리하기 위해 태어남 
    // this하면 객체가 나옴
  }

};
console.log(user);
// Array
const newArray = new Array(1, 2, 3);
const arr = [10, 100, 1000];

// function
function 더하기(a, b) {
  return a + b; //함수는 리턴이 없으면 언디파인드,
}

const 결과 = 더하기(2, 3);

console.log(결과);

// this
