# 東和産業株式会社 — Corporate Website

架空の総合産業メーカーを題材にした、JTCらしいコーポレートサイトです。Vite、TypeScript、CSSで構築しています。

## 起動

Node.js 20.19以降、または22.12以降が必要です。

```sh
npm install
npm run dev
```

ターミナルに表示されるURLを開いてください。ポートを指定する場合は `npm run dev -- --port 5187` を使用できます。

## ビルド

```sh
npm run build
npm run preview
```

`npm run build` でTypeScriptのチェックと本番用の出力を行います。出力先は `dist/` です。下層18ページのHTMLエントリも生成するため、静的ホスティングでも各URLを直接開けます。

## 機能

- レスポンシブレイアウト、モバイルナビゲーション
- 高さが変わらないニュースカテゴリタブと切り替えアニメーション
- 企業情報・会社概要・企業理念、事業紹介と3事業の詳細、サステナビリティ、IR、採用、ニュース一覧・記事、お問い合わせ、プライバシーポリシーの専用ページ
- お問い合わせ・確認モーダルの開閉アニメーション
- 必須項目・メールアドレスを検証するお問い合わせフォームと確認画面
- Escapeキーでのダイアログ終了、フォーカス復帰、動きを減らす設定への対応

お問い合わせフォームはデモです。内容の送信・保存は行いません。会社名、会社情報、ニュースなども架空です。

## 構成

- `src/main.ts` — 共通レイアウト、ページの表示、ニュースタブ、モーダル、フォーム操作
- `src/pages.ts` — 専用ページのコンテンツと共通パーツ
- `src/content.ts` — ニュースデータ
- `scripts/build-pages.mjs` — 静的ホスティング用の下層HTML生成
- `src/style.css` — 共通デザイントークン、レイアウト、レスポンシブ対応
- `public/images/` — ローカル配信の写真

## 写真

Unsplashの写真をローカルに保存して使用しています。

- [産業施設](https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7) — 写真ID `photo-1565043589221-1a6fd9ae45c7`
- [建築](https://images.unsplash.com/photo-1486406146926-c627a92ad1ab) — 写真ID `photo-1486406146926-c627a92ad1ab`
- [森林](https://images.unsplash.com/photo-1473448912268-2022ce9509d8) — 写真ID `photo-1473448912268-2022ce9509d8`

[Unsplash License](https://unsplash.com/license)。画像は架空企業の実際の施設を示すものではありません。
