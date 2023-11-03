function playAudio() {
    var audio = document.getElementById("audio");
    audio.play();
  }
  


  let centeredCard = null; 


  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      if (centeredCard !== card) {
        const cardRect = card.getBoundingClientRect();
        const mouseX = e.clientX - cardRect.left;
        const mouseY = e.clientY - cardRect.top;
  
        const rotateX = (mouseY / cardRect.height - 0.5) * -120;
        const rotateY = (mouseX / cardRect.width - 0.5) * -120; 
  
        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        card.classList.add('inactive-card'); 
      }
    });
  
    card.addEventListener('mouseleave', () => {
      if (centeredCard !== card) {
        card.style.transform = 'rotateX(0) rotateY(0)';
        card.classList.remove('inactive-card');
  
        setTimeout(() => {
          card.style.transition = 'transform 0.3s ease';
        }, 50); 
      }
    });
  
    card.addEventListener('click', () => {
      if (centeredCard !== card) {
        if (centeredCard) {
          centeredCard.style.position = 'static';
          centeredCard.style.transform = 'rotateX(0) rotateY(0) scale(1)';
          centeredCard.style.zIndex = 'auto'; 
          centeredCard.style.transition = 'none'; 
          centeredCard.classList.remove('inactive-card'); 
        }
  
        card.style.transform = 'rotateX(0) rotateY(0) scale(1.2)'; 
        card.style.transition = 'transform 0.3s ease'; 
        card.style.zIndex = '99'; 
  
        card.style.position = 'fixed';
        card.style.top = '50%';
        card.style.left = '50%';
        card.style.transformOrigin = 'center center';
        card.style.transform = 'translate(-50%, -50%)';
  
        centeredCard = card; 
      } else {
        card.style.position = 'static';
        card.style.transform = 'rotateX(0) rotateY(0) scale(1)';
        card.style.zIndex = 'auto'; 
        card.style.transition = 'none'; 
        card.classList.remove('inactive-card');
  
        centeredCard = null; 
      }
    });
  });
  
  