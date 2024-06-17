//
//
//
//
// 함수는 자신이 태어난 환경을 기억합니다 가비지 컬렉터는 함수의 실행이 끝나면 모든 메모리를 수거해가는데 함수의 변수를 기억하기 위해 클로저를 사용한다. 클로저랑 내부함수가 외부 변수에 대한 참조를 할 수 있는 환경을 제공해주는 함수이다.

function earth() {
  let water = true;
  let gravity = 10;

  return function (value) {
    gravity = value;
    return;
  };
}

const ufo = earth();

ufo(-10);

const button = document.querySelector('button');

/* normal function */
// function handleClick(){

//   let isClicked = false;

//   function inner() {
//     if(!isClicked){

//       document.body.style.background = 'orange'
//     }else{

//       document.body.style.background = 'white'
//     }

//     isClicked = !isClicked;
//   }

//   return inner;
// }

// IIFE
/* arrow function */
const handleClick = (() => {
  let isClicked = false;

  return () => {
    if (!isClicked) {
      document.body.style.background = 'orange';
    } else {
      document.body.style.background = 'white';
    }

    isClicked = !isClicked;
  };
})();

button.addEventListener('click', handleClick);

function usestate(init) {
  let value = init;

  function read() {
    return value;
  }

  function write() {
    value = newValue;
  }

  return [read, write];
}

//객체 구조분해 할당
const [getNumber, setNumver] = usestate(10);

// const getter = result[0]
// const setter = result[1]
