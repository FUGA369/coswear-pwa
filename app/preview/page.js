"use client";

export default function PreviewPage() {
  const links = [
    { href: "/", label: "トップ" },
    { href: "/search", label: "検索" },
    { href: "/post", label: "投稿" },
    { href: "/saved", label: "保存" },
    { href: "/my", label: "マイページ" }
  ];

  return (
    <div className="preview-page">
      <div className="section-title">画面プレビュー</div>
      <p className="preview-text">
        Vercel公開URLでも、このリンクから各画面を確認できます。
      </p>
      <div className="preview-links">
        {links.map((link) => (
          <a key={link.href} className="preview-link" href={link.href}>
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}
