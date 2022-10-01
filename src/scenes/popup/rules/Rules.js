
// You can write more code here

/* START OF COMPILED CODE */

import BaseContainer from "../../base/BaseContainer";
import Interactive from "../../components/Interactive";
import Button from "../../components/Button";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Rules extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 82.98340611710172, y ?? -49.334967884694784);

        // block
        const block = scene.add.rectangle(677, 529, 1520, 960);
        block.isFilled = true;
        block.fillColor = 0;
        block.fillAlpha = 0.2;
        this.add(block);

        // bg
        const bg = scene.add.image(677.0165938828983, 529.3349678846948, "rules", "bg");
        this.add(bg);

        // rules
        const rules = scene.add.image(738, 470, "rules", "rules");
        this.add(rules);

        // icons
        const icons = scene.add.image(423, 478, "rules", "icons");
        this.add(icons);

        // title
        const title = scene.add.image(688, 192, "rules", "title");
        this.add(title);

        // button
        const button = scene.add.image(674, 797, "rules", "button");
        this.add(button);

        // s_mbolo_5
        const s_mbolo_5 = scene.add.image(615, 797, "rules", "Símbolo 5");
        this.add(s_mbolo_5);

        // block (components)
        new Interactive(block);

        // button (components)
        const buttonButton = new Button(button);
        buttonButton.spriteName = "button";
        buttonButton.callback = () => { this.visible = false };

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
