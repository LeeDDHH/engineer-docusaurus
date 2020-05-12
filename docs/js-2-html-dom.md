---
id: js2
title: "HTMLとDOM"
description: "HTMLとDOMの違いについて"
sidebar_label: "HTMLとDOM"
---

## HTML,DOMの違い
ブラウザでレンダーリングされる順番

```markdown
                           DOM
                            ↓
HTML  →  HTMLパーサー  →   DOMツリー       配置
                            ↓           ↑
                       アタッチメント  →  renderツリー  → render  → 表示
                            ↑
StyleSheets→CSSパーサー→スタイル規則
```

1. ユーザがリクエストを送る

2. レスポンスで受け取ったHTMLファイルをパーシングしてDOMツリーを作る

3. CSSファイルをパーシングしてDOMツリーと結合する

4. レンダーリングする

5. ブラウザの画面に表示する

### HTML
- 文章の内容、構造、書式をmarkup情報として表現する言語

- 人が理解できて、区別できるように作られた

- 機械は理解できないため、ブラウザが解釈できる言語や構造に変換するパーシング作業が必要

- 各ブラウザごとにパーシングを行うパーサーが異なるため、同じHTMLでも違う結果値になる可能性がある

[HTML](https://namu.wiki/w/HTML)

[HTML - MDN](https://developer.mozilla.org/ko/docs/Web/HTML)

[HTML - wikipedia](https://ko.wikipedia.org/wiki/HTML)

[HTML 기초](http://tcpschool.com/html/html_intro_basic)

### Document
- ブラウザに読み込まれたウェブページ

- DOMツリー（ページコンテンツ）のエンドポイント（진입점）の役割をする

- ページのURL取得やドキュメント内に新しい要素を生成するなどの機能をグローバルに提供する

- あらゆるコンテンツタイプの共通プロパティやメソッドを提供する

[Document - MDN](https://developer.mozilla.org/ko/docs/Web/API/Document)

### DOM
- パーシングされたHTMLのツリー構造のオブジェクト

- ドキュメントにアクセスできるAPI

- node,property,methodを持つオブジェクト

- ブラウザに見えるものとは限らない

  - ブラウザに見えるものはrenderツリー（DOMとCSSの組み合わせ）であり、スクリーンに描画されるものだけに構成されるため、DOMとは違う

- Devtoolsに見えるとは限らない

  - 疑似要素は含まれない

  - ::beforeとか::afterのようなもの

[HTML,DOM간단정리](https://velog.io/@ddinggu/HTML-DOM-%EA%B0%84%EB%8B%A8-%EC%A0%95%EB%A6%AC)

[(번역)DOM은 정확히 무엇일까?](https://wit.nts-corp.com/2019/02/14/5522)

[DOM소개 - MDN](https://developer.mozilla.org/ko/docs/Web/API/Document_Object_Model/%EC%86%8C%EA%B0%9C)

[8/ DOM(1) - 노드의 계층 구조(1)](https://feel5ny.github.io/2017/12/26/JS_08_1/)
