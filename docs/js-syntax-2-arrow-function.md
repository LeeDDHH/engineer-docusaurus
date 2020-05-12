---
id: js-syntax2
title: "アロー関数"
description: "アロー関数について"
sidebar_label: "アロー関数"
---

## アロー関数

## ES5
関数宣言に3種類がある

### function命令
```javascript
function str(arg1, arg2) {
  console.log(arg1);
}
```

### Functionコンストラクター
```javascript
var str = new Function("arg1", "arg2", "console.log(arg1)")
```

### 関数リテラル（匿名関数を利用）
```javascript
var str = function(arg1, arg2) {
  console.log(arg1));
}
```

## ES6
アロー関数を使うことで関数リテラルをシンプルに書ける
```javascript
//引数が1つの場合
var str = arg1 => console.log(arg1);

// 引数が2つ以上の場合
var str = (arg1, arg2) => {
  console.log(arg1);
}

//オブジェクトリテラルを返す場合
var str = func => ({ id: '8' });
```

アロー関数を2回以上書く場合はカリー化して書いていることと同じ
```javascript
//ES6
const foo = x => y => x + y;

//↓

//ES5
var foo = function con(x) {
  return function (y) {
    return x + y;
  };
};

// 実行時
foo(1)(2); // 3
```

[JavaScript - ES6の文法でわからないところが｜teratail](https://teratail.com/questions/71006)

[[JavaScript] Vuex の中での foo => bar => foo + bar みたいなアロー関数2回続く場合の表記に慣れる。 « きんくまデザイン](http://www.kuma-de.com/blog/2017-07-06/7329)
