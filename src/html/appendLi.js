function appendLi() {
  var ul = document.getElementById('list'),
      li = document.createElement('li');
  li.innerHTML = 'karma!';
  li.style.fontSize = '20px';
  ul.appendChild(li);
}