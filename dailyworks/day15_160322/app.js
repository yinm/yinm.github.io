var Kiyoshi = (function () {
    function Kiyoshi() {
    }
    Kiyoshi.prototype.iitaidake = function () {
        console.log(Kiyoshi.zun + Kiyoshi.doko + Kiyoshi.kiyoshi);
    };
    Kiyoshi.zun = "ズン,ズン,ズン,ズン,";
    Kiyoshi.doko = "ドコ,";
    Kiyoshi.kiyoshi = "キ・ヨ・シ！";
    return Kiyoshi;
}());
var zndkkys = new Kiyoshi;
zndkkys.iitaidake();
