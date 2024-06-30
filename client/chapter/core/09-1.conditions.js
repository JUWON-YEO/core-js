/* ---------------- */
/* Condition        */
/* ---------------- */

// let result = prompt('자바스크립트의 ‘공식’ 이름은 무엇일까요?');

// if (result == 'ECMAScript') {
//   alert('정답입니다!');
// } else {
//   alert('모르셨나요? 정답은 ECMAScript입니다!');
// }

// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

// 영화 봤니?
// 영화 볼거니?
// let didWatchMovie = confirm('너 그 영화 봤어?');

// if (didWatchMovie) {
//   console.log('그 영화 재밌더라');
// } else {
//   let goingToWatchMovie = confirm('영화 볼거니?');

//   if (goingToWatchMovie) {
//     let withWho = prompt('누구랑볼거니');

//     if (withWho == 'you') {
//       console.log('그래');
//     } else {
//       console.log('왜 나랑 안봐');
//     }
//   } else {
//     console.log('그래2');
//   }
// }

let didWatchMovie = 'no';
let goingToWatchMovie = 'yes';

const massage = didWatchMovie.includes('yes')
  ? '그 영화 참 재밌더라'
  : goingToWatchMovie.includes('yes')
    ? '언제 볼까'
    : '그래..';

function render(node, isActive) {
  let template = `
    <div>${isActive ? '안녕~~!!' : '잘가~~!!'}</div>
`;
  node.insertAdjacentHTML('beforeend', template);
}
// if 문(statement)

// else 절(clause)

// else if 복수 조건 처리

// 조건부 연산자

// 멀티 조건부 연산자 식
