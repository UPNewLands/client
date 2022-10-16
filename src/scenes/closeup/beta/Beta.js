
// You can write more code here

/* START OF COMPILED CODE */

import BaseContainer from "../../base/BaseContainer";
import Interactive from "../../components/Interactive";
import SimpleButton from "../../components/SimpleButton";
import Button from "../../components/Button";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Beta extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? -27.93463724182101, y ?? 103.12152068887252);

        // block
        const block = scene.add.rectangle(788, 377, 1520, 960);
        block.isFilled = true;
        block.fillColor = 0;
        block.fillAlpha = 0.2;
        this.add(block);

        // panel
        const panel = scene.add.image(787.9346372418211, 376.8784793111275, "newinterface", "panel");
        this.add(panel);

        // closepanel
        const closepanel = scene.add.image(1448, 15, "newinterface", "closepanel");
        this.add(closepanel);

        // card1
        const card1 = scene.add.image(238, 582, "newinterface", "card1");
        this.add(card1);

        // card2
        const card2 = scene.add.image(514, 176, "newinterface", "card2");
        this.add(card2);

        // card3
        const card3 = scene.add.image(819, 561, "newinterface", "card3");
        this.add(card3);

        // item1
        const item1 = scene.add.image(243, 314, "newinterface", "item1");
        item1.alpha = 0.5;
        item1.alphaTopLeft = 0.5;
        item1.alphaTopRight = 0.5;
        item1.alphaBottomLeft = 0.5;
        item1.alphaBottomRight = 0.5;
        this.add(item1);

        // item2
        const item2 = scene.add.image(527, 506, "newinterface", "item2");
        this.add(item2);

        // item3
        const item3 = scene.add.image(799, 273, "newinterface", "item3");
        item3.alpha = 0.5;
        item3.alphaTopLeft = 0.5;
        item3.alphaTopRight = 0.5;
        item3.alphaBottomLeft = 0.5;
        item3.alphaBottomRight = 0.5;
        this.add(item3);

        // item4
        const item4 = scene.add.image(1090, 409, "newinterface", "item4");
        item4.alpha = 0.5;
        item4.alphaTopLeft = 0.5;
        item4.alphaTopRight = 0.5;
        item4.alphaBottomLeft = 0.5;
        item4.alphaBottomRight = 0.5;
        this.add(item4);

        // item5
        const item5 = scene.add.image(1354, 358, "newinterface", "item5");
        item5.alpha = 0.5;
        item5.alphaTopLeft = 0.5;
        item5.alphaTopRight = 0.5;
        item5.alphaBottomLeft = 0.5;
        item5.alphaBottomRight = 0.5;
        this.add(item5);

        // block (components)
        new Interactive(block);

        // closepanel (components)
        const closepanelSimpleButton = new SimpleButton(closepanel);
        closepanelSimpleButton.callback = () => { this.visible = false };

        // card2 (components)
        const card2SimpleButton = new SimpleButton(card2);
        card2SimpleButton.callback = () => this.interface.prompt.showItem(37375);

        // item2 (components)
        const item2Button = new Button(item2);
        item2Button.spriteName = "item2";
        item2Button.callback = () => this.interface.prompt.showItem(37375);

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
