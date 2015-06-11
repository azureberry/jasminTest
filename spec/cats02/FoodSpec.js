import Food from '../../src/cats02/Food.js'

describe('Food constructor', () => {
  it('ちくわのweightは1であるべし', () => {
    expect(new Food('chikuwa').weight).toBe(1);
  });
  it('魚のweightは2であるべし', () => {
    expect(new Food('fish').weight).toBe(2);
  });
  it('ビーフのweightは3であるべし', () => {
    expect(new Food('beef').weight).toBe(3);
  });
  it('未設定なFoodのweightは0であるべし', () => {
    expect(new Food('Daikon').weight).toBe(0);
  });
});