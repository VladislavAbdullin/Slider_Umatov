const images = [
    'image/photo1.jpg',
    'image/photo2.jpg',
    'image/photo3.jpg',
    'image/photo4.jpg',
    'image/photo5.jpg'
];

let currentIndex = 0;

const imageElement = document.getElementById('image');
const prevButton = document.getElementById('prevBtn');
const nextButton = document.getElementById('nextBtn');
const counterElement = document.getElementById('counter');

  
function updateImage() {
    imageElement.src = images[currentIndex];
    counterElement.innerHTML = (currentIndex + 1) + ' из ' + images.length;
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
});

// Инициализация первого изображения
updateImage();
