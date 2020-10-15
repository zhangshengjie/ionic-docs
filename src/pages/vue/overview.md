---
title: Ionic Vue
nextText: 'Build Your First App'
nextUrl: '/docs/vue/your-first-app'
---

# Ionic Vueの概要

`@ionic/vue` はcore Ionic experienceに、Vue開発者向けにカスタマイズされたツールとAPIを組み合わせたものです。

## Vueバージョンサポート

Ionic VueはVue 3.0.0上に構築されています。Ionic Vueの初期バージョンでアプリを構築している場合は、最新のリリースにアップグレードして、Vueの依存関係をアップグレードしてください。

## Vueツール

Ionic Vueプロジェクトには通常のVue CLIプロジェクトと同じツールが付属しています。つまり、Vue CLIとそのすべての機能を使って構築することになりま。VueのデフォルトテンプレートにはルーティングやTypeScriptのサポートなど、デフォルトで有効になっている機能がほとんどありませんが、Ionic Vueはそれらをデフォルトで有効にしています。

## Native Tooling

[Capacitor](https://capacitor.ionicframework.com) は、Ionic VueウェブアプリをiOS、Android、ウェブ上でネイティブに動作させるための公式クロスプラットフォームアプリライブラリです。

[Cordova](https://cordova.apache.org/) とCordovaプラグインでIonic Vueを使用する際の技術的な制限はありませんが、Capacitorが公式に推奨されています。現時点では、[Ionic CLIツール](/docs/cli) ツールでIonic VueのCordova統合をサポートする計画はない。詳細は [こちら](https://capacitor.ionicframework.com/docs/cordova) をご覧ください。

## コミュニティからの情報

- [Using Vue.js with Ionic & Capacitor](https://dev.to/aaronksaunders/using-vue-js-v3-beta-with-ionic-components-capacitor-plugins-2b6f) - Aaron Saunders

## インストール

<command-line>
    <command-prompt>npm install -g @ionic/cli</command-prompt>
    <command-prompt>ionic start myApp tabs --type vue</command-prompt>
    <br/>
    <command-prompt>ionic serve <command-cursor blink></command-cursor></command-prompt>
</command-line>


## Resources

<docs-cards>
  <docs-card header="はじめ方" href="/docs/vue/your-first-app" icon="/docs/assets/icons/feature-component-actionsheet-icon.png">
    <p>Ionic Frameworkを使用して素晴らしいアプリケーションを構築するために必要な基礎を学習します。</p>
  </docs-card>

  <docs-card header="ナビゲーション" href="/docs/vue/navigation" icon="/docs/assets/icons/feature-component-navigation-icon.png">
    <p>IonicとVueルータを使ったアプリ内ナビゲーションの基本を学びます</p>
  </docs-card>

  <docs-card header="ライフサイクル" href="/docs/vue/lifecycle" icon="/docs/assets/icons/feature-guide-components-icon.png">
    <p>クラスコンポーネントとフックでのIonicライフサイクルイベントの使用方法</p>
  </docs-card>


</docs-cards>
