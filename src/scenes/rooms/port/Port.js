
// You can write more code here

/* START OF COMPILED CODE */

import RoomScene from "../RoomScene";
import Button from "../../components/Button";
import MoveTo from "../../components/MoveTo";
import Animation from "../../components/Animation";
import SimpleButton from "../../components/SimpleButton";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Port extends RoomScene {

    constructor() {
        super("Port");

        /** @type {Phaser.GameObjects.Sprite} */
        this.candy_2;
        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            'tropical': () => this.triggerRoom(20, 1239, 816),
            'lighthouse': () => this.triggerRoom(31, 620, 486)  
        }

        this.music = "port"
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("port-pack", "assets/media/rooms/port/port-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        this.add.image(692, 459, "port", "bg");

        // s_mbolo_1
        this.add.image(1312, 189, "port", "Símbolo 1");

        // symbol_493
        this.add.image(578, 232, "port", "Symbol 493");

        // s_mbolo_15
        this.add.image(396, 214, "port", "Símbolo 15");

        // symbol_545
        this.add.image(769, 442, "port", "Symbol 545");

        // symbol_1
        this.add.image(58, 601, "port", "Symbol 719");

        // symbol_719
        this.add.image(589, 638, "port", "Symbol 719");

        // symbol
        const symbol = this.add.image(862, 615, "port", "Symbol 719");
        symbol.flipX = true;

        // symbol_719_copia
        this.add.image(1050, 580, "port", "Symbol 719 copia");

        // door
        const door = this.add.image(157, 320, "port", "door");
        door.scaleX = 1.1;
        door.scaleY = 1.1;

        // wave10001
        const wave10001 = this.add.sprite(106, 883, "port", "wave10001");
        wave10001.scaleX = 2.4;
        wave10001.scaleY = 2.4;
        wave10001.setOrigin(0.9023367535710926, 0.11992137215167828);
        wave10001.flipX = true;

        // wave
        const wave = this.add.sprite(185, 871, "port", "wave10001");
        wave.scaleX = 1.9;
        wave.scaleY = 1.9;
        wave.flipX = true;

        // wave20001
        const wave20001 = this.add.sprite(415, 851, "port", "wave20001");
        wave20001.scaleX = 2.4;
        wave20001.scaleY = 2.4;
        wave20001.flipX = true;

        // wave_1
        const wave_1 = this.add.sprite(708, 868, "port", "wave10001");
        wave_1.scaleX = 2.4;
        wave_1.scaleY = 2.4;
        wave_1.setOrigin(0.9023367535710926, 0.11992137215167828);
        wave_1.flipX = true;

        // wave_2
        const wave_2 = this.add.sprite(787, 856, "port", "wave10001");
        wave_2.scaleX = 1.9;
        wave_2.scaleY = 1.9;
        wave_2.flipX = true;

        // wave_3
        const wave_3 = this.add.sprite(1048, 839, "port", "wave20001");
        wave_3.scaleX = 2.4;
        wave_3.scaleY = 2.4;
        wave_3.flipX = true;

        // wave_4
        const wave_4 = this.add.sprite(1285, 862, "port", "wave10001");
        wave_4.scaleX = 2.4;
        wave_4.scaleY = 2.4;
        wave_4.setOrigin(0.9023367535710926, 0.11992137215167828);
        wave_4.flipX = true;

        // wave_5
        const wave_5 = this.add.sprite(1364, 850, "port", "wave10001");
        wave_5.scaleX = 1.9;
        wave_5.scaleY = 1.9;
        wave_5.flipX = true;

        // wave_10
        const wave_10 = this.add.sprite(909, 738, "port", "wave10001");
        wave_10.scaleX = 2.4;
        wave_10.scaleY = 2.4;
        wave_10.setOrigin(0.9023367535710926, 0.11992137215167828);
        wave_10.flipX = true;

        // wave_11
        const wave_11 = this.add.sprite(988, 726, "port", "wave10001");
        wave_11.scaleX = 1.9;
        wave_11.scaleY = 1.9;
        wave_11.flipX = true;

        // wave_12
        const wave_12 = this.add.sprite(1299, 708, "port", "wave20001");
        wave_12.scaleX = 2.4;
        wave_12.scaleY = 2.4;

        // wave_13
        const wave_13 = this.add.sprite(1511, 723, "port", "wave10001");
        wave_13.scaleX = 2.4;
        wave_13.scaleY = 2.4;
        wave_13.setOrigin(0.9023367535710926, 0.11992137215167828);
        wave_13.flipX = true;

        // wave_22
        const wave_22 = this.add.sprite(230, 939, "port", "wave10001");
        wave_22.scaleX = 2.4;
        wave_22.scaleY = 2.4;
        wave_22.setOrigin(0.9023367535710926, 0.11992137215167828);
        wave_22.flipX = true;

        // wave_23
        const wave_23 = this.add.sprite(309, 927, "port", "wave10001");
        wave_23.scaleX = 1.9;
        wave_23.scaleY = 1.9;
        wave_23.flipX = true;

        // wave_24
        const wave_24 = this.add.sprite(570, 909, "port", "wave20001");
        wave_24.scaleX = 2.4;
        wave_24.scaleY = 2.4;
        wave_24.flipX = true;

        // wave_25
        const wave_25 = this.add.sprite(832, 924, "port", "wave10001");
        wave_25.scaleX = 2.4;
        wave_25.scaleY = 2.4;
        wave_25.setOrigin(0.9023367535710926, 0.11992137215167828);
        wave_25.flipX = true;

        // wave_26
        const wave_26 = this.add.sprite(911, 912, "port", "wave10001");
        wave_26.scaleX = 1.9;
        wave_26.scaleY = 1.9;
        wave_26.flipX = true;

        // wave_27
        const wave_27 = this.add.sprite(1188, 920, "port", "wave20001");
        wave_27.scaleX = 2.4;
        wave_27.scaleY = 2.4;
        wave_27.flipX = true;

        // wave_28
        const wave_28 = this.add.sprite(1409, 918, "port", "wave10001");
        wave_28.scaleX = 2.4;
        wave_28.scaleY = 2.4;
        wave_28.setOrigin(0.9023367535710926, 0.11992137215167828);
        wave_28.flipX = true;

        // wave_29
        const wave_29 = this.add.sprite(1488, 906, "port", "wave10001");
        wave_29.scaleX = 1.9;
        wave_29.scaleY = 1.9;
        wave_29.flipX = true;

        // symbol_733
        this.add.image(203, 624, "port", "Symbol 733");

        // s_mbolo_14
        this.add.image(687, 321, "port", "Símbolo 14");

        // symbol_514
        this.add.image(807, 230, "port", "Symbol 514");

        // symbol_573
        this.add.image(1063, 356, "port", "Symbol 573");

        // overaly
        this.add.image(771, 738, "port", "overaly");

        // symbol_921
        this.add.image(74, 796, "port", "Symbol 921");

        // symbol_389_copia
        const symbol_389_copia = this.add.image(29, 447, "halloween", "Symbol 389 copia");
        symbol_389_copia.flipX = true;

        // symbol_290
        this.add.image(1433, 382, "halloween", "Symbol 290");

        // symbol_207_copia
        this.add.image(695, 331, "halloween", "Symbol 207 copia");

        // s_mbolo_10
        this.add.image(1386, 76, "port", "Símbolo 10");

        // s_mbolo_100
        const s_mbolo_100 = this.add.image(463, 207.56742826539133, "port", "Símbolo 100");
        s_mbolo_100.setOrigin(0.5, 1.002895042170364);

        // candy_2
        const candy_2 = this.add.sprite(252, 294, "dialogue", "candy_2");
        candy_2.scaleX = 0.2;
        candy_2.scaleY = 0.2;
        candy_2.tintTopLeft = 13158600;
        candy_2.tintTopRight = 13158600;
        candy_2.tintBottomLeft = 13158600;
        candy_2.tintBottomRight = 13158600;

        // lists
        const sort = [s_mbolo_100];

        // door (components)
        const doorButton = new Button(door);
        doorButton.spriteName = "door";
        const doorMoveTo = new MoveTo(door);
        doorMoveTo.x = 187;
        doorMoveTo.y = 317;

        // wave10001 (components)
        const wave10001Animation = new Animation(wave10001);
        wave10001Animation.key = "wave1";
        wave10001Animation.end = 42;

        // wave (components)
        const waveAnimation = new Animation(wave);
        waveAnimation.key = "wave1";
        waveAnimation.end = 42;

        // wave20001 (components)
        const wave20001Animation = new Animation(wave20001);
        wave20001Animation.key = "wave2";
        wave20001Animation.end = 18;

        // wave_1 (components)
        const wave_1Animation = new Animation(wave_1);
        wave_1Animation.key = "wave1";
        wave_1Animation.end = 42;

        // wave_2 (components)
        const wave_2Animation = new Animation(wave_2);
        wave_2Animation.key = "wave1";
        wave_2Animation.end = 42;

        // wave_3 (components)
        const wave_3Animation = new Animation(wave_3);
        wave_3Animation.key = "wave2";
        wave_3Animation.end = 18;

        // wave_4 (components)
        const wave_4Animation = new Animation(wave_4);
        wave_4Animation.key = "wave1";
        wave_4Animation.end = 42;

        // wave_5 (components)
        const wave_5Animation = new Animation(wave_5);
        wave_5Animation.key = "wave1";
        wave_5Animation.end = 42;

        // wave_10 (components)
        const wave_10Animation = new Animation(wave_10);
        wave_10Animation.key = "wave1";
        wave_10Animation.end = 42;

        // wave_11 (components)
        const wave_11Animation = new Animation(wave_11);
        wave_11Animation.key = "wave1";
        wave_11Animation.end = 42;

        // wave_12 (components)
        const wave_12Animation = new Animation(wave_12);
        wave_12Animation.key = "wave2";
        wave_12Animation.end = 18;

        // wave_13 (components)
        const wave_13Animation = new Animation(wave_13);
        wave_13Animation.key = "wave1";
        wave_13Animation.end = 42;

        // wave_22 (components)
        const wave_22Animation = new Animation(wave_22);
        wave_22Animation.key = "wave1";
        wave_22Animation.end = 42;

        // wave_23 (components)
        const wave_23Animation = new Animation(wave_23);
        wave_23Animation.key = "wave1";
        wave_23Animation.end = 42;

        // wave_24 (components)
        const wave_24Animation = new Animation(wave_24);
        wave_24Animation.key = "wave2";
        wave_24Animation.end = 18;

        // wave_25 (components)
        const wave_25Animation = new Animation(wave_25);
        wave_25Animation.key = "wave1";
        wave_25Animation.end = 42;

        // wave_26 (components)
        const wave_26Animation = new Animation(wave_26);
        wave_26Animation.key = "wave1";
        wave_26Animation.end = 42;

        // wave_27 (components)
        const wave_27Animation = new Animation(wave_27);
        wave_27Animation.key = "wave2";
        wave_27Animation.end = 18;

        // wave_28 (components)
        const wave_28Animation = new Animation(wave_28);
        wave_28Animation.key = "wave1";
        wave_28Animation.end = 42;

        // wave_29 (components)
        const wave_29Animation = new Animation(wave_29);
        wave_29Animation.key = "wave1";
        wave_29Animation.end = 42;

        // candy_2 (components)
        const candy_2SimpleButton = new SimpleButton(candy_2);
        candy_2SimpleButton.callback = () => {this.foundCandy(2,this.candy_2),
                this.world.interface.main.success_1.visible = true; };

        this.candy_2 = candy_2;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create() {
        super.create();
        if (this.world.client.penguin.candy2 == 1) {
            this.candy_2.visible = false;
        }
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
