---
id: js4
title: "callback"
description: "callbackについて"
sidebar_label: "callback"
---

## コールバック関数
- 他の関数に引数として渡される関数

- コールバック関数は外側の関数で何らかの処理やアクションを実行する

- 同期型コールバックの場合、呼び出した順番で処理される

- 非同期型コールバックの場合、非同期命令が完了した後に続いてコードが実行される

  - そのため、同期型コールバックのように**上からの順で呼び出される**とは限らない

  - コールしてリターンされるまでコールバック関数を使っている処理より下の処理が先に動くこともある

[Callback function (コールバック関数) - MDN Web Docs 用語集: ウェブ関連用語の定義 \| MDN](https://developer.mozilla.org/ja/docs/Glossary/Callback_function)

[JavaScriptのコールバック関数の使い方を現役エンジニアが解説【初心者向け】 \| TechAcademyマガジン](https://techacademy.jp/magazine/21421)
