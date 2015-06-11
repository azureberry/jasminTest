describe("function-appendLi", function() {

  beforeEach(function() {
    document.body.innerHTML = window.__html__['src/html/index.html'];
  });

  it("追加されたli要素のテキストは'karma!'となるべし", function() {
    var btn, appendedLi;
    btn = document.getElementById('btn');
    btn.click();
    appendedLi = document.getElementById('list').firstElementChild;
    expect(appendedLi.innerHTML).toEqual('karma!');
  });

  it("追加されたli要素のテキスサイズは20pxとなるべし", function() {
    var btn, appendedLi;
    btn = document.getElementById('btn');
    btn.click();
    appendedLi = document.getElementById('list').firstElementChild;
    expect(Number(appendedLi.style.fontSize.replace('px', ''))).toEqual(20);
  });

  it("li要素は複数追加できるべし", function() {
    var btn, liCnt;
    btn = document.getElementById('btn');
    btn.click();
    btn.click();
    btn.click();
    liCnt = document.getElementById('list').childElementCount;
    expect(liCnt).toEqual(3);
  });
});