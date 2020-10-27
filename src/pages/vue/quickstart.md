---
previousText: 'Overview'
previousUrl: '/docs/vue/overview'
nextText: 'Build Your First App'
nextUrl: '/docs/vue/your-first-app'
---

# Ionic Vue クイックスタート

## Ionic Frameworkとは

まず、ここに来たばかりの人を歓迎します！Ionic Frameworkは、 iOS, Android, Electron, Web上で動作するアプリを構築するための、無償でオープンソースのコンポーネントライブラリです。使い慣れたテクノロジ(HTML、CSS、JavaScript)を使用してアプリケーションを一度作成したら、任意のプラットフォームに展開することができます。

UIコンポーネントに加えて、Ionic Frameworkは新しいアプリを作るためのコマンドラインツールを提供し、サポートしている様々なプラットフォームにデプロイすることができます。

このガイドでは、Ionic Framework特有の機能を含め、VueとIonic Frameworkの基本について説明します。Vueに精通している方は、ガイドを楽しみ、Ionic Frameworkについて新しいことを学んでください。どちらにも詳しくない方はご安心ください!このガイドでは、基本的なことを説明し、アプリケーションを起動して実行するのに十分な情報を提供します。

## Ionic CLIを使ったプロジェクト新規作成

はじめに、Ionic CLIの最新版をインストールしましょう。


```shell
npm install -g @ionic/cli@latest
```

これによって使えるようになった、グローバルコマンド `ionic` によって、Ionic Frameworkと他の依存関係を持つVueプロジェクトを作成することができます。新しいプロジェクトを作成するには、次のコマンドを実行します。

```shell
ionic start myApp blank --type vue
cd myApp
```

これで、 `ionic serve` を実行することによって、プロジェクトをブラウザで実行することができます。

## TypeScript と JavaScript のどちらで構築するかを選べます

私たちはTypeScriptが大好きで、スケールさせるアプリを構築するための素晴らしいツールだと確信しています。とはいえ、Vueコミュニティがいかにシンプルさを重視しているかは、ツールや言語などでわかっています。実際、そもそもVueに興味を持ったのはそのおかげかもしれません。シンプルに開始し、必要に応じてスケールアップします。

したがって、TypeScriptの代わりにJavaScriptを使うことができます。Ionic Vueアプリケーションを生成したら、次の手順を実行してください。

1. TypeScriptの依存を削除:

```shell
npm uninstall --save typescript @types/jest @typescript-eslint/eslint-plugin @typescript-eslint/parser @vue/cli-plugin-typescript @vue/eslint-config-typescript
```

2. すべての `.ts` ファイルの拡張子を `.js` にします。blank Ionic Vueアプリでは、 `router/index.ts` と `main.ts` が該当します。

3. `@vue/typescript/recommended` と `@typescript-eslint/no-explicit-any: ‘off’, ` を `.eslintrc.js` から削除します。

4. `router/index.js` から `Array<RouteRecordRaw>` を削除します。

5. `shims-vue.d.ts`ファイルを削除します。

6. Vueコンポーネントにある `script` タグから `lang="ts"` を削除します。blank Ionic Vueアプリの場合、 `App.vue` と `views/Home.vue` が該当します。


## Vueコンポーネントの確認

アプリケーションのベースは `src` ディレクトリにあり、メインのエントリポイントは `main.ts` になります。エディタでプロジェクトを開き、`main.ts` を確認すると、次のように表示されます:

```ts
import { createApp } from 'vue';
import { IonicVue } from '@ionic/vue';

import App from './App.vue'
import router from './router';

const app = createApp(App)
  .use(IonicVue)
  .use(router);

router.isReady().then(() => {
  app.mount('#app');
});
```

ここでは何が実行されているのでしょうか。最初の4行は依存するパッケージを呼び出しています。 `createApp` 関数を使用してVueアプリケーションを初期化していますが、引数に指定している `IonicVue` は、Vue環境でIonic Frameworkを使用できるプラグインです。

3番目にimportされているのはIonicのルートコンポーネントで、単純に `App` と名付けられています。これはアプリが起動したら最初に呼び出されるVueコンポーネントで、Vueアプリの起動プロセスで使われます。

