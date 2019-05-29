`ionic capacitor run` will do the following:
- `ionic build` (もしくは `--livereload` オプションを指定してdevサーバを起動)
- Webアセットを指定したネイティブプラットフォームにコピー
- ネイティブプロジェクトのIDEを開きます (iOSではXcode, AndroidではAndroid )

Webアセットと構成がネイティブプロジェクトにコピーされると、ネイティブIDEを使用してデバイスおよびエミュレータ/シミュレータ上でアプリケーションを実行できます。ただし、プログラムによるネイティブプロジェクトの構築と起動はまだサポートされていません。

AndroidとiOSでは,ブラウザ開発ツールを使ってデバイス上にリモートデバッグを設定することができます。[docs](https://ionicframework.com/docs/developer-resources/developer-tips)をご覧ください。 
