/* ------------------- */
/* Logical Operators   */
/* ------------------- */

let a = 10;
let b = '';
let value = Boolean(b);

// 논리곱(그리고) 연산자 F&&
let AandB = a && b;

// a &&= b  논리곱 할당 연산자

// 논리합(또는) 연산자 T||
let AorB = a || b;

// a ||= b 논리합 할당 연산자

// 부정 연산자
let reverseValue = !value;

// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy = true && '' && [] && { thisIsFalse: false };

// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy = false || '' || [2, 3].length || { thisIsTruthy: true };

/*
프롬프트(prompt) 대화상자를 이용해 간이 로그인 창을 구현해보세요.

사용자가 "Admin"를 입력하면 비밀번호를 물어보는 프롬프트 대화상자를 띄워주세요. 이때 아무런 입력도 하지 않거나 Esc를 누르면 "취소되었습니다."라는 메시지를 보여주세요. 틀린 비밀번호를 입력했다면 "인증에 실패하였습니다."라는 메시지를 보여주세요.

비밀번호 확인 절차는 다음과 같습니다.

맞는 비밀번호 "TheMaster"를 입력했다면 "환영합니다!"라는 메시지를 보여주세요.
틀린 비밀번호를 입력했다면 "인증에 실패하였습니다."라는 메시지를 보여주세요.
빈 문자열을 입력하거나 입력을 취소했다면 "취소되었습니다."라는 메시지를 보여주세요.
순서도는 다음과 같습니다.
*/

let userName = prompt('누구세요?');

if (userName === 'Admin') {
  let userPassword = prompt('비밀번호는?');
  if (userPassword === 'theMaster') {
    alert('Welcome');
  } else if (userPassword === 'null') {
    alert('취소');
  } else {
    alert('비밀번호가 맞지 않습니다');
  }
} else if (userName === null) {
  alert('취소되었습니다');
} else {
  alert('누구신지');
}
