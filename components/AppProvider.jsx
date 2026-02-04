"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { initialPosts } from "../lib/data";

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [posts, setPosts] = useState(initialPosts);
  const [savedIds, setSavedIds] = useState([]);

  useEffect(() => {
    const stored = typeof window !== "undefined" ? window.localStorage.getItem("coswear-saved") : null;
    if (stored) {
      setSavedIds(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("coswear-saved", JSON.stringify(savedIds));
    }
  }, [savedIds]);

  const toggleSave = (postId) => {
    setSavedIds((prev) =>
      prev.includes(postId) ? prev.filter((id) => id !== postId) : [...prev, postId]
    );
  };

  const addPost = (post) => {
    setPosts((prev) => [post, ...prev]);
  };

  const value = useMemo(
    () => ({ posts, savedIds, toggleSave, addPost }),
    [posts, savedIds]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within AppProvider");
  }
  return context;
}
