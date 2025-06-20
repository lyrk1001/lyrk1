function createHeart() {
  const heart = document.createElement('div');
  heart.className = 'floating-heart';
  heart.innerHTML = '❤';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = (2 + Math.random() * 2) + 's';
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 4000);
}

setInterval(createHeart, 800);
