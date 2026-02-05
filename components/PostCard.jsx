"use client";

import Link from "next/link";
import { useApp } from "./AppProvider";

export default function PostCard({ post }) {
  const { savedIds, likedIds, toggleSave, toggleLike } = useApp();
  const isSaved = savedIds.includes(post.id);
  const isLiked = likedIds.includes(post.id);
  const displayedLikes = isLiked ? post.likes + 1 : post.likes;

  return (
    <article className="card">
      <Link href={`/looks/${post.id}`} className="card-image" aria-label={`${post.title}の詳細を見る`}>
        <img src={post.images[0]} alt={post.title} />
        {post.images.length > 1 && <span className="image-count">+{post.images.length - 1}</span>}
      </Link>
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
    </article>
  );
}
