import PostCard from "./PostCard";

export default function PostGrid({ posts }) {
  if (!posts.length) {
    return <div className="empty-state">投稿がまだありません。</div>;
  }

  return (
    <div className="grid">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
