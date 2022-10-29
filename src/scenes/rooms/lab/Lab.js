
// You can write more code here

/* START OF COMPILED CODE */

import RoomScene from "../RoomScene";
import Animation from "../../components/Animation";
import Button from "../../components/Button";
import MoveTo from "../../components/MoveTo";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Lab extends RoomScene {

    constructor() {
        super("Lab");

        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            'exit': () => this.triggerRoom(1, 1154, 435),
        }
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("lab-pack", "assets/media/rooms/lab/lab-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        this.add.image(719, 486, "lab", "bg");

        // effect20001
        const effect20001 = this.add.sprite(780, 241, "lab", "effect20001");

        // effect10001
        const effect10001 = this.add.sprite(769, 245, "lab", "effect10001");

        // symbol_191
        this.add.image(278, 370, "lab", "Symbol 191");

        // symbol_509
        this.add.image(1472, 592, "lab", "Symbol 509");

        // door
        const door = this.add.image(773, 821, "lab", "door");

        // s_mbolo_1
        this.add.image(93, 628, "lab", "Símbolo 1");

        // s_mbolo
        const s_mbolo = this.add.image(229, 475, "lab", "Símbolo 4");
        s_mbolo.flipX = true;

        // s_mbolo_4
        this.add.image(1325, 473, "lab", "Símbolo 4");

        // s_mbolo_5
        this.add.image(776, 338, "lab", "Símbolo 5");

        // lever0001
        const lever0001 = this.add.sprite(407, 111, "lab", "lever0001");

        // symbol_645
        this.add.image(760, 456, "lab", "Symbol 645");

        // symbol
        this.add.image(363, 309, "lab", "Symbol 191");

        // symbol_555
        this.add.image(1139, 123, "lab", "Symbol 555");

        // gary
        const gary = this.add.image(1173, 302, "lab", "gary");
        gary.scaleX = 1.8;
        gary.scaleY = 1.8;

        // effect20001 (components)
        const effect20001Animation = new Animation(effect20001);
        effect20001Animation.key = "effect2";
        effect20001Animation.end = 100;
        effect20001Animation.stopOnOut = false;

        // effect10001 (components)
        const effect10001Animation = new Animation(effect10001);
        effect10001Animation.key = "effect1";
        effect10001Animation.end = 100;
        effect10001Animation.stopOnOut = false;

        // door (components)
        const doorButton = new Button(door);
        doorButton.spriteName = "door";
        doorButton.activeFrame = false;
        const doorMoveTo = new MoveTo(door);
        doorMoveTo.x = 779;
        doorMoveTo.y = 784;

        // lever0001 (components)
        const lever0001Animation = new Animation(lever0001);
        lever0001Animation.key = "lever";
        lever0001Animation.end = 96;
        lever0001Animation.autoPlay = false;
        lever0001Animation.onHover = true;
        lever0001Animation.stopOnOut = false;

        // gary (components)
        const garyButton = new Button(gary);
        garyButton.spriteName = "gary";
        garyButton.callback = () => this.world.interface.main.random.visible = true;
        garyButton.activeFrame = false;

        this.events.emit("scene-awake");
    }

    /* START-USER-CODE */

    // Write your code here

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
