---
previousText: 'Lifecycle'
previousUrl: '/docs/vue/lifecycle'
nextText: 'Config'
nextUrl: '/docs/vue/config'
---

# Vueナビゲーション

このガイドでは、IonicとVueで構築されたアプリでルーティングがどのように機能するかについて説明します。

`IonRouterOutlet` コンポーネントは、内部で一般的な [Vue Router](https://router.vuejs.org/) ライブラリを使用します。IonicとVue Routerを使えば、リッチなページ遷移を持つマルチページアプリを作ることができます。

Vue Routerを使ったルーティングについて知っていることはすべてIonic Vueに引き継がれます。Ionic Vueアプリの基本とルーティングの仕組みを見てみましょう。

## 簡単なメモ

このガイドを読むと、これらの概念のほとんどが、Ionic Frameworkを使用しないVueルータに見られる概念と非常によく似ていることがわかります。あなたの意見は正しいでしょう!Ionic VueはVue Routerの長所を活用して、Ionic Frameworkを使ったアプリ構築への移行を可能な限りシームレスにしています。そのため、独自のルーティングソリューションを構築するよりも、可能な限りVueルータの機能に依存することをお勧めします。

## 簡単なRoute

次に示すのは、 "/home" URLへの単一のルートを定義するルーティング設定の例です。 "/home" にアクセスすると、ルートによって `HomePage`  コンポーネントがレンダリングされます。

**router/index.ts**

```typescript
import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '@/views/Home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
```

アプリケーションが最初にロードされると、 `HomePage` コンポーネントがここで設定したとおりに表示されます。

## リダイレクトの設定

最初ロードされたパスに別のパスを設定したい場合はどうすればよいでしょうか。これには、ルータリダイレクトを使用できます。リダイレクトは通常のルートオブジェクトと同じように機能しますが、いくつかの異なるキーが含まれています。

```typescript
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
]
```

このリダイレクトでは、最初にインデックスのパスが参照されます。そして、 `home` routeにリダイレクトしてロードを行います。

## 異なるRoutesへのナビゲーション

これは素晴らしいことですが、実際にルートにナビゲートするにはどうすればよいのでしょうか。これには、 `router-link` プロパティを使用できます。新しいルーティング設定を作成します:

```typescript
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/detail',
    name: 'Detail',
    component: DetailPage
  }
]
```

`home` routeで開始し、`detail` routeに移動するボタンを追加するとします。`detail` routeに移動するには、次のHTMLを使用します:
```html
<ion-button router-link="/detail">Go to detail</ion-button>
```

また、ルーターAPIを使用して、プログラムでアプリケーション内を移動することもできます:

```typescript
<template>
  <ion-page>
    <ion-content>
      <ion-button @click="() => router.push('/detail')">Go to detail</ion-button>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
  import { IonButton, IonContent, IonPage } from '@ionic/vue';
  import { defineComponent } from 'vue';
  import { useRouter } from 'vue-router';
  
  export default defineComponent({
    name: 'HomePage',
    components: {
      IonButton, 
      IonContent, 
      IonPage
    },
    setup() {
      const router = useRouter();
      return { router };
    }
  })
</script>
```

どちらのオプションも同じナビゲーション機構を提供し、異なるユースケースに対応します。

## 遅延読み込みRoute

現在のrouteの設定方法では、アプリをロードするときに同じ初期チャンクに含まれるようになっているが、これは必ずしも理想的ではありません。代わりに、必要に応じてコンポーネントがロードされるようにrouteを設定できます。

```typescript
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/detail',
    name: 'Detail',
    component: () => import('@/views/DetailPage.vue')
  }
]
```
ここでは、以前と同じ設定になっていますが、今回は `DetailPage` がimport callに置き換えられました。これにより、アプリケーションのロード時に要求されたチャンクに `DetailPage` コンポーネントが含まれなくなります。

## 共有URLとネストされたルート

ルーティングを設定する際の一般的な混乱点は、共有URLまたはネストされたrouteのどちらかを決定することです。ガイドのこの部分では、両方について説明し、どちらを使用するかを決定するのに役立ちます。

### 共有URL

共有URLは、ルートが共通のURLの一部を持つルート設定です。共有URL設定の例を次に示します:

```typescript
const routes: Array<RouteRecordRaw> = [
  {
    path: '/dashboard', 
    component: DashboardMainPage,
  },
  {
    path: '/dashboard/stats',
    component: DashboardStatsPage
  }
];
```

上記のルートは、URLの `dashboard` 部分を再利用するため、 "shared" と見なされます。

### ネストされたRoute

Nested Routesは、ルートが他のルートの子としてリストされるルート設定です。ネストされたルート設定の例を次に示します:

```typescript
const routes: Array<RouteRecordRaw> = [
  {
    path: '/dashboard/:id', 
    component: DashboardRouterOutlet,
    children: [
      {
        path: '',
        component: DashboardMainPage
      },
      { 
        path: 'stats', 
        component: DashboardStatsPage
      },
    ]
  }
];
```

上記のルートは、親ルートの `children` 配列にあるため、ネストされています。親ルートが `DashboardRouterOutlet` コンポーネントをレンダリングしていることに注目してください。ルートをネストする場合は、 `ion-router-outlet` の別のインスタンスをレンダリングする必要があります。

### どちらを選ぶべきか

共有URLは、URLの2つのページ間の関係を維持しながら、ページAからページBに遷移する場合に便利です。前述の例では、 `/dashboard` ページのボタンで `/dashboard/stats` ページに移行できます。2つのページ間の関係は、a) ページの遷移とb) URLによって維持されます。

