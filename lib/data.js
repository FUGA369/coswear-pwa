export const initialPosts = [
  {
    id: "post-1",
    title: "月読みの幻想衣装",
    character: "セーラームーン",
    user: "Yui",
    tags: ["#月", "#衣装", "#スタジオ"],
    likes: 128,
    saves: 42,
    images: ["/photos/photo-1.svg", "/photos/photo-2.svg"]
  },
  {
    id: "post-2",
    title: "剣士の夜明け",
    character: "2B",
    user: "Ren",
    tags: ["#構図", "#光", "#バトル"],
    likes: 98,
    saves: 35,
    images: ["/photos/photo-3.svg"]
  },
  {
    id: "post-3",
    title: "秋祭りの狐",
    character: "オリジナル",
    user: "Saki",
    tags: ["#イベント", "#小物", "#着物"],
    likes: 143,
    saves: 64,
    images: ["/photos/photo-4.svg", "/photos/photo-5.svg"]
  },
  {
    id: "post-4",
    title: "メカニカルドール",
    character: "巡音ルカ",
    user: "Mina",
    tags: ["#制作", "#メイク", "#造形"],
    likes: 77,
    saves: 28,
    images: ["/photos/photo-6.svg"]
  },
  {
    id: "post-5",
    title: "旅する魔女",
    character: "キキ",
    user: "Haru",
    tags: ["#作品愛", "#街撮り", "#ゆる"],
    likes: 120,
    saves: 50,
    images: ["/photos/photo-7.svg"]
  },
  {
    id: "post-6",
    title: "夜霧の忍者",
    character: "サスケ",
    user: "Kaito",
    tags: ["#表現", "#影", "#アクション"],
    likes: 91,
    saves: 31,
    images: ["/photos/photo-8.svg"]
  }
];

export const defaultProfile = {
  name: "Mizuki",
  bio: "衣装制作と撮影が好き。",
  favorite: "#衣装 #制作",
  stats: {
    posts: 12,
    followers: 340,
    following: 180
  }
};

export const storyUsers = [
  { name: "Yui" },
  { name: "Ren" },
  { name: "Saki" },
  { name: "Mina" },
  { name: "Haru" },
  { name: "Kaito" },
  { name: "Mizuki" }
];

export const trendingTags = [
  "#衣装",
  "#制作",
  "#構図",
  "#イベント",
  "#表現",
  "#ゆる",
  "#メイク"
];
