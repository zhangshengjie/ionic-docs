---
previousText: 'Overview'
previousUrl: '/docs/react/overview'
nextText: 'Lifecycle'
nextUrl: '/docs/react/lifecycle'
---

# Build Your First Ionic React App

## Ionic Frameworkとは

はじめてIonic Frameworkを試す人がいるならようこそ！ Ionicは、iOS、Android、Electron、およびWebで実行するアプリを構築するための無料のオープンソースコンポーネントライブラリです。 使い慣れたテクノロジー（HTML、CSS、JavaScript）を使用してアプリを一度に作成し、任意のプラットフォームにデプロイします。

Ionicは、UIコンポーネントに加えて、新しいアプリを作成したり、さまざまなプラットフォームに展開したりするためのコマンドラインツールも提供しています。

このガイドでは、ReactとIonicの両方の基本（Ionic固有の機能を含む）について説明します。 Reactに精通している場合は、ガイドを楽しんで、Ionicについて新しいことを学んでください。 どちらにも慣れていない場合でも、心配いりません！ このガイドでは、基本を説明し、アプリを起動して実行するための十分な情報を提供します。

## プロジェクトをIonic CLIで作成する

最初に、最新バージョンのIonic CLIをインストールしましょう。

```shell
npm install -g ionic@latest
```

グローバルコマンドの `ionic` を使用すると、Ionicおよびその他の依存関係を持つReactプロジェクトを作成できます。 新しいプロジェクトを作成するには、次のコマンドを実行します:

```shell
ionic start myApp blank --type=react
cd myApp
```

そして、 `ionic serve` コマンドを実行するとプロジェクトをブラウザで実行することができます。

## React Componentを俯瞰する

アプリのベースは `src` ディレクトリにあり、メインのエントリーポイントは `index.tsx` です。 コードエディタでプロジェクトを開き、 `src/index.tsx` を開くと、次のように表示されます:

```tsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
```

ここでは何をしてるでしょう。まず、最初の3行はいくつかの依存関係を呼び出しています。最初はReact本体です。これにより、JSXと呼ばれるHTMLのような構文でコンポーネントを記述できます。JSXについては後ほど説明します。

2番目のインポートは ReactDOM のためのものです。 `ReactDOM.render` メソッドは、コンポーネントを取得し、指定されたDOMノードにレンダリングするbrowser/DOM固有の方法です。

最後のインポートは、単に `App` という名前のアプリのルートコンポーネントです。 これは最初に表示されるReactコンポーネントであり、Reactアプリの起動に使用します。

`App.tsx` を開くと、次のように表示されます。

```typescript
import React from 'react';
import { Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/home" component={Home} exact={true} />
        <Route exact path="/" render={() => <Redirect to="/home" />} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);
```

一見、多くのことが行われているように見えるかもしれませんので、最初の import のグループから確認します。

```typescript
import React from 'react';
import { Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
```

`index.tsx` と同様に、JSXを使用するには、まずReactをインポートする必要があります。

次のインポートでは、 `react-router-dom` から Routeをインポートします。これは、アプリのURLとレンダリングしたいコンポーネントを一致させるためのメソッドです。

ReactRouterに続いて、Ionicのインポートを行います。 Reactでコンポーネントを使用するには、最初に使いたいコンポーネントをインポートする必要があります。つまり、ボタンコンポーネントやカードコンポーネントを使用する場合でもいつでもインポートする必要があります。 Appコンポーネントの場合、`IonApp` 、 `IonRouterOutlet` と `IonReactRouter` のみを使用しています。

`IonReactRouter` は、ReactRouterのBrowserRouterコンポーネントをラップするコンポーネントです。多少の違いはありますが、BrowserRouterとほぼ同じように動作します。[React Navigation Docs](/docs/react/navigation) に、これらの違いについての詳細なガイドがあります。

最後の重要なインポートは、 `Home` コンポーネントのインポートです。これは、アプリ内でナビゲートするコンポーネントです。ナビゲーション部分については少し後で説明します。

CSSインポートは、padding、typographyなどのようなもののために、Ionicからユーティリティスタイルを取り込みます。

続いて、Reactコンポーネントを確認します:

```typescript
const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/home" component={Home} exact={true} />
        <Route exact path="/" render={() => <Redirect to="/home" />} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);
```

このReactコンポーネントは、アプリの初期ルーティングを設定し、アニメーションとレイアウト用のコアIonicコンポーネント（ `IonRouterOutlet` と `IonApp` ）を内包しています。特徴のひとつに、Reactでは、データバインディングを行うために、値が中括弧（ `{}` ）で渡されることがあります。 したがって、 `Route` コンポーネントでは、手軽に `component` の値を `Home` コンポーネントに設定できます。 これは、Reactがその値が文字列ではなく、コンポーネントへの参照であることを認識する方法です。

