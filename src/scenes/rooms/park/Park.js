
// You can write more code here

/* START OF COMPILED CODE */

import RoomScene from "../RoomScene";
import Animation from "../../components/Animation";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Park extends RoomScene {

    constructor() {
        super("Park");

        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            'forest': () => this.triggerRoom(80, 1115, 765),   
            'lake': () => this.triggerRoom(90, 390, 299),          
            'plaza': () => this.triggerRoom(50, 819, 700),        
        }

        this.music = "park"
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("park-pack", "assets/media/rooms/park/park-pack.json");
    }

    /** @returns {void} */
    _create() {

        // sky
        this.add.image(742, 112, "park", "sky");

        // symbol
        const symbol = this.add.image(809, 210, "park", "Symbol 150");
        symbol.flipX = true;

        // symbol_150
        this.add.image(706, 193, "park", "Symbol 150");

        // symbol_79
        this.add.image(570, 631, "park", "Symbol 79");

        // s_mbolo_8
        this.add.image(168, 257, "park", "Símbolo 8");

        // s_mbolo_13
        const s_mbolo_13 = this.add.image(641, 379, "park", "Símbolo 5");
        s_mbolo_13.scaleX = 0.8;
        s_mbolo_13.scaleY = 0.8;
        s_mbolo_13.flipX = true;

        // symbol_1
        const symbol_1 = this.add.image(653, 261, "park", "Symbol 150");
        symbol_1.flipX = true;

        // symbol_81
        this.add.image(1229, 577, "park", "Symbol 81");

        // s_mbolo_330001
        this.add.image(675, 693, "park", "Símbolo 330001");

        // water10001
        const water10001 = this.add.sprite(1177, 487, "park", "water10001");
        water10001.scaleX = 0.9580913382652938;
        water10001.scaleY = 0.8842137984537657;
        water10001.angle = -36;
        water10001.flipX = true;
        water10001.flipY = true;
        water10001.alpha = 0.8;
        water10001.alphaTopLeft = 0.8;
        water10001.alphaTopRight = 0.8;
        water10001.alphaBottomLeft = 0.8;
        water10001.alphaBottomRight = 0.8;
        water10001.tintFill = true;

        // symbol_191
        this.add.image(856, 417, "park", "Symbol 191");

        // s_mbolo_2
        this.add.image(503, 492, "park", "Símbolo 2");

        // s_mbolo_6
        const s_mbolo_6 = this.add.image(1239, 191, "park", "Símbolo 5");
        s_mbolo_6.scaleX = 0.8;
        s_mbolo_6.scaleY = 0.8;

        // s_mbolo_4
        const s_mbolo_4 = this.add.image(942, 237, "park", "Símbolo 5");
        s_mbolo_4.scaleX = 0.6;
        s_mbolo_4.scaleY = 0.6;
        s_mbolo_4.flipX = true;

        // s_mbolo_3
        this.add.image(1066, 548, "park", "Símbolo 3");

        // s_mbolo_11
        this.add.image(511, 637, "park", "Símbolo 11");

        // symbol_148
        this.add.image(1006, 449, "park", "Symbol 148");

        // symbol_171
        const symbol_171 = this.add.image(777.5786284000865, 455.2167933176267, "park", "Symbol 171");
        symbol_171.setOrigin(0.43311045164578854, 0.5213635509196793);

        // symbol_1762
        const symbol_1762 = this.add.image(789.389909695933, 523.2481574416453, "park", "Symbol 1762");
        symbol_1762.setOrigin(0.498478516299564, 0.8701646305241629);

        // symbol_190
        const symbol_190 = this.add.image(491.3646753660954, 583.4955824274214, "park", "Symbol 190");
        symbol_190.setOrigin(0.4917852410584481, 0.8948840619378414);

        // symbol_173_copia
        this.add.image(593, 714, "park", "Symbol 173 copia");

        // s_mbolo_12
        this.add.image(771, 704, "park", "Símbolo 12");

        // symbol_176
        this.add.image(746, 793, "park", "Symbol 176");

        // symbol_178
        const symbol_178 = this.add.image(477, 837, "park", "Symbol 178");

        // symbol_172
        const symbol_172 = this.add.image(932, 867, "park", "Symbol 172");

        // s_mbolo
        const s_mbolo = this.add.image(740, 816.9501296940946, "park", "Símbolo 12");
        s_mbolo.setOrigin(0.5, 0.7631882383966437);

        // stairs
        this.add.image(1226, 913, "park", "stairs");

        // sprite_318
        const sprite_318 = this.add.image(1426.892172865238, 721.0191597733333, "park", "sprite 318");
        sprite_318.setOrigin(0.48665268512335036, 0.8231162476388884);

        // stairs2
        this.add.image(1505, 779, "park", "stairs2");

        // entry0001
        const entry0001 = this.add.image(5, 931, "park", "entry0001");
        entry0001.setOrigin(0.5, 0.5716117530726303);
        entry0001.flipX = true;

        // s_mbolo_1
        const s_mbolo_1 = this.add.image(1091, 220, "park", "Símbolo 5");
        s_mbolo_1.scaleX = 0.8;
        s_mbolo_1.scaleY = 0.8;

        // s_mbolo_5
        const s_mbolo_5 = this.add.image(1177, 228, "park", "Símbolo 5");
        s_mbolo_5.scaleX = 0.8;
        s_mbolo_5.scaleY = 0.8;
        s_mbolo_5.flipX = true;

        // sprite_206
        this.add.image(1120, 213, "park", "sprite 206");

        // s_mbolo_7
        const s_mbolo_7 = this.add.image(1352, 164, "park", "Símbolo 5");
        s_mbolo_7.scaleX = 0.8;
        s_mbolo_7.scaleY = 0.8;

        // sprite
        const sprite = this.add.image(1289, 193, "park", "sprite 206");
        sprite.scaleX = 0.6;
        sprite.scaleY = 0.6;

        // sprite_1
        this.add.image(1392, 190, "park", "sprite 206");

        // s_mbolo_10
        const s_mbolo_10 = this.add.image(1519, 259, "park", "Símbolo 5");
        s_mbolo_10.scaleX = 0.8;
        s_mbolo_10.scaleY = 0.8;

        // s_mbolo_9
        const s_mbolo_9 = this.add.image(1459, 266, "park", "Símbolo 5");
        s_mbolo_9.scaleX = 0.8;
        s_mbolo_9.scaleY = 0.8;

        // symbol_109
        this.add.image(1516, 223, "park", "Symbol 109");

        // sprite_240
        this.add.image(1411, 373, "park", "sprite 240");

        // sprite_178
        this.add.image(1, 137, "park", "sprite 178");

        // sprite_278
        this.add.image(95, 221, "park", "sprite 278");

        // sprite_189
        this.add.image(48, 446, "park", "sprite 189");

        // sprite_276
        this.add.image(58, 425, "park", "sprite 276");

        // sprite_230
        this.add.image(162, 498, "park", "sprite 230");

        // sprite_331
        this.add.image(60, 525, "park", "sprite 331");

        // sprite_228
        this.add.image(181, 526, "park", "sprite 228");

        // sprite_329
        this.add.image(43, 558, "park", "sprite 329");

        // sprite_364
        this.add.image(-42, 341, "park", "sprite 364");

        // water20001
        const water20001 = this.add.sprite(1185, 505, "park", "water20001");
        water20001.scaleX = 0.8524246542788476;
        water20001.scaleY = 0.9387169648844497;
        water20001.angle = 3;
        water20001.flipX = true;
        water20001.tintFill = true;

        // symbol_153
        this.add.image(253, 325, "park", "Symbol 153");

        // symbol_245
        this.add.image(1277, 214, "park", "Symbol 245");

        // symbol_248
        this.add.image(634, 187, "park", "Symbol 248");

        // symbol_2
        this.add.image(22, 215, "park", "Symbol 245");

        // lists
        const sort = [s_mbolo, symbol_190, entry0001, sprite_318, symbol_178, symbol_172, symbol_171, symbol_1762];

        // water10001 (components)
        const water10001Animation = new Animation(water10001);
        water10001Animation.key = "water1";
        water10001Animation.end = 7;

        // water20001 (components)
        const water20001Animation = new Animation(water20001);
        water20001Animation.key = "water2";
        water20001Animation.end = 16;

        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    // Write your code here

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
