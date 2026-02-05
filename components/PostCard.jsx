"use client";

import { useApp } from "./AppProvider";

export default function PostCard({ post }) {
  const { savedIds, likedIds, toggleSave, toggleLike } = useApp();
  const isSaved = savedIds.includes(post.id);
  const isLiked = likedIds.includes(post.id);
  const displayedLikes = isLiked ? post.likes + 1 : post.likes;

  return (
    <div className="card">
      <div className="card-image">
        <img src={post.images[0]} alt={post.title} />
        {post.images.length > 1 && (
          <span className="image-count">+{post.images.length - 1}</span>
        )}
      </div>
      <div className="card-body">
        <div className="card-title">{post.title}</div>
        <div className="card-meta">
          {post.user} ・ {post.character}
        </div>
        <div className="tag-row">
          {post.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
        <div className="actions">
          <button
            type="button"
            className={`action-button${isLiked ? " active" : ""}`}
            onClick={() => toggleLike(post.id)}
          >
            {isLiked ? "♥" : "♡"} {displayedLikes}
          </button>
          <button
            type="button"
            className={`action-button${isSaved ? " active" : ""}`}
            onClick={() => toggleSave(post.id)}
          >
            {isSaved ? "Saved" : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
}
