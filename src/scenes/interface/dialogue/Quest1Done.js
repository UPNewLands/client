
// You can write more code here

/* START OF COMPILED CODE */

import BaseContainer from "../../base/BaseContainer";
import Interactive from "../../components/Interactive";
import Button from "../../components/Button";
import Animation from "../../components/Animation";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Quest1Done extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 406, y ?? 650);

        // dialogue_2
        const dialogue_2 = scene.add.container(-406, -650);
        dialogue_2.visible = false;
        this.add(dialogue_2);

        // rectangle
        const rectangle = scene.add.rectangle(746, 478, 128, 128);
        rectangle.scaleX = 12.45414843162558;
        rectangle.scaleY = 8.033582834174968;
        rectangle.alpha = 0.5;
        rectangle.isFilled = true;
        dialogue_2.add(rectangle);

        // globe
        const globe = scene.add.image(956, 791, "dialogue", "globe");
        dialogue_2.add(globe);

        // ok
        const ok = scene.add.image(1342, 842, "dialogue", "ok");
        dialogue_2.add(ok);

        // text
        const text = scene.add.text(1309, 827, "", {});
        text.text = "Close";
        text.setStyle({ "color": "#858585ff", "fontFamily": "Burbank Small", "fontSize": "25px" });
        dialogue_2.add(text);

        // text_1
        const text_1 = scene.add.text(574, 716, "", {});
        text_1.text = "You can visit my lab through here, get free items and check \nif I need more help, there will be a lot of surprises!";
        text_1.setStyle({ "color": "#858585ff", "fontFamily": "Burbank Small", "fontSize": "25px" });
        dialogue_2.add(text_1);

        // gary_happy
        const gary_happy = scene.add.image(239, 709, "dialogue", "gary-happy");
        dialogue_2.add(gary_happy);

        // party_icon
        const party_icon = scene.add.sprite(1157, 223, "dialogue", "party-icon0001");
        dialogue_2.add(party_icon);

        // container_1
        const container_1 = scene.add.container(-406, -650);
        this.add(container_1);

        // rectangle_2
        const rectangle_2 = scene.add.rectangle(746, 482, 128, 128);
        rectangle_2.scaleX = 12.45414843162558;
        rectangle_2.scaleY = 8.033582834174968;
        rectangle_2.alpha = 0.5;
        rectangle_2.isFilled = true;
        container_1.add(rectangle_2);

        // gary_happy_2
        const gary_happy_2 = scene.add.image(239, 713, "dialogue", "gary-happy");
        container_1.add(gary_happy_2);

        // globe_2
        const globe_2 = scene.add.image(956, 795, "dialogue", "globe");
        container_1.add(globe_2);

        // text_4
        const text_4 = scene.add.text(574, 720, "", {});
        text_4.text = "Great, you got all of them! I'll start working on my compost then. \nYou can come to my lab and see my work!";
        text_4.setStyle({ "color": "#858585ff", "fontFamily": "Burbank Small", "fontSize": "25px" });
        container_1.add(text_4);

        // next_1
        const next_1 = scene.add.image(1334, 849, "dialogue", "next");
        container_1.add(next_1);

        // rectangle (components)
        new Interactive(rectangle);

        // ok (components)
        const okButton = new Button(ok);
        okButton.spriteName = "ok";
        okButton.callback = () => this.finishDialog();

        // party_icon (components)
        const party_iconAnimation = new Animation(party_icon);
        party_iconAnimation.key = "party-icon";
        party_iconAnimation.end = 20;
        // party_iconAnimation.pause(party_iconAnimation.currentAnim.frames[20]);
        party_iconAnimation.repeat = 0;
        party_iconAnimation.autoPlay = false;
        party_iconAnimation.hideOnComplete = true;

        // rectangle_2 (components)
        new Interactive(rectangle_2);

        // next_1 (components)
        const next_1Button = new Button(next_1);
        next_1Button.spriteName = "next";
        next_1Button.callback = () => this.firstDialog();;

        /* START-USER-CTR-CODE */
        this.container_1 = container_1;
        this.dialogue_2 = dialogue_2;
        /* END-USER-CTR-CODE */
    }

    /* START-USER-CODE */

    firstDialog(){
        this.container_1.visible = false;
        this.dialogue_2.visible = true; 
    }

    finishDialog(){
        this.visible = false;
        this.world.interface.main.icon_1.visible = true;
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
