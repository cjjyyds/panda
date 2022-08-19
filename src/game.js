import data from './data'

class Game extends Phaser.Scene {

    constructor() {
        super({key: 'game', active: false});
    }

    currentLevel = 1

    levels = [
        
        [
            {xi: 0.9, yi: -0.1, x: 0.9, y: 0.6, type: 'normal'},
            {xi: 0.8, yi: -0.1, x: 0.8, y: 0.7, type: 'normal'},
            {xi: 0.9, yi: -0.1, x: 0.9, y: 0.8, type: 'normal'},
            {xi: 0.1, yi: -0.1, x: 0.1, y: 0.6, type: 'normal'},
            {xi: 0.2, yi: -0.1, x: 0.2, y: 0.7, type: 'normal'},
            {xi: 0.1, yi: -0.1, x: 0.1, y: 0.8, type: 'normal'},
        ],
        [
            {xi: 0.9, yi: -0.1, x: 0.9, y: 0.6, type: 'normal'},
            {xi: -0.1, yi: -0.1, x: 0.9, y: 0.7, type: 'normal'},
            {xi: 0.9, yi: -0.1, x: 0.9, y: 0.8, type: 'normal'},
            {xi: 0.1, yi: -0.1, x: 0.1, y: 0.6, type: 'normal'},
            {xi: 1.1, yi: -0.1, x: 0.1, y: 0.7, type: 'normal'},
            {xi: 0.1, yi: -0.1, x: 0.1, y: 0.8, type: 'normal'},
        ],
        [
            {xi: 1.1, yi: -0.1, x: 0.1, y: 0.2, type: 'normal'},
            {xi: 0.1, yi: -0.1, x: 0.1, y: 0.3, type: 'normal'},
            {xi: 1.1, yi: -0.1, x: 0.1, y: 0.4, type: 'normal'},
            {xi: 0.1, yi: -0.1, x: 0.1, y: 0.5, type: 'normal'},
            {xi: 1.1, yi: -0.1, x: 0.1, y: 0.6, type: 'normal'},
            {xi: 0.1, yi: -0.1, x: 0.1, y: 0.7, type: 'normal'},
            {xi: 1.1, yi: -0.1, x: 0.1, y: 0.8, type: 'normal'},
        ],
        [
            {xi: 1.1, yi: -0.1, x: 0.1, y: 0.2, type: 'normal'},
            {xi: 0.1, yi: -0.1, x: 0.1, y: 0.3, type: 'normal'},
            {xi: 1.1, yi: -0.1, x: 0.1, y: 0.4, type: 'normal'},
            {xi: 0.1, yi: -0.1, x: 0.1, y: 0.5, type: 'normal'},
            {xi: 1.1, yi: -0.1, x: 0.1, y: 0.6, type: 'normal'},
            {xi: 0.1, yi: -0.1, x: 0.1, y: 0.7, type: 'normal'},
            {xi: 1.1, yi: -0.1, x: 0.1, y: 0.8, type: 'normal'},
            {xi: 0.1, yi:  1.1, x: 0.9, y: 0.2, type: 'normal'},
            {xi: 1.1, yi:  1.1, x: 0.9, y: 0.3, type: 'normal'},
            {xi: 0.1, yi:  1.1, x: 0.9, y: 0.4, type: 'normal'},
            {xi: 1.1, yi:  1.1, x: 0.9, y: 0.5, type: 'normal'},
            {xi: 0.1, yi:  1.1, x: 0.9, y: 0.6, type: 'normal'},
            {xi: 1.1, yi:  1.1, x: 0.9, y: 0.7, type: 'normal'},
            {xi: 0.1, yi:  1.1, x: 0.9, y: 0.8, type: 'normal'},
        ],
        [
            {xi: 0.3, yi: -0.1, x: 0.3, y: 0.8, type: 'slow'},
            {xi: 0.5, yi: 1.1, x: 0.5,  y: 0.8, type: 'slow'},
            {xi: 0.7, yi: -0.1, x: 0.7, y: 0.8, type: 'slow'},
        ],
        [
            {xi: 0.5, yi: 1.1, x: 0.5,  y: 0.8, type: 'slow'},
            {xi: 0.5, yi: -0.1, x: 0.5,  y: 0.2, type: 'slow'},

            {xi: 1.1, yi: -0.1, x: 0.1, y: 0.3, type: 'normal'},
            {xi: 1.1, yi: -0.1, x: 0.2, y: 0.2, type: 'normal'},
            {xi: 1.1, yi: -0.1, x: 0.3, y: 0.1, type: 'normal'},



            {xi: 0.1, yi:  1.1, x: 0.7, y: 0.9, type: 'normal'},
            {xi: 0.1, yi:  1.1, x: 0.8, y: 0.8, type: 'normal'},
            {xi: 0.1, yi:  1.1, x: 0.9, y: 0.7, type: 'normal'},

        ],

        [
            {xi:  1.1, yi: 0.2, x: 0.2,  y: 0.2, type: 'slow'},
            {xi: -0.1, yi: 0.3, x: 0.8,  y: 0.3, type: 'slow'},
            {xi:  1.1, yi: 0.4, x: 0.2,  y: 0.4, type: 'slow'},
            {xi: -0.1, yi: 0.5, x: 0.8,  y: 0.5, type: 'slow'},
            {xi:  1.1, yi: 0.6, x: 0.2,  y: 0.6, type: 'slow'},
            {xi: -0.1, yi: 0.7, x: 0.8,  y: 0.7, type: 'slow'},
            {xi:  1.1, yi: 0.8, x: 0.2,  y: 0.8, type: 'slow'},

        ],

        [
            {xi: -0.1, yi: 0.2, x: 0.8,  y: 0.2, type: 'fast'},
            {xi:  1.1, yi: 0.3, x: 0.2,  y: 0.3, type: 'fast'},
            {xi: -0.1, yi: 0.4, x: 0.8,  y: 0.4, type: 'fast'},
            {xi:  1.1, yi: 0.5, x: 0.2,  y: 0.5, type: 'fast'},
            {xi: -0.1, yi: 0.6, x: 0.8,  y: 0.6, type: 'fast'},
            {xi:  1.1, yi: 0.7, x: 0.2,  y: 0.7, type: 'fast'},
            {xi: -0.1, yi: 0.8, x: 0.8,  y: 0.8, type: 'fast'},

        ],

        [
            {xi: -0.2, yi: 0.25-0.1, x: 0.8,  y: 0.25, type: 'fast'},
            {xi:  1.2, yi: 0.35-0.1, x: 0.2,  y: 0.35, type: 'slow'},
            {xi: -0.2, yi: 0.45-0.1, x: 0.8,  y: 0.45, type: 'normal'},
            {xi:  1.2, yi: 0.55-0.1, x: 0.2,  y: 0.55, type: 'fast'},
            {xi: -0.2, yi: 0.65-0.1, x: 0.8,  y: 0.65, type: 'slow'},
            {xi:  1.2, yi: 0.75-0.1, x: 0.2,  y: 0.75, type: 'normal'},

        ],

        [
            {xi: 1.5, yi: 1.5, x: 0.2,  y: 0.3, type: 'block'},

        ],

        [
            {xi: -0.5, yi: -0.5, x: 0.8,  y: 0.7, type: 'block'},
            {xi:  1.1, yi: 1.1, x: 0.1,  y: 0.3, type: 'normal'},
            {xi:  1.1, yi: 1.1, x: 0.2,  y: 0.2, type: 'normal'},
            {xi:  1.1, yi: 1.1, x: 0.3,  y: 0.1, type: 'normal'},

        ],

        [
            {xi: 0.5, yi: -0.5, x: 0.2,  y: 0.7, type: 'block'},
            {xi: 0.5, yi: -0.5, x: 0.8,  y: 0.7, type: 'block'},

            {xi: -1.1, yi: 0.8, x: 0.05,  y: 0.1, type: 'normal'},
            {xi: -1.1, yi: 0.8, x: 0.20,  y: 0.1, type: 'normal'},
            {xi: -1.1, yi: 0.8, x: 0.35,  y: 0.1, type: 'normal'},
            {xi: -1.1, yi: 0.8, x: 0.50,  y: 0.1, type: 'normal'},
            {xi: -1.1, yi: 0.8, x: 0.65,  y: 0.1, type: 'normal'},
            {xi: -1.1, yi: 0.8, x: 0.80,  y: 0.1, type: 'normal'},
            {xi: -1.1, yi: 0.8, x: 0.95,  y: 0.1, type: 'normal'},

        ],

        [
            {xi: 0.5, yi: -0.1, x: 0.1,  y: 0.9, type: 'up'},
            {xi: 0.5, yi: -0.1, x: 0.2,  y: 0.9, type: 'up'},
            {xi: 0.5, yi: -0.1, x: 0.3,  y: 0.9, type: 'up'},
            {xi: 0.5, yi: -0.1, x: 0.4,  y: 0.9, type: 'up'},
            {xi: 0.5, yi: -0.1, x: 0.6,  y: 0.9, type: 'up'},
            {xi: 0.5, yi: -0.1, x: 0.7,  y: 0.9, type: 'up'},
            {xi: 0.5, yi: -0.1, x: 0.8,  y: 0.9, type: 'up'},
            {xi: 0.5, yi: -0.1, x: 0.9,  y: 0.9, type: 'up'},

            {xi: 0.5, yi:  1.1, x: 0.1+0.05,  y: 0.1, type: 'down'},
            {xi: 0.5, yi:  1.1, x: 0.2+0.05,  y: 0.1, type: 'down'},
            {xi: 0.5, yi:  1.1, x: 0.3+0.05,  y: 0.1, type: 'down'},
            {xi: 0.5, yi:  1.1, x: 0.4+0.05,  y: 0.1, type: 'down'},
            {xi: 0.5, yi:  1.1, x: 0.6-0.05,  y: 0.1, type: 'down'},
            {xi: 0.5, yi:  1.1, x: 0.7-0.05,  y: 0.1, type: 'down'},
            {xi: 0.5, yi:  1.1, x: 0.8-0.05,  y: 0.1, type: 'down'},
            {xi: 0.5, yi:  1.1, x: 0.9-0.05,  y: 0.1, type: 'down'},

        ],

        [
            {xi: -0.1, yi: -0.1, x: 0.55,  y: 0.95, type: 'up'},
            {xi: -0.1, yi: -0.1, x: 0.60,  y: 0.90, type: 'up'},
            {xi: -0.1, yi: -0.1, x: 0.65,  y: 0.85, type: 'up'},
            {xi: -0.1, yi: -0.1, x: 0.70,  y: 0.80, type: 'up'},
            {xi: -0.1, yi: -0.1, x: 0.75,  y: 0.75, type: 'up'},
            {xi: -0.1, yi: -0.1, x: 0.80,  y: 0.70, type: 'up'},
            {xi: -0.1, yi: -0.1, x: 0.85,  y: 0.65, type: 'up'},
            {xi: -0.1, yi: -0.1, x: 0.90,  y: 0.60, type: 'up'},
            {xi: -0.1, yi: -0.1, x: 0.95,  y: 0.55, type: 'up'},

            {xi: 1.1, yi: 1.1, x: 1-0.55,  y: 1-0.95, type: 'down'},
            {xi: 1.1, yi: 1.1, x: 1-0.60,  y: 1-0.90, type: 'down'},
            {xi: 1.1, yi: 1.1, x: 1-0.65,  y: 1-0.85, type: 'down'},
            {xi: 1.1, yi: 1.1, x: 1-0.70,  y: 1-0.80, type: 'down'},
            {xi: 1.1, yi: 1.1, x: 1-0.75,  y: 1-0.75, type: 'down'},
            {xi: 1.1, yi: 1.1, x: 1-0.80,  y: 1-0.70, type: 'down'},
            {xi: 1.1, yi: 1.1, x: 1-0.85,  y: 1-0.65, type: 'down'},
            {xi: 1.1, yi: 1.1, x: 1-0.90,  y: 1-0.60, type: 'down'},
            {xi: 1.1, yi: 1.1, x: 1-0.95,  y: 1-0.55, type: 'down'},

            {xi: -0.1, yi: -0.1, x: 0.9,  y: 0.1, type: 'slow'},
            {xi: 1.1, yi: 1.1, x: 1-0.9,  y: 1-0.1, type: 'slow'},

        ],

        [
            {xi: 1.1, yi: -0.1, x: 0.05,  y: 0.50+0.05, type: 'right'},
            {xi: 1.1, yi: -0.1, x: 0.10,  y: 0.50+0.10, type: 'right'},
            {xi: 1.1, yi: -0.1, x: 0.15,  y: 0.50+0.15, type: 'right'},
            {xi: 1.1, yi: -0.1, x: 0.20,  y: 0.50+0.20, type: 'right'},
            {xi: 1.1, yi: -0.1, x: 0.25,  y: 0.50+0.25, type: 'right'},
            {xi: 1.1, yi: -0.1, x: 0.30,  y: 0.50+0.30, type: 'right'},
            {xi: 1.1, yi: -0.1, x: 0.35,  y: 0.50+0.35, type: 'right'},
            {xi: 1.1, yi: -0.1, x: 0.40,  y: 0.50+0.40, type: 'right'},
            {xi: 1.1, yi: -0.1, x: 0.45,  y: 0.50+0.45, type: 'right'},

            {xi: -0.1, yi: 1.1, x: 1-0.05,  y: 0.50-0.05, type: 'left'},
            {xi: -0.1, yi: 1.1, x: 1-0.10,  y: 0.50-0.10, type: 'left'},
            {xi: -0.1, yi: 1.1, x: 1-0.15,  y: 0.50-0.15, type: 'left'},
            {xi: -0.1, yi: 1.1, x: 1-0.20,  y: 0.50-0.20, type: 'left'},
            {xi: -0.1, yi: 1.1, x: 1-0.25,  y: 0.50-0.25, type: 'left'},
            {xi: -0.1, yi: 1.1, x: 1-0.30,  y: 0.50-0.30, type: 'left'},
            {xi: -0.1, yi: 1.1, x: 1-0.35,  y: 0.50-0.35, type: 'left'},
            {xi: -0.1, yi: 1.1, x: 1-0.40,  y: 0.50-0.40, type: 'left'},
            {xi: -0.1, yi: 1.1, x: 1-0.45,  y: 0.50-0.45, type: 'left'},
            
            {xi:  1.1, yi:  1.1, x: 0.1,  y: 0.1, type: 'slow'},
            {xi: -0.1, yi: -0.1, x: 0.9,  y: 0.9, type: 'slow'},

        ],

        [
            {xi:  0.5, yi: -0.1, x: 0.5,  y: 0.95, type: 'up'},
            {xi:  0.5, yi: 1.1,  x: 0.5,  y: 0.05, type: 'down'},
            {xi:  1.1, yi: 0.5 , x: 0.05,  y: 0.50, type: 'right'},
            {xi: -0.1, yi: 0.5,  x: 0.95,  y: 0.50, type: 'left'},
            
        ],

        [
            {xi: 0.5, yi: 0.5,  x: 0.95,  y: 0.9, type: 'normal'},
            {xi: 0.5, yi: 0.5,  x: 0.95,  y: 0.8, type: 'normal'},
            {xi: 0.5, yi: 0.5,  x: 0.90,  y: 0.9, type: 'normal'},
            {xi: 0.5, yi: 0.5,  x: 0.90,  y: 0.8, type: 'normal'},

            {xi: 0.5, yi: 0.5,  x: 0.1,  y: 0.2, type: 'slow'},
            {xi: 0.5, yi: 0.5,  x: 0.1,  y: 0.4, type: 'slow'},
            {xi: 0.5, yi: 0.5,  x: 0.2,  y: 0.2, type: 'slow'},

            {xi: 0.5, yi: 0.5,  x: 0.95,  y: 0.1, type: 'fast'},
            {xi: 0.5, yi: 0.5,  x: 0.95,  y: 0.2, type: 'fast'},
            {xi: 0.5, yi: 0.5,  x: 0.9,  y: 0.1, type: 'fast'},

            {xi: 0.5, yi: 0.5,  x: 0,  y: 1, type: 'block'},
            
        ],

        [
            {xi: 0.5, yi: 1.5, x: 0.1,  y: 0.1, type: 'block'},
            {xi: 0.5, yi: 1.5, x: 0.9,  y: 0.1, type: 'block'},
            {xi: 0.5, yi: -0.5, x: 0.1,  y: 0.9, type: 'block'},
            {xi: 0.5, yi: -0.5, x: 0.9,  y: 0.9, type: 'block'},

        ],

        [
            
            {xi: 0.5, yi: 0.5,  x: 0.1,  y: 0.1, type: 'normal'},
            {xi: 0.5, yi: 0.5,  x: 0.2,  y: 0.1, type: 'normal'},
            {xi: 0.5, yi: 0.5,  x: 0.8,  y: 0.1, type: 'normal'},
            {xi: 0.5, yi: 0.5,  x: 0.9,  y: 0.1, type: 'normal'},

            {xi: 0.5, yi: 0.5,  x: 0.1,  y: 0.2, type: 'normal'},
            {xi: 0.5, yi: 0.5,  x: 0.2,  y: 0.2, type: 'normal'},
            {xi: 0.5, yi: 0.5,  x: 0.8,  y: 0.2, type: 'normal'},
            {xi: 0.5, yi: 0.5,  x: 0.9,  y: 0.2, type: 'normal'},

            {xi: 0.5, yi: 0.5,  x: 0.1,  y: 0.9, type: 'normal'},
            {xi: 0.5, yi: 0.5,  x: 0.2,  y: 0.9, type: 'normal'},
            {xi: 0.5, yi: 0.5,  x: 0.8,  y: 0.9, type: 'normal'},
            {xi: 0.5, yi: 0.5,  x: 0.9,  y: 0.9, type: 'normal'},

            {xi: 0.5, yi: 0.5,  x: 0.1,  y: 0.8, type: 'normal'},
            {xi: 0.5, yi: 0.5,  x: 0.2,  y: 0.8, type: 'normal'},
            {xi: 0.5, yi: 0.5,  x: 0.8,  y: 0.8, type: 'normal'},
            {xi: 0.5, yi: 0.5,  x: 0.9,  y: 0.8, type: 'normal'},



            
            
        ],

        [
            
            {xi: -0.5, yi: -0.5,  x: 0,  y: 0, type: 'block'},
            {xi: -0.5, yi: 1.5,  x: 0,  y: 1, type: 'block'},
            {xi: 1.5, yi: 0.5,  x: 1,  y: 0, type: 'block'},
            {xi: 1.5, yi: 1.5,  x: 1,  y: 1, type: 'block'},
            {xi: 0.5, yi: -0.5,  x: 0.5,  y: 0, type: 'block'},
            {xi: 0.5, yi: 1.5,  x: 0.5,  y: 1, type: 'block'},
            
        ],



        
    ]
    event = new Phaser.Events.EventEmitter();
    _state = 'preload';
    get state() {return this._state}
    set state(state) {
        this._state = state;
        this.event.emit(state);
    }

