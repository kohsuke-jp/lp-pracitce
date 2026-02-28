window.addEventListener('load', () => {
  let percent = 0;
  const percentElement = document.getElementById('percent');
  const loadingBar = document.querySelector('.loading-bar');
  const loading = document.getElementById('loading');
  
  document.body.style.overflow = 'hidden';
  
    const interval = setInterval(() => {
    if (percent < 100) {
      percent += 2;
      percentElement.textContent = percent;
      loadingBar.style.width = percent + '%';
    } else {
      clearInterval(interval);
      
      setTimeout(() => {
        loading.classList.add('fade-out');
        
        setTimeout(() => {
          loading.style.display = 'none';
          document.body.style.overflow = 'auto';
          
          startTypewriter();
        }, 500);
      }, 300);
    }
  }, 20);
});

function startTypewriter() {
  const typewriterElement = document.querySelector('.typewriter');
  const text = typewriterElement.getAttribute('data-text');
  const characters = '!@#$%^&*()_+-=[]{}|;:,.<>?';
  let currentIndex = 0;
  
  typewriterElement.textContent = '';
  
  const hackingInterval = setInterval(() => {
    let displayText = '';
    
    for (let i = 0; i < currentIndex; i++) {
      displayText += text[i];
    }

    for (let i = currentIndex; i < text.length; i++) {
      displayText += characters[Math.floor(Math.random() * characters.length)];
    }
    
    typewriterElement.textContent = displayText;
    
    currentIndex++;

    if (currentIndex > text.length) {
      clearInterval(hackingInterval); 
      typewriterElement.textContent = text; 
    }
  }, 100); 
}

function checkScroll() {
  const fadeElements = document.querySelectorAll('.fade-in');
  
  fadeElements.forEach(element => {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    
    if (rect.top < windowHeight - 100) {
      element.classList.add('is-visible');
    }
  });
}

window.addEventListener('scroll', checkScroll);

window.addEventListener('DOMContentLoaded', checkScroll);