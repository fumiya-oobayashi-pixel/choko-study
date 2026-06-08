// ============================================================
// Firebase設定ファイル
// ============================================================
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyCQ3oADvR9OHNxWNoflKq5CwUtotyPwOHM",
  authDomain: "choko-study.firebaseapp.com",
  projectId: "choko-study",
  storageBucket: "choko-study.firebasestorage.app",
  messagingSenderId: "113743584687",
  appId: "1:113743584687:web:68c76a848f69018995635a"
};

// マスター管理者のメールアドレス（複数可）
const MASTER_ADMIN_EMAILS = [
  "michio-sakae@aichi-hino.co.jp",
  "fumiya-oobayashi@aichi-hino.co.jp",
  // 追加する場合はここに追記
  // "xxx@aichi-hino.co.jp",
];

// 後方互換用（単一管理者チェックに使用）
const MASTER_ADMIN_EMAIL = MASTER_ADMIN_EMAILS[0];

// 管理者チェック関数
function isAdmin(email) {
  return MASTER_ADMIN_EMAILS.includes(email);
}
