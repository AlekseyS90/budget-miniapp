let rotation = 0;
let startX = 0;
let isDragging = false;

const cube = document.getElementById('cube');

// Mouse drag
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
  rotation += delta * 0.5;
  cube.style.transform = `rotateY(${rotation}deg)`;
});

// Touch drag
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
  rotation += delta * 0.5;
  cube.style.transform = `rotateY(${rotation}deg)`;
});
