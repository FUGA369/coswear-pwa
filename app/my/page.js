"use client";

import PostGrid from "../../components/PostGrid";
import { useApp } from "../../components/AppProvider";
import { defaultProfile } from "../../lib/data";

export default function MyPage() {
  const { posts } = useApp();
  const myPosts = posts.filter((post) => post.user === defaultProfile.name);

  return (
    <div className="my-page">
      <section className="my-hero">
        <div className="my-top-row">
          <button type="button" className="hero-icon">‹</button>
          <button type="button" className="hero-icon">⋯</button>
        </div>

        <div className="my-profile-row">
          <div className="avatar profile-dark" />
          <div>
            <div className="my-handle">@{defaultProfile.name.toLowerCase()}</div>
            <div className="my-meta">骨格ナチュラル / すべて見る ▼</div>
          </div>
        </div>

        <div className="my-counts">
          <strong>{defaultProfile.stats.posts} 投稿</strong>
          <span> | </span>
          <strong>{defaultProfile.stats.followers} フォロワー</strong>
          <span> | </span>
          <strong>{defaultProfile.stats.following} フォロー</strong>
        </div>

        <div className="my-follow-row">
          <button type="button" className="button follow">フォローする</button>
          <button type="button" className="hero-icon small">🔔</button>
        </div>
      </section>

      <section className="my-content">
        <div className="my-tabs">
          <button className="my-tab active" type="button">投稿</button>
          <button className="my-tab" type="button">お気に入り</button>
          <button className="my-tab" type="button">フリマ</button>
        </div>
        <div className="my-filter-row">
          <span className="pill active">コーディネート</span>
          <span className="pill">メイク</span>
          <span className="pill">ノウハウ動画</span>
        </div>

        <PostGrid posts={myPosts} />
      </section>
    </div>
  );
}
