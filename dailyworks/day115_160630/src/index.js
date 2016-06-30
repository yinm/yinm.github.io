var HtmlSpecialChars = require("./HtmlSpecialChars.js");

var h = new HtmlSpecialChars({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
});
console.log("エスケープ");
var escapedStr = h.escape('<script>alert("XSS");</script>');
console.log(escapedStr); // '&lt;script&gt;alert("XSS");&lt;/script&gt;'
console.log("アンエスケープ");
var unescapedStr = h.unescape(escapedStr);
console.log(unescapedStr); // '<script>alert("XSS");</script>;'

console.log("ファイルを書き換えたぞ監視しろ");
