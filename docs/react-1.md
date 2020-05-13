---
id: react-1
title: "Reactについて"
description: "Reactは？"
sidebar_label: "Reactについて"
---

## Reactの目的は？
- 単一のJavaScriptライブラリ

- 画面に表示される有用なコンテンツ（HTML）を作る

- インタラクティブな処理をする

## reactでよく書いているclassは？
- JavaScriptのclass（ES2015）

  - アロー関数、インスタンス属性、class属性など

- ReactのComponentを使うことは、Reactの一番基本的な部分の1つ

## HTMLみたいに書いているものは？
- JSX

- HTMLではない

- React Componentがレンダリングされ、画面に表示されるときの形を指している

- でも、HTMLの書き方に近いところはある

※Reactを書く上でJSXの書き方を覚えるのは必要

## 画面内で動きを出したいときは？
- event Handler

- ユーザとアプリのインタラクティブなアクションを感知してアプリやComponentを更新したり、表示することができる

## reactとreact-domを別々で使う理由は？
- reactでは各Componentを定義するJavaScriptのコードが含まれている

- つまり、reactはライブラリ全体のプロセスがちゃんと動くことを担当する

- react-domはreactで書いたComponentをDOM内部に表したり、HTMLとして表したりする

- react、react-domはそれぞれ「Componentの定義に使う」「画面へComponentを表すために使う」
