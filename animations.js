document.addEventListener('DOMContentLoaded', function () {
  // Awards Section Animation
  const awardCards = document.querySelectorAll('.award-card');
  awardCards.forEach((card, index) => {
    card.style.opacity = 0;
    card.style.transform = 'translateY(40px)';
    setTimeout(() => {
      card.style.transition = '0.8s ease';
      card.style.opacity = 1;
      card.style.transform = 'translateY(0)';
    }, index * 200);
  });

  // About & Program Boxes Slide In
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate__animated', 'animate__fadeInUp');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  document.querySelectorAll('.about-box').forEach(box => observer.observe(box));
});
