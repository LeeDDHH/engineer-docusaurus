---
id: react-13
title: "Tips & 雑学"
description: "Tips & 雑学"
sidebar_label: "未分類知識"
---

## Tips & 雑学
- node_modules配下にあるライブラリ構成を見るとcjsフォルダーで区切られていることがあるが、CommonJSの略のように見える

[.mjs とは何か、またはモジュールベース JS とエコシステムの今後 \| blog.jxck.io](https://blog.jxck.io/entries/2017-08-15/universal-mjs-ecosystem.html)

- ESMはECMAScript Modulesの略

[Node.jsのECMAScript Modulesの紹介 - 技術探し](https://blog.hiroppy.me/entry/node-esm)

[複数のモジュール形式(CommonJS, ES Modules, UMD)をサポートしたnpmパッケージの作り方 in TypeScript - dackdive's blog](https://dackdive.hateblo.jp/entry/2019/09/23/100000)

[JavaScript モジュールの現状 \| POSTD](https://postd.cc/the-state-of-javascript-modules/)

- webpackでnode_modulesを1つのファイルとする過程が気になる場合は読む

[Webpackでnode_modulesを1つのファイルにする – Mzlog 水島企画](https://lepetit-prince.net/ios/?p=7688)

- HTMLの`class`や`for`はJSXでは`className`と`htmlFor`になる

  - 理由は、JSXでも同じ使われる予約語であるため

- JSX構文において中括弧で囲むセット数によって、表現することが違う。

  - 1セット : JavaScriptの記述ができる

    - 「JavaScriptの変数を参照する」という意味

    - 変数を直接指定したり、演算式を書いたりすることができる
      ```javascript
      const text = "Hello world";
      ReactDOM.render(
        <div>
          <h1> {text} </h1>
          {1+2+3}
        </div>
        ,document.getElementById('root')
      );
      ```

  - 2セット : オブジェクト技法でデータをセットできる

    - HTMLのように直接style属性を指定する場合は、`{ { } }`(double curly braces)を使ってオブジェクト技法で指定する

    - つまり、**JavaScriptの記述** + **オブジェクトのセット**のように覚えればいい
      ```javascript
      <a style={{ color:'white' }}>Hello, world</a>
      ```

  - 3セット : HTMLエスケープをしないオブジェクト技法

    - 2セットではHTMLの特殊文字コードへ変換されてしまうHTMLエスケープが防げる
      ```javascript
      //オブジェクト
      { "name": "<b>Hello</b>"}

      //2セット状態
      {{ name }}
      ↓
      &lt;b&gt;Hello&lt;/b&gt;

      //3セット状態
      {{{ name }}}
      ↓
      <b>Hello</b>
      ```

[mustache記法について簡単にまとめてみた - Qiita](https://qiita.com/sengok/items/1d958348215647a5eaf0)

[JSXの基本 – React入門 - to-R Media](https://www.to-r.net/media/react-tutorial04/)

[javascript-React의 JSX 구문에서 이중 중괄호의 목적은 무엇입니까? - 스택 오버플로](https://stackoverflow.com/questions/22671582/what-is-the-purpose-of-double-curly-braces-in-reacts-jsx-syntax)

- 要素のstyleをインラインで直接指定する場合、CSSの`ケバブケース`（単語をハイフンでつなぐ）を`キャメルケース`（単語の先頭が大文字）に変更する必要がある

  - style指定時、key:value形式のvalueの方は、必ず文字列にする

[React CSS](https://www.w3schools.com/react/react_css.asp)

- JSX構文においてのクォートの使い方は、JavaScript界隈の慣習（community convention）で以下のように使い分けているケースがある

  - シングル : JSX構文以外のプロパティ

  - ダブル : JSX構文のプロパティ

- JSX構文でJavaScriptオブジェクトを直接扱うことができない
  ```javascript
  //エラーが発生する
  const App = () => {
    const buttonText = {text: 'Click me!'};

    return (
      <div>
        {buttonText} //代わりにbuttonText.textまで指定してすることでエラーが発生しない
      </div>
    );
  };
  ```

- JSXとHTMLの違い

  - インラインでスタイル指定する場合、mustacheでオブジェクト技法を使う

  - forとclassはJavaScriptでも使う予約語なのでhtmlForとclassNameに代わる

  - JavaScriptの変数が使える

- [Semantic UI CDN Link](<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css">)

  - bootstrapに飽きたら、これもいい選択

  - cdnのいろんなバージョンがみたいときは[ここ](https://cdnjs.com/libraries/semantic-ui)を参考にする

  - reactプロジェクト内に含めたいなら[この方法](https://react.semantic-ui.com/usage)もあり

  - [公式のgit](https://github.com/Semantic-Org/Semantic-UI-React)

  - 導入の仕方の例

    - [React webでsematic-ui-reactを使い基本的なサイトを作成する – joppot](https://joppot.info/2018/07/27/4178)

    - [Semantic UI Reactを導入した \| キクナントカドットコム](https://kikunantoka.com/2019/04/10--install-semantic-ui/)

- [Marak/faker.js: generate massive amounts of realistic fake data in Node.js and the browser](https://github.com/marak/Faker.js/)

  - ダミデータを使うときに良いライブラリ

  - [ReactでFaker.jsを利用してダミーデータを生成する – joppot](https://joppot.info/2018/11/09/4243)

- JSXのベターな書き方について

  - [JSXが実はベターな解だったのではないか？ ｜ erukiti ｜ note](https://note.com/erukiti/n/n6f673021469e)

  - [メンテナブルな React Component を目指すための小技集 - Qiita](https://qiita.com/terrierscript/items/372727448b58d4738018)

- VueとReactの比較記事

  - [私たちはなぜReactではなくVue.jsを選んだのか \| POSTD](https://postd.cc/why-we-chose-vuejs-over-react/)

  - [他のフレームワークとの比較 — Vue.js](https://jp.vuejs.org/v2/guide/comparison.html)

- 韓国語のReact公式サイト

  - [React – 사용자 인터페이스를 만들기 위한 JavaScript 라이브러리](https://ko.reactjs.org/)

- 他のアプリを作るときにも参考にして使えるチャレンジ課題

  - ユーザの物理的な地理情報を取得する

  - 現在の日時年月を取得、表示

  - 地理情報と現在の日時}年月をもとにテキストとスタイリングを変える

- CSS指定時

  - スタイリングするComponentの一番ルートとなる要素にComponent名をケバブケース（Kebab Case）で書く

  - あくまで1つの手法
    ```javascript
    //Component
    const KamoEatGyoza = props => {
      return (
        <div className="kamo-eat-gyoza">
          <div>kamo</div>
          <div>gyoza</div>
        </div>
      );
    }
    ```

- 要素に直接直接スタイリングを指定する場合

  - styleのkeyをキャメルケースで記述

    ```javascript
    <div style]{{ textAlign: "center" }}>
    ```

- `props`にデフォルトの値を設定する方法

  - Componentを定義し、定義より下に設定する

    ```javascript
    // Component定義
    const Something = (props) => {
      return (
        <div>{props.text}</div>
      );
    }

    Something.defaultProps = {
      text: 'Loading...'
    }
    ```

[PropTypes を用いた型チェック – propsのデフォルト値](https://ja.reactjs.org/docs/typechecking-with-proptypes.html#default-prop-values)

- 要素の2つの属性

  - Controlled

    - `state`管理されている

    - Reactの世界の中でデータが管理されている

    - `rerender`されてもReactの管理下でデータが保持される

    - HTMLタグにReactで管理しているデータをオーバーライトする

  - UnControlled

    - `state`管理されていない

    - HTMLの世界のタグの中でデータが管理されている

    - `rerender`されたら消える可能性がある

- Virtual DOMによる`key`指定について

  - リスト表示の際に、その要素がユニークであることを示さないといけない

  - APIのresponseによっては固有のidも添えて送られる場合があるのでそれを使用する

  - returnさせる時、個々の要素の一番ルートにidを指定しておく必要がある

- React Refs

  - 単一のDOM要素へのアクセスを提供する

  - コンストラクターで参照を作成し、インスタンス変数に割り当て、特定のJSX要素にプロパティとして渡す

  - 一個一個の独立した要素に対して個別の設定や処理をさせたいときに使う
    ```javascript
    class A extends React.Component {
      constructor(props) {
        super(props);

        this.Ref = React.createRef();
      }

      render() {
        return (
          <div>
            <img ref={this.Ref} />
          </div>
        );
      }
    }
    ```

[Ref と DOM – React](https://ja.reactjs.org/docs/refs-and-the-dom.html)

- `props`/`state`/`Component`概念

[Reactの基礎(JSX, ライフサイクル, state, props) - わくわくBank](https://www.wakuwakubank.com/posts/701-react-basic/)

[컴포넌트에 함수 전달하기 – React](https://ko.reactjs.org/docs/faq-functions.html)

[React 최상위 API – React](https://ko.reactjs.org/docs/react-api.html#reactfragment)

- `props.children`について

  - 子要素に対して共通の設定を指定する場合は、`props`

  - 子要素に対してそれぞれ違う設定を指定する場合は、`props.children`

[Reactで複数のchildrenを扱いたい場合の実装パターン - Qiita](https://qiita.com/terrierscript/items/3afee284621bbe126332)

[props.childrenを渡す方法 - Qiita](https://qiita.com/makkkiy/items/30dd32b815c63efdb64d)

[Reactのchildren探訪 - Qiita](https://qiita.com/jkr_2255/items/2e40f7c9ecf300e8d945)

[コンポジション vs 継承 – React](https://ja.reactjs.org/docs/composition-vs-inheritance.html)

# styled-components
[styled-componentsを使ったCSS設計 - Qiita](https://qiita.com/taneba/items/4547830b461d11a69a20)

[styled-components: Basics](https://styled-components.com/docs/basics)