ネストされたルートは、コンセントAのコンテンツをレンダリングする必要がある場合、およびネストされたコンセントBの内部のサブコンテンツをレンダリングする必要がある場合に便利です。最も一般的な使用例は、タブです。Ionicスターターアプリのタブをロードすると、最初の `ion-router-outlet` で `ion-tab-bar`  および `ion-tabs` コンポーネントがレンダリングされます。`ion-tabs` コンポーネントは、各タブの内容をレンダリングする別の 「イオンルータ出力」 をレンダリングします。

モバイルアプリケーションでネストされたルートが意味をなすユースケースはほとんどありません。疑わしい場合は、共有URLルート設定を使用します。ネストされたルーティングをタブ以外のコンテキストで使用すると、アプリのナビゲーションが混乱する可能性があるため、使用しないように強く注意しています。

> 例外は、タブの子を操作する場合です。詳しくは [Child Routes within Tabs](#child-routes-within-tabs) をご覧ください。

## タブの操作

タブを操作する場合、Ionic Vueはどのビューがどのタブに属しているかを知る方法を必要とします。ここでは `IonTabs` コンポーネントが便利ですが、この場合のルーティング設定を見てみましょう:

```typescript
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/tab1'
  },
  {
    path: '/tabs/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: 'tab1'
      },
      {
        path: 'tab1',
        component: () => import('@/views/Tab1.vue')
      },
      {
        path: 'tab2',
        component: () => import('@/views/Tab2.vue')
      },
      {
        path: 'tab3',
        component: () => import('@/views/Tab3.vue')
      }
    ]
  }
]
```

ここで、 `tabs` パスは `Tabs` コンポーネントをロードします。各タブは、 `children` 配列内のルートオブジェクトとして提供されます。この例では、パスを `tabs` としていますがこれはカスタマイズできます。

まず、 `Tabs` コンポーネントをみていきましょう:

```typescript
<template>
  <ion-page>
    <ion-content>
      <ion-tabs>
        <ion-tab-bar slot="bottom">
          <ion-tab-button tab="tab1" href="/tabs/tab1">
            <ion-icon :icon="triangle" />
            <ion-label>Tab 1</ion-label>
          </ion-tab-button>
            
          <ion-tab-button tab="tab2" href="/tabs/tab2">
            <ion-icon :icon="ellipse" />
            <ion-label>Tab 2</ion-label>
          </ion-tab-button>
          
          <ion-tab-button tab="tab3" href="/tabs/tab3">
            <ion-icon :icon="square" />
            <ion-label>Tab 3</ion-label>
          </ion-tab-button>
        </ion-tab-bar>
      </ion-tabs>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonContent, IonLabel, IonIcon, IonPage } from '@ionic/vue';
import { ellipse, square, triangle } from 'ionicons/icons';

export default {
  name: 'Tabs',
  components: { IonContent, IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage },
  setup() {
    return {
      ellipse, 
      square, 
      triangle,
    }
  }
}
</script>
```

以前にIonic Frameworkを使ったことがある人なら、このことをよく知っているはずです。`ion-tabs` コンポーネントを作成し、 `ion-tab-bar` を提供します。`ion-tab-bar` は `ion-tab-button` コンポーネントを提供し、それぞれにルータの設定の対応するタブに関連付けられた `tab` プロパティがあります。

### タブ内の子ルート

先程、ほとんどの経路は共有URL設定で書かれるべきだと論じました。この規則の例外は、子ルートをタブに追加する場合です。これは、タブルートと同じレベルに子ルートを記述した場合、Ionic Vueは子ページとルートタブページを区別できないためです。

そのため、子ルートをタブに追加する場合は、常にネストされたルートとして記述する必要があります。Ionic Vueは内部ロジックを処理するため、 `IonRouterOutlet` を追加する必要はありません:

```typescript
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/tab1'
  },
  {
    path: '/tabs/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: 'tab1'
      },
      {
        path: 'tab1',
        component: () => import('@/views/Tab1.vue'),
        children: [
          {
            path: 'child',
            component: () => import('@/views/Tab1Child.vue')
          }
        ]
      },
      {
        path: 'tab2',
        component: () => import('@/views/Tab2.vue')
      },
      {
        path: 'tab3',
        component: () => import('@/views/Tab3.vue')
      }
    ]
  }
]
```

上記の例では、`/tabs/tab 1/child` ルートを `/tabs/tab1` ルートの子として定義しています。

## IonRouterOutlet

`IonRouterOutlet` コンポーネントは、ビューをレンダリングするためのコンテナを提供します。これは他のVueアプリケーションに見られる `RouterView` コンポーネントに似ていますが、 `IonRouterOutlet` は同じアウトレット内のDOMで複数のページをレンダリングできるという点が異なります。コンポーネントが `IonRouterOutlet` でレンダリングされる場合、これはIonic Framework "Page"と見なされます。ルーター・アウトレット・コンテナーは、ページ間の遷移アニメーションを制御するだけでなく、ページがいつ作成および破棄されるかを制御します。これにより、ビューを切り替えるときにビュー間の状態を維持することができます。

テンプレートで設定する際に、 `IonRouterOutlet` の内部には何も指定しないでください。`IonRouterOutlet` は子コンポーネントにネストすることができますが、通常はアプリケーション内のナビゲーションが混乱するため注意が必要です。詳細については、[Shared URLs versus Nested Routes](#shared-urls-versus-nested-routes) を参照してください。

## IonRouter インスタンスへのアクセス

Vueアプリケーション内から  `IonRouter` インスタンスにアクセスする必要があるユースケースがいくつかあるかもしれません。例えば、Androidでユーザーがハードウェアの 「戻る」 ボタンを押したときに、アプリケーションのルート・ページにいるかどうかを知ることができます。このようなユースケースでは、コンポーネントに `IonRouter` 依存関係を注入できます。

```typescript
import { useIonRouter } from '@ionic/vue';

...

export default {
  setup() {
    const ionRouter = useIonRouter();
    if (ionRouter.canGoBack()) {
      // Perform some action here
    }
  }
}
```

## URLパラメーター

元のルーティング例を拡張して、URLパラメータの使用方法を示します:

```typescript
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: DetailPage
  }
]
```

ここで、 `detail` パス文字列の最後に `:id` を追加したことに注意してください。URLパラメータは、ルートパスの動的な部分です。ユーザーが `/details/1` などのURLに移動すると、 "1" が "id" という名前のパラメータに保存され、ルートのレンダリング時にコンポーネントでアクセスできるようになります。

コンポーネントでの使用方法を見てみましょう。

```typescript
<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Details</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content>
      Detail ID: {{ id }}
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  name: 'Detail',
  components: {
    IonContent, 
    IonHeader, 
    IonPage, 
    IonTitle, 
    IonToolbar
  },
  setup() {
    const route = useRoute();
    const { id } = route.params;
    return { id };
  }
})
</script>
```

`route` 変数には、現在のルートのインスタンスが含まれます。また、渡されたパラメータも含まれます。ここから `id` パラメータを取得して画面に表示できます。

## ルーター履歴

Vueルータには設定可能な履歴モードが付属しています。さまざまなオプションと、それぞれを使用する理由について説明します。

* `createWebHistory`: このオプションはHTML 5ヒストリを作成します。History APIを利用して、ページをリロードせずにURLナビゲーションを実現している。これは、単一ページアプリケーションで最も一般的な履歴モードです。疑わしい場合は、 `createWebHistory` を使用します。

* `createWebHashHistory`: このオプションは、ハッシュ (`#`) をURLに追加します。これは、ホストがないWebアプリケーションや、サーバールートを完全に制御できない場合に便利です。検索エンジンはハッシュの断片を無視することがあるので、SEOがあなたのアプリケーションにとって重要であるなら、代わりに `createWebHistory` を使うべきです。

* `createMemoryHistory`: このオプションは、インメモリベースのヒストリを作成します。これは主にサーバ側レンダリング (SSR) を処理するために使用されます。

## より多くの情報を得るために

Vueルータを使ったVueでのルーティングの詳細については、 http://router.vuejs.org/ のドキュメントをご覧ください。

