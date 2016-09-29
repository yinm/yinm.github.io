'use strict';

window.addEventListener('load', ()=> {
  function out(s) {
    return (e) => {
      e.stopPropagation();
      console.log(s);
    }
  }

  document.getElementById('outer').addEventListener('click', out('outer'));
  document.getElementById('inner').addEventListener('click', out('inner'));

});
