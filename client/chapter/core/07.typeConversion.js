/* --------------------- */
/* Type Conversion       */
/* --------------------- */

/* 데이터 → 문자 ----------------------------------------------------------- */

// number
const YEAR = 2024;

console.log(typeof String(YEAR));
console.log(typeof YEAR + '');

// undefined, null
let days = null;
console.log(days + '');

let friends;
console.log('friends', friends);

// boolean

/* 데이터 → 숫자 ----------------------------------------------------------- */

// undefined

let friend;
console.log('Number', Number(friend));

// null

let money = null;
console.log('money', Number(money));

// boolean

let isMarried = false;
console.log('isMarried', Number(isMarried));

// string
let num = '100'; //문자
console.log(Number(num)); //숫자 명시적 형변환
console.log(num * 1); // 묵시적 형변환
console.log(num / 1); // 묵시적 형변환
console.log(+num); // 묵시적 형변환

// numeric string

const width = '120.5px';
console.log(Number(width)); //NaN 출력
console.log(parseInt(width, 10)); //소수점빼고 출력
console.log(parseFloat(width, 10)); //소수점까지 출력

/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''
// 위에 나열한 것 이외의 것들
