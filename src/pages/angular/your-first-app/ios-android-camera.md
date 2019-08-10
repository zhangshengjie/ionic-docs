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

## CLI を介してカメラの依存関係の追加

Camera を使用するためには、その JavaScript とネイティブライブラリの依存関係を取り込む必要があります。ターミナルウィンドウに戻り、次のコマンドを実行して JavaScript ライブラリをプロジェクトに追加し、TypeScript コードに Camera API を公開します:

```shell
$ npm install @ionic-native/camera
```

`package.json` 内に、次のようなバージョン番号の新しい JavaScript 依存関係が追加されていることがわかります。

`"@ionic-native/camera": "^5.4.0"`

次に、このコマンドを実行して iOS と Android のネイティブコードを追加し、実際にカメラをモバイルデバイスで動作させます。こちらのより詳細な情報は、[Cordova](https://cordova.apache.org/docs/en/latest/guide/overview/) と [Ionic Native](https://cordova.apache.org/docs/en/latest/guide/overview/) を御覧ください。

```shell
$ ionic cordova plugin add cordova-plugin-camera
```

`config.xml` ファイルが更新され、ネイティブカメラコードに次のようなエントリが追加されます。

```xml
<plugin name="cordova-plugin-camera" spec="^4.0.3" />
```

次のステップは iOS ユーザーのみ必要です。iOS10では、開発者はなぜアプリがデバイスカメラにアクセスしたいのか理由を示さなければなりません。これを `config.xml` の最後に追加します:

```xml
<!-- iOS 10 で必須: Camera 許可プロンプト -->
<edit-config file="*-Info.plist" mode="merge" target="NSCameraUsageDescription">
    <string>Used to take pictures</string>
</edit-config>
```

## Angular アプリの Module に Camera プラグインを追加

これは Angular プロジェクトなので、もうひとつやるべきことがあります: App Module(`src/app/app.module.ts`) に Camera を登録します。まず、カメラモジュールをインポートします:

```Javascript
import { Camera } from '@ionic-native/camera/ngx';
```

では、これを Provider として追加します:

```Javascript
providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ],
```

これでアプリ内のどのページでも利用できます。

## ギャラリーページへの Camera の追加

Our camera button doesn’t do anything yet. Over in `tab2.page.html`, add a click handler to the button:
カメラボタンはまだ何もしていません。`tab2.page.html` では、ボタンにクリックハンドラを追加します。

```html
<ion-fab vertical="bottom" horizontal="center" slot="fixed">
  <ion-fab-button (click)="takePicture()">
    <ion-icon name="camera"></ion-icon>
  </ion-fab-button>
</ion-fab>
```

次に、イメージプレースホルダーを更新します。次の例では、"currentImage" 変数(次に取り組んでいきます)がイメージにバインドされ、ユーザに表示されます。

```html
<img [src]="currentImage" *ngIf="currentImage">
```

次に、`tab2.page.ts` を開き、Camera ライブラリをインポートします:

```Javascript
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
```

次に、"currentImage” 変数を定義し、コンストラクタを使用して Camera をこのクラスに挿入します:

```Javascript
export class Tab2Page {
  currentImage: any;

  constructor(private camera: Camera) { }
}
```

最後に、カメラボタンをタップした後に実行するように既に設定されている "takePicture" メソッドを追加します。

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

注意: iOS や Android には言及されていません！これはプラグインの素晴らしい能力です: ある API(この場合は `camera.getPicture()`)を使い、プラグインがプラットフォームの違いを処理してくれます。一度書けば、どこでも実行できます。😀

このファイルを保存し、DevApp の Camera ボタンをタップします。ほら見て！デバイスでカメラが起動します。撮影した写真は、フォトギャラリーページに表示されます。

次に、このアプリをフォトギャラリーに変換する方法と、写真をデバイスに保存する方法についても見ていきます。

<div style="text-align:right;">
  <docs-button href="/docs/angular/your-first-app/creating-photo-gallery-device-storage">続く <svg viewBox="0 0 512 512"><path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path></svg></docs-button>
</div>
