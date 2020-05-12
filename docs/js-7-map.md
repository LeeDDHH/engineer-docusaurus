---
id: js7
title: "map"
description: "mapについて"
sidebar_label: "map"
---

## Map
- 要素の順番で反復処理を行う

  - `for .. of`、`forEach`のような処理の代わりに使える

    ```javascript
    const numbers = [0,1,2,3,4];
    let newNumbersForSyntax = [];
    let newNumbersMapSyntax = [];
    // for文の場合
    for (let i = 0; i < numbers.length; i++) {
      newNumbersForSyntax.push(numbers[i] * 10);
    }

    // Mapの場合
    newNumbersMapSyntax = numbers.map(num => num * 10);
    ```
[Map - JavaScript | MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Map)
