# ion-modal

Modalは、アプリのコンテンツの上に表示されるダイアログであり、インタラクションを再開する前にはアプリによって消されなければならない。選択できるオプションが多い場合や、リスト内の項目をフィルタする場合、およびその他の多くのユースケースで、Selectコンポーネントとして役立ちます。


### Creating

Modalは、[Modal Controller](../modal-controller) を使用して作成できます。Modalオプションをmodal controllerの `create()` メソッドに渡すことでカスタマイズできます。


### Dismissing
  
The modal can be dismissed after creation by calling the `dismiss()` method on the modal controller. The `onDidDismiss` function can be called to perform an action after the modal is dismissed.

