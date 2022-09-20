
// You can write more code here

/* START OF COMPILED CODE */

import BaseContainer from "../../base/BaseContainer";
import Animation from "../../components/Animation";
import Button from "../../components/Button";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Telescope extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 708, y ?? 249);

        // close
        const close = scene.add.image(546, -131, "telescope", "close");
        this.add(close);

        // symbol_40001
        const symbol_40001 = scene.add.image(57, 208, "telescope", "Symbol 40001");
        this.add(symbol_40001);

        // s_mbolo_1
        const s_mbolo_1 = scene.add.image(54, 232, "telescope", "Símbolo 1");
        this.add(s_mbolo_1);

        // ship0001
        const ship0001 = scene.add.sprite(60, 76, "telescope", "ship0001");
        this.add(ship0001);

        // close_1
        const close_1 = scene.add.image(717, -179, "telescope", "close");
        this.add(close_1);

        // ship0001 (components)
        const ship0001Animation = new Animation(ship0001);
        ship0001Animation.key = "ship";
        ship0001Animation.end = 70;

        // close_1 (components)
        const close_1Button = new Button(close_1);
        close_1Button.spriteName = "close";
        close_1Button.callback = () => { this.visible = false };

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    /* START-USER-CODE */

    // Write your code here.

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
