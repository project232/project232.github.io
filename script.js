const widthInput = document.getElementById('width');
const heightInput = document.getElementById('height');
const generateImageButton = document.getElementById('generateimage');
const randomImageElement = document.getElementById('random-image');
const customCategoryInput = document.getElementById('custom-category');

document.getElementById("generateimage").addEventListener("click", function() {
    const element = document.documentElement; // Get the root element of the document

    // Check if the current document supports the Fullscreen API
    if (element.requestFullscreen) {
        element.requestFullscreen(); // Request full-screen mode
    } else if (element.mozRequestFullScreen) { // Firefox
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) { // Chrome, Safari, and Opera
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) { // IE/Edge
        element.msRequestFullscreen();
    }
});

generateImageButton.addEventListener('click', () => {
    const customCategory = customCategoryInput.value.trim();
    const customWidth = widthInput.value;
    const customHeight = heightInput.value;

    if (!customWidth || !customHeight || customWidth <= 0 || customHeight <= 0 || !customCategory) {
        alert("Please enter a valid width, height, and category");
        return;
    }

    fetch(`https://api.unsplash.com/photos/random?query=${customCategory}&client_id=kIfKD3rMaRDJYkuP03koQLhKkTpHmmojZv9FMAv5ZEM&w=${customWidth}&h=${customHeight}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {
            const randomURL = data.urls.regular;
            // Update the image source
            randomImageElement.src = randomURL;
        })
        .catch((error) => {
            console.log('Error:', error);
        });
});
