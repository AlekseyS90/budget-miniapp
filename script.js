let currentRotation = 0;
let startX = 0;
let isDragging = false;

const slider = document.getElementById('slider');

// Desktop / Mouse
slider.addEventListener('mousedown', (e) => {
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
  currentRotation += delta * 0.5;
  slider.style.transform = `rotateY(${currentRotation}deg)`;
});

// Mobile / Touch
slider.addEventListener('touchstart', (e) => {
  isDragging = true;
  startX = e.touches[0].clientX;
});

slider.addEventListener('touchend', () => {
  isDragging = false;
});

slider.addEventListener('touchmove', (e) => {
  if (!isDragging) return;
  let delta = e.touches[0].clientX - startX;
  startX = e.touches[0].clientX;
  currentRotation += delta * 0.5;
  slider.style.transform = `rotateY(${currentRotation}deg)`;
});
