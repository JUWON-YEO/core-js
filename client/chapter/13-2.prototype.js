/* ----------------------------- */
/* Classes                       */
/* ----------------------------- */

// 앞서 함수로 정의한 내용들을 class문법을 사용해 재정의 합니다.

class Animal {
  constructor(name) {
    this.name = name;
    this.legs = 4;
    this.tail = true;
    this.stomach = [];
  }

  get eat() {
    return this.stomach;
  }
  set eat(food) {
    this.stomach.push(food);
  }
}

const a = new Animal('포동이');

class Tiger extends Animal {
  //Animal에서 확장시켜서 Tiger를 만듦

  static option = {
    varsion: '1.0.0',
    company: '8b-studio',
    ceo: '심선범',
  };

  constructor(name) {
    super(name);
    this.pattern = '호랑이무늬';
  }
  static bark(sound) {
    //static 메서드로 선언
    return sound + '🐱';
  }

  hunt(target) {
    return `${target}에게 조용히 접근한다.`;
  }
}

const 호랑이 = new Tiger('호돌쓰');
