// TypingMind 日本語UI調整拡張機能
// ファイル名: typingmind-jp-ui-fix.js

/**
 * TypingMindの日本語UI表示を改善するための拡張機能
 * 主にサイドメニューの文字サイズを調整し、日本語表示時のUIを最適化します
 */

function applyJapaneseUIFixes() {
    // 日本語UI調整用のスタイルを作成
    const styleElement = document.createElement('style');
    styleElement.setAttribute('data-tm-jp-ui-fix', 'true'); // 識別用の属性を追加

    styleElement.textContent = `
    /* サイドメニュー項目の文字サイズを調整 */
    .sidebar-menu-item .text {
      font-size: 0.9em !important; /* 文字サイズを小さくする */
      letter-spacing: -0.02em !important; /* 文字間隔を少し詰める */
      white-space: nowrap !important;
      overflow: hidden !important;
      text-overflow: ellipsis !important;
    }

    /* サイドバー全体の調整 */
    .sidebar {
      min-width: 220px !important; /* 必要に応じてサイドバーの幅を調整 */
    }

    /* アイコンとテキストの間隔調整 */
    .sidebar-menu-item .icon {
      margin-right: 6px !important;
    }

    /* ドロップダウンメニューの調整 */
    .dropdown-menu {
      min-width: 180px !important; /* ドロップダウンメニューの幅を広げる */
    }

    /* モバイル表示の調整 */
    @media (max-width: 768px) {
      .sidebar-menu-item .text {
        font-size: 0.85em !important;
      }
    }
  `;

    // スタイル要素をドキュメントに追加
    document.head.appendChild(styleElement);

    console.log('TypingMind 日本語UI調整が適用されました');
}

/**
 * 日本語テキストが含まれているかチェックする関数
 * @param {string} text - チェック対象のテキスト
 * @return {boolean} - 日本語が含まれている場合はtrue
 */
function containsJapaneseText(text) {
    // 日本語の文字コード範囲を正規表現でチェック
    return /[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf]/.test(text);
}

/**
 * 動的に変更される要素を監視し、必要に応じて追加の調整を行う
 */
function observeUIChanges() {
    const observer = new MutationObserver((mutations) => {
        // サイドメニューの要素を検出
        const sideMenuItems = document.querySelectorAll('.sidebar-menu-item');

        if (sideMenuItems.length > 0) {
            sideMenuItems.forEach(item => {
                // 日本語テキストが含まれているかチェック
                if (item.textContent && containsJapaneseText(item.textContent)) {
                    // 日本語テキストが含まれる場合、特別なクラスを追加
                    item.classList.add('jp-menu-item');
                }
            });
        }
    });

    // ページ全体を監視（動的に変更される可能性があるため）
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
}

// ページ読み込み完了時または既に読み込まれている場合に実行
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    applyJapaneseUIFixes();
    observeUIChanges();
} else {
    document.addEventListener('DOMContentLoaded', () => {
        applyJapaneseUIFixes();
        observeUIChanges();
    });
}

// 将来の拡張のためのプレースホルダー
// 例: キーボードショートカットの追加、翻訳機能の統合など
const typingMindJpUIFix = {
    version: '1.0.0',
    name: 'TypingMind 日本語UI調整',

    // 設定を保存する機能（将来の拡張用）
    saveSettings: function(settings) {
        if (window.localStorage) {
            window.localStorage.setItem('tm-jp-ui-fix-settings', JSON.stringify(settings));
        }
    },

    // 設定を読み込む機能（将来の拡張用）
    loadSettings: function() {
        if (window.localStorage) {
            const savedSettings = window.localStorage.getItem('tm-jp-ui-fix-settings');
            return savedSettings ? JSON.parse(savedSettings) : null;
        }
        return null;
    }
};

// グローバルオブジェクトに拡張機能を公開（デバッグや他の拡張機能との連携用）
window.typingMindJpUIFix = typingMindJpUIFix;

console.log(`TypingMind 日本語UI調整拡張機能 v${typingMindJpUIFix.version} が読み込まれました`);

