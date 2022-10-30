import RoomScene from '@scenes/rooms/RoomScene'

import { Button, MoveTo, ShowHint, Animation, SimpleButton } from '@components/components'


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
        this.stool1;
        /** @type {Phaser.GameObjects.Sprite} */
        this.stool2;
        /** @type {Phaser.GameObjects.Sprite} */
        this.fg;
        /** @type {Phaser.GameObjects.Sprite} */
        this.candy_3;
        /** @type {Array<Phaser.GameObjects.Sprite|Phaser.GameObjects.Image>} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'coffee': () => this.triggerRoom(11, 1120, 800)
        }
        this.music = 'coffee'

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
        bookshelf.tintTopLeft = 10461087;
        bookshelf.tintTopRight = 10461087;
        bookshelf.tintBottomLeft = 10461087;
        bookshelf.tintBottomRight = 10461087;

        // s_mbolo_4444
        const s_mbolo_4444 = this.add.image(770.8495266986909, 383.796213589527, "halloween", "Símbolo 4444");
        s_mbolo_4444.setOrigin(0.5085394550345852, 0.6376359223221382);

        // bottomDeskDivider
        const bottomDeskDivider = this.add.sprite(877, 633, "book", "bottomDeskDivider");
        bottomDeskDivider.tintTopLeft = 10461087;

        // bottomDeskLeftChair
        const bottomDeskLeftChair = this.add.sprite(794, 756, "book", "bottomDeskLeftChair");
        bottomDeskLeftChair.tintTopLeft = 10461087;
        bottomDeskLeftChair.tintTopRight = 10461087;
        bottomDeskLeftChair.tintBottomLeft = 10461087;
        bottomDeskLeftChair.tintBottomRight = 10461087;

        // bottomDeskLeft
        const bottomDeskLeft = this.add.sprite(890.7078354253503, 786.2114846592042, "book", "bottomDeskLeft");
        bottomDeskLeft.setOrigin(0.4892319618779188, 0.6530934115617574);
        bottomDeskLeft.tintTopLeft = 10461087;
        bottomDeskLeft.tintTopRight = 10461087;
        bottomDeskLeft.tintBottomLeft = 10461087;
        bottomDeskLeft.tintBottomRight = 10461087;

        // bottomDeskRight
        const bottomDeskRight = this.add.sprite(999, 784, "book", "bottomDeskRight");
        bottomDeskRight.tintTopLeft = 10461087;
        bottomDeskRight.tintTopRight = 10461087;
        bottomDeskRight.tintBottomLeft = 10461087;
        bottomDeskRight.tintBottomRight = 10461087;

        // sofaBack
        const sofaBack = this.add.sprite(1396, 504, "book", "sofaBack");
        sofaBack.tintTopLeft = 10461087;
        sofaBack.tintTopRight = 10461087;
        sofaBack.tintBottomLeft = 10461087;
        sofaBack.tintBottomRight = 10461087;

        // symbol_389_copia
        this.add.image(1372, 482, "halloween", "Symbol 389 copia");

        // coffeeTable
        const coffeeTable = this.add.sprite(1440, 628, "book", "coffeeTable");
        coffeeTable.tintTopLeft = 10461087;
        coffeeTable.tintTopRight = 10461087;
        coffeeTable.tintBottomLeft = 10461087;
        coffeeTable.tintBottomRight = 10461087;

        // sofaFront
        const sofaFront = this.add.sprite(1367, 826, "book", "sofaFront");
        sofaFront.tintTopLeft = 10461087;
        sofaFront.tintTopRight = 10461087;
        sofaFront.tintBottomLeft = 10461087;
        sofaFront.tintBottomRight = 10461087;

        // topDeskLeftStorage
        const topDeskLeftStorage = this.add.sprite(318, 443, "book", "topDeskLeftStorage");
        topDeskLeftStorage.tintTopLeft = 10461087;
        topDeskLeftStorage.tintTopRight = 10461087;
        topDeskLeftStorage.tintBottomLeft = 10461087;
        topDeskLeftStorage.tintBottomRight = 10461087;

        // topDeskLeftChair
        const topDeskLeftChair = this.add.sprite(638, 311, "book", "topDeskLeftChair");
        topDeskLeftChair.tintTopLeft = 10461087;
        topDeskLeftChair.tintTopRight = 10461087;
        topDeskLeftChair.tintBottomLeft = 10461087;
        topDeskLeftChair.tintBottomRight = 10461087;

        // topDeskLeft
        const topDeskLeft = this.add.sprite(611, 409, "book", "topDeskLeft");
        topDeskLeft.tintTopLeft = 10461087;
        topDeskLeft.tintTopRight = 10461087;
        topDeskLeft.tintBottomLeft = 10461087;
        topDeskLeft.tintBottomRight = 10461087;

        // topDeskRightStorage
        const topDeskRightStorage = this.add.sprite(991, 337, "book", "topDeskRightStorage");
        topDeskRightStorage.tintTopLeft = 10461087;
        topDeskRightStorage.tintTopRight = 10461087;
        topDeskRightStorage.tintBottomLeft = 10461087;
        topDeskRightStorage.tintBottomRight = 10461087;

        // topDeskDivider
        const topDeskDivider = this.add.sprite(835, 261, "book", "topDeskDivider");
        topDeskDivider.tintTopLeft = 10461087;
        topDeskDivider.tintTopRight = 10461087;
        topDeskDivider.tintBottomLeft = 10461087;
        topDeskDivider.tintBottomRight = 10461087;

        // topDeskRightChair
        const topDeskRightChair = this.add.sprite(1054, 409, "book", "topDeskRightChair");
        topDeskRightChair.tintTopLeft = 10461087;
        topDeskRightChair.tintTopRight = 10461087;
        topDeskRightChair.tintBottomLeft = 10461087;
        topDeskRightChair.tintBottomRight = 10461087;

        // topDeskRight
        const topDeskRight = this.add.sprite(1081, 469, "book", "topDeskRight");
        topDeskRight.tintTopLeft = 10461087;
        topDeskRight.tintTopRight = 10461087;
        topDeskRight.tintBottomLeft = 10461087;
        topDeskRight.tintBottomRight = 10461087;

        // conveyorBottom
        const conveyorBottom = this.add.sprite(365.20391795238095, 877.1037335238099, "book", "conveyorBottom");
        conveyorBottom.setOrigin(0.497664392655892, 0.7982802019952697);

        // newspapers
        const newspapers = this.add.sprite(300.38824614285704, 920.3455175238088, "book", "newspapers0001");
        newspapers.setOrigin(0.5063615656940461, 0.922607540616245);
        newspapers.tintTopLeft = 10461087;
        newspapers.tintTopRight = 10461087;
        newspapers.tintBottomLeft = 10461087;
        newspapers.tintBottomRight = 10461087;

        // conveyorTop
        const conveyorTop = this.add.sprite(413.66645386876064, 965.7728076407423, "book", "conveyorTop");
        conveyorTop.setOrigin(0.3666662677417218, 0.9148794386657482);

        // stool1
        const stool1 = this.add.sprite(481, 708.5106262196813, "book", "stool");
        stool1.setOrigin(0.5, 0.17695885633757666);
        stool1.tintTopLeft = 10461087;
        stool1.tintTopRight = 10461087;
        stool1.tintBottomLeft = 10461087;
        stool1.tintBottomRight = 10461087;

        // stool2
        const stool2 = this.add.sprite(597.7078354253503, 713.4488730816558, "book", "stool");
        stool2.setOrigin(0.48343378750449045, 0.20059601319092496);
        stool2.tintTopLeft = 10461087;
        stool2.tintTopRight = 10461087;
        stool2.tintBottomLeft = 10461087;
        stool2.tintBottomRight = 10461087;

        // fg
        const fg = this.add.sprite(748, 991, "book", "fg");
        fg.setOrigin(0.5, 1);

        // symbol_80
        this.add.image(1281, 870, "halloween", "Symbol 80");

        // symbol
        this.add.image(219, 872, "halloween", "Symbol 80");

        // lOL
        this.add.image(110, 339, "halloween", "LOL");

        // s_mbolo_6
        const s_mbolo_6 = this.add.image(34, 483, "halloween", "Símbolo 6");
        s_mbolo_6.flipX = true;

        // s_mbolo_10
        this.add.image(1276, 196, "halloween", "Símbolo 10");

        // candy_3
        const candy_3 = this.add.sprite(1072, 471, "dialogue", "candy_3");
        candy_3.scaleX = 0.2;
        candy_3.scaleY = 0.2;
        candy_3.tintTopLeft = 10329501;
        candy_3.tintTopRight = 10329501;
        candy_3.tintBottomLeft = 10329501;
        candy_3.tintBottomRight = 10329501;

        // lists
        const sort = [stool2, stool1, topDeskRight, topDeskRightChair, topDeskDivider, topDeskRightStorage, topDeskLeft, topDeskLeftChair, topDeskLeftStorage, coffeeTable, bottomDeskRight, bottomDeskLeft, bottomDeskLeftChair, bottomDeskDivider, bookshelf, fg, conveyorBottom, newspapers, conveyorTop, s_mbolo_4444];

        // newspapers (components)
        const newspapersAnimation = new Animation(newspapers);
        newspapersAnimation.key = "newspapers";
        newspapersAnimation.end = 18;

        // candy_3 (components)
        const candy_3SimpleButton = new SimpleButton(candy_3);
        candy_3SimpleButton.callback = () => {this.foundCandy(3,candy_3)};

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
        this.topDeskLeftChair = topDeskLeftChair;
        this.topDeskLeft = topDeskLeft;
        this.topDeskRightStorage = topDeskRightStorage;
        this.topDeskDivider = topDeskDivider;
        this.topDeskRightChair = topDeskRightChair;
        this.topDeskRight = topDeskRight;
        this.conveyorBottom = conveyorBottom;
        this.newspapers = newspapers;
        this.conveyorTop = conveyorTop;
        this.stool1 = stool1;
        this.stool2 = stool2;
        this.fg = fg;
        this.candy_3 = candy_3;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
        // create(){
        //     super.create()
        //     this.newspapers.play("newspapers")
        // }

        create() {
            super.create();
            if (this.world.client.penguin.candy3 == 1) {
                this.candy_3.visible = false;
                this.world.interface.main.gary.visible = false; 
            }
        }
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
