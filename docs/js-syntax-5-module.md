---
id: js-syntax5
title: "module"
description: "moduleについて"
sidebar_label: "module"
---

## module

## ES5
名前空間パターンを使って使えた
```javascript
var obj = obj || {};
```
[JavaScript モジュール・クラス総括（2015年7月） - Qiita](https://qiita.com/nowri/items/3ebadf71bbdfacf186aa)

### require
ファイル自体を読み込むことで使う方法
- CommonJSの仕様として存在
- ただし、`browserify`のような変換処理なしではまだ未対応

```javascript
js --- a.js
    |
    --- b.js
このような構成があるとする

//index.html
<script src="a.js"></script>
<script src="b.js"></script>

//b.js
var a = require(./a.js);

このように書くことでb.jsの中でa.jsをインポートすることができる
```

## ES6

### import/export
Moduleとは
- ある機能を実現するためのプログラムのかたまり
- 別ファイルに渡す変数/関数などのまとまり

### Moduleを1つだけ受け渡す場合
`export default 'Module名'`

`import 'import先で使う名前' from 'ファイルパス'`

### Moduleを複数受け渡す場合
exportする側では受け渡しするものに`export`をつける

import側は`import {受け取り1,受け取り2, ...} from 'ファイルパス'`

複数のmoduleをすべてimportする場合は`import * as 'オブジェクト名' from 'ファイルパス'`

[ES5とES6の違いをまとめてみた(メモ) - Qiita](https://qiita.com/rifutan/items/a55f132d4dae7e2f1941)

[【JavaScript・export・import】モジュールについて理解をまとめる \| とものブログ](https://se-tomo.com/2019/02/13/%E3%80%90javascript%E3%83%BBexport%E3%83%BBimport%E3%80%91%E3%83%A2%E3%82%B8%E3%83%A5%E3%83%BC%E3%83%AB%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6%E7%90%86%E8%A7%A3%E3%82%92%E3%81%BE%E3%81%A8%E3%82%81/)

[ES2015(ES6)な時代だからこそ、ES5を改めて調べたJavaScript初級者のメモ - Qiita](https://qiita.com/zaru/items/d833dca52962c3f7770f)

[ES6以降の構文とES5の構文の比較 - Qiita](https://qiita.com/ut0n/items/dee70188a46028fa3a1f)

[JavaScriptの仕様ES5以前とES2015(ES6)以降の違いの抑えるべき項目 – CodeAid（コードエイド）](https://codeaid.jp/js-es2015/)

[JavaScript入門 - とほほのWWW入門](http://www.tohoho-web.com/js/what.htm)
