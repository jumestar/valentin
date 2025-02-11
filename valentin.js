function showVideo(videoId) {
  document.getElementById('initial-content').style.display = 'none';
  document.querySelector('.button-container').style.display = 'none';
  document.getElementById('video-container').style.display = 'block';
  let video = document.getElementById(videoId);
  video.style.display = 'block';
  video.play(); // Démarre la vidéo automatiquement
  document.getElementById('text-container').innerHTML = 'Félicitations tu es ma valentine ❤️';
}