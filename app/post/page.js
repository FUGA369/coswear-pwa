"use client";

import { useMemo, useState } from "react";
import { useApp } from "../../components/AppProvider";
import { getTodayTopic } from "../../lib/topic";

export default function PostPage() {
  const { addPost } = useApp();
  const topic = getTodayTopic();
  const [title, setTitle] = useState("");
  const [character, setCharacter] = useState("");
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
    if (!title || !character) return;
    const fallbackImage = "/photos/photo-1.svg";
    addPost({
      id: `post-${Date.now()}`,
      title,
      character,
      user: "Mizuki",
      tags: tags.length ? tags : ["#new"],
      likes: 0,
      saves: 0,
      images: previews.length ? previews : [fallbackImage]
    });
    setTitle("");
    setCharacter("");
    setTags([]);
    setTagInput("");
    setImages([]);
  };

  return (
    <div>
      <div className="section-title">新規投稿</div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="images">写真アップロード</label>
          <input
            id="images"
            type="file"
            accept="image/*"
            multiple
            onChange={(event) => setImages(Array.from(event.target.files || []))}
          />
          {previews.length > 0 && (
            <div className="image-preview">
              {previews.map((src, index) => (
                <img key={src} src={src} alt={`preview-${index + 1}`} />
              ))}
            </div>
          )}
        </div>
        <div className="input-group">
          <label htmlFor="title">投稿タイトル</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="例：夜明けの剣士"
          />
        </div>
        <div className="input-group">
          <label htmlFor="character">キャラ名</label>
          <input
            id="character"
            type="text"
            value={character}
            onChange={(event) => setCharacter(event.target.value)}
            placeholder="例：2B、セーラームーン"
          />
        </div>
        <div className="input-group">
          <label>タグ</label>
          <div className="search-bar">
            <input
              type="text"
              value={tagInput}
              onChange={(event) => setTagInput(event.target.value)}
              placeholder="#衣装 #制作"
            />
            <button
              type="button"
              className="button secondary"
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
        </div>
        <button
          type="button"
          className="button secondary"
          onClick={() => handleAddTag(topic.key)}
        >
          お題タグを追加（#{topic.key}）
        </button>
        <button type="submit" className="button">
          投稿する
        </button>
      </form>
    </div>
  );
}