    spritesConfig = {
        
        heart: {group: 'bullet', texture: 'heart', health: 1, atk: 100, speed: 800, target: 'pointer', mass: 0.1, maxV: 800},

        normal: {group: 'virus', texture: 'virus', tint: 0xffa2ac, health: 200, atk: 1, speed: 100, target: 'player'},
        slow: {tint: 0x8fc5fb, health: 400, speed: 50, mass: 2, scale: 2, maxV: 50},
        fast: {tint: 0xf3a833, health: 200, speed: 100, mass: 0.3, bounce: 1, scale: 0.75, maxV: 150},

        up:    {tint: 0x008b8b, health: 100, scale: 0.5, mass: 0.1, vy: -300, vx:    0, bounce: 1.2, maxV: 300},
        down:  {tint: 0x9de64e, health: 100, scale: 0.5, mass: 0.1, vy:  300, vx:    0, bounce: 1.2, maxV: 300},
        left:  {tint: 0xe6dd4e, health: 100, scale: 0.5, mass: 0.1, vy:   0,  vx: -300, bounce: 1.2, maxV: 300},
        right: {tint: 0xec273f, health: 100, scale: 0.5, mass: 0.1, vy:   0,  vx:  300, bounce: 1.2, maxV: 300},

        block: {tint: 0x8c78a5, health: 2000, speed: 20, mass: 200, scale: 5, bounce: 0.01, maxV: 20, collideWorld: false},


        
    }

