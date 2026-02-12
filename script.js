let yesClickedOnce = false;

function yesClicked() {
  const videoContainer = document.getElementById('videoContainer');
  const message = document.getElementById('message');
  const songList = document.getElementById('songList');

  if(!yesClickedOnce){
    // Play teddy couple kiss video (new YouTube Shorts link)
    videoContainer.innerHTML = `
      <iframe width="400" height="300" src="https://www.youtube.com/embed/rX4PYXRpIRY?autoplay=1&mute=1"
      title="Teddy Couple Kiss" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    `;
    message.innerText = "💖 Look at our cute teddy couple! 💖";
    yesClickedOnce = true;
  } else {
    message.innerText = "Ok 💖 You are the best! 😘";
    songList.style.display = 'block';
  }
}

function noClicked() {
  const videoContainer = document.getElementById('videoContainer');
  const message = document.getElementById('message');
  const songList = document.getElementById('songList');

  // Play angry teddy video (previous link)
  videoContainer.innerHTML = `
    <iframe width="400" height="300" src="https://www.youtube.com/embed/-vmR9Pieii4?autoplay=1&mute=1"
    title="Angry Teddy" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
  `;
  message.innerText = "😠 Oh no! Don't be angry, pick a song to feel better!";
  songList.style.display = 'block';
}