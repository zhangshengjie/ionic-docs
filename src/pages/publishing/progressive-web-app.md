---
nextText: 'Publishing to the iOS App Store'
nextUrl: '/docs/publishing/app-store'
contributors:
  - MustaRohman
  - mhartington
---

# Progressive Web App のリリース

IonicアプリはWebテクノロジで構築されているため、Progressive Web Appを作成して、ネイティブアプリと同じように実行できます。PWAが何かわからない？詳細については、Ionicの<a href="https://ionicframework.com/pwa" target="_blank">PWA Overview</a>を参照してください。

## アプリをPWAにする

PWAの2つの主な要件は、<a href="https://developers.google.com/web/fundamentals/primers/service-workers/" target="_blank">Service Worker</a> と <a href="https://developers.google.com/web/fundamentals/web-app-manifest/" target="_blank">Web Manifest</a>です。これらの両方を手動でアプリに追加することは可能ですが、Angularチームはこれを自動化するための `@angular/pwa` というパッケージを用意しています。

`@angular/pwa` パッケージは、自動的にアプリケーションにService Workerやアプリのマニフェストを追加します。
このパッケージをアプリに追加するには、次のコマンドを実行します:

```shell
$ ng add @angular/pwa
```

このパッケージが追加されて `ionic build --prod` を実行すると、 `www` ディレクトリにPWAとしてデプロイするファイルが用意されます。

> デフォルトでは `@angular/pwa` パッケージにはアプリアイコン用のAngularロゴが付いています。マニフェストを更新して正しいアプリ名を使用するようにし、アイコンを置き換えるようにしてください。

アプリが、CordovaやElectronなどの他のチャンネルにデプロイされている場合は、`angular.json` で `"serviceWorker": true` フラグを削除できます。

"serviceWorker": true、angular.jsonファイルからフラグを削除できます。service workerは、次のコマンドを実行しても生成できます。

```shell
$ ionic build --prod --service-worker
```

> Note: Service Workersや多くのJavaScript API（地理位置情報など）などの機能では、アプリを安全なコンテキストでホストする必要があります。ホスティングサービスを介してアプリをデプロイする場合は、Service Workersを最大限に活用するためにHTTPSが必要になることに注意してください。

## Deploying

### Firebase

Firebase hostingは、CDNによる応答時間の短縮、デフォルトでHTTPSが有効になっており、[HTTP2 push](https://firebase.googleblog.com/2016/09/http2-comes-to-firebase-hosting.html)のサポートなど、Progressive Web Appsに多くの利点を提供します。

First, if not already available, [create the project](https://console.firebase.google.com) in Firebase.

Next, in a Terminal, install the Firebase CLI:

```shell
$ npm install -g firebase-tools
```

With the Firebase CLI installed, run `firebase init` within your Ionic project. The CLI prompts:

**"Which Firebase CLI features do you want to set up for this folder?"**  Choose "Hosting: Configure and deploy Firebase Hosting sites."

**"Select a default Firebase project for this directory:"** Choose the project you created on the Firebase website.

**"What do you want to use as your public directory?"** Enter "www".

> Note: Answering these next two questions will ensure that routing, hard reload, and deep linking work in the app:

**Configure as a single-page app (rewrite all urls to /index.html)?"** Enter "Yes".

**"File www/index.html already exists. Overwrite?"** Enter "No".

A `firebase.json` config file is generated, configuring the app for deployment.

The last thing needed is to make sure caching headers are being set correctly. To do this, add a `headers` snippet to the `firebase.json` file. The complete `firebase.json` looks like:

```json
{
  "hosting": {
    "public": "www",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ],
    "headers": [
      {
        "source": "/build/app/**",
        "headers": [
          {
            "key": "Cache-Control",
            "value": "public, max-age=31536000"
          }
        ]
      },
      {
        "source": "ngsw-worker.js",
        "headers": [
          {
            "key": "Cache-Control",
            "value": "no-cache"
          }
        ]
      }
    ]
  }
}
```

For more information about the `firebase.json` properties, see the [Firebase documentation](https://firebase.google.com/docs/hosting/full-config#section-firebase-json).

Next, build an optimized version of the app by running:

```shell
$ ionic build --prod
```

Last, deploy the app by running:

```shell
$ firebase deploy
```

After this completes, the app will be live.
