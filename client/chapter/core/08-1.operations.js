/* ---------------- */
/* Operators        */
/* ---------------- */

// 연산자(演算子): 연산을 표시하기 위한 기호
// 피연산자(被演算子): 처리 대상

let a = '10';
let b = '30';

// 단항 연산자
let unary = +a; //40

// 이항 연산자
let binary = Number(a) + Number(b); //40
let binary2 = +a + +b; //40

// 삼항 연산자 - 값을 반환한다
let ternary = a >= 10 ? true : false; //true
let ternary2 = a >= 10 ? '사실입니다' : '거짓입니다'; //사실입니다
let ternary3 = a >= 10; //true

// 산술 연산자: 덧셈
let addition = 1 + 2;

// 산술 연산자: 뺄셈
let subtraction = 10 - 1;

// 산술 연산자: 곱셈
let multiplication = 20 * 2;

// 산술 연산자: 나눗셈
let division = 30 / 2;

// 산술 연산자: 나머지
let remainder = 10 % 3;

// 산술 연산자: 거듭 제곱
let power = 2 ** 53;
Math.pow(2, 53); // 거듭제곱 메서드

// JavaScript 연산자는 피연산자를 적절한 타입(유형)으로 강제 변환합니다.
let coercionTypeConversion = '9' * '3'; //27

// 대부분의 연산자는 기본 값으로만 작동합니다.
let onlyWorkDefaultValues = [1, 2, 3] + [4, 5, 6]; //1,2,34,56
let onlyWorkDefaultValues2 = [1, 2, 3].concat([4, 5, 6]); // [1, 2, 3, 4, 5, 6]

let first = [1, 2, 3];
let second = [4, 5, 6];

//spread syntax (전개 구문)
//spread operator (전개 연산자)
//최근의 배열 합성 방법!
console.log([...first, ...second]); // [1, 2, 3, 4, 5, 6]

// 연산자 우선 순위
// 단항(+,-) > 거듭제곱(**) > 곱셈(*) > 나눗셈(/) > 덧셈(+) > 뺄셈(-) > 할당(=)

// 선,후 증감 연산자
// ++, --
let counter = 0;

console.log(counter++); // 0
console.log(counter); // 1

counter += 1; //복합 할당 연산자
conter = counter + 1; //풀어서

// 아래 코드를 읽기 쉽도록 변경합니다.
// 그리고 연산자 우선 순위에 따라 연산 과정을 유추해보세요.

let count = 10;
// let total = (count % 4) * (count /= 2) + count ** 3;

let total = count % 4;
count = count / 2;
let pow = count ** 3;

total = total * count + pow;
