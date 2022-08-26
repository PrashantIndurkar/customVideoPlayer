const video = document.querySelector("video");
const progress = document.querySelector(".progress");
const play = document.getElementById("play");
const stop = document.getElementById("stop");
const timestamp = document.querySelector(".timestamp");

// toggleVideoStatus
function toggleVideoStatus() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}
// Stop Video
function stopVideo() {
  video.currentTime = 0;
  video.pause();
}
// update play
function updatePlayIcon() {
  if (video.paused) {
    play.innerHTML = `<i class="fa fa-play fa-2x"></i>`;
  } else {
    play.innerHTML = `<i class="fa fa-pause fa-2x"></i>`;
  }
}
function updateProgress() {
  progress.value = (video.currentTime / video.duration) * 100;
  // console.log(timestamp.textContent);
  // console.log(progress.value);
  // getMinute
  let minute = Math.floor(video.currentTime / 60);
  if (minute < 10) {
    minute = "0" + String(minute);
  }
  // get Seconds
  let seconds = Math.floor(video.currentTime);
  if (seconds < 10) {
    seconds = "0" + String(seconds);
  }
  timestamp.innerHTML = `${minute}:${seconds}`;
}
function setVideoProgress() {
  video.currentTime = (progress.value * video.duration) / 100;
}

video.addEventListener("click", toggleVideoStatus);
video.addEventListener("pause", updatePlayIcon);
video.addEventListener("play", updatePlayIcon);
video.addEventListener("timeupdate", updateProgress);

play.addEventListener("click", toggleVideoStatus);
stop.addEventListener("click", stopVideo);

progress.addEventListener("change", setVideoProgress);
