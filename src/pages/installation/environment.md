---
previousText: 'Packages & CDN'
previousUrl: '/docs/installation/cdn'
nextText: 'iOS Setup'
nextUrl: '/docs/installation/ios'
contributors:
  - rtpHarry
---

# 環境設定

Ionic Frameworkをはじめるためには、[Node と npm](#anchor-node-npm)がインストールされている環境が必要です。

もちろん、エディタも必要でしょう:

<ul class="intro">
  <li><a href="https://ionicframework.com/studio">Ionic Studio</a>: Ionicアプリを高速かつ簡単に開発できます</li>
  <li><a href="https://code.visualstudio.com/">VS Code</a>: Microsoft製の有名で無料のテキストエディタです</li>
</ul>

## Node と npm

モダンなJavaScriptプロジェクトのほとんどのツールは[Node.js](/docs/faq/glossary#node)で作られています。[ダウンロードページ](https://nodejs.org/en/download/)には、すべてのプラットフォームのインストールパッケージが事前に用意されています。互換性を確保するためにLTSバージョンを選択することをお勧めします。

NodeにはJavaScriptパッケージマネージャーである[npm](/docs/faq/glossary#npm)がバンドルされています。

インストールできているかを確認するためには、新しいターミナルウィンドウを開いて以下を実行します。

```shell
$ node --version
$ npm --version
```

## Git

必須ではありませんが、バージョン管理システムの[Git](/docs/faq/glossary#git)の利用を強くお勧めします。

Git is often accompanied by a Git Host, such as [GitHub](https://github.com/), in which case additional setup is required. Follow the tutorial from the Git Host's documentation to set up Git:

* GitHub: [Set up Git](https://help.github.com/en/articles/set-up-git)
* GitLab: [Installing Git](https://docs.gitlab.com/ee/topics/git/how_to_install_git)
* Bitbucket: [Install Git](https://www.atlassian.com/git/tutorials/install-git)

Otherwise, follow the [official installation instructions](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git). The command-line utility can be downloaded from the [download page](https://git-scm.com/downloads).

インストールできているかを確認するためには、新しいターミナルウィンドウを開いて以下を実行します。

```shell
$ git --version
```

### Git GUI

Git is a command-line utility, but there are many [GUI clients](https://git-scm.com/downloads/guis/) available. [GitHub Desktop](https://desktop.github.com/) is recommended, and works well with GitHub.
