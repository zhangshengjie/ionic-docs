---
previousText: 'CSS Variables'
previousUrl: '/docs/theming/css-variables'
nextText: 'Colors'
nextUrl: '/docs/theming/colors'
---

# CSS Shadow Parts

CSS Shadow Partsを使用すると、開発者はシャドウ・ツリー内の要素にCSSプロパティのスタイルを設定できます。これはIonic Framework <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM" target="_blank" rel="noopener noreferrer">Shadow DOM</a>コンポーネントをカスタマイズする際に非常に便利です。

## Shadow Partsを使う理由

Ionic Frameworkは、<a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components" target="_blank" rel="noopener noreferrer">Web Components</a>の分散セットです。Webコンポーネントは、スタイルとマークアップをカプセル化するために、<a href="https://w3c.github.io/webcomponents/spec/shadow/" target="_blank" rel="noopener noreferrer">Shadow DOMの仕様</a>に従います。

> Ionic Frameworkコンポーネントは、すべてShadow DOMコンポーネントでは**ありません**。コンポーネントがShadow DOMコンポーネントの場合、<a href="/docs/components" target="_blank" rel="noopener noreferrer">コンポーネントのドキュメント</a>の右上にバッジが表示されます。Shadow DOMコンポーネントの例として、<a href="/docs/api/button" target="_blank" rel="noopener noreferrer">button</a>コンポーネントがあります。

Shadow DOMは、スタイルがコンポーネントから漏れたり、意図せず他の要素に適用されたりするのを防ぐのに便利です。たとえば、 `ion-button` コンポーネントに `.button` クラスを割り当てます。Shadow DOMカプセル化がない場合、ユーザがクラス `.button` を独自の要素に設定すると、Ionic Framework button styleを継承します。 `ion-button` はシャドウコンポーネントなので問題ありません。

ただし、このカプセル化のため、スタイルはシャドウコンポーネントの内部要素にも影響を及ぼしません。つまり、シャドウ・コンポーネントがシャドウ・ツリー内の要素をレンダリングする場合、内部要素はCSSで直接ターゲットにすることはできません。例えば、 `ion-select` コンポーネントを使用すると、次のマークアップがレンダリングされます:

```html
<ion-select>
  #shadow-root
    <div class=”select-text select-placeholder”></div>
    <div class=”select-icon”></div>
</ion-select>
```

プレースホルダテキストおよびアイコン要素は、 `#shadow-root` の内部にあります。つまり、次のCSSを使用すると、プレースホルダーのスタイルを設定できません:

```css
/* Does NOT work */
ion-select .select-placeholder {
  color: blue;
}
```

