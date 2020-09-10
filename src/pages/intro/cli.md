---
previousText: 'Environment Setup'
previousUrl: '/docs/intro/environment'
nextText: 'Packages & CDN'
nextUrl: '/docs/intro/cdn'
contributors:
  - rtpHarry
  - dwieeb
---

# CLIのインストール

Ionicアプリは、主にIonic CLI（[command-line](/docs/reference/glossary#cli)）を利用して作成・開発します。Ionic CLIは、幅広い開発ツールと開発を手助けするオプションを提供している、Ionic teamが推奨しているインストール方法です。Ionic CLIは、アプリの実行や、Ionic Appflowといった他のサービスに接続などができる重要なツールです。

## Ionic CLIをインストール

続行する前に、コンピュータに [Node.js](/docs/reference/glossary#node) がインストールされているかを確認ください。[この説明で](/docs/intro/environment)でIonicをセットアップできる環境を説明しています。

Install the Ionic CLI with npm:

```shell
$ npm install -g @ionic/cli
```

Ionic CLIが以前にインストールされていた場合は、パッケージ名が変更されているため、アンインストールする必要があります。

```shell
$ npm uninstall -g ionic
$ npm install -g @ionic/cli

```

> `-g` オプションは、 _グローバルにインストール_ することを意味しています。パッケージをグローバルにインストールすると `EACCES` パーミッションエラーが起きる可能性があります。
> 管理権限なしでnpmがグローバルで動作するように設定することを検討してください。詳細については [Resolving Permission Errors](/docs/developing/tips#resolving-permission-errors) をご覧ください。

## アプリケーションの起動

Ionicアプリを作成するには、スターターテンプレートを利用するか、まっさらな状態からつくるための`blank`テンプレートを利用して作成します。汎用的な3つのスターターテンプレートは、`blank`、`tabs`、`sidemenu`があります。`ionic start`コマンドで作成を開始できます。

```shell
$ ionic start myApp tabs
```

![start app thumbnails](/docs/assets/img/installation/start-app-thumbnails.png)


Ionicアプリのはじめ方をもっと知りたい方は、[スタートガイド](/docs/developing/starting)を参照してください。

## アプリケーションを実行する

ほとんどのIonicアプリは、`ionic serve`コマンドを利用することによってブラウザですぐに利用することができます。

```shell
$ cd myApp
$ ionic serve
```

アプリケーションを実行するにはいくつかの方法がありますが、この方法ではじめることをおすすめします。デバイスとエミュレータでアプリケーションを開発してテストする方法については、[Running an App Guide](/docs/developing/previewing)を参照してください。