    preload() {

        this.load.setBaseURL('../')
        this.load.spritesheet('panda', 'img/panda.png', {frameWidth: 22, frameHeight: 22})
        this.load.image('virus', 'img/virus.png');
        this.load.image('heart', 'img/heart.png');
        this.load.image('reload', 'img/reload.png');
        
        this.load.audio('e_oh', 'sound/e_oh.wav');
        this.load.audio('shoot', 'sound/shoot.wav')
        this.load.audio('hit', 'sound/hit.wav')
        this.load.audio('pop', 'sound/pop.wav')
        this.load.audio('whoosh', 'sound/whoosh.wav')
        this.load.audio('exx', 'sound/exx.mp3');
        


    }

    debug() {

        let {h} = data;
        
        let debugTexts = [];
        this.debug = this.add.text(10, h-10, 'debug', {color: 'black',})
            .setOrigin(0, 1)
            .setAlpha(0);

    }

    title() {

        let {cx, cy, w, h, transition, tweenConfig} = data;

        let box = this.title.box = this.add.container();

        let title = '守卫熊猫第1关';
        let titleWidth = 300;
        let strWidth = titleWidth / title.length;

        for (let i = 0; i<title.length; i++) {

            let str = title[i];
            let x = -titleWidth/2 + strWidth/2 + strWidth * i;
            let color = i % 2 ? 'black' : 'white'
            let shadow = i % 2 ? 'white' : 'black';
            let fontSize = 50
            let font = `中文像素体`
            let scale = i % 2 ? 0.9 : 1.1
            let scaleTo = i % 2 ? 1.1 : 0.9;

            if (str == '1') {
                color = 'red';
                fontSize = 35;
            }
            
            let text = this.add.text(x, 0, str);
            text.setFontFamily(font)
            text.setFontSize(fontSize);
            text.setOrigin(0.5, 0.5);
            text.setPadding(5)
            text.setColor(color)
            text.setShadow(3, 3, shadow, 3, true, true)
            text.setScale(scale);
            box.add(text);

            this.tweens.add({
                targets: text,
                yoyo: true,
                repeat: -1,
                scale: scaleTo,
                ...tweenConfig
            })

            if (str == '1') {
                this.event.on('level', (lv) => {
                    text.text = lv
                })
            }



        }

        let {x, y, width, height} = box.getBounds();
        let rotation = -Math.PI/16;
        let xi = 180;
        let yi = h+height;
        let xf = xi
        let yf = 75;
        box.setRotation(rotation)
        box.setPosition(xf, yf)


        


        this.event.on('game', () => {

            let lv = box.list[5];
            lv.text = this.level.value;
            
            this.tweens.add({
                targets: box,
                x: xf,
                y: yf,
                scale: 1,
                rotation,
                ...tweenConfig,
            })

        })

        this.event.on('dead', () => {
            
            this.tweens.add({
                targets: box,
                x: cx,
                y: h * 0.35,
                scale: 1.5,
                rotation: 0,
                ...tweenConfig,
            })

        })

        this.event.on('end', () => {
            this.tweens.add({
                targets: box,
                y: h + 100,
                rotation: 0,
                ...tweenConfig
            })
        })



        return box;


        



    }

