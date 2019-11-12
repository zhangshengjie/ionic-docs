---
nextText: 'Core concepts'
nextUrl: '/docs/intro/concepts'
---

# Ionic Frameworkとは

<!-- TOC goes here -->

Ionic Frameworkは、Webテクノロジー（HTML、CSS、JavaScript）を使って、高性能かつ高品質なモバイルとデスクトップアプリケーションをつくるためのオープンソースのUIフレームワークです。

Ionic Frameworkは、フロントエンドにおけるUXと、アプリケーションにおけるUIインタラクション（操作性、インタラクション、ジェスチャー、アニメーション)に特化しています。学びやすく、Angularをはじめとしたライブラリ・フレームワークと一緒に使うことができます。また、フレームワークなしで簡単なJavaScriptのコードだけでIonic Frameworkを利用することもできます。

現在、Ionic Frameworkは<a href="https://angular.io/" target="_blank">Angular</a>と<a href="https://reactjs.org" target="_blank">React</a>を公式サポートしていますが、<strong>Vue</strong>のサポートも開発中です。 もし使い始める前にIonic Frameworkを詳しく知りたいなら、<a href="https://youtu.be/p3AN3igqiRc" target="_blank">基本を紹介した映像</a>をご覧ください。

## ゴール

### クロスプラットフォーム

iOSアプリ、Androidアプリ、デスクトップアプリ、Progressive Web Appsといった複数のプラットフォームで動作するアプリケーションを1つのコードで構築・デプロイすることができます。一度書いたら、どこでも動きます。

### Web標準

