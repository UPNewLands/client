import RoomScene from '../RoomScene'

import { Animation, Button, MoveTo, SimpleButton } from '@components/components'


/* START OF COMPILED CODE */

export default class Town extends RoomScene {

    constructor() {
        super("Town");

        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'central': () => this.triggerRoom(1, 259, 727),
            'coffee': () => this.triggerRoom(11, 975, 440),
            'dance': () => this.triggerRoom(15, 1141, 425),
            'shop': () => this.triggerRoom(13, 334, 546),
            'tropical': () => this.triggerRoom(20, 1164, 354),
        }

        this.music = "h_town"

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("town-pack", "assets/media/rooms/town/town-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg_png
        this.add.image(719, 492, "town", "bg.png");

        // s_mbolo_10
        this.add.image(49, 625, "town", "Símbolo 10");

        // symbol_160
        const symbol_160 = this.add.image(2, 539.7284556050321, "town", "Symbol 160");
        symbol_160.setOrigin(0.5, 0.8766251187113875);

        // coffee
        const coffee = this.add.image(320, 336, "town", "coffee");

        // symbol_207_copia
        this.add.image(89, 569, "halloween", "Symbol 207 copia");

        // symbol_1
        this.add.image(-155, 560, "town", "Symbol 80");

        // symbol_80
        this.add.image(89, 718, "town", "Symbol 80");

        // shopdoor
        const shopdoor = this.add.image(961, 323, "town", "shopdoor");
        shopdoor.tintTopLeft = 10592673;
        shopdoor.tintTopRight = 10592673;
        shopdoor.tintBottomLeft = 10592673;
        shopdoor.tintBottomRight = 10592673;

        // discodoor0001
        const discodoor0001 = this.add.sprite(675, 379, "town", "discodoor0001");
        discodoor0001.tintTopLeft = 10592673;
        discodoor0001.tintTopRight = 10592673;
        discodoor0001.tintBottomLeft = 10592673;
        discodoor0001.tintBottomRight = 10592673;

        // symbol_8
        const symbol_8 = this.add.image(440, 363, "town", "Symbol 8");
        symbol_8.tintTopLeft = 9737364;
        symbol_8.tintTopRight = 9737364;
        symbol_8.tintBottomLeft = 9737364;
        symbol_8.tintBottomRight = 9737364;

        // s_mbolo_88
        this.add.image(381, 254, "town", "Símbolo 88");

        // s_mbolo_16
        this.add.image(1009, 228, "town", "Símbolo 16");

        // s_mbolo_12
        this.add.image(715, 265, "town", "Símbolo 12");

        // symbol
        const symbol = this.add.image(439, 364, "town", "Symbol 8");
        symbol.tintTopLeft = 10592673;
        symbol.tintTopRight = 10592673;
        symbol.tintBottomLeft = 10592673;
        symbol.tintBottomRight = 10592673;

        // s_mbolo_21
        this.add.image(707, 515, "town", "Símbolo 21");

        // symbol_13
        this.add.image(726, 682, "town", "Symbol 13");

        // symbol_6
        this.add.image(1099, 117, "town", "Symbol 6");

        // s_mbolo_9
        this.add.image(1043, 244, "town", "Símbolo 9");

        // s_mbolo_8
        this.add.image(370, 234, "town", "Símbolo 8");

        // symbol_147
        this.add.image(1194, 378, "town", "Symbol 147");

        // symbol_395
        const symbol_395 = this.add.image(318.56396893602056, 895.8120103546598, "town", "Symbol 395");
        symbol_395.setOrigin(0.48176147378244827, 0.5141756350113654);

        // symbol_10
        this.add.image(1138, 790, "town", "Symbol 10");

        // symbol_190
        this.add.image(553, 374, "town", "Symbol 190");

        // symbol_281
        this.add.image(1320, 968, "town", "Symbol 281");

        // symbol_2
        const symbol_2 = this.add.image(1209.8459534040308, 960.8041760292169, "town", "Symbol 80");
        symbol_2.setOrigin(0.466725131557291, 0.8030802945681501);

        // symbol_3
        const symbol_3 = this.add.image(1373, 878, "town", "Symbol 80");
        symbol_3.flipX = true;

        // s_mbolo_11
        this.add.image(1434, 277, "town", "Símbolo 11");

        // symbol_290
        this.add.image(509, 481, "halloween", "Symbol 290");

        // symbol_937
        this.add.image(851, 426, "town", "Symbol 937");

        // s_mbolo_82_copia
        const s_mbolo_82_copia = this.add.image(1192.7263997475427, 504.55946195413196, "halloween", "Símbolo 82 copia");
        s_mbolo_82_copia.setOrigin(0.5236014026229568, 0.9421107815286337);

        // symbol_4
        const symbol_4 = this.add.image(597, 925, "halloween", "Symbol 80");
        symbol_4.setOrigin(0.4915459774896422, 0.5923156638672858);

        // lists
        const sort = [s_mbolo_82_copia, symbol_395, symbol_160, symbol_2];

        // coffee (components)
        const coffeeButton = new Button(coffee);
        coffeeButton.spriteName = "coffee";
        const coffeeMoveTo = new MoveTo(coffee);
        coffeeMoveTo.x = 320;
        coffeeMoveTo.y = 336;

        // shopdoor (components)
        const shopdoorButton = new Button(shopdoor);
        shopdoorButton.spriteName = "shopdoor";
        const shopdoorMoveTo = new MoveTo(shopdoor);
        shopdoorMoveTo.x = 970;
        shopdoorMoveTo.y = 323;

        // discodoor0001 (components)
        new SimpleButton(discodoor0001);
        const discodoor0001Animation = new Animation(discodoor0001);
        discodoor0001Animation.key = "discodoor";
        discodoor0001Animation.end = 8;
        discodoor0001Animation.repeat = 0;
        discodoor0001Animation.autoPlay = false;
        discodoor0001Animation.onHover = true;
        new MoveTo(discodoor0001);

        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    onCanopyOver() {
        this.disco.setFrame('disco-hover')
        this.canopy_lights.__Animation.play()
        this.disco_lights.__Animation.play()
    }

    onCanopyOut() {
        this.disco.setFrame('disco')
        this.canopy_lights.__Animation.stop()
        this.disco_lights.__Animation.stop()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
