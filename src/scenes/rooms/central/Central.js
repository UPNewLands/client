
// You can write more code here

/* START OF COMPILED CODE */

import RoomScene from "../RoomScene";
import Animation from "../../components/Animation";
import Button from "../../components/Button";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Central extends RoomScene {

    constructor() {
        super("Central");

        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            'plaza': () => this.triggerRoom(50, 128, 652),
            'town': () => this.triggerRoom(10, 1310, 408),
        }
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("central-pack", "assets/media/rooms/central/central-pack.json");
    }

    /** @returns {void} */
    _create() {

        // sky
        this.add.image(811, 179, "central", "sky");

        // sea
        this.add.image(719, 646, "central", "sea");

        // s_mbolo_32
        this.add.image(732, 266, "central", "Símbolo 32");

        // symbol_888
        this.add.image(420, 217, "central", "Symbol 888");

        // waves
        this.add.image(679, 881, "central", "waves");

        // s_mbolo_26
        this.add.image(196, 647, "central", "Símbolo 26");

        // s_mbolo_25
        this.add.image(148, 492, "central", "Símbolo 25");

        // s_mbolo_23
        this.add.image(495, 553, "central", "Símbolo 23");

        // s_mbolo_31
        this.add.image(871, 440, "central", "Símbolo 31");

        // symbol_1_copia
        this.add.image(795, 507, "central", "Symbol 1 copia");

        // s_mbolo_22
        this.add.image(810, 657, "central", "Símbolo 22");

        // s_mbolo_36
        this.add.image(767, 480, "central", "Símbolo 36");

        // s_mbolo
        this.add.image(811, 623, "central", "Símbolo 38");

        // s_mbolo_38
        this.add.image(1518, 458, "central", "Símbolo 38");

        // symbol_88
        this.add.image(1525, 310, "central", "Symbol 88");

        // symbol_134
        this.add.image(199, 166, "central", "Symbol 134");

        // s_mbolo_41
        this.add.image(1015, 289, "central", "Símbolo 41");

        // s_mbolo_43
        this.add.image(425, 766, "central", "Símbolo 43");

        // s_mbolo_45
        this.add.image(1002, 769, "central", "Símbolo 45");

        // s_mbolo_46
        const s_mbolo_46 = this.add.image(503.71957396351394, 823.8095337313498, "central", "Símbolo 46");
        s_mbolo_46.setOrigin(0.4564188103342839, 0.8591510088114434);

        // sprite_331
        this.add.image(1226, 672, "central", "Sprite 331");

        // shape_315
        const shape_315 = this.add.image(127, 658, "central", "shape 315");
        shape_315.scaleX = 0.7;
        shape_315.scaleY = 0.7;

        // s_mbolo_50
        this.add.image(120, 573, "central", "Símbolo 50");

        // symbol_140_copia
        this.add.image(15, 711, "central", "Symbol 140 copia");

        // symbol
        const symbol = this.add.image(412, 582, "central", "Symbol 888");

        // sprite_181
        const sprite_181 = this.add.image(871, 613, "central", "Sprite 181");

        // leftsign
        const leftsign = this.add.image(1515.515000541477, 530.7786707096961, "central", "leftsign");
        leftsign.setOrigin(0.5453756490711842, 0.8388048463981765);

        // fire0001
        const fire0001 = this.add.sprite(136, 609, "central", "fire0001");
        fire0001.scaleX = 0.7;
        fire0001.scaleY = 0.7;

        // s_mbolo_47
        const s_mbolo_47 = this.add.image(1317.7246649262058, 625.5810540548766, "central", "Símbolo 47");
        s_mbolo_47.setOrigin(0.43234438353652055, 0.826887714414231);

        // s_mbolo_522
        const s_mbolo_522 = this.add.image(1103, 825.8412781094582, "central", "Símbolo 522");
        s_mbolo_522.setOrigin(0.5, 0.8600185233254818);

        // s_mbolo_14
        this.add.image(133, 308, "central", "Símbolo 14");

        // rightsign
        this.add.image(-38, 241, "central", "rightsign");

        // s_mbolo_33
        this.add.image(1401, 818, "central", "Símbolo 33");

        // s_mbolo_8
        const s_mbolo_8 = this.add.image(1301.5087589535815, 808.6120913739072, "central", "Símbolo 8");
        s_mbolo_8.setOrigin(0.21535311676959507, 0.9401741624899851);

        // s_mbolo_3
        this.add.image(816, 100, "central", "Símbolo 3");

        // middle
        const middle = this.add.image(633.0350563839235, 345.7908853401799, "central", "middle");
        middle.setOrigin(0.4134464067581241, 0.907486647093364);

        // s_mbolo_61
        this.add.image(1298, 816, "central", "Símbolo 61");

        // s_mbolo_60
        const s_mbolo_60 = this.add.image(183.7229668306538, 806.998301904448, "central", "Símbolo 60");
        s_mbolo_60.setOrigin(0.5769974923074122, 0.5995634240356017);

        // arbol_1
        this.add.image(62, 258, "central", "Arbol 1");

        // back
        const back = this.add.image(1035.6449742663624, 371.12822182090406, "central", "back");
        back.setOrigin(0.564596912509729, 0.8230471564561165);

        // flyer
        const flyer = this.add.image(1048.9853115467968, 395.64101275534165, "central", "flyer");
        flyer.setOrigin(0.49976274689000516, 1.706211365443236);
        flyer.flipX = true;

        // front
        const front = this.add.image(941.8064533032593, 484.59533527092384, "central", "front");
        front.setOrigin(0.5725806534473497, 2.1080223843686166);

        // snow
        const snow = this.add.image(1030.8509519987576, 432.58486429565227, "central", "snow");
        snow.scaleX = 0.8;
        snow.scaleY = 0.8;
        snow.setOrigin(0.5258848467324116, 1.7925836390153003);
        snow.flipX = true;

        // s_mbolo_21
        this.add.image(1103, 737, "central", "Símbolo 21");

        // symbol_1
        const symbol_1 = this.add.image(1169.7584450245981, 481.1705985875134, "central", "Symbol 88");
        symbol_1.setOrigin(0.5283240775273699, 0.7297691522780999);

        // symbol_2
        const symbol_2 = this.add.image(-8, 413, "central", "Symbol 158");
        symbol_2.setOrigin(0.5091912720913176, 0.8849929064665125);

        // symbol_158
        const symbol_158 = this.add.image(815.897109770254, 609.8265862152423, "central", "Symbol 158");
        symbol_158.setOrigin(0.503676508836527, 0.869593190207852);

        // lists
        const sort = [sprite_181, symbol, s_mbolo_60, s_mbolo_8, s_mbolo_47, symbol_1, s_mbolo_46, s_mbolo_522, back, front, flyer, snow, symbol_158, symbol_2, middle, leftsign];

        // fire0001 (components)
        const fire0001Animation = new Animation(fire0001);
        fire0001Animation.key = "fire";
        fire0001Animation.end = 20;

        // flyer (components)
        const flyerButton = new Button(flyer);
        flyerButton.spriteName = "flyer";
        flyerButton.callback = () => this.world.interface.main.changelog.visible = true;
        flyerButton.activeFrame = false;

        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
