---
id: react-11
title: "propsとthisの扱い"
description: "propsとthisの扱いの違い"
sidebar_label: "propsとthisの扱い"
---

## `props`と`this`の扱いの違い
- `props`は不変の値

- `this`は変更可能な値

  - `this`がクラスに存在する目的

  - `render`、ライフサイクルメソッドを呼び出した時、更新された値を読み込める

- 視覚的に見えるComponentがレンダリングされる時、`イベントハンドラー`も一緒に含まれる

  - つまり、イベントハンドラーが`あるpropsとstate`を持って`renderに属される`こと

  - だが、クラスComponentの場合、`this.props`がrenderに属されなくなる

[함수형 컴포넌트와 클래스, 어떤 차이가 존재할까? — Overreacted](https://overreacted.io/ko/how-are-function-components-different-from-classes/)
