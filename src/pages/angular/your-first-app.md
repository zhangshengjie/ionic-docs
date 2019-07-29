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

## アプリの作成
次に、"Tabs" というアプリテンプレートを使用して Ionic Angular アプリを生成します:

```shell
$ ionic start photo-gallery tabs
```

このスタータープロジェクトには、Ionic 開発のために事前に構成された3つのページとベストプラクティスが用意されています。共通の構成要素がすでに配置されているため、機能を簡単に追加できます！

次に、アプリのフォルダに移動します:

```shell
$ cd photo-gallery
```

以上です！それでは、このアプリの動作を見てみましょう。

## アプリを起動
次のコマンドを実行してください:

```shell
ionic serve
```

さぁ、見て！あなたの Ionic アプリはウェブブラウザで動いています。ほとんどのアプリはブラウザ上で直接ビルドできるので、開発速度が大幅に向上します。

## フォトギャラリー!!!
3つのタブがあります。タブ2をクリックしてください。これは空白のキャンバスで、カメラ機能を追加するのに最適なスポットです。このページをフォトギャラリーに変換してみましょう。Ionic は LiveReload をサポートしているので、変更を加えて保存すると、アプリはすぐに更新されます。

![このチュートリアルを実行する前と後](/docs/assets/img/guides/first-app-v3/email-photogallery.gif)

お気に入りのコードエディタで photo-gallery アプリフォルダを開き、`/src/app/tab2/tab2.page.html` に移動します。見てみましょう:

```html
<ion-header>
  <ion-toolbar>
    <ion-title>Tab Two</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content padding></ion-content>
```

`ion-header` はトップナビゲーションおよびツールバーを表し、タイトルは「タブ2」です。アプリのコードを `ion-content` に入れます。この例では、デバイスのカメラを開くボタンを追加し、カメラでキャプチャしたイメージを表示します。しかし、まず明らかなことから始めましょう: Tab Two のページの名前を変更してみます:

```html
<ion-title>Photo Gallery</ion-title>
```

次に、`src/app/tabs/tabs.page.html` を開きます。ラベルを「Gallery」に、アイコンの名前を「images」に変更します。

```html
<ion-tab-button tab="tab2">
  <ion-icon name="images"></ion-icon>
  <ion-label>Gallery</ion-label>
</ion-tab-button>
```

これは Ionic でできるクールなことの始まりにすぎません。この次に、iOS または Android デバイスにアプリをデプロイし、フォトギャラリーの構築を続けます。

<div style="text-align:right;">
  <docs-button href="/docs/angular/your-first-app/ios-android-camera">続く <svg viewBox="0 0 512 512"><path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path></svg></docs-button>
</div>