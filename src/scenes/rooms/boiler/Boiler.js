
// You can write more code here

/* START OF COMPILED CODE */

import RoomScene from "../RoomScene";
import Button from "../../components/Button";
import SimpleButton from "../../components/SimpleButton";
import MoveTo from "../../components/MoveTo";
import Animation from "../../components/Animation";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Boiler extends RoomScene {

    constructor() {
        super("Boiler");

        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            'dance': () => this.triggerRoom(13, 960, 473),
            'pool': () => null
        }

        this.music = "boiler"

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("boiler-pack", "assets/media/rooms/boiler/boiler-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        this.add.image(669, 617, "boiler", "bg");

        // symbol_16
        this.add.image(345, 753, "boiler", "Symbol 16");

        // symbol_23
        this.add.image(581, 165, "boiler", "Symbol 23");

        // door
        const door = this.add.image(588, 370, "boiler", "door");

        // symbol_25
        this.add.image(381, 596, "boiler", "Symbol 25");

        // s_mbolo_1
        this.add.image(144, 393, "boiler", "Símbolo 1");

        // s_mbolo_3
        this.add.image(603, 28, "boiler", "Símbolo 3");

        // symbol_20
        const symbol_20 = this.add.image(1024, 253, "boiler", "Symbol 20");

        // symbol_22
        this.add.image(868, 460, "boiler", "Symbol 22");

        // s_mbolo_2
        this.add.image(798, 164, "boiler", "Símbolo 2");

        // symbol_15
        this.add.image(1317, 347, "boiler", "Symbol 15");

        // lights0001
        const lights0001 = this.add.sprite(227, 660, "boiler", "lights0001");

        // machine1
        this.add.image(378, 747, "boiler", "machine1");

        // news0001
        const news0001 = this.add.sprite(304, 708, "boiler", "news0001");

        // machine2
        this.add.image(327, 845, "boiler", "machine2");

        // roll0001
        const roll0001 = this.add.sprite(310, 774, "boiler", "roll0001");

        // symbol_182
        const symbol_182 = this.add.image(745.8648912405165, 1030.5505338588346, "boiler", "Symbol 182");
        symbol_182.setOrigin(0.47716254267778674, 0.8996285403792021);

        // lists
        const sort = [symbol_182];

        // door (components)
        const doorButton = new Button(door);
        doorButton.spriteName = "door";
        doorButton.activeFrame = false;

        // symbol_20 (components)
        new SimpleButton(symbol_20);
        const symbol_20MoveTo = new MoveTo(symbol_20);
        symbol_20MoveTo.x = 1036;
        symbol_20MoveTo.y = 530;

        // lights0001 (components)
        const lights0001Animation = new Animation(lights0001);
        lights0001Animation.key = "lights";
        lights0001Animation.end = 36;

        // news0001 (components)
        const news0001Animation = new Animation(news0001);
        news0001Animation.key = "news";
        news0001Animation.end = 18;

        // roll0001 (components)
        const roll0001Animation = new Animation(roll0001);
        roll0001Animation.key = "roll";
        roll0001Animation.end = 7;

        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    // Write your code here

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
