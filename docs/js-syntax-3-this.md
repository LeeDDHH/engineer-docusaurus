---
id: js-syntax3
title: "this"
description: "thisについて"
sidebar_label: "this"
---

## thisの挙動

## ES5

### メソッド呼び出し
オブジェクトのメソッドで`this`は呼び出し元となるオブジェクトを指す
```javascript
var obj = {
  value: 10,
  show: function() {
    console.log(this.value); // 10
  }
}
obj.show();
```

### 関数呼び出し
関数で呼び出すと`this`はグローバルを指す
```javascript
function func() {
  var value = 2;
  console.log(this.value); // undefined
}
func();
```
何か参照させたい場合は、関数外で`var value = 1;`などのように書く

### コンストラクター呼び出し
コンストラクターでインスタンス化した場合、`this`は生成されたインスタンスを指す
```javascript
function Obj(val) {
  this.value = val;
}
var obj = Obj(0);
console.log(obj.value); // 0
```

### apply,call,bind
`call`、`apply`メソッドを使うと第1引数の値を`this`にすることができる

※他のオブジェクトが持つメソッドをさぞ自分のメソッドかのように呼び出すメソッド
```javascript
var obj = {
  value: 1,
  show: function() {
    console.log(this.value);
  }
};
var newObj = {
  value: 5
};
obj.show(); // 1
obj.show.call(newObj); // 5
obj.show.apply(newObj); // 5
```
第2引数以降は関数に渡される引数

`call`は引数の順番通りに連続した引数のリストを渡す

`apply`は引数の配列を1つだけ渡す

[JavaScript の call( ) メソッドを雑に説明 - Qiita](https://qiita.com/Chrowa3/items/b3e2961c4930abc1369b)

[Function.prototype.call() - JavaScript \| MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/call)

[Function.prototype.apply() - JavaScript \| MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)

`bind`の場合、新しい関数を生成し、呼び出されたときの引数を`this`に設定した状態で処理をする
```javascript
var newFunc = obj.show.bind(newObj);
newFunc();
```

[Function.prototype.bind() - JavaScript \| MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)

※どんなときに使う関数なのかまだピンとこない

## ES6

### アロー関数
関数が宣言された時のスコープに`this`が自動的に当たる
```javascript
var obj = {
  value: 10,

  //メソッド呼び出し
  show: function() {
    console.log(this.value); // 10

    // 関数呼び出し
    function show_01() {
        console.log(this.value); // undefined
    }
    show_01();

    // アロー関数
    var show_02 = () => {
        console.log(this.value); // 10 thisはobjを参照
    }
    show_02();
  }
}
obj.show();
```

## ES5で関数に`this`を指定する方法
- 基本的に関数単体では「これ」と指差すオブジェクトが存在しない

  - `new`でオブジェクトとして生成する必要がある

- `constructor`を使って、関数に`this`を`bind`する
  ```javascript
  class A {
    constructor() {
      // オブジェクト内の関数に直接オブジェクトを指定する
      this.verb = this.verb.bind(this);
    }

    this.word = 'do something!';

    verb() {
      return this.word;
    }
  }

  const a = new A();

  const b = a.verb; // do something!
  ```

- ES6以降はアロー関数を使うことで、自動的に`this`でそのオブジェクトを指すことができる
