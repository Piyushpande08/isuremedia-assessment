// Play and Pause button

function play() {
  const videoPlayer = document.querySelector(".video-player");
  const video = videoPlayer.querySelector(".video");
  const playButton = document.querySelector(".play-button");

  playButton.addEventListener("click", (e) => {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  });
}
play();

function skip(value) {
  const videoPlayer = document.querySelector(".video-player");
  const video = videoPlayer.querySelector(".video");
  video.currentTime += value;
}

function myFunction() {
  const dots = document.getElementById("dots");
  const moreText = document.getElementById("more");
  const btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

function myFunctionT() {
  const dots2 = document.getElementById("dots-2");
  const moreText2 = document.getElementById("more-2");
  const btnText2 = document.getElementById("myBtn-2");
  
  if (dots2.style.display === "none") {
    dots2.style.display = "inline";
    btnText2.innerHTML = "Read more";
    moreText2.style.display = "none";
  } else {
    dots2.style.display = "none";
    btnText2.innerHTML = "Read less";
    moreText2.style.display = "inline";
  }
}
