
// You can write more code here

/* START OF COMPILED CODE */

import RoomScene from "../RoomScene";
import Button from "../../components/Button";
import MoveTo from "../../components/MoveTo";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Minecave extends RoomScene {

    constructor() {
        super("Minecave");

        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            'hidden': () => this.triggerRoom(91, 204, 514),
            'mineint': () => this.triggerRoom(71, 385, 809),
            'hats': () => this.interface.prompt.showItem(429)
        }
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("cavemine-pack", "assets/media/rooms/minecave/cavemine-pack.json");
    }

    /** @returns {void} */
    _create() {

        // background
        this.add.image(887, 484, "cavemine", "background");

        // s_mbolo_1
        this.add.image(211, 229, "cavemine", "Símbolo 1");

        // symbol_538
        this.add.image(715, 85, "cavemine", "Symbol 538");

        // symbol_287
        this.add.image(575, 285, "cavemine", "Symbol 287");

        // symbol_158
        this.add.image(594, 361, "cavemine", "Symbol 158");

        // symbol_600001
        this.add.image(722, 336, "cavemine", "Symbol 600001");

        // door2
        const door2 = this.add.image(920, 384, "cavemine", "door2");

        // hat
        const hat = this.add.image(722, 441, "cavemine", "hat");

        // symbol_135
        this.add.image(1146, 533, "cavemine", "Symbol 135");

        // s_mbolo_2
        this.add.image(1413, 571, "cavemine", "Símbolo 2");

        // symbol_54
        this.add.image(1437, 679, "cavemine", "Symbol 54");

        // symbol_521
        this.add.image(394, 813, "cavemine", "Symbol 521");

        // symbol_519
        this.add.image(269, 762, "cavemine", "Symbol 519");

        // symbol_523
        this.add.image(220, 847, "cavemine", "Symbol 523");

        // symbol_2
        this.add.image(417, 459, "cavemine", "Symbol 2");

        // symbol_1
        this.add.image(235, 424, "cavemine", "Symbol 1");

        // symbol_507
        this.add.image(271, 475, "cavemine", "Symbol 507");

        // door1
        const door1 = this.add.image(126, 523, "cavemine", "door1");

        // symbol_517
        this.add.image(47, 352, "cavemine", "Symbol 517");

        // symbol_591
        this.add.image(758, 484, "cavemine", "Symbol 591");

        // door2 (components)
        const door2Button = new Button(door2);
        door2Button.spriteName = "door2";
        door2Button.activeFrame = false;
        const door2MoveTo = new MoveTo(door2);
        door2MoveTo.x = 941;
        door2MoveTo.y = 443;

        // hat (components)
        const hatButton = new Button(hat);
        hatButton.spriteName = "hat";
        const hatMoveTo = new MoveTo(hat);
        hatMoveTo.x = 675;
        hatMoveTo.y = 475;

        // door1 (components)
        const door1Button = new Button(door1);
        door1Button.spriteName = "door1";
        door1Button.activeFrame = false;
        const door1MoveTo = new MoveTo(door1);
        door1MoveTo.x = 154;
        door1MoveTo.y = 643;

        this.events.emit("scene-awake");
    }

    /* START-USER-CODE */

    showDoor1(){
        this.door1light.visible = true;
    }

    hideDoor1(){
        this.door1light.visible = false;
    }

    showDoor2(){
        this.door2light.visible = true;
    }

    hideDoor2(){
        this.door2light.visible = false;
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
