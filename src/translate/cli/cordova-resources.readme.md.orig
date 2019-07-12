Ionicでは、Cordovaプラットフォーム用のソースイメージ(**.png**, **.psd**, or **.ai**)から、完全なサイズのアイコンとスプラッシュスクリーンを自動的に生成することができます。

アイコンのソースイメージは、 **1024×1024px** 以上で、**resources/icon.png** に配置することが理想的です。スプラッシュ画面のソースイメージは、少なくとも**2732×2732px**で、**resources/splash.png**にあることが理想的です。`ionic start`を使用した場合、すでに **resources/** ディレクトリにデフォルトのIonicリソースが存在しているはずですが、上書きすることができます。

各 **resources/<platform>/** ディレクトリに配置することで、プラットフォーム固有のアイコンとスプラッシュ画面を生成することもできます。例えば、Android用のアイコンを生成するには、**resources/android/icon.png**に画像を配置します。

デフォルトでは、このコマンドはソースイメージが変更されていないリソースを再生成しません。この機能を無効にし、生成されたイメージを常に上書きするには、`--force` を使用します。

最適な結果を得るには、スプラッシュスクリーンのアートワークが画像の中央にある正方形(**1200×1200ピクセル**)の中に収まるようにします。スプラッシュ画面のテンプレートとして **[https://code.ionicframework.com/resources/splash.psd](https://code.ionicframework.com/resources/splash.psd)** を使用できます。

`ionic cordova resources` は自動的に **config.xml** を更新します。生成されたイメージの変更を反映するために、Cordovaはこの変更を構成します。

Cordovaのリファレンスマニュアル:
- アイコン: **[https://cordova.apache.org/docs/en/latest/config_ref/images.html](https://cordova.apache.org/docs/en/latest/config_ref/images.html)**
- スプラッシュスクリーン: **[https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-splashscreen/](https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-splashscreen/)**

このコマンドはIonicサーバを使用しており、無料のIonicアカウントにログインする必要があります。`ionic login` を使用してログインします。

実験的な `--cordova-res` オプションを使うと、 `ionic cordova resources` はリソースの生成にローカルの `cordova-res` [utility](https://github.com/ionic-team/cordova-res) を利用します。
