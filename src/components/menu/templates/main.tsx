import { h } from '@stencil/core';

export default () => <docs-nav items={items}/>;

const items = {
  '紹介': {
    'Ionic Frameworkとは': '/docs/intro',
    'コアコンセプト': '/docs/intro/concepts',
    '初めてのアプリ構築': '/docs/angular/your-first-app',
    'ブラウザサポート': '/docs/intro/browser-support',
    'バージョニング': '/docs/intro/versioning',
    'リリースノート': '/docs/release-notes',
    'サポート': '/docs/intro/support'
  },
  'インストール': {
    'CLIのインストール': '/docs/installation/cli',
    'PackagesとCDN': '/docs/installation/cdn',
    '環境設定': '/docs/installation/environment',
    'iOSセットアップ': '/docs/installation/ios',
    'Androidセットアップ': '/docs/installation/android',
  },
  '構築方法': {
    'はじめ方': '/docs/building/starting',
    'アプリ開発の基本': '/docs/building/scaffolding',
    'v4への移行': '/docs/building/migration',
    'クロスプラットフォーム': '/docs/building/cross-platform',
    'アプリ開発の概要': '/docs/building/running',
    'iOSでの開発': '/docs/building/ios',
    'Androidでの開発': '/docs/building/android',
    'テスト': '/docs/building/testing',
    'Contributing': '/docs/building/contributing',
    'Web View': '/docs/building/webview',
    'Ionic Storage': '/docs/building/storage'
  },
  'レイアウト': {
    '構造': '/docs/layout/structure',
    'Responsive Grid': '/docs/layout/grid',
    'グローバルスタイルシート': '/docs/layout/global-stylesheets',
    'CSSユーティリティ': '/docs/layout/css-utilities',
  },
  'テーマのカスタマイズ': {
    'テーマの基本': '/docs/theming/basics',
    'プラットフォームの外観': '/docs/theming/platform-styles',
    'CSS変数': '/docs/theming/css-variables',
    '配色': '/docs/theming/colors',
    'テーマ': '/docs/theming/themes',
    '高度なカスタマイズ': '/docs/theming/advanced',
    'カラージェネレーター 🎨': '/docs/theming/color-generator'
  },
  'Angular': {
    '概要': '/docs/angular/overview',
    '初めてのアプリ構築': '/docs/angular/your-first-app',
    'ライフサイクル': '/docs/angular/lifecycle',
    'ナビゲーション': '/docs/angular/navigation',
    'Performance': '/docs/angular/performance'
  },
  'React': {
    '概要': '/docs/react/overview',
    'Build Your First App': '/docs/react/your-first-app',
    'ライフサイクル': '/docs/react/lifecycle',
    'ナビゲーション': '/docs/react/navigation',
    'Config': '/docs/react/config',
    'Platform Utils': '/docs/react/platform'
  },
  'Vue': {
    '概要': '/docs/vue/overview',
    'Build Your First App': '/docs/vue/your-first-app',
    'ライフサイクル': '/docs/vue/lifecycle',
    'ナビゲーション': '/docs/vue/navigation'
  },
  'ユーティリティ': {
    'Config': '/docs/utilities/config',
    'Platform': '/docs/utilities/platform'
  },
  '公開': {
    'Progressive Web App': '/docs/publishing/progressive-web-app',
    'iOS App Store': '/docs/publishing/app-store',
    'Android Play Store': '/docs/publishing/play-store',
    'Electron Desktop App': '/docs/publishing/desktop-app'
  },
  'よくある質問': {
    '用語集': '/docs/faq/glossary',
    'ビルドエラー': '/docs/faq/build',
    'ランタイムエラー': '/docs/faq/runtime',
    'ネイティブエラー': '/docs/faq/native',
    'CORS Errors': '/docs/faq/cors',
    'Security': '/docs/faq/security',
    '開発者向けのヒント': '/docs/faq/tips',
    '変更履歴': 'https://github.com/ionic-team/ionic/blob/master/CHANGELOG.md'
  },
  'リソース': {
    'Books': '/docs/developer-resources/books',
    'Courses': '/docs/developer-resources/courses',
    'Guides': '/docs/developer-resources/guides',
    'Posts': '/docs/developer-resources/posts',
    'ツール': '/docs/developer-resources/tools',
    'ビデオ': '/docs/developer-resources/videos'
  }
};
