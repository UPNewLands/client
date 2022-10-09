
// You can write more code here

/* START OF COMPILED CODE */

import RoomScene from "../RoomScene";
import Button from "../../components/Button";
import MoveTo from "../../components/MoveTo";
import Animation from "../../components/Animation";
import SimpleButton from "../../components/SimpleButton";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Beacon extends RoomScene {

    constructor() {
        super("Beacon");

        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            'jetpack': null,
            'lighthouse': () => this.triggerRoom(31, 380, 237),
            'telescope': () => this.world.interface.main.telescope.visible = true
        }
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("beacon-pack", "assets/media/rooms/beacon/beacon-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        this.add.image(852, 566, "beacon", "bg");

        // s_mbolo_2
        this.add.image(781, 613, "beacon", "Símbolo 2");

        // monocular
        this.add.image(258, 288, "beacon", "monocular");

        // jetpack
        const jetpack = this.add.image(1337, 561, "beacon", "jetpack");

        // s_mbolo_4
        this.add.image(193, 585, "beacon", "Símbolo 4");

        // fareoff
        this.add.image(695, 359, "beacon", "fareoff");

        // fareon
        const fareon = this.add.sprite(695, 359, "beacon", "fareon");

        // switch0001
        const switch0001 = this.add.sprite(501, 456, "beacon", "switch0001");

        // symbol_299
        this.add.image(707, 412, "beacon", "Symbol 299");

        // symbol_301
        this.add.image(719, 106, "beacon", "Symbol 301");

        // lightsoff
        this.add.image(699, 364, "beacon", "lightsoff");

        // lights
        const lights = this.add.sprite(699, 364, "beacon", "lights");

        // jetpack (components)
        const jetpackButton = new Button(jetpack);
        jetpackButton.spriteName = "jetpack";
        const jetpackMoveTo = new MoveTo(jetpack);
        jetpackMoveTo.x = 1337;
        jetpackMoveTo.y = 561;

        // fareon (components)
        new Animation(fareon);

        // switch0001 (components)
        const switch0001SimpleButton = new SimpleButton(switch0001);
        switch0001SimpleButton.callback = () => { this.onClickSwitch() };
        const switch0001Animation = new Animation(switch0001);
        switch0001Animation.key = "switch";
        switch0001Animation.end = 19;
        switch0001Animation.repeat = 0;
        switch0001Animation.autoPlay = false;
        switch0001Animation.onHover = true;
        switch0001Animation.stopOnOut = false;

        // lights (components)
        new Animation(lights);

        this.events.emit("scene-awake");
    }

    /* START-USER-CODE */

    onClickSwitch(){
        // this.fareon.visible = false;
        // this.lights.visible = false;
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
