`cordova build` を直接実行するのと似ていますが、 `ionic build` を実行して構成を使用してWebアセットを構築してから、わかりやすいチェックを提供します。

Cordova CLIに追加のオプションを渡すには、Ionic CLI引数の後に`--`セパレータを使用します。

Cordova CLIはAndroid[builds](https://cordova.apache.org/docs/en/latest/guide/platforms/android/index.html#using-flags)のプラットフォーム固有の引数のためのセパレータを必要とするので、Ionic CLIには追加のセパレータが必要ですが、iOS[builds](https://cordova.apache.org/docs/en/latest/guide/platforms/ios/index.html#using-flags)には必要ありません。セパレータの使用方法については、コマンド例を参照してください。フラグの使用を避けるには、**build.json**ファイルを作成して、ビルドで`--buildConfig`を使用することを検討してください。
