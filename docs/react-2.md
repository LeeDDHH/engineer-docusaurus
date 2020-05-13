---
id: react-2
title: "Reactの開発環境を立ち上げる"
description: "Reactの開発環境を立ち上げる"
sidebar_label: "開発環境立ち上げ"
---

## create-react-appでReactのプロジェクトを立てる

## 大きな流れ
- Install / Update Node JS

- Install create-react-app

- Generate a project

- Build project

## 実行環境
- `node v12.14.1`

- `npm 6.14.4`

- `yarn 1.22.4`

## Reactのプロジェクト生成の方法
`npx create-react-app {appname}`

↓

もし、すでにグローバルでcreate-react-appがインストールされている場合は以下のコマンドを実行する必要がある

`npm uninstall -g create-react-app`

↓

Mac/Linuxの場合、以下のコマンドも実行する必要がある

`rm -rf /usr/local/bin/create-react-app`

## npxインストール時
npxインストール時に

`react@16.13.1`

`react-dom@16.13.1`

`react-scripts@3.4.1`

`cra-template@1.0.3`

がインストールされる

## Reactプロジェクト下で使うコマンド
Reactのプロジェクト内で以下のコマンドで実行が可能

`yarn start`

開発用のサーバを開始する。

`yarn build`

製品版のための静的ファイルをバンドル（1つのファイルに束ねる）する。

`yarn test`

テストランナーを起動する。

`yarn eject`

Removes this tool and copies build dependencies, configuration files
and scripts into the app directory. If you do this, you can’t go back!
