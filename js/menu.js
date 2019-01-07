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
