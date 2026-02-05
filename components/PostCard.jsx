"use client";

import { useApp } from "./AppProvider";

export default function PostCard({ post }) {
  const { savedIds, toggleSave } = useApp();
  const isSaved = savedIds.includes(post.id);

  return (
    <article className="card photo-tile">
      <button
        type="button"
        className={`tile-save${isSaved ? " active" : ""}`}
        onClick={() => toggleSave(post.id)}
        aria-label={isSaved ? "保存済み" : "保存"}
      >
        {isSaved ? "★" : "☆"}
      </button>
      <div className="card-image">
        <img src={post.images[0]} alt={post.title} />
      </div>
    </article>
  );
}
