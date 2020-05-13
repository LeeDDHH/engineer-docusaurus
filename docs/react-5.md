---
id: react-5
title: "JSのModuleシステムについて"
description: "JavaScriptのModuleシステムについて"
sidebar_label: "Moduleシステム"
---

## JavaScriptのModuleシステムについて
- webpackのバンドルシステムを使う

- アプリケーションに必要なすべてのModuleをマッピングし、その結果物として1つ以上のバンドルを生成する

- Moduleの辞書的意味は**プログラムを機能ごとに分割した論理的な一部分**

- webpackにおいては**JavaScriptアプリケーションを構成する機能を分割した単位**で考えても良い

- import文を使うと他のファイルで定義したModuleをそのまま使うことができる
  ```javascript
  // a.jsで定義
  export function sayHello(){
  console.log('Hello');
  }

  // index.js
  import { sayHello } from './a.js';
  sayHello();
  ```
- Module単位で書くことによって、別のところで書いたコードを他のコードとの依存性や衝突を気にせず、共有することも可能になった

[[Webpack] 사내 webpack 도입기 (2) - webpack 이란? - 오늘의 기억](https://memory.today/dev/22)

- ES2015以前のコードではCommonJS Modulesの書き方を見かけていたのかもしれない

- しかし、ES2015 Modulesを使うのであれば、importで十分
  ```javascript
  // CommonJS Modules
  const React = require('react');

  // ES2015 Modules
  import React from 'react';
  ```

[import - JavaScript \| MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/import)