> ここで重要なのは、これらはすべて標準のReact DOMライブラリであるということです。つまり、カスタム統合レイヤーや変換のための手順はありません。

## コンポーネントスタイル

今回、ここでは `App` を変更する必要はありません。これは、コンテナコンポーネントの基本的な例です。 Routerロジックを設定すると、指定されたURLルートに一致するコンポーネントをレンダリングするだけです。 すでに1つのcomponent/routerがセットアップされているので、先に進み、 `Home` コンポーネントを変更しましょう。

現在、 `Home`コンポーネントは次のようになっています:

![React home component](/docs/assets/img/guides/react/first-app/home-route.png)

```typescript
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ionic Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        The world is your oyster.
        <p>
          If you get lost, the{' '}
          <a
            target="_blank"
            rel="noopener"
            href="https://ionicframework.com/docs/"
          >
            docs
          </a>{' '}
          will be your guide.
        </p>
      </IonContent>
    </IonPage>
  );
};
```

`App` コンポーネントと同様に、特定のIonicコンポーネントのインポート、Reactのインポート、Reactコンポーネント自体が用意されています。

`IonPage` は、すべてのページの基本コンポーネント（route/URLを持つコンポーネント）であり、ヘッダー、タイトル、コンテンツコンポーネントなど、フルスクリーンコンポーネントの一般的な構成要素が含まれています。

> 独自のページを作成するときは、 `IonPage` をそれらのルートコンポーネントにすることを忘れないことが重要です。 `IonPage` をルートコンポーネントにすることにより、トランジションが適切に機能することを保証し、Ionicコンポーネントが依存するベースCSSを提供することができます。

`IonHeader` については少し説明が必要です。これは、ページの上部に存在することを意図したコンポーネントです。 `IonHeader` 自体は、フレックスボックスベースのレイアウトを処理することを除けば、単独ではあまり機能しません。 `IonToolbar` や `IonSearchbar` などの他のコンポーネントを保持するためのものです。

`IonContent` は、その名前が示すように、ページのメインコンテンツ領域です。ユーザーが操作するスクロール可能なコンテンツと、アプリで使用できるスクロールイベントを提供します。

現在のコンテンツは比較的単純ですが、実際のアプリで使用するようなコンポーネントが含まれていないので、変更してみましょう。

> Note: わかりやすくするために、関数宣言や他のコンポーネントのimportステートメントなど、コンポーネントの繰り返し部分は除外しています。

```typescript
<IonPage>
  ...
  <IonContent>
    <IonList>
      <IonItem>
        <IonCheckbox slot="start" />
        <IonLabel>
          <h1>Create Idea</h1>
          <IonNote>Run Idea by Brandy</IonNote>
        </IonLabel>
        <IonBadge color="success" slot="end">
          5 Days
        </IonBadge>
      </IonItem>
    </IonList>
  </IonContent>
</IonPage>
```

ここでは、 `IonContent` で、 `IonList` と、より複雑な `IonItem` コンポーネントを追加しています。 `IonItem` の中身を見てみましょう。

```typescript
<IonItem>
  <IonCheckbox slot="start" />
  <IonLabel>
    <h1>Create Idea</h1>
    <IonNote>Run Idea by Brandy</IonNote>
  </IonLabel>
  <IonBadge color="success" slot="end">
    5 Days
  </IonBadge>
</IonItem>
```

Item は、Reactの概念とWeb Componentsのコンセプトの組み合わせを明確に示すため、重要です。 Ionic Reactコンセプトの最初の明確な例は、 `IonCheckbox` のReactコンポーネントの自己完結型のタグです。 これは、子コンテンツを含まないコンポーネントを記述する、より単純な方法です。

Web Componentsには、 `slot` と呼ばれる特別な属性があります。 これは、レンダリング時に `IonCheckbox` を配置する場所を `IonItem` に知らせるためのキーです。 これはReact APIではなく、Web標準のAPIです。

Ionicの別のコンポーネント、FABを見てみましょう。 Floating Action Buttons（フローティングアクションボタン）は、アプリの他の部分よりも上位のメインアクションを提供するための便利な方法です。 FABには、FAB、FABボタン、アイコンの3つのコンポーネントが必要です。

```typescript
import { add } from ‘ionicons/icons’;
…

<IonContent>
  <IonList>
  ...
  </IonList>

  <IonFab vertical="bottom" horizontal="end" slot="fixed">
    <IonFabButton>
      <IonIcon icon={add} />
    </IonFabButton>
  </IonFab>

</IonContent>
```

メインの `IonFab` では、 vertical と horizontal 属性で位置を設定しています。 また、slot属性を使用して、レンダリングの場所を "fixed" に設定しています。 これにより、 `IonFab` にスクロール可能な `IonContent` のコンテンツの外側にレンダリングするよう指示します。