    end() {

        let {cx, cy, w, h, transition, tweenConfig} = data;

        let configs = [
            {str: '守', x: 0.2, y: 0.75, yi: 0},
            {str: '护', x: 0.4, y: 0.25, xi: 1},
            {str: '成', x: 0.6, y: 0.25, yi: 1},
            {str: '功', x: 0.8, y: 0.75, xi: 0},
            
        ]
        
        for (let i = 0; i < configs.length; i++) {

            let config = configs[i];
            let {str, x, y, xi ,yi} = config;

            let r = i % 2 ? 200 : 100;

            x *= w;
            y *= h;
            if      (xi === 0) {xi = -r * 2}
            else if (xi === 1) {xi = w + r * 2}
            else               {xi = x}
            if      (yi === 0) {yi = -r * 2}
            else if (yi === 1) {yi = h + r * 2}
            else               {yi = y}

            let color = i % 2 ? 'black': 'white';
            let circleColor1 = i % 2 ? 0x000000 : 0xffffff ;
            let circleColor2 = i % 2 ? 0xffffff : 0x000000;
            let fontSize = r;
            let font = `中文像素体`

            let circle2 = this.add.circle(xi+r*0.1, yi+r*0.1, r, circleColor1)
            let circle1 = this.add.circle(xi, yi, r, circleColor2)
            
            
            let text = this.add.text(xi, yi, str);
            text.setFontFamily(font)
            text.setFontSize(fontSize);
            text.setOrigin(0.5, 0.5);
            text.setColor(color)

            text.scale = 0;
            circle1.scale = 0;
            circle2.scale = 0;

            let rotation = i % 2 ? -Math.PI /16 : Math.PI / 16;

            text.setRotation(rotation);
            this.tweens.add({
                targets: text,
                rotation: -rotation,
                yoyo: true,
                repeat: -1,
                ...tweenConfig,
                duration: transition * 2,
            })

            this.event.on('end', () => {

                

                this.tweens.add({
                    targets: [text, circle1],
                    x,
                    y,
                    scale: 1,
                    ...tweenConfig,
                    delay: i * transition,
                })
    
                this.tweens.add({
                    targets: circle2,
                    scale: 1,
                    x: x+r*0.1,
                    y: y+r*0.1,
                    ...tweenConfig,
                    delay: i * transition,
                })
                
            })

            this.event.on('game', () => {

                this.tweens.add({
                    targets: [text, circle1],
                    x: xi,
                    y: yi,
                    scale: 0,
                    ...tweenConfig,
                })
    
                this.tweens.add({
                    targets: circle2,
                    scale: 0,
                    x: xi+r*0.1,
                    y: yi+r*0.1,
                    ...tweenConfig,
                })
                
            })

        }

        let resetCircle = this.add.circle(w, 0, 115, 0xffffff)
            .setScale(0);

        let reset = this.add.image(0, 0, 'reload')
            .setOrigin(0.5, 0.5)
            .setScale(3);

        this.tweens.add({
            targets: reset,
            rotation: Math.PI*2,
            
            ...tweenConfig,
            loop: -1,
            loopDelay: transition * 4,
            duration: transition * 4,
        })

        let width = reset.displayWidth;
        let height = reset.displayHeight;

        reset.setPosition(w+width, -height)
        reset.setInteractive();

        this.input.on('gameobjectover', (pointer, gameObject) => {
                this.tweens.add({
                    targets: resetCircle,
                    scale: 1,
                    ...tweenConfig,
                    duration: transition/3,
                })
        })
        this.input.on('gameobjectout', (pointer, gameObject) => {
                this.tweens.add({
                    targets: resetCircle,
                    scale: 0,
                    ...tweenConfig,
                    duration: transition/3,
                })
        })

        reset.on('pointerdown', () => {
            this.state = 'reset';
        })




        this.event.on('game', () => {

            this.tweens.add({
                targets: reset,
                x: w+width,
                y: -height,
                ...tweenConfig,
            })

        })


        this.event.on('end', () => {


            this.tweens.add({
                delay: transition * 5,
                targets: reset,
                x: w-15-width/2,
                y: 15+height/2,
                ...tweenConfig,
            })

            this.time.addEvent({
                repeat: 4,
                delay: transition,
                callback: () => {
                    let whoosh = this.sound.add('whoosh');
                    whoosh.play()
                }
            })

            
        })

        



    }

