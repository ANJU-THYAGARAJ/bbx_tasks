document.addEventListener('DOMContentLoaded', () => {
  const shopNowBtn = document.querySelector('.btn-dark-custom');
  
  if (shopNowBtn) {
    shopNowBtn.addEventListener('click', (e) => {
      e.preventDefault();
      alert('Navigating to Shop section!');
    });
  }
});