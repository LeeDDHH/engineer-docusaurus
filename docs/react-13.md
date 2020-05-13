---
id: react-13
title: "Life Cycle Method"
description: "Life Cycle Method"
sidebar_label: "Life Cycle Method"
---

## Life Cycle Method
```javascript
constructor
※1回限りのセットアップを行う
※公式、コミュニティの慣習として、データ読み込みの処理はここに書かず、componentDidMountに書くことを推奨する
↓
render
画面にコンテンツを表示する
※JSXを返す以外、何もしない
↓
componentDidMount
この関数は、Componentが最初に画面にレンダリングされるときに1回だけ自動的に呼び出される
※初期データ読み込みを行うときに使われる
※「初期データ読み込み処理をここでやる」という明快な役割が決められる
↓
componentDidUpdate
Componentが更新されるたびに自動的に呼び出される
※技術的に、componentDidUpdateの実行前にrenderが一度実行され、JSXを返して画面に表示する処理が走る
※state/propsが変わって、データ読み込みをするときに使われる
※ユーザからの入力値、外部からのデータ読み込みなどを含めたComponent内の更新があったらここでやる
↓
componentWillUnmount
Componentをそれ以上表示しない場合に呼び出される
※React以外のものを片付けるときに使われる

まれに使われるメソッド
shouldComponentUpdate
getDerivedStateFromProps(最初のマウント時、更新時にrenderされる直前に呼ばれる)
getSnapshotBeforeUpdate
```

[React.Component – React](https://ko.reactjs.org/docs/react-component.html)
