---
id: react-4
title: "初期化後のフォルダー構成"
description: "create-react-app後のフォルダー構成について"
sidebar_label: "フォルダー構成"
---

## create-react-appフォルダーの中について
- src

  - 作成したソースコードを入れるところ

- public

  - 変更されない静的ファイルを保存するところ

- node_modules

  - プロジェクトの依存関係がすべて含まれているところ

  - 手動でnode_modulesをいじる必要はない

- package.json

  - プロジェクトの依存関係と構成を書くファイル

- package-lock.jsonもしくはyarn.lock

  - インストールされたパッケージの正確なバージョンが書かれているファイル
