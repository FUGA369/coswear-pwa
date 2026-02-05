# Coswear PWA (MVP)

コスプレイヤー向けのWEAR風PWAのMVPです。Home / Search / Post / Saved / My の5タブで、写真中心の2カラムグリッドと最小限の情報表示を実装しています。

## 起動方法

```bash
npm install
npm run dev
```

## 主要コンポーネント構成

- `components/PostCard.jsx`：投稿カード（写真・ユーザー名・キャラ名・タグ・Like/Save）。
- `components/PostGrid.jsx`：2カラムの正方形グリッド（WEAR風）。
- `components/Tabs.jsx`：下部固定タブ（Home / Search / Post / Saved / My）。
- `components/AppHeader.jsx`：画面タイトルとアクション表示の固定ヘッダー。
- `components/StoryRow.jsx`：横スクロールのストーリー列。
- `components/TagChips.jsx`：トレンドタグのチップ表示。
- `components/AppProvider.jsx`：投稿・保存・いいね状態の管理（将来のFirebase/Supabase差し替え前提）。

## 画面概要

- **Home**：今日のお題＋ストーリー＋最新投稿グリッド
- **Search**：タグ検索＋トレンドタグ＋投稿グリッド
- **Post**：複数画像アップ、キャラ名（title）、タグ登録、お題タグ追加
- **Saved**：保存済み投稿一覧
- **My**：プロフィール＋自分の投稿グリッド
