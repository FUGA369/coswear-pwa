"use client";

export default function IconPreviewPage() {
  return (
    <div className="icon-preview-page">
      <div className="icon-preview-card is-large">
        <div>
          <div className="icon-preview-title">アプリアイコン</div>
          <div className="icon-preview-text">
            このページは、アプリアイコンをブラウザで直接確認するための画面です。
          </div>
          <a className="icon-preview-link" href="/icons/icon.svg" target="_blank" rel="noreferrer">
            直接見る（/icons/icon.svg）
          </a>
        </div>
        <img className="icon-preview-image" src="/icons/icon.svg" alt="アプリアイコンプレビュー" />
      </div>
    </div>
  );
}
