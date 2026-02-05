import PostCard from "./PostCard";

export default function PostGrid({ posts, columns = "default" }) {
  if (!posts.length) {
    return <div className="empty-state">投稿がまだありません。</div>;
  }

  const gridClass = columns === "three" ? "grid grid-three" : "grid";

  return (
    <div className={gridClass}>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
