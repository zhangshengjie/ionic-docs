# ion-select

Selectは、ネイティブの`<select>`要素と同様に、オプションのセットからオプションを選択するためのフォームコントロールです。ユーザがselectをタップすると、すべてのオプションを含むダイアログが、選択しやすい大きなリストで表示されます。

selectは、子要素`<ion-select-option>`とともに使用する必要があります。子要素のオプションに`value`属性が指定されていない場合、そのtextが値として使用されます。

`value`が`<ion-select>`にセットされている場合、オプションはその値に基づいて選択済みになります。


## インターフェイス

デフォルトでは、select は [AlertController API](../alert-controller) を使ってAlertのオプションのオーバーレイを開きます。インターフェイスを変更して、[ActionSheetController API](../action-sheet-controller)または[PopoverController API](../popover-controller)を使用するには、`action-sheet`または`popover`を`interface`プロパティに渡します。各インタフェースの制限については、他のセクションを参照してください。


## 単一選択

デフォルトでは、selectを使用すると、ユーザは1つのOptionだけを選択できます。Alertのインターフェースでは、Optionのリストがradio button形式で表示されます。action sheetインタフェースは、1つの値選択でのみ使用できます。selectコンポーネントの値は、選択したオプションの値の値を受け取ります。


### 複数選択

`multiple` 属性を追加して選択すると、複数のOptionを選択できます。複数のOptionを選択できる場合は、checkbox形式のオプションのリストがAlertオーバーレイで表示されます。selectコンポーネントの値は、選択されたすべてのオプション値の配列を受け取ります。

Note: `action-sheet` と `popover` インターフェイスでは、複数選択は動作しません

## Object値について

選択した値にObjectを使用する場合、これらのObjectの識別情報がサーバーまたはデータベースからのものであれば変更できますが、選択した値の識別情報は変更されません。たとえば、目的のObject値を持つ既存の値がselectにロードされたが、新しく取得されたselectオプションが異なるIDを持つようになった場合などです。これにより、元の選択がそのままの状態であっても、選択に値がまったく表示されなくなります。

デフォルトでは、selectはObjectの等価性(`===`)を使用して、オプションが選択されているかどうかを判断します。これは`compareWiths`プロパティにプロパティ名または関数を指定することで上書きできます。

## SelectのButton

alertはふたつのボタンをサポートしています: `Cancel` と `OK` です。それぞれのボタンは、 `cancelText` と `okText`  プロパティを使ってカスタマイズできます。

`action-sheet` と `popover` インタフェースには `OK` ボタンがありません。いずれかのオプションをクリックすると、自動的にオーバーレイが閉じ、その値が選択されます。`popover` インターフェースには`Cancel`ボタンがないので、backdropをクリックするとオーバーレイが閉じます。


## インターフェイスオプション

Since select uses the alert, action sheet and popover interfaces, options can be passed to these components through the `interfaceOptions` property. This can be used to pass a custom header, subheader, css class, and more. 
  
See the [AlertController API docs](../alert-controller), [ActionSheetController API docs](../action-sheet-controller), and [PopoverController API docs](../popover-controller) for the properties that each interface accepts.

Note: `interfaceOptions` will not override `inputs` or `buttons` with the `alert` interface.


