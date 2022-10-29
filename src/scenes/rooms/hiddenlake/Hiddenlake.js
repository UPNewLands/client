
// You can write more code here

/* START OF COMPILED CODE */

import RoomScene from "../RoomScene";
import Animation from "../../components/Animation";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Hiddenlake extends RoomScene {

    constructor() {
        super("Hiddenlake");

        /** @type {Array<any>} */
        this.sort;


        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            'cave': () => this.triggerRoom(91, 1083, 284),
        }

        this.music = "lake_hidden"
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("hidden-pack", "assets/media/rooms/hidden/hidden-pack.json");
    }

    /** @returns {void} */
    _create() {

        // sky
        this.add.image(666, 129, "hidden", "sky");

        // bg
        this.add.image(782, 566, "hidden", "bg");

        // s_mbolo_82_copia
        this.add.image(901, 197, "halloween", "Símbolo 82 copia");

        // s_mbolo_9
        this.add.image(491, 216, "hidden", "Símbolo 9");

        // sprite
        this.add.image(407, 332, "hidden", "Sprite 1811");

        // s_mbolo_8
        this.add.image(1388, 222, "hidden", "Símbolo 8");

        // s_mbolo_10
        this.add.image(1205, 324, "hidden", "Símbolo 10");

        // s_mbolo_11
        this.add.image(541, 344, "hidden", "Símbolo 11");

        // s_mbolo_12
        this.add.image(485, 786, "hidden", "Símbolo 12");

        // s_mbolo_13
        this.add.image(642, 583, "hidden", "Símbolo 13");

        // symbol_302
        this.add.image(163, 447, "hidden", "Symbol 302");

        // symbol_207_copia
        this.add.image(202, 468, "halloween", "Symbol 207 copia");

        // s_mbolo_14
        this.add.image(1153, 628, "hidden", "Símbolo 14");

        // s_mbolo_8_copia_2
        this.add.image(1348, 391, "hidden", "Símbolo 8 copia 2");

        // sprite_181
        this.add.image(1526, 515, "hidden", "Sprite 181");

        // sprite_181_copia
        this.add.image(1407, 561, "hidden", "Sprite 181 copia");

        // sprite_1811
        this.add.image(2, 240, "hidden", "Sprite 1811");

        // symbol_258
        this.add.image(1430, 751, "hidden", "Symbol 258");

        // symbol_290
        this.add.image(1132, 667, "halloween", "Symbol 290");

        // symbol_296
        this.add.image(65, 691, "hidden", "Symbol 296");

        // ghost20001
        const ghost20001 = this.add.sprite(902, 197, "halloween", "ghost20001");

        // lists
        const sort = [];

        // ghost20001 (components)
        const ghost20001Animation = new Animation(ghost20001);
        ghost20001Animation.key = "ghost2";
        ghost20001Animation.end = 59;

        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    // Write your code here
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
