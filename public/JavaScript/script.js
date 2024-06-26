document.addEventListener('DOMContentLoaded', (event) => {

  let images = ["/images/HCust1.jpg", "/images/HCust2.jpg", "/images/HCust3.jpg"];
  let currentIndex = 0; // Start with the first image
  let imgElement = document.querySelector(".reel-image");

  function changeImage() {
    // create a new img element for the new image
    let newImg = document.createElement('img');
    newImg.src = images[currentIndex];
    newImg.classList.add('reel-image', 'new-image');
    pictureReelContainer.appendChild(newImg);

    // push the old image out and the new image in
    imgElement.style.transform = 'translateX(-100%)';
    newImg.style.transform = 'translateX(0)';

    // clean up
    setTimeout(() => {
      pictureReelContainer.removeChild(imgElement);
      imgElement = newImg;
      imgElement.classList.remove('new-image');
    }, 1000); // this should match the transition time

    currentIndex = (currentIndex + 1) % images.length;
  }

  setInterval(changeImage, 3000); // Change image every 3 seconds


  // Inside the changeImage function, after updating imgElement.src
  let newImg = document.createElement('img');
  newImg.src = images[currentIndex];
  newImg.classList.add('reel-image', 'new-image'); // Add a 'new-image' class
  newImg.style.left = '100%'; // Start off to the right
  let pictureReelContainer = document.getElementById('picture-reel-container');
  pictureReelContainer.appendChild(newImg);

  // Apply your transition to both '.reel-image' and '.new-image':
  // Example CSS (adjust parameters and add vendor prefixes)



  imgElement.style.left = '-100%'; // Slide-out animation for the old image

  // Clean up (do this asynchronously using setTimeout for smooth completion)
  setTimeout(() => {
    pictureReelContainer.removeChild(imgElement);
    imgElement = newImg;
    imgElement.classList.remove('new-image'); // Ready for next cycle
  }, 500); // Adjust delay after transition ends
  function hideVideo() {
    var video = document.getElementById('introVideo');
    video.style.display = 'none';
  }


});

// YouTube API Functionality
const videoSection = document.querySelector("section");
const loader = document.querySelector('.loader-box'); // Ensure the loader-box class exists

function getVideos() {
  const playlistId = 'UU_BaxRhNREI_V0DVXjXDALA';
  const apiKey = 'AIzaSyB7_cKmUW5iStlwsiOqB0p_BkMUme9csVU';
  const apiUrl = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=5&playlistId=${playlistId}&key=${apiKey}`;

  fetch(apiUrl)
    .then(res => res.json())
    .then(data => {
      if (loader) loader.style.display = 'none';
      data.items.forEach(el => {
        const videoId = el.snippet.resourceId.videoId;
        const thumbnailUrl = el.snippet.thumbnails.maxres ? el.snippet.thumbnails.maxres.url : el.snippet.thumbnails.default.url;
        videoSection.innerHTML += `<a target="_blank" href="https://www.youtube.com/watch?v=${videoId}" class="yt-video">
                                        <img src="${thumbnailUrl}" alt="${el.snippet.title}" />
                                        <h3>${el.snippet.title}</h3>
                                      </a>`;
      });
    })
    .catch(err => {
      console.error(err);
      if (loader) loader.style.display = 'none';
      videoSection.innerHTML = '<h3>Sorry, something went wrong. Please try again later.</h3>';
    });
}
// Call getVideos to load videos when needed
getVideos();