    life() {

        let {w, h, cx, cy, tweenConfig, transition} = data;

        let life = this.life.value = 5;
        let hearts = this.life.hearts = [];

        for (let i = 0; i < life; i++) {

            let heart = this.add.image(0, 0, 'panda', i)
            let scale = 2;
            let size = heart.width * scale;

            let x = w*0.45 + w*0.05*i;

            heart.setPosition(x, h+size);
            heart.setAlpha(0);
            heart.setScale(1.5);
            heart.setOrigin(0.5)
            hearts.push(heart);

        }

        this.event.on('game', () => {

            this.life.value = 5;

            let xy = [
                {x: 0.849, y: 0.921},
                {x: 0.932, y: 0.861},
                {x: 0.786, y: 0.943},
                {x: 0.877, y: 0.805},
                {x: 0.963, y: 0.757},
            ]

            for (let i = 0; i < hearts.length; i++) {

                let heart = hearts[i];

                let {x, y} = xy[i];
                
                x *= w;
                y *= h;

                this.add.tween({
                    targets: heart,
                    x,
                    y,
                    alpha: 1,
                    scale: 2,
                    delay: i * transition / 5,
                    ...tweenConfig,
                })

                this.time.addEvent({
                    delay: transition/2,
                    callback: () => heart.setFrame(i)
                })

            }

        })

        this.event.on('hit', () => {

            let life = this.life.value;

            life--;

            let heart = hearts[life];


            if (life >= 0) {

                this.add.tween({
                    targets: heart,
                    scaleX: 0,
                    yoyo: true,
                    ...tweenConfig,
                    duration: transition/2,
                    onComplete: () => {
                        heart.setFrame(life+5)
                    }
                })
                
                this.life.value = life;

                if (life == 0) {
                    this.state = 'dead';
                    this.time.addEvent({
                        delay: 1000,
                        callback: () => {
                            let exx = this.sound.add('exx');
                            exx.play();
                        }
                    })

                }

            }

            

        })

        this.event.on('dead', () => {

            for (let i = 0; i < hearts.length; i++) {

                let heart = hearts[i];

                this.add.tween({
                    targets: heart,
                    x: cx + w*0.05*(i-2),
                    y: h * 0.6,
                    alpha: 1,
                    scale: 2,
                    delay: i * transition / 5,
                    ...tweenConfig,
                })

            }

        })

        this.event.on('end', () => {

            for (let i = 0; i < hearts.length; i++) {

                let heart = hearts[i];

                this.add.tween({
                    targets: heart,
                    y: h+100,
                    delay: i * transition / 5,
                    ...tweenConfig,
                })

            }
        })


    }


