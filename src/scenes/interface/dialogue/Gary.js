
// You can write more code here

/* START OF COMPILED CODE */

import BaseContainer from "../../base/BaseContainer";
import Interactive from "../../components/Interactive";
import Button from "../../components/Button";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Gary extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 262, y ?? 677);

        // dialogue_1
        const dialogue_1 = scene.add.container(-262, -677);
        dialogue_1.visible = false;
        this.add(dialogue_1);

        // rectangle_1
        const rectangle_1 = scene.add.rectangle(763, 484, 128, 128);
        rectangle_1.scaleX = 12.45414843162558;
        rectangle_1.scaleY = 8.033582834174968;
        rectangle_1.alpha = 0.5;
        rectangle_1.isFilled = true;
        dialogue_1.add(rectangle_1);

        // gary_happy
        const gary_happy = scene.add.image(256, 715, "dialogue", "gary-happy");
        dialogue_1.add(gary_happy);

        // globe
        const globe = scene.add.image(973, 797, "dialogue", "globe");
        dialogue_1.add(globe);

        // next
        const next = scene.add.image(1389, 854, "dialogue", "next");
        dialogue_1.add(next);

        // text_1
        const text_1 = scene.add.text(591, 722, "", {});
        text_1.text = "Happy Halloween Penguin! Are you ready for the pumpkin harvest? \nI've been trying to create big and fast-grow pumpkin to plant all over \nthe island!";
        text_1.setStyle({ "color": "#858585ff", "fontFamily": "Burbank Small", "fontSize": "25px" });
        dialogue_1.add(text_1);

        // dialogue_2
        const dialogue_2 = scene.add.container(-262, -677);
        dialogue_2.visible = false;
        this.add(dialogue_2);

        // rectangle
        const rectangle = scene.add.rectangle(763, 484, 128, 128);
        rectangle.scaleX = 12.45414843162558;
        rectangle.scaleY = 8.033582834174968;
        rectangle.alpha = 0.5;
        rectangle.isFilled = true;
        dialogue_2.add(rectangle);

        // gary_happy_1
        const gary_happy_1 = scene.add.image(256, 715, "dialogue", "gary-happy");
        dialogue_2.add(gary_happy_1);

        // globe_1
        const globe_1 = scene.add.image(973, 797, "dialogue", "globe");
        dialogue_2.add(globe_1);

        // text
        const text = scene.add.text(591, 722, "", {});
        text.text = "I will need some candy to start powering the new compost I am making, \ndo you think you can find it? They look like this, make sure to look \nacross the island!";
        text.setStyle({ "color": "#858585ff", "fontFamily": "Burbank Small", "fontSize": "25px" });
        dialogue_2.add(text);

        // ok
        const ok = scene.add.image(1359, 848, "dialogue", "ok");
        dialogue_2.add(ok);

        // text_2
        const text_2 = scene.add.text(1326, 833, "", {});
        text_2.text = "Close";
        text_2.setStyle({ "color": "#858585ff", "fontFamily": "Burbank Small", "fontSize": "25px" });
        dialogue_2.add(text_2);

        // candy_1
        const candy_1 = scene.add.image(973, 384, "dialogue", "candy_1");
        dialogue_2.add(candy_1);

        // dialogue_3
        const dialogue_3 = scene.add.container(-262, -677);
        this.add(dialogue_3);

        // rectangle_2
        const rectangle_2 = scene.add.rectangle(763, 484, 128, 128);
        rectangle_2.scaleX = 12.45414843162558;
        rectangle_2.scaleY = 8.033582834174968;
        rectangle_2.alpha = 0.5;
        rectangle_2.isFilled = true;
        dialogue_3.add(rectangle_2);

        // gary_happy_2
        const gary_happy_2 = scene.add.image(256, 715, "dialogue", "gary-happy");
        dialogue_3.add(gary_happy_2);

        // globe_2
        const globe_2 = scene.add.image(973, 797, "dialogue", "globe");
        dialogue_3.add(globe_2);

        // text_4
        const text_4 = scene.add.text(591, 722, "", {});
        text_4.text = "Great, you got all of them! I'll start working on my compost then. \nYou can come to my lab and see my work!";
        text_4.setStyle({ "color": "#858585ff", "fontFamily": "Burbank Small", "fontSize": "25px" });
        dialogue_3.add(text_4);

        // ok_1
        const ok_1 = scene.add.image(1359, 848, "dialogue", "ok");
        dialogue_3.add(ok_1);

        // text_5
        const text_5 = scene.add.text(1326, 833, "", {});
        text_5.text = "Close";
        text_5.setStyle({ "color": "#858585ff", "fontFamily": "Burbank Small", "fontSize": "25px" });
        dialogue_3.add(text_5);

        // success
        const success = scene.add.container(-262, -677);
        success.visible = false;
        this.add(success);

        // tiny_globe
        const tiny_globe = scene.add.image(1221, 324, "dialogue", "tiny-globe");
        success.add(tiny_globe);

        // gary_happy_tiny
        const gary_happy_tiny = scene.add.image(1434, 314, "dialogue", "gary-happy-tiny");
        success.add(gary_happy_tiny);

        // text_3
        const text_3 = scene.add.text(1073, 283, "", {});
        text_3.text = "Great! \nYou found one candy!";
        text_3.setStyle({ "color": "#858585ff", "fontFamily": "Burbank Small", "fontSize": "25px" });
        success.add(text_3);

        // rectangle_1 (components)
        new Interactive(rectangle_1);

        // next (components)
        const nextButton = new Button(next);
        nextButton.spriteName = "next";
        nextButton.callback = () => this.firstDialog();;

        // ok (components)
        const okButton = new Button(ok);
        okButton.spriteName = "ok";
        okButton.callback = () => this.visible = false;;

        // ok_1 (components)
        const ok_1Button = new Button(ok_1);
        ok_1Button.spriteName = "ok";
        ok_1Button.callback = () => this.visible = false;;

        this.dialogue_1 = dialogue_1;
        this.dialogue_2 = dialogue_2;
        this.dialogue_3 = dialogue_3;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }

    /** @type {Phaser.GameObjects.Container} */
    dialogue_1;
    /** @type {Phaser.GameObjects.Container} */
    dialogue_2;
    /** @type {Phaser.GameObjects.Container} */
    dialogue_3;

    /* START-USER-CODE */

    firstDialog(){
        this.dialogue_1.visible = false;
        this.dialogue_2.visible = true; 
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
