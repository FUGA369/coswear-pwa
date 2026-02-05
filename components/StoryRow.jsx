import { storyUsers } from "../lib/data";

export default function StoryRow() {
  return (
    <div className="story-row">
      {storyUsers.map((user) => (
        <div key={user.name} className="story-item">
          <div className="story-avatar" />
          <div className="story-name">{user.name}</div>
        </div>
      ))}
    </div>
  );
}