    player() {

        let {cx, cy, w, h, tweenConfig, transition} = data;

        let p = this._player = this.physics.add.sprite(cx, -100, 'panda', 1)
            .setScale(0)
            .setOrigin(0.5);

        p.setCollideWorldBounds(true);

        this.up = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.left = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.down = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.right = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

        this.event.on('game', () => {

            p.setFrame(1);

            this.tweens.killTweensOf(p);

            this.add.tween({
                targets: p,
                x: cx,
                y: cy,
                scale: 3,
                alpha: 1,
                ...tweenConfig,
            })

        })

        this.event.on('hit', () => {

            this.tweens.killTweensOf(p);
            this.add.tween({
                targets: p,
                scaleX: 0,
                ...tweenConfig,
                duration: transition/2,
                onComplete: () => p.setFrame(Phaser.Math.Between(5, 9))
            })
            this.add.tween({
                targets: p,
                scaleX: 3,
                ...tweenConfig,
                delay: transition/2,
                duration: transition/2,
            })
            this.add.tween({
                targets: p,
                scaleX: 0,
                yoyo: true,
                ...tweenConfig,
                delay: transition,
                onYoyo: () => p.setFrame(1)
            })

        })

        this.event.on('dead', () => {

            this.add.tween({
                targets: p,
                x: cx,
                y: cy,
                scale: 0,
                alpha: 0,
                ...tweenConfig,
            })

        })

        this.event.on('end', () => {
            this.add.tween({
                targets: p,
                scale: 0,
                ...tweenConfig,
            })

            this.add.tween({
                delay: transition * 4,
                targets: p,
                x: w*0.45,
                y: h*0.8,
                scale: 6,
                alpha: 1,
                ...tweenConfig,
            })

            let frame = 1;

            this.add.tween({
                delay: transition * 5,
                targets: p,
                scaleX: 0,
                yoyo: true,
                repeat: -1,
                ...tweenConfig,
                onRepeat: () => {
                    frame++;
                    if (frame == 5) frame = 0;
                    p.setFrame(frame);
                }
            })




        })

        return p;

    }

