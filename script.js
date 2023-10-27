const randomImageElement = document.getElementById('random-image');
const generateImageButton = document.getElementById('generate-image');

generateImageButton.addEventListener('click', function () {
    console.log("Button clicked"); // Debugging statement
    
    // Determine the screen width
    const screenWidth = window.innerWidth;

    console.log("Screen width: " + screenWidth); // Debugging statement
    
    // Determine the image dimensions based on the screen width
    let imageWidth, imageHeight;

    if (screenWidth <= 1100) {
        // For small screens (e.g., mobile devices)
        imageWidth = 400;
        imageHeight = 1000;
    } else {
        // For larger screens
        imageWidth = 1200;
        imageHeight = 800;
    }
    
    console.log("Image dimensions - Width: " + imageWidth + " Height: " + imageHeight); // Debugging statement

    // Generate a random image with the adjusted dimensions
    fetch(`https://picsum.photos/${imageWidth}/${imageHeight}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.url;
        })
        .then((randomURL) => {
            // Update the image source
            randomImageElement.src = randomURL;
        })
        .catch((error) => {
            console.log('Error:', error);
        });
});
