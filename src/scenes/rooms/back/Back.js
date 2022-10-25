
// You can write more code here

/* START OF COMPILED CODE */

import RoomScene from "../RoomScene";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Back extends RoomScene {

    constructor() {
        super("Back");

        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            'central': () => this.triggerRoom(1, 725, 434),
        }
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("back-pack", "assets/media/rooms/back/back-pack.json");
    }

    /** @returns {void} */
    _create() {

        // s_mbolo_6
        this.add.image(1294, 709, "back", "Símbolo 6");

        // symbol_381
        this.add.image(1462, 945, "back", "Symbol 381");

        // sky
        this.add.image(670, 218, "back", "sky");

        // s_mbolo_4
        this.add.image(773, 314, "halloween", "Símbolo 4");

        // s_mbolo_9
        this.add.image(717, 550, "back", "Símbolo 9");

        // symbol_233
        const symbol_233 = this.add.image(786.5622053962313, 731.6503359241074, "back", "Symbol 233");
        symbol_233.setOrigin(0.5013925029327344, -0.007718119990536021);

        // lists
        const sort = [symbol_233];

        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    // Write your code here

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
