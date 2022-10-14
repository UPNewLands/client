import FloatingMenu from '../FloatingMenu'

import { Button } from '@components/components'


/* START OF COMPILED CODE */

export default class PufflesMenu extends FloatingMenu {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Rectangle} */
        this.safe;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.close;
        /** @type {Phaser.GameObjects.Container} */
        this.disableCoinBag;
        /** @type {Phaser.GameObjects.Sprite} */
        this.coinbag;


        // safe
        const safe = scene.add.rectangle(0, -198, 200, 460);
        safe.isFilled = true;
        safe.fillColor = 65535;
        safe.fillAlpha = 0.5;
        this.add(safe);

        // close
        const close = scene.add.rectangle(0, 61, 80, 80);
        close.isFilled = true;
        close.fillColor = 65535;
        close.fillAlpha = 0.5;
        this.add(close);

        // back
        const back = scene.add.image(1, -173, "pufflePopup", "back");
        this.add(back);

        // disableCoinBag
        const disableCoinBag = scene.add.container(2, -68);
        this.add(disableCoinBag);

        // coinbag_hidden
        const coinbag_hidden = scene.add.sprite(0, 0, "pufflePopup", "coinbag");
        disableCoinBag.add(coinbag_hidden);

        // coinbag_disabled
        const coinbag_disabled = scene.add.sprite(0, 0, "pufflePopup", "coinbag");
        coinbag_disabled.alpha = 0.3;
        coinbag_disabled.alphaTopLeft = 0.3;
        coinbag_disabled.alphaTopRight = 0.3;
        coinbag_disabled.alphaBottomLeft = 0.3;
        coinbag_disabled.alphaBottomRight = 0.3;
        coinbag_disabled.tintFill = true;
        coinbag_disabled.tintTopLeft = 0;
        coinbag_disabled.tintTopRight = 0;
        coinbag_disabled.tintBottomLeft = 0;
        coinbag_disabled.tintBottomRight = 0;
        disableCoinBag.add(coinbag_disabled);

        // coinbag
        const coinbag = scene.add.sprite(2, -68, "pufflePopup", "coinbag");
        coinbag.visible = false;
        this.add(coinbag);

        // jumpspin
        const jumpspin = scene.add.image(35, -169, "pufflePopup", "jumpspin");
        this.add(jumpspin);

        // spin
        const spin = scene.add.image(-32, -171, "pufflePopup", "spin");
        this.add(spin);

        // roll
        const roll = scene.add.image(35, -242, "pufflePopup", "roll");
        this.add(roll);

        // turn
        const turn = scene.add.image(-32, -242, "pufflePopup", "turn");
        this.add(turn);

        // nuzzle
        const nuzzle = scene.add.image(-32, -310, "pufflePopup", "nuzzle");
        this.add(nuzzle);

        // speak
        const speak = scene.add.image(35, -310, "pufflePopup", "speak");
        this.add(speak);

        // coinbag (components)
        const coinbagButton = new Button(coinbag);
        coinbagButton.spriteName = "coinbag";
        coinbagButton.callback = () => {this.puffleDig()};

        // jumpspin (components)
        const jumpspinButton = new Button(jumpspin);
        jumpspinButton.spriteName = "jumpspin";
        jumpspinButton.callback = () => {this.playPuffleAnim("jumpspin")};

        // spin (components)
        const spinButton = new Button(spin);
        spinButton.spriteName = "spin";
        spinButton.callback = () => {this.playPuffleAnim("roll")};

        // roll (components)
        const rollButton = new Button(roll);
        rollButton.spriteName = "roll";
        rollButton.callback = () => {this.playPuffleAnim("sandonhead")};

        // turn (components)
        const turnButton = new Button(turn);
        turnButton.spriteName = "turn";
        turnButton.callback = () => {this.playPuffleAnim("jumpforward")};

        // nuzzle (components)
        const nuzzleButton = new Button(nuzzle);
        nuzzleButton.spriteName = "nuzzle";
        nuzzleButton.callback = () => {this.playPuffleAnim("nuzzle")};

        // speak (components)
        const speakButton = new Button(speak);
        speakButton.spriteName = "speak";
        speakButton.callback = () => {this.playPuffleAnim("speak")};

        this.safe = safe;
        this.close = close;
        this.disableCoinBag = disableCoinBag;
        this.coinbag = coinbag;

        /* START-USER-CTR-CODE */

        this.initMenu()

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    playPuffleAnim(anim) {
        if (!this.playing) {
            this.playing = true;
        }

        if (this.playing) {
            this.world.interface.main.pufflesMenu.visible = false;
            this.world.client.penguin.playPuffleAnim(anim) 
            this.network.send("play_puffle_anim", {id: this.world.client.penguin.id, anim: anim})
        }
    }

    puffleDig() {
        this.network.send("play_puffle_anim", {id: this.world.client.penguin.id, anim: 'dig'})
        this.network.send("puffle_dig", {id: this.world.client.penguin.id})
        this.playPuffleAnim('dig')
    }


    disableDigging(bool) {
        this.disableCoinBag.visible = !bool;
        this.coinbag.visible = bool;
    }

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); 
    }
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
