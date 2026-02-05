export default function TagChips({ tags, onSelect }) {
  return (
    <div className="tag-chips">
      {tags.map((tag) => (
        <button
          key={tag}
          type="button"
          className="chip"
          onClick={() => onSelect?.(tag)}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}