4番目のimportでは、ルーティング設定を取得します。これについては、後で詳しく説明します。

`App.vue` を開くと、次のように表示されます:

```html
<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet
  }
});
</script>
```

scriptに書かれているimportのグループを分解してみていきましょう。


```typescript
import { IonApp, IonRouterOutlet } from '@ionic/vue';
```

Vueでコンポーネントを使用するには、最初にコンポーネントをインポートする必要があります。したがって、Ionic Frameworkの場合、ButtonやCardを使用するときはいつでもインポートに追加する必要があります。 `App` コンポーネントの場合は、 `IonApp` と `IonRouterOutlet` を使用します。 You can also register components globally if you find yourself importing the same components repeatedly. This comes with performance tradeoffs that we cover in [Optimizing Your App](#optimizing-your-app).

次に、テンプレートを見てみましょう。

```html
<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>
```

すべてのVueコンポーネントには `<template>` が必要です。その中に `IonApp` と `IonRouterOutlet` のコンポーネントを配置します。

最後に、コンポーネント定義を見てみましょう:

```typescript
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet
  }
});
```

Vue 3では、ツールのサポートを改善するために、コンポーネントを作成する際に、新しく `defineComponent` 関数を提供しています。最初にコンポーネントの名前を定義し、次にテンプレートで使用するコンポーネントを指定します。

ここで指定できる引数は、 `methods`, `setup` などです。これはVueの[Composition API Documentation](https://v3.vuejs.org/guide/composition-api-introduction.html#why-composition-api)ドキュメントで説明されています。


## ルーターのインストール

Ionic Vueは内部的に [vue-router](https://router.vuejs.org/) を使用しているため、Vue Routerにすでに慣れている場合は、これまでの知識をIonic Vueのナビゲーションに適用できます。先ほど述べたルータの設定を見てみましょう。`router/index.ts` で次のように表示されます。

```typescript
import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Home from '@/views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
```

> この例では、Ionic VueのBlank starterを使っているので、実際にみるrouteは少し違うかもしれません

ここでの設定は `vue-router` を直接使用する場合と同じですが、代わりに `@ionic/vue-router` パッケージから `createRouter` や `createWebHistory` などの依存関係をインポートする必要があります。

依存関係をインポートした後、 `routes` 配列に route を宣言できます。そこから、 routerインスタンスを作成し、routeと使用するhistoryのタイプを提供できます。

Ionic Vueでは、遅延ローディングはすぐに使うことができます。 `Home` コンポーネントをインポートする代わりに、次の操作を実行することもできます:

```typescript
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  }
]
```

ここで疑問に思われるかもしれませんが、コンポーネントへのパスを記述するときに `@` を使用するのはなぜでしょうか。 `@` 記号は、 `src` ディレクトリからの相対パスを記述するためのショートカットです。これは、複数のフォルダにあるファイルでコンポーネントを参照する場合に便利です。 `'../../../views/Home.vue'` の代わりに、単に `'@/views/Home.vue'` とすることもできます。

## コンポーネントのスタイル

ここでは、 `App` コンポーネントを変更する必要はあまりありません。コンテナコンポーネントの基本的な例です。ルータロジックを設定すると、指定されたURLルートに一致するコンポーネントをレンダリングするだけで済みます。すでに1つのコンポーネント/ルータが設定されているので、 `Home` コンポーネントを変更しましょう。

現在、 `Home` コンポーネントはこうなっています:

![Vue home component](/docs/assets/img/guides/vue/first-app/home-route.png)

```html
<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Blank</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Blank</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <strong>Ready to create an app?</strong>
        <p>Start with Ionic <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar
  }
});
</script>

<style scoped>
#container {
  text-align: center;

  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;

  color: #8c8c8c;

  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
```

最初に確認した `App` コンポーネントと同様に、特定のIonic Frameworkコンポーネントのインポート、Vueからのインポート、Vueコンポーネント、そして私たちのコンポーネントに合わせたスタイルがあります。

スタイルに `scoped` を指定していることに注目してください。つまり、ここで記述するスタイルは、このコンポーネントにのみ適用されます。これは、スタイルがコンポーネントから漏れてアプリケーションの他の部分に影響するのを防ぐのに役立ちます。Ionic Vueアプリケーションでは、 `scoped` のついたスタイルを使用することを強くお勧めします。

`IonPage` はすべてのページ(route/URLを持つコンポーネント)の基本コンポーネントであり、header, title, contentコンポーネントなど、フルスクリーンコンポーネントの一般的な構成要素がいくつか含まれています。

> 独自のページを作成する場合は、 `IonPage` をそのルート・コンポーネントにすることを忘れないでください。 `IonPage` をルートコンポーネントにすることは、Ionic Frameworkコンポーネントが依存するベースCSSを提供するだけでなく、トランジションが適切に動作することを保証するために重要です。

`IonHeader` は、ページの先頭に配置されるコンポーネントです。これは、フレックスボックスベースのレイアウトを処理する以外には、単独ではあまり機能しません。これは、`IonToolbar` や `IonSearchbar`などのコンポーネントを保持するためのものです。

`IonContent` は、その名前が示すように、ページのメインコンテンツ領域です。ユーザーが操作するスクロール可能なコンテンツと、アプリで使用できるスクロールイベントを提供する役割を担っています。

現在のコンテンツは比較的シンプルで実際のアプリで使えるものは何も入っていないので、それを変えましょう。

> Note: 簡潔に表記するために、関数宣言や他のコンポーネントからのインポート文など、コンポーネントの繰り返し部分を除外します。

```html
<template>
  <ion-page>
    ...
    <ion-content>
      <ion-list>
        <ion-item>
          <ion-checkbox slot="start"></ion-checkbox>
          <ion-label>
            <h1>Create Idea</h1>
            <ion-note>Run Idea By Brandy</ion-note>
          </ion-label>
          <ion-badge color="success" slot="end">
            5 Days
          </ion-badge>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>
```

ここでは、 `IonContent` に `IonList` と `IonItem` コンポーネントを追加します。ここでは `IonItem` を中心に説明します。

```html
<ion-item>
  <ion-checkbox slot="start"></ion-checkbox>
  <ion-label>
    <h1>Create Idea</h1>
    <ion-note>Run Idea By Brandy</ion-note>
  </ion-label>
  <ion-badge color="success" slot="end">
    5 Days
  </ion-badge>
</ion-item>
```

コードを見ると、 `slot` という特殊な属性があります。これは、レンダリング時に `IonCheckbox` を配置する場所を `IonItem` に知らせるためのキーです。これはVue APIではなく、Web標準APIです。また、Vue 2のslot APIとは異なります。

Ionic Frameworkの別のコンポーネントであるFAB（フローティング・アクション・ボタン）を見てみましょう。FABは、アプリケーションの他の部分よりも上位のメイン・アクションを提供する優れた方法です。このFABには、FAB、FABボタンおよびアイコンの3つのコンポーネントが必要です。

```html
<ion-content>
  <ion-list>
  ...
  </ion-list>

  <ion-fab vertical="bottom" horizontal="end" slot="fixed">
    <ion-fab-button>
      <ion-icon :icon="add"></ion-icon>
    </ion-fab-button>
  </ion-fab>

</ion-content>

<script>
import { add } from 'ionicons/icons';

...

export default defineComponent({
  name: 'Home',
  ...,
  setup() {
    return {
      add
    }
  }
})
</script>
```

メインの `IonFab` では、縦方向と横方向の属性（vertical/horizontal）で表示位置を設定しています。また、slot属性を使用して、レンダー位置を"fixed"に設定します。これにより、 `IonContent` 内のスクロール可能なコンテンツの外側でレンダリングするよう `IonFab` に指示します。

次に、これにクリックハンドラを設定します。FABボタンをクリックすると、新しいページ(この後、すぐに作成します)に移動します。これを行うには、Vue RouterのナビゲーションAPIにアクセスする必要があります。これは `useRouter` パッケージから `vue-router` をインポートすることで実現できます。

```html
import { add } from 'ionicons/icons';

<ion-content>
  <ion-list>
  ...
  </ion-list>

  <ion-fab vertical="bottom" horizontal="end" slot="fixed">
    <ion-fab-button @click="() => router.push('/new')">
      <ion-icon :icon="add"></ion-icon>
    </ion-fab-button>
  </ion-fab>

</ion-content>

<script>
import { add } from 'ionicons/icons';

...

export default defineComponent({
  name: 'Home',
  components: {
    IonContent,
    IonFab,
    IonFabButton,
    IonHeader,
    IonIcon,
    IonPage,
    IonTitle,
    IonToolbar
  },
  setup() {
    return {
      router: useRouter(),
      add
    }
  }
});
</script>
```

このコンポーネントファイルでは、 `useRouter` 関数をインポートしています。この関数を呼び出すと、コンポーネントからルーティングを操作することができます。つまり、Vue Routerから履歴APIにアクセスし、新しいrouteをナビゲーションスタックにプッシュすることができます。利用方法は `IonFabButton` にクリックイベントを追加し、`router.push` を呼び出すだけです。この場合、私たちは `/new` というrouteにナビゲーションします。

```html
<ion-fab-button @click="() => router.push('/new')">
  ...
</ion-fab-button>
```

## 新しいrouteを作成する

これで、アプリケーション内をナビゲートするための環境が整ったので、新しいコンポーネントを作成し、新しいrouteをルーターの宣言に追加する必要があります。 `router/index.ts` を開いて、 `new` のrouteを追加します。

```typescript
import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Home from '@/views/Home.vue'
import NewItem from '@/views/NewItem.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/new',
    name: 'NewItem',
    component: NewItem
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
```
routeに `/new` を追加したので、該当するコンポーネントとなる `NewItem` を作成します。これは `views/NewItem.vue` に作成します。

新しく `NewItem.vue` ファイルを作成します。

```html
<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title>New Item</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content></ion-content>
  </ion-page>
</template>

<script>
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NewItem',
  components: {
    IonBackButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar
  }
});
</script>
```

ここでの内容は、 `Home` コンポーネントに似ています。異なるのは、 `IonBackButton` コンポーネントです。これは、前のrouteに戻るために使用されます。簡単でしょ?わかりました、でもページをリロードしたらどうなりますか?

この場合、インメモリ内から履歴は失われるため、 戻るボタンは表示されません。この問題を解決するには、 `default-href` 属性値を、履歴がない場合にナビゲートするURLに設定します。

```html
<ion-back-button default-href="/home"></ion-back-button>
```

これで、アプリの履歴がない場合も、home routeに戻るための戻るボタンを表示することができます。

## アイコンの追加

Ionic Vueには [Ionicons](https://ionicons.com/) がプリインストールされています。開発者がアプリケーションで使用できるオプションはいくつかあります。

### ダイナミックインポート

Ioniconsを使用する場合は、ダイナミックインポートを使用することをお勧めします。これには、選択したアイコンを `ionicons` パッケージからインポートし、テンプレートに渡すことが含まれます:

```html
<template>
  <ion-page>
    <ion-content>
      <ion-icon :icon="heart"></ion-icon>
    </ion-content>
  </ion-page>
</template>

<script>
import { heart } from 'ionicons/icons';
import {
  IonContent,
  IonPage,
} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Icon',
  components: {
    IonContent,
    IonPage,
  },
  setup() {
    return { heart }
  }
});
</script>
```

ここでやっていることを詳しく説明しましょう。まず、 `heart` のアイコンを `ionicons/icons` からインポートします。これにより、アイコンの適切なSVGデータがロードされます。

次に、 `setup` メソッドで `heart` データをテンプレートに渡します。

最後に、 `icon` プロパティーを使用してアイコンデータを `ion-icon` コンポーネントに渡します。

開発者は、モードに応じて異なるアイコンを設定することもできます:

```html
<template>
  <ion-page>
    <ion-content>
      <ion-icon :ios="logoApple" :md="logoAndroid"></ion-icon>
    </ion-content>
  </ion-page>
</template>

<script>
import { logoAndroid, logoApple } from 'ionicons/icons';
import {
  IonContent,
  IonPage,
} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Icon',
  components: {
    IonContent,
    IonPage,
  },
  setup() {
    return { logoAndroid, logoApple }
  }
});
</script>
```

> Note: これらのアイコン名は、読み込み時にはキャメルケースで読み込む必要があります。

### グローバルインポート

もう1つのオプションは、特定のアイコンをグローバルにインポートすることです。アプリケーションを起動するたびにアイコンが強制的にロードされ、アプリケーションの初期チャンク・サイズが大きくなる可能性があるため、通常は推奨しません。

とはいえ、特定のアイコンをグローバルにロードすることに意味があるユースケースがあるかもしれません:

**main.ts**
```typescript
import { addIcons } from 'ionicons';
import { heart } from 'ionicons/icons';

addIcons({
  'heart': heart
});
```

**Home.vue**
```html
<template>
  <ion-page>
    <ion-content>
      <ion-icon icon="heart"></ion-icon>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonContent,
  IonPage,
} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  components: {
    IonContent,
    IonPage,
  }
});
</script>
```

`main.ts` で `addIcons` 関数を利用すると、アイコンをグローバルに登録し、キーとして文字列で指定することができます。この場合、 `Home` コンポーネントでキーでアイコンを参照します。

## Optimizing Your Build

Vue gives you several tools to fine tune your application. This section will cover the options that are most relevant to Ionic Framework.

### Local Component Registration (Recommended)

By default, Ionic Framework components are registered locally. With local registration, these components are imported and provided to each Vue component you want to use them in. This is the recommended approach as it allows lazy loading and treeshaking to work properly with Ionic Framework components.

The one downside to this approach is that it may be tedious to re-import your Ionic Framework components multiple times. However, we feel that the performance benefits you receive in exchange are worth it.

Also note that locally registered components are not available in subcomponents. You will need to re-import the Ionic Framework components you would like to use in your subcomponent.

Let's take a look at how local component registration works:

```html
<template>
  <ion-page>
    <ion-content>
      <Subcomponent></Subcomponent>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonContent, IonPage } from '@ionic/vue';
import Subcomponent from '@/components/Subcomponent.vue';

export default defineComponent({
  components: { IonContent, IonPage, Subcomponent }
});
</script>
```

In the example above, we are using the `IonPage` and `IonContent` components. To use them, we first import them from `@ionic/vue`. Then, we provide them to our Vue component in the `components` option. From there, we can use the components in our template.

Note that since we are registering these components locally, neither `IonPage` nor `IonContent` will be available in `Subcomponent` unless we register them there as well.

For more information, see the <a href="https://v3.vuejs.org/guide/component-registration.html#local-registration" target="_blank" rel="noopener noreferrer">Local Registration Vue Documentation</a>.

### Global Component Registration

The other option for registering components is to use global registration. Global registration involves importing the components you want to use in `main.ts` and calling the `component` method on your Vue app instance.

While this makes it easier to add Ionic Framework components to your Vue app, global registration often is not ideal. To quote the Vue documentation: "If you're using a build system like Webpack, globally registering all components means that even if you stop using a component, it could still be included in your final build. This unnecessarily increases the amount of JavaScript your users have to download".

Let's take a look at how global component registration works:

**main.ts**
```typescript
import { IonContent, IonicVue, IonPage } from '@ionic/vue';

const app = createApp(App)
  .use(IonicVue)
  .use(router);

app.component('ion-content', IonContent);
app.component('ion-page', IonPage);
```

**MyComponent.vue**
```html
<template>
  <ion-page>
    <ion-content>
      <Subcomponent></Subcomponent>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Subcomponent from '@/components/Subcomponent.vue';

export default defineComponent({
  components: { Subcomponent }
});
</script>
```

In the example above, we are using the `IonPage` and `IonContent` components. To use them, we first import them from `@ionic/vue` in `main.ts`. From there, we call the `component` method on our app instance and pass it the tag name as well as the component definition. After we do that, we can use the components in the rest of our application without having to import them into each Vue component.

For more information, see the <a href="https://v3.vuejs.org/guide/component-registration.html#global-registration" target="_blank" rel="noopener noreferrer">Global Registration Vue Documentation</a>.

### Prefetching Application JavaScript

By default, the Vue CLI will automatically generate prefetch hints for the JavaScript in your application. Prefetching utiltizes the browser idle time to download documents that the user might visit in the near future. When the user visits a page that requires the prefetched document, it can be served quickly from the browser's cache.

Prefetching consumes bandwidth, so if you have a large app, you may want to disable it. You can do this by modifying or creating your `vue.config.js` file:

**vue.config.js**
```js
module.exports = {
  chainWebpack: config => {
    config.plugins.delete('prefetch')
  }
}
```

The configuration above will prevent all files from being prefetched and, instead, will be loaded when they are needed. You can also select certain chunks to prefetch. Check out the <a href="https://cli.vuejs.org/guide/html-and-static-assets.html#prefetch" target="_blank" rel="noopener noreferrer">Vue CLI Docs on Prefetching</a> for more examples.

## ネイティブアプリとしてビルド

UIコンポーネントやナビゲーションなど、Ionic Vueアプリの基本的な部分はすでに完成しています。Ionic Frameworkのコンポーネントの素晴らしいところは、iOS、Android、PWAを含むどこでも動作することです。モバイル、デスクトップ、その他にもデプロイするために、Ionicのクロスプラットフォームライブラリ [Capacitor](https://capacitor.ionicframework.com) を使用することができます。一貫性のあるWebに特化したAPIセットを提供することで、 Web標準をサポートするプラットフォーム上の豊富なネイティブデバイス機能にアクセスしながら、アプリケーションを可能な限りWeb標準に近づけることが可能になります。

ネイティブ機能を追加するのは簡単で、最初にプロジェクトにCapacitorを追加します:

```shell
ionic integrations enable capacitor
```

次に、プロジェクトをビルドしてから利用するプラットフォームを選択します:

```shell
ionic build
ionic cap add ios
ionic cap add android
```

iOSとAndroidのプロジェクトを開いたり、ビルド、実行するのに、ネイティブのIDE(Xcode と Android Studio)を使います:

```shell
ionic cap open ios
ionic cap open android
```

詳細は [こちら](https://capacitor.ionicframework.com/docs/getting-started/with-ionic) をご覧ください。

次に、 [すべての利用可能なAPIs](https://capacitor.ionicframework.com/docs/apis) を確認します。[Camera API](https://capacitor.ionicframework.com/docs/apis/camera) を含むすばらしい機能があります。以下の数行のコードでカメラ機能を実装することができます￥:

```html
<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Ionic Blank</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <img :src="photo" />
      <ion-button @click="takePhoto()">Take Photo</ion-button>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle
} from '@ionic/vue';
import { defineComponent, ref } from 'vue';
import { Plugins, CameraResultType } from '@capacitor/core';
const { Camera } = Plugins;

export default defineComponent({
  name: 'Home',
  components: {
    IonButton,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle
  },
  setup() {
    const imageSrc = ref('');
    const takePhoto = async () => {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.Uri
      });

      imageSrc.value = image.webPath;
    }

    return {
      photo: imageSrc,
      takePhoto
    }
  }
})
</script>
```

## 次にすること

このガイドでは、Ionic Vueアプリの作成の基本、基本的なナビゲーションの追加、ネイティブアプリを構築する方法としてのCapacitorの紹介について説明した。VueとCapacitorを使って完全なIonic Frameworkアプリを構築するには、我々の [First App guide](/docs/vue/your-first-app) をご覧ください。

Ionic Frameworksのコンポーネントの詳細については、 [component API pages](https://ionicframework.com/docs/components) を参照してください。Vueの詳細については、 [Vue Docs](https://v3.vuejs.org/) を参照のこと。ネイティブ機能の構築を続けるには、[Capacitor docs](https://capacitor.ionicframework.com/docs/) を参照してください。

アプリ構築をお楽しみください! 🎉
