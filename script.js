// Typing Animation
const typeText = (element, text, speed = 100) => {
    let index = 0;
    element.innerHTML = '';
    
    const typing = setInterval(() => {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
        } else {
            clearInterval(typing);
        }
    }, speed);
};

// Initialize typing animation
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero-text h2');
    const originalText = heroTitle.textContent;
    heroTitle.classList.add('typing-text');
    typeText(heroTitle, originalText, 100);
});

// Lightbox functionality
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.querySelector('.lightbox-caption');
let currentImageIndex = 0;
const projectImages = document.querySelectorAll('.project-image img');

projectImages.forEach((img, index) => {
    img.addEventListener('click', () => {
        currentImageIndex = index;
        showLightbox(img);
    });
});

function showLightbox(img) {
    lightbox.classList.add('active');
    lightboxImg.src = img.src;
    lightboxCaption.textContent = img.alt;
    document.body.style.overflow = 'hidden';
}

document.querySelector('.lightbox-close').addEventListener('click', () => {
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
});

document.querySelector('.lightbox-next').addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % projectImages.length;
    showLightbox(projectImages[currentImageIndex]);
});

document.querySelector('.lightbox-prev').addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + projectImages.length) % projectImages.length;
    showLightbox(projectImages[currentImageIndex]);
});