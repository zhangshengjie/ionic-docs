---
previousText: 'Layout'
previousUrl: '/docs/layout/structure'
nextText: 'Platform Styles'
nextUrl: '/docs/theming/platform-styles'
contributors:
  - brandyscarney
---

# Themingの基本

Ionic Frameworkは、さまざまなプラットフォームの標準デザインに準拠しながら、白紙の状態からブランディングに合わせて簡単にカスタマイズおよび変更できるように構築されています。IonicアプリのThemingは今まで以上に簡単です。フレームワークはCSSで構築されているため、事前に用意されているデフォルトスタイルは簡単に変更や修正をすることができます。


## 配色

Ionicには、多くのコンポーネントの配色を変更するために使用できる9つのデフォルトカラーがあります。 それぞれの配色は、 `shade` と `tint` を含む複数のプロパティを持つコレクションであり、Ionic全体で利用されます。

配色を変更するときは、関連するすべてのプロパティを設定することが重要です。[Color Generator](/docs/theming/color-generator) を使えば、これは簡単に設定できますし、必要に応じてこれらを手動で書き込むこともできます。Ionicの配色についての詳細は [Colors](/docs/theming/colors) をご覧ください。

<color-accordion></color-accordion>


## プラットフォームの標準

Ionic components adapt their look and behavior based on the platform the app is running on. We call this <strong>Adaptive Styling</strong>. This allows developers to build apps that use the same codebase for multiple platforms, while still looking "native" to those particular platforms.

Ionicは、2つの **modes** をもっており、これらはプラットフォーム: `ios` と `md` に基づいてコンポーネントの外観がカスタマイズされます。各プラットフォームにはデフォルトモードがありますが、簡単に変更できます。プラットフォームに基づいてアプリケーションをカスタマイズする方法の詳細については、[Platform Styles](/docs/theming/platform-styles) をご覧ください。


## CSS変数

Ionicコンポーネントは、 <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables" target="_blank" rel="noopener noreferrer">CSS properties (variables)</a>を使ってテーマ化されています。CSS変数は、動的な値を静的なCSSで利用することができます。これは今まではSassのようなCSSプリプロセッサを必要としていたものです。アプリケーションの外観は、[Ionic Variables](/docs/theming/css-variables#ionic-variables)のいずれかの値を変更することで簡単に変更できます。


## CSS Shadow Parts

CSS Shadow Partsが追加され、Ionic Framework Shadowコンポーネントの完全なカスタマイズが容易になりました。これまで、 <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM" target="_blank" rel="noopener noreferrer">Shadow DOM</a> を使用するコンポーネントは、シャドウ・ツリー内の要素を直接スタイル設定できませんでした。Shadow Partsが追加されたため、Shadowコンポーネントの内部要素のすべてのプロパティーにCSS変数を使用する必要がなくなりました。パーツを使用したIonic Frameworkコンポーネントのカスタマイズの詳細については、[CSS Shadow Parts](/docs/theming/css-shadow-parts)ガイドを参照してください。

## Branding

Ionicは、ブランディングや配色にあったテーマとなるアプリケーションの配色を提供します。デフォルトのテーマは明るい背景を使用しますが、背景色からテキストの色まですべてカスタマイズ可能です。ブランディングの詳細については、[Themes](/docs/theming/themes) をご覧ください。
