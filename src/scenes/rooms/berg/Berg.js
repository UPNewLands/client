
// You can write more code here

/* START OF COMPILED CODE */

import RoomScene from "../RoomScene";
import Animation from "../../components/Animation";
import SimpleButton from "../../components/SimpleButton";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Berg extends RoomScene {

    constructor() {
        super("Berg");

        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            'aqua': null
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

        // booom0001
        const booom0001 = this.add.sprite(626, 245, "iceberg", "booom0001");

        // iceberg
        this.add.image(670, 476, "iceberg", "iceberg");

        // platform0001
        const platform0001 = this.add.sprite(627, 496, "iceberg", "platform0001");

        // aqua0001
        const aqua0001 = this.add.sprite(1265, 319, "berg", "aqua0001");
        aqua0001.setOrigin(0.5, 0.4014336917562724);

        // snow
        this.add.image(638, 596, "iceberg", "snow");

        // lights0001
        const lights0001 = this.add.sprite(715, 679, "iceberg", "lights0001");

        // s_mbolo_9
        const s_mbolo_9 = this.add.image(588.1650465735426, 419.5404346863972, "iceberg", "Símbolo 9");
        s_mbolo_9.setOrigin(0.5115199304673699, 0.8145164395745075);

        // s_mbolo_91
        const s_mbolo_91 = this.add.image(575.8624611887145, 660.4028958751118, "iceberg", "Símbolo 91");
        s_mbolo_91.setOrigin(0.4874379940380601, 0.8541195064216156);

        // lists
        const sort = [s_mbolo_91, s_mbolo_9];

        // booom0001 (components)
        const booom0001Animation = new Animation(booom0001);
        booom0001Animation.key = "booom";
        booom0001Animation.end = 72;

        // platform0001 (components)
        const platform0001Animation = new Animation(platform0001);
        platform0001Animation.key = "platform";
        platform0001Animation.end = 72;

        // aqua0001 (components)
        new SimpleButton(aqua0001);
        const aqua0001Animation = new Animation(aqua0001);
        aqua0001Animation.key = "aqua";
        aqua0001Animation.start = 171;
        aqua0001Animation.end = 348;
        aqua0001Animation.repeat = 0;
        aqua0001Animation.autoPlay = false;
        aqua0001Animation.onHover = true;

        // lights0001 (components)
        const lights0001Animation = new Animation(lights0001);
        lights0001Animation.key = "lights";
        lights0001Animation.end = 96;

        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    // Write your code here

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
