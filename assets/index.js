import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';

const video = document.querySelector('video');
const playpause = document.querySelector('#playpause');
const muteunmute = document.querySelector('#muteunmute');

const player = new MediaPlayer({
  el: video,
  plugins: [
    new AutoPlay(),
  ],
});

playpause.onclick = () => player.togglePlay();
muteunmute.onclick = () => player.toggleMute();
