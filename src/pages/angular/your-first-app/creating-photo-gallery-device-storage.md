---
previousText: 'Android, iOS, and the Camera - Oh My!'
previousUrl: '/docs/angular/your-first-app/ios-android-camera'
nextText: 'Theming'
nextUrl: '/docs/angular/your-first-app/theming'
contributors:
  - jsonMartin
---

# デバイスストレージを使用してフォトギャラリーを作成

前回、Tabs アプリの Tab2 ページにカメラプラグインを追加することができました。現状は、新しい写真を撮るたびに写真が入れ替わります。複数の写真を一緒に表示したい場合はどうすればいいでしょうか？フォトギャラリーを作ってみましょう。このアプリの完成されたコードを [GitHub](https://github.com/ionic-team/photo-gallery-tutorial-ionic4) から参照することができます。

## 専用のフォトサービスを作成する
ターミナルウィンドウから Ionic プロジェクトに移動し、次のコマンドを実行します:

```shell
$ ionic g service services/Photo
```

これにより、専用の "services" フォルダに PhotoService クラスが生成されます:

```Javascript
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  constructor() { }
}
```

このファイル内に、Photo クラスを追加します。"data" プロパティは、キャプチャした写真の base64 イメージデータを表します:

```Javascript
class Photo {
  data: any;
}
```

次に、フォトギャラリーを表す Photos 配列を作成します。

```Javascript
export class PhotoService {

  public photos: Photo[] = [];

  constructor() { }
}
```

`tab2.page.ts` に戻り、PhotoService をインポートします:

```Javascript
import { PhotoService } from '../services/photo.service';
```

これをコンストラクタに追加します:

```Javascript
constructor(private camera: Camera, public photoService: PhotoService) {  }
```

次に、Camera プラグインに関するすべてのコードを PhotoService クラスに移動します。これには、takePicture メソッド、Camera および CameraOptions のインポート、Tab2Page ページコンストラクタが含まれます。

続けて、currentImage 変数の参照を新しい photos 配列に変換する必要があります。まず、撮影した写真データを photos 配列に追加します:

```Javascript
this.camera.getPicture(options).then((imageData) => {
    // Add new photo to gallery
    this.photos.unshift({
        data: 'data:image/jpeg;base64,' + imageData
    }); }, (err) => {
    // Handle error
    console.log("Camera issue: " + err);
});
```

`tab2.page.ts` 内で、currentImage 変数とコンストラクタ内の Camera への参照を削除し、PhotoService のみを残します:

```Javascript
export class Tab2Page {
  constructor(public photoService: PhotoService) {  }
}
```

次に、`tab2.page.html` 内で、currentImage の img タグを削除します。その代わりに、ページ上に準備した要素を配置する優れた方法を提供する ion-grid というコンポーネントを使用します。この例では、1行に2枚の写真を表示するために使用します。

```html
<ion-grid>
  <ion-row>
    <ion-col size="6" *ngFor="let photo of photoService.photos">
      <img [src]="photo.data" />
    </ion-col>
  </ion-row>
</ion-grid>
```

ここでは、PhotoServices の photos 配列内の各写真をループし、それぞれに新しい列を追加します。ion-row は12個の"ブロック"のスペースで構成されており、サイズを6(`size="6"`)に設定しているため、一列に表示される写真は2枚のみです。

最後に、PhotoService の `takePicture` メソッドを呼び出し、Fab ボタンを更新します:

```Html
<ion-fab-button (click)="photoService.takePicture()">
  <ion-icon name="camera"></ion-icon>
</ion-fab-button>
```

素晴らしい！現在、基本的なフォトギャラリーが動いています。

## 写真をデバイスに保存する

機能しているフォトギャラリーを持っているのはとてもクールですが、アプリを閉じると写真が永久に失われることに気付くでしょう。それは良くないので、[Ionic Storage](https://ionicframework.com/docs/storage/) プラグインを追加して、キーと値のペアと JSON オブジェクトを簡単に保存できるようにしましょう。ネイティブアプリのコンテキストで実行する場合、Storage は最も安定し、かつ広く使用されているファイルベースのデータベースの1つである、SQLite を優先します。Web上で、または Progressive Web App として実行する場合、Storage は IndexedDB、WebSQL、localstorage をこの順序で使用しようとします。

Storage プラグインは、base64 イメージデータに対して完璧に動作します。まず、ネイティブの SQLite プラグインを追加します:

```shell
$ ionic cordova plugin add cordova-sqlite-storage
```

次に、web 用の JavaScript ライブラリを追加します:

```shell
$ npm install --save @ionic/storage
```

最後に、Storage モジュールをインポートし、`app.module.ts` のインポートリストに追加します:

```Javascript
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    IonicStorageModule.forRoot()
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

これで、PhotoService クラスで使用できるようになりました。これをインポートします:


```Javascript
import { Storage } from '@ionic/storage';
```

次に、コンストラクタを使用して挿入します:


```Javascript
constructor(private camera: Camera, private storage: Storage) { }
```

Update the `takePicture()` method to save the entire photos array after each photo is taken using the storage.set method:
写真を保存する機能を追加するには、あとたった2、3ステップのみです。`takePicture()` メソッドを更新し、各写真を撮影した後、storage.set メソッドを使用して photos 配列全体を保存します:

```Javascript
this.camera.getPicture(options).then((imageData) => {
  // Add new photo to gallery
  this.photos.unshift({
    data: 'data:image/jpeg;base64,' + imageData
  });

  // Save all photos for later viewing
  this.storage.set('photos', this.photos);
}, (err) => {
  // Handle error
  console.log("Camera issue: " + err);
});
```

 This is simple enough - retrieve the “photos” key then assign its value to the photos array:
アプリを最初に開いたときに、保存された写真をロードする必要があります。これは非常に単純で、"photos" キーを取得し、その値を photos 配列に割り当てます:

```Javascript
loadSaved() {
  this.storage.get('photos').then((photos) => {
    this.photos = photos || [];
  });
}
```

Tab2 ページで、ロードが開始されたら loadSaved メソッドを呼び出します:

```Javascript
ngOnInit() {
  this.photoService.loadSaved();
}
```

優しい！写真がデバイスに保存されます。写真が実際に保存されていることを示すには、DevApp を強制的に閉じ、再度開き、Tab2 ページを開きます。または、デバイスをシェイクしてコントロールメニューをポップアップで表示し、「プレビューを終了します。」をタップしてから、このアプリをリロードして写真を表示します。

次に、Ionic アプリにカスタムテーマを適用する方法を見ていきましょう。

<div style="text-align:right;">
  <docs-button href="/docs/angular/your-first-app/theming">続く <svg viewBox="0 0 512 512"><path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path></svg></docs-button>
</div>
