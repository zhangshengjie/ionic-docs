---
title: Ionic Framework
meta:
  image: /docs/assets/img/meta/open-graph.png
  description: Ionic is the app platform for web developers. Build amazing mobile, web, and desktop apps all with one shared code base and open web standards
tableOfContents: false
demoUrl: https://ionic-docs-demo.herokuapp.com/
demoSourceUrl: https://github.com/ionic-team/docs-demo
nextText: 'Environment Setup'
nextUrl: '/docs/intro/environment'
---

Ionic FrameworkはオープンソースのUIツールキットで、HTML、CSS、JavaScriptなどのウェブ技術を使って、<a href="/docs/angular/overview" target="_blank"> Angular</a> や <a href="/react" target="_blank">React</a> といった人気フレームワークと併用することで高性能で高品質なモバイルアプリやデスクトップアプリを作ることができます。

<a href="/docs/intro/cli">Ionicのインストール</a> や <a href="/docs/intro/next#build-your-first-app">初めての開発</a> を参考に、主な概念を学ぶことができます。

<docs-cards>
  <docs-card header="インストールガイド" href="/docs/intro/cli" icon="/docs/assets/icons/guide-installation-icon.svg" hover-icon="/docs/assets/icons/guide-installation-icon-hover.svg">
    <p>システム設定とフレームワークのインストールのガイドです。</p>
  </docs-card>

  <docs-card header="UIコンポーネント" href="/docs/components" icon="/docs/assets/icons/guide-components-icon.svg" hover-icon="/docs/assets/icons/guide-components-icon-hover.svg">
    <p>Ionic Frameworkの美しくデザインされたUIコンポーネントをまとめて見ることができます。</p>
  </docs-card>

  <docs-card header="Nativeファンクション" href="/docs/native" icon="/docs/assets/icons/guide-native-icon.svg" hover-icon="/docs/assets/icons/guide-native-icon-hover.svg">
    <p>BluetoothやMap、HealthKitのようなNativeデバイスプラグインの統合方法</p>
  </docs-card>

  <docs-card header="テーマ" href="/docs/theming/basics" icon="/docs/assets/icons/guide-theming-icon.svg" hover-icon="/docs/assets/icons/guide-theming-icon-hover.svg">
    <p>Ionicアプリのビジュアルデザインをブランドに合わせて簡単にカスタマイズおよび変更する方法を学ぶ</p>
  </docs-card>
</docs-cards>

## 概要

Ionic Frameworkは、UIコントロール、インタラクション、ジェスチャ、アニメーションなど、アプリのフロントエンドUXとUIインタラクションに焦点を当てています。覚えるのは簡単で、 <a href="/docs/angular/overview">Angular</a>、 <a href="/docs/react/overview">React</a> や <a href="/docs/vue/overview">Vue</a> 上で利用することができます。また、シンプルに<a href="/docs/intro/cdn">scriptタグ</a>に含めて、フレームワークなしでスタンドアロンで利用することもできます。Ionic Frameworkについて詳しく知りたい人のために、私たちは<a href="https://youtu.be/p3AN3igqiRc" target="_blank">基本的な順を説明したビデオ</a>も提供しています。


### どこでもひとつのコードで

Ionicは、ウェブ開発者がすべての主要アプリストアとモバイルウェブ用のアプリを単一のコードベースから構築できるすばらしいモバイルアプリスタックです。また、<a href="/docs/theming/platform-styles">Adaptive Styling</a>によって、Ionicアプリはすべてのデバイス上で適切な外観と操作感を提供します。

#### パフォーマンスにフォーカス

Ionicは、効率的なハードウェアアクセラレーション、タッチに最適化されたジェスチャなどのベストプラクティスにより、最新のモバイルデバイスで優れたパフォーマンスと動作を実現するように設計されています。

#### クリーンでシンプル、機能的なデザイン

Ionicは、現在のすべてのモバイルデバイスおよびプラットフォームで美しく動作し、表示するように設計されています。事前に用意されたコンポーネント、タイポグラフィ、各プラットフォームに対応したすばらしい(まだ拡張可能な)ベーステーマにより、スタイルを構築できます。

#### ネイティブおよびWebに最適化

IonicはネイティブアプリケーションのUIガイドラインをエミュレートし、ネイティブSDKを使用して、ネイティブアプリのUI標準とデバイス機能を、オープンWebの完全なパワーと柔軟性とともに実現します。IonicはCapacitor(またはCordova)を使ってネイティブにデプロイするか、Progressive Web Appとしてブラウザで実行します。


## ゴール

### クロスプラットフォーム

ネイティブのiOS、Android、デスクトップ、Webなど、複数のプラットフォームで動作するアプリをProgressive Web Appとして、すべて1つのコードベースで開発、デプロイすることができます。一度書けば、どこでも実行できます。

### Web標準

