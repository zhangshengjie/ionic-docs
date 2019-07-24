---
previousText: 'Glossary'
previousUrl: '/docs/faq/glossary'
nextText: 'Runtime Errors'
nextUrl: '/docs/faq/runtime'
disableHtmlPreviews: true
contributors:
  - brandyscarney
---

# ビルドエラー


## 一般的な間違い

### デコレーターにて丸括弧を忘れる

デコレーターはアノテーションの後に丸括弧 `()` を持つべきです。いくつか例を示します: `@Injectable()`, `@Optional()`, `@Input()`, など。

```typescript
@Directive({
  selector: 'my-dir'
})
class MyDirective {
  // 誤り、@Optional() とすべき
  // @Optional はここでは何もしないため、MyDirective は parent が undefined の場合にエラーになる
  constructor( @Optional parent: ParentComponent) { }
}
```

## 一般的なエラー

### すべてのパラメータを解決できない

```shell
Cannot resolve all parameters for 'YourClass'(?). Make sure that all the parameters are decorated with Inject or have valid type annotations and that 'YourClass' is decorated with Injectable.
```

この例外は Angular が `YourClass` のコンストラクタの 1つ以上のパラメータについて困惑していることを意味します。[依存性を注入](https://angular.jp/docs/ts/latest/guide/dependency-injection.html) するため、Angular は 注入するパラメータの型を知る必要があります。パラメータのクラスを指定することで Angular にこのこと（タイプ）を知らせます。次の点を確認してください:

- パラメータのクラスをインポートします。
- パラメータに適切な注釈をつけるか、パラメータの型を指定します。

```typescript
import { MyService } from 'my-service'; // 私をインポートすることを忘れないで！

@Component({
  template: `Hello World`
})
export class MyClass {
  // service は MyService のタイプです
  constructor(service: MyService) {

  }
}
```

コード内の循環参照がこのエラーの原因になることがあります。循環参照は、2つのオブジェクトが相互に依存していることを意味するため、両方を相互の前に宣言する方法はありません。この問題を回避するには、Angular に組み込まれている[`forwardRef`](https://angular.jp/docs/ts/latest/api/core/index/forwardRef-function.html) 関数を使用します。
```ts
import { forwardRef } from '@angular/core';

@Component({
  selector: 'my-button',
  template: `<div>
               <icon></icon>
               <input type="button" />
             </div>`,
  directives: [forwardRef(() => MyIcon)] // MyIcon はまだ定義されていません
})                                       // forwardRef は MyIcon が必要なときに MyIcon として解決します
class MyButton {
  constructor() { }
}

@Directive({
  selector: 'icon'
})
class MyIcon {
  constructor(containerButton: MyButton) { } // MyButton が定義されました
}
```


### ParamType の Provider がない

```shell
No provider for ParamType! (MyClass -> ParamType)
```

これは、Angular は注入されるべきパラメータの型を知っているが、注入方法を知らないことを意味する。

パラメータが Service の場合は、指定したクラスがアプリケーションで使用可能な providers のリストに追加されていることを確認します:


```typescript
import { MyService } from 'my-service';

@Component({
  templateUrl: 'app/app.html',
  providers: [MyService] // 私を忘れないで！
})
class MyApp { }
```

パラメータが別のコンポーネントまたはディレクティブ（たとえば、親コンポーネント）である場合、パラメータを providers のリストに追加するとエラーはなくなりますが、これは前述の [provider の複数のインスタンス](/docs/faq/runtime#provider-) と同じ効果を持ちます。ここでは、コンポーネントクラスの新しいインスタンスを作成しますが、必要なコンポーネントインスタンスへの参照は取得しません。かわりに、注入されるであろうディレクティブまたはコンポーネントがコンポーネントで使用可能であることを確認します（たとえば、親であることを期待している場合は、実際に親であること）。これはおそらく、例を使用すると最も簡単に理解できます:

```typescript
@Component({
  selector: 'my-comp',
  template: '<p my-dir></p>',
  directives: [forwardRef(() => MyDir)]
})
class MyComp {
  constructor() {
    this.name = 'My Component';
  }
}

@Directive({
  selector: '[my-dir]'
})
class MyDir {
  constructor(c: MyComp) { // <-- これは興味深い1行です

    // コンポーネントツリーにMyCompがなく、注入するMyCompがないため、
    // ディレクティブが通常のdivにある場合のエラーのdivにある場合のエラー
    console.log('Host component\'s name: ' + c.name);

  }
}

@Component({
  template: "<my-comp></my-comp>" + // MyDir コンストラクタ内ではエラーなし、MyComp は MyDir の親
  "<my-comp my-dir></my-comp>" + // MyDir コンストラクタ内ではエラーなし、MyComp は MyDir のホスト
  "<div my-dir></div>", // MyDir コンストラクタ内でエラー
  directives: [MyComp, MyDir]
})
class MyApp { }
```

以下に、使用可能な注入するものの図を示します:

```
                 +-------+
                 |  App  |
                 +---+---+
                     |
       +-------------+------------+
       |                          |
+------+------+          +--------+--------+
| Div (MyDir) |          | MyComp (MyDir)  |  <- MyComp は注入可能
+-------------+          +--------+--------+
       ^                          |
MyComp の注入なし            +------+------+
                           | P (MyDir)   | <- MyComp は親から注入可能
                           +-------------+
```

前の例を拡張するために、コンポーネント/ディレクティブの参照を常に期待しているわけではない場合には、Angular の `@Option` アノテーションを使うことができます:

```typescript
@Directive({
  selector: '[my-dir]'
})
class MyDir {
  constructor(@Optional() c: MyComp) {
    // No longer errors if c is undefined
    if (c) {
      console.log(`Host component's name: ${c.name}`);
    }
  }
}
```

### Can't bind to 'propertyName' since it isn't a known property

```shell
Can't bind to 'propertyName' since it isn't a known property of the 'elementName' element and there are no matching directives with a corresponding property
```

This happens when you try and bind a property on an element that doesn't have that property. If the element is a component or has one or more directives on it, neither the component nor the directives have that property either.

```html
<!-- div doesn't have a 'foo' property -->
<div [foo]="bar"></div>
```

### No provider for ControlContainer

```shell
No provider for ControlContainer! (NgControlName -> ControlContainer)
```

This error is a more specific version of the `No provider` error above.  It happens when you use a form control like NgControlName without specifying a parent [NgForm](https://angular.io/docs/ts/latest/api/forms/index/NgForm-directive.html) or NgFormModel.  In most cases, this can be resolved by making sure your form control is within an actual form element.  NgForm uses `form` as a selector so this will instantiate a new NgForm:

```typescript
@Component({
  template:
  '<form>' +
  '<input ngControl="login">' +
  '</form>'
})
```

### No Component Factory Found

```shell
No component factory found for <component name>
```

This error happens when you are trying to use a component, provider pipe or directive that has not been imported and added to your ngModule. Whenever you add a new component, provider, pipe or directive to your app, you must add it to the `ngModule` in the `src/app/app.module.ts` file for Angular to be able to use it. To fix this error you can import the offending component, provider, pipe or directive into the app.module file and then if it is a provider add it to the `providers` array and for a component, pipe or directive add it to both the declarations array and `entryComponents` array.
