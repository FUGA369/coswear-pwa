"use client";

import PostGrid from "../../components/PostGrid";
import { useApp } from "../../components/AppProvider";

export default function SavedPage() {
  const { posts, savedIds } = useApp();
  const savedPosts = posts.filter((post) => savedIds.includes(post.id));

  return (
    <div>
      <div className="section-title">Saved</div>
      {savedPosts.length === 0 ? (
        <div className="empty-state">
          まだ保存がありません。気になる投稿をSaveしましょう。
        </div>
      ) : (
        <PostGrid posts={savedPosts} />
      )}
    </div>
  );
}
