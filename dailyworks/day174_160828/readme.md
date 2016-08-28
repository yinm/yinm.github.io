#174 HTTPServer with Java

参考：簡単なHTTPサーバーを作る
http://qiita.com/opengl-8080/items/ca152658a0e52c786029#%E3%81%BE%E3%81%9A%E3%81%AF%E3%82%BD%E3%82%B1%E3%83%83%E3%83%88%E9%80%9A%E4%BF%A1%E3%81%8B%E3%82%89


自分の環境でポート番号80を使用すると、Javaの実行時にエラーが出たので、8001に変更した。

メッセージボディの確認も、コマンド内に "!" があるとうまく動かない（コマンドのhistroyが動いてる？)ので、以下のコマンドで動作確認した。
curl http://localhost:8001/ -X POST -d "Message Body"
