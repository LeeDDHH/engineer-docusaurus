---
id: react-8
title: "関数Component/クラスComponent"
description: "関数ComponentとクラスComponent"
sidebar_label: "関数、クラスComponent"
---

## Function Componentについて
```javascript
// こんな感じのComponent
const App = function () {
  return <div>Hi there!</div>
};

//アロー関数で書くとこんな感じ
const App = () => {
  return <div>Hi there!</div>
}
```

## クラスComponentを使う利点
- （一般的に、）コードを構成することが簡単になる

  - ファイル内のコードを見て**何をするためのComponentなのか**がエンジニアの視点からして分かりやすくなる

- **state**が使える

  - インタラクティブなアプリケーションを作る上で必要な部分

  - ユーザの入力値を処理するときに使う

  - 非同期処理の機能が扱える

- **Life Cycle Event**を理解するにもメリットがある

## クラスComponentの原則
- JavaScriptのClassを使うこと

  - ES2015から導入されたあのClass

  - PrototypeというOOPで使われるイメーしするClassとは若干違う

    - でも、大体はOOPに近い

- `React.Component`を継承する

  - React.Componentを`サブクラス化`するとも言う

  - React.Componentの機能を借りる

- `render`メソッドを定義し、JSXでリターンする

## 関数ComponentとクラスComponentの違い
- 関数（Functional）Component

  - Good for simple content

  - 渡されたデータを元にJSXの生成をするような簡単な処理を書くときに使う

  - 複雑ではないロジックでComponentを作る時に使う

  - レンダリングされるデータを固定する

    - レンダリングされるまでデータを維持する

- クラス（Class）Component

  - Good for just about everything else

  - ネットワークの通信が必要だったり、データの加工が必要だったりする処理を書くときに使う

  - 簡単ではない、複雑なロジックでComponentを作る時に使う
