---
nextText: 'Build Your First App'
nextUrl: '/docs/react/your-first-app'
---

# Ionic Reactの概要

`@ionic/react` はIonic Coreに、React開発者向けにカスタマイズされたツールとAPIを組み合わせたものです。

> Note: The first official version of Ionic React is v4.11.

最初に、Ionic CLIをインストールします:

```shell
$ npm install ionic -g
```

そして、次のコマンドを実行します:

```shell
$ ionic start myAppName
```

CLIは、使用するフレームワーク(もちろんReact!)と利用するスターターテンプレートを含むいくつかの質問をすることで、セットアップ・プロセスを案内します。

アプリを作成したら、アプリを起動します:

```shell
ionic serve
```

もう [Ionic UI components](/docs/components) を使ってアプリの開発をはじめることができます。

## Reactバージョンサポート

Reactバージョン16.8以降と互換性があります。

## Reactツール

Ionic ReactプロジェクトはReactプロジェクトそのものようなもので、 [react-dom](https://reactjs.org/docs/react-dom.html) を活用して,一般的な [Create React App (CRA)](https://github.com/facebook/create-react-app) のセットアップを利用しています。 [routing and navigation](/docs/react/navigation) では、React Routerを内部で使用します。

1つの違いは、 [TypeScript](http://www.typescriptlang.org/) を使用することで、生産性が向上していることです。プレーンJavaScriptを使用するには、ファイル名を `.js` に変更します。次に、各ファイルの型注釈を削除します。

## ネイティブツール

[Capacitor](https://capacitor.ionicframework.com) は `Ionic React` でつくられたWebアプリを、iOS、Android、ElectronとWebでネイティブに実行するために利用することができる公式のクロスプラットフォームアプリライブラリです。

[Cordova](https://cordova.apache.org/) プラグインでIonic Reactを使用することに関する技術的な制限はありませんが、Capacitorが公式に推奨されています。 現時点では、  [Ionic CLI](/docs/cli) でIonic ReactのCordova統合をサポートする予定はありません。 詳細については、 [こちら](https://capacitor.ionicframework.com/docs/cordova) をご覧ください。