    createSprite(config) {

        let {tweenConfig, cx, cy, transition} = data;

        let {x, y, xi, yi, group, texture, health, atk, speed, target, tint, life, bounce, scale, mass, vx, vy, maxV, collideWorld} = config;

        xi ??= x;
        yi ??= y;
        group ??= 'virus'
        texture ??= 'virus'
        health ??= 1;
        atk ??= 1;
        speed ??= 50;
        target ??= 'player'
        tint ??= 0xffffff
        life ??= -1;
        bounce ??= 0.2;
        scale ??= 1;
        mass ??= 1;

        let sprite = this.physics.add.sprite(xi, yi, texture)
        sprite.health = health;
        sprite.atk = atk;
        sprite.state = 'preload';

        switch(group) {
            case 'virus': 
                group = this.viruses;
                break;
            case 'bullet':
                group = this.bullets;
                break;
        }

        group.add(sprite);

        switch(target) {
            case 'player':
                target = {x: cx, y: cy};
                break;
            case 'pointer':
                target = this.input.activePointer
                break;
        }

        let angle = Phaser.Math.Angle.BetweenPoints({x,y}, target);
        vx ??= Math.cos(angle) * speed;
        vy ??= Math.sin(angle) * speed;
        maxV ??= 100;
        collideWorld ??= true;
        
        sprite.setTint(tint);
        sprite.setScale(scale);
        sprite.setMass(mass);
        sprite.setMaxVelocity(maxV, maxV)
        

        let start = () => {

                this.time.addEvent({
                    delay: group == this.viruses ? 1000 : 0,
                    callback: () => {
                        if (sprite && sprite.state == 'preload') {
                            
                            sprite.state = 'alive';
                            if (collideWorld) sprite.setCollideWorldBounds(true);

                            sprite.setBounce(bounce);
                            sprite.setVelocityX(vx);
                            sprite.setVelocityY(vy);

                        }

                    }
                })
        }

        if (x === xi && y === yi) {

            start();

        } else {

            this.tweens.add({
                targets: sprite,
                x,
                y,
                ...tweenConfig,
                onComplete: () => start()
            })

        }
        sprite.kill = () => {
            
            sprite.state = 'dying';

            this.add.tween({
                targets: sprite,
                alpha: 0,
                scale: 0,
                ...tweenConfig,
                onComplete: () => {
                    sprite.state = 'dead';
                    sprite.destroy();
                }
            })
        }

        if (life > 0) {

            this.time.addEvent({
                delay: life,
                callback: () => sprite.kill()
            })

        }


        

        return sprite;


    }

    bullet() {

        

        this.event.on('bullet', (player) => {

            if (this.state == 'game') {

                let shoot = this.sound.add('shoot');
                shoot.play();

                let config = this.spritesConfig.heart;
                let {x, y} = player;
    
                this.createSprite({
                    x, y,
                    ...config
                })

            }


        })

    }

    level() {

        this.event.on('level', (lv) => {

            

            let {viruses, levels} = this;
            let {w, h, tweenConfig, transition} = data;

            this.sound.play('whoosh');
    
            let level = levels[lv-1];
    
            this.level.value = lv;
    
            for (let i = 0; i < level.length; i++) {
    
                let virusConfig = level[i];
                let {xi, yi, x, y, type} = virusConfig;
    
                let config = this.spritesConfig[type];
        
                xi *= w;
                yi *= h;
                x *= w;
                y *= h;
    
                let virus = this.createSprite({
                    x, y,
                    xi, yi,
                    ...config
                })
                    .setRotation(-Math.PI/8)
                
                let scale_i = virus.scale * 0.9;
                let scale_f = virus.scale * 1.1;

                virus.setScale(scale_i)

        
                let yoyo = this.add.tween({
                    targets: virus,
                    rotation: +Math.PI/8,
                    scale: scale_f,
                    repeat: -1,
                    yoyo: true, 
                    ...tweenConfig,
                    duration: transition * 2,
                    onRepeat: () => {
                        if (virus.state == 'dead') yoyo.stop();
                    }
                })
    
    
    
            }
    
            let i = 0;
            let checkVirus = this.time.addEvent({
                loop: true,
                callback: () => {
                    if (this.viruses.children.size == 0) {
                        
                        checkVirus.remove();
                        this.bullets.children.iterate((bullet) => {
                            bullet.disableBody(true);
                            bullet.kill()
                        })

                        if (this.state == 'game') {

                            let nextLevel = this.levels[lv];

                            if (nextLevel) {
                                this.event.emit('level', lv+1)
                            } else {
                                this.state = 'end'
                            }
                        }

                        
                    }
                }
            })

        })

        let killAll = () => {
            let viruses = this.viruses.children
            viruses.iterate((virus) => {
                virus.kill();
            })
        }
        this.event.on('dead', () => {
            killAll();
        })



    }

