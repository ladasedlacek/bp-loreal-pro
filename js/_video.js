const videosPDP = document.querySelectorAll('.bpVideo');

videosPDP.forEach(video => {
  const player = video.querySelector('.bpVideo__player');
  const playButton = video.querySelector('.bpVideo__play');

  let videoCount = 0;

playButton.addEventListener('click', () => {
    videoCount++;

    if (videoCount == 1){
        player.src = player.getAttribute('data-url');
        player.setAttribute('controls', '');
    }    

    // Přehrát video
    player.play();

    // Pozorovat video
    observer.observe(video);
  });

  // Použít Intersection Observer API k detekci, zda se video nachází v zorném poli
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        // Video je v zorném poli, takže ho přehrajeme
        /* player.play(); */
      } else {
        // Video není v zorném poli, takže ho pozastavíme
        player.pause();
      }
    });
  });

  // Přidat posluchač události "play" a "pause"
  player.addEventListener('play', () => {
    playButton.classList.add('hide');
  });

  player.addEventListener('pause', () => {
    /* console.log('VIDEO SE NEPŘEHRÁVÁ'); */
    playButton.classList.remove('hide');
  });
});