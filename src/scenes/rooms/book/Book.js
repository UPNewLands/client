import RoomScene from '@scenes/rooms/RoomScene'

import { Button, MoveTo, ShowHint, Animation } from '@components/components'


/* START OF COMPILED CODE */

export default class Book extends RoomScene {

    constructor() {
        super("Book");

        /** @type {Phaser.GameObjects.Sprite} */
        this.bg;
        /** @type {Phaser.GameObjects.Sprite} */
        this.bookshelf;
        /** @type {Phaser.GameObjects.Sprite} */
        this.bottomDeskDivider;
        /** @type {Phaser.GameObjects.Sprite} */
        this.bottomDeskLeftChair;
        /** @type {Phaser.GameObjects.Sprite} */
        this.bottomDeskLeft;
        /** @type {Phaser.GameObjects.Sprite} */
        this.bottomDeskRight;
        /** @type {Phaser.GameObjects.Sprite} */
        this.sofaBack;
        /** @type {Phaser.GameObjects.Sprite} */
        this.coffeeTable;
        /** @type {Phaser.GameObjects.Sprite} */
        this.sofaFront;
        /** @type {Phaser.GameObjects.Sprite} */
        this.topDeskLeftStorage;
        /** @type {Phaser.GameObjects.Sprite} */
        this.noticeboard;
        /** @type {Phaser.GameObjects.Sprite} */
        this.hatStand;
        /** @type {Phaser.GameObjects.Sprite} */
        this.topDeskLeftChair;
        /** @type {Phaser.GameObjects.Sprite} */
        this.topDeskLeft;
        /** @type {Phaser.GameObjects.Sprite} */
        this.topDeskRightStorage;
        /** @type {Phaser.GameObjects.Sprite} */
        this.topDeskDivider;
        /** @type {Phaser.GameObjects.Sprite} */
        this.topDeskRightChair;
        /** @type {Phaser.GameObjects.Sprite} */
        this.topDeskRight;
        /** @type {Phaser.GameObjects.Sprite} */
        this.conveyorBottom;
        /** @type {Phaser.GameObjects.Sprite} */
        this.newspapers;
        /** @type {Phaser.GameObjects.Sprite} */
        this.conveyorTop;
        /** @type {Phaser.GameObjects.Sprite} */
        this.mancalaTable1;
        /** @type {Phaser.GameObjects.Sprite} */
        this.mancalaTable2;
        /** @type {Phaser.GameObjects.Sprite} */
        this.mancalaTable3;
        /** @type {Phaser.GameObjects.Sprite} */
        this.mancalaTable4;
        /** @type {Phaser.GameObjects.Sprite} */
        this.stool1;
        /** @type {Phaser.GameObjects.Sprite} */
        this.stool2;
        /** @type {Phaser.GameObjects.Sprite} */
        this.fg;
        /** @type {Phaser.GameObjects.Sprite[]} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'coffee': () => this.triggerRoom(11, 1120, 800)
        }
        //this.music = '669'

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("book-pack", "assets/media/rooms/book/book-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        const bg = this.add.sprite(756, 491, "book", "bg");

        // bookshelf
        const bookshelf = this.add.sprite(419, 333, "book", "bookshelf");

        // bottomDeskDivider
        const bottomDeskDivider = this.add.sprite(877, 633, "book", "bottomDeskDivider");

        // bottomDeskLeftChair
        const bottomDeskLeftChair = this.add.sprite(794, 756, "book", "bottomDeskLeftChair");

        // bottomDeskLeft
        const bottomDeskLeft = this.add.sprite(890.7078354253503, 786.2114846592042, "book", "bottomDeskLeft");
        bottomDeskLeft.setOrigin(0.4892319618779188, 0.6530934115617574);

        // bottomDeskRight
        const bottomDeskRight = this.add.sprite(999, 784, "book", "bottomDeskRight");

        // sofaBack
        const sofaBack = this.add.sprite(1396, 504, "book", "sofaBack");

        // coffeeTable
        const coffeeTable = this.add.sprite(1440, 628, "book", "coffeeTable");

        // sofaFront
        const sofaFront = this.add.sprite(1367, 826, "book", "sofaFront");

        // topDeskLeftStorage
        const topDeskLeftStorage = this.add.sprite(318, 443, "book", "topDeskLeftStorage");

        // noticeboard
        const noticeboard = this.add.sprite(290.27413229285713, 664.3737525085712, "book", "noticeboard");
        noticeboard.setOrigin(0.532044635651353, 0.707832351224489);

        // hatStand
        const hatStand = this.add.sprite(797, 312, "book", "hatStand");

        // topDeskLeftChair
        const topDeskLeftChair = this.add.sprite(638, 311, "book", "topDeskLeftChair");

        // topDeskLeft
        const topDeskLeft = this.add.sprite(611, 409, "book", "topDeskLeft");

        // topDeskRightStorage
        const topDeskRightStorage = this.add.sprite(991, 337, "book", "topDeskRightStorage");

        // topDeskDivider
        const topDeskDivider = this.add.sprite(835, 261, "book", "topDeskDivider");

        // topDeskRightChair
        const topDeskRightChair = this.add.sprite(1054, 409, "book", "topDeskRightChair");

        // topDeskRight
        const topDeskRight = this.add.sprite(1081, 469, "book", "topDeskRight");

        // conveyorBottom
        const conveyorBottom = this.add.sprite(365.20391795238095, 877.1037335238099, "book", "conveyorBottom");
        conveyorBottom.setOrigin(0.497664392655892, 0.7982802019952697);

        // newspapers
        const newspapers = this.add.sprite(300.38824614285704, 920.3455175238088, "book", "newspapers0001");
        newspapers.setOrigin(0.5063615656940461, 0.922607540616245);

        // conveyorTop
        const conveyorTop = this.add.sprite(477.81567180952385, 806.5057847142859, "book", "conveyorTop");
        conveyorTop.setOrigin(0.4865713491766801, 0.3183737255216702);

        // mancalaTable1
        const mancalaTable1 = this.add.sprite(1241, 584, "book", "mancalaTable0001");

        // mancalaTable2
        const mancalaTable2 = this.add.sprite(1123, 666, "book", "mancalaTable0002");

        // mancalaTable3
        const mancalaTable3 = this.add.sprite(1270, 708, "book", "mancalaTable0003");

        // mancalaTable4
        const mancalaTable4 = this.add.sprite(1169, 810, "book", "mancalaTable0001");

        // stool1
        const stool1 = this.add.sprite(481, 708.5106262196813, "book", "stool");
        stool1.setOrigin(0.5, 0.17695885633757666);

        // stool2
        const stool2 = this.add.sprite(597.7078354253503, 713.4488730816558, "book", "stool");
        stool2.setOrigin(0.48343378750449045, 0.20059601319092496);

        // fg
        const fg = this.add.sprite(748, 991, "book", "fg");
        fg.setOrigin(0.5, 1);

        // lists
        const sort = [stool2, stool1, mancalaTable4, mancalaTable3, mancalaTable2, mancalaTable1, topDeskRight, topDeskRightChair, topDeskDivider, topDeskRightStorage, topDeskLeft, topDeskLeftChair, hatStand, noticeboard, topDeskLeftStorage, coffeeTable, bottomDeskRight, bottomDeskLeft, bottomDeskLeftChair, bottomDeskDivider, bookshelf, fg, conveyorBottom, newspapers, conveyorTop];

        // newspapers (components)
        const newspapersAnimation = new Animation(newspapers);
        newspapersAnimation.key = "newspapers";
        newspapersAnimation.end = 18;

        this.bg = bg;
        this.bookshelf = bookshelf;
        this.bottomDeskDivider = bottomDeskDivider;
        this.bottomDeskLeftChair = bottomDeskLeftChair;
        this.bottomDeskLeft = bottomDeskLeft;
        this.bottomDeskRight = bottomDeskRight;
        this.sofaBack = sofaBack;
        this.coffeeTable = coffeeTable;
        this.sofaFront = sofaFront;
        this.topDeskLeftStorage = topDeskLeftStorage;
        this.noticeboard = noticeboard;
        this.hatStand = hatStand;
        this.topDeskLeftChair = topDeskLeftChair;
        this.topDeskLeft = topDeskLeft;
        this.topDeskRightStorage = topDeskRightStorage;
        this.topDeskDivider = topDeskDivider;
        this.topDeskRightChair = topDeskRightChair;
        this.topDeskRight = topDeskRight;
        this.conveyorBottom = conveyorBottom;
        this.newspapers = newspapers;
        this.conveyorTop = conveyorTop;
        this.mancalaTable1 = mancalaTable1;
        this.mancalaTable2 = mancalaTable2;
        this.mancalaTable3 = mancalaTable3;
        this.mancalaTable4 = mancalaTable4;
        this.stool1 = stool1;
        this.stool2 = stool2;
        this.fg = fg;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
        // create(){
        //     super.create()
        //     this.newspapers.play("newspapers")
        // }
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
