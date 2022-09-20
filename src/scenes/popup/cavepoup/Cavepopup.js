import BaseContainer from '@scenes/base/BaseContainer'
import { Button, Interactive, NineSlice, SimpleButton } from '@components/components'

// You can write more code here

/* START OF COMPILED CODE */

export default class Cavepopup extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        // rectangle_1
        const rectangle_1 = scene.add.rectangle(765, 486, 128, 128);
        rectangle_1.scaleX = 12.441341585560185;
        rectangle_1.scaleY = 8.107324625518155;
        rectangle_1.isFilled = true;
        rectangle_1.fillColor = 0;
        rectangle_1.fillAlpha = 0.4;
        this.add(rectangle_1);

        // symbol_10
        const symbol_10 = scene.add.image(306, 659, "cavepopup", "Symbol 10");
        this.add(symbol_10);

        // nube
        const nube = scene.add.image(887, 791, "cavepopup", "Nube");
        this.add(nube);

        // closebutton
        const closebutton = scene.add.image(1194, 869, "cavepopup", "closebutton");
        this.add(closebutton);

        // s_mbolo_5
        const s_mbolo_5 = scene.add.image(1195, 872, "cavepopup", "Símbolo 5");
        this.add(s_mbolo_5);

        // s_mbolo_3
        const s_mbolo_3 = scene.add.image(944, 781, "cavepopup", "Símbolo 3");
        this.add(s_mbolo_3);

        // rectangle_1 (components)
        new Interactive(rectangle_1);

        // closebutton (components)
        const closebuttonButton = new Button(closebutton);
        closebuttonButton.spriteName = "closebutton";
        closebuttonButton.callback = () => { this.visible = false };

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
