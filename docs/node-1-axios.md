---
id: node1
title: "axios"
description: "axiosについて"
sidebar_label: "axios"
---

## axios
- インスタンスを作ってからリクエストを投げる

  ```javascript
  import axios from 'axios';
  const axiosBase = axios.create({
    baseURL: 'urlを記載',
    headers: {
      必要なヘッダーを記載
    }
  })

  const result = axiosBase.get('/', {
    params: {キー:バリュー}
  })
  ```

[axios/axios: Promise based HTTP client for the browser and node.js](https://github.com/axios/axios)

[[axios] axios の導入と簡単な使い方 - Qiita](https://qiita.com/ksh-fthr/items/2daaaf3a15c4c11956e9)
