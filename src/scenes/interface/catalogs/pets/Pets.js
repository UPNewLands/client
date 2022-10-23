import { Button, Interactive } from '@components/components'

import Book from '@scenes/interface/books/Book'
import ColorButton from './buttons/ColorButton'
import FlagButton from './buttons/FlagButton'
import PhotoButton from './buttons/PhotoButton'
import Tag1 from './buttons/Tag1'
import Tag2 from './buttons/Tag2'


/* START OF COMPILED CODE */

export default class Pets extends Book {

    constructor() {
        super("Pets");

        /** @type {Phaser.GameObjects.Container} */
        this.buttons;
        /** @type {Phaser.GameObjects.Text} */
        this.coins;
        /** @type {Phaser.GameObjects.Container[]} */
        this.pages;


        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    preload() {

        this.load.pack("pets-pack", "assets/media/interface/catalogs/pets/pets-pack.json");
    }

    /** @returns {void} */
    _create() {

        // block
        const block = this.add.rectangle(825, 500, 1520, 960);
        block.scaleX = 1.0855357488020507;
        block.scaleY = 1.041677287131595;
        block.isFilled = true;
        block.fillColor = 0;
        block.fillAlpha = 0.2;

        // page9
        const page9 = this.add.container(69, 23);
        page9.visible = false;

        // p9
        const p9 = this.add.image(1, 0, "pets", "page/page0016");
        p9.setOrigin(0, 0);
        page9.add(p9);

        // closeLeft_1
        const closeLeft_1 = this.add.image(492, 39, "pets", "close_left");
        closeLeft_1.setOrigin(0, 0);
        page9.add(closeLeft_1);

        // pageLeft_2
        const pageLeft_2 = this.add.image(493, 590, "pets", "page_left");
        pageLeft_2.setOrigin(0, 0);
        page9.add(pageLeft_2);

        // page8
        const page8 = this.add.container(69, 23);
        page8.visible = false;

        // p8
        const p8 = this.add.image(0, 0, "pets", "page/page0008");
        p8.setOrigin(0, 0);
        page8.add(p8);

        // page7
        const page7 = this.add.container(69, 23);
        page7.visible = false;

        // p7
        const p7 = this.add.image(0, 0, "pets", "page/page0007");
        p7.setOrigin(0, 0);
        page7.add(p7);

        // tag1_19
        const tag1_19 = new Tag1(this, 279, 442, "pets", "buy2");
        tag1_19.scaleX = 1.7524432091032764;
        tag1_19.scaleY = 1.636077604184822;
        tag1_19.angle = 0;
        page7.add(tag1_19);

        // tag1_20
        const tag1_20 = new Tag1(this, 824, 464, "pets", "buy2");
        tag1_20.scaleX = 1.7542919010089648;
        tag1_20.scaleY = 1.6364317368545018;
        tag1_20.angle = 0;
        page7.add(tag1_20);

        // page6
        const page6 = this.add.container(69, 23);
        page6.visible = false;

        // p6
        const p6 = this.add.image(0, 0, "pets", "page/page0006");
        p6.setOrigin(0, 0);
        page6.add(p6);

        // tag1_13
        const tag1_13 = new Tag1(this, 502, 464, "pets", "buy2");
        tag1_13.scaleX = 1.7650084335093914;
        tag1_13.scaleY = 1.7302170534335133;
        tag1_13.angle = 0;
        page6.add(tag1_13);

        // tag1_14
        const tag1_14 = new Tag1(this, 1073, 419, "pets", "buy2");
        tag1_14.scaleX = 1.7652206566052013;
        tag1_14.scaleY = 1.6983542790459691;
        tag1_14.angle = 0;
        page6.add(tag1_14);

        // page5
        const page5 = this.add.container(69, 23);
        page5.visible = false;

        // p5
        const p5 = this.add.image(0, 0, "pets", "page/page0005");
        p5.setOrigin(0, 0);
        page5.add(p5);

        // tag1_9
        const tag1_9 = new Tag1(this, 262, 442, "pets", "buy2");
        tag1_9.scaleX = 1.7736145989919416;
        tag1_9.scaleY = 1.7074422082467215;
        tag1_9.angle = 0;
        page5.add(tag1_9);

        // tag1_10
        const tag1_10 = new Tag1(this, 812, 491, "pets", "buy2");
        tag1_10.scaleX = 1.770907930036187;
        tag1_10.scaleY = 1.689381312447221;
        tag1_10.angle = 0;
        page5.add(tag1_10);

        // page4
        const page4 = this.add.container(69, 23);
        page4.visible = false;

        // p4
        const p4 = this.add.image(0, 0, "pets", "page/page0004");
        p4.setOrigin(0, 0);
        page4.add(p4);

        // tag1_4
        const tag1_4 = new Tag1(this, 512, 494, "pets", "buy2");
        tag1_4.scaleX = 1.850100455913055;
        tag1_4.scaleY = 1.587390871647282;
        tag1_4.angle = 0;
        page4.add(tag1_4);

        // tag1_5
        const tag1_5 = new Tag1(this, 1071, 443, "pets", "buy2");
        tag1_5.scaleX = 1.8491033120072728;
        tag1_5.scaleY = 1.5901931329383932;
        tag1_5.angle = 0;
        page4.add(tag1_5);

        // page3
        const page3 = this.add.container(69, 23);
        page3.visible = false;

        // p3
        const p3 = this.add.image(0, 0, "pets", "page/page0003");
        p3.setOrigin(0, 0);
        page3.add(p3);

        // tag1
        const tag1 = new Tag1(this, 262, 484, "pets", "buy2");
        tag1.scaleX = 1.679331838128801;
        tag1.scaleY = 1.5979152903424434;
        tag1.angle = 0;
        tag1.setOrigin(0, 0);
        page3.add(tag1);

        // tag1_1
        const tag1_1 = new Tag1(this, 808, 474, "pets", "buy2");
        tag1_1.scaleX = 1.6851496676122024;
        tag1_1.scaleY = 1.5342537048133331;
        tag1_1.angle = 0;
        page3.add(tag1_1);

        // page2
        const page2 = this.add.container(69, 23);
        page2.visible = false;

        // p2
        const p2 = this.add.image(0, 0, "pets", "page/page0002");
        p2.setOrigin(0, 0);
        page2.add(p2);

        // page1
        const page1 = this.add.container(69, 23);
        page1.visible = false;

        // p1
        const p1 = this.add.image(0, 0, "pets", "page/page0001");
        p1.setOrigin(0, 0);
        page1.add(p1);

        // pageFront
        const pageFront = this.add.image(469, 42, "pets", "page_front");
        pageFront.setOrigin(0, 0);
        page1.add(pageFront);

        // closeRight_1
        const closeRight_1 = this.add.image(925, 37, "pets", "close_right");
        closeRight_1.setOrigin(0, 0);
        page1.add(closeRight_1);

        // text_1
        const text_1 = this.add.text(491, 762, "", {});
        text_1.tintTopLeft = 16605537;
        text_1.tintTopRight = 16605537;
        text_1.tintBottomLeft = 16605537;
        text_1.tintBottomRight = 16605537;
        text_1.text = "Pre - Alpha v0.0.1";
        text_1.setStyle({ "color": "#f59191ff", "fontFamily": "Impact", "fontSize": "23px" });
        page1.add(text_1);

        // buttons
        const buttons = this.add.container(259, 64);
        buttons.visible = false;

        // closeRight
        const closeRight = this.add.image(1012, 0, "pets", "close_right");
        closeRight.setOrigin(0, 0);
        buttons.add(closeRight);

        // pageRight
        const pageRight = this.add.image(1012, 549, "pets", "page_right");
        pageRight.setOrigin(0, 0);
        buttons.add(pageRight);

        // pageLeft
        const pageLeft = this.add.image(0, 549, "pets", "page_left");
        pageLeft.setOrigin(0, 0);
        buttons.add(pageLeft);

        // coins
        const coins = this.add.text(1130, 790, "", {});
        coins.setOrigin(1, 0);
        coins.text = "YOUR COINS:";
        coins.setStyle({ "align": "right", "fixedWidth":600,"fontFamily": "CCComiccrazy", "fontSize": "32px", "stroke": "#000", "strokeThickness":9});
        buttons.add(coins);

        // lists
        const pages = [page1, page2, page3, page4, page5, page6, page7, page8, page9];

        // block (components)
        new Interactive(block);

        // closeLeft_1 (components)
        const closeLeft_1Button = new Button(closeLeft_1);
        closeLeft_1Button.spriteName = "close_left";
        closeLeft_1Button.callback = () => this.close();
        closeLeft_1Button.pixelPerfect = true;

        // pageLeft_2 (components)
        const pageLeft_2Button = new Button(pageLeft_2);
        pageLeft_2Button.spriteName = "page_left";
        pageLeft_2Button.callback = () => this.prevPage();
        pageLeft_2Button.activeFrame = false;
        pageLeft_2Button.pixelPerfect = true;

        // tag1_19 (prefab fields)
        tag1_19.item = 758;

        // tag1_19 (components)
        const tag1_19Button = Button.getComponent(tag1_19);
        tag1_19Button.spriteName = "buy2";

        // tag1_20 (prefab fields)
        tag1_20.item = 759;

        // tag1_20 (components)
        const tag1_20Button = Button.getComponent(tag1_20);
        tag1_20Button.spriteName = "buy2";

        // tag1_13 (prefab fields)
        tag1_13.item = 754;

        // tag1_13 (components)
        const tag1_13Button = Button.getComponent(tag1_13);
        tag1_13Button.spriteName = "buy2";

        // tag1_14 (prefab fields)
        tag1_14.item = 757;

        // tag1_14 (components)
        const tag1_14Button = Button.getComponent(tag1_14);
        tag1_14Button.spriteName = "buy2";

        // tag1_9 (prefab fields)
        tag1_9.item = 753;

        // tag1_9 (components)
        const tag1_9Button = Button.getComponent(tag1_9);
        tag1_9Button.spriteName = "buy2";

        // tag1_10 (prefab fields)
        tag1_10.item = 756;

        // tag1_10 (components)
        const tag1_10Button = Button.getComponent(tag1_10);
        tag1_10Button.spriteName = "buy2";

        // tag1_4 (prefab fields)
        tag1_4.item = 751;

        // tag1_4 (components)
        const tag1_4Button = Button.getComponent(tag1_4);
        tag1_4Button.spriteName = "buy2";

        // tag1_5 (prefab fields)
        tag1_5.item = 752;

        // tag1_5 (components)
        const tag1_5Button = Button.getComponent(tag1_5);
        tag1_5Button.spriteName = "buy2";

        // tag1 (prefab fields)
        tag1.item = 750;

        // tag1 (components)
        const tag1Button = Button.getComponent(tag1);
        tag1Button.spriteName = "buy2";

        // tag1_1 (prefab fields)
        tag1_1.item = 755;

        // tag1_1 (components)
        const tag1_1Button = Button.getComponent(tag1_1);
        tag1_1Button.spriteName = "buy2";

        // pageFront (components)
        const pageFrontButton = new Button(pageFront);
        pageFrontButton.spriteName = "page_front";
        pageFrontButton.callback = () => this.nextPage();
        pageFrontButton.activeFrame = false;

        // closeRight_1 (components)
        const closeRight_1Button = new Button(closeRight_1);
        closeRight_1Button.spriteName = "close_right";
        closeRight_1Button.callback = () => this.close();
        closeRight_1Button.pixelPerfect = true;

        // closeRight (components)
        const closeRightButton = new Button(closeRight);
        closeRightButton.spriteName = "close_right";
        closeRightButton.callback = () => this.close();
        closeRightButton.pixelPerfect = true;

        // pageRight (components)
        const pageRightButton = new Button(pageRight);
        pageRightButton.spriteName = "page_right";
        pageRightButton.callback = () => this.nextPage();
        pageRightButton.activeFrame = false;
        pageRightButton.pixelPerfect = true;

        // pageLeft (components)
        const pageLeftButton = new Button(pageLeft);
        pageLeftButton.spriteName = "page_left";
        pageLeftButton.callback = () => this.prevPage();
        pageLeftButton.activeFrame = false;
        pageLeftButton.pixelPerfect = true;

        this.buttons = buttons;
        this.coins = coins;
        this.pages = pages;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create() {
        super.create()

        this.setCoins(this.world.client.coins)
    }

    setCoins(coins) {
        this.coins.text = `YOUR COINS: ${coins}`
    }

    buy(item) {
        this.interface.prompt.showItem(item)
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
