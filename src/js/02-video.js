import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const THROTTLE_DELAY = 1000;

let currentTime = localStorage.getItem('videoplayer-current-time') || 0;

player.setCurrentTime(parseFloat(currentTime));

const saveCurrentTime = throttle(() => {
  localStorage.setItem('videoplayer-current-time', currentTime.toString());
}, THROTTLE_DELAY);

player.on('timeupdate', (data) => {
  currentTime = data.seconds;
  saveCurrentTime();
});