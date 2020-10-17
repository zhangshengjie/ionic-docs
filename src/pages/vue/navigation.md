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

## 頃なるRoutesへのナビゲーション

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

## Shared URLs versus Nested Routes

A common point of confusion when setting up routing is deciding between shared URLs or nested routes. This part of the guide will explain both and help you decide which one to use.

### Shared URLs

Shared URLs is a route configuration where routes have pieces of the URL in common. The following is an example of a shared URL configuration:

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

The above routes are considered "shared" because they reuse the `dashboard` piece of the URL.

### Nested Routes

Nested Routes is a route configuration where routes are listed as children of other routes. The following is an example of a nested route configuration:

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

The above routes are nested because they are in the `children` array of the parent route. Notice that the parent route renders the `DashboardRouterOutlet` component. When you nest routes, you need to render another instance of `ion-router-outlet`.

### Which one should I choose?

Shared URLs are great when you want to transition from page A to page B while preserving the relationship between the two pages in the URL. In our previous example, a button on the `/dashboard` page could transition to the `/dashboard/stats` page. The relationship between the two pages is preserved because of a) the page transition and b) the url.

Nested routes are mostly useful when you need to render content in outlet A while also rendering sub-content inside of a nested outlet B. The most common use case you will run into is tabs. When you load up a tabs Ionic starter application, you will see `ion-tab-bar` and `ion-tabs` components rendered in the first `ion-router-outlet`. The `ion-tabs` component renders another `ion-router-outlet` which is responsible for rendering the contents of each tab.

There are very few use cases in which nested routes make sense in mobile applications. When in doubt, use the shared URL route configuration. We strongly caution against using nested routing in contexts other than tabs as it can quickly make navigating your app confusing.

> The exception to this rule is when working with children of tabs. See [Child Routes within Tabs](#child-routes-within-tabs) for more information.

## Working with Tabs

When working with tabs, Ionic Vue needs a way to know which view belongs to which tab. The `IonTabs` component comes in handy here, but let's look at what the routing setup for this looks like:

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

Here, our `tabs` path loads a `Tabs` component. We provide each tab as a route object inside of the `children` array. In this example, we call the path `tabs`, but this can be customized. 

Let's start by taking a look at our `Tabs` component:

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

If you have worked with Ionic Framework before, this should feel familiar. We create an `ion-tabs` component, and provide an `ion-tab-bar`. The `ion-tab-bar` provides and `ion-tab-button` components, each with a `tab` property that is associated with its corresponding tab in the router config.

### Child Routes within Tabs

Previously, we discussed that most routes should be written with a shared URL configuration. The exception to this rule is when adding child routes to tabs. The reason for this is if we wrote the child routes at the same level as the tab routes, Ionic Vue would not be able to differentiate between a child page and a root tab page.

As a result, when adding child routes to tabs you should always write them as nested routes. Ionic Vue handles the internal logic so that you do not need to add an additional `IonRouterOutlet`:

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

The example above defines the `/tabs/tab1/child` route as a child of the `/tabs/tab1` route.

## IonRouterOutlet

The `IonRouterOutlet` component provides a container to render your views in. It is similar to the `RouterView` component found in other Vue applications except that `IonRouterOutlet` can render multiple pages in the DOM in the same outlet. When a component is rendered in `IonRouterOutlet` we consider this to be an Ionic Framework "page". The router outlet container controls the transition animation between the pages as well as controls when a page is created and destroyed. This helps maintain the state between the views when switching back and forth between them.

Nothing should be provided inside of `IonRouterOutlet` when setting it up in your template. While `IonRouterOutlet` can be nested in child components, we caution against it as it typically makes navigation in apps confusing. See [Shared URLs versus Nested Routes](#shared-urls-versus-nested-routes) for more information.

## Accessing the IonRouter Instance

There may be a few use cases where you need to get access to the `IonRouter` instance from within your Vue application. For example, you might want to know if you are at the root page of the application when a user presses the hardware back button on Android. For use cases like these, you can inject the `IonRouter` dependency into your component:

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

## URL Parameters

Let's expand upon our original routing example to show how we can use URL parameters:

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

Notice that we have now added `:id` to the end of our `detail` path string. URL parameters are dynamic portions of our route paths. When the user navigates to a URL such as `/details/1` the "1" is saved to a parameter named "id" which can be accessed in the component when the route renders.

Let's look at how to use it in our component:

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

Our `route` variable contains an instance of the current route. It also contains any parameters we have passed in. We can obtain the `id` parameter from here and display it on the screen.

## Router History

Vue Router ships with a configurable history mode. Let's look at the different options and why you might want to use each one.

* `createWebHistory`: This option creates an HTML5 history. It leverages the History API to achieve URL navigation without a page reload. This is the most common history mode for single page applications. When in doubt, use `createWebHistory`.

* `createWebHashHistory`: This option adds a hash (`#`) to your URL. This is useful for web applications with no host or when you do not have full control over the server routes. Search engines sometimes ignore hash fragments, so you should use `createWebHistory` instead if SEO is important for your application.

* `createMemoryHistory`: This option creates an in-memory based history. This is mainly used to handle server-side rendering (SSR).

## More Information

For more info on routing in Vue using Vue Router, check out their docs at http://router.vuejs.org/.

