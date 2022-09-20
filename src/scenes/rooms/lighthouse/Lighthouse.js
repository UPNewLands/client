
// You can write more code here

/* START OF COMPILED CODE */

import RoomScene from "../RoomScene";
import Button from "../../components/Button";
import MoveTo from "../../components/MoveTo";
import Animation from "../../components/Animation";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Lighthouse extends RoomScene {

    constructor() {
        super("Lighthouse");

        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            'beacon': () => this.triggerRoom(32, 298, 743),
            'port': () => this.triggerRoom(30, 273, 487),
        }        
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("lighthouse-pack", "assets/media/rooms/lighthouse/lighthouse-pack.json");
    }

    /** @returns {void} */
    _create() {

        // symbol_61
        this.add.image(773, 627, "lighthouse", "Symbol 61");

        // symbol_375
        this.add.image(760, 337, "lighthouse", "Symbol 375");

        // s_mbolo_12
        this.add.image(749, 359, "lighthouse", "Símbolo 12");

        // s_mbolo_1
        this.add.image(-7, 474, "lighthouse", "Símbolo 1");

        // symbol_379
        this.add.image(729, 688, "lighthouse", "Symbol 379");

        // door
        const door = this.add.image(451, 403, "lighthouse", "door");

        // s_mbolo_7
        const s_mbolo_7 = this.add.image(442, 400, "lighthouse", "Símbolo 7");
        s_mbolo_7.scaleX = 1.1;
        s_mbolo_7.scaleY = 1.05;

        // symbol1
        this.add.image(294, 396, "lighthouse", "Symbol1");

        // symbol_200_copy
        this.add.image(587, 481, "lighthouse", "Symbol 200 copy");

        // symbol_3340002
        this.add.image(296, 471, "lighthouse", "Symbol 3340002");

        // symbol
        this.add.image(316, 458, "lighthouse", "Symbol 513");

        // s_mbolo_6
        this.add.image(129, 228, "lighthouse", "Símbolo 6");

        // s_mbolo_5
        this.add.image(100, 421, "lighthouse", "Símbolo 5");

        // speakers0001
        const speakers0001 = this.add.sprite(101, 346, "lighthouse", "speakers0001");

        // symbol_56
        this.add.image(472, 521, "lighthouse", "Symbol 56");

        // symbol_57
        this.add.image(754, 659, "lighthouse", "Symbol 57");

        // symbol_98_copy_2
        this.add.image(930, 810, "lighthouse", "Symbol 98 copy 2");

        // symbol_180
        this.add.image(-25, 683, "lighthouse", "Symbol 180");

        // symbol_19_copy_2
        this.add.image(582, 358, "lighthouse", "Symbol 19 copy 2");

        // s_mbolo_11
        this.add.image(859, 453, "lighthouse", "Símbolo 11");

        // instru
        const instru = this.add.image(750, 459, "lighthouse", "instru");

        // symbol_71
        this.add.image(664, 472, "lighthouse", "Symbol 71");

        // s_mbolo_2
        this.add.image(1036, 413, "lighthouse", "Símbolo 2");

        // s_mbolo_9
        this.add.image(960, 443, "lighthouse", "Símbolo 9");

        // s_mbolo_8
        this.add.image(1057, 543, "lighthouse", "Símbolo 8");

        // symbol_383
        this.add.image(626, 235, "lighthouse", "Symbol 383");

        // symbol_410
        this.add.image(1262, 443, "lighthouse", "Symbol 410");

        // symbol_412
        this.add.image(1335, 408, "lighthouse", "Symbol 412");

        // symbol_385
        const symbol_385 = this.add.image(108.67215993268778, 313.7193114407036, "lighthouse", "Symbol 385");
        symbol_385.setOrigin(0.6105746609059512, 0.9466827880784711);

        // s_mbolo_15
        this.add.image(875, 754, "lighthouse", "Símbolo 15");

        // symbol_513
        this.add.image(658, 444, "lighthouse", "Symbol 513");

        // symbol_517
        const symbol_517 = this.add.image(1124.2437024692558, 480.67223148058173, "lighthouse", "Symbol 517");
        symbol_517.setOrigin(0.45240187488528294, 0.8404705746639919);

        // symbol_519
        const symbol_519 = this.add.image(1284.1419829851095, 657.1714926350478, "lighthouse", "Symbol 519");
        symbol_519.setOrigin(0.5490934058212318, 0.9309621995834507);

        // symbol_523
        const symbol_523 = this.add.image(523.403338888349, 335.10749765274943, "lighthouse", "Symbol 523");
        symbol_523.setOrigin(0.5517147197192334, 0.9629016555477824);

        // symbol_4730001
        this.add.image(288, 120, "lighthouse", "Symbol 4730001");

        // symbol_62
        this.add.image(404, 55, "lighthouse", "Symbol 62");

        // symbol_17_copy
        this.add.image(565, 66, "lighthouse", "Symbol 17 copy");

        // symbol_6_copy_11
        this.add.image(744, 59, "lighthouse", "Symbol 6 copy 11");

        // s_mbolo_13
        this.add.image(949, 86, "lighthouse", "Símbolo 13");

        // symbol_41_copy
        this.add.image(1119, 98, "lighthouse", "Symbol 41 copy");

        // s_mbolo_14
        this.add.image(1395, 214, "lighthouse", "Símbolo 14");

        // symbol_42
        this.add.image(1256, 67, "lighthouse", "Symbol 42");

        // symbol_116
        this.add.image(933, 619, "lighthouse", "Symbol 116");

        // symbol_104
        const symbol_104 = this.add.image(795, 603, "lighthouse", "Symbol 104");
        symbol_104.flipX = true;

        // symbol_94
        this.add.image(1083, 731, "lighthouse", "Symbol 94");

        // symbol_112
        const symbol_112 = this.add.image(988, 781, "lighthouse", "Symbol 112");
        symbol_112.flipX = true;

        // symbol_114
        this.add.image(671, 618, "lighthouse", "Symbol 114");

        // s_mbolo_17
        this.add.image(885, 833, "lighthouse", "Símbolo 17");

        // s_mbolo_16
        const s_mbolo_16 = this.add.image(314.7688745103184, 633.4150996082548, "lighthouse", "Símbolo 16");
        s_mbolo_16.setOrigin(0.22464251280457595, 0.3540721502458007);

        // symbol_6_copy_10
        const symbol_6_copy_10 = this.add.image(469, 830, "lighthouse", "Symbol 6 copy 10");

        // symbol_202_copy
        const symbol_202_copy = this.add.image(150, 513, "lighthouse", "Symbol 202 copy");

        // symbol_291_copy
        const symbol_291_copy = this.add.image(70, 906, "lighthouse", "Symbol 291 copy");

        // symbol_68
        const symbol_68 = this.add.image(1288, 895, "lighthouse", "Symbol 68");

        // catalog
        const catalog = this.add.image(1447, 913, "lighthouse", "catalog");

        // lists
        const sort = [symbol_104, symbol_112, symbol_519, symbol_517, symbol_523, symbol_385, symbol_202_copy, s_mbolo_16, symbol_6_copy_10, symbol_68, symbol_291_copy];

        // door (components)
        const doorButton = new Button(door);
        doorButton.spriteName = "door";
        doorButton.activeFrame = false;
        const doorMoveTo = new MoveTo(door);
        doorMoveTo.x = 451;
        doorMoveTo.y = 403;

        // speakers0001 (components)
        const speakers0001Animation = new Animation(speakers0001);
        speakers0001Animation.key = "speakers";
        speakers0001Animation.end = 10;

        // instru (components)
        const instruButton = new Button(instru);
        instruButton.spriteName = "instru";

        // catalog (components)
        const catalogButton = new Button(catalog);
        catalogButton.spriteName = "catalog";

        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    // Write your code here

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
