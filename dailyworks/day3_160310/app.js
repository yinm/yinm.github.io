angular.module('myApp', [])
  .controller('myCtrl', [function() {
    this.word = 'What day is it today?';
    this.currentLocation = 0;
    this.answer = '';

    this.onpress = function($event) {
      var key = $event.which;

      // 入力が正しい場合に、文字を_に置き換える。
      if (String.fromCharCode(key) === this.word[this.currentLocation]) {
        this.currentLocation++;
        var placeholder = '';
        for (var i = 0; i < this.currentLocation; i++) {
          placeholder += '_';
        }
        this.word = placeholder + this.word.substring(this.currentLocation);

        // 全部入力が完了したら、回答する。
        if (this.currentLocation === this.word.length) {
          this.word = "";
          this.answer = new Date();
        }
      }
    };
  }]);
