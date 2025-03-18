let currentSlide = 0;
const slides = document.querySelectorAll('.slides img');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

// Tự động chuyển slide sau mỗi 5 giây
setInterval(nextSlide, 5000);

// Hiển thị slide đầu tiên khi tải trang
showSlide(currentSlide);