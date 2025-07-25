let rotation = 0;
let isDragging = false;
let startX = 0;
const cube = document.getElementById('cube');

// Вращение мышью
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

// Вращение пальцем
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

// Модалка
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const closeModal = document.getElementById("closeModal");

document.querySelectorAll('.face img').forEach(img => {
  img.addEventListener('click', () => {
    modal.style.display = "flex";
    modalImg.src = img.src;
  });
});

closeModal.addEventListener('click', () => {
  modal.style.display = "none";
});
