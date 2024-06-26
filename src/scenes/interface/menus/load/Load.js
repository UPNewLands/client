import BaseScene from '@scenes/base/BaseScene'
import PathEngine from '@engine/world/penguin/pathfinding/PathEngine'
import { Interactive } from '@components/components'


/* START OF COMPILED CODE */

export default class Load extends BaseScene {

    constructor() {
        super("Load");

        /** @type {Phaser.GameObjects.Text} */
        this.text;
        /** @type {Phaser.GameObjects.Container} */
        this.bar;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.progress;
        /** @type {Phaser.GameObjects.Image} */
        this.spinner;
        /** @type {Phaser.GameObjects.Sprite} */
        this.loading;


        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    preload() {

        this.load.pack("load-pack", "assets/media/interface/menus/load/load-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        const bg = this.add.image(0, 0, "load", "bg");
        bg.setOrigin(0, 0);

        // rectangle_1
        const rectangle_1 = this.add.rectangle(760, 480, 128, 128);
        rectangle_1.scaleX = 11.909224665264004;
        rectangle_1.scaleY = 7.484623172550488;
        rectangle_1.isFilled = true;
        rectangle_1.fillColor = 1270724;

        // text
        const text = this.add.text(760, 520, "", {});
        text.setOrigin(0.5, 0);
        text.setStyle({ "align": "center", "fixedWidth":800,"fixedHeight":40,"fontFamily": "Burbank Small", "fontSize": "32px" });

        // bar
        const bar = this.add.container(760, 480);
        bar.visible = false;

        // outline
        const outline = this.add.rectangle(0, 0, 200, 40);
        outline.isStroked = true;
        outline.strokeColor = 26265;
        outline.lineWidth = 4;
        bar.add(outline);

        // progress
        const progress = this.add.rectangle(-90, 0, 180, 20);
        progress.scaleX = 0;
        progress.setOrigin(0, 0.5);
        progress.isFilled = true;
        progress.fillColor = 15790320;
        bar.add(progress);

        // spinner
        const spinner = this.add.image(760, 400, "load", "spinner");

        // loading
        const loading = this.add.sprite(760, 340, "loading_assets", "pizzatron0001.png");
        loading.visible = false;

        // bg (components)
        new Interactive(bg);

        this.text = text;
        this.bar = bar;
        this.progress = progress;
        this.spinner = spinner;
        this.loading = loading;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create(data) {
        this.events.on('sleep', this.onSleep, this)
        this.events.on('wake', this.onWake, this)

        this._create()

        this.tween = this.tweens.add({
            targets: this.spinner,
            angle: { from: 0, to: 180 },
            duration: 900,
            repeat: -1,
            ease: 'Cubic'
        })

        if (localStorage.clientMode == 'legacy') {
            this.spinner.visible = false
            this.loading.visible = true
            this.text.setPosition(760, 600)
            this.setupLoadingAnims()
            this.setContent(data.text, false)
        }
        else {
           this.setContent(data.text, data.showBar)
        }
    }

    setupLoadingAnims() {
        var sprite = Phaser.Math.RND.between(0,2)
            if (sprite == 0){
                this.loading.setPosition(760, 410)
                this.loading.play("shovelling")
            }
            else if (sprite == 1){
                this.loading.setPosition(760, 320)
                this.loading.play("pizzatron")
            }
            else{
                this.loading.setPosition(760, 390)
                this.loading.play("cartSurfer")
            }
    }

    onSleep() {
        if (localStorage.clientMode == 'legacy') {
            this.tween.pause()
            this.spinner.angle = 0
        }
        if (this.timeout) clearTimeout(this.timeout)
    }

    onWake(sys, data) {
        if (localStorage.clientMode == 'legacy') { 
            this.setupLoadingAnims()
            this.setContent(data.text, false)
        }
        else {
            this.tween.restart()
            this.tween.play()
            this.setContent(data.text, data.showBar)
        }
    }

    setContent(text, showBar) {
        this.text.text = text
        // this.showBar = showBar
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
