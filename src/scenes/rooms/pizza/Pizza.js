import RoomScene from '../RoomScene'

import { Animation, Button, ShowHint, SimpleButton, MoveTo} from '@components/components'

// You can write more code here

/* START OF COMPILED CODE */

export default class Pizza extends RoomScene {

    constructor() {
        super("Pizza");

        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Sprite>} */
        this.sort;


        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            'plaza': () => this.triggerRoom(50, 819, 700),
            'pizzatron': () => this.triggerGame('pizzatron', 910)
        }

        this.music = "pizza"
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("pizza-pack", "assets/media/rooms/pizza/pizza-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        this.add.image(699, 483, "pizza", "bg");

        // main
        const main = this.add.image(765, 185, "pizza", "main");

        // symbol_300001
        this.add.image(337, 95, "pizza", "Symbol 300001");

        // symbol_59
        this.add.image(506, 153, "pizza", "Symbol 59");

        // symbol_90
        const symbol_90 = this.add.image(1217.7645466454744, 556.6551125938605, "pizza", "Symbol 90");
        symbol_90.setOrigin(0.09987246994774968, 0.5554592716155042);

        // tron
        const tron = this.add.image(349, 239, "pizza", "tron");

        // symbol_96
        this.add.image(1467, 595, "pizza", "Symbol 96");

        // symbol_92
        this.add.image(1391, 249, "pizza", "Symbol 92");

        // symbol_94
        this.add.image(1300, 478, "pizza", "Symbol 94");

        // symbol_67
        this.add.image(951, 313, "pizza", "Symbol 67");

        // symbol_75
        const symbol_75 = this.add.image(1113.1060579207638, 341.7409592751547, "pizza", "Symbol 75");
        symbol_75.setOrigin(0.5130004181515241, 0.6928923958287283);

        // symbol_65
        const symbol_65 = this.add.image(551, 374.83902720313966, "pizza", "Symbol 65");
        symbol_65.setOrigin(0.5, 0.9183789252683822);

        // symbol_99
        const symbol_99 = this.add.image(1364, 352, "pizza", "Symbol 99");

        // rectangle
        const rectangle = this.add.rectangle(769, 521, 128, 128);
        rectangle.scaleX = 13.061895678386591;
        rectangle.scaleY = 8.093393731727916;
        rectangle.alpha = 0.2;
        rectangle.isFilled = true;
        rectangle.fillColor = 51;

        // symbol_128
        this.add.image(713, 646, "pizza", "Symbol 128");

        // candy_1
        const candy_1 = this.add.image(56, 806, "dialogue", "candy_1");
        candy_1.scaleX = 0.2;
        candy_1.scaleY = 0.2;

        // symbol_242
        const symbol_242 = this.add.image(818.6627671287639, 754.1190130633809, "pizza", "Symbol 242");
        symbol_242.setOrigin(0.4984862481403911, 0.7695020010570386);
        symbol_242.tintTopLeft = 16777215;
        symbol_242.tintTopRight = 16777215;
        symbol_242.tintBottomLeft = 16777215;
        symbol_242.tintBottomRight = 16777215;

        // symbol_79
        const symbol_79 = this.add.image(917, 600, "pizza", "Symbol 79");
        symbol_79.tintTopLeft = 12500670;
        symbol_79.tintTopRight = 12500670;
        symbol_79.tintBottomLeft = 12500670;
        symbol_79.tintBottomRight = 12500670;

        // symbol_77
        this.add.image(1044, 491, "pizza", "Symbol 77");

        // symbol
        this.add.image(680, 481, "pizza", "Symbol 79");

        // symbol_81
        this.add.image(826, 429, "pizza", "Symbol 81");

        // symbol_83
        const symbol_83 = this.add.image(1056.9819124129513, 656.5226529682866, "pizza", "Symbol 83");
        symbol_83.setOrigin(0.5055789868256358, 0.8751316486977713);
        symbol_83.tintTopLeft = 12500670;
        symbol_83.tintTopRight = 12500670;
        symbol_83.tintBottomLeft = 12500670;
        symbol_83.tintBottomRight = 12500670;

        // symbol_1
        this.add.image(510, 457, "pizza", "Symbol 120");

        // symbol_88
        const symbol_88 = this.add.image(769.4869995117188, 588.8043062456219, "pizza", "Symbol 88");
        symbol_88.setOrigin(0.47478766180440884, 0.8155995760488486);

        // symbol_120
        this.add.image(515, 538, "pizza", "Symbol 120");

        // symbol_101
        this.add.image(376, 484, "pizza", "Symbol 101");

        // check0001
        const check0001 = this.add.sprite(378.3360658322802, 369.19879899764254, "pizza", "check0001");
        check0001.setOrigin(0.7256172471413461, 0.5016995556961342);

        // symbol_124
        const symbol_124 = this.add.image(336, 544, "pizza", "Symbol 124");
        symbol_124.tintTopLeft = 12500670;
        symbol_124.tintTopRight = 12500670;
        symbol_124.tintBottomLeft = 12500670;
        symbol_124.tintBottomRight = 12500670;

        // s_mbolo_2
        this.add.image(282, 559, "pizza", "Símbolo 2");

        // symbol_80
        this.add.image(267, 858, "pizza", "Symbol 80");

        // symbol_2
        this.add.image(848, 853, "pizza", "Symbol 80");

        // symbol_3
        this.add.image(1462, 853, "pizza", "Symbol 80");

        // s_mbolo_4
        this.add.image(779, 97, "pizza", "Símbolo 4");

        // s_mbolo_1
        this.add.image(43, 525, "pizza", "Símbolo 1");

        // lists
        const sort = [symbol_88, symbol_83, symbol_75, symbol_99, symbol_65, check0001, symbol_90, symbol_242];

        // main (components)
        const mainButton = new Button(main);
        mainButton.spriteName = "main";
        mainButton.activeFrame = false;
        const mainMoveTo = new MoveTo(main);
        mainMoveTo.x = 770;
        mainMoveTo.y = 293;

        // tron (components)
        const tronButton = new Button(tron);
        tronButton.spriteName = "tron";
        tronButton.activeFrame = false;
        const tronShowHint = new ShowHint(tron);
        tronShowHint.text = "Pizzatron 3000";
        const tronMoveTo = new MoveTo(tron);
        tronMoveTo.x = 349;
        tronMoveTo.y = 330;

        // candy_1 (components)
        new SimpleButton(candy_1);

        // check0001 (components)
        const check0001Animation = new Animation(check0001);
        check0001Animation.key = "check";
        check0001Animation.end = 3;
        check0001Animation.repeat = 1;
        check0001Animation.autoPlay = false;
        check0001Animation.onHover = true;
        new SimpleButton(check0001);

        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
