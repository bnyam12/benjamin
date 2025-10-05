document.addEventListener('DOMContentLoaded', () => {
  const socialCards = document.querySelectorAll('.social-card');

  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  socialCards.forEach(card => {
    observer.observe(card);
  });

  const profileImage = document.querySelector('.profile-image');
  if (profileImage) {
    profileImage.addEventListener('click', () => {
      profileImage.style.transform = 'scale(1.1) rotate(5deg)';
      setTimeout(() => {
        profileImage.style.transform = 'scale(1) rotate(0deg)';
      }, 300);
    });
  }
});
