---
previousText: 'Starting'
previousUrl: '/docs/developing/starting'
nextText: 'Scaffolding'
nextUrl: '/docs/developing/scaffolding'
---

# プレビュー

ターゲットとするプラットフォームとニーズに応じて、ネイティブ機能をテストするためのさまざまなやり方があります。

* ネイティブ機能を開発するために、[Platformを検出する](/docs/core-concepts/cross-platform) `ionic serve` でテストします。
* [iOSへのデプロイ](/docs/developing/ios)
* [Androidへのデプロイ](/docs/developing/android)

## ローカルのWebブラウザで実行

Ionicの最も強力な機能の1つは、アプリ開発の大部分がデスクトップ上のブラウザで実行できることです。従来のウェブ開発ツール（Chrome/Safari/Firefox開発ツール）への完全なアクセスにより、コードを記述し、シミュレーターやデバイスに再コンパイルしたりデプロイしたりすることなく、すばやくテスト/デバッグできます。

これを行うには、コマンドラインで、 `ionic serve` をプロジェクトのディレクトリから実行します:

<command-line>
    <command-prompt>ionic serve</command-prompt>
    <command-output>
        > <span class="cyan">ng run app:serve --host=0.0.0.0 --port=8100</span>
        <br />
        <br />
        [<span class="bold">INFO</span>] <span class="bold">Development server running!</span>
        <br />
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Local: <span class="bold">http://localhost:8100</span>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;External: <span class="bold">http://192.168.1.169:8100</span>
        <br />
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="yellow">Use Ctrl+C to quit this process</span>
        <br />
        <br />
        [<span class="bold">INFO</span>] Browser window opened to <span class="bold">http://localhost:8100!</span>
    </command-output>
</command-line>

`ionic serve` 実行中は、あなたのアプリの開発を続けることができます。変更を保存すると、その変更が適用され、アプリが自動的にリロードされます。

ネイティブ機能を実装する場合は、 [Platform Detection](/docs/core-concepts/cross-platform) を利用します。
実際のデバイスでテストする準備ができたら、 [iOS](/docs/developing/ios) と [Android](/docs/developing/android) をご覧ください。
