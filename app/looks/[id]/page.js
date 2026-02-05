"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useApp } from "../../../components/AppProvider";

export default function LookDetailPage() {
  const params = useParams();
  const { posts, likedIds, savedIds, toggleLike, toggleSave } = useApp();
  const post = posts.find((item) => item.id === params.id);

  if (!post) {
    return (
      <div className="detail-page">
        <div className="detail-content">
          <p>投稿が見つかりませんでした。</p>
          <Link href="/" className="button">
            Homeへ戻る
          </Link>
        </div>
      </div>
    );
  }

  const isLiked = likedIds.includes(post.id);
  const isSaved = savedIds.includes(post.id);

  return (
    <div className="detail-page">
      <div className="detail-hero">
        <img src={post.images[0]} alt={post.title} className="detail-image" />
        <div className="detail-top-actions">
          <Link href="/my" className="detail-circle">←</Link>
          <button type="button" className="detail-circle">⋯</button>
        </div>
      </div>

      <section className="detail-content">
        <div className="detail-user-row">
          <div className="avatar mini" />
          <div>
            <div className="detail-user">{post.user}</div>
            <div className="detail-sub">Cosplayer</div>
          </div>
          <button type="button" className="button follow">
            フォローする
          </button>
        </div>

        <h1 className="detail-title">{post.title}</h1>
        <p className="detail-sub">{post.character}</p>

        <div className="tag-row">
          {post.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>

        <div className="detail-footer-actions">
          <button type="button" className={`action-button big${isLiked ? " active" : ""}`} onClick={() => toggleLike(post.id)}>
            {isLiked ? "♥" : "♡"} いいね
          </button>
          <button type="button" className={`action-button big${isSaved ? " active" : ""}`} onClick={() => toggleSave(post.id)}>
            {isSaved ? "Saved" : "Save"}
          </button>
          <button type="button" className="action-button big">↗ シェア</button>
        </div>
      </section>
    </div>
  );
}