Ionic Frameworkは信頼性の高い[Web標準](/docs/faq/glossary#web-standards)（HTML, CSS, and JavaScript）で構築されており、Custom ElementsやShadow DOMなど最新のWeb APIsを使っています。
このため、IonicのComponentsはベンダーロックを受けることない安定したAPIを持っています。

### 美しいデザイン

きれいで、シンプルで機能的。Ionic Frameworkはすべてのプラットフォームですぐに使い始めることができます。
事前にデザインされたコンポーネント、タイポグラフィー、インタラクティブなパラダイム、すばらしい（しかし拡張可能な）基本テーマからはじめましょう！

### シンプル

Ionic Frameworkは簡単につくることができるので、Ionicアプリをつくることは楽しく、学びやすく、Webをつくることができるなら誰でも簡単に使うことができます。

## ライセンス

Ionic Frameworkは<a href="https://opensource.org/licenses/MIT" target="_blank">MIT license</a>のもとで利用できる無料のオープンソースプロジェクトです。つまり、個人でも商用でも無料で利用することができます。MIT licenseは、有名なjQueryやRuby on Railsでも採用されています。

また、このドキュメントのコンテンツは(<a href="https://github.com/ionic-team/ionic-docs" target="_blank">ionic-docs</a>レポジトリ)は<a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank">Apache 2 license</a>のもとで利用できます。

## Ionic CLI

公式の[Ionic CLI](/docs/cli)（Command Line Interface）は、Ionicアプリの土台をすばやく構築し、Ionicの開発者に役立つ多くのコマンドを提供するツールです。Ionicのインストールと更新に加えて、CLIには、開発用のビルトインサーバーの立ち上げやビルド、デバッグをすることができます。[Ionic Pro](#ionic-pro)に登録しているなら、CLIを使ってクラウドのビルドツールとデプロイツール、アカウント管理も利用できます。

## フレームワークの互換性

過去リリースされたIonicはAngularと密結合でしたが、Ionic v4からは単独のWeb Componentsライブラリとして機能し、Angularのような最新のJavaScriptフレームワークと一緒に利用することができます。
IonicはReactやVueを含むほとんどのフロントエンドフレームワークで動かすことができますが、いくつかの環境下ではWeb Componentsをすべて機能させるためにshimを利用する必要があります。

### JavaScript

Ionic 4の大きな目標のひとつに、UIコンポーネントを動作させるためのフレームワーク要件をなくすことがありました。つまり、コアコンポーネントはWebページにscriptタグひとつ書くだけで（フレームワークを導入しなくても）独立して動かすことができます。フレームワークをつかって開発することは大きなチームやアプリにとっては効率的ですが、WordPressといった単一なページでもIonicを独立したライブラリとして利用できるようになりました。

### Angular

AngularはいつもIonicをよりよくしてくれます。コアコンポーネントはWeb Componentsライブラリ単体として利用できますが、`@ionic/angular`パッケージを使うことで簡単にAngularのエコシステムと統合できます。`@ionic/angular`は、Angular開発者がIonic 2/3から期待してきた機能や、AngularルーターなどのAngularのコアライブラリとの統合といったすべての機能が含まれています。

### React

Ionicは現在、人気のReactライブラリを公式サポートしています。 Ionic Reactを利用すると、React開発者は既存のWeb技術を利用して、
Ionicは現在、人気のあるReactライブラリを公式にサポートしています。 Ionic Reactを使用すると、React開発者は既存のWebスキルを使用して、iOS、Android、Web、およびデスクトップをターゲットとするアプリを構築できます。  `@ionic/react` を利用すると、すべてのコアIonicコンポーネントをまるでネイティブのReactコンポーネントのように利用することができます。

### 今後のサポート

今後のリリースでは、他のフレームワークのサポートも予定されています。現在、Vueの公式バインディングが開発中ですが、一部のコンポーネントはこれらのフレームワークの枠組みの外で動作しますす。
Support for other frameworks are expected in future release. Currently official bindings for Vue are being developed, though some components just work out of the box in those frameworks.

## Ionic Framework v4+

Ionic Framework v4では、パフォーマンス、互換性、および全体的な拡張性に重点を置いて、プロジェクトの基礎となるテクノロジと機能が大きく進歩しました。v4でも`@ionic/angular`パッケージを通じてAngularと深く統合されていますが、フレームワークに依存しないために、他のJavaScriptフレームワーク（Vue、React、Preactなど）やフレームワークのない環境でも利用することができます。

v4がWeb標準に移行したことで、Ionicコアはフレームワーク固有の実装ではなく、最新ブラウザでサポートされている標準コンポーネントの実装に依存することができます。これは、読み込み時間の短縮、パフォーマンスの向上、コード全体の削減を意味します。

## Ionic Appflow

Ionicアプリの開発全体を支援するために、 <a href="https://ionicframework.com/appflow" target="_blank">Ionic Appflow</a> という本番アプリ用の商用アプリプラットフォームを提供しています。これは <strong>オープンソースのフレームワークから分離しています。</strong>

Ionic Appflowは、開発者とチームがネイティブアプリのビルドをコンパイルし、ダッシュボードからIonicアプリにコードプッシュするのに役立ちます。オプションの有料アップグレードは、ワークフローの自動化、シングルサインオン（SSO）、接続されたサービスおよび統合へのアクセスなどのより高度な機能に利用できます。

Appflowには <a href="https://dashboard.ionicframework.com/signup" target="_blank">Ionic Account</a> が必要で、一部の機能を試したい人のための無料の「スターター」プランが付属しています。

## 開発体制

Ionic Frameworkはコアチームによってフルタイムで積極的に開発・メンテナンスが行われています。そしてその体制は、全世界の開発者コミュニティとコントリビューターが成長と普及を促すことによって方向付けられています。開発者や企業は、Ionicを使ってあらゆる場所で動作するすばらしいアプリを開発・リリースしています。

### コミュニティに参加する

世界200カ国以上に数百万のIonicの開発者がいます。参加するには、いくつかの方法があります：

* <a href="https://forum.ionicframework.com/" target="_blank">Forum:</a> 質問してアイデアを共有するのに適しています。
* <a href="https://ionicworldwide.herokuapp.com/" target="_blank">Slack:</a> 開発者がリアルタイムで出会い、チャットするための場所です。
* <a href="https://twitter.com/Ionicframework" target="_blank">Twitter:</a> Ionicコミュニティの最新情報を投稿し、共有する場所です。
* <a href="https://github.com/ionic-team/ionic" target="_blank">GitHub:</a> 不具合を報告したり、新機能をリクエストするにはここでIssuesを建ててください。プルリク歓迎！
* <a href="https://ionicframework.com/contributors" target="_blank">Content authoring:</a> 技術ブログを書くか、あなたのIonicコミュニティの話を共有してください。
