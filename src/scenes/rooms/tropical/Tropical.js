
// You can write more code here

/* START OF COMPILED CODE */

import RoomScene from "../RoomScene";
import Animation from "../../components/Animation";
import SimpleButton from "../../components/SimpleButton";
import ShowHint from "../../components/ShowHint";
import Button from "../../components/Button";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Tropical extends RoomScene {

    constructor() {
        super("Tropical");

        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            'surfer': () => this.triggerGame('catchinWaves', 912),
            'central': () => this.triggerRoom(10, 263, 672),
            'port': () => this.triggerRoom(30, 555, 421),
        }

        this.music = "tropical_forest"
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("tropical-pack", "assets/media/rooms/tropical/tropical-pack.json");
    }

    /** @returns {void} */
    _create() {

        // symbol_77
        this.add.image(677, 144, "tropical", "Symbol 77");

        // symbol_78
        this.add.image(821, 339, "tropical", "Symbol 78");

        // wf90001
        const wf90001 = this.add.sprite(810, 277, "tropical", "wf90001");
        wf90001.tintFill = true;
        wf90001.tintTopLeft = 9689753;
        wf90001.tintTopRight = 9689753;
        wf90001.tintBottomLeft = 9689753;
        wf90001.tintBottomRight = 9689753;

        // wf110001
        const wf110001 = this.add.sprite(833, 210, "tropical", "wf110001");
        wf110001.tintFill = true;
        wf110001.tintTopLeft = 9689753;
        wf110001.tintTopRight = 9689753;
        wf110001.tintBottomLeft = 9689753;
        wf110001.tintBottomRight = 9689753;

        // wf
        const wf = this.add.sprite(892, 147, "tropical", "wf100001");
        wf.tintFill = true;
        wf.tintTopLeft = 9689753;
        wf.tintTopRight = 9689753;
        wf.tintBottomLeft = 9689753;
        wf.tintBottomRight = 9689753;

        // wf100001
        const wf100001 = this.add.sprite(790, 150, "tropical", "wf100001");
        wf100001.tintFill = true;
        wf100001.tintTopLeft = 9689753;
        wf100001.tintTopRight = 9689753;
        wf100001.tintBottomLeft = 9689753;
        wf100001.tintBottomRight = 9689753;

        // s_mbolo_39
        this.add.image(806, 184, "tropical", "Símbolo 39");

        // symbol_329
        const symbol_329 = this.add.image(791, 206, "halloween", "Symbol 329");
        symbol_329.flipX = true;

        // s_mbolo_37
        this.add.image(709, 219, "tropical", "Símbolo 37");

        // wf70001
        const wf70001 = this.add.sprite(734, 193, "tropical", "wf70001");
        wf70001.angle = 5;
        wf70001.tintFill = true;
        wf70001.tintTopLeft = 9689753;
        wf70001.tintTopRight = 9689753;
        wf70001.tintBottomLeft = 9689753;
        wf70001.tintBottomRight = 9689753;

        // s_mbolo_40
        this.add.image(764, 545, "tropical", "Símbolo 40");

        // symbol_192
        this.add.image(1230, 597, "tropical", "Symbol 192");

        // s_mbolo_33
        this.add.image(1141, 259, "tropical", "Símbolo 33");

        // s_mbolo_29
        this.add.image(1387, 226, "tropical", "Símbolo 29");

        // symbol_870001
        const symbol_870001 = this.add.image(1400, 437, "tropical", "Symbol 870001");

        // symbol_585
        const symbol_585 = this.add.image(1192, 493, "tropical", "Symbol 585");

        // symbol
        this.add.image(1018, 393, "tropical", "Symbol 116");

        // symbol_389_copia
        this.add.image(598, 157, "halloween", "Symbol 389 copia");

        // symbol_190
        const symbol_190 = this.add.image(520.3817437025295, 235.20974179001223, "tropical", "Symbol 190");
        symbol_190.setOrigin(0.5480679132914158, 0.9418653416907732);

        // symbol_128
        this.add.image(1443, 582, "tropical", "Symbol 128");

        // s_mbolo_36
        this.add.image(652, 586, "tropical", "Símbolo 36");

        // symbol_116
        this.add.image(863, 621, "tropical", "Symbol 116");

        // s_mbolo_38
        this.add.image(854, 340, "tropical", "Símbolo 38");

        // s_mbolo_32
        this.add.image(1347, 573, "tropical", "Símbolo 32");

        // s_mbolo_31
        this.add.image(1226, 659, "tropical", "Símbolo 31");

        // fire0001
        const fire0001 = this.add.sprite(1232, 560, "halloween", "fire0001");
        fire0001.scaleX = 0.7;
        fire0001.scaleY = 0.7;

        // symbol_323
        const symbol_323 = this.add.image(1230, 612, "tropical", "Symbol 323");
        symbol_323.scaleX = 0.6;
        symbol_323.scaleY = 0.6;

        // s_mbolo_82_copia
        this.add.image(1226, 572, "halloween", "Símbolo 82 copia");

        // symbol_326
        this.add.image(1227, 622, "tropical", "Symbol 326");

        // symbol_186
        const symbol_186 = this.add.image(448.4740426679828, 181.40820747265275, "tropical", "Symbol 186");
        symbol_186.setOrigin(0.9225160423332651, 0.6026889233053994);

        // symbol_353
        this.add.image(1551, 662, "tropical", "Symbol 353");

        // surfer
        const surfer = this.add.image(338, 831, "tropical", "surfer");
        surfer.tintTopLeft = 12303291;
        surfer.tintTopRight = 12303291;
        surfer.tintBottomLeft = 12303291;
        surfer.tintBottomRight = 12303291;

        // s_mbolo_27
        const s_mbolo_27 = this.add.image(936, 805, "tropical", "Símbolo 27");

        // symbol_100
        this.add.image(1334, 669, "tropical", "Symbol 100");

        // symbol_354
        this.add.image(1467, 864, "tropical", "Symbol 354");

        // s_mbolo_35
        this.add.image(772, 484, "tropical", "Símbolo 35");

        // s_mbolo_34
        this.add.image(538, 825, "tropical", "Símbolo 34");

        // symbol_344
        const symbol_344 = this.add.image(345.40753465026904, 373.17032510972723, "tropical", "Symbol 344");
        symbol_344.setOrigin(0.7062345796592207, 0.7738169900198515);

        // s_mbolo_26
        this.add.image(99, 349, "tropical", "Símbolo 26");

        // s_mbolo_28
        const s_mbolo_28 = this.add.image(500.1083992658034, 426.93586935872077, "tropical", "Símbolo 28");
        s_mbolo_28.setOrigin(0.4729064658353319, 0.5966970202390334);

        // s_mbolo_24
        this.add.image(647, 599, "tropical", "Símbolo 24");

        // s_mbolo_25
        const s_mbolo_25 = this.add.image(568, 668, "tropical", "Símbolo 25");

        // s_mbolo_23
        this.add.image(201, 954, "tropical", "Símbolo 23");

        // symbol_147
        this.add.image(969, 415, "tropical", "Symbol 147");

        // symbol_170
        this.add.image(912, 473, "tropical", "Symbol 170");

        // symbol_207_copia
        this.add.image(48, 716, "halloween", "Symbol 207 copia");

        // ghost10001
        const ghost10001 = this.add.sprite(749, 110, "halloween", "ghost10001");

        // ghost20001
        const ghost20001 = this.add.sprite(895, 199, "halloween", "ghost20001");

        // wf60001
        const wf60001 = this.add.sprite(756, 362, "tropical", "wf60001");
        wf60001.tintFill = true;
        wf60001.tintTopLeft = 9689753;
        wf60001.tintTopRight = 9689753;
        wf60001.tintBottomLeft = 9689753;
        wf60001.tintBottomRight = 9689753;

        // lists
        const sort = [s_mbolo_28, s_mbolo_27, s_mbolo_25, symbol_870001, symbol_344, symbol_186, symbol_190];

        // wf90001 (components)
        const wf90001Animation = new Animation(wf90001);
        wf90001Animation.key = "wf9";
        wf90001Animation.end = 12;

        // wf110001 (components)
        const wf110001Animation = new Animation(wf110001);
        wf110001Animation.key = "wf11";
        wf110001Animation.end = 6;

        // wf (components)
        const wfAnimation = new Animation(wf);
        wfAnimation.key = "wf1";
        wfAnimation.end = 6;

        // wf100001 (components)
        const wf100001Animation = new Animation(wf100001);
        wf100001Animation.key = "wf1";
        wf100001Animation.end = 6;

        // wf70001 (components)
        const wf70001Animation = new Animation(wf70001);
        wf70001Animation.key = "wf7";
        wf70001Animation.end = 30;

        // symbol_585 (components)
        const symbol_585SimpleButton = new SimpleButton(symbol_585);
        symbol_585SimpleButton.callback = () => this.interface.prompt.showItem(244);;
        const symbol_585ShowHint = new ShowHint(symbol_585);
        symbol_585ShowHint.text = "FREE ITEM";

        // fire0001 (components)
        const fire0001Animation = new Animation(fire0001);
        fire0001Animation.key = "fire";
        fire0001Animation.end = 20;

        // surfer (components)
        const surferButton = new Button(surfer);
        surferButton.spriteName = "surfer";
        new ShowHint(surfer);

        // ghost10001 (components)
        const ghost10001Animation = new Animation(ghost10001);
        ghost10001Animation.key = "ghost1";
        ghost10001Animation.end = 45;

        // ghost20001 (components)
        const ghost20001Animation = new Animation(ghost20001);
        ghost20001Animation.key = "ghost2";
        ghost20001Animation.end = 59;

        // wf60001 (components)
        const wf60001Animation = new Animation(wf60001);
        wf60001Animation.key = "wf6";
        wf60001Animation.end = 12;

        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    // Write your code here

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
