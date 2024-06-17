// 문제 1
//객체와 키를 인수로 받아, 객체에 해당 키가 존재하면 그 키에 해당하는 값을 반환하고, 존재하지 않으면 에러를 발생시키는 함수를 작성하세요.

function getValueAtObject(obj, key) {
  let value = obj[key];
  // value가 참인 경우 값을 리턴 아닌 경우 에러 출력
  if (value) {
    return value;
  } else if (!value) {
    throw new Error('키가 존재하지 않습니다');
  }
}

const person = {
  name: 'Alice',
  age: 25,
  city: 'Wonderland',
};

// console.log(getValueAtObject(person, 'name')); // 'Alice'
// console.log(getValueAtObject(person, 'age')); // 25
// console.log(getValueAtObject(person, 'city')); // 'Wonderland'
// console.log(getValueAtObject(person, 'country')); // Error !

// 문제 2
// 배열과 인덱스를 인수로 받아, 인덱스가 배열의 유효한 범위 내에 있으면 그 인덱스에 해당하는 값을 반환하고, 유효하지 않은 인덱스일 경우 에러 메시지를 반환하는 함수를 작성하세요.
// - 배열의 인덱스는 0부터 시작하며, 주어진 인덱스가 배열의 유효한 범위 내에 있는지 확인해야 합니다.
// - 인수로 받은 대상이 배열이 아닐 경우 에러를 생성하고 생성한 에러를 반환해야 합니다.
// - 유효한 인덱스일 경우 해당 인덱스의 값을 반환하고, 그렇지 않으면  에러를 생성하고 생성한 에러를 반환해야 합니다.

function getNumberAtArray(arr, index) {
  //isArray로 배열이 맞는지 확인. 배열이 아닐 경우 에러 출력
  if (!Array.isArray(arr)) {
    throw new Error('배열이 아님!');
  }
  // index값이 0보다 크거나 같고 배열의 길이보다 작은 경우 배열의 인덱스 값을 출력 아닐 경우 에러를 출력
  if (index >= 0 && index < arr.length) {
    return arr[index];
  } else {
    throw new Error('유효한 인덱스가 아님!');
  }
}

const numbers = [10, 20, 30, 40, 50];

console.log(getNumberAtArray(numbers, 2)); // 30
console.log(getNumberAtArray(numbers, 4)); // 50
console.log(getNumberAtArray(numbers, 5)); // Error!
console.log(getNumberAtArray(numbers, -1)); // Error!
