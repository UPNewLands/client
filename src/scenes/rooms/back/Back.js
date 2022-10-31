
// You can write more code here

/* START OF COMPILED CODE */

import RoomScene from "../RoomScene";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Back extends RoomScene {

    constructor() {
        super("Back");

        /** @type {Phaser.GameObjects.Sprite} */
        this.pumpkin;
        /** @type {Phaser.GameObjects.Sprite} */
        this.mouth;
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

        // sky
        this.add.image(670, 218, "back", "sky");

        // pumpkin
        const pumpkin = this.add.sprite(809, 327, "halloween", "pumpkin");

        // mouth
        const mouth = this.add.sprite(771, 460, "halloween", "mouth");

        // s_mbolo_9
        this.add.image(717, 550, "back", "Símbolo 9");

        // symbol_381
        const symbol_381 = this.add.image(1379, 907, "back", "Symbol 381");

        // symbol_233
        const symbol_233 = this.add.image(753.8479984633971, 1055.8182753470774, "back", "Symbol 233");
        symbol_233.setOrigin(0.4836130483888096, 0.7392126306021681);

        // lists
        const sort = [symbol_233, symbol_381];

        this.pumpkin = pumpkin;
        this.mouth = mouth;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create() {
        super.create();
        this.bounds = this.mouth.getBounds();
        this.mouth.on('animationcomplete', () => this.onTargetAnimComplete())
    }


    onSnowballComplete(x, y) {
        if (this.bounds.contains(x, y)) {
            this.network.send("update_count", {})
        }
    }

    onTargetAnimComplete() {
        this.mouth.setFrame("mouth")
    }


    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
