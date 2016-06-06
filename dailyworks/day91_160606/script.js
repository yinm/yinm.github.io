// コールバック関数の定義
var trapCard = function() {
  console.log('トラップカード発動！');
};
var sacrificeCard = function(sacriiceName) {
  console.log(sacriiceName + 'を生贄にするぜ！');
};
// 俺のターン！と表示してから、引数の関数（コールバック関数）を実行する関数
var myTurn = function(callback) {
  console.log('俺のターン！');
  callback();
}

// 呼び出し
myTurn(trapCard);

// コールバック関数自体に引数を渡す書き方。
myTurn(function() {
  sacrificeCard('ブルーアイズホワイトドラゴン');
});

// bindを使用して、コールバック関数自体に引数を渡す
myTurn(sacrificeCard.bind(null, 'ブルーアイズ'));
