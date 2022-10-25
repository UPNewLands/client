
/* START OF COMPILED CODE */

import RoomScene from "../RoomScene";
import Button from "../../components/Button";
import MoveTo from "../../components/MoveTo";
import Animation from "../../components/Animation";
import Zone from "../../components/Zone";
/* START-USER-IMPORTS */
import dock from "../../interface/game/main/Main";
/* END-USER-IMPORTS */

export default class Shop extends RoomScene {

    constructor() {
        super("Shop");

        /** @type {Phaser.GameObjects.Sprite} */
        this.display0001;
        /** @type {Array<any>} */
        this.sort;


        /* START-USER-CTR-CODE */
        this.music = '345'

        this.roomTriggers = {
            'town': () => this.triggerRoom(10, 932, 560),
            'unlock': () => this.interface.loadExternal('Unlock'),
            'catalog': () => this.interface.loadExternal('ClothingCatalog')
        }

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("shop-pack", "assets/media/rooms/shop/shop-pack.json");
    }

    /** @returns {void} */
    _create() {

        // symbol_68_png
        this.add.image(773, 464, "shop", "Symbol 68");

        // shop_door_png
        const shop_door_png = this.add.sprite(1111, 230, "shop", "shop-door");
        shop_door_png.scaleY = 1.01;

        // curten_png
        const curten_png = this.add.sprite(467, 275, "shop", "curten");
        curten_png.scaleY = 1.01;

        // symbol_560001
        const symbol_560001 = this.add.sprite(770, 219, "shop", "Symbol 560001");
        symbol_560001.scaleY = 1.01;

        // symbol_70
        const symbol_70 = this.add.image(369, 466, "shop", "Symbol 70");
        symbol_70.scaleY = 1.01;

        // symbol_72
        const symbol_72 = this.add.image(305, 632, "shop", "Symbol 72");
        symbol_72.scaleY = 1.01;

        // symbol_74
        const symbol_74 = this.add.image(322, 683, "shop", "Symbol 74");
        symbol_74.scaleY = 1.01;

        // symbol_76
        const symbol_76 = this.add.image(351, 747, "shop", "Symbol 76");
        symbol_76.scaleY = 1.01;

        // symbol_78
        const symbol_78 = this.add.image(370, 803, "shop", "Symbol 78");
        symbol_78.scaleY = 1.01;

        // symbol_80
        const symbol_80 = this.add.image(1109, 616, "shop", "Symbol 80");
        symbol_80.scaleY = 1.01;

        // symbol_82
        const symbol_82 = this.add.image(1050, 682, "shop", "Symbol 82");
        symbol_82.scaleY = 1.01;

        // symbol_84
        const symbol_84 = this.add.image(1381, 374, "shop", "Symbol 84");
        symbol_84.scaleY = 1.01;

        // symbol_86
        const symbol_86 = this.add.image(1363, 455, "shop", "Symbol 86");
        symbol_86.scaleY = 1.01;

        // register
        const register = this.add.sprite(1297, 361, "shop", "register");
        register.scaleY = 1.01;

        // display0001
        const display0001 = this.add.sprite(1417, 429, "shop", "display0001");
        display0001.scaleY = 1.01;

        // chest
        const chest = this.add.sprite(1359, 533, "shop", "chest");
        chest.scaleY = 1.01;

        // symbol_153
        const symbol_153 = this.add.image(793, 477, "shop", "Symbol 153");
        symbol_153.scaleY = 1.01;

        // unlock
        const unlock = this.add.sprite(1418, 753, "shop", "unlock");
        unlock.scaleY = 1.01;

        // catalog
        const catalog = this.add.sprite(1418, 891, "shop", "catalog");
        catalog.scaleY = 1.01;

        // rectangle_1
        const rectangle_1 = this.add.rectangle(1425, 426, 128, 128);
        rectangle_1.scaleX = 0.7519419054693485;
        rectangle_1.scaleY = 0.7102463973722253;
        rectangle_1.isFilled = true;

        // lists
        const sort = [];

        // shop_door_png (components)
        const shop_door_pngButton = new Button(shop_door_png);
        shop_door_pngButton.spriteName = "shop-door";
        const shop_door_pngMoveTo = new MoveTo(shop_door_png);
        shop_door_pngMoveTo.x = 1124;
        shop_door_pngMoveTo.y = 376;

        // curten_png (components)
        const curten_pngButton = new Button(curten_png);
        curten_pngButton.spriteName = "curten";
        const curten_pngMoveTo = new MoveTo(curten_png);
        curten_pngMoveTo.x = 518;
        curten_pngMoveTo.y = 424;

        // symbol_560001 (components)
        const symbol_560001Animation = new Animation(symbol_560001);
        symbol_560001Animation.key = "Symbol 56";
        symbol_560001Animation.end = 10;
        symbol_560001Animation.repeatDelay = 10;

        // chest (components)
        const chestButton = new Button(chest);
        chestButton.spriteName = "chest";
        chestButton.callback = () => this.interface.loadExternal('Unlock');
        chestButton.activeFrame = false;

        // register (components)
        const registerButton = new Button(register);
        registerButton.spriteName = "register";

        // display0001 (components)
        const display0001Animation = new Animation(display0001);
        display0001Animation.key = "display";
        display0001Animation.end = 24;
        display0001Animation.autoPlay = false;
        display0001Animation.onHover = true;

        // chest (components)
<<<<<<< HEAD
        // const chestButton = new Button(chest);
        // chestButton.spriteName = "chest";
        // const chestMoveTo = new MoveTo(chest);
        // chestMoveTo.x = 1360;
        // chestMoveTo.y = 625;
=======
        const chestMoveTo = new MoveTo(chest);
        chestMoveTo.x = 1360;
        chestMoveTo.y = 625;
>>>>>>> 9b04b6e96e0982c37194ea17768a4c83c4d3c376

        // unlock (components)
        const unlockButton = new Button(unlock);
        unlockButton.spriteName = "unlock";
        unlockButton.callback = () => this.interface.loadExternal('Unlock');

        // catalog (components)
        const catalogButton = new Button(catalog);
        catalogButton.spriteName = "catalog";
        catalogButton.callback = () => this.interface.loadExternal('ClothingCatalog');

        // rectangle_1 (components)
        const rectangle_1Zone = new Zone(rectangle_1);
        rectangle_1Zone.hoverCallback = () => this.onDisplayHover();
        rectangle_1Zone.hoverOutCallback = () => this.pauseDisplay();

        this.display0001 = display0001;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    onDisplayHover() {
        this.display0001.__Animation.play()
    }
    pauseDisplay() {
        this.display0001.__Animation.stop()
    }
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