Ionic Frameworkは、Custom ElementsやShadow DOMなどの最新のWeb APIを使用して、信頼性の高い[Web標準テクノロジー](/docs/reference/glossary#web-standards): HTML、CSS、およびJavaScriptの上に構築されています。このため、Ionicコンポーネントは安定したAPIを備えており、単一のプラットフォーム・ベンダーの思い付きではありません。

### 美しいデザインBeautiful Design

クリーンでシンプル、機能的。Ionic Frameworkは全てのプラットフォームで動作し、美しく表示されるように設計されています。
あらかじめデザインされたコンポーネント、タイポグラフィ、インタラクティブなパラダイム、すばらしい(まだ拡張可能な)基本テーマから始めます。

### シンプル

Ionic Frameworkはシンプルさを念頭に置いて構築されているので、Ionicアプリを作成することは楽しく、簡単に学ぶことができ、ウェブ開発スキルを持っている人なら誰でも簡単にアクセスすることができます。


## Frameworkの互換性

Ionicの過去のリリースはAngularと密結合されていましたが、フレームワークのバージョン4.xからはスタンドアロンの<a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components" target="_blank">Web Component</a>ライブラリとして動作するように再設計され、Angularのような最新のJavaScriptフレームワークと併用できるようになりました。IonicはReactやVueを含むほとんどのフロントエンドフレームワークで使用できますが、Webコンポーネントを完全にサポートするにはshimが必要なフレームワークもあります。

### JavaScript

Ionic Frameworkを <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components" target="_blank">Web Components</a> に移行する主な目標のひとつは、コンポーネントをホストする単一フレームワークのハード要件を取り除くことだった。これにより、コアコンポーネントは、scriptタグだけでWebページ内でスタンドアロンで動作できるようになりました。フレームワークを使って作業することは大規模なチームや大規模なアプリにとっては素晴らしいことですが、IonicをWordPressのようなコンテキストでも、単一ページのスタンドアロンライブラリとして使用することが可能になりました。

### Angular

Angularは常にIonicの素晴らしさの中心にありました。コアコンポーネントはスタンドアロンのWeb Componentライブラリとして動作するように書かれていますが、 `@ionic/angular` パッケージはAngularエコシステムとの統合を簡単にします。 `@ionic/angular` はIonic 2/3に期待されるすべての機能を含んでおり、AngularルータのようなコアAngularライブラリと統合されています。

### React

Ionicは現在、人気のReactライブラリを公式にサポートしている。Ionic Reactを使うと、React開発者は既存のWebスキルを使って、iOS、Android、Web、デスクトップをターゲットにしたアプリを作ることができます。`@ionic/react`を使えば、すべてのコアIonicコンポーネントを、ネイティブなReactコンポーネントを使っているような感覚で使用することができます。

### 将来的なサポート

将来のリリースでは他のフレームワークもサポートされる予定です。現在、Vueの公式バインディングは開発中ですが、フレームワークによってはすぐに使えるコンポーネントもあります。


## Ionic CLI

公式の [Ionic CLI](/docs/cli) は、Ionicアプリを迅速に構築し、Ionic開発者に多くの役に立つコマンドを提供するツールです。CLIには、Ionicのインストールとアップデートに加えて、組み込みの開発サーバ、ビルドとデバッグのためのツールなどが含まれています。 [Ionic Appflow](#ionic-appflow) のメンバーの場合は、CLIを使用してクラウドの構築と展開を実行し、アカウントを管理できます。


## Ionic Appflow

Ionicアプリの構築、デプロイ、ライフサイクルを通じた管理を支援するために、私たちは<strong>オープンソースフレームワークとは分離した</strong>ｍ<a href="https://ionicframework.com/appflow" target="_blank">Ionic Appflow</a>と呼んでいる製品アプリ用の商用サービスを提供しています。

Appflowは、開発者とチームがネイティブアプリのビルドをコンパイルし、一元化されたダッシュボードからIonicアプリにライブコードアップデートをデプロイするのを支援する。アプリストアへの直接公開、ワークフローの自動化、シングルサインオン(SSO)、接続されたサービスや統合へのアクセスなど、より高度な機能を利用するには、オプションの有償アップグレードを利用できます。

Appflowには <a href="https://dashboard.ionicframework.com/signup" target="_blank">Ionic Account</a> が必要で、いくつかの機能を試してみたい人は無料の「Hobby」プランが付いています。


## エコシステム

Ionic Frameworkはコアチームによって積極的に開発され、メンテナンスされており、そのエコシステムはその成長と採用を促進する開発者と貢献者の国際的なコミュニティによって導かれている。大小さまざまな開発者や企業がIonicを使って、どこでも動くすばらしいアプリを作ってリリースしています。

### コミュニティに参加する

Ionicの開発者は世界200か国以上に何百万人もいます。コミュニティへの参加方法をいくつか紹介します:

* <a href="https://forum.ionicframework.com/" target="_blank">Forum:</a> A great place for asking questions and sharing ideas.
* <a href="https://ionicworldwide.herokuapp.com/" target="_blank">Slack:</a> A lively place for devs to meet and chat in real time.
* <a href="https://twitter.com/ionicframework" target="_blank">Twitter:</a> Where we post updates and share content from the Ionic community.
* <a href="https://github.com/ionic-team/ionic" target="_blank">GitHub:</a> For reporting bugs or requesting new features, create an issue here. PRs welcome!
* <a href="https://ionicframework.com/contributors" target="_blank">Content authoring:</a> Write a technical blog or share your story with the Ionic community.


## ライセンス

Ionic Frameworkは無料のオープンソースプロジェクトで、<a href="https://opensource.org/licenses/MIT" target="_blank">MITライセンス</a>の下で公開されています。つまり、個人的なプロジェクトや商用プロジェクトで無料で利用できます。MITライセンスは、jQueryやRuby on Railsなどの人気プロジェクトで使用されているのと同じライセンスです。

このドキュメントコンテンツ(<a href="https://github.com/ionic-team/ionic-docs" target="_blank">Ionic-docsリポジトリ</a>にあります)は、<a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank">Apache 2ライセンス</a>でライセンスされています。
