'use strict';

// setTimeoutを使った、キューの登録・シングルスレッドの処理順の確認
(function() {
  console.log(1);
  setTimeout(() => {console.log('setTimeoutのcallback ' + 2)}, 0);
  console.log(3);
})();

// 同期処理の確認
(function() {

  // 関数定義
  const syncBuyApple = (payment) => {
    if (payment >= 150) {
      return {change: payment - 150, error: null};
    }
    else {
      return {change: null, error: 150 - payment + '円足りません'};
    }
  };

  // 同期処理
  const result1 = syncBuyApple(500);
  console.log('同期処理 start -------------------------');
  console.log('500円払いました。');
  if (result1.change !== null) {
    console.log('お釣りは' + result1.change + '円です。');
  }
  if (result1.error !== null) {
    console.log('エラーが発生しました:' + result1.error);
  }

  const result2 = syncBuyApple(result1.change);
  if (result2.change !== null) {
    console.log('2回目のお釣りは' + result2.change + '円です。');
  }
  if (result2.error !== null) {
    console.log('2回目でエラーが発生しました:' + result2.error);
  }

  const result3 = syncBuyApple(result2.change);
  if (result3.change !== null) {
    console.log('3回目のお釣りは' + result3.change + '円です。');
  }
  if (result3.error !== null) {
    console.log('3回目でエラーが発生しました:' + result3.error);
  }

  const result4 = syncBuyApple(result3.change);
  if (result4.change !== null) {
    console.log('4回目のお釣りは' + result4.change + '円です。');
  }
  if (result4.error !== null) {
    console.log('4回目でエラーが発生しました:' + result4.error);
  }

})();


// 非同期処理の確認
(function() {
  // 関数定義(お釣りを計算して、コールバック関数に渡す)
  const asyncBuyApple = (payment, callback) => {
    setTimeout(() => {
      if (payment >= 150) {
        callback(payment - 150, null);
      }
      else {
        callback(null, '金額が足りません。');
      }
    }, 1000);
  };

  // 非同期処理
  asyncBuyApple(500, (change, error) => {
    console.log('非同期処理 start -------------------------');
    console.log('500円払いました。');
    if (change !== null) {
      console.log('お釣りは' + change + '円です。');

      asyncBuyApple(change, (change, error) => {
        if (change !== null) {
          console.log('2回目のお釣りは' + change + '円です');

          asyncBuyApple(change, (change, error) => {
            if (change !== null) {
              console.log('3回目のお釣りは' + change + '円です。');

              asyncBuyApple(change, (change, error) => {
                if (change !== null) {
                  console.log('4回目のお釣りは' + change + '円です。');
                }
                if (error !== null) {
                  console.log('4回目でエラーが発生しました:' + error);
                }
              });

            }
            if (error !== null) {
              console.log('3回目でエラーが発生しました:' + error);
            }
          });

        }
        if (error !== null) {
          console.log('2回目でエラーが発生しました:' + error);
        }
      });

    }
    if (error !== null) {
      console.log('エラーが発生しました:' + error);
    }
  });

})();


// 非同期処理の確認(Promise)
(function() {

  // 関数を定義
  const promiseBuyApple = (payment) => {
    return new Promise((resolve, reject) => {
      if (payment >= 150) {
        resolve(payment - 150);
      }
      else {
        reject('金額が足りません。');
      }
    });
  };

  // 非同期処理(Promise)
  promiseBuyApple(400)
    .then( change => {
      console.log('非同期処理(Promise) start -------------------------');
      console.log('400円払いました。');
      console.log('お釣りは' + change + '円です');
      return promiseBuyApple(change);
    })
    .then( change => {
      console.log('お釣りは' + change + '円です');
      return promiseBuyApple(change);
    })
    .then( change => {
      console.log('お釣りは' + change + '円です');
      return promiseBuyApple(chagen);
    })
    .catch( error => {
      console.log('エラーが発生しました:' + error);
    });


})();
