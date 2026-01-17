document.querySelectorAll('.enquire-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();

    const card = btn.closest('.cs-item');
    const detail = card.querySelector('.product-detail');

    detail.classList.toggle('show');
  });
});

