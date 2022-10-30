
// You can write more code here

/* START OF COMPILED CODE */

import RoomScene from "../RoomScene";
import Animation from "../../components/Animation";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Park extends RoomScene {

    constructor() {
        super("Park");

        /** @type {Array<Phaser.GameObjects.Sprite|Phaser.GameObjects.Image>} */
        this.sort;


        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            'forest': () => this.triggerRoom(80, 1115, 765),   
            'lake': () => this.triggerRoom(90, 390, 299),          
            'plaza': () => this.triggerRoom(50, 819, 700),        
        }

        this.music = "h_park"
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("park-pack", "assets/media/rooms/park/park-pack.json");
    }

    /** @returns {void} */
    _create() {

        // shape_8
        this.add.image(849, 166, "park", "shape 8");

        // bg0001
        this.add.image(738, 521, "park", "bg0001");

        // wf10001
        const wf10001 = this.add.sprite(1168, 503, "park", "wf10001");
        wf10001.flipX = true;
        wf10001.tintFill = true;
        wf10001.tintTopLeft = 7651182;
        wf10001.tintTopRight = 7651182;
        wf10001.tintBottomLeft = 7651182;
        wf10001.tintBottomRight = 7651182;

        // wf20001
        const wf20001 = this.add.sprite(1177, 513, "park", "wf20001");
        wf20001.flipX = true;

        // symbol_158
        this.add.image(616, 347, "park", "Symbol 158");

        // s_mbolo_330003
        this.add.image(705, 677, "park", "Símbolo 330003");

        // symbol_1022
        this.add.image(268, 311, "park", "Symbol 1022");

        // s_mbolo_5
        this.add.image(669, 190, "park", "Símbolo 5");

        // symbol_224
        this.add.image(615, 194, "park", "Symbol 224");

        // symbol_126_copia
        this.add.image(1008, 252, "park", "Symbol 126 copia");

        // symbol_2244
        this.add.image(330, 266, "park", "Symbol 2244");

        // symbol_191
        this.add.image(817, 436, "park", "Symbol 191");

        // symbol_148
        this.add.image(998, 457, "park", "Symbol 148");

        // symbol_171
        this.add.image(784, 466, "park", "Symbol 171");

        // symbol_176
        this.add.image(773, 387, "park", "Symbol 176");

        // symbol_252
        this.add.image(699, 564, "park", "Symbol 252");

        // symbol_190
        const symbol_190 = this.add.image(482.7457280493217, 542.0082891237556, "park", "Symbol 190");
        symbol_190.setOrigin(0.5112911384560764, 0.8372383565081178);

        // symbol_207_copia
        this.add.image(39, 484, "park", "Symbol 207 copia");

        // symbol_290
        this.add.image(1160, 546, "park", "Symbol 290");

        // symbol_102
        this.add.image(1594, 383, "park", "Symbol 102");

        // symbol_145_copia_4
        this.add.image(766, 778, "park", "Symbol 145 copia 4");

        // symbol_162
        const symbol_162 = this.add.image(193, 826, "park", "Symbol 162");

        // sprite_359
        const sprite_359 = this.add.image(62, 903, "park", "sprite 359");

        // symbol_75
        this.add.image(660, 875, "park", "Symbol 75");

        // symbol_153
        this.add.image(255, 380, "park", "Symbol 153");

        // symbol_102222
        this.add.image(524, 867, "park", "Symbol 102222");

        // symbol_160
        this.add.image(1437, 498, "park", "Symbol 160");

        // symbol_108
        this.add.image(1219, 301, "park", "Symbol 108");

        // symbol
        this.add.image(1482, 185, "park", "Symbol 2244");

        // sprite_323
        const sprite_323 = this.add.image(1197.4760678321727, 854.7712813986072, "park", "sprite 323");
        sprite_323.setOrigin(0.4715894539035902, 0.42532085026086575);

        // sprite_3233
        const sprite_3233 = this.add.image(1539, 679, "park", "sprite 3233");

        // sprite_318
        const sprite_318 = this.add.image(1410, 671, "park", "sprite 318");

        // ghost10001
        const ghost10001 = this.add.sprite(147, 302, "park", "ghost10001");

        // ghost20001
        const ghost20001 = this.add.sprite(990, 186, "park", "ghost20001");

        // ghost30001
        const ghost30001 = this.add.sprite(1448, 598, "park", "ghost30001");

        // tentacles010001
        const tentacles010001 = this.add.sprite(1169, 419, "park", "tentacles010001");

        // tentacles020001
        const tentacles020001 = this.add.sprite(1138, 439, "park", "tentacles020001");

        // tentacles030001
        const tentacles030001 = this.add.sprite(1090, 437, "park", "tentacles030001");

        // lists
        const sort = [ghost30001, symbol_162, sprite_359, sprite_3233, sprite_318, symbol_190];

        // wf10001 (components)
        const wf10001Animation = new Animation(wf10001);
        wf10001Animation.key = "wf1";
        wf10001Animation.end = 20;

        // wf20001 (components)
        const wf20001Animation = new Animation(wf20001);
        wf20001Animation.key = "wf2";
        wf20001Animation.end = 16;

        // ghost10001 (components)
        const ghost10001Animation = new Animation(ghost10001);
        ghost10001Animation.key = "ghost1";
        ghost10001Animation.end = 45;

        // ghost20001 (components)
        const ghost20001Animation = new Animation(ghost20001);
        ghost20001Animation.key = "ghost2";
        ghost20001Animation.end = 59;

        // ghost30001 (components)
        const ghost30001Animation = new Animation(ghost30001);
        ghost30001Animation.key = "ghost3";
        ghost30001Animation.end = 51;

        // tentacles010001 (components)
        const tentacles010001Animation = new Animation(tentacles010001);
        tentacles010001Animation.key = "tentacles01";
        tentacles010001Animation.end = 77;

        // tentacles020001 (components)
        const tentacles020001Animation = new Animation(tentacles020001);
        tentacles020001Animation.key = "tentacles02";
        tentacles020001Animation.end = 81;

        // tentacles030001 (components)
        const tentacles030001Animation = new Animation(tentacles030001);
        tentacles030001Animation.key = "tentacles03";
        tentacles030001Animation.end = 73;

        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    // Write your code here

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
