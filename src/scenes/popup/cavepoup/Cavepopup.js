
// You can write more code here

/* START OF COMPILED CODE */

import BaseContainer from "../../base/BaseContainer";
import Interactive from "../../components/Interactive";
import Button from "../../components/Button";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Cavepopup extends BaseContainer {

    constructor() {
        super("Cavepopup");

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _create() {

        // block
        const block = this.add.rectangle(762, 483, 128, 128);
        block.scaleX = 12.299342179980162;
        block.scaleY = 7.906074638229103;
        block.isFilled = true;
        block.fillColor = 0;
        block.fillAlpha = 0.2;

        // symbol_10
        this.add.image(312, 676, "cavepopup", "Symbol 10");

        // nube
        this.add.image(890, 786, "cavepopup", "Nube");

        // s_mbolo_3
        this.add.image(905, 779, "cavepopup", "Símbolo 3");

        // closebutton
        const closebutton = this.add.image(1205, 868, "cavepopup", "closebutton");

        // s_mbolo_5
        this.add.image(1205, 871, "cavepopup", "Símbolo 5");

        // block (components)
        new Interactive(block);

        // closebutton (components)
        const closebuttonButton = new Button(closebutton);
        closebuttonButton.spriteName = "closebutton";

        this.events.emit("scene-awake");
    }

    /* START-USER-CODE */

    // Write your code here
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
