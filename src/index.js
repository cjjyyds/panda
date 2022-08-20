import './reset.css';
import './style.css';
import data from './data';
import Phaser from 'phaser'
import Title from './title'
import Game from './game'
require('./js')

let resize = () => {
  let {w, h} = data;
  
  let ar = w / h;
  let targetAR = 16 / 9;

  let canvas = document.querySelector('canvas');

  if (ar < targetAR) {
    canvas.style.width = '100%';
    canvas.style.height = '';
  } else {
    canvas.style.width = '';
    canvas.style.height = '100%';
  }
};

window.onload = async () => {

  let {bgc} = data;

  let f = new FontFace('中文像素体', `url(../font/ipix.ttf)`);
  let loaded = await f.load();
  await document.fonts.add(loaded);

  new Phaser.Game({
    type: Phaser.AUTO,
    width: 960,
    height: 540,
    physics: {
        default: 'arcade',
    },
    scene: [Title, Game],
    scale: {
      mode: Phaser.Scale.NONE
    },
    pixelArt: true,
    // roundPixels: true,
    backgroundColor: bgc
  })

  resize();

}

window.addEventListener('resize', () => {
  resize();
})

