    comment() {
        let {cx, cy, w, h, tweenConfig, transition} = data;
        let comment = this.add.text(cx, -100, '胜败乃兵家常事，大猫请重新来过', {
            fontFamily: '中文像素体',
            fontSize: 30,
            color: 'black',
            align: 'center',
        })
            .setOrigin(0.5)
            .setAlpha(0)
            .setScale(0)

        let rotate;

        this.event.on('game', () => {

            this.add.tween({
                targets: comment,
                y: -100,
                ...tweenConfig,
            })

        })
        
        this.event.on('dead', () => {

            comment.text = '- 胜败乃兵家常事 -\n- 还请大猫点击屏幕重新来过 -'
            
            if (rotate) {
                rotate.stop();
            }
            
            comment.alpha = 0;
            comment.scale = 0;
            comment.y = -100;
            

            this.tweens.add({
                targets: comment,
                y: h*0.8,
                alpha: 1,
                scale: 1,
                ...tweenConfig,
                onComplete: () => {
                    rotate = this.tweens.add({
                        targets: comment,
                        delay: transition,
                        scaleX: 0,
                        yoyo: true,
                        repeat: -1,
                        loopDelay: transition * 4,
                        ...tweenConfig,
                        duration: transition * 4,
                    })
                }
            })



        })
    }

    async create() {

        let viruses = this.viruses = this.physics.add.group();
        let bullets = this.bullets = this.physics.add.group();

        let {w, h, cx, cy, tweenConfig, transition} = data;

        this.debug();
        this.title();
        this.life();
        let player = this.player();
        this.comment();
        
        this.level();
        this.end();
        this.bullet();



        this.state = 'game';
        this.event.emit('level', 1);

        this.event.on('dead', () => {
            this.time.addEvent({
                delay: 2000,
                callback: () => {
                    this.input.once('pointerdown', () => {
                        this.state = 'game'
                        this.event.emit('level', 1)
                    })
                }
            })

        })

        this.input.on('pointerdown', (pointer) => {

            switch(this.state) {
                case 'reset':
                    this.state = 'game';
                    this.event.emit('level', 1)
                    break;
                case 'game':
                    this.event.emit('bullet', this._player, pointer);
                    break;
            }

        })

        
        this.physics.add.collider(viruses, viruses);

        this.physics.add.collider(bullets, viruses, (bullet, virus) => {

            virus.health -= bullet.atk;


            if (virus.health <= 0) {
                let pop = this.sound.add('pop');
                pop.play();
                virus.kill();
            } else {
                let hit = this.sound.add('hit')
                hit.play();
            }

            this.bullets.remove(bullet);
            bullet.kill();
            

        })

        this.physics.add.overlap(player, viruses, (player, virus) => {

            if (virus.state == 'alive') {

                
                
                this.event.emit('hit')
                virus.disableBody(true);
                virus.kill();

                if (this.state == 'game') {
                    let e_oh = this.sound.add('e_oh');
                    e_oh.play();
                }

            }

        })
        

    }

    async update(now, delta) {

        let {w, h} = data;

        let debugTexts = `bullet hearts: ${this.bullets.children.size}\n`+ 
                         `virus: ${this.viruses.children.size}\n` +
                         `state: ${this.state}\n` +
                         `life:  ${this.life.value}`;
        this.debug.text = debugTexts;

        return;

        if (this._player) {

            let up = this.up.isDown;
            let down = this.down.isDown;
            let left = this.left.isDown;
            let right = this.right.isDown;
            let p = this._player;

            let vx = 0;
            let vy = 0;
            let d = 300;
            let r = Math.sqrt(d*d/2)

            if (up && !down && !left && !right) {vy -= d}
            else if (!up && down && !left && !right) {vy = d}
            else if (!up && !down && left && !right) {vx = -d}
            else if (!up && !down && !left && right) {vx = d}
            else if (up && !down && left && !right) {vy = -r; vx = -r}
            else if (up && !down && !left && right) {vy = -r; vx = r}
            else if (!up && down && left && !right) {vy = r; vx = -r}
            else if (!up && down && !left && right) {vy = r; vx = r}

            p.setVelocityX(vx);
            p.setVelocityY(vy);

        }

        if (this.hearts) {

            

            let {hearts} = this;

            hearts.children.iterate(heart => {
                if (!heart) return;
                let {x, y, width, height} = heart;
                if (x > w + width || x < -width || y > h + height || y < -height) {
                    hearts.remove(heart);
                    heart.disableBody(true);
                    heart.destroy();
                }
            })
        }

        if (this.viruses) {

            

        }
        
   
    }
    
}

export default Game;



