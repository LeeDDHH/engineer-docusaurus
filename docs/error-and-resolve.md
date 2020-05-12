---
id: E-R
title: "エラーと対策"
description: "エラーと対策"
sidebar_label: "エラーと対策"
---

## レンダリングされた時点で要素取得したいが、うまくいかない時
- ある要素で表現するリソースがロードされていないのに取得しようとする可能性がある

  - `addEventListener`を使って、ロードしたら取得するという書き方にする

    ```javascript
    document.getElementById('要素ID').addEventListener('load', Elementattribute)
    ```
[이벤트 참조 | MDN](https://developer.mozilla.org/ko/docs/Web/Events)
