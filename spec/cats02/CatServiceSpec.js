import CatService from '../../src/cats02/CatService.js'

describe('CatService', () => {
  let service = new CatService();

  // ネコモック
  class Cat {
    constructor(name) {
      this.name = name;
      this.weight = 5;
      this.eat = food => {}
    }
  }

  // 食い物モック
  class Food {
    constructor(weight) {
      this.weight = weight;
    }
  }

  // モック注入！
  CatService.__Rewire__('Cat', Cat);
  CatService.__Rewire__('Food', Food);

  describe('.checkin()', () => {
    beforeEach(() => {
      // 検査ごとにserviceを初期化
      service = new CatService();
    });

    it('別名のネコを2匹泊めたらcatsには２匹いるべし', () => {
      service.checkin(new Cat('Tama'));
      service.checkin(new Cat('Mike'));
      expect(Object.keys(service.cats).length).toBe(2);
    });

    it('同名のネコのお泊まりは残念ながら受け付けぬべし', () => {
      service.checkin(new Cat('Mike'));
      service.checkin(new Cat('Mike'));
      expect(Object.keys(service.cats).length).toBe(1);
    });
  });

  describe('.checkout()', () => {
    // あえてbeforeEachせずに直上の状態を引き継いでみる

    it('指定したネコを返却すべし', () => {
      let returnedCat;
      service.checkin(new Cat('Tama'));
      returnedCat = service.checkout('Tama');
      // Mikeだけが残ってるはず
      expect(Object.keys(service.cats).length).toBe(1);
      expect(Object.keys(service.cats)[0]).toBe('Mike');
      // Tamaが返却されるはず
      expect(returnedCat.name).toBe('Tama');
    })
  });

  describe('.feed()', () => {
    beforeEach(() => {
      service = new CatService();
    });

    it('Cat.eatメソッドが呼ばれるべし', () => {
      const mike = new Cat('Mike');
      spyOn(mike, 'eat');
      service.checkin(mike);
      service.feed('Mike', new Food(3));
      expect(mike.eat).toHaveBeenCalled();
    });
  });

  describe('.newCat()', () => {
    it('新しいネコを生成すべし', () => {
      expect(service.newCat('Mike') instanceof Cat).toBeTruthy();
    });
  });
});