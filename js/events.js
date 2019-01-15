document.addEventListener('scroll', function(e) {
  var looksGoodDistance = document.querySelector('.opacity-layer').offsetHeight / 2;
  var shouldBeOpaque = window.pageYOffset > document.querySelector('.opacity-layer').offsetHeight - looksGoodDistance;
  if (shouldBeOpaque) {
    document.querySelector('header').style.background = 'rgba(0, 25, 50, 0.9)';
  } else {
    document.querySelector('header').style.background = 'rgba(0, 25, 50, 0)';
  }
});

document.getElementById('switch-icons').addEventListener('click', function(e) {
  document.querySelector('.mobile-menu-left').classList.remove('toggled');
  document.querySelector('.mobile-menu-right').classList.remove('toggled');
  
  var menu = document.querySelector('.mobile-menu');
  if (menu.classList.contains('left-handed')) {
    menu.classList.remove('left-handed');
    return;
  }
  menu.classList.add('left-handed');
})

document.getElementById('toggle-menu').addEventListener('click', function(e) {
  var targetMenuClass = document.querySelector('.mobile-menu').classList.contains('left-handed') ? '.mobile-menu-left' : '.mobile-menu-right'
  var rightMenu = document.querySelector(targetMenuClass);
  if (rightMenu.classList.contains('toggled')) {
    rightMenu.classList.remove('toggled');
    return;
  }
  rightMenu.classList.add('toggled');
});

document.querySelectorAll('.mobile-menu-right a').forEach(function(item) {
  item.addEventListener('click', function(e) {
    document.querySelector('.mobile-menu-right').classList.remove('toggled');
  })
});
