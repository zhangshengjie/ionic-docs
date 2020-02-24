---
previousText: 'Running on iOS'
previousUrl: '/docs/building/ios'
nextText: 'Testing'
nextUrl: '/docs/building/testing'
---

# Androidでの開発

This guide covers how to run and debug Ionic apps on Android emulators and devices using [Capacitor](/docs/faq/glossary#capacitor) or [Cordova](/docs/faq/glossary#cordova).

> To develop for Android, make sure you have followed the [Android Environment Setup](/docs/installation/android).

## プロジェクト設定

アプリをAndroidシミュレータやデバイスにデプロイする前に、ネイティブプロジェクトを設定する必要があります。

1. **ネイティブプロジェクトが存在していない場合は生成します。**

    Capacitorの場合は、以下を実行します。

    ```shell
    $ ionic capacitor add android
    ```

    Cordovaの場合は、以下を実行します。

    ```shell
    $ ionic cordova prepare android
    ```

2. **[Package ID](/docs/faq/glossary#package-id)を設定します**

    Capacitorの場合は、`capacitor.config.json`ファイルを開き、`appId`を変更します。

    Cordovaの場合は、`config.xml`ファイルを開き、`id`を変更し`<widget>`でルートを設定します。要素の属性を変更します。詳しくは [the Cordova documentation](https://cordova.apache.org/docs/en/latest/config_ref/#widget) をご覧ください。


## Capacitorで実行する

CapacitorはAndroid Studioを使用して、シミュレータやデバイス向けのアプリを構築して実行します。

1. **Ionicアプリを開発し、それをネイティブプロジェクトと同期させます。**

    変更が検知がある度に、iOSシミュレータやデバイスが変更を検知するより前に、IonicアプリをWebアセットにビルドする必要があります。その後、Webアセットをネイティブプロジェクトにコピーします。幸いなことに、このプロセスはIonic CLIコマンドひとつで簡単にできます。

    ```shell
    $ ionic capacitor copy android
    ```

2. **Android StudioでRunボタンをクリックしてから、ターゲットのシミュレータまたはデバイスを選択します。**

![Android Studio Run Button Area](/docs/assets/img/running/android-studio-run-button-area.png)

### Live reload
To start a live-reload server run the following command.

```shell
$ ionic capacitor run android -l --address=YOUR_IP_ADDRESS
```
When running on a device make sure the device and your development machine are connected to the same network.

## Running with Cordova

Ionic CLIは、コマンドひとつで、Ionicアプリを作成、コピーし、iOSシミュレータやデバイスにデプロイできます。　`ionic serve`のような[ライブリロード](/docs/faq/glossary#livereload) 機能を利用するために、開発用のサーバを遅延することもできます。

次のコマンドを実行して、ライブリロードのための開発サーバーを起動するCLIプロセスを起動します。

```shell
$ ionic cordova run android -l
```

これで、アプリのソースファイルに変更が加えられたときに、Webアセットが再構築され、再度デプロイすることなくシミュレータまたはデバイスに反映されます。

## Debugging Android Apps

Once an app is running on an Android device or emulator, it can be debugged with Chrome DevTools.

### Chrome DevToolsを使う

Chromeは、Androidシミュレータおよびデバイス用のWeb開発者ツールをサポートしています。シミュレータが実行されているか、デバイスがコンピュータに接続されているのを確認した上、`chrome://inspect` をURLバーに入力するとアプリのデバッグができます。

> アプリケーションがデバイスまたはシミュレータ上で実行されていることを確認してください。そうしないと、リストに表示されません。

![Android Chrome DevTools](/docs/assets/img/running/android-chrome-devtools.png)

## ネイティブログの表示

Android Studioで実行している場合、ネイティブログは、Android Studioの **Logcat** にあります。

> **Logcat** ウインドウが表示されていない場合、**View** &raquo; **Tool Windows** &raquo; **Logcat**から表示できます。

![Android Studio Logcat](/docs/assets/img/running/android-studio-logcat.png)

You can also access **Logcat** with [ADB](https://developer.android.com/studio/command-line/adb).

```shell
$ adb logcat
```
