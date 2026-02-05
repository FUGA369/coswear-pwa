"use client";

import PostGrid from "../components/PostGrid";
import StoryRow from "../components/StoryRow";
import { getTodayTopic } from "../lib/topic";
import { useApp } from "../components/AppProvider";

export default function HomePage() {
  const topic = getTodayTopic();
  const { posts } = useApp();

  return (
    <div>
      <div className="topic-card">
        <span className="topic-label">今日のお題</span>
        <span className="topic-title">{topic.key}</span>
        <span className="topic-hint">{topic.description}</span>
        <div className="topic-actions">
          <button type="button" className="button secondary">
            お題に参加
          </button>
          <button type="button" className="button">
            新規投稿へ
          </button>
        </div>
      </div>
      <div className="section-title">Stories</div>
      <StoryRow />
      <div className="section-title">New Posts</div>
      <PostGrid posts={posts} columns="three" />
    </div>
  );
}
