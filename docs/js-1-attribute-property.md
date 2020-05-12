---
id: js1
title: "attributeとproperty"
description: "attributeとpropertyの違いについて"
sidebar_label: "attributeとproperty"
---

## attributeとproperty
※2つとも属性の意味

### `attribute`
- HTML Documentのelementsに属性（追加の情報）を与えるために使われる。

- 最初から与えられる値

- class、data-*(dataset)など

### `property`
- HTML DOMの中でattributeを操作するために使われる

- key:value式で扱える

- DOMツリー内で動的に変えられる

### 違いについて
- `attribute`

  - HTML Documentの中で存在する

  - 静的で変化しない属性、値

  - HTMLのドキュメント自体が持つ属性

- `property`

  - HTML DOMの中に存在する（DOM APIで扱う）

  - 動的に変化し得る属性、値

  - DOMで動的に扱える属性

[attribute 와 property 의 차이](https://medium.com/hexlant/attribute-%EC%99%80-property-%EC%9D%98-%EC%B0%A8%EC%9D%B4-c6f1c91ba91)

[Property,Attribute 프로퍼티,어트리뷰트, 속성](http://www.ktword.co.kr/abbr_view.php?nav=2&m_temp1=3967&id=877)

[HTML 특성 참고서](https://developer.mozilla.org/ko/docs/Web/HTML/Attributes)

[HTML 속성](https://ko.wikipedia.org/wiki/HTML_%EC%86%8D%EC%84%B1)

[HTML Attributes](https://www.w3schools.com/html/html_attributes.asp)