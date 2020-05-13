---
id: react-12
title: "イベントハンドラーの扱い"
description: "イベントハンドラーの入力値を受け取る方法"
sidebar_label: "イベントハンドラー"
---

## イベントハンドラーの入力値を受け取る方法
- `onClick`、`onChange`、`onSubmit`

  - 引数は`event`のようにイベント発生による引数であることを明示的に表す

- 行いたい処理を書いた関数を`this`で指定してイベントハンドラーに渡せば変化がイベントの変化が起きたときにコールバックする
  ```javascript
  onInputChange(event) {
    ︙
    行いたいしたい処理
    ︙
  }

  render(){
    return(
      <div>
        <input onChange={this.onInputChange}>
      </div>
    )
  }
  ```

- 無名関数をワンライナーで書くこともできる
  ```javascript
  render(){
    return(
      <div>
        <input onChange={(event) => console.log(event.target.value)}>
      </div>
    )
  }
  ```
