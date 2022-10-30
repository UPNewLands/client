
// You can write more code here

/* START OF COMPILED CODE */

import RoomScene from "../RoomScene";
import Button from "../../components/Button";
import MoveTo from "../../components/MoveTo";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Coffee extends RoomScene {

    constructor() {
        super("Coffee");

        /** @type {Array<any>} */
        this.sort;


        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            'beans': () => this.triggerGame('beanCounters', 908),
            'library': () => this.triggerRoom(12, 1265, 489),
            'smash': () => null,
            'town': () => this.triggerRoom(10, 260, 439),
        }

        this.music = "h_coffee"
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("coffee-pack", "assets/media/rooms/coffee/coffee-pack.json");
    }

    /** @returns {void} */
    _create() {

        // symbol_105
        this.add.image(762, 472, "coffee", "Symbol 105");

        // door
        const door = this.add.image(1355, 439, "coffee", "door");
        door.tintTopLeft = 10329501;
        door.tintTopRight = 10329501;
        door.tintBottomLeft = 10329501;
        door.tintBottomRight = 10329501;

        // symbol_211
        this.add.image(973, 710, "coffee", "Symbol 211");

        // symbol_290
        const symbol_290 = this.add.image(309, 595, "halloween", "Symbol 290");
        symbol_290.flipX = true;

        // symbol_130
        const symbol_130 = this.add.image(426, 252, "coffee", "Symbol 130");
        symbol_130.tintTopLeft = 10329501;
        symbol_130.tintTopRight = 10329501;
        symbol_130.tintBottomLeft = 10329501;
        symbol_130.tintBottomRight = 10329501;

        // symbol_1940001
        this.add.image(194, 434, "coffee", "Symbol 1940001");

        // symbol_196
        this.add.image(76, 512, "coffee", "Symbol 196");

        // symbol_103
        this.add.image(1485, 387, "coffee", "Symbol 103");

        // door2
        const door2 = this.add.image(944, 241, "coffee", "door2");
        door2.tintTopLeft = 10329501;
        door2.tintTopRight = 10329501;
        door2.tintBottomLeft = 10329501;
        door2.tintBottomRight = 10329501;

        // symbol_173
        const symbol_173 = this.add.image(1099, 426, "coffee", "Symbol 173");
        symbol_173.tintTopLeft = 10329501;
        symbol_173.tintTopRight = 10329501;
        symbol_173.tintBottomLeft = 10329501;
        symbol_173.tintBottomRight = 10329501;

        // symbol_198
        const symbol_198 = this.add.image(167, 733, "coffee", "Symbol 198");
        symbol_198.tintTopLeft = 10329501;
        symbol_198.tintTopRight = 10329501;

        // symbol_217
        this.add.image(431, 822, "coffee", "Symbol 217");

        // s_mbolo_5
        const s_mbolo_5 = this.add.image(715, 686, "coffee", "Símbolo 5");
        s_mbolo_5.tintTopLeft = 10329501;
        s_mbolo_5.tintTopRight = 10329501;
        s_mbolo_5.tintBottomLeft = 10329501;
        s_mbolo_5.tintBottomRight = 10329501;

        // s_mbolo_3
        this.add.image(891, 868, "coffee", "Símbolo 3");

        // symbol_213
        this.add.image(1106, 807, "coffee", "Symbol 213");

        // symbol_448
        this.add.image(1160, 927, "coffee", "Symbol 448");

        // s_mbolo_16
        this.add.image(981, 668, "coffee", "Símbolo 16");

        // symbol_202
        this.add.image(570, 466, "coffee", "Symbol 202");

        // symbol_200
        this.add.image(562, 365, "coffee", "Symbol 200");

        // symbol_147
        this.add.image(678, 358, "coffee", "Symbol 147");

        // symbol
        this.add.image(676, 428, "coffee", "Symbol 147");

        // symbol_1
        this.add.image(675, 498, "coffee", "Symbol 147");

        // s_mbolo_15
        this.add.image(945, 136, "coffee", "Símbolo 15");

        // s_mbolo_10
        this.add.image(1435, 81, "coffee", "Símbolo 10");

        // symbol_223
        const symbol_223 = this.add.image(1482, 649, "coffee", "Symbol 223");
        symbol_223.tintTopLeft = 10329501;
        symbol_223.tintTopRight = 10329501;
        symbol_223.tintBottomLeft = 10329501;
        symbol_223.tintBottomRight = 10329501;

        // symbol_329
        this.add.image(1154, 535, "halloween", "Symbol 329");

        // symbol_207_copia
        this.add.image(438, 344, "halloween", "Symbol 207 copia");

        // sprite_763
        this.add.image(749, 531, "coffee", "Sprite 763");

        // s_mbolo_4
        this.add.image(605, 914, "coffee", "Símbolo 4");

        // symbol_102
        this.add.image(627, 889, "coffee", "Symbol 102");

        // lists
        const sort = [];

        // door (components)
        const doorButton = new Button(door);
        doorButton.spriteName = "door";
        doorButton.activeFrame = false;
        const doorMoveTo = new MoveTo(door);
        doorMoveTo.x = 1403;
        doorMoveTo.y = 616;

        // door2 (components)
        const door2Button = new Button(door2);
        door2Button.spriteName = "door2";
        const door2MoveTo = new MoveTo(door2);
        door2MoveTo.x = 944;
        door2MoveTo.y = 241;

        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    // Write your code here
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
