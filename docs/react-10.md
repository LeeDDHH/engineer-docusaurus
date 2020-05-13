---
id: react-10
title: "state"
description: "state"
sidebar_label: ""
---

## stateの原則
- クラスComponentでしか使えない

- propsとstateで混同するかもしれない:(

- 'State'はComponentに関連する一定のデータを含んだJavaScriptオブジェクト

- Componentのstateを更新すると、Componentがほぼ即座に再レンダリングされる

  - `setState`で`state`を更新すると`render`メソッドが再度呼び出される

  [state とライフサイクル – React](https://ja.reactjs.org/docs/state-and-lifecycle.html#adding-local-state-to-a-class)

  - Componentのリレンダリングをすることは、stateを更新することを意味する

- Componentが生成された時、stateを初期化する必要がある

  - constructorが使える

    - インスタンスが生成される度に呼ばれる

    - Componentのインスタンスが画面に表示されると最初に呼び出される

    - 必須ではないが、Componentの最初のレンダリングで、初期値の設定がしたい場合に使えば良い

    - `state`も初期値の設定はできる

    - `super`関数を使うことで親（`React.Component`）のconstructorに対する参照ができる

      [super - JavaScript \| MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/super)

      - `super`を使ってはじめて`this`が使える

        - もし、`super`をする前に`this`を使うと親クラスで定義されているはずのプロパティを使う事なんてできない
          ```javascript
          //親クラス
          class Parent {
            constructor(lastName) {
              this.lastName = lastName;
            }
          }

          //子クラス
          class Child extends Parent {
            constructor(lastName) {
              this.introduction(); // constructorで呼び出された時点ではthisが定義されていない
              super(lastName);
            }

            introduction() {
              return `My last name is ${this.lastName}.`;
            }
          }
          ```

        - このようなことが起きないようにするため、`super`で親クラスを呼び出し、`this`オブジェクトが使えるようにする

        [なぜsuper(props) を書くの? - React界のカリスマ「Dan Abramov」のブログ - Qiita](https://qiita.com/hand-dot/items/61a4b808f110b12e4281)

        [なぜsuper(props) を書くの? — Overreacted](https://overreacted.io/ja/why-do-we-write-super-props/)

      - これにより、propsに入っているデータをReactのComponent内で使うことができる

- stateが`setState`関数を使用してのみ更新できる

  - 例外があるとしたらconstructorの`this.state`で初期値を設定するときのみ

## stateの使い方
- mutable data（可変のデータ）

- can change it（変更可）

- maintained by component（コンポーネントによって保持）

- should ne considered private（プライベートであるべき）

- stateの変更は、仮想DOMとの差分から実際のDOMを更新してComponentを再描画するために使われる

- UIに関連した状態（pulldownの状態のような）、外部のデータに関連する状態（ログイン中のユーザ情報みたいな）になることがある

  - 外部からデータを取得してから表示するケースがこれに当たる

  - データを取得する前にすでにJSXでレンダリングされる画面から、それ以降に更新されたデータの結果を反映させないといけないときにstateが使われる

  - 非同期処理でデータをレスポンスするまで待つ処理時に使われる

  - リレンダリングするときに使われる

- Component内でthis.setState()を呼び出して状態を更新することができる

## state初期化に代替できる書き方
- 普通に書くと、以下のようになる
  ```javascript
  class App extends React.component {
    constructor(props) {
      super(props);

      this.state = { 初期化したい内容 };
    }
  ︙
  }
  ```

- ただ、`Babel`がES5以下の環境でも動かせてくれるように変換することを利用し、`constructor`なしでも書ける
  ```javascript
  class App extends React.component {
    state = { 初期化したい内容 };
  ︙
  }
  ```
  - 良いところは、コードの量が減らせること

## stateを親Componentから子Componentにpropsとして渡す
- 親Componentで`this.state`に指定した値を子Componentに`prop`で渡す

  ```javascript
  //親Component
  ︙
  this.state = { key:value }
  ︙
  render(){
    return <Child passKey={this.state.key} />
  }

  //子Component
  const Child = (props) => {
    return (
      <div>props.passKey</div>
    )
  }
  ```
