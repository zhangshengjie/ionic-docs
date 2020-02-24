---
previousText: 'What is Ionic Framework'
previousUrl: '/docs/intro'
nextText: 'Packages & CDN'
nextUrl: '/docs/installation/cdn'
contributors:
  - rtpHarry
  - dwieeb
---

# CLIのインストール

Ionicアプリは、主にIonic CLI（[command-line-interface](/docs/faq/glossary#cli)）を利用して作成・開発します。Ionic CLIは、幅広い開発ツールと開発を手助けするオプションを提供している、Ionic teamが推奨しているインストール方法です。Ionic CLIは、アプリの実行や、Ionic Appflowといった他のサービスに接続などができる重要なツールです。

## Ionic CLIをインストール

Before proceeding, make sure your computer has [Node.js](/docs/faq/glossary#node) installed. See [these instructions](/docs/installation/environment) to set up an environment for Ionic.

Install the Ionic CLI with npm:

```shell
$ npm install -g @ionic/cli
```

If there was a previous installation of the Ionic CLI, it will need to be uninstalled due to a change in package name.

```shell
$ npm uninstall -g ionic
$ npm install -g @ionic/cli

```

> The `-g` option means _install globally_. When packages are installed globally, `EACCES` permission errors can occur.
> Consider setting up npm to operate globally without elevated permissions. See [Resolving Permission Errors](/docs/faq/tips#resolving-permission-errors) for more information.

## アプリケーションの起動

Ionicアプリを作成するには、スターターテンプレートを利用するか、まっさらな状態からつくるための`blank`テンプレートを利用して作成します。汎用的な3つのスターターテンプレートは、`blank`、`tabs`、`sidemenu`があります。`ionic start`コマンドで作成を開始できます。

```shell
$ ionic start myApp tabs
```

![start app thumbnails](/docs/assets/img/installation/start-app-thumbnails.png)


Ionicアプリのはじめ方をもっと知りたい方は、[「スタートガイド」](/docs/building/starting)を参照してください。

## アプリケーションを実行する

ほとんどのIonicアプリは、`ionic serve`コマンドを利用することによってブラウザですぐに利用することができます。

```shell
$ cd myApp
$ ionic serve
```

アプリケーションを実行するにはいくつかの方法がありますが、この方法ではじめることをおすすめします。デバイスとエミュレータでアプリケーションを開発してテストする方法については、[Running an App Guide](/docs/building/running)を参照してください。
