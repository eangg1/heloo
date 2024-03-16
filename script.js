document.addEventListener('click', function() {
    if (currentText < cards.length - 1) {
      cards[currentText].classList.add('fade-in');
      setTimeout(() => {
        cards[currentText].style.display = 'none';
        currentText++;
        cards[currentText].style.display = 'block';
      }, 500); // Wait for the animation to complete (0.5s)
    } else {
      button.style.display = 'block';
    }
  });
