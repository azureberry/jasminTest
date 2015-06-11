import Cat from './Cat'
import Food from './Food'

export default class catService {
  constructor() {
    this.cats = {}
  }

  // お泊まりサービスをやっています
  checkin(cat) {
    this.cats[cat.name] = cat;
  }

  checkout(name) {
    const cat = this.cats[name];
    delete this.cats[name];
    return cat;
  }

  // 依頼された猫に指定の餌をあげるサービスです
  feed(name, foodName) {
    this.cats[name].eat(new Food(foodName));
  }

  // 猫を産んでお客様に差し上げるサービスです
  newCat(name) {
    return new Cat(name);
  }
}