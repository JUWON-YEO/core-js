/* ----------------------------- */
/* Prototype and inheritance     */
/* ----------------------------- */

// 프로토타입 상속(prototypal inheritance)을 사용하여 객체를 확장합니다.

// 여러가지 동물들을 키우는 게임 : 고양이,강아지,호랑이,사자,늑대,여우

//객체의 프로토타입 [[prototype]]
const animal = {
  legs: 4,
  tail: true,
  stomach: [],
  set eat(food) {
    // stter - this (나)stomach 에 food를 집어넣음
    this.stomach.push(food);
  },
  get eat() {
    //getter
    return this.stomach;
  },
};

//get set 는 함수처럼 보이지만 객체의 프로퍼티를 실행하는거처럼 사용
// animal.eat -> getter
// animal.eat = '고기' -> setter

const tiger = {
  pattern: '호랑이무늬',
  hunt(target) {
    this.prey = target;
    return `${target}에게 조용히 접근한다.`;
  },
  __proto__: animal,
};

const 백두산호랑이 = {
  color: 'white',
  name: '백돌이',
  __proto__: tiger,
};

// 생성자 함수
//객체 대량 생산

function Animal() {
  //생성자 함수
  this.legs = 4;
  this.tail = true;
  this.stomach = [];
  this.getEat = function () {
    return this.stomach;
  };
  this.setEat = function (food) {
    this.stomach.push(food);
  };
}

//const a1 = new Animal();

function Tiger(name) {
  Animal.call(this);
  this.name = name;
  this.pattern = '호랑이무늬';
  this.hunt = function (target) {
    return `${target}에게 조용히 접근한다.`;
  };
}

Tiger.bark = function (sound) {
  return sound;
};

//Tiger.prototype = a1; //Animal에서 생선된 객체 a1 을 연결

const 금강산호랑이 = new Tiger('금순이');

/* 함수의 매서드 (함수의 능력 */

// ----------- call의 능력
// call this 인수를 전달해서 실행
// call 첫번째 인수는 함수안에 this로 전달
// 그 뒤로 들어오는 인수는 인자(매개변수)로 전달

function sum(a, b, c) {
  console.log(this);
  return a + b + c;
}

sum.call('hello', 1, 1, 1);

const user = {
  sayHi() {
    function sayBye() {
      console.log(this);
    }
    sayBye.call(this);
  },
};

// ----------- apply의 능력
// 인수를 배열로 전달
// call은 직접 풀어서 전달하느냐 배열로 전달하느냐의 차이

function sum(a, b, c) {
  console.log(this);
  return a + b + c;
}

sum.apply('hello', [1, 1, 1]);

// ----------- bind의 능력
// 바로 실행하지 않음
// call처럼 들어가지만 실행은 안됨
// 따로 저장해서 원할 때 호출해서 사용

const arr = [1, 2, 3, 4];
function sum(a, b, c) {
  console.log(this);
  return a + b + c;
}

//first.addEventListener('click',b)// 예로 클릭이벤트 실행 시 b 함수 사용

// sum.call('hello', 1, 2, 3); // this를 전달함 인수를 개별로 받음 => 함수 실행 o
// sum.apply('hello', 1, 2, 3); // this를 전달함 인수를 배열로 받음 => 함수 실행 o

// const b = sum.bind('hello', 1, 2, 3); // this를 전달함 인수를 개별로 받음 => 함수 실행 안함
