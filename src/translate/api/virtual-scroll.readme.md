# ion-virtual-scroll

Virtual Scroll displays a virtual, "infinite" list. An array of records
is passed to the virtual scroll containing the data to create templates
for. The template created for each record, referred to as a cell, can
consist of items, headers, and footers. For performance reasons, not every record
in the list is rendered at once; instead a small subset of records (enough to fill the viewport)
are rendered and reused as the user scrolls.


### Approximate Widths and Heights

If the height of items in the virtual scroll are not close to the
default size of `40px`, it is extremely important to provide a value for
the `approxItemHeight` property. An exact pixel-perfect size is not necessary,
but without an estimate the virtual scroll will not render correctly.

The approximate width and height of each template is used to help
determine how many cells should be created, and to help calculate
the height of the scrollable area. Note that the actual rendered size
of each cell comes from the app's CSS, whereas this approximation
is only used to help calculate initial dimensions.

It's also important to know that Ionic's default item sizes have
slightly different heights between platforms, which is perfectly fine.

### Images Within Virtual Scroll

HTTP requests, image decoding, and image rendering can cause jank while
scrolling. In order to better control images, Ionic provides `<ion-img>`
to manage HTTP requests and image rendering. While scrolling through items
quickly, `<ion-img>` knows when and when not to make requests, when and
when not to render images, and only loads the images that are viewable
after scrolling. [Read more about `ion-img`.](../img)

It's also important for app developers to ensure image sizes are locked in,
and after images have fully loaded they do not change size and affect any
other element sizes. Simply put, to ensure rendering bugs are not introduced,
it's vital that elements within a virtual item does not dynamically change.

For virtual scrolling, the natural effects of the `<img>` are not desirable
features. We recommend using the `<ion-img>` component over the native
`<img>` element because when an `<img>` element is added to the DOM, it
immediately makes a HTTP request for the image file. Additionally, `<img>`
renders whenever it wants which could be while the user is scrolling. However,
`<ion-img>` is governed by the containing `ion-content` and does not render
images while scrolling quickly.


## Virtual Scroll Performance Tips

#### iOS Cordova WKWebView

Cordovaを使ってiOSにデプロイする場合は、
[WKWebView plugin](https://blog.ionicframework.com/cordova-ios-performance-improvements-drop-in-speed-with-wkwebview/)
プラグインを使ってiOSの高性能なウェブビューを利用することを強くお勧めします。
さらに、WKWebViewは、以前のUIWebViewよりも
スクロールの効率が優れています。

#### 要素のサイズと位置を固定する

仮想スクロールですべてのアイテムのサイズと位置を効率的に変更するには、
各仮想アイテム内のすべての要素がそのサイズや位置を
動的に変更しないことが非常に重要です。
サイズと位置が変わらないようにする最善の方法は、
各仮想アイテムがCSSを使ってそのサイズにロックされていることです。

#### 画像に `ion-img` を使う

仮想スクロールにイメージを含める場合は、標準の<img>HTML要素ではなく、
必ず[`ion-img`](../img/Img/)要素を使用してください。
`ion-img`では、画像は遅延ロードされるため、表示可能な画像のみがレンダリングされ、
HTTPリクエストはスクロール中に効率的に制御されます。

#### 概算の幅と高さを設定する

前述のように、すべての要素の寸法がロックされます。
ただし、virtual scrollは、レンダリングされるまで寸法を認識しません。
最初のレンダリングでは、
virtual scrollで構築する項目数を設定する必要があります。
`approxItemHeight` などの"approx"プロパティを使用すると、
virtual scrollにおおよそのサイズを指定できるため、
virtual scrollで作成する項目数を決定できます。

#### データセットの変更にはvirtualTrackByを使用する

データは変更されていなくても、イテレータ内の要素のIDは変更されます。
たとえば、RPCからサーバーに対してイテレーターが生成され、
そのRPCが再実行された場合などです。
「データ」が変更されていなくても、2回目の応答では異なるIDを持つオブジェクトが生成され、
IonicはDOM全体を分解して再構築します。
これはハイコストな操作であり、可能であれば回避する必要があります。

#### 効率的なヘッダーおよびフッター機能
各仮想アイテムは非常に効率的でなければなりませんが、実際にそのパフォーマンスを低下させる1つの方法は、
セクション・ヘッダーおよびフッター関数内でDOM操作を実行することです。
これらの関数はデータセット内のすべてのレコードに対して呼び出されるため、
パフォーマンスコストが高いことを確認してください。

