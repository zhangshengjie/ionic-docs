---
previousText: 'CLI Installation'
previousUrl: '/docs/intro/cli'
nextText: 'Next Steps'
nextUrl: '/docs/intro/next'
contributors:
  - brandyscarney
  - rtpHarry
---

# Ionic Packages

Ionicは、テスト環境、Angular、その他のフレームワーク、またはVanilla JSといったすべての状況で、Ionic Frameworkを使い始めるために使用できるさまざまなパッケージを提供しています。

## Ionic Framework CDN

Ionicフレームワークは、[Plunker](https://plnkr.co/)、[Codepen](https://codepen.io)、またはその他のオンラインコードエディタですばやくテストするために、CDNから組み込むことができます。。

CDNからフレームワークにアクセスするには、 [jsdelivr](https://www.jsdelivr.com/) を使用することをお勧めします。最新バージョンを入手するためには HTMLファイルの `<head>`  要素、もしくはオンラインコードエディタの呼び出しコードに、次のコードを追加します。

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.esm.js"></script>
<script nomodule src="https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/ionic.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@ionic/core/css/ionic.bundle.css"/>
```

これにより、フレームワークをインストールしなくても、すべてのIonic Frameworkのコアコンポーネントを使用することができます。CSSバンドルには、すべてのIonic [Global Stylesheets](../layout/global-stylesheets) が含まれます。

> これはAngularや他のフレームワークをインストールしません。これにより、フレームワークなしでIonic Frameworkのコアコンポーネントを使用できます。


## Ionic + Angular

AngularプロジェクトでIonic Frameworkを使用する場合は、 [npm](/docs/reference/glossary#npm) から最新の `@ionic/angular` をインストールしてください。これによって、すべてのIonic Frameworkコンポーネントと、Angularのサービスおよび機能を使うことができます。

```shell
$ npm install @ionic/angular@latest --save
```

新しいIonic Frameworkのリリースがあるたびに、最新バージョンの機能と修正を入手するために [バージョン](/docs/reference/versioning) を更新する必要があります。最新のバージョンは [npmを使ったアップデート](/docs/developing/tips#updating-dependencies) から取得することができます。

Ionicを既存のAngularプロジェクトに追加するには、Angular CLIの `ng add` 機能を使用します。

```shell
$ ng add @ionic/angular
```

これにより、`@ionic/angular` に必要なパッケージと、必要なスタイルが追加されます。


## Ionic + React

Ionicを既存のReactプロジェクトに追加するには、 `@ionic/react` および `@ionic/react-router` パッケージをインストールします。

```shell
$ npm install @ionic/react
$ npm install @ionic/react-router
```

### CSS

必要なCSSをReactプロジェクトに含めるには、ルートアプリコンポーネントに以下を追加します。

```javascript
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
```

## Ionicons CDN

IoniconsはデフォルトでIonic Frameworkに同梱されているので、Ionicを使用している場合はインストールは不要です。Ionic Frameworkを使用せずにIoniconsを使用するためには、ページの終わりの近くにある `</body>` の閉じタグの直前に以下の `<script>` タグを配置します。

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/ionicons@4.7.4/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://cdn.jsdelivr.net/npm/ionicons@4.7.4/dist/ionicons/ionicons.js"></script>
```

> アイコンの使い方については [Ionicons usage](https://ionicons.com/usage) をご覧ください。
