document.addEventListener('DOMContentLoaded', function() {
    const openBasketBtn = document.getElementById('open-basket-btn');
    const closeBasketBtn = document.getElementById('close-basket-btn');
    const basketModal = document.getElementById('basket-modal');

    if (!openBasketBtn || !closeBasketBtn || !basketModal) {
        console.error('Одна из кнопок или модальное окно не найдены. Проверьте ID.');
        return;
    }

    openBasketBtn.addEventListener('click', function(event) {
        event.preventDefault(); 
        basketModal.style.display = 'block';
    });

    closeBasketBtn.addEventListener('click', function() {
        basketModal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == basketModal) {
            basketModal.style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const navLinksHeader = document.querySelectorAll('header nav a[href^="#"]');
    const navLinksFooter = document.querySelectorAll('footer nav a[href^="#"]');
  
    function smoothScroll(links) {
      links.forEach(link => {
        link.addEventListener('click', function(e) {
          e.preventDefault();
  
          const targetId = this.getAttribute('href');
          const targetElement = document.querySelector(targetId);
  
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        });
      });
    }
    smoothScroll(navLinksHeader);
    smoothScroll(navLinksFooter);
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    async function loadPage(pageUrl) {
      try {
        const response = await fetch(pageUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const html = await response.text();
  
        document.body.innerHTML = html;
  
        initializeScripts();
        history.pushState(null, null, pageUrl);
  
      } catch (error) {
        console.error('Ошибка загрузки страницы:', error);
      }
    }
  
    function initializeScripts() {
      const navLinks = document.querySelectorAll('header nav a[href^="#"], footer nav a[href^="#"]');
      navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
          e.preventDefault();
          const targetId = this.getAttribute('href');
          const targetElement = document.querySelector(targetId);
  
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        });
      });
  
      const openBasketBtn = document.getElementById('open-basket-btn');
      if (openBasketBtn) {
        openBasketBtn.addEventListener('click', function(e) {
          e.preventDefault();
          const basketModal = document.getElementById('basket-modal');
          if (basketModal) {
            basketModal.style.display = 'block';
          }
        });
      }
  
      const closeBasketBtn = document.getElementById('close-basket-btn');
      if (closeBasketBtn) {
        closeBasketBtn.addEventListener('click', function() {
          const basketModal = document.getElementById('basket-modal');
          if (basketModal) {
            basketModal.style.display = 'none';
          }
        });
      }
    }
  
    const pageLinks = document.querySelectorAll('header nav a:not([href^="#"]), footer nav a:not([href^="#"])'); 
  
    pageLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const pageUrl = this.getAttribute('href');
        loadPage(pageUrl);
      });
    });
  

    initializeScripts();
  });