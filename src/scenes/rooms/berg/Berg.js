
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
        this.music = "berg_beta"

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("iceberg-pack", "assets/media/rooms/berg/iceberg-pack.json");
    }

    /** @returns {void} */
    _create() {

        // sky
        this.add.image(757, 138, "iceberg", "sky");

        // city
        this.add.image(1169, 95, "iceberg", "city");

        // sea
        this.add.image(760, 592, "iceberg", "sea");

        // s_mbolo_10
        this.add.image(704, 623, "iceberg", "Símbolo 10");

        // aqua0001
        const aqua0001 = this.add.sprite(1265, 319, "berg", "aqua0001");
        aqua0001.setOrigin(0.5, 0.4014336917562724);

        // snow
        this.add.image(638, 596, "iceberg", "snow");

        // shape_16
        this.add.image(670, 524, "iceberg", "shape 16");

        // lists
        const sort = [];

        // aqua0001 (components)
        new SimpleButton(aqua0001);
        const aqua0001Animation = new Animation(aqua0001);
        aqua0001Animation.key = "aqua";
        aqua0001Animation.start = 171;
        aqua0001Animation.end = 348;
        aqua0001Animation.repeat = 0;
        aqua0001Animation.autoPlay = false;
        aqua0001Animation.onHover = true;
        const aqua0001MoveTo = new MoveTo(aqua0001);
        aqua0001MoveTo.x = 1216;
        aqua0001MoveTo.y = 393;

        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    // Write your code here

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
