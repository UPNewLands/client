
// You can write more code here

/* START OF COMPILED CODE */

import RoomScene from "../RoomScene";
import Animation from "../../components/Animation";
import Button from "../../components/Button";
import ShowHint from "../../components/ShowHint";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Tropical extends RoomScene {

    constructor() {
        super("Tropical");

        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Sprite>} */
        this.sort;


        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            'surfer': () => this.triggerGame('CatchinWaves', 912),
            'central': () => this.triggerRoom(10, 263, 672),
            'port': () => this.triggerRoom(30, 555, 421),
        }
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("tropical-pack", "assets/media/rooms/tropical/tropical-pack.json");
    }

    /** @returns {void} */
    _create() {

        // sky
        this.add.image(756, 112, "tropical", "sky");

        // symbol_8
        this.add.image(286, 69, "tropical", "Symbol 103");

        // symbol_7
        this.add.image(496, 58, "tropical", "Symbol 103");

        // symbol_4
        const symbol_4 = this.add.image(408, 98, "tropical", "Symbol 103");
        symbol_4.flipX = true;

        // symbol_3
        this.add.image(210, 125, "tropical", "Symbol 103");

        // symbol_6
        this.add.image(426, 113, "tropical", "Symbol 105");

        // symbol_5
        this.add.image(263, 132, "tropical", "Symbol 105");

        // symbol_103
        this.add.image(62, 114, "tropical", "Symbol 103");

        // symbol_111
        this.add.image(132, 98, "tropical", "Symbol 111");

        // symbol_340
        this.add.image(240, 132, "tropical", "Symbol 340");

        // waterfall
        this.add.image(779, 367, "tropical", "waterfall");

        // wf100001
        const wf100001 = this.add.sprite(788, 76, "tropical", "wf100001");

        // wf40001
        const wf40001 = this.add.sprite(813, 183, "tropical", "wf40001");

        // wf20001
        const wf20001 = this.add.sprite(838, 149, "tropical", "wf20001");

        // wf90001
        const wf90001 = this.add.sprite(810, 261, "tropical", "wf90001");

        // symbol_97
        this.add.image(867, 213, "tropical", "Symbol 97");

        // wf
        const wf = this.add.sprite(907, 77, "tropical", "wf100001");
        wf.flipX = true;

        // wf_2
        const wf_2 = this.add.sprite(1068, 111, "tropical", "wf100001");
        wf_2.scaleX = 0.9;
        wf_2.scaleY = 0.9;

        // wf_1
        const wf_1 = this.add.sprite(1074, 26, "tropical", "wf100001");
        wf_1.scaleX = 0.9;
        wf_1.scaleY = 0.9;

        // symbol_105
        this.add.image(77, 177, "tropical", "Symbol 105");

        // symbol_22
        const symbol_22 = this.add.image(1104, 154, "tropical", "Symbol 103");
        symbol_22.angle = -27;
        symbol_22.flipX = true;

        // wf50001
        const wf50001 = this.add.sprite(958, 338, "tropical", "wf50001");

        // symbol_15
        this.add.image(1145, 200, "tropical", "Symbol 103");

        // symbol_14
        const symbol_14 = this.add.image(1052, 233, "tropical", "Symbol 103");
        symbol_14.flipX = true;

        // symbol_21
        this.add.image(1094, 202, "tropical", "Symbol 105");

        // symbol_13
        this.add.image(969, 115, "tropical", "Symbol 111");

        // waterfall2
        const waterfall2 = this.add.image(688, 221, "tropical", "waterfall2");

        // s_mbolo_4
        const s_mbolo_4 = this.add.image(592, 72, "tropical", "Símbolo 4");

        // wf60001
        const wf60001 = this.add.sprite(732, 366, "tropical", "wf60001");

        // symbol_11
        const symbol_11 = this.add.image(536, 120, "tropical", "Symbol 103");
        symbol_11.flipX = true;

        // symbol_10
        this.add.image(511, 138, "tropical", "Symbol 105");

        // symbol_113
        const symbol_113 = this.add.image(572, 108, "tropical", "Symbol 113");

        // symbol_9
        const symbol_9 = this.add.image(446, 78, "tropical", "Symbol 127");
        symbol_9.flipX = true;

        // symbol_12
        this.add.image(458, 116, "tropical", "Symbol 129");

        // symbol_129
        this.add.image(608, 125, "tropical", "Symbol 129");

        // symbol_130
        this.add.image(379, 144, "tropical", "Symbol 130");

        // symbol_132
        this.add.image(334, 202, "tropical", "Symbol 132");

        // symbol_117
        this.add.image(418, 842, "tropical", "Symbol 117");

        // s_mbolo_5
        this.add.image(561, 273, "tropical", "Símbolo 5");

        // symbol_135
        this.add.image(615, 318, "tropical", "Symbol 135");

        // symbol
        const symbol = this.add.image(-28, 97, "tropical", "Symbol 127");
        symbol.angle = -18;
        symbol.flipX = true;

        // symbol_2
        this.add.image(576, 311, "tropical", "Symbol 137");

        // s_mbolo_6
        this.add.image(474, 326, "tropical", "Símbolo 6");

        // symbol_119
        this.add.image(63, 194, "tropical", "Symbol 119");

        // symbol_141
        this.add.image(782, 543, "tropical", "Symbol 141");

        // symbol_143
        this.add.image(118, 244, "tropical", "Symbol 143");

        // symbol_186
        const symbol_186 = this.add.image(333, 161, "tropical", "Symbol 186");
        symbol_186.visible = false;

        // symbol_114
        const symbol_114 = this.add.image(102, 339, "tropical", "Symbol 114");
        symbol_114.flipX = true;

        // surfer
        const surfer = this.add.image(272, 821, "tropical", "surfer");

        // symbol_137
        this.add.image(109, 392, "tropical", "Symbol 137");

        // symbol_116
        this.add.image(33, 373, "tropical", "Symbol 116");

        // symbol_1
        const symbol_1 = this.add.image(451.15760334388256, 176.82254115530992, "tropical", "Symbol 186");
        symbol_1.setOrigin(0.9688794072817514, 0.5784261830549002);

        // symbol_190
        this.add.image(496, 189, "tropical", "Symbol 190");

        // symbol_344
        const symbol_344 = this.add.image(280.22225219557737, 358.4892245904664, "tropical", "Symbol 344");
        symbol_344.setOrigin(0.5294589400448916, 0.7336514787560539);

        // symbol_148
        const symbol_148 = this.add.image(24, 431, "tropical", "Symbol 148");

        // symbol_346
        const symbol_346 = this.add.image(239.45082729363148, 516.4377362937104, "tropical", "Symbol 346");
        symbol_346.setOrigin(0.6661379291551396, 1.0819074473408752);

        // symbol_127
        this.add.image(-16, 328, "tropical", "Symbol 127");

        // symbol_150
        this.add.image(832, 332, "tropical", "Symbol 150");

        // symbol_152
        this.add.image(417, 359, "tropical", "Symbol 152");

        // symbol_18
        this.add.image(1444, 102, "tropical", "Symbol 103");

        // symbol_19
        const symbol_19 = this.add.image(1242, 94, "tropical", "Symbol 103");
        symbol_19.flipX = true;

        // symbol_16
        this.add.image(1222, 131, "tropical", "Symbol 105");

        // symbol_17
        this.add.image(1428, 131, "tropical", "Symbol 105");

        // symbol_24
        const symbol_24 = this.add.image(1307, 66, "tropical", "Symbol 146");
        symbol_24.flipX = true;

        // symbol_167
        this.add.image(1181, 164, "tropical", "Symbol 167");

        // symbol_112
        this.add.image(1462, 176, "tropical", "Symbol 112");

        // symbol_146
        this.add.image(1133, 100, "tropical", "Symbol 146");

        // symbol_23
        const symbol_23 = this.add.image(1211, 225, "tropical", "Symbol 116");
        symbol_23.flipX = true;

        // symbol_20
        const symbol_20 = this.add.image(1071, 236, "tropical", "Symbol 340");
        symbol_20.angle = -7;
        symbol_20.flipX = true;

        // symbol_25
        const symbol_25 = this.add.image(1490, 48, "tropical", "Symbol 146");
        symbol_25.flipX = true;

        // symbol_176
        this.add.image(1411, 427, "tropical", "Symbol 176");

        // symbol_178
        this.add.image(1245, 404, "tropical", "Symbol 178");

        // symbol_180
        this.add.image(1346, 437, "tropical", "Symbol 180");

        // symbol_182
        this.add.image(1488, 526, "tropical", "Symbol 182");

        // symbol_388
        this.add.image(1397, 242, "tropical", "Symbol 388");

        // symbol_184
        this.add.image(1420, 449, "tropical", "Symbol 184");

        // symbol_328
        this.add.image(1399, 477, "tropical", "Symbol 328");

        // symbol_26
        this.add.image(1362, 522, "tropical", "Symbol 328");

        // symbol_194
        this.add.image(1370, 596, "tropical", "Symbol 194");

        // symbol_27
        this.add.image(1527, 552, "tropical", "Symbol 119");

        // symbol_28
        const symbol_28 = this.add.image(1516, 611, "tropical", "Symbol 119");
        symbol_28.angle = -23;

        // symbol_165
        this.add.image(1326, 698, "tropical", "Symbol 165");

        // symbol_353
        this.add.image(1561, 716, "tropical", "Symbol 353");

        // symbol_192
        const symbol_192 = this.add.image(1236, 622, "tropical", "Symbol 192");
        symbol_192.scaleX = 0.8;
        symbol_192.scaleY = 0.8;

        // symbol_170
        const symbol_170 = this.add.image(1134, 544, "tropical", "Symbol 170");

        // fire0001
        const fire0001 = this.add.sprite(1290, 827, "tropical", "fire0001");
        fire0001.scaleX = 0.6;
        fire0001.scaleY = 0.6;

        // symbol_323
        const symbol_323 = this.add.image(1236, 638, "tropical", "Symbol 323");
        symbol_323.scaleX = 0.6;
        symbol_323.scaleY = 0.6;

        // symbol_326
        const symbol_326 = this.add.image(1237, 646, "tropical", "Symbol 326");
        symbol_326.scaleX = 0.8;
        symbol_326.scaleY = 0.8;

        // symbol_31
        this.add.image(849, 508, "tropical", "Symbol 350");

        // symbol_30
        const symbol_30 = this.add.image(872, 626, "tropical", "Symbol 116");

        // symbol_350
        this.add.image(924, 432, "tropical", "Symbol 350");

        // symbol_375
        this.add.image(720, 758, "tropical", "Symbol 375");

        // symbol_335
        const symbol_335 = this.add.image(866.2836545486791, 934.9423273630141, "tropical", "Symbol 335");
        symbol_335.setOrigin(0.5147712225816522, 1.014773937180318);

        // symbol_337
        const symbol_337 = this.add.image(996.7091363716977, 963.8149182479211, "tropical", "Symbol 337");
        symbol_337.setOrigin(0.52586747915869, 0.8902885255463161);

        // symbol_358
        this.add.image(631, 882, "tropical", "Symbol 358");

        // symbol_140
        this.add.image(679, 924, "tropical", "Symbol 140");

        // symbol_354
        this.add.image(1462, 908, "tropical", "Symbol 354");

        // symbol_362
        const symbol_362 = this.add.image(456.81218805550185, 658.4508935728766, "tropical", "Symbol 362");
        symbol_362.setOrigin(0.22588840079288355, 0.9445452120761963);

        // symbol_366
        const symbol_366 = this.add.image(507.6093221742276, 689.4358396361006, "tropical", "Symbol 366");
        symbol_366.setOrigin(0.10870238897018925, 0.9755599943140716);

        // symbol_368
        const symbol_368 = this.add.image(663.4207856993245, 698.4659475096527, "tropical", "Symbol 368");
        symbol_368.setOrigin(0.8859617345157677, 0.9135304298383229);

        // symbol_371
        const symbol_371 = this.add.image(591.0301078735521, 708.4810014464286, "tropical", "Symbol 371");
        symbol_371.setOrigin(0.3529669582797068, 0.8825156476004477);

        // symbol_32
        this.add.image(569, 560, "tropical", "Symbol 362");

        // symbol_29
        this.add.image(637, 589, "tropical", "Symbol 366");

        // symbol_33
        this.add.image(688, 614, "tropical", "Symbol 371");

        // symbol_34
        this.add.image(724, 602, "tropical", "Symbol 368");

        // wf_3
        const wf_3 = this.add.sprite(715.8238398581328, 212.58818754649636, "tropical", "wf100001");
        wf_3.scaleX = 0.6627737239001715;
        wf_3.angle = -16;
        wf_3.setOrigin(0.260779879292004, 4.575109384069916);
        wf_3.tintTopLeft = 1503707;
        wf_3.tintTopRight = 1503707;
        wf_3.tintBottomLeft = 1503707;
        wf_3.tintBottomRight = 1503707;

        // wf130001
        const wf130001 = this.add.sprite(721, 319, "tropical", "wf130001");
        wf130001.scaleX = 0.5597882329842954;
        wf130001.angle = -7;
        wf130001.setOrigin(0.24539612227723714, 1.7773893774490837);
        wf130001.tintTopLeft = 1503707;
        wf130001.tintTopRight = 1503707;
        wf130001.tintBottomLeft = 1503707;
        wf130001.tintBottomRight = 1503707;

        // sparkles0001
        const sparkles0001 = this.add.sprite(712.0566312589104, 333.9101264922764, "tropical", "sparkles0001");
        sparkles0001.scaleX = 0.5992508224772785;
        sparkles0001.scaleY = 0.8073729195129792;
        sparkles0001.setOrigin(0.47297502200096725, 1.4282915662941031);

        // symbol_36
        const symbol_36 = this.add.image(387, 501, "tropical", "Symbol 116");

        // symbol_35
        this.add.image(415, 522, "tropical", "Symbol 137");

        // symbol_39
        this.add.image(578, 408, "tropical", "Symbol 137");

        // symbol_38
        const symbol_38 = this.add.image(488, 326, "tropical", "Symbol 127");
        symbol_38.flipX = true;

        // symbol_37
        const symbol_37 = this.add.image(547, 466, "tropical", "Symbol 148");

        // waves
        const waves = this.add.image(1239, 80, "tropical", "waves");

        // lists
        const sort = [symbol_366, symbol_362, symbol_371, symbol_368, symbol_30, symbol_170, fire0001, symbol_335, symbol_337, symbol_37, symbol_36, symbol_1, symbol_344, symbol_148, waterfall2, symbol_346, wf130001, wf_3, sparkles0001, wf60001, symbol_113, s_mbolo_4];

        // wf100001 (components)
        const wf100001Animation = new Animation(wf100001);
        wf100001Animation.key = "wf1";
        wf100001Animation.end = 6;

        // wf40001 (components)
        const wf40001Animation = new Animation(wf40001);
        wf40001Animation.key = "wf4";
        wf40001Animation.end = 30;

        // wf20001 (components)
        const wf20001Animation = new Animation(wf20001);
        wf20001Animation.key = "wf2";
        wf20001Animation.end = 6;

        // wf90001 (components)
        const wf90001Animation = new Animation(wf90001);
        wf90001Animation.key = "wf9";
        wf90001Animation.end = 12;

        // wf (components)
        const wfAnimation = new Animation(wf);
        wfAnimation.key = "wf1";
        wfAnimation.end = 6;

        // wf_2 (components)
        const wf_2Animation = new Animation(wf_2);
        wf_2Animation.key = "wf1";
        wf_2Animation.end = 6;

        // wf_1 (components)
        const wf_1Animation = new Animation(wf_1);
        wf_1Animation.key = "wf1";
        wf_1Animation.end = 6;

        // wf50001 (components)
        const wf50001Animation = new Animation(wf50001);
        wf50001Animation.key = "wf5";
        wf50001Animation.end = 12;

        // wf60001 (components)
        const wf60001Animation = new Animation(wf60001);
        wf60001Animation.key = "wf6";
        wf60001Animation.end = 12;

        // surfer (components)
        const surferButton = new Button(surfer);
        surferButton.spriteName = "surfer";
        const surferShowHint = new ShowHint(surfer);
        surferShowHint.text = "Go Surfing";

        // fire0001 (components)
        const fire0001Animation = new Animation(fire0001);
        fire0001Animation.key = "fire";
        fire0001Animation.end = 20;

        // wf_3 (components)
        const wf_3Animation = new Animation(wf_3);
        wf_3Animation.key = "wf1";
        wf_3Animation.end = 6;

        // wf130001 (components)
        const wf130001Animation = new Animation(wf130001);
        wf130001Animation.key = "wf13";
        wf130001Animation.end = 6;

        // sparkles0001 (components)
        const sparkles0001Animation = new Animation(sparkles0001);
        sparkles0001Animation.key = "sparkles";
        sparkles0001Animation.end = 30;

        // waves (components)
        const wavesButton = new Button(waves);
        wavesButton.spriteName = "waves";
        wavesButton.callback = () => this.interface.loadExternal('Waves');

        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    // Write your code here

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
