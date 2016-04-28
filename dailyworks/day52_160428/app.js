(function() {
  'use strict';

  window.onload = function() {
    var image = new Array();

    image[0] = new Image();
    image[0].src = "img/0.png";
    image[1] = new Image();
    image[1].src = "img/1.png";
    image[2] = new Image();
    image[2].src = "img/2.png";
    image[3] = new Image();
    image[3].src = "img/3.png";
    image[4] = new Image();
    image[4].src = "img/4.png";
    image[5] = new Image();
    image[5].src = "img/5.png";
    image[6] = new Image();
    image[6].src = "img/6.png";
    image[7] = new Image();
    image[7].src = "img/7.png";

    var cnt = 0;

    function slidesw()
    {
      if (document.getElementById)
      {
        document.slide.elements[0].disabled = true;
        document.getElementById("sd").src = image[cnt].src;
        cnt++;

        if (cnt <= 7)
        {
          var timer1 = setTimeout(slidesw, 300);
        }
        else
        {
          cnt = 0;
          document.slide.elements[0].disabled = false;
          clearTimeout(timer1);
        }

      }
    }

    document.slide.elements[0].addEventListener('click', slidesw);
  }
})();
