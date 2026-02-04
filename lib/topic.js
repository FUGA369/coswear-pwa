const topicMap = [
  { key: "表現", description: "感情や世界観の表現に挑戦しよう" },
  { key: "衣装", description: "衣装のディテールを見せよう" },
  { key: "構図", description: "撮影アングルを工夫しよう" },
  { key: "制作", description: "制作の裏側を共有しよう" },
  { key: "作品愛", description: "推し作品への愛を語ろう" },
  { key: "イベント", description: "イベントの思い出を残そう" },
  { key: "ゆる", description: "ゆるっと日常コスを楽しもう" }
];

export function getTodayTopic(date = new Date()) {
  const dayIndex = date.getDay();
  return topicMap[dayIndex];
}
