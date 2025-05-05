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
