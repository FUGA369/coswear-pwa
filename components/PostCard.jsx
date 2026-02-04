"use client";

import { useApp } from "./AppProvider";

export default function PostCard({ post }) {
  const { savedIds, toggleSave } = useApp();
  const isSaved = savedIds.includes(post.id);

  return (
    <div className="card">
      <div className="card-image">
        <img src={post.images[0]} alt={post.title} />
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
          <span>♡ {post.likes}</span>
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
