'use strict';
var globalVal = "Global";
let letGlobalVal = "letGlobal";

(function() {
  window.addEventListener("load", function(e) {
    var hoist = document.getElementById("hoist");
    hoist.insertAdjacentHTML("beforeend", "<p style='font-weight: bold;'>varを使った場合</p>")
    hoist.insertAdjacentHTML("beforeend", globalVal + "<br>");
    var globalVal = "Local";
    hoist.insertAdjacentHTML("beforeend", globalVal + "<br>");

    let lethoist = document.getElementById('letHoist');
    letHoist.insertAdjacentHTML("beforeend", "<p style='font-weight: bold;'>letを使った場合</p>")
    letHoist.insertAdjacentHTML("beforeend", letGlobalVal + "<br>");
    letHoist.insertAdjacentHTML("beforeend", "letではホイストが起きないため、次の文を加えると、エラーになる。<br>");
    letHoist.insertAdjacentHTML("beforeend", 'let letGlobalVal = "letLocal";');
  }, false);
})();
