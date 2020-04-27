---
previousText: 'Overview'
previousUrl: '/docs'
nextText: 'CLI Installation'
nextUrl: '/docs/intro/cli'
contributors:
  - rtpHarry
---

# 環境設定

Ionic Frameworkをはじめるためには、[Node と npm](#anchor-node-npm)がインストールされている環境が必要です。

もちろん、エディタも必要でしょう。[Visual Studio Code](https://code.visualstudio.com/) をおすすめします。[Visual Studio Codeは無料で、 batteries-included text editor made by Microsoft.

## Terminal

> Much of Ionic development requires familiarity with the command line. If you're new to the command line, see [this Blog Post](https://ionicframework.com/blog/new-to-the-command-line/) for a quick introduction.

In general, we recommend using the built-in terminals. Many third-party terminals work well with Ionic, but may not be supported.

* For Windows, **Command Prompt** and **PowerShell** are supported. <a href="https://docs.microsoft.com/en-us/windows/wsl/faq" target="_blank">WSL</a> is known to work with Ionic, but may not be supported.
* For macOS, the built-in **Terminal** app is supported.

Git Bash (from <a href="https://git-scm.com" target="_blank">git-scm.com</a>) does not support TTY interactivity and is **not supported** by Ionic.

## Node と npm

モダンなJavaScriptプロジェクトのほとんどのツールは[Node.js](/docs/reference/glossary#node)で作られています。[ダウンロードページ](https://nodejs.org/en/download/)には、すべてのプラットフォームのインストールパッケージが事前に用意されています。互換性を確保するためにLTSバージョンを選択することをお勧めします。

NodeにはJavaScriptパッケージマネージャーである [npm](/docs/reference/glossary#npm) がバンドルされています。

インストールできているかを確認するためには、新しいターミナルウィンドウを開いて以下を実行します。

```shell
$ node --version
$ npm --version
```

> Permission errors are common on macOS when installing global packages with `npm`. If you get an `EACCES` error, see [Resolving Permission Errors](/docs/developing/tips#resolving-permission-errors).

## Git

必須ではありませんが、バージョン管理システムの[Git](/docs/reference/glossary#git)の利用を強くお勧めします。

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
