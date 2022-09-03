
// You can write more code here

/* START OF COMPILED CODE */

import RoomScene from "../RoomScene";
import Animation from "../../components/Animation";
import ShowHint from "../../components/ShowHint";
import SimpleButton from "../../components/SimpleButton";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Mineint extends RoomScene {

    constructor() {
        super("Mineint");

        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            'cave': () => null,
            'mine': () => this.triggerRoom(70, 527, 712),
            'rescue': () => null,
            'surfer': () => null,

        }        
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("mineint-pack", "assets/media/rooms/mineint/mineint-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        const bg = this.add.image(882, 479.55536663014095, "mineint", "bg");
        bg.setOrigin(0.5, 0.5040928720845831);

        // s_mbolo_35
        this.add.image(579, 501, "mineint", "Símbolo 35");

        // rescue0001
        const rescue0001 = this.add.sprite(253, -28, "mineint", "rescue0001");

        // button
        const button = this.add.image(250, 88, "mineint", "button");

        // s_mbolo_33
        this.add.image(1193, 810, "mineint", "Símbolo 33");

        // symbol_5
        const symbol_5 = this.add.image(712.4138180538076, 571.0491090053631, "mineint", "Symbol 5");
        symbol_5.setOrigin(0.4697865511452747, 1.0079669159463451);

        // s_mbolo_37
        this.add.image(252, 412, "mineint", "Símbolo 37");

        // shape_17
        this.add.image(167, 542, "mineint", "Shape 17");

        // shape_45
        this.add.image(866, 533, "mineint", "Shape 45");

        // sprite_28
        const sprite_28 = this.add.image(1269, 743, "mineint", "sprite 28");

        // arc2
        this.add.image(1248, 658, "mineint", "arc2");

        // s_mbolo_34
        this.add.image(1234, 574, "mineint", "Símbolo 34");

        // arc1
        this.add.image(941, 121, "mineint", "arc1");

        // s_mbolo_40
        this.add.image(1166, 207, "mineint", "Símbolo 40");

        // s_mbolo_39
        this.add.image(563, 156, "mineint", "Símbolo 39");

        // lists
        const sort = [symbol_5];

        // rescue0001 (components)
        const rescue0001Animation = new Animation(rescue0001);
        rescue0001Animation.key = "rescue";
        rescue0001Animation.start = 10;
        rescue0001Animation.end = 11;
        rescue0001Animation.repeat = 0;
        rescue0001Animation.autoPlay = false;
        rescue0001Animation.onHover = true;

        // button (components)
        const buttonShowHint = new ShowHint(button);
        buttonShowHint.text = "Play Puffle Rescue";
        new SimpleButton(button);

        // sprite_28 (components)
        const sprite_28ShowHint = new ShowHint(sprite_28);
        sprite_28ShowHint.text = "Play Cart Surfer";
        new SimpleButton(sprite_28);

        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
