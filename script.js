let rotationY = 0;
let isDragging = false;
let startX = 0;

const cube = document.getElementById('cube');

// Desktop
cube.addEventListener('mousedown', (e) => {
  isDragging = true;
  startX = e.clientX;
});

window.addEventListener('mouseup', () => {
  isDragging = false;
});

window.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  let delta = e.clientX - startX;
  startX = e.clientX;
  rotationY += delta * 0.4;
  cube.style.transform = `rotateY(${rotationY}deg)`;
});

// Mobile
cube.addEventListener('touchstart', (e) => {
  isDragging = true;
  startX = e.touches[0].clientX;
});

cube.addEventListener('touchend', () => {
  isDragging = false;
});

cube.addEventListener('touchmove', (e) => {
  if (!isDragging) return;
  let delta = e.touches[0].clientX - startX;
  startX = e.touches[0].clientX;
  rotationY += delta * 0.4;
  cube.style.transform = `rotateY(${rotationY}deg)`;
});
