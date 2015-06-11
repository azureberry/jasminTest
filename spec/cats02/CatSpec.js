import Cat from '../../src/cats02/Cat.js'

describe('Cat', function () {
  describe('.constructor()', () => {

    it('デフォルト名前はTamaになるべし', () => {
      expect(new Cat().name).toBe('Tama');
    });

    it('名前を指定すればその名が設定されるべし', () => {
      expect(new Cat('Mike').name).toBe('Mike');
    });

    it('最初の体重は5となるべし', () => {
      expect(new Cat().weight).toBe(5);
    });
  });

  describe('.eat()', function() {
    it('食べ物のweighだけネコの体重が増加すべし', () => {
      var c1 = new Cat();
      var c2 = new Cat();
      c1.eat({weight: 8});
      expect(c1.weight - c2.weight).toBe(8);
    });
  });
});