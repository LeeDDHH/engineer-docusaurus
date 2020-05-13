---
id: react-7
title: "JSX"
description: "JSXについて"
sidebar_label: "JSX"
---

## JSXについて
- JSXはHTMLのように見えるが、**HTMLではない**

- 前提として、ES2015以降の形式で作成されたJSファイルはBabelを使うことでES5環境のブラウザでも動かすことができるようになること

- わたしたちのブラウザでは`<App />`のような書き方のタグが事前に用意されているわけではない

- それでもブラウザが認識してくれるのは、JSX形式で書いたコードがユーザのブラウザに送られたとき、正常に動作するJSとして変換されるから

- 正確には、JSXは見た目こそHTMLに近いものの、インポートしたReactライブラリ内の独自に定義された関数を呼び合うことでJavaScriptの制御をしている

  - その上、Babelを通すとES5環境のブラウザでも動かせるように変換してくれる

- まとめると

  - JSX形式で書くことはちょっと特殊なJavaScriptを書くこと

  - ブラウザはJSX形式で書いたコードを理解しているわけではなく、ブラウザで動かすときにJavaScript形式へ変わる

    - インポートしたReact,ReactDOMのライブラリ内でDOMを生成したり、イベントをハンドリングしたりする

  - その上、Babelを通すとES5環境のブラウザでも動かせるように変換してくれる

- [Babel公式ホームページ](https://babeljs.io/repl#?browsers=&build=&builtIns=false&spec=false&loose=false&code_lz=Q&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=true&timeTravel=false&sourceType=module&lineWrap=true&presets=es2015%2Creact%2Cstage-2&prettier=false&targets=&version=7.9.0&externalPlugins=)のTry it outからReactのコードがどうやってES5のJavaScriptへ変わるのかが試せる

- JSXは`React.createElement(component, props, ...children)`のsyntax sugar

- **子要素を持たない場合**、自己クローズ（self-closing）タグを利用することができる
  ```javascript
  <div className="sidebar" />
  ```

- **子要素がある場合**、開始、終了タグを使う
  ```javascript
  <Parent>
    <Child />
  </Parent>
  ```

## JSXとHTMLの違いについて
- 普通にHTMLの書き方でJSXを書くとエラーが発生する

- 理由は以下

  - JSX独自の属性がある

    - 要素にカスタムスタイルを追加すると違う文法になる

    - 要素にクラスを追加すると違う文法になる

  - JSXはJavaScriptの変数を参照できる
