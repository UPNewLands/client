/* START OF COMPILED CODE */

import RoomScene from "../RoomScene";
import Animation from "../../components/Animation";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Forest extends RoomScene {

    constructor() {
        super("Forest");

        /** @type {Phaser.GameObjects.Image[]} */
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

        // sky
        this.add.image(687, 172, "forest", "sky");

        // bg
        this.add.image(652, 468, "forest", "bg");

        // symbol_70
        this.add.image(747, 697, "halloween", "Symbol 70");

        // water0001
        const water0001 = this.add.sprite(551, 371, "forest", "water0001");

        // symbol_187
        this.add.image(392, 342, "forest", "Symbol 187");

        // symbol_195
        this.add.image(1313, 266, "forest", "Symbol 195");

        // s_mbolo_2
        this.add.image(1105, 307, "forest", "Símbolo 2");

        // symbol_126_copia_copia
        const symbol_126_copia_copia = this.add.image(880.1766584675588, 421.4417225699897, "forest", "Symbol 126 copia copia");
        symbol_126_copia_copia.setOrigin(0.3612888732715406, 0.6379709908011297);

        // symbol_105
        this.add.image(1361, 332, "forest", "Symbol 105");

        // sprite_204
        this.add.image(232, 648, "forest", "Sprite 204");

        // sprite_211
        const sprite_211 = this.add.image(228, 658, "forest", "Sprite 211");

        // symbol_222
        this.add.image(446, 711, "forest", "Symbol 222");

        // symbol_192
        this.add.image(505, 779, "forest", "Symbol 192");

        // fire0001
        const fire0001 = this.add.sprite(557, 939, "forest", "fire0001");
        fire0001.scaleX = 0.8;
        fire0001.scaleY = 0.8;

        // symbol_353
        const symbol_353 = this.add.image(505, 796, "forest", "Symbol 353");
        symbol_353.scaleX = 0.8;
        symbol_353.scaleY = 0.8;

        // symbol_326
        this.add.image(503, 810, "forest", "Symbol 326");

        // symbol_224
        this.add.image(623, 767, "forest", "Symbol 224");

        // symbol_359
        this.add.image(308, 815, "forest", "Symbol 359");

        // symbol_361
        this.add.image(396, 900, "forest", "Symbol 361");

        // symbol_365
        this.add.image(276, 848, "forest", "Symbol 365");

        // sprite_195
        this.add.image(580, 849, "forest", "Sprite 195");

        // symbol_385
        const symbol_385 = this.add.image(779.0866359105157, 966.601729106229, "forest", "Symbol 385");
        symbol_385.setOrigin(0.4909747256726338, 0.9283493296575904);

        // s_mbolo_82_copia
        const s_mbolo_82_copia = this.add.image(508.8775533861769, 938.6019325824068, "forest", "Símbolo 82 copia");
        s_mbolo_82_copia.setOrigin(0.4892923464576023, 0.9911508661000177);

        // symbol_257
        const symbol_257 = this.add.image(215.22833479244758, 693.027506819234, "forest", "Symbol 257");
        symbol_257.setOrigin(0.5115844959517015, 0.5292281637491086);

        // symbol_261
        const symbol_261 = this.add.image(185.74412437695915, 963.6017291062288, "forest", "Symbol 261");
        symbol_261.setOrigin(0.44820517678610056, 0.9955751801873529);

        // lists
        const sort = [symbol_261, symbol_385, symbol_257, s_mbolo_82_copia, sprite_211, symbol_126_copia_copia];

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
