

let currentIndex = 0;

function showImage(index) {
    const imageContainer = document.querySelector('.image-container');
    const offset = -index * 100;
    imageContainer.style.transform = `translateX(${offset}%)`;
    currentIndex = index;
}

function previousImage() {
    currentIndex = (currentIndex - 1 + document.querySelectorAll('.image-container img').length) % document.querySelectorAll('.image-container img').length;
    showImage(currentIndex);
}

function nextImage() {
    currentIndex = (currentIndex + 1) % document.querySelectorAll('.image-container img').length;
    showImage(currentIndex);
}

// Show the initial image
showImage(currentIndex);

document.addEventListener("DOMContentLoaded", function () {
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    const galleryCounter = document.querySelector('.gallery-counter');

    let currentIndex = 1;
    const totalImages = document.querySelectorAll('.image-container img').length;
    updateGalleryCounter();

    prevButton.addEventListener('click', () => {
        if (currentIndex > 1) {
            currentIndex--;
            updateGalleryCounter();
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentIndex < totalImages) {
            currentIndex++;
            updateGalleryCounter();
        } else {
            currentIndex = 1;
            updateGalleryCounter();
        }
    });

    function updateGalleryCounter() {
        galleryCounter.textContent = currentIndex + '/' + totalImages;
    }
});