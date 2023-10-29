const widthInput = document.getElementById('width');
const heightInput = document.getElementById('height');
const generateImageButton = document.getElementById('generateimage');
const randomImageElement = document.getElementById('random-image');
const customCategoryInput = document.getElementById('custom-category');

generateImageButton.addEventListener('click', () => {
    const customCategory = customCategoryInput.value.trim();
    const customWidth = widthInput.value;
    const customHeight = heightInput.value;

    if (!customWidth || !customHeight || customWidth <= 0 || customHeight <= 0 || !customCategory) {
        alert("Please enter valid width, height, and category");
        return;
    }

    fetch(`https://api.unsplash.com/photos/random?query=${customCategory}&client_id=fliw8d5grzxtwLk5Ch6W51FkneWiF65qkuHDFqY3UFw&w=${customWidth}&h=${customHeight}`)
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
