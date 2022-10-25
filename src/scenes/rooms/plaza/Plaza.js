
// You can write more code here

/* START OF COMPILED CODE */

import RoomScene from "../RoomScene";
import Animation from "../../components/Animation";
import Button from "../../components/Button";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Plaza extends RoomScene {

    constructor() {
        super("Plaza");

        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            'central': () => this.triggerRoom(1, 1198, 745),
            'park': () => this.triggerRoom(60, 188, 709),   
            'pizza': () => this.triggerRoom(53, 384, 620),          
            'secret': () => null,
            'pet': () => this.triggerRoom(52, 384, 620),
        }

        this.music = "plaza"
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("plaza-pack", "assets/media/rooms/plaza/plaza-pack.json");
    }

    /** @returns {void} */
    _create() {

        // sky
        this.add.image(814, 123, "plaza", "sky");

        // s_mbolo_64
        this.add.image(750, 644, "plaza", "Símbolo 64");

        // s_mbolo_96
        this.add.image(845, 722, "plaza", "Símbolo 96");

        // s_mbolo_97
        this.add.image(1202, 513, "plaza", "Símbolo 97");

        // s_mbolo_95
        this.add.image(444, 689, "plaza", "Símbolo 95");

        // s_mbolo_107
        this.add.image(1166, 511, "plaza", "Símbolo 107");

        // symbol_256
        this.add.image(525, 647, "plaza", "Symbol 256");

        // s_mbolo_60
        this.add.image(659, 330, "plaza", "Símbolo 60");

        // s_mbolo_106
        this.add.image(886, 686, "plaza", "Símbolo 106");

        // s_mbolo_105
        this.add.image(447, 649, "plaza", "Símbolo 105");

        // s_mbolo_43
        this.add.image(731, 620, "plaza", "Símbolo 43");

        // s_mbolo_28
        this.add.image(168, 263, "plaza", "Símbolo 28");

        // symbol_82
        this.add.image(17, 261, "plaza", "Symbol 82");

        // s_mbolo_98
        this.add.image(870, 76, "plaza", "Símbolo 98");

        // s_mbolo_56
        this.add.image(1327, 154, "plaza", "Símbolo 56");

        // symbol_118
        this.add.image(196, 433, "plaza", "Symbol 118");

        // smoke0001
        const smoke0001 = this.add.sprite(1073, 15, "plaza", "smoke0001");

        // symbol_242_copia
        this.add.image(246, 452, "plaza", "Symbol 242 copia");

        // symbol_242
        this.add.image(231, 388, "plaza", "Symbol 242");

        // symbol_4
        this.add.image(98, 439, "plaza", "Symbol 4");

        // symbol_263
        this.add.image(65, 521, "plaza", "Symbol 263");

        // s_mbolo_23
        this.add.image(937, 274, "plaza", "Símbolo 23");

        // pizzadoor
        const pizzadoor = this.add.image(1025, 421, "plaza", "pizzadoor");

        // s_mbolo_5
        this.add.image(554, 181, "plaza", "Símbolo 5");

        // s_mbolo_99
        this.add.image(341, 514, "plaza", "Símbolo 99");

        // s_mbolo_101
        this.add.image(733, 529, "plaza", "Símbolo 101");

        // s_mbolo_104
        this.add.image(792, 597, "plaza", "Símbolo 104");

        // s_mbolo_72
        this.add.image(698, 550, "plaza", "Símbolo 72");

        // s_mbolo_100
        const s_mbolo_100 = this.add.image(665.4527516054771, 756.944967890457, "plaza", "Símbolo 100");
        s_mbolo_100.setOrigin(0.4952097572924989, 0.6038421741290502);

        // s_mbolo_102
        const s_mbolo_102 = this.add.image(1088.3597696137265, 594.4331585208872, "plaza", "Símbolo 102");
        s_mbolo_102.setOrigin(0.542229454935921, 0.4870768530221246);

        // s_mbolo_103
        const s_mbolo_103 = this.add.image(1291.3582548164316, 543.7559743123655, "plaza", "Símbolo 103");
        s_mbolo_103.setOrigin(0.4718682110086761, 0.6464850551027547);

        // tentacles010001
        const tentacles010001 = this.add.sprite(419, 682, "plaza", "tentacles010001");

        // tentacles020001
        const tentacles020001 = this.add.sprite(837, 654, "plaza", "tentacles020001");

        // tentacles030001
        const tentacles030001 = this.add.sprite(902, 698, "plaza", "tentacles030001");

        // tentacles
        const tentacles = this.add.sprite(1231, 500, "plaza", "tentacles020001");

        // tentacles_1
        const tentacles_1 = this.add.sprite(1154, 475, "plaza", "tentacles030001");

        // shopdoor
        const shopdoor = this.add.image(431, 468, "plaza", "shopdoor");

        // s_mbolo_20
        this.add.image(415, 543, "plaza", "Símbolo 20");

        // s_mbolo_21
        this.add.image(469, 539, "plaza", "Símbolo 21");

        // s_mbolo_69
        this.add.image(496, 581, "plaza", "Símbolo 69");

        // shape_194
        this.add.image(446, 849, "plaza", "Shape 194");

        // s_mbolo_34
        this.add.image(359, 808, "plaza", "Símbolo 34");

        // sprite_193
        this.add.image(240, 837, "plaza", "Sprite 193");

        // fire0001
        const fire0001 = this.add.sprite(401, 974, "plaza", "fire0001");
        fire0001.scaleX = 0.5;
        fire0001.scaleY = 0.5;

        // s_mbolo_73
        this.add.image(1194, 796, "plaza", "Símbolo 73");

        // s_mbolo_94
        const s_mbolo_94 = this.add.image(1323.8427832972393, 592.9002247740751, "plaza", "Símbolo 94");
        s_mbolo_94.setOrigin(0.38018313932180886, 0.23038544759246476);

        // s_mbolo_108
        this.add.image(742, 275, "plaza", "Símbolo 108");

        // s_mbolo_109
        const s_mbolo_109 = this.add.image(778.5962532994058, 900.5779351610272, "plaza", "Símbolo 109");
        s_mbolo_109.setOrigin(0.6107464545569242, 0.7368005101385497);

        // lists
        const sort = [s_mbolo_100, s_mbolo_102, s_mbolo_103, s_mbolo_109, s_mbolo_94];

        // smoke0001 (components)
        const smoke0001Animation = new Animation(smoke0001);
        smoke0001Animation.key = "smoke";
        smoke0001Animation.end = 30;

        // pizzadoor (components)
        const pizzadoorButton = new Button(pizzadoor);
        pizzadoorButton.spriteName = "pizzadoor";
        pizzadoorButton.activeFrame = false;

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
        tentacles030001Animation.end = 71;

        // tentacles (components)
        const tentaclesAnimation = new Animation(tentacles);
        tentaclesAnimation.key = "tentacles02";
        tentaclesAnimation.end = 81;

        // tentacles_1 (components)
        const tentacles_1Animation = new Animation(tentacles_1);
        tentacles_1Animation.key = "tentacles03";
        tentacles_1Animation.end = 71;

        // shopdoor (components)
        const shopdoorButton = new Button(shopdoor);
        shopdoorButton.spriteName = "shopdoor";
        shopdoorButton.activeFrame = false;

        // fire0001 (components)
        const fire0001Animation = new Animation(fire0001);
        fire0001Animation.key = "fire";
        fire0001Animation.end = 20;

        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    // Write your code here

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
