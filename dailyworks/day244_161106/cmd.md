## 前提
* すべてのコマンドは、`-u ユーザ名:APIトークン`のオプションをつけて実行している(認証を通すため)
* [Jenkins のジョブを外部からビルドするには API Token を利用する](http://blog.kyanny.me/entry/2014/12/20/020700)

## GETメソッド
`curl localhost:8080/api/json | jq .`

## ファイルに出力
`curl localhost:8080/api/json -o response`
`curl localhost:8080/api/json -O`
### 上記の2ファイルの差異の確認
diff json response; echo $?

## プログレスメータの表示
### プログレスバー風
`curl localhost:8080/api/json -o respose -#`
### 表示をやめる
`curl -s localhost:8080/api/json -O`
### エラーメッセージの有無
`curl -s localhost:8081/api/json`
`curl -Ss localhost:8081/api/json`

## HTTP Headerを確認する
### レスポンスのHeaderのみ取得
`curl -I -Ss 'localhost:8080/api/json?'`
### レスポンスのHeader, Bodyを取得
`curl -i -Ss 'localhost:8080/api/json?'`
### リクエスト・レスポンスのHeader, bodyを取得
`curl -v -Ss 'localhost:8080/api/json' | jq .`

## POSTメソッド
`curl -w '\n' 'http://localhsot:8080/createItem' -d 'name=sample&mode=hudson.model.FreeStyleProject&Submit=OK' -XPOST`
### 確認するコマンド
`curl -sS 'http://localhost:8080/api/json' | jq .jobs`




