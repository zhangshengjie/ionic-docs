---
previousText: 'Security'
previousUrl: '/docs/faq/security'
contributors:
  - rtpHarry
  - FdezRomero
  - brandyscarney
---

# 開発者向けのヒント

## Resolving Permission Errors

`EACCES` permission errors can occur when packages are installed globally. If this is the case, npm may need to be set up to operate without elevated permissions.

> Using `sudo` with npm is **not recommended** because it can lead to further complications.

This guide offers two options for resolving permission issues. See the [npm docs](https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally) for full documentation and additional options.

### Option 1

The best way to avoid permission issues is to reinstall NodeJS and npm using a node version manager.

This guide will document [nvm](https://github.com/nvm-sh/nvm) installation and usage. See the [nvm docs](https://github.com/nvm-sh/nvm#installation-and-update) for full documentation. See the [npm docs](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm#using-a-node-version-manager-to-install-nodejs-and-npm) for additional options and instructions for Windows.

1. Install nvm.

    ```shell
    $ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
    ```

1. New terminals will now use nvm. To verify, open a new terminal and run the following. If something prints, the installation was successful.

    ```shell
    $ command -v nvm
    ```

1. To download and install the latest LTS release of NodeJS, run:

    ```shell
    $ nvm install --lts
    ```

1. Set the newly installed NodeJS as the default environment:

    ```shell
    $ nvm alias default lts/*
    ```

1. New terminals will now use the nvm-controlled NodeJS. To verify:

    ```shell
    $ node -v  # will print the version installed above
    $ which npm  # will print a path somewhere within the ~/.nvm folder
    ```

Global packages will now be installed in the `~/.nvm` directory, so permission errors should no longer occur as long as `npm` is used _without_ `sudo`.

### Option 2

<small><em>Does not apply to Windows</em></small>

Change the owner of npm's directories to the current user:

```shell
$ sudo chown -R $(whoami) /usr/local/{lib/node_modules,bin,share}
$ sudo chown -R $(whoami) ~/.npm ~/.npmrc
```

Since these global directories are no longer owned by `root`, packages can be installed globally _without_ `sudo`.

## 依存モジュールの更新

To update an [npm](https://www.npmjs.com/) dependency, run the following, where `<package-name>` is the package to update:

```shell
$ npm install <package-name>@<version|latest> --save
```

例えば、`@ionic/angular` パッケージを `最新` リリースのものに更新するには、以下を実行してください:

```shell
$ npm install @ionic/angular@latest --save
```

npm は最初に `package.lock.json` からパッケージのバージョンを読み込みにいきますので、パッケージを更新する際は CLI を利用することをおすすめします。

## エディタ

選ぶべきエディタがたくさんあります。

- [Ionic Studio](https://ionicframework.com/studio?utm_source=docs&utm_medium=website&utm_campaign=studio%20launch): the fastest and easiest way to build Ionic apps
- [VS Code](https://code.visualstudio.com): a popular and free text editor made by Microsoft
- [Atom](https://atom.io): a hackable text editor made by GitHub
- [WebStorm](https://www.jetbrains.com/webstorm/): a powerful non-free editor by JetBrains

## デバッガの利用

`デバッガ` というキーワードはアプリケーションをデバッグするために利用されます。ほとんどのブラウザが`デバッガ`ステートメントに直面する時、 実行中の JavaScript の処理は停止され、ブラウザはデバッガをロードします。これはアプリケーションに"ブレークポイント"をセットするために使用されます。

例えば、ある関数が正しい値を返さない時は、デバッガを使用してコードをステップ実行し、変数を調べることができます。

```javascript
function myBrokenFunction() {
  debugger;
  // do other stuff
}
```

When an app runs, it will pause at this function. From there, the developer tools can be used to run pieces of JavaScript, line by line, and inspect where exactly the function breaks.

## モードの変更

デフォルトでは、アプリケーションがブラウザで表示されると、Ionic は MD モードを適用します。しかし、Ionic コンポーネントはそれぞれのプラットフォームに応じて接続されるため、そのアプリケーションが iOS でどのように見えているか確認できると便利です。そのために、アプリケーションが起動しているURL に `?ionic:mode=ios` を追加します: `http://localhost:8100/?ionic:mode=ios<`

> しかし、どのプラットフォームが現在使用されているかをブラウザがどのように認識するか、ということは変わらないでしょう。プラットフォームはデバイスの検出とユーザーエージェントの検査によって決定されます。そのため、プラットフォームを変更するには、ユーザーエージェントを変更する必要があります。これを行うには、Chrome DevTools を開き、<kbd>Ctrl+Shift+i</kbd>(Mac では <kbd>Cmd+Option+I</kbd>) でデバイスのモードをオンに切り替えでください。

![別のモードのアプリケーション](/docs/assets/img/faq/tips/change-device-platform.png)

デバイスのドロップダウンからデバイスを選択すると viewport の大きさと同様に、ユーザーエージェントも変更されます。

## iOS シミュレータを使用する

iOS シミュレータは実際のデバイスに届く前にアプリケーションのテストとデバッグを可能にします。

シミュレータを利用可能にする前に、[Xcode](https://developer.apple.com/xcode/download/)、アップルの IDE をインストールする必要があります。

[Ionic CLI](/docs/cli) を用いて、シミュレータ上の現在のディレクトリでアプリケーションを実行可能にします:

```shell
$ ionic cordova emulate ios -lc
```

`-lc` フラグを渡すことでライブリロードを有効にし、かつログコンソールををターミナルに出力することができます。

また Xcode を利用することでエミュレータを起動し、アプリケーションをデバッグすることもできます。

Xcode を開き、`../path-to-app/platforms/ios/myApp.xcodeproj` を開きます。

アプリケーションが読み込まれると、コンソール出力とデバイスのログが Xcode の出力ウィンドウに表示されます。

## Genymotion Android エミュレーターを使用する

Android SDKには標準でエミュレータが実装されていますが、動作が遅くて応答しないことがあります。

[Genymotion](https://www.genymotion.com) はより高速かつ、GPSやカメラなどのネイティブ機能へのアクセスも可能にする代替のエミュレーターです。

## リモートデバッグ - iOS と Safari

Safari は iOS デバイス上で実行されている Ionic アプリケーションと接続しながらデバッグするために使用できます。

はじめに、接続しているデバイス上で Web インスペクタを有効にする必要があります。

Web インスペクタは `設定 > Safari > 詳細` で見つけることができます。

次に、Mac の Safari に進み、`Safari > 環境設定 > 詳細` から **メニューバーに開発者メニューを表示** を有効にします。

接続されたデバイスが **開発** メニューに表示されます。

以上で、Safari の開発者ツールを用いてアプリケーションの調査とデバッグができます。

## リモートデバッグ - Android と Chrome

Chrome の DevTools は、`ionic serve` というコマンドを介してブラウザ上で実行している時、またはエミュレーターか実機でにデプロイされている時、アプリケーションのデバッグに使用できます。

エミュレーターや実機を調査するには、Chrome で `chrome://inspect` にアクセスし、実行中のアプリケーションをターゲットとして選択してください。

> メモ: 実機では、Chromeからデバッグするために開発者モードを有効にする必要があります。


## リモートデバッグ - VS Code プラグイン

VS Code has a dedicated plugin for debugging apps built with Cordova.

[The plugin](https://marketplace.visualstudio.com/items?itemName=vsmobile.cordova-tools) creates a bridge between the device and the VS Code Devtools and allows debugging to be done right in the editor.

VSCode には Cordova で作られたアプリケーションのデバッグ専用のプラグインがある。
[そのプラグイン](https://marketplace.visualstudio.com/items?itemName=vsmobile.cordova-tools) はデバイスと VSCode の Devtools の間にブリッジを生成し、エディタ内でデバッグを行えるようにします。
