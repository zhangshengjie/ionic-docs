---
initialTab: 'preview'
inlineHtmlPreviews: true
previousText: 'CSS Variables'
previousUrl: '/docs/theming/css-variables'
nextText: 'Themes'
nextUrl: '/docs/theming/themes'
---

# 配色

Ionicには、多くのコンポーネントの配色を変更するために使用できる9つのデフォルトカラーがあります。 それぞれの配色は、 `shade` と `tint` を含む複数のプロパティを持つコレクションであり、Ionic全体で利用されます。

デフォルトの配色を変更するために、 `color` 属性を使って任意の色をIonicのコンポーネントに適用できます。以下の buttons はテキストと背景が `color` 属性に基づいて変更されていることに注目してください。button に `color` 属性がない時は、デフォルト値として `primary` の配色が適用されます。

```html
<ion-button>Default</ion-button>
<ion-button color="primary">Primary</ion-button>
<ion-button color="secondary">Secondary</ion-button>
<ion-button color="tertiary">Tertiary</ion-button>
<ion-button color="success">Success</ion-button>
<ion-button color="warning">Warning</ion-button>
<ion-button color="danger">Danger</ion-button>
<ion-button color="light">Light</ion-button>
<ion-button color="medium">Medium</ion-button>
<ion-button color="dark">Dark</ion-button>
```

### 配色のレイヤードスタイル

それぞれの配色は、これらのプロパティで構成されています: `base`, `contrast`, `shade`, と `tint` です。`base` と `contrast` の配色は `rgb` プロパティと同一の配色が求められます。 <a href="https://developer.mozilla.org/en-US/docs/Glossary/RGB" target="_blank">rgb format</a> をご覧ください。この `rgb` の変数が必要な理由は [The Alpha Problem](#the-alpha-problem) をご覧ください。下のドロップダウンから選択することで、Ionicが提供するデフォルトの配色とそのバリエーションを確認することができます。

<layered-colors-select mode="md" no-prerender></layered-colors-select>

### 配色を変更する

配色を変更するときは、その色についてリストされているすべてのバリエーションを変更する必要があります。例えば、`secondary color` を <code-color mode="md" value="#006600"></code-color> に変更する時、以下のCSSプロパティが必要です。

```css
:root {
  --ion-color-secondary: #006600;
  --ion-color-secondary-rgb: 0,102,0;
  --ion-color-secondary-contrast: #ffffff;
  --ion-color-secondary-contrast-rgb: 255,255,255;
  --ion-color-secondary-shade: #005a00;
  --ion-color-secondary-tint: #1a751a;
}
```

`secondary` をボタンに適用した時、利用されるのはベースカラー <code-color mode="md" value="#006600"></code-color> だけではありません。`contrast color` <code-color mode="md" value="#ffffff"></code-color> はテキストに適用され、それに加えて `shade` <code-color mode="md" value="#005a00"></code-color> と `tint` <code-color mode="md" value="#1a751a"></code-color> はボタンのステータスが変更された時に利用されます。

> ベースカラーからバリエーションカラーを取得する方法がわからない？その場合、 [Color Generator](/docs/theming/color-generator) をお試しください。これはすべてのバリエーションを計算し、アプリにコピー&ペーストできるコードを提供します！

CSS変数についてもっと詳しく知りたい時は [CSS Variables documentation](/docs/theming/css-variables) をご覧ください。

### 配色の追加

新しい配色を追加する時は、CSS変数を利用してすべてのバリエーションを追加する必要があります。クラス名は `.ion-color-{COLOR}` というフォーマットに従い、 `{COLOR}` には新しい色の名前をつけてください。例えば、配色が `favorite` という名前なら、次のようなclassを追加します:

```css
.ion-color-favorite {
  --ion-color-base: #69bb7b;
  --ion-color-base-rgb: 105,187,123;
  --ion-color-contrast: #ffffff;
  --ion-color-contrast-rgb: 255,255,255;
  --ion-color-shade: #5ca56c;
  --ion-color-tint: #78c288;
}
```

classが追加されると、Ionicのコンポーネントの `color` プロパティでその配色を利用することができます。 `favorite` をIonicのボタンで使う時は以下の通りになります。

```html
<ion-button color="favorite">Favorite</ion-button>
```

上記のクラスを追記しても、アプリケーションのスタイルシートで使用するためのIonic CSS変数が自動的に作成されないことに注意が必要です。`--ion-color-favorite` ではじまる変数は、`.ion-color-favorite` というclassを追加しただけでは、 **存在しません** 。 アプリケーションで利用するためには、別々に宣言する必要があります:

```css
:root {
  --ion-color-favorite: #69bb7b;
  --ion-color-favorite-rgb: 105,187,123;
  --ion-color-favorite-contrast: #ffffff;
  --ion-color-favorite-contrast-rgb: 255,255,255;
  --ion-color-favorite-shade: #5ca56c;
  --ion-color-favorite-tint: #78c288;
}
```

これで、CSSで`div` の`background` と `color` で `favorite` を利用することができます。

```css
div {
  background: var(--ion-color-favorite);
  color: var(--ion-color-favorite-contrast);
}
```

CSS変数についてもっと知りたい場合は [CSS Variables documentation](/docs/theming/css-variables) をご覧ください。
