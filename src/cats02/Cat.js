export default class Cat {
  constructor(name) {
    this.name = name ? name : 'Tama';
    this.weight = 5;
  }

  eat(food) {
    this.weight += food.weight;
  }
}