"use client";

import PostGrid from "../components/PostGrid";
import { getTodayTopic } from "../lib/topic";
import { useApp } from "../components/AppProvider";

export default function HomePage() {
  const topic = getTodayTopic();
  const { posts } = useApp();

  return (
    <div>
      <div className="icon-preview-card">
        <div>
          <div className="icon-preview-title">アプリアイコン確認</div>
          <div className="icon-preview-text">
            そのままブラウザで確認できるリンクです。
          </div>
          <a className="icon-preview-link" href="/icons/icon.svg" target="_blank" rel="noreferrer">
            /icons/icon.svg を開く
          </a>
        </div>
        <img className="icon-preview-image" src="/icons/icon.svg" alt="アプリアイコンプレビュー" />
      </div>
      <div className="topic-card">
        <span className="topic-label">今日のお題</span>
        <span className="topic-title">{topic.key}</span>
        <span className="topic-hint">{topic.description}</span>
      </div>
      <div className="section-title">New Posts</div>
      <PostGrid posts={posts} />
    </div>
  );
}
