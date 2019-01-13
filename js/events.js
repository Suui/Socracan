document.addEventListener('scroll', function(e) {
  var looksGoodDistance = document.querySelector('.opacity-layer').offsetHeight / 2;
  var shouldBeOpaque = window.pageYOffset > document.querySelector('.opacity-layer').offsetHeight - looksGoodDistance;
  if (shouldBeOpaque) {
    document.querySelector('header').style.background = 'rgba(0, 25, 50, 0.75)';
  } else {
    document.querySelector('header').style.background = 'rgba(0, 25, 50, 0)';
  }
})

(function(header) {
  'use strict';
  document.getElementById('toggle').addEventListener('click', (e) => {
    e.preventDefault();
    header.classList.toggle('expanded');
  });
  header.querySelectorAll('li').forEach(e => {
    e.addEventListener('click', () => {
      header.classList.remove('expanded');
    });
  });
}(document.querySelector('header')));
