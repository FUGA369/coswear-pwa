"use client";

import PostGrid from "../components/PostGrid";
import { getTodayTopic } from "../lib/topic";
import { useApp } from "../components/AppProvider";

const styleChips = ["#アニメ", "#ゲーム", "#創作", "#男装", "#制作記録"];


export default function HomePage() {
  const topic = getTodayTopic();
  const { posts } = useApp();

  return (
    <div>
      <header className="app-header">
        <div>
          <div className="app-title">COSWEAR</div>
          <div className="app-subtitle">コスプレ投稿コミュニティ</div>
        </div>
        <button type="button" className="notify-button" aria-label="通知">
          🔔
        </button>
      </header>

      <section className="topic-card">
        <span className="topic-label">TREND TOPIC</span>
        <span className="topic-title">#{topic.key}</span>
        <span className="topic-hint">{topic.description}</span>
      </section>

      <section className="chip-row" aria-label="人気カテゴリ">
        {styleChips.map((chip) => (
          <button key={chip} type="button" className="chip">
            {chip}
          </button>
        ))}
      </section>

      <div className="section-title">タイムライン</div>
      <PostGrid posts={posts} />
    </div>
  );
}
