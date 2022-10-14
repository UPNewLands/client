
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

        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Rectangle>} */
        this.sort;


        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            'cave': () => null,
            'mine': () => this.triggerRoom(70, 527, 712),
            'rescue': () => null,
            'surfer': () => null,

        }       

        this.music = "mine_int" 
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
        const symbol_5 = this.add.image(1856, 104, "mineint", "Symbol 5");
        symbol_5.setOrigin(0.4697865511452747, 1.0079669159463451);

        // s_mbolo_3
        this.add.image(254, 414, "mineint", "Símbolo 3");

        // shape_17
        this.add.image(167, 542, "mineint", "Shape 17");

        // sprite_28
        const sprite_28 = this.add.image(1269, 743, "mineint", "sprite 28");

        // s_mbolo_2
        this.add.image(1071, 397, "mineint", "Símbolo 2");

        // arc2
        this.add.image(1248, 658, "mineint", "arc2");

        // s_mbolo_34
        this.add.image(1234, 574, "mineint", "Símbolo 34");

        // arc1
        const arc1 = this.add.image(1019.5048632647514, 209.5038160994535, "mineint", "arc1");
        arc1.setOrigin(0.7308967585648217, 0.7514312959175136);

        // s_mbolo_40
        this.add.image(1166, 207, "mineint", "Símbolo 40");

        // s_mbolo_39
        this.add.image(563, 156, "mineint", "Símbolo 39");

        // s_mbolo_9
        const s_mbolo_9 = this.add.image(866, 559, "mineint", "Símbolo 9");
        s_mbolo_9.scaleX = 0.7;
        s_mbolo_9.scaleY = 0.7;

        // s_mbolo_5
        const s_mbolo_5 = this.add.image(867, 537, "mineint", "Símbolo 5");
        s_mbolo_5.scaleX = 0.7;
        s_mbolo_5.scaleY = 0.7;

        // fire0001
        const fire0001 = this.add.sprite(868, 528, "mineint", "fire0001");
        fire0001.scaleX = 0.7;
        fire0001.scaleY = 0.7;

        // s_mbolo_10
        const s_mbolo_10 = this.add.image(867, 525, "mineint", "Símbolo 10");
        s_mbolo_10.scaleX = 0.7;
        s_mbolo_10.scaleY = 0.7;

        // rectangle_1
        const rectangle_1 = this.add.rectangle(727.9623373893077, 1010.8184131293913, 128, 128);
        rectangle_1.scaleX = 12.859520868770415;
        rectangle_1.scaleY = 8.154825378452756;
        rectangle_1.setOrigin(0.48357390339744705, 1.0037454815105946);
        rectangle_1.alpha = 0.3;
        rectangle_1.isFilled = true;
        rectangle_1.fillColor = 1710618;

        // flash2
        const flash2 = this.add.image(182, 552, "mineint", "flash2");

        // flash
        const flash = this.add.image(870.3544964590334, 1285.677502093566, "mineint", "flash");
        flash.setOrigin(0.4818801127331054, 4.956413702937893);

        // flash_1
        const flash_1 = this.add.image(870.3544964590334, 1285.677502093566, "mineint", "flash");
        flash_1.setOrigin(0.4818801127331054, 4.956413702937893);

        // flash_2
        const flash_2 = this.add.image(870.3544964590334, 1285.677502093566, "mineint", "flash");
        flash_2.setOrigin(0.4818801127331054, 4.956413702937893);

        // flash_3
        const flash_3 = this.add.image(178, 550, "mineint", "flash");
        flash_3.scaleX = 0.3;
        flash_3.scaleY = 0.3;

        // lists
        const sort = [symbol_5, rectangle_1, flash, flash2, arc1];

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

        // fire0001 (components)
        const fire0001Animation = new Animation(fire0001);
        fire0001Animation.key = "fire";
        fire0001Animation.end = 11;

        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