どうやってこれを解決しますか？それが [CSS Shadow Parts](#shadow-parts-explained) です！


## Shadow Partsの説明

Shadow Partsを使用すると、開発者はシャドウ・ツリーの外側からシャドウ・ツリー内にスタイルを設定できます。これを行うには、 [partを使って露出](#exposing-a-part) し、次に [::part](#how-part-works) を使用してスタイルを設定します。

### Partsの露出

Shadow DOMコンポーネントを作成する場合、要素に `part` 属性を割り当てることで、シャドウツリー内の要素に部品を追加できます。これはIonic Frameworkのコンポーネントに追加されているので、エンドユーザーからのアクションは必要ありません。

先程の `ion-select` コンポーネントを例として使用すると、マークアップは次のように更新されます:

```html
<ion-select>
  #shadow-root
    <div part=”placeholder” class=”select-text select-placeholder”></div>
    <div part=”icon” class=”select-icon”></div>
</ion-select>
```

上のコードは、`placeholder` と `icon` の2つの部分を示しています。すべてのPartについては、<a href="/docs/api/select#css-shadow-parts" target="_blank" rel="noopener noreferrer">select documentation</a>を参照してください。

これらのPartが設定されているので、 [::part](#how-part-works) を使用して要素に直接スタイル設定することができます。

### どうやって ::part を動かすのか

<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part" target="_blank" rel="noopener noreferrer">`::part()`</a> の疑似要素を使用すると、開発者は、part属性によって露出されているシャドウ・ツリー内の要素を選択できます。

`ion-select` は、値が選択されていないときにテキストをスタイル設定するための `placeholder` 部分をPartによって露出してることがわかっているので、次の方法でカスタマイズできます:

```css
ion-select::part(placeholder) {
  color: blue;
  opacity: 1;
}
```

`::part` を使用したスタイル設定では、そのエレメントが受け入れたCSSプロパティを変更できます。

Partをターゲットにできるだけでなく、 <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements" target="_blank" rel="noopener noreferrer">疑似要素</a> によってスタイル設定できます:

```css
ion-select::part(placeholder)::first-letter {
  font-size: 22px;
  font-weight: 500;
}
```

Partはほとんどの <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes" target="_blank" rel="noopener noreferrer">疑似要素</a> と一緒に利用することができます:

```css
ion-item::part(native):hover {
  color: green;
}
```

> [ベンダー接頭辞つきの疑似要素](#vendor-prefixed-pseudo-elements) と [構造擬似クラス](#structural-pseudo-classes) には既知の制限があります。


## Ionic Framework Parts

Ionic Frameworkコンポーネントのすべての露出されているPartは、APIページの 「CSS Shadow Parts」 見出しの下にあります。すべてのコンポーネントとそのAPIページを表示するには、 <a href="/docs/components" target="_blank" rel="noopener noreferrer">コンポーネントのドキュメント</a> を参照してください。

Partを利用することができるコンポーネントは、次の条件を満たしてる必要があります:

- <a href="/docs/reference/glossary#shadow" target="_blank" rel="noopener noreferrer">Shadow DOM</a> コンポーネントです。 <a href="/docs/reference/glossary#scoped" target="_blank" rel="noopener noreferrer">Scoped</a> もしくはLight DOMコンポーネントの場合は、子要素を直接スタイリングすることができます。コンポーネントがScopedかShadowかは、その <a href="/docs/components" target="_blank" rel="noopener noreferrer">コンポーネントのドキュメンテーション</a> に表記されています。
- 子要素を含みます。たとえば、`ion-card-header` はShadowコンポーネントですが、すべてのスタイルがホスト要素に適用されます。子要素がないので、Partは必要ありません。
- 子要素が構造化されていません。 `ion-title` を含む特定のコンポーネントでは、子要素は内部要素の配置に使用される構造要素です。予期しない結果が生じる可能性があるため、構造要素をカスタマイズすることはお勧めしません。

> Partの追加の提案を歓迎します。パーツをリクエストする際に、できるだけ多くの情報を含む <a href="https://github.com/ionic-team/ionic-framework/issues/new?assignees=&labels=&template=feature_request.md&title=feat%3A+" target="_blank" rel="noopener noreferrer">new GitHub issue</a> を作成してください。

## 既知の制限

### ブラウザのサポート

CSS Shadow Parts は、すべての主要ブラウザの最新バージョンでサポートされています。ただし、古いバージョンではシャドウパーツをサポートしていないものもあります。アプリケーションにPartを実装する前に、<a href="https://caniuse.com/#feat=mdn-css_selectors_part" target="_blank" rel="noopener noreferrer">browser support</a>で要件を満たしていることを確認してください。古いバージョンのブラウザのサポートが必要な場合は、スタイル設定に <a href="/docs/theming/css-variables" target="_blank" rel="noopener noreferrer">CSS変数</a> を引き続き使用することをお勧めします。

### ベンダー固定の擬似要素

<a href="https://developer.mozilla.org/en-US/docs/Glossary/Vendor_Prefix" target="_blank" rel="noopener noreferrer">Vendor固定の</a>擬似要素は、現時点ではサポートされていません。たとえば、 `::-webkit-scrollbar` 擬似要素は動きません。

```css
/* Does NOT work */
my-component::part(scroll)::-webkit-scrollbar {
  background: green;
}
```

詳細は <a href="https://github.com/w3c/csswg-drafts/issues/4530" target="_blank" rel="noopener noreferrer">this issue on GitHub</a> をご覧ください。


### 構造擬似クラス

ほとんどの擬似クラスはパートでサポートされていますが、<a href="https://www.w3.org/TR/selectors-4/#structural-pseudos" target="_blank" rel="noopener noreferrer">構造擬似クラス</a>はサポートされていません。動作しない擬似クラスの例を以下に示します。

```css
/* Does NOT work */
my-component::part(container):first-child {
  background: green;
}

/* Does NOT work */
my-component::part(container):last-child {
  background: green;
}
```

### Partの連鎖

`::part()` 疑似要素は、追加の `::part()` に一致しません。

たとえば、`my-component::part (button) ::part (label) ` は一致しません。これは、この指定で意図したより多くの構造的な情報を暴露するからです。

`<my-component>` の内部ボタンが `part="label => button-label"` のようなものを使用してボタンの内部パーツをパネルの独自のパーツ要素マップに転送する場合、`my-component::part(button-label)` のようなセレクタは、1つのボタンのラベルだけを選択し、他のラベルは無視します。