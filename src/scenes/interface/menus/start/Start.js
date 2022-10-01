import BaseScene from '@scenes/base/BaseScene'

import { Button, SimpleButton } from '@components/components'


/* START OF COMPILED CODE */

export default class Start extends BaseScene {

    constructor() {
        super("Start");

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    create() {

        // bg
        const bg = this.add.image(0, 0, "load", "bg");
        bg.setOrigin(0, 0);
        bg.visible = false;

        // startscreen
        const startscreen = this.add.image(760, 420, "start", "startscreen");
        startscreen.visible = false;

        // bottom
        const bottom = this.add.image(760, 766, "start", "bottom");
        bottom.visible = false;

        // blogButton
        const blogButton = this.add.image(364, 812, "start", "blog");
        blogButton.visible = false;

        // penguin_1
        const penguin_1 = this.add.image(1281, 771, "start", "penguin-1");
        penguin_1.visible = false;

        // penguin_2
        const penguin_2 = this.add.image(1274, 855, "start", "penguin-2");
        penguin_2.visible = false;

        // logo
        const logo = this.add.image(760, 682, "start", "logo");
        logo.visible = false;

        // bg_1
        this.add.image(760, 480, "newstart", "bg");

        // rectangle_1
        const rectangle_1 = this.add.rectangle(759, 919, 128, 128);
        rectangle_1.scaleX = 2.6720751968942604;
        rectangle_1.scaleY = 0.5243142435138686;
        rectangle_1.isFilled = true;
        rectangle_1.fillColor = 1270724;

        // bannerdefault
        this.add.image(760, 382, "newstart", "bannerdefault");

        // bar
        this.add.image(759, 811, "newstart", "bar");

        // button
        const button = this.add.image(410, 812, "newstart", "button");

        // button_1
        const button_1 = this.add.image(1110, 812, "newstart", "button");

        // logo_1
        this.add.image(753, 811, "newstart", "logo");

        // text_1
        const text_1 = this.add.text(321, 797, "", {});
        text_1.text = "Create Account";
        text_1.setStyle({ "fontFamily": "Burbank Regular Bold", "fontSize": "30px" });

        // text
        const text = this.add.text(1075, 797, "", {});
        text.text = "Login";
        text.setStyle({ "fontFamily": "Burbank Regular Bold", "fontSize": "30px" });

        // ver
        this.add.image(760, 911, "newstart", "ver");

        // text_2
        const text_2 = this.add.text(723.5, 897, "", {});
        text_2.text = "ver 1.0";
        text_2.setStyle({ "fontFamily": "Burbank Small Medium", "fontSize": "25px" });

        // blogButton (components)
        const blogButtonSimpleButton = new SimpleButton(blogButton);
        blogButtonSimpleButton.callback = () => this.onBlogClick();

        // button (components)
        const buttonButton = new Button(button);
        buttonButton.spriteName = "button";
        buttonButton.callback = () => this.onCreateClick();
        buttonButton.activeFrame = false;

        // button_1 (components)
        const button_1Button = new Button(button_1);
        button_1Button.spriteName = "button";
        button_1Button.callback = () => this.onStartClick();
        button_1Button.activeFrame = false;

        this.events.emit("scene-awake");
    }

    /* START-USER-CODE */

    onBlogClick() {

    }

    onStartClick() {
        if (this.network.isSavedPenguins) return this.scene.start('PenguinSelect')

        this.scene.start('Login')
    }

    onCreateClick() {
        window.location.href = '/create'
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
