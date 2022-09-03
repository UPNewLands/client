
// You can write more code here

/* START OF COMPILED CODE */

import RoomScene from "../RoomScene";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Hiddenlake extends RoomScene {

    constructor() {
        super("Hiddenlake");

        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;

        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            'cave': () => this.triggerRoom(91, 352, 490),
        }
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("hidden-pack", "assets/media/rooms/hidden/hidden-pack.json");
    }

    /** @returns {void} */
    _create() {

        // symbol_146
        this.add.image(1267, 156, "hidden", "Symbol 146");

        // s_mbolo_6
        this.add.image(796, 675, "hidden", "Símbolo 6");

        // s_mbolo_5
        this.add.image(707, 524, "hidden", "Símbolo 5");

        // symbol_152
        this.add.image(503, 569, "hidden", "Symbol 152");

        // s_mbolo_9
        this.add.image(764, 466, "hidden", "Símbolo 9");

        // s_mbolo_11
        const s_mbolo_11 = this.add.image(481.3202406202664, 335.2467563793846, "hidden", "Símbolo 11");
        s_mbolo_11.setOrigin(0.4872077491447442, 0.8881168909484615);

        // symbol_149
        this.add.image(827, 172, "hidden", "Symbol 149");

        // symbol_302
        this.add.image(132, 421, "hidden", "Symbol 302");

        // s_mbolo_10
        this.add.image(1239, 174, "hidden", "Símbolo 10");

        // s_mbolo_13
        this.add.image(1389, 245, "hidden", "Símbolo 13");

        // s_mbolo_14
        const s_mbolo_14 = this.add.image(1045.3566306011778, 489.5631877450035, "hidden", "Símbolo 14");
        s_mbolo_14.setOrigin(0.4300591181100485, 0.772755475303644);

        // s_mbolo_19
        this.add.image(1419, 365, "hidden", "Símbolo 19");

        // s_mbolo_21
        const s_mbolo_21 = this.add.image(1383, 578, "hidden", "Símbolo 21");

        // s_mbolo_15
        const s_mbolo_15 = this.add.image(509.9486596249359, 503.1879915718458, "hidden", "Símbolo 15");
        s_mbolo_15.setOrigin(0.450188637992188, 0.7984383619432908);

        // symbol_282
        const symbol_282 = this.add.image(1065, 556, "hidden", "Symbol 282");

        // symbol_286
        const symbol_286 = this.add.image(1028, 605, "hidden", "Symbol 286");

        // symbol_290
        const symbol_290 = this.add.image(1171, 636, "hidden", "Symbol 290");

        // symbol_228
        this.add.image(482, 844, "hidden", "Symbol 228");

        // symbol_296
        this.add.image(64, 690, "hidden", "Symbol 296");

        // s_mbolo_16
        this.add.image(125, 570, "hidden", "Símbolo 16");

        // s_mbolo_18
        this.add.image(160, 635, "hidden", "Símbolo 18");

        // s_mbolo_17
        const s_mbolo_17 = this.add.image(239.97434015903684, 661.733714529326, "hidden", "Símbolo 17");
        s_mbolo_17.setOrigin(0.5649969042128337, 0.7036685332448536);

        // s_mbolo_20
        const s_mbolo_20 = this.add.image(643.385644881488, 571.9640820620295, "hidden", "Símbolo 20");
        s_mbolo_20.setOrigin(0.4855425795259521, 0.4442229148377784);

        // lists
        const sort = [s_mbolo_14, s_mbolo_11, s_mbolo_15, s_mbolo_17, s_mbolo_20, s_mbolo_21, symbol_290, symbol_282, symbol_286];

        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    // Write your code here
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
