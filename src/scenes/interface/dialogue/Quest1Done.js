
// You can write more code here

/* START OF COMPILED CODE */

import BaseContainer from "../../base/BaseContainer";
import Button from "../../components/Button";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Quest1Done extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 406, y ?? 650);

        // rectangle_2
        const rectangle_2 = scene.add.rectangle(346, -164, 128, 128);
        rectangle_2.scaleX = 12.45414843162558;
        rectangle_2.scaleY = 8.033582834174968;
        rectangle_2.alpha = 0.5;
        rectangle_2.isFilled = true;
        this.add(rectangle_2);

        // globe_2
        const globe_2 = scene.add.image(556, 149, "dialogue", "globe");
        this.add(globe_2);

        // ok_1
        const ok_1 = scene.add.image(942, 200, "dialogue", "ok");
        this.add(ok_1);

        // gary_happy_2
        const gary_happy_2 = scene.add.image(-161, 67, "dialogue", "gary-happy");
        this.add(gary_happy_2);

        // text_4
        const text_4 = scene.add.text(174, 74, "", {});
        text_4.text = "Great, you got all of them! I'll start working on my compost then. \nYou can come to my lab and see my work!";
        text_4.setStyle({ "color": "#858585ff", "fontFamily": "Burbank Small", "fontSize": "25px" });
        this.add(text_4);

        // text_5
        const text_5 = scene.add.text(909, 185, "", {});
        text_5.text = "Close";
        text_5.setStyle({ "color": "#858585ff", "fontFamily": "Burbank Small", "fontSize": "25px" });
        this.add(text_5);

        // ok_1 (components)
        const ok_1Button = new Button(ok_1);
        ok_1Button.spriteName = "ok";
        ok_1Button.callback = () => this.visible = false;;

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
