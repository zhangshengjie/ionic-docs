---
previousText: 'Environment Setup'
previousUrl: '/docs/installation/environment'
nextText: 'Android Setup'
nextUrl: '/docs/installation/android'
---

# iOS セットアップ

iOSをターゲットにするには、追加の環境設定が必要です。残念ながら、iOSアプリはmacOS上でしか作成できません。

## Xcode

[Xcode](https://developer.apple.com/xcode/) ネイティブiOSアプリを作成するためのIDEです。iOS SDKとXcodeのコマンドラインツールが含まれています。XcodeはAppleアカウントをつかって [無料ダウンロード](https://developer.apple.com/download/) できます。App Storeからもインストールできます。

Once Xcode is installed, make sure the command-line tools are selected for use:

```shell
$ xcode-select --install
```

### Development Team の設定

すべてのiOSアプリは、開発用であっても code signed （署名）されている必要があります。幸いなことに、Xcodeは automatic code signing によってこれを容易にします。唯一の前提条件はApple IDを用意していることです。

Xcodeを開き、 **Xcode** &raquo; **Preferences** &raquo; **Accounts** に移動します。アカウントがリストにない場合は、Apple IDを追加してください。ログインすると、Personal TeamがApple IDのチームリストに表示されます。

![Xcode Accounts](/docs/assets/img/installation/ios-xcode-accounts.png)

### iOS Simulator の作成

iOSシミュレータは、Mac上でiOSデバイスをエミュレートします。次のドキュメントはiOSシミュレータをセットアップするための簡単な方法です。詳しくは、 [Apple's documentation](https://developer.apple.com/library/content/documentation/IDEs/Conceptual/simulator_help_topics/Chapter/Chapter.html) を参照してください。.

Xcodeを開き、**Window** &raquo; **Devices and Simulators** に移動します。**iPhone 11** のシュミレーターがまだ存在しない場合は作成します。

![iOS Simulators](/docs/assets/img/installation/ios-xcode-simulators-setup.png)

## Cordova Setup

Additional setup is required for Cordova to support programmatic builds. This section is not necessary for Capacitor.

### ios-sim & ios-deploy

[`ios-sim`](https://github.com/phonegap/ios-sim) と [`ios-deploy`](https://github.com/phonegap/ios-deploy) は開発中のiOSシミュレータとiOSデバイスにアプリケーションを配備するユーティリティです。それらは [npm](/docs/faq/glossary#npm) を使って、グローバルにインストールすることができます。

```shell
$ npm install -g ios-sim
$ npm install -g ios-deploy
```
