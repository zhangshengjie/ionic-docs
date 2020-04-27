---
previousText: 'Running on iOS'
previousUrl: '/docs/developing/ios'
nextText: 'Development Tips'
nextUrl: '/docs/developing/tips'
---

# Android開発

This guide covers how to run and debug Ionic apps on Android emulators and devices using <a href="/docs/reference/glossary#capacitor">Capacitor</a> or <a href="/docs/reference/glossary#cordova">Cordova</a>. Android apps can be developed on Windows, macOS, and Linux.

## Android Studio

<a href="https://developer.android.com/studio/" target="_blank">Android Studio</a> is the IDE for creating native Android apps. It includes the [Android SDK](/docs/reference/glossary#android-sdk), which will need to be configured for use in the command line.

Android Studio is also used to [create Android virtual devices](/docs/developing/android#creating-an-android-virtual-device), which are required for the Android emulator. Ionic apps can also be [launched to a device](/docs/developing/android#set-up-an-android-device).

> We don't recommend using Android Studio for _developing_ Ionic apps. Instead, it should only really be used to build and run your apps for the native Android platform and to manage the Android SDK and virtual devices.

### Android Studioのインストール

<a href="https://developer.android.com/studio/" target="_blank">Android website<a>からAndroid Studioをダウンロードします。より詳しいインストール手順は<a href="https://developer.android.com/studio/install" target="_blank">User Guide</a>をご覧ください。

### Android SDKのインストール

Android Studioをインストールしたら起動します。IDEは、Android SDKのインストールが必要であることを検出するはずです。**SDK Components Setup**の画面で、SDKのインストールを完了して、**Android SDKのパス**のをメモしておいてください。

![Android Studio SDK Setup](/docs/assets/img/installation/android-studio-sdk-setup.png)

By default, the latest stable SDK Platform is installed, which includes a collection of packages required to target that version of Android.

To install system images and other minor SDK platform packages, you may need to ensure **Show Package Details** is checked at the bottom of the SDK Manager.
<img alt="Android Studio SDK Manager" src="/docs/assets/img/installation/android-studio-sdk.png" />

For future reference, the Android SDK can be managed with Android Studio in the **Configure** &raquo; **SDK Manager** menu of the Android Studio welcome screen or **Tools** &raquo; **SDK Manager** inside Android projects.

### コマンドラインツールの設定

Android SDKには<a href="https://developer.android.com/studio/command-line/" target="_blank">便利なコマンドラインツール</a>が付属しています。これは利用する前に、いくつかの環境変数を設定する必要があります。以下のドキュメントは、macOSとLinuxのものです。WIndowsの場合は、ターミナルセッションでの環境変数の設定と保存に関するドキュメントを確認ください。

`~/.bashrc`もしくは`~/.bash_profile`、または同様のシェル起動スクリプトを、次のように変更します。s:

1. `ANDROID_SDK_ROOT`環境変数を設定します。このパスは、前のセクションでメモした**Android SDKのパス**です。

   ```shell
   $ export ANDROID_SDK_ROOT=$HOME/Library/Android/sdk
   ```

1. `PATH`にAndroid SDK コマンドラインのディレクトリを追加します。それぞれのディレクトリは、<a href="https://developer.android.com/studio/command-line/" target="_blank">コマンドラインツール</a>のカテゴリに対応しています。.

   <command-line nobuttons>
      <command-output># avdmanager, sdkmanager</command-output>
      <command-prompt>export PATH=$PATH:$ANDROID_SDK_ROOT/tools/bin</command-prompt>
      <br />
      <command-output># adb, logcat</command-output>
      <command-prompt>export PATH=$PATH:$ANDROID_SDK_ROOT/platform-tools</command-prompt>
      <br />
      <command-output># emulator</command-output>
      <command-prompt>export PATH=$PATH:$ANDROID_SDK_ROOT/emulator</command-prompt>
   </command-line>

   <blockquote>
     <p><code>apksigner</code>と<code>zipalign</code>のために, <code>$ANDROID_SDK_ROOT/build-tools/<version></code>は必ず<code>PATH</code>に追加する必要があります。</p>
   </blockquote>

### Android仮想デバイスの作成

Android仮想デバイス（AVD）は、AndroidエミュレータがAndroid OSを実行するために利用する設計図です。以下のドキュメントはAndroidエミュレータをセットアップするための簡単な方法です。詳細な手順と情報は、<a href="https://developer.android.com/studio/run/managing-avds" target="_blank">Android のドキュメント</a>を参照ください。

AVDs are managed with the AVD Manager. In the Android Studio welcome screen, click **Configure** &raquo; **AVD Manager**. The AVD Manager can also be opened inside Android projects in the **Tools** &raquo; **AVD Manager** menu.

![AVD Setup](/docs/assets/img/installation/android-studio-avd-setup.png)

Click **Create Virtual Device** and select a suitable device definition. If unsure, choose **Pixel 2**. Then, select a suitable system image. If unsure, choose **Pie** (API 28) with Google Play services. See <a href="https://en.wikipedia.org/wiki/Android_version_history" target="_blank">Android version history</a> for information on Android versions.

AVDが作成されたら、AndroidエミュレータでAVDを起動します。エミュレータを実行し続けることは、Android用のIonicアプリケーションを開発しながら検出を確実にするための最良の方法です。

<figure class="device">
  <img alt="Android Emulator Booting" src="/docs/assets/img/installation/android-emulator-booting.png" />
</figure>

### Androidデバイスを設定する

Androidハードウェアの実物は、Ionicアプリ開発でも使用できます。しかし、最初に、デバイスを開発用にセットアップする必要があります。以下のドキュメントは開発用にAndroidデバイスを設定する簡単な方法です。詳細な手順と情報については、<a href="https://developer.android.com/studio/run/device" target="_blank">the Android documentation</a>を参照してください。

1. デバイスのUSBデバッグを有効にします。**Settings**を開き、**Developer options**に移動し、**USB debugging**を有効にします。**Developer options**のメニューを最初に有効にする必要があるかもしれません。手順については<a href="https://developer.android.com/studio/debug/dev-options" target="_blank">the Android documentation</a>をご確認ください。
1. デバイスにコンピュータへの接続許可があることを確認してください。macOSの場合、追加の設定は不要です。Windowsの場合は<a href="https://developer.android.com/studio/run/oem-usb" target="_blank">OEM USB drivers</a>をインストールしてください。

USBケーブルでデバイスをコンピュータに接続し、次のコマンドを使用して接続が機能することを確認します。

```shell
$ adb devices
```

The device should be listed. See the full <a href="https://developer.android.com/studio/command-line/adb" target="_blank">`adb` documentation</a> for troubleshooting and detailed information.

## Cordova Setup

Additional setup is required for Cordova to support programmatic builds. This section is not necessary for Capacitor.

### Java

Native Android apps are compiled with the <a href="https://java.com/en/" target="_blank">Java</a> programming language. Download JDK8 from the <a href="https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html" target="_blank">download page</a>.

> Unfortunately, Cordova is not compatible with the latest version of Java.

### Gradle

<a href="https://gradle.org/" target="_blank">Gradle</a> is the build tool used in Android apps and must be installed separately. See the <a href="https://gradle.org/install/" target="_blank">install page</a> for details.


## Project Setup

Before apps can be deployed to Android simulators and devices, the native project must be configured.

1. **Generate the native project, if it does not already exist.**

    For Capacitor, run the following:

    ```shell
    $ ionic capacitor add android
    ```

    For Cordova, run the following:

    ```shell
    $ ionic cordova prepare android
    ```

2. **Set the [Package ID](/docs/reference/glossary#package-id).**

    For Capacitor, open the `capacitor.config.json` file and modify the `appId` property.

    For Cordova, open the `config.xml` file and modify the `id` attribute of the root element, `<widget>`. See [the Cordova documentation](https://cordova.apache.org/docs/en/latest/config_ref/#widget) for more information.


## Running with Capacitor

Capacitor uses Android Studio to build and run apps to simulators and devices.

1. **Develop the Ionic app and sync it to the native project.**

    With each meaningful change, Ionic apps must be built into web assets before the change can appear on Android simulators and devices. The web assets then must be copied into the native project. Luckily, this process is made easy with a single Ionic CLI command.

    ```shell
    $ ionic capacitor copy android
    ```

2. **In Android Studio, click the Run button and then select the target simulator or device.**

![Android Studio Run Button Area](/docs/assets/img/running/android-studio-run-button-area.png)

### Live reload
To start a live-reload server run the following command.

```shell
$ ionic capacitor run android -l --host=YOUR_IP_ADDRESS
```
When running on a device make sure the device and your development machine are connected to the same network.

## Running with Cordova

The Ionic CLI can build, copy, and deploy Ionic apps to Android simulators and devices with a single command. It can also spin up a development server, like the one used in `ionic serve`, to provide [live-reload](/docs/reference/glossary#livereload) functionality.

Run the following to start a long-running CLI process that boots up a live-reload server:

```shell
$ ionic cordova run android -l
```

Now, when changes are made to the app's source files, web assets are rebuilt and the changes are reflected on the simulator or device without having to deploy again.

## Debugging Android Apps

Once an app is running on an Android device or emulator, it can be debugged with Chrome DevTools.

### Using Chrome DevTools

Chrome has web developer tool support for Android simulators and devices. Go to `chrome://inspect` in Chrome while the simulator is running or a device is connected to the computer and **Inspect** the app that needs to be debugged.

> Make sure your application is running on the device or simulator, or it will not show up in the list.

![Android Chrome DevTools](/docs/assets/img/running/android-chrome-devtools.png)

### Viewing Native Logs

If running with Android Studio, native logs can be found in **Logcat**.

> If the **Logcat** window is hidden, you can enable it in **View** &raquo; **Tool Windows** &raquo; **Logcat**.

![Android Studio Logcat](/docs/assets/img/running/android-studio-logcat.png)

You can also access **Logcat** with [ADB](https://developer.android.com/studio/command-line/adb).

```shell
$ adb logcat
```
