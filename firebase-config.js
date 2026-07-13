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
  "T_SOS@aichi-hino.co.jp",
  "junya-yoshida@aichi-hino.co.jp",
  // 追加する場合はここに追記
  // "xxx@aichi-hino.co.jp",
];

// 後方互換用（単一管理者チェックに使用）
const MASTER_ADMIN_EMAIL = MASTER_ADMIN_EMAILS[0];

// 管理者チェック関数
function isAdmin(email) {
  return MASTER_ADMIN_EMAILS.includes(email);
}

// ============================================================
// コンテンツ保護（コピー・印刷・右クリック禁止）
// ============================================================
(function(){
  // CSSで選択・印刷をブロック
  var style = document.createElement('style');
  style.textContent = [
    '* { -webkit-user-select: none !important; user-select: none !important; }',
    'input, textarea { -webkit-user-select: text !important; user-select: text !important; }',
    '@media print { html, body { display: none !important; } }'
  ].join('\n');
  document.head ? document.head.appendChild(style) : document.addEventListener('DOMContentLoaded', function(){ document.head.appendChild(style); });

  // 右クリック禁止
  document.addEventListener('contextmenu', function(e){ e.preventDefault(); return false; });

  // ドラッグ禁止
  document.addEventListener('dragstart', function(e){ e.preventDefault(); return false; });

  // キーボードショートカット禁止
  document.addEventListener('keydown', function(e){
    var k = e.key.toLowerCase();
    // Ctrl/Cmd + C, A, S, P, U（ソース表示）
    if ((e.ctrlKey || e.metaKey) && ['c','a','s','p','u'].includes(k)) {
      e.preventDefault();
      return false;
    }
    // F12（DevTools）
    if (e.key === 'F12') {
      e.preventDefault();
      return false;
    }
    // PrintScreen
    if (e.key === 'PrintScreen') {
      e.preventDefault();
      // クリップボードを上書き（対応ブラウザのみ）
      try { navigator.clipboard.writeText(''); } catch(err){}
      return false;
    }
  });

  // コピーイベント禁止
  document.addEventListener('copy', function(e){ e.preventDefault(); return false; });
  document.addEventListener('cut',  function(e){ e.preventDefault(); return false; });
})();
