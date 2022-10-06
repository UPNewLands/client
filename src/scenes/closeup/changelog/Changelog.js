
// You can write more code here

/* START OF COMPILED CODE */

import BaseContainer from "../../base/BaseContainer";
import Interactive from "../../components/Interactive";
import SimpleButton from "../../components/SimpleButton";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Changelog extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 504.2788701127459, y ?? 302.8407567072438);

        // block
        const block = scene.add.rectangle(257, 177, 1520, 960);
        block.isFilled = true;
        block.fillColor = 0;
        block.fillAlpha = 0.2;
        this.add(block);

        // changelog
        const changelog = scene.add.image(255.7211298872541, 177.15924329275617, "newinterface", "changelog");
        this.add(changelog);

        // closepanel
        const closepanel = scene.add.image(710, -165, "newinterface", "closepanel");
        this.add(closepanel);

        // text_1
        const text_1 = scene.add.text(-60, -149, "", {});
        text_1.text = "What's New";
        text_1.setStyle({ "fontFamily": "Burbank Regular Bold", "fontSize": "100px", "fontStyle": "bold" });
        this.add(text_1);

        // text_2
        const text_2 = scene.add.text(-47, -53, "", {});
        text_2.text = "October 02, 2022";
        text_2.setStyle({ "fontFamily": "Burbank Small", "fontSize": "26px" });
        this.add(text_2);

        // text_3
        const text_3 = scene.add.text(286, 507, "", {});
        text_3.text = "Follow us for more information";
        text_3.setStyle({ "fontFamily": "Burbank Small", "fontSize": "26px" });
        this.add(text_3);

        // text_4
        const text_4 = scene.add.text(256, 225, "", {});
        text_4.text = "v1.0.0    2022-05-10\n\n- 🎉 first release!";
        text_4.setStyle({ "fontFamily": "Burbank Small", "fontSize": "25px" });
        this.add(text_4);

        // block (components)
        new Interactive(block);

        // closepanel (components)
        const closepanelSimpleButton = new SimpleButton(closepanel);
        closepanelSimpleButton.callback = () => { this.visible = false };

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
