(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = HtmlSpecialChars;

function HtmlSpecialChars(list){
    if (!(this instanceof HtmlSpecialChars)) {
        return new HtmlSpecialChars(list);
    }

    // privateメンバを列挙しないようにする
    Object.defineProperties(this,{
        _escapeList: {
            writable: true,
        },
        _unescapeList: {
            writable: true,
        },
        _escapeRegExp: {
            writable: true,
        },
        _unescapeRegExp: {
            writable: true,
        },
    });

    // 引数なしは受け流す
    if(list === void(0)) return;

    this.escapeList = list;
}

Object.defineProperties(HtmlSpecialChars.prototype,{
    escapeList: {
        enumerable: true,
        set: function(value){
            if(typeof(value) !== "object"){
                throw new TypeError("escapeListはObject型のプロパティです");
            }

            // privateメンバに格納
            var escapeList = this._escapeList = value;

            // {key => value}の連想配列から、{value => key}の逆連想配列を生成する
            var keys   = Object.keys(escapeList);
            var values = keys.map(function(key){
                return escapeList[key];
            });
            this._unescapeList = keys.reduce(function(obj,key,i){
                obj[values[i]] = key;
                return obj;
            },{});

            // キーの情報からエスケープする際の正規表現を作る
            this._escapeRegExp = new RegExp("(" + keys.map(escapeRegExp).join("|") + ")","g");

            // バリューの情報からアンエスケープする際の正規表現を作る
            this._unescapeRegExp = new RegExp("(" + values.map(escapeRegExp).join("|") + ")","g");
        },
        get: function(){
            return this._escapeList;
        },
    },
    unescapeList: {
        enumerable: true,
        get: function(){
            return this._unescapeList;
        },
    },
    escapeRegExp: {
        enumerable: true,
        get: function(){
            return this._escapeRegExp;
        },
    },
    unescapeRegExp: {
        enumerable: true,
        get: function(){
            return this._unescapeRegExp;
        },
    },
    escape: {
        value: function(str){
            var _this = this;
            return str.replace(this.escapeRegExp,function($0){
                return _this.escapeList[$0];
            });
        },
    },
    unescape: {
        value: function(str){
            var _this = this;
            return str.replace(this.unescapeRegExp,function($0){
                return _this.unescapeList[$0];
            });
        },
    },
});

// エスケープが必要な正規表現シーケンスをエスケープする
// (※サンプルコードなので実装ガバガバです)
function escapeRegExp(str){
    return str.replace(/[/*.[\]()|]/g,function($0){
        return "\\" + $0;
    });
}

},{}],2:[function(require,module,exports){
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

},{"./HtmlSpecialChars.js":1}]},{},[1,2]);
