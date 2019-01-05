(function() {
  'use strict';
  const header = document.querySelector('header');
  document.getElementById('toggle').addEventListener('click', (e) => {
    e.preventDefault();
    header.classList.toggle('expanded');
  });
  document.querySelectorAll('header li').forEach(e => {
    e.addEventListener('click', () => {
      header.classList.remove('expanded');
    });
  });
}());
