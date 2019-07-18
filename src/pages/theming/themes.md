---
initialTab: 'preview'
inlineHtmlPreviews: true
previousText: 'Colors'
previousUrl: '/docs/theming/colors'
nextText: 'Advanced Theming'
nextUrl: '/docs/theming/advanced'
---

## テーマ

Ionicは、アプリケーション全体のデフォルトテーマを変更するために、コンポーネント全体で使用できるいくつかのグローバル変数を提供します。次のセクションでは、さまざまなテーマ変数を用途別に分類しています: [Application Colors](#application-colors), [Stepped Colors](#stepped-colors)

### アプリケーションの配色

アプリケーションの配色は、Ionicの複数の場所で使用されています。ダークテーマや、ブランディングにあったテーマを簡単に作成することができます。

背景とテキストの色変数は、RGBである必要があります: <a href="https://developer.mozilla.org/en-US/docs/Glossary/RGB" target="_blank">rgb format</a>. なぜ `rgb` プロパティも必要であるかは [The Alpha Problem](#the-alpha-problem) をご覧ください。


| Name                                     | Description                                         |
| ---------------------------------------- | --------------------------------------------------- |
| `--ion-background-color`                 | Background color of entire app                      |
| `--ion-background-color-rgb`             | Background color of entire app, rgb format          |
| `--ion-text-color`                       | Text color of entire app                            |
| `--ion-text-color-rgb`                   | Text color of entire app, rgb format                |
| `--ion-backdrop-color`                   | Color of the Backdrop component                     |
| `--ion-overlay-background-color`         | Background color of the overlays                    |
| `--ion-border-color`                     | Border color                                        |
| `--ion-box-shadow-color`                 | Box shadow color                                    |
| `--ion-tab-bar-background`               | Background of the Tab bar                           |
| `--ion-tab-bar-background-focused`       | Background of the focused Tab bar                   |
| `--ion-tab-bar-border-color`             | Border color of the Tab bar                         |
| `--ion-tab-bar-color`                    | Color of the Tab bar                                |
| `--ion-tab-bar-color-activated`          | Color of the activated Tab                          |
| `--ion-toolbar-background`               | Background of the Toolbar                           |
| `--ion-toolbar-border-color`             | Border color of the Toolbar                         |
| `--ion-toolbar-color`                    | Color of the components in the Toolbar              |
| `--ion-toolbar-color-activated`          | Color of the activated components in the Toolbar    |
| `--ion-toolbar-color-unchecked`          | Color of the unchecked components in the Toolbar    |
| `--ion-toolbar-color-checked`            | Color of the checked components in the Toolbar      |
| `--ion-item-background`                  | Background of the Item                              |
| `--ion-item-background-activated`        | Background of the activated Item                    |
| `--ion-item-border-color`                | Border color of the Item                            |
| `--ion-item-color`                       | Color of the components in the Item                 |
| `--ion-placeholder-color`                | Color of the placeholder in inputs                  |


### ステップカラー

Ionicテーマをカスタマイズするためのさまざまな方法を検討した結果、1つの背景色またはテキスト色しか使用できないことがわかりました。デザイン全体を通して重要性と深度を暗示するためには、背景色とテキスト色の色合いを変える必要があります。このパターンに対応するために、ステップカラーを作成しました。

背景色 (`--ion-background-color`) と テキストカラー (`--ion-text-color`) の変数を更新すると、ほとんどのアプリコンポーネントの外観が変わりますが、見逃したり壊れたりする可能性のある特定のIonicコンポーネントがあります。ダークテーマを適用するとき、これはより明白になります。

一部のコンポーネントでは、背景よりも暗い、またはテキストよりも明るい色合いを使用しています。たとえば、item の見出しテキストは、私たちのデフォルトのテキストカラーよりも数段階明るい色である <code-color mode="md" value="#404040"></code-color> になります。一方、ローディングコンポーネントの背景は白よりも濃い色 <code-color mode="md" value="#f2f2f2"></code-color> になります。私達はこれらのわずかな変化を定義するために、ステップカラーを利用します。アプリケーションの背景色やテキストの色を更新するときは、ステップカラーを更新することが重要です。

デフォルトでは、Ionicのステップカラーはデフォルトの背景色の値 <code-color mode="md" value="#ffffff"></code-color> で始まります。 そしてテキストカラー値 <code-color mode="md" value="#000000"></code-color> を混ぜるために使います。ステップカラーの完全なリストは、以下のジェネレータに表示されています。

### ステップカラーの変数生成

アプリのカスタム背景色とテキストの色のテーマを作成します。下記の背景色またはテキストカラーの16進値を更新してから、生成されたコードをコピーしてIonicプロジェクトに直接貼り付けます。

<stepped-color-generator mode="md" no-prerender></stepped-color-generator>


