
// You can write more code here

/* START OF COMPILED CODE */

import RoomScene from "../RoomScene";
import SimpleButton from "../../components/SimpleButton";
import Animation from "../../components/Animation";
import MoveTo from "../../components/MoveTo";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Berg extends RoomScene {

    constructor() {
        super("Berg");

        /** @type {Array<any>} */
        this.sort;


        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            'aqua': () => this.triggerGame('aquaGrabber', 929)
        }
        this.music = "h_berg"

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("iceberg-pack", "assets/media/rooms/berg/iceberg-pack.json");
    }

    /** @returns {void} */
    _create() {

        // s_mbolo_5
        this.add.image(734, 91, "iceberg", "Símbolo 5");

        // s_mbolo_6
        const s_mbolo_6 = this.add.image(157, 148, "iceberg", "Símbolo 6");
        s_mbolo_6.flipX = true;

        // s_mbolo_7
        this.add.image(1234, 56, "iceberg", "Símbolo 7");

        // s_mbolo_8
        this.add.image(801, 659, "iceberg", "Símbolo 8");

        // aqua
        const aqua = this.add.sprite(1266, 331, "iceberg", "aqua0001");

        // sprite_18
        this.add.image(724, 487, "iceberg", "sprite 18");

        // lists
        const sort = [];

        // aqua (components)
        new SimpleButton(aqua);
        const aquaAnimation = new Animation(aqua);
        aquaAnimation.key = "aqua";
        aquaAnimation.end = 81;
        const aquaMoveTo = new MoveTo(aqua);
        aquaMoveTo.x = 1216;
        aquaMoveTo.y = 393;

        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    // Write your code here

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
