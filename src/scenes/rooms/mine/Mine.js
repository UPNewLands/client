
// You can write more code here

/* START OF COMPILED CODE */

import RoomScene from "../RoomScene";
import Animation from "../../components/Animation";
import SimpleButton from "../../components/SimpleButton";
import MoveTo from "../../components/MoveTo";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Mine extends RoomScene {

    constructor() {
        super("Mine");

        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            'mineint': () => this.triggerRoom(71, 718, 226),
            'park': () => this.triggerRoom(80, 380, 577),
        }
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("mine-pack", "assets/media/rooms/mine/mine-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        this.add.image(783, 476, "mine", "bg");

        // trees
        this.add.image(782, 208, "mine", "trees");

        // snow
        this.add.image(923, 444, "mine", "snow");

        // trees3
        this.add.image(365, 194, "mine", "trees3");

        // trees2
        this.add.image(1416, 259, "mine", "trees2");

        // s_mbolo_10
        this.add.image(1487, 528, "mine", "Símbolo 10");

        // s_mbolo_33
        this.add.image(927, 836, "mine", "Símbolo 33");

        // symbol_3
        this.add.image(611, 362, "mine", "Symbol 3");

        // s_mbolo_26
        this.add.image(322, 456, "mine", "Símbolo 26");

        // kart0001
        const kart0001 = this.add.sprite(252, 570, "mine", "kart0001");

        // s_mbolo_35
        this.add.image(81, 511, "mine", "Símbolo 35");

        // s_mbolo_31
        this.add.image(472, 453, "mine", "Símbolo 31");

        // s_mbolo_36
        this.add.image(192, 530, "mine", "Símbolo 36");

        // shape_45
        this.add.image(473, 373, "mine", "Shape 45");

        // s_mbolo_39
        this.add.image(188, 574, "mine", "Símbolo 39");

        // s_mbolo_40
        this.add.image(297, 404, "mine", "Símbolo 40");

        // s_mbolo_41
        this.add.image(197, 301, "mine", "Símbolo 41");

        // s_mbolo_42
        this.add.image(189, 208, "mine", "Símbolo 42");

        // s_mbolo_44
        this.add.image(133, 696, "mine", "Símbolo 44");

        // shape_17
        this.add.image(127, 655, "mine", "Shape 17");

        // s_mbolo_32
        this.add.image(510, 554, "mine", "Símbolo 32");

        // leaves
        this.add.image(771, 669, "mine", "leaves");

        // s_mbolo_37
        this.add.image(490, 726, "mine", "Símbolo 37");

        // symbol_8
        this.add.image(865, 363, "mine", "Symbol 8");

        // sprite_280_copia
        this.add.image(734, 320, "mine", "Sprite 280 copia");

        // kart0001 (components)
        const kart0001Animation = new Animation(kart0001);
        kart0001Animation.key = "kart";
        kart0001Animation.repeat = 0;
        kart0001Animation.autoPlay = false;
        kart0001Animation.onHover = true;
        kart0001Animation.stopOnOut = false;
        new SimpleButton(kart0001);
        const kart0001MoveTo = new MoveTo(kart0001);
        kart0001MoveTo.x = 252;
        kart0001MoveTo.y = 570;

        this.events.emit("scene-awake");
    }

    /* START-USER-CODE */

    // Write your code here

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
