
// You can write more code here

/* START OF COMPILED CODE */

import BaseContainer from "../../base/BaseContainer";
import Interactive from "../../components/Interactive";
import SimpleButton from "../../components/SimpleButton";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Success extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 761, y ?? 159);

        // tiny_globe
        const tiny_globe = scene.add.image(455, 205, "dialogue", "tiny-globe");
        this.add(tiny_globe);

        // text_3
        const text_3 = scene.add.text(307, 164, "", {});
        text_3.text = "Great! \nYou found one candy!";
        text_3.setStyle({ "color": "#858585ff", "fontFamily": "Burbank Small", "fontSize": "25px" });
        this.add(text_3);

        // gary_happy_tiny
        const gary_happy_tiny = scene.add.image(668, 195, "dialogue", "gary-happy-tiny");
        this.add(gary_happy_tiny);

        // close
        const close = scene.add.image(722, 131, "dialogue", "close");
        this.add(close);

        // tiny_globe (components)
        new Interactive(tiny_globe);

        // text_3 (components)
        new Interactive(text_3);

        // gary_happy_tiny (components)
        new Interactive(gary_happy_tiny);

        // close (components)
        const closeSimpleButton = new SimpleButton(close);
        closeSimpleButton.callback = () => this.visible = false;;

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
