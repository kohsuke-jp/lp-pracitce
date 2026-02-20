// ===========================
// ローディングアニメーション
// ===========================
window.addEventListener('load', () => {
  let percent = 0;
  const percentElement = document.getElementById('percent');
  const loadingBar = document.querySelector('.loading-bar');
  const loading = document.getElementById('loading');
  
  // 初期状態でスクロール無効化
  document.body.style.overflow = 'hidden';
  
  // パーセント増加のアニメーション
  const interval = setInterval(() => {
    if (percent < 100) {
      percent += 2;
      percentElement.textContent = percent;
      loadingBar.style.width = percent + '%';
    } else {
      clearInterval(interval);
      
      // 100%到達後、フェードアウト
      setTimeout(() => {
        loading.classList.add('fade-out');
        
        // 完全に非表示
        setTimeout(() => {
          loading.style.display = 'none';
          document.body.style.overflow = 'auto';
          
          // ローディング完了後にタイプライター開始
          startTypewriter();
        }, 500);
      }, 300);
    }
  }, 20);
});

// ===========================
// タイプライター効果
// ===========================
function startTypewriter() {
  const typewriterElement = document.querySelector('.typewriter');
  const text = typewriterElement.getAttribute('data-text');
  const characters = '!@#$%^&*()_+-=[]{}|;:,.<>?';
  let currentIndex = 0;
  
  // 初期化：空にする
  typewriterElement.textContent = '';
  
  // ハッキング風効果
  const hackingInterval = setInterval(() => {
    let displayText = '';
    
    // 確定した文字
    for (let i = 0; i < currentIndex; i++) {
      displayText += text[i];
    }
    
    // ランダムな文字を追加
    for (let i = currentIndex; i < text.length; i++) {
      displayText += characters[Math.floor(Math.random() * characters.length)];
    }
    
    typewriterElement.textContent = displayText;
    
    // 1文字確定
    currentIndex++;
    
    // 全文字確定したら終了
    if (currentIndex > text.length) {
      clearInterval(hackingInterval); 
      typewriterElement.textContent = text; // 最終確定
    }
  }, 100); // 100ミリ秒ごとに更新
}

// ===========================
// スクロール出現アニメーション
// ===========================
function checkScroll() {
  const fadeElements = document.querySelectorAll('.fade-in');
  
  fadeElements.forEach(element => {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    
    // 要素が画面内に入ったら表示
    if (rect.top < windowHeight - 100) {
      element.classList.add('is-visible');
    }
  });
}

// スクロール時にチェック
window.addEventListener('scroll', checkScroll);

// 初回ロード時もチェック
window.addEventListener('DOMContentLoaded', checkScroll);