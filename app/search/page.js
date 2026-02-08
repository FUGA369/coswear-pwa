"use client";

import { useMemo, useState } from "react";
import PostGrid from "../../components/PostGrid";
import { useApp } from "../../components/AppProvider";

export default function SearchPage() {
  const { posts } = useApp();
  const [query, setQuery] = useState("");
  const categories = [
    "アニメコスプレ",
    "ゲームキャラコスプレ",
    "メイド型コスプレ"
  ];
  const popularTags = [
    "#アニメコスプレ",
    "#コスプレ",
    "#アニメ",
    "#ゲームコスプレ",
    "#ゲーム",
    "#コスプレイヤー",
    "#メイドコスプレ",
    "#メイド服",
    "#かわいい",
    "#ファンタジー",
    "#衣装",
    "#撮影会",
    "#新作"
  ];

  const results = useMemo(() => {
    if (!query.trim()) {
      return posts;
    }
    const normalized = query.trim().replace(/^#/, "").toLowerCase();
    return posts.filter((post) =>
      post.tags.some((tag) => tag.replace("#", "").toLowerCase().includes(normalized))
    );
  }, [posts, query]);

  return (
    <div className="search-screen">
      <div className="search-logo">
        <img src="/icons/hue-logo.svg" alt="HUE" />
      </div>
      <div className="search-bar is-pill">
        <span className="search-icon" aria-hidden="true">
          🔍
        </span>
        <input
          type="text"
          placeholder="ハッシュタグで検索..."
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        {query ? (
          <button
            type="button"
            className="button ghost"
            onClick={() => setQuery("")}
          >
            クリア
          </button>
        ) : null}
      </div>

      {!query.trim() ? (
        <>
          <div className="section-title compact">カテゴリー</div>
          <div className="category-list">
            {categories.map((item) => (
              <div className="category-row" key={item}>
                {item}
              </div>
            ))}
          </div>

          <div className="section-title compact">人気のハッシュタグ</div>
          <div className="tag-chip-grid">
            {popularTags.map((tag) => (
              <button
                type="button"
                className="tag-chip"
                key={tag}
                onClick={() => setQuery(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="section-title compact">検索結果</div>
          <PostGrid posts={results} />
        </>
      )}
    </div>
  );
}
