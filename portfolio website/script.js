// Show current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Scroll to Top button
const scrollTopBtn = document.getElementById('scrollTopBtn');

window.onscroll = function () {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
};

scrollTopBtn.onclick = function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};