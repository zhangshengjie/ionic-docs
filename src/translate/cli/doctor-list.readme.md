Issuesにはさまざまなタグがあります:
- **treatable**: `ionic doctor treat` によりIssuesの解決を試みることができます。
- **ignored**: `ionic doctor check` もしくは `ionic doctor treat` で検出されないように設定します。
- **explicit-detection**: `ionic doctor check <issue-id>` で特定のIssuesを表示します。

Issuesを無視するかどうかは、`ionic config set -g doctor.issues.<issue-id>.ignored true/false` を使って設定を変更できます。`<issue-id>` はリストされたIDと一致します。
