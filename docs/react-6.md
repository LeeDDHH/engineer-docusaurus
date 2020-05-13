---
id: react-6
title: "Component"
description: "Componentについて"
sidebar_label: "Component"
---

## Componentについて
- ComponentはFunctionもしくはClassでできている

- ComponentはHTMLを生成してユーザに見せる

  - この時、書き方はJSXを使う

- Componentはユーザのフィードバックを処理する

  - この時、Event Handlerを使う

## Componentをレンダーリングするためにやること
- reactで作ったページへアクセスするたびに`public/index.html`へ移動する

- reactで生成されたアプリケーションの規則として、idがrootになっているdiv内でComponentをレンダリングする

- [ReactDOM.render](https://ja.reactjs.org/docs/react-dom.html#render)の引数は以下のように設定する

  - 第1引数 : Reactコンポーネントへの参照

  - 第2引数 : React要素をレンダーするためのDOM

## Componentの3要素
- Componentの入れ子構造（Nesting）

  - Componentは別のComponentの内部に表示できる

  - `export`で他のComponentでも使えるようにできる

- Componentの再利用性（Reusability）

  - アプリケーション全体で簡単に再利用できるに作る

- Componentの構成（Configuration）

  - Componentが作成されたとき、構成できるものにする

## Component命名規則
- 基本的にパスカルケース（pascal case）で命名する

  - ファイル名、使用するComponent名の両方とも

  - ex)PascalCase、ComponentSystem

## カスタムしたComponentを他のComponentで使用するためにやっておくこと
- **使われる側のComponent**にexport処理を書く

- **使う側のComponent**にimport処理を書く

## ComponentをJSX構文でレンダリングするためには
```javascript
// 基本的な型
<Component名 />
```

## 入れ子状態でComponentを渡す方法
- Component自体や使いたいデータを引き渡すときに使う

- 親Componentタグで子Componentを囲む
  ```javascript
  <Parent>
    <Child />
  </Parent>
  ```

- 親Componentから子Componentを使う場合、`props.children`で子Componentを扱うことができる
  ```javascript
  const Parent = (props) => {
    return (
      <div>props.children</div> //ChildのComponent自体
    );
  };
  ```

- 親Componentから子Componentの**プロパティ**を使う場合、`props.children.props`で使うことができる
  ```javascript
  const Parent = (props) => {
    return (
      <div>props.children.props.参照したい値のキー</div>
    );
  };
  ```

[JSX を深く理解する – React#子要素としての JSX 要素](https://ja.reactjs.org/docs/jsx-in-depth.html#jsx-children)

[React基本(入れ子のコンポーネント) - Qiita](https://qiita.com/yousuke_asami/items/bd17e7b0f5667f9c4503)
