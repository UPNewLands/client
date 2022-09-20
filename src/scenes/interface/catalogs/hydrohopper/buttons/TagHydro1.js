
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import Button from "../../../../components/Button";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class TagHydro1 extends Phaser.GameObjects.Container {

        constructor(scene, x, y, texture, frame) {
        super(scene, x ?? 0, y ?? 0, texture || "hydrohopper", frame ?? "taghydro");

        this.item = 712;


        this.setOrigin(0, 0);

        // button
        const button = scene.add.image(1, 3, "hydrohopper", "button");
        button.scaleX = 1.3;
        button.scaleY = 1.3;
        button.angle = 26;
        this.add(button);

        // label0001
        const label0001 = scene.add.image(0, 0, "hydrohopper", "label0001");
        this.add(label0001);

        // text_1
        const text_1 = scene.add.text(-14, -20, "", {});
        text_1.angle = 25;
        text_1.text = "300";
        text_1.setStyle({ "color": "#5F3C21", "fontFamily": "Burbank Small", "fontSize": "25px", "fontStyle": "bold" });
        this.add(text_1);

        // button (components)
        const buttonButton = new Button(button);
        buttonButton.spriteName = "button";
        buttonButton.callback = () => this.scene.buy(this.item);

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
