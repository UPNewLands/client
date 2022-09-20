
// You can write more code here

/* START OF COMPILED CODE */

import Book from "../../../rooms/book/Book";
import Interactive from "../../../components/Interactive";
import Button from "../../../components/Button";
import TagHydro1 from "./buttons/TagHydro1";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Hydrohopper extends Book {

    constructor() {
        super("Hydrohopper");

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("hydrohopper-pack", "assets/media/interface/catalogs/hydrohopper/hydrohopper-pack.json");
    }

    /** @returns {void} */
    _create() {

        // block
        const block = this.add.rectangle(760, 480, 1520, 960);
        block.isFilled = true;
        block.fillColor = 0;
        block.fillAlpha = 0.2;

        // page
        const page = this.add.container(0, 0);
        page.visible = false;

        // s_mbolo_6
        const s_mbolo_6 = this.add.image(760, 480, "hydrohopper", "Símbolo 6");
        page.add(s_mbolo_6);

        // close
        const close = this.add.image(1029, 108, "hydrohopper", "close");
        page.add(close);

        // tagHydro1
        const tagHydro1 = new TagHydro1(this, 745, 428);
        this.add.existing(tagHydro1);
        tagHydro1.visible = false;

        // block (components)
        new Interactive(block);

        // close (components)
        const closeButton = new Button(close);
        closeButton.spriteName = "close";
        closeButton.callback = () => this.close();

        this.events.emit("scene-awake");
    }

    /* START-USER-CODE */

    // Write your code here

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
