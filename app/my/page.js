"use client";

import { useApp } from "../../components/AppProvider";
import PostGrid from "../../components/PostGrid";
import { defaultProfile } from "../../lib/data";

export default function MyPage() {
  const { posts } = useApp();
  const myPosts = posts.filter((post) => post.user === defaultProfile.name);

  return (
    <div>
      <div className="section-title">My Profile</div>
      <div className="profile">
        <div className="profile-header">
          <div className="avatar" />
          <div>
            <div className="profile-name">{defaultProfile.name}</div>
            <div className="profile-meta">{defaultProfile.bio}</div>
          </div>
        </div>
        <div className="profile-meta">好きなタグ：{defaultProfile.favorite}</div>
        <div className="profile-stats">
          <div>
            <div className="stat-number">{defaultProfile.stats.posts}</div>
            <div className="stat-label">投稿</div>
          </div>
          <div>
            <div className="stat-number">{defaultProfile.stats.followers}</div>
            <div className="stat-label">フォロワー</div>
          </div>
          <div>
            <div className="stat-number">{defaultProfile.stats.following}</div>
            <div className="stat-label">フォロー</div>
          </div>
        </div>
        <button type="button" className="button secondary">
          プロフィール編集
        </button>
      </div>
      <div className="section-title">My Posts</div>
      <PostGrid posts={myPosts} />
    </div>
  );
}
