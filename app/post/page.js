"use client";

import { useMemo, useState } from "react";
import { useApp } from "../../components/AppProvider";
import { getTodayTopic } from "../../lib/topic";

export default function PostPage() {
  const { addPost } = useApp();
  const topic = getTodayTopic();
  const [caption, setCaption] = useState("");
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState([]);
  const [images, setImages] = useState([]);

  const previews = useMemo(() => images.map((file) => URL.createObjectURL(file)), [images]);

  const handleAddTag = (value) => {
    const trimmed = value.trim();
    if (!trimmed) return;
    const formatted = trimmed.startsWith("#") ? trimmed : `#${trimmed}`;
    setTags((prev) => (prev.includes(formatted) ? prev : [...prev, formatted]));
    setTagInput("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!caption.trim() && images.length === 0) return;
    const fallbackImage = "/photos/photo-1.svg";
    addPost({
      id: `post-${Date.now()}`,
      title: caption.trim() || "New Post",
      character: "Unknown",
      user: "Mizuki",
      tags: tags.length ? tags : ["#new"],
      likes: 0,
      saves: 0,
      images: previews.length ? previews : [fallbackImage]
    });
    setCaption("");
    setTags([]);
    setTagInput("");
    setImages([]);
  };

  return (
    <div className="post-screen">
      <div className="post-card">
        <div className="post-logo">
          <img src="/icons/hue-logo.svg" alt="HUE" />
        </div>
        <form className="post-form" onSubmit={handleSubmit}>
          <div className="post-top-bar">
            <button type="button" className="icon-button" aria-label="閉じる">
              ×
            </button>
            <div className="post-title">新規投稿</div>
            <button type="submit" className="button primary compact">
              投稿
            </button>
          </div>

          <label className="upload-box">
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={(event) => setImages(Array.from(event.target.files || []))}
            />
            {previews.length > 0 ? (
              <div className="image-preview">
                {previews.map((src, index) => (
                  <img key={src} src={src} alt={`preview-${index + 1}`} />
                ))}
              </div>
            ) : (
              <div className="upload-placeholder">
                <span className="upload-icon">🖼️</span>
                <span>写真を選択</span>
              </div>
            )}
          </label>

          <div className="input-group compact">
            <label htmlFor="caption">説明文</label>
            <textarea
              id="caption"
              value={caption}
              onChange={(event) => setCaption(event.target.value)}
              placeholder="この写真について..."
            />
          </div>

          <div className="input-group compact">
            <label>タグ</label>
            <div className="search-bar is-pill compact">
              <input
                type="text"
                value={tagInput}
                onChange={(event) => setTagInput(event.target.value)}
                placeholder="#衣装 #制作"
              />
              <button
                type="button"
                className="button ghost"
                onClick={() => handleAddTag(tagInput)}
              >
                追加
              </button>
            </div>
            <div className="tag-row">
              {tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
            <button
              type="button"
              className="button secondary compact"
              onClick={() => handleAddTag(topic.key)}
            >
              お題タグを追加（#{topic.key}）
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
