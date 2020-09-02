---
nextText: 'Responsive Grid'
nextUrl: '/docs/layout/grid'
initialTab: 'preview'
contributors:
  - brandyscarney
---

# 構造

Ionic Frameworkは、アプリを構成するために、単一ページレイアウトから、分割ペインビューとモーダルまで使用できるいくつかのレイアウトを提供します。

## HeaderとFooterのレイアウト

### Header

<aside>
  <docs-card href="/docs/api/header" header="Learn More" icon="/docs/assets/icons/component-header-icon.png">
    <code>ion-header</code> API docs
  </docs-card>
</aside>

利用できる一番単純なレイアウトは、[header](/docs/api/header) と [content](/docs/api/content)で構成されています。通常、アプリ内のほとんどのページにこれらの両方がありますが、コンテンツを使用するためにヘッダーは必須ではありません。

```html
<ion-app>
  <ion-header>
    <ion-toolbar>
      <ion-title>Header</ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-content class="ion-padding">
    <h1>Main Content</h1>
  </ion-content>
</ion-app>
```

### Footer

<aside>
  <docs-card href="/docs/api/footer" header="Learn More" icon="/docs/assets/icons/component-footer-icon.png">
    <code>ion-footer</code> API docs
  </docs-card>
</aside>

ご覧のとおり、Headerにあるツールバーがコンテンツ上に表示されます。アプリケーションのコンテンツの下にツールバーが必要な場合があります。これがFooterが使用されている場合です。

```html
<ion-app>
  <ion-content class="ion-padding">
    <h1>Main Content</h1>
  </ion-content>

  <ion-footer>
    <ion-toolbar>
      <ion-title>Footer</ion-title>
    </ion-toolbar>
  </ion-footer>
</ion-app>
```

### Header と Footer

また、これらはひとつのページのコンテンツの上部と下部にツールバーを持つことも可能です。

```html
<ion-app>
  <ion-header>
    <ion-toolbar>
      <ion-title>Header</ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-content class="ion-padding">
    <h1>Main Content</h1>
  </ion-content>

  <ion-footer>
    <ion-toolbar>
      <ion-title>Footer</ion-title>
    </ion-toolbar>
  </ion-footer>
</ion-app>
```

### Live examples

You can view a live example of this setup in Angular [here](https://stackblitz.com/edit/ionic-ng-header-footer).

## Tabs レイアウト

水平に配置された [tabs](/docs/api/tabs) レイアウトを利用すると、ユーザはコンテンツの表示をすばやく切り替えることができます。それぞれのタブは、`ion-router-outlet` もしくは `ion-nav` を利用して静的コンテンツまたはナビゲーションスタックを持つことができます。

```html
<ion-app>
  <ion-tabs>
    <ion-tab tab="home">
      <h1>Home Content</h1>
    </ion-tab>
    <ion-tab tab="settings">
      <h1>Settings Content</h1>
    </ion-tab>

    <ion-tab-bar slot="bottom">
      <ion-tab-button tab="home">
        <ion-label>Home</ion-label>
        <ion-icon name="home"></ion-icon>
      </ion-tab-button>
      <ion-tab-button tab="settings">
        <ion-label>Settings</ion-label>
        <ion-icon name="settings"></ion-icon>
      </ion-tab-button>
    </ion-tab-bar>
  </ion-tabs>
</ion-app>
```

### Live examples

You can view a live example of this setup in Angular [here](https://stackblitz.com/edit/ionic-ng-tabs).

## Menu レイアウト

モバイルアプリの標準的なレイアウトには、ボタンをクリックするか横からスワイプすると、横から [menu](/docs/api/menu) が表示されるものがあります。サイドメニューは通常ナビゲーションに使用されますが、任意のコンテンツを含めることができます。

```html
<ion-app>
  <ion-menu content-id="main-content">
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Menu</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list>
        <ion-list-header>
          Navigate
        </ion-list-header>
        <ion-menu-toggle auto-hide="false">
          <ion-item button>
            <ion-icon slot="start" name='home'></ion-icon>
            <ion-label>
              Home
            </ion-label>
          </ion-item>
        </ion-menu-toggle>
      </ion-list>
    </ion-content>
  </ion-menu>

  <ion-page class="ion-page" id="main-content">
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-toggle>
            <ion-button>
              <ion-icon slot="icon-only" name="menu"></ion-icon>
            </ion-button>
          </ion-menu-toggle>
        </ion-buttons>
        <ion-title>Header</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <h1>Main Content</h1>
      <p>Click the icon in the top left to toggle the menu.</p>
    </ion-content>
  </ion-page>
</ion-app>

<ion-menu-controller></ion-menu-controller>
```

### Live examples

You can view a live example of this setup in Angular [here](https://stackblitz.com/edit/ionic-ng-menu-layout).


## 分割表示のレイアウト

[分割表示](/docs/api/split-pane) レイアウトは、上記のレイアウトと組み合わせることができるので、レイアウトはより複雑な構造になります。ビューポートがブレークポイントを超えると、複数のビューを表示することができます。デバイスの画面サイズが特定のサイズを下回ると、分割表示は非表示となります。

デフォルトでは、画面がブレークポイント `768px` または `md` のブレークポイントよりも大きいときに分割表示が表示されますが、 `when` プロパティを設定することで異なるブレークポイントを使用するようにカスタマイズできます。以下は、分割表示に `sm` サイズ以上もしくは `576px` 以上で表示されるメニューが含まれているサンプルです。アプリがこれより小さくなるようにブラウザの水平方向のサイズを変更すると、分割表示は消えます。


```html
<ion-app>
  <ion-split-pane when="sm" content-id="main-content">
    <ion-menu content-id="main-content">
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Menu</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-content>
        <ion-list>
          <ion-list-header>
            Navigate
          </ion-list-header>
          <ion-menu-toggle auto-hide="false">
            <ion-item button>
              <ion-icon slot="start" name='home'></ion-icon>
              <ion-label>
                Home
              </ion-label>
            </ion-item>
          </ion-menu-toggle>
        </ion-list>
      </ion-content>
    </ion-menu>

    <div class="ion-page" id="main-content">
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-toggle>
              <ion-button>
                <ion-icon slot="icon-only" name="menu"></ion-icon>
              </ion-button>
            </ion-menu-toggle>
          </ion-buttons>
          <ion-title>Header</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <h1>Main Content</h1>
      </ion-content>
    </div>

  </ion-split-pane>
</ion-app>
```

It's important to note that the element with the `id` matching the `content-id` specified by the split pane will be the main content that is always visible. This can be any element, including an [ion-nav](/docs/api/nav), [ion-router-outlet](/docs/api/router-outlet), or an [ion-tabs](/docs/api/tabs).

### Live examples

You can view a live example of this setup in Angular [here](https://stackblitz.com/edit/ionic-ng-split-pane).
