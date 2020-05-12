---
id: js-syntax1
title: "テンプレートリテラル"
description: "テンプレートリテラルについて"
sidebar_label: "テンプレートリテラル"
---

## テンプレートリテラル

### ES5
- 特殊文字のエスケープや連結演算子の記述が必要
```javascript
var lastName = "hoge";
var firstName = 'fuga';
console.log("My name is" + lastName + " " + firstName);
```

### ES6
- \`hoge\` で囲むことでテンプレートリテラルが使える

- テンプレートリテラル内で`${variable}`を使うことで変数をそのまま使える
```javascript
var lastName = "hoge";
var firstName = 'fuga';
console.log(`My name is ${lastName} ${firstName}`);
```
