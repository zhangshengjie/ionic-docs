`cordova run` または `cordova emulate` を直接実行するのと同様ですが、デバイスまたはエミュレータに配備する前に `ionic build` を実行します。オプションで`--livereload`オプションを指定すると、livereload機能のために `ionic serve` でdevサーバを起動します。

AndroidとiOSでは、ブラウザのdeveloperツールを使ってデバイス上にリモートデバッグを設定することができます。詳しくは [docs](https://ionicframework.com/docs/developer-resources/developer-tips) をご覧ください。

`ionic cordova build` と同様に、 `--` セパレータを使用してCordova CLIに追加のオプションを渡すことができます。追加のオプションをdevサーバに渡すには、`ionic serve`と`--livereload-url`オプションの使用を検討してください。

実験的な `--native-run` フラグを使うと、このコマンドはまずCordovaを使ってアプリを構築し、次にCordovaの代わりに`native-run` [utility](https://github.com/ionic-team/native-run)を使ってデバイス上で実行します。
