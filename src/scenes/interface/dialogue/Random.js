
// You can write more code here

/* START OF COMPILED CODE */

import BaseContainer from "../../base/BaseContainer";
import Interactive from "../../components/Interactive";
import Button from "../../components/Button";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Random extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 283, y ?? 474);

        // rectangle_1
        const rectangle_1 = scene.add.rectangle(485, 9, 128, 128);
        rectangle_1.scaleX = 12.45414843162558;
        rectangle_1.scaleY = 8.033582834174968;
        rectangle_1.alpha = 0.5;
        rectangle_1.isFilled = true;
        this.add(rectangle_1);

        // gary_happy
        const gary_happy = scene.add.image(-33, 241, "dialogue", "gary-happy");
        this.add(gary_happy);

        // globe
        const globe = scene.add.image(699, 311, "dialogue", "globe");
        this.add(globe);

        // ok
        const ok = scene.add.image(1106, 369, "dialogue", "ok");
        this.add(ok);

        // text_2
        const text_2 = scene.add.text(1073, 354, "", {});
        text_2.text = "Close";
        text_2.setStyle({ "color": "#858585ff", "fontFamily": "Burbank Small", "fontSize": "25px" });
        this.add(text_2);

        // text_1
        const text_1 = scene.add.text(329, 247, "", {});
        text_1.setStyle({ "color": "#858585ff", "fontFamily": "Burbank Small", "fontSize": "25px" });
        var dialogues = [
            "This might take me one day to finish!\nThis might take me one day to finish, or even two...",
            "Pumpkins... pum-kins?\nThis might take me one day to finish, or even two...",
            "Hmmm... Could I have some volunteers?\nThis might take me one day to finish, or even two...",
            "You're all dressed quite nicely.\nThis might take me one day to finish, or even two...",
            "Salutations!\nThis might take me one day to finish, or even two...",
            "It's scientifically impossible!\nThis might take me one day to finish, or even two...",
            "I've seen seeing things on my lab lately...\nThis might take me one day to finish, or even two...",
            "Cheese is very good on pizza!\nThis might take me one day to finish, or even two...",
            "Aha, I'm glad you could join me!\nThis might take me one day to finish, or even two..."
        ];
        var randomNumber = Math.round(Math.random() * (dialogues.length));
        text_1.text = dialogues[randomNumber];
        this.add(text_1);
        

        // rectangle_1 (components)
        new Interactive(rectangle_1);

        // ok (components)
        const okButton = new Button(ok);
        okButton.spriteName = "ok";
        okButton.callback = () => this.visible = false;;
        okButton.activeFrame = false;

        /* START-USER-CTR-CODE */
        this.text_1 = text_1;
        /* END-USER-CTR-CODE */
    }

    /* START-USER-CODE */

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
