// getDOM.js에서 가져온거
// eslint-disable-next-line object-curly-spacing
import { $p as $para } from './getDOM.js';

// event.js에서 만든거
// eslint-disable-next-line no-unused-vars
const $p = document.querySelector('p');

export const clickHandler = (e) => {
  $para.textContent = '하이!';
};

export default class Dog {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  info() {
    alert(`${this.name}: 저는 ${this.age}살입니다!`);
  }
}
