---
id: js-syntax4
title: "変数"
description: "変数について"
sidebar_label: "変数"
---

## 変数の宣言

### ES5
`var`で宣言していた

そして、グローバル汚染問題も多々起きていた

### ES6
`var`,`let`,`const`の3つのシンタックス

`let`:変数の再宣言ができない、再代入はできる

`const`:変数の再宣言/再代入ができない

※`const`の場合、オブジェクトや配列を宣言した場合、**参照した物自体**は差し替えできないが、**参照の中身**は差し替えられる
```javascript
var array1 = () => {
  const arrayFalse = [1,2,3];
  arrayFalse = [4,5,6]; //Error
  console.log(arrayFalse);
}
array1(); //Error

var array2 = () => {
  const arrayTrue = [1,2,3];
  arrayTrue[1] = 10;
  console.log(arrayTrue);
}
array2(); //[1,10,3]
```

## 変数のブロックスコープ

### ES6
`let`, `const`をifやforのような{}に囲ったブロック内で宣言した場合、**ブロックの外側で参照はできない**
```javascript
if(true) {
  var i = 0;
}
console.log(i); //0

if(true) {
  let j = 10;
}
console.log(j); //ReferenceError

if(true) {
  var k = 100;
}
console.log(k); //ReferenceError
```

逆にブロック外で宣言した場合はブロック内で参照することはできる
```javascript
const i = 5;
if(true) {
  console.log(i); //5
}
```
