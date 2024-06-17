/* --------- */
/* Object    */
/* --------- */

/* global isObject; */

console.log(isObject);

/* Primitives vs. Object --------- */

// key:value 쌍으로 구성된 엔티티(entity) 데이터 구조
let cssCode = /* css */ `
  .dialog {
    position: fixed;
    z-index: 10000;
    top: 50%;
    left: 50%;
    width: 60vw;
    max-width: 800px;
    height: 40vh;
    min-height: 280px;
    transform: translate(-50%, -50%);
  }
`;

// 위 CSS 스타일 코드를 JavaScript 객체로 작성해봅니다.
let cssMap = {
  position: 'fixed',
  zIndex: 10000,
  top: '50%',
  left: '50%',
  width: '60vw',
  maxWidth: '800px',
  height: '40vh',
  minHeight: '280px',
  transform: 'translate(-50%, -50%)',
};

// 인증 사용자 정보를 객체로 구성해봅니다.
// 인증 사용자(authentication user)
// - 이름
// - 이메일
// - 로그인 여부
// - 유료 사용자 권한

let authUser = null;

authUser = {
  uid: 'uesr-id-adsadsmkfm',
  name: 'juwon',
  email: 'juwon0481@gmail.com',
  isSignIn: false,
  promission: 'paid',
};

// 점(.) 표기법
// authUser 객체의 프로퍼티에 접근해 Console에 출력해봅니다.
console.log(authUser.uid); //getter
console.log((authUser.name = 'free')); //setter

// 대괄호([]) 표기법
// 유료 사용자 권한(paid User Rights) 이름으로 프로퍼티를 재정의하고
// 대괄호 표기법을 사용해 접근 Console에 출력해봅니다.
console.log(authUser['uid']); //getter
console.log((authUser['email'] = 'abc@gmail.com')); //setter

Object.prototype.nickName = '호랑이';

//객체 안에 키가 있는 지 확인

//in 문 - 단일대상만 조회
console.log('uid' in authUser);

//for in
for (let key in authUser) {
  if ({}.hasOwnProperty.call(authUser, key)) {
    console.log(key); // key
    console.log(authUser[key]); //velue
  }
}

// 객체의 key만을 모아서 배열을 반환하는 메서드 Object.keys()
const keyList = Object.keys(authUser);
// 객체의 key만을 모아서 배열을 반환하는 메서드 Object.velus()
const valueList = Object.values(authUser);

console.log(keyList);
console.log(valueList);

console.clear();

function removeProperty(obj, key) {
  if (isObject(obj)) {
    obj[key] = null;
  }
}

removeProperty(authUser, 'name');

function deleteProperty(obj, key) {
  if (isObject(obj)) {
    delete obj[key];
  }
}
deleteProperty(authUser, 'name');

// 계산된 프로퍼티 (computed property)
let calculateProperty = 'phone'; // phone | tel

function creatUser(name, age, phone) {
  return {
    name: name,
    age: age,
    [calculateProperty]: phone,
  };
}

// 프로퍼티 포함 여부 확인

// 프로퍼티 나열

// 프로퍼티 제거 or 삭제

// 단축 프로퍼티
let name = '선범';
let email = 'seonbeom2@euid.dev';
let authorization = 'Lv. 99';
let isLogin = true;

// 프로퍼티 이름 제한
// 예약어: class, if, switch, for, while, ...

// 객체가 프로퍼티를 포함하는 지 유무를 반환하는 유틸리티 함수 isEmptyObject 작성
function isEmptyObject() {
  return null;
}

/* ------------------------------------------- */
/* 배열 구조 분해 할당  destructuring assignments   */
/* ------------------------------------------- */

//순서를 바꿀 수 없음

const arr = [10, 100, 1000, 10_000];

const [a0, ...rest] = arr; //배열을 분해한 아이템의 변수 rest는 배열로 받음

const [first, second] = document.querySelectorAll('span');

// const first = spanList[0];
// const second = spanList[1];

/* -------------------------------------------- */
/* 객체 구조 분해 할당  destructuring assignments    */
/* --------------------------------------------- */
//순서상관없음 . key와 변수명이 동일해야함 => 변수명 o
const salaries = {
  함정민: 95,
  지유진: 110,
  이진용: 15,
  한상학: 300,
};
//함정민을 함으로 선언해서 사용  객체 추가 후 기본값 설정 가능
const { 함정민: 함, 지유진, 이진용, 한상학, 장주원 = 500 } = salaries;

console.log(장주원);