次に、これにClickハンドラーを接続しましょう。 やりたいことは、ボタンをクリックすると、新しいページに移動します（このあとすぐにページを作成します）。 これを行うには、React RouterのナビゲーションAPIにアクセスする必要があります。 すばらしいことに、これは Router/Route コンテキストでレンダリングされるため、Homeコンポーネントに渡されたPropsを介してReact Routers APIにアクセスできます。

```typescript
import { add } from 'ionicons/icons';
...
const Home: React.FC<RouteComponentProps> = (props) => {
  return (
    <IonPage>
      <IonHeader>...</IonHeader>
      <IonContent>
        <IonList>...</IonList>
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton onClick={() => props.history.push('/new')}>
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
}
export default Home;
```

コンポーネントの型定義では、 `RouteComponentProps` 型（ `react-router` からインポート）の `props` を渡します。 この `props` オブジェクトは、React Routerから history API へのアクセスを提供し、ナビゲーションスタックに新しいルートをプッシュするようにします。 `IonFabButton` にClickハンドラーを追加し、 `props.history.push` を呼び出して新しいルートを渡すだけです。 この場合、 `/new` に移動します。

```typescript
<IonFabButton onClick={() => props.history.push('/new')} >
```

## 新しいRouteの作成

アプリ内を移動するためのピースが用意できたので、新しいコンポーネントを作成し、新しいルートをルーター宣言に追加しましょう。 `App.tsx` ファイルを開いて、新しいRouteを追加します。

````typescript
...
import Home from './pages/Home';

import NewItem from './pages/NewItem';
...
const App: React.FC = () => {
  const isAuthed = true;
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route path="/home" component={Home} />
          <Route path="/new" component={NewItem} />
          <Redirect exact from="/" to="/home" />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
}
export default App;
````

ルーターにRoute `/new` のエントリができたので、必要な `NewItem` コンポーネントを作成します。 これは `src/pages/NewItem.tsx` に作成します。

とりあえず、いくつかのプレースホルダーコンテンツで `NewItem.tsx` を埋めましょう。

```typescript
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import React from 'react';

const NewItem: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>New Item</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent></IonContent>
    </IonPage>
  );
};
export default NewItem;
```

ここのコンテンツは非常に単純で、 `Home` コンポーネントに似ているはずです。 新しく追加されたのは `IonBackButton` コンポーネントです。 これは、前のRouteに戻るために使用されます。 かなり簡単ですか？ わかりやすいですが、ページをリロードするとどうなりますか？

さて、この場合、メモリ内の履歴は失われるため、戻るボタンは消えます。 これに対処するために、 `defaultHref` 属性を追加し、履歴がない場合にナビゲートするURLを設定します。

```typescript
return (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton defaultHref="/home" />
        </IonButtons>
        <IonTitle>New Item</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent />
  </IonPage>
);
```

ここで、リロードするときにアプリの履歴が存在しない場合、home Routeに戻ることができます。

## Build a Native App

We now have the basics of an Ionic React app down, including some UI components and navigation. The great thing about Ionic’s components is that they work anywhere, including iOS, Android, and PWAs. To deploy to mobile, desktop, and beyond, we use Ionic’s cross-platform app runtime [Capacitor](https://capacitor.ionicframework.com). It provides a consistent, web-focused set of APIs that enable an app to stay as close to web-standards as possible while accessing rich native device features on platforms that support them.

Adding native functionality is easy. First, add Capacitor to your project:

```shell
ionic integrations enable capacitor
```

Next, build the project, then add your platform of choice:

```shell
ionic build
ionic cap add ios
ionic cap add android
```

We use the standard native IDEs (Xcode and Android Studio) to open, build, and run the iOS and Android projects:

```shell
ionic cap open ios
ionic cap open android
```

Additional details can be found [here](https://capacitor.ionicframework.com/docs/getting-started/with-ionic).

Next, check out [all the APIs](https://capacitor.ionicframework.com/docs/apis) that are available. There’s some great stuff, including the [Camera API](https://capacitor.ionicframework.com/docs/apis/camera). We can implement photo capture functionality in just a few lines of code:

```typescript
import { IonContent, IonHeader, IonPage, IonTitle,
         IonToolbar, IonButton } from '@ionic/react';
import React, { useState } from 'react';
import { Plugins, CameraResultType } from '@capacitor/core';

const Home: React.FC = () => {
  const { Camera } = Plugins;
  const [photo, setPhoto] = useState();
  const takePhoto = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri
    });
    setPhoto(image.webPath);
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ionic Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <img src={photo} />
        <IonButton onClick={takePhoto}>Take Photo</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
```

## Where to go from here

This guide covered the basics of creating an Ionic React app, adding some basic navigation, and introducing Capacitor as a way of building native apps. For a more detailed look at Ionic’s components, check out the [component API pages](https://ionicframework.com/docs/components). For more details on React, review the [React Docs](https://reactjs.org/). To keep building native features, see the [Capacitor docs](https://capacitor.ionicframework.com/docs/).

Happy app building! 🎉
