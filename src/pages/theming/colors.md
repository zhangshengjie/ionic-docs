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

Colors can be added for use throughout an application by setting the `color` property on an Ionic component, or by styling with CSS. Read on to see how to manually add a new color, or use the [New Color Creator](#new-color-creator) below for a quick way to generate the code of a new color to be copy and pasted into an application.

To add a new color, first define the CSS variables for all of the variations of the color at the root. For example, to add a new color called `favorite`, we can define the following variables:

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

Then, create a new class that uses these CSS variables. The class **must** be written in the format `.ion-color-{COLOR}` where `{COLOR}` is the name of the color to add:

```css
.ion-color-favorite {
  --ion-color-base: var(--ion-color-favorite);
  --ion-color-base-rgb: var(--ion-color-favorite-rgb);
  --ion-color-contrast: var(--ion-color-favorite-contrast);
  --ion-color-contrast-rgb: var(--ion-color-favorite-contrast-rgb);
  --ion-color-shade: var(--ion-color-favorite-shade);
  --ion-color-tint: var(--ion-color-favorite-tint);
}
```

After the class is added, the color can be used on any Ionic component that supports the `color` property. An example of using the `favorite` color on an Ionic button is below.

```html
<ion-button color="favorite">Favorite</ion-button>
```

The CSS variables defined at the root can also be used to style any element using CSS:

```css
div {
  background: var(--ion-color-favorite);
  color: var(--ion-color-favorite-contrast);
}
```

See the [CSS Variables documentation](/docs/theming/css-variables) for more information on setting and using CSS variables.


## New Color Creator

Create a new color below by changing the name and value, then copy and paste the code below into your project.

<new-color-generator mode="md" no-prerender></new-color-generator>
