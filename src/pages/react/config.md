---
previousText: 'Navigation'
previousUrl: '/docs/react/navigation'
nextText: 'Platform'
nextUrl: '/docs/react/platform'
---

# Config

Ionic Configは、アプリ全体でコンポーネントのプロパティをグローバルに変更する方法を提供します。 アプリのモード、Tabボタンのレイアウト、アニメーションなどを設定できます。

## 使い方

アプリのIonicの初期設定をオーバーライドするには、Ionicコンポーネントをレンダリングする前に、`@ionic/react` から `setupConfig` メソッドをインポートして呼び出します:

```typescript
setupConfig({
  rippleEffect: false,
  mode: 'md'
});

<IonApp>
  // more components
</IonApp>
```

上記の例では、アプリ全体でマテリアルデザインのリップル効果を無効にし、modeをマテリアルデザインに強制しています。

## Configオプション

以下は、Ionicで使用できる設定オプションのリストです。

| Config                   | Type               | Description                                                                                              |
|--------------------------|--------------------|----------------------------------------------------------------------------------------------------------|
| `actionSheetEnter`       | `AnimationBuilder` | Provides a custom enter animation for all `ion-action-sheet`, overriding the default "animation".
| `actionSheetLeave`       | `AnimationBuilder` | Provides a custom leave animation for all `ion-action-sheet`, overriding the default "animation".
| `alertEnter`             | `AnimationBuilder` | Provides a custom enter animation for all `ion-alert`, overriding the default "animation".
| `alertLeave`             | `AnimationBuilder` | Provides a custom leave animation for all `ion-alert`, overriding the default "animation".
| `animated`               | `boolean`          | If `true`, Ionic will enable all animations and transitions across the app.
| `backButtonIcon`         | `string`           | Overrides the default icon in all `<ion-back-button>` components.
| `backButtonText`         | `string`           | Overrides the default text in all `<ion-back-button>` components.
| `hardwareBackButton`     | `boolean`          | If `true`, Ionic will respond to the hardware back button in an Android device.
| `infiniteLoadingSpinner` | `SpinnerTypes`     | Overrides the default spinner type in all `<ion-infinite-scroll-content>` components.
| `loadingEnter`           | `AnimationBuilder` | Provides a custom enter animation for all `ion-loading`, overriding the default "animation".
| `loadingLeave`           | `AnimationBuilder` | Provides a custom leave animation for all `ion-loading`, overriding the default "animation".
| `loadingSpinner`         | `SpinnerTypes`     | Overrides the default spinner for all `ion-loading` overlays.
| `menuIcon`               | `string`           | Overrides the default icon in all `<ion-menu-button>` components.
| `menuType`               | `string`           | Overrides the default menu type for all `<ion-menu>` components.
| `modalEnter`             | `AnimationBuilder` | Provides a custom enter animation for all `ion-modal`, overriding the default "animation".
| `modalLeave`             | `AnimationBuilder` | Provides a custom leave animation for all `ion-modal`, overriding the default "animation".
| `mode`                   | `Mode`             | The mode determines which platform styles to use for the whole application.
| `navAnimation`           | `AnimationBuilder` | Overrides the default "animation" of all `ion-nav` and `ion-router-outlet` across the whole application.
| `pickerEnter`            | `AnimationBuilder` | Provides a custom enter animation for all `ion-picker`, overriding the default "animation".
| `pickerLeave`            | `AnimationBuilder` | Provides a custom leave animation for all `ion-picker`, overriding the default "animation".
| `popoverEnter`           | `AnimationBuilder` | Provides a custom enter animation for all `ion-popover`, overriding the default "animation".
| `popoverLeave`           | `AnimationBuilder` | Provides a custom leave animation for all `ion-popover`, overriding the default "animation".
| `refreshingIcon`         | `string`           | Overrides the default icon in all `<ion-refresh-content>` components.
| `refreshingSpinner`      | `SpinnerTypes`     | Overrides the default spinner type in all `<ion-refresh-content>` components.
| `spinner`                | `SpinnerTypes`     | Overrides the default spinner in all `<ion-spinner>` components.
| `statusTap`              | `boolean`          | If `true`, clicking or tapping the status bar will cause the content to scroll to the top.
| `swipeBackEnabled`       | `boolean`          | If `true`, Ionic will enable the "swipe-to-go-back" gesture across the application.
| `tabButtonLayout`        | `TabButtonLayout`  | Overrides the default "layout" of all `ion-bar-button` across the whole application.
| `toastEnter`             | `AnimationBuilder` | Provides a custom enter animation for all `ion-toast`, overriding the default "animation".
| `toastLeave`             | `AnimationBuilder` | Provides a custom leave animation for all `ion-toast`, overriding the default "animation".