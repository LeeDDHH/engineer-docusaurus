---
id: react-9
title: "props"
description: "propsについて"
sidebar_label: "props"
---

## propsの語源
- properties（特性、属性）の略

- propagation（伝播）の意味合いも間違ってはない

## propsの使い方
- immutable data（不変のデータ）

- can't change it（変更不可）

- passed in from parent（親から渡される）

- can be defaulted & validated（デフォルト値の設定と検証が可能）

- Componentを使う際に、内部で変更されないデータを保存するときに使う

- 2つのプロセスがある

  - 1つ目は、データをComponentへ提供する

  - 2つ目は、渡されたデータを使う

- 一般的に、親Componentから子Componentに渡される値

  - 子Componentをカスタマイズしたり、構成したりするのが目的

  - Componentの見た目、インタラクティブなアクションを設定する

  - 子Componentから親Componentにpropsを直接的に渡すことはできない

  - 慣習的に`props`で受け取る

- getDefaultPropsで定義されたデフォルト値か、親Componentから渡された値のどちらかをもつ

- クラスComponent内で扱うときは、`this.props`で書く

[state とライフサイクル – React](https://ja.reactjs.org/docs/state-and-lifecycle.html)
