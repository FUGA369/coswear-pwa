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
        <div className="actions">
          <span>投稿 {defaultProfile.stats.posts}</span>
          <span>フォロワー {defaultProfile.stats.followers}</span>
          <span>フォロー {defaultProfile.stats.following}</span>
        </div>
      </div>
      <div className="section-title">My Posts</div>
      <PostGrid posts={myPosts} />
    </div>
  );
}
