---
previousText: 'Overview'
previousUrl: '/docs/angular/overview'
nextText: 'iOS, Android, and the Camera'
nextUrl: '/docs/angular/your-first-app/ios-android-camera'
---

# 初めての Ionic アプリ: Angular

Ionic の素晴らしいところは、1つのコードベースで、使い慣れた Web ツールと言語を使用して任意のプラットフォーム用にビルドできることです。我々にならって動作しているフォトギャラリーを作成してみましょう。これが導入前と導入後です:

![Before and after going through this tutorial](/docs/assets/img/guides/first-app-v3/gallery-combined.png)

使い始めるのは簡単です。このガイドで参照されているコードはすべて [GitHubにある](https://github.com/ionic-team/photo-gallery-tutorial-ionic4/) ことに注意してください。

## 必要なツール
最適な Ionic 開発環境を実現するには、次のものをすぐにダウンロード/インストールしてください:
* バージョン管理のための [Git](https://git-scm.com/downloads)
* Ionic Appflow にセキュアにログインするための <strong>SSHクライアント</strong>([PuTTy](https://www.putty.org/) など)。
* Ionic のエコシステムとやり取りするための <strong>Node.js</strong>。[LTSのバージョンはこちらからダウンロードできます](https://nodejs.org/ja/)。
* <strong>コードエディタ</strong>は...コードを書きます！我々は [Visual Studio Code](https://code.visualstudio.com/) のファンです。
* <strong>コマンドラインターミナル(CLI)</strong>: <strong>Windows</strong> ユーザの場合、Ionicを最大限に活用するには、ビルトインコマンドライン(cmd)か、または Powershell CLI を管理者モードで実行することをお勧めします。<strong>Mac/Linux</strong> ユーザの場合、事実上どの端末でも動作するでしょう。

## Ionic と Cordova のインストール
コマンドラインで次のコマンドを実行してください:

```shell
$ npm install -g ionic cordova
```

> `-g` オプションは、_グローバルにインストールすること_ を意味します。パッケージをグローバルにインストールすると、権限エラーが発生する可能性があります。管理者特権を使用せずにグローバルに動作するように [npm を設定する](https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally)ことを検討してください。Npm を使用して管理者(または Mac および Linux で `sudo` を使用)としてコマンドプロンプトを実行することはお勧めできません。

## アプリケーションの生成
次に、"Tabs" というアプリケーションテンプレートを使用して Ionic Angular アプリケーションを生成します:

```shell
$ ionic start photo-gallery tabs
```

このスタータープロジェクトには、Ionic 開発のために事前に構成された3つのページとベストプラクティスが用意されています。共通の構成要素がすでに配置されているため、機能を簡単に追加できます！

次に、アプリケーションのフォルダに移動します:

```shell
$ cd photo-gallery
```

以上です！それでは、このアプリケーションの動作を見てみましょう。

## Run the App
Run this command next:

```shell
ionic serve
```

And voilà! Your Ionic app is now running in a web browser. Most of your app can be built right in the browser, greatly increasing development speed.

## Photo Gallery!!!
There are three tabs. Click on the Tab2 tab. It’s a blank canvas, aka the perfect spot to add camera functionality. Let’s begin to transform this page into a Photo Gallery. Ionic features LiveReload, so when you make changes and save them, the app is updated immediately!

![Before and after going through this tutorial](/docs/assets/img/guides/first-app-v3/email-photogallery.gif)

Open the photo-gallery app folder in your favorite code editor of choice, then navigate to `/src/app/tab2/tab2.page.html`. We see:

```html
<ion-header>
  <ion-toolbar>
    <ion-title>Tab Two</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content padding></ion-content>
```

`ion-header` represents the top navigation and toolbar, with "Tab 2" as the title. We put our app code into `ion-content`. In this case, it’s where we’ll add a button that opens the device’s camera and shows the image captured by the camera. But first, let’s start with something obvious: renaming the Tab Two page:

```html
<ion-title>Photo Gallery</ion-title>
```

Next, open `src/app/tabs/tabs.page.html`. Change the label to “Gallery” and the icon name to “images”:

```html
<ion-tab-button tab="tab2">
  <ion-icon name="images"></ion-icon>
  <ion-label>Gallery</ion-label>
</ion-tab-button>
```

That’s just the start of all the cool things we can do with Ionic. Up next, we’ll deploy the app to your iOS or Android device, then continue building the photo gallery.

<div style="text-align:right;">
  <docs-button href="/docs/angular/your-first-app/ios-android-camera">Continue <svg viewBox="0 0 512 512"><path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path></svg></docs-button>
</div>