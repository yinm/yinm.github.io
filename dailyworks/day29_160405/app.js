'use strict';

window.onload = function() {
  var back = document.getElementById('back');
  var reload = document.getElementById('reload');
  var blog = document.getElementById('blog');

  back.addEventListener('click', function() {
    history.back();
  });

  reload.addEventListener('click', function() {
    location.reload(true);
  });

  blog.addEventListener('click', function() {
    location.href="http://corocoro.info/";
  });
};
