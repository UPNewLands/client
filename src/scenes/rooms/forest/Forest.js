/* START OF COMPILED CODE */

import RoomScene from "../RoomScene";
import Animation from "../../components/Animation";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Forest extends RoomScene {

    constructor() {
        super("Forest");

        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Sprite>} */
        this.sort;


        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            'mine': () => this.triggerRoom(70, 989, 766),
            'lake': () => this.triggerRoom(60, 1365, 535),         
        }

        this.music = "lost_forest"
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("forest-pack", "assets/media/rooms/forest/forest-pack.json");
    }

    /** @returns {void} */
    _create() {

        // symbol_126
        this.add.image(726, 167, "forest", "Symbol 126");

        // fondo
        this.add.image(767, 448, "forest", "fondo");

        // water
        const water = this.add.sprite(917, 54, "forest", "water0001");

        // water0001
        const water0001 = this.add.sprite(918, 123, "forest", "water0001");

        // symbol_185
        this.add.image(549, 253, "forest", "Symbol 185");

        // sprite_148
        this.add.image(758, 393, "forest", "Sprite 148");

        // symbol_195
        this.add.image(1307, 244, "forest", "Symbol 195");

        // shape_202
        this.add.image(1110, 341, "forest", "shape 202");

        // sprite_345
        const sprite_345 = this.add.image(1184.4957158806087, 417.82619313434776, "forest", "sprite 345");
        sprite_345.setOrigin(0.7125974072745124, 0.9756936737572747);

        // symbol_222
        this.add.image(451, 710, "forest", "Symbol 222");

        // sprite_204
        const sprite_204 = this.add.image(248.4565167395822, 680.5871689076805, "forest", "Sprite 204");
        sprite_204.setOrigin(0.5964627515794247, 0.49339804791086717);

        // sprite_211
        const sprite_211 = this.add.image(146.68820698358644, 792.2547096773266, "forest", "Sprite 211");
        sprite_211.setOrigin(0.27889374268883843, 0.8142781055322537);

        // symbol_359
        this.add.image(327, 825, "forest", "Symbol 359");

        // symbol_224
        this.add.image(630, 765, "forest", "Symbol 224");

        // symbol_220
        this.add.image(497, 778, "forest", "Symbol 220");

        // fire0001
        const fire0001 = this.add.sprite(553, 958, "forest", "fire0001");
        fire0001.scaleX = 0.9;
        fire0001.scaleY = 0.9;

        // symbol_353
        const symbol_353 = this.add.image(497, 796, "forest", "Symbol 353");
        symbol_353.scaleX = 0.9;
        symbol_353.scaleY = 0.9;

        // symbol_357
        const symbol_357 = this.add.image(498, 806, "forest", "Symbol 357");

        // sprite_195
        this.add.image(550, 837, "forest", "Sprite 195");

        // symbol_361
        this.add.image(406, 898, "forest", "Symbol 361");

        // symbol_365
        this.add.image(280, 869, "forest", "Symbol 365");

        // sprite_401
        this.add.image(940, 597, "forest", "Sprite 401");

        // symbol_385
        const symbol_385 = this.add.image(808.7732036329768, 1021.2665932153564, "forest", "Symbol 385");
        symbol_385.setOrigin(0.5088747109169189, 0.9696676794335662);

        // lists
        const sort = [symbol_385, sprite_345, sprite_204, sprite_211, fire0001, symbol_357, symbol_353];

        // water (components)
        const waterAnimation = new Animation(water);
        waterAnimation.key = "water";
        waterAnimation.end = 6;

        // water0001 (components)
        const water0001Animation = new Animation(water0001);
        water0001Animation.key = "water";
        water0001Animation.end = 6;

        // fire0001 (components)
        const fire0001Animation = new Animation(fire0001);
        fire0001Animation.key = "fire";
        fire0001Animation.end = 20;

        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
