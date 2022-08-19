import data from './data'

class Title extends Phaser.Scene {

    constructor() {
        super('title');
    }

    async preload() {

        this.load.setBaseURL('../')
        this.load.spritesheet('panda', 'img/panda.png', {frameWidth: 22, frameHeight: 22})
        this.load.audio('whoosh', 'sound/whoosh.wav');

    }

    title() {

        let {cx, cy, w, h, transition} = data;
        
        let texts = ([
            {str: '守', x: 0.30, y: 0.35, color: 'black', shadow: 'white'},
            {str: '卫', x: 0.40, y: 0.35, color: 'white', shadow: 'black'},
            {str: '熊', x: 0.50, y: 0.35, color: 'black', shadow: 'white'},
            {str: '猫', x: 0.60, y: 0.35, color: 'white', shadow: 'black'},
            {str: '！', x: 0.70, y: 0.35, color: 'black', shadow: 'white'},
        ]).map((item, i, arr) => {

            let {str, x, y, dx, rotation, fontSize, color, shadow} = item;

            y ??= 0.45;
            rotation ??= Math.PI/16 * (i % 2 ? -1 : 1)
            fontSize ??= 100;
            
            y *= h;
            x *= w;

            let text = this.add.text(x, y, str);
            text.setFontFamily('中文像素体')
            text.setFontSize(fontSize);
            text.setOrigin(0.5, 0.5);
            text.setPadding(5)
            text.setColor(color)
            text.setShadow(3, 3, shadow, 3, true, true)
            text.rotation = rotation;
            text.scale = 0.9;
            
            this.tweens.add({
                targets: text,
                rotation: -rotation,
                scale: 1.1,
                yoyo: true,
                repeat: -1,
                ease: 'Quad.easeInOut',
                duration: transition,
                delay: i * 100,
            })

            return text



        })

        return texts;

    }

    panda() {

        let {w, h, transition} = data;

        let pandaConfig = [
            [0,   25,   25, 44, 44, -Math.PI/4],
            [2,   25, h-25, 44, -44, -Math.PI*3/4],
            [3, w-25,   25, -44, 44, Math.PI/4],
            [4, w-25, h-25, -44, -44, Math.PI*3/4]
        ]

        let pandas = [];

        for (let i = 0; i < pandaConfig.length; i++) {
            let config = pandaConfig[i];
            let [frame, x, y, offsetX, offsetY, rotation] = config;

            x+= offsetX;
            y+= offsetY
            
            let panda = this.add.image(x, y, 'panda', frame)
                .setScale(4)
                .setOrigin(0.5)
                .setRotation(rotation - Math.PI/8)

                this.tweens.add({
                    targets: panda,
                    rotation: rotation + Math.PI/8,
                    yoyo: true,
                    repeat: -1,
                    ease: 'Quad.easeInOut',
                    duration: transition * 2,
                    delay: i * 100,
                })

            pandas.push(panda);
            
        }

        return pandas;

    }

    bg() {

        let {w, h, cx, cy, tweenConfig, transition} = data;

        let box = this.add.container();

        let minWidth = 44 *2;

        let count = Math.floor(w / minWidth);

        let width = w / count;

        for (let i = 0; i < count; i++) {
            for (let j = 0; j < count; j++) {
                let x = width * (i+0.5);
                let y = width * (j+0.5);
                let frame = Phaser.Math.Between(0, 9);
                let image = this.add.image(x, y, 'panda', frame)
                    .setOrigin(0.5)
                    .setScale(2)
                    .setAlpha(0.1)
                box.add(image);
            }
        }

        // let bounds = box.getBounds();
        // console.log(bounds);
        // let offset = (bounds.width + bounds.x) / 2
        
        box.iterate((child) => {
            child.x -= cx;
            child.y -= cx;
            let angle = Phaser.Math.Angle.Between(0, 0, child.x, child.y);
            child.setRotation(angle+Math.PI/2);
        })

        box.setPosition(cx, cy);
        this.add.tween({
            targets: box,
            rotation: Math.PI * 2,
            loop: -1,
            duration: 1000*60*15,
        })
        // box.setScale(0.5);

    }

    async create() {

        let {w, h, cx, cy, transition, mobile} = data;

        let title = this.title();

        let panda = this.panda();

        this.bg();

        let comment = this.add.text(cx, h*0.8, '- 点击屏幕开始 -')
        
        comment.setFontFamily('中文像素体')
        comment.setFontSize(30);
        comment.setOrigin(0.5, 0.5);
        comment.setColor('#000000')

        let commentTween = this.add.tween({
            targets: comment,
            alpha: 0,
            repeat: -1,
            yoyo: true,
            ease: 'Quad.easeInOut',
            duration: transition * 4,
        })

        this.input.once('pointerdown', () => {


            for (let i = 0; i < title.length; i++) {

                let y = i % 2 ? -100 : h + 100;
                this.add.tween({
                    targets: title[i],
                    y,
                    ease: 'Quad.easeIn',
                    delay: i * transition/2,
                    duration: transition,
                })

            }

            let pandaTween = [
                [w+100,h+100],
                [w+100,-100],
                [-100,h+100],
                [-100,-100]
            ]
            for (let i = 0 ; i < pandaTween.length; i++) {
                let [x,y] = pandaTween[i];
                this.add.tween({
                    targets: panda[i],
                    x,
                    y,
                    ease: 'Quad.easeIn',
                    delay: i * transition/2,
                    duration: transition,
                    onStart: () => {
                        this.sound.play('whoosh')
                    }
                })
            }
            
            commentTween.stop();

            this.add.tween({
                targets: comment,
                alpha: 0,
                ease: 'Quad.easeIn',
                duration: transition,
            })

            this.time.addEvent({
                delay: transition/2 * title.length,
                callback: () => {
                    this.scene.launch('game');
                }
            })



        })
        

        

    }

    async update(now, delta) {

   
    }

}

export default Title;



