
// You can write more code here

/* START OF COMPILED CODE */

import RoomScene from "../RoomScene";
import Animation from "../../components/Animation";
import Button from "../../components/Button";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Central extends RoomScene {

    constructor() {
        super("Central");

        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            'back': () => this.triggerRoom(3, 223, 778),
            'plaza': () => this.triggerRoom(50, 128, 652),
            'town': () => this.triggerRoom(10, 1310, 408),
        }

        this.music = "centre_island"

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("central-pack", "assets/media/rooms/central/central-pack.json");
    }

    /** @returns {void} */
    _create() {

        // s_mbolo_53
        this.add.image(770, 193, "central", "Símbolo 53");

        // s_mbolo_34
        this.add.image(721, 835, "central", "Símbolo 34");

        // s_mbolo_2
        this.add.image(661, 482, "central", "Símbolo 2");

        // symbol_71
        this.add.image(763, 506, "halloween", "Symbol 71");

        // symbol_290
        this.add.image(1483, 514, "halloween", "Symbol 290");

        // shape_315
        this.add.image(135, 674, "central", "shape 315");

        // fire0001
        const fire0001 = this.add.sprite(144, 600, "halloween", "fire0001");

        // s_mbolo_82_copia
        const s_mbolo_82_copia = this.add.image(138.33341687781237, 744.0017544340595, "halloween", "Símbolo 82 copia");
        s_mbolo_82_copia.setOrigin(0.5187137434309206, 0.8943723747678153);

        // symbol_349
        this.add.image(1021, 247, "central", "Symbol 349");

        // flyer
        const flyer = this.add.image(1062, 311, "central", "flyer");
        flyer.flipX = true;
        flyer.tintTopLeft = 10790052;
        flyer.tintTopRight = 10790052;
        flyer.tintBottomLeft = 10790052;
        flyer.tintBottomRight = 10790052;

        // s_mbolo_35
        this.add.image(928, 220, "central", "Símbolo 35");

        // s_mbolo_27
        this.add.image(-95, 271, "central", "Símbolo 27");

        // symbol_84
        const symbol_84 = this.add.image(874, 599, "central", "Symbol 84");

        // s_mbolo_8_copia_2
        const s_mbolo_8_copia_2 = this.add.image(1346, 460, "central", "Símbolo 8 copia 2");

        // symbol
        const symbol = this.add.image(1448.6500640220313, 632.751637237894, "central", "Symbol 84");
        symbol.setOrigin(0.5890088717748448, 0.7442590439045863);

        // symbol1
        const symbol1 = this.add.image(1451, 695.9430638908892, "central", "symbol1");
        symbol1.setOrigin(0.5, 0.5128679727873459);
        symbol1.tintTopLeft = 10790052;
        symbol1.tintTopRight = 10790052;
        symbol1.tintBottomLeft = 10790052;
        symbol1.tintBottomRight = 10790052;

        // symbol2
        const symbol2 = this.add.image(1326.7694339162374, 827.1752292453045, "central", "symbol2");
        symbol2.setOrigin(0.26444705223080095, 0.9821914021582091);
        symbol2.tintTopLeft = 10790052;
        symbol2.tintTopRight = 10790052;
        symbol2.tintBottomLeft = 10790052;
        symbol2.tintBottomRight = 10790052;

        // symbol_88
        const symbol_88 = this.add.image(1178, 499, "central", "Symbol 88");

        // symbol_153_copy0001
        this.add.image(144, 542, "central", "Symbol 153 copy0001");

        // symbol_358
        this.add.image(30, 552, "central", "Symbol 358");

        // symbol_116
        this.add.image(244, 579, "central", "Symbol 116");

        // symbol_110
        this.add.image(52, 588, "central", "Symbol 110");

        // symbol_140_copia
        this.add.image(7, 695, "central", "Symbol 140 copia");

        // symbol_389_copia
        const symbol_389_copia = this.add.image(565, 317, "halloween", "Symbol 389 copia");
        symbol_389_copia.flipX = true;

        // symbol_84_copia
        const symbol_84_copia = this.add.image(444, 477, "central", "Symbol 84 copia");
        symbol_84_copia.setOrigin(0.6356296789005009, 0.6857083295714552);

        // s_mbolo_41
        const s_mbolo_41 = this.add.image(204.53692199968205, 798.3086268033704, "central", "Símbolo 41");
        s_mbolo_41.setOrigin(0.46927572077818847, 0.8310515736084833);
        s_mbolo_41.tintTopLeft = 10790052;
        s_mbolo_41.tintTopRight = 10790052;
        s_mbolo_41.tintBottomLeft = 10790052;
        s_mbolo_41.tintBottomRight = 10790052;

        // symbol_4
        this.add.image(131, 897, "central", "Symbol 4");

        // s_mbolo_37
        const s_mbolo_37 = this.add.image(542, 811, "central", "Símbolo 37");

        // symbol_1
        const symbol_1 = this.add.image(1516.4964704950924, 345.4903526865857, "central", "Symbol 84");
        symbol_1.setOrigin(0.5969675452374671, 0.7355952210214012);
        symbol_1.flipX = true;

        // s_mbolo_13
        const s_mbolo_13 = this.add.image(1084, 796, "central", "Símbolo 13");

        // symbol_389
        this.add.image(51, 393, "halloween", "Symbol 389");

        // symbol_207_copia
        this.add.image(434, 643, "halloween", "Symbol 207 copia");

        // symbol_329
        this.add.image(1057, 507, "halloween", "Symbol 329");

        // lists
        const sort = [symbol2, s_mbolo_41, s_mbolo_37, symbol_84_copia, s_mbolo_13, symbol_88, s_mbolo_8_copia_2, symbol_1, symbol, symbol_84, symbol1, s_mbolo_82_copia, symbol_389_copia];

        // fire0001 (components)
        const fire0001Animation = new Animation(fire0001);
        fire0001Animation.key = "fire";
        fire0001Animation.end = 20;

        // flyer (components)
        const flyerButton = new Button(flyer);
        flyerButton.spriteName = "flyer";
        flyerButton.activeFrame = false;

        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
