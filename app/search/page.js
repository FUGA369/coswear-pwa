"use client";

import { useMemo, useState } from "react";
import PostGrid from "../../components/PostGrid";
import { useApp } from "../../components/AppProvider";

export default function SearchPage() {
  const { posts } = useApp();
  const [query, setQuery] = useState("");

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
    <div>
      <div className="section-title">タグ検索</div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="#衣装 / #制作 など"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <button
          type="button"
          className="button secondary"
          onClick={() => setQuery("")}
        >
          Clear
        </button>
      </div>
      <div className="section-title">Results</div>
      <PostGrid posts={results} />
    </div>
  );
}
