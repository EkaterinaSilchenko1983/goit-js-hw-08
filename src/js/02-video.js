import throttle from 'lodash.throttle';
import Player from '@vimeo/player';
console.log(Player);

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCALSTORAGE_KEY = 'videoplayer-current-time';

const onPlay = function (data) {
  const currentTime = localStorage.setItem(LOCALSTORAGE_KEY, data.seconds);

  // data is an object containing properties specific to that event
};
player.on('timeupdate', throttle(onPlay, 1000));

player
  .setCurrentTime(localStorage.getItem(LOCALSTORAGE_KEY))
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
