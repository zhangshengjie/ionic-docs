---
previousText: '初めての Ionic アプリ'
previousUrl: '/docs/angular/your-first-app'
nextText: 'Photo Gallery の作成'
nextUrl: '/docs/angular/your-first-app/creating-photo-gallery-device-storage'
---

# Android、iOS、Camera - Oh My!

以前は、Ionic アプリを立ち上げて、ウェブブラウザでローカルに実行していました。さて、自分の iOS または Android デバイスにインストールして、フォトギャラリー機能の構築を始めましょう。

## Cordova の iOS および Android プラットフォームを追加

Ionic はオープンソースの [Cordova プロジェクト](https://cordova.apache.org/docs/ja/latest/guide/overview/)を活用して、ネイティブなハードウェアサポートを提供しています。まず iOS と Android の _プラットフォーム_ を追加し、その後 Camera のような特定の _プラグイン_ を追加します。

```shell
$ ionic cordova platform add ios
$ ionic cordova platform add android
```

これらのコマンドは `config.xml` ファイルを作成します。これは Cordova iOS と Android の設定を定義するために使われます。Cordova はこのファイルを読み込み、各ネイティブアプリのバイナリをビルドする際に各設定を適用します。

DevApp でアプリを実行するには、まず `index.html` ファイル内に `cordova.js` への参照を追加する必要があります。`src/index.html` ファイルを開き、次のタグを `head` セクションに追加します。

```html
<head>
  <!-- ... 他の HTML タグ... -->

  <script src="cordova.js"></script>
</head>
```
> 注意：通常、Cordova でアプリをビルドすると、この script タグが index.html ファイルに追加されます。私たちはそのステップをスキップして代わりに DevApp を使用しているので、手動で行う必要があります。

## DevApp のインストール

[iOS](/docs/installation/ios) と [Android](/docs/installation/android) のネイティブツールを設定するためのステップは他にもあります。ここでは省略します。幸いなことに、Ionic にはネイティブ SDK ツールを扱う際のフラストレーションを回避する方法が用意されています: それが Ionic DevAppです！

Ionic DevApp は Ionic アプリを iOS や Android デバイス上で簡単に動的に実行できる無料のアプリです。App Storeからダウンロードし、デバイスで開きます:

<a href="https://itunes.apple.com/us/app/ionic-devapp/id1233447133?ls=1&mt=8" ><img src="/docs/assets/img/guides/first-app-v3/appstore.png"></a>

<p></p>

<a href="https://play.google.com/store/apps/details?id=io.ionic.devapp&hl=en" ><img src="/docs/assets/img/guides/first-app-v3/playstore.png"></a>

次に、Ionic アカウントにサインインします。

> Ionic アカウントを持っていませんか？画面下部の `サインアップ`  リンクをタップします。アカウントを作成すると、DevApp にアクセスできるだけでなく、最新の Ionic ニュース、ライブイベント、チュートリアルにもアクセスできます。また、ライブコードの更新(バグ修正と新機能の迅速な提供)やネイティブなクラウドビルド(複雑な構築手順をスキップする)へのアクセスも開放します。

その後、ターミナルを開き Ionic プロジェクトに移動します。次のコマンドを実行します:

```shell
$ ionic serve --devapp
```

DevApp で、アプリケーションが表示されることを確認してください。タップするとアプリが起動します。

> 表示されない場合、またはこのアプリケーションの作成中に問題が発生した場合は、[ここを参照](https://ionicframework.jp/docs/appflow/devapp/)してください。

とてもいいよ！これで、カメラ機能を追加できます。ちなみに、このリファレンスコードは [GitHub](https://github.com/ionic-team/photo-gallery-tutorial-ionic4) にあります。

`tab2.page.html` に戻り、以下を追加します:

```html
<ion-content>
<img>

<ion-fab vertical="bottom" horizontal="center" slot="fixed">
    <ion-fab-button>
      <ion-icon name="camera"></ion-icon>
    </ion-fab-button>
</ion-fab>
</ion-content>
```

ファイルを保存して監視 - カメラボタンが表示されます！これをタップすると、何も実行されないことに気付きます。次に、これを修正します。

## Add the Camera Dependencies via the CLI

In order to use the Camera, we need to bring in its JavaScript and native library dependencies. Back over in your Terminal window, run the following command, which adds the JavaScript library to the project, thus exposing the Camera API in TypeScript code:

```shell
$ npm install @ionic-native/camera
```

In `package.json`, you’ll notice a new JavaScript dependency has been added, with a version number similar to the following:

`"@ionic-native/camera": "^5.4.0"`

Next, run this command to add the native iOS and Android code, effectively allowing the Camera to work on a mobile device. For more info on how this works, read up on [Cordova](https://cordova.apache.org/docs/en/latest/guide/overview/) and [Ionic Native](https://ionicframework.com/docs/native).

```shell
$ ionic cordova plugin add cordova-plugin-camera
```

The `config.xml` file is now updated with an entry similar to the following for the native camera code:

```xml
<plugin name="cordova-plugin-camera" spec="^4.0.3" />
```

The next step is only required for iOS users. As of iOS 10, developers must provide a reason for why the app wishes to access the device camera. Add this to the bottom of `config.xml`:

```xml
<!-- Required for iOS 10: Camera permission prompt -->
<edit-config file="*-Info.plist" mode="merge" target="NSCameraUsageDescription">
    <string>Used to take pictures</string>
</edit-config>
```

## Add Camera plugin to Angular App Module

There’s one more step we need to do since this is an Angular project: register the Camera in the App Module (`src/app/app.module.ts`). First, import the Camera module:

```Javascript
import { Camera } from '@ionic-native/camera/ngx';
```

Then, add it as a Provider:

```Javascript
providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ],
```

It can now be used on any of our App pages.

## Add the Camera to the Gallery page

Our camera button doesn’t do anything yet. Over in `tab2.page.html`, add a click handler to the button:

```html
<ion-fab vertical="bottom" horizontal="center" slot="fixed">
  <ion-fab-button (click)="takePicture()">
    <ion-icon name="camera"></ion-icon>
  </ion-fab-button>
</ion-fab>
```

Then, update the image placeholder. The following binds the “currentImage” variable (which we’ll work on next) to the image to display to the user.

```html
<img [src]="currentImage" *ngIf="currentImage">
```

Open `tab2.page.ts` next and import the Camera library:

```Javascript
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
```

Next, define the “currentImage” variable and inject the Camera into this class via the constructor:

```Javascript
export class Tab2Page {
  currentImage: any;

  constructor(private camera: Camera) { }
}
```

Finally, add the “takePicture” method, already wired up to execute once the camera button has been tapped:

```Javascript
takePicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      this.currentImage = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
     console.log("Camera issue:" + err);
    });
  }
```

Take notice: there’s no mention of iOS or Android! This is the awesome power of plugins: you use one API (`camera.getPicture()` in this case) and the plugin takes care of the platform differences for you. Write once, run everywhere. 😀

Save this file then tap the Camera button in DevApp. Voila! The camera should open on your device. Once a photo has been taken, it displays on the Photo Gallery page.

Next, we’ll look at how to transform the app into a photo gallery, as well as how to save the photos to your device!

<div style="text-align:right;">
  <docs-button href="/docs/angular/your-first-app/creating-photo-gallery-device-storage">Continue <svg viewBox="0 0 512 512"><path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path></svg></docs-button>
</div>
