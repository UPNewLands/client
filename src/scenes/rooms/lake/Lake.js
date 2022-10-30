
// You can write more code here

/* START OF COMPILED CODE */

import RoomScene from "../RoomScene";
import Animation from "../../components/Animation";
import SimpleButton from "../../components/SimpleButton";
import ShowHint from "../../components/ShowHint";
import MoveTo from "../../components/MoveTo";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Lake extends RoomScene {

    constructor() {
        super("Lake");

        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Sprite>} */
        this.sort;


        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            'park': () => this.triggerRoom(60, 1201, 766),
            'hidden': () => this.triggerRoom(92, 1201, 766),        
            'hydro': () => this.triggerGame('hydroHopper', 903)
        }

        this.music = "h_lake"
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("lake-pack", "assets/media/rooms/lake/lake-pack.json");
    }

    /** @returns {void} */
    _create() {

        // s_mbolo_4
        this.add.image(431, 354, "lake", "Símbolo 4");

        // s_mbolo_3
        this.add.image(836, 636, "lake", "Símbolo 3");

        // s_mbolo_33
        const s_mbolo_33 = this.add.image(1169, 998, "lake", "Símbolo 33");
        s_mbolo_33.setOrigin(0.6320128723221484, 1.0186057406655433);
        s_mbolo_33.tintTopLeft = 4043603;
        s_mbolo_33.tintTopRight = 4043603;
        s_mbolo_33.tintBottomLeft = 4043603;
        s_mbolo_33.tintBottomRight = 4043603;

        // symbol_1
        this.add.image(660, 410, "lake", "Symbol 1");

        // s_mbolo_34
        const s_mbolo_34 = this.add.image(361.204829301191, 290.5545376381123, "lake", "Símbolo 34");
        s_mbolo_34.setOrigin(0.5078166568321733, 1.1140990277731277);

        // symbol_8
        const symbol_8 = this.add.image(396.4542107345854, 692.9028985898295, "lake", "Symbol 8");
        symbol_8.setOrigin(0.48888660566143527, 0.0037004040566784146);

        // speakers0001
        const speakers0001 = this.add.sprite(22, 420, "lake", "speakers0001");
        speakers0001.tintTopLeft = 10790052;
        speakers0001.tintTopRight = 10790052;
        speakers0001.tintBottomLeft = 10790052;
        speakers0001.tintBottomRight = 10790052;

        // boat0001
        const boat0001 = this.add.sprite(407, 856, "lake", "boat0001");
        boat0001.flipX = true;
        boat0001.tintTopLeft = 10790052;
        boat0001.tintTopRight = 10790052;
        boat0001.tintBottomLeft = 10790052;
        boat0001.tintBottomRight = 10790052;

        // speakers
        const speakers = this.add.sprite(91, 399, "lake", "speakers0001");
        speakers.tintTopLeft = 10790052;
        speakers.tintTopRight = 10790052;
        speakers.tintBottomLeft = 10790052;
        speakers.tintBottomRight = 10790052;

        // symbol_207_copia
        this.add.image(96, 471, "halloween", "Symbol 207 copia");

        // symbol_7
        const symbol_7 = this.add.image(925.6922667742001, 408.9301569971442, "lake", "Symbol 7");
        symbol_7.setOrigin(0.9433760725076988, 0.7668638212424885);

        // symbol_16
        const symbol_16 = this.add.image(773.28800408217, 410.4232016618909, "lake", "Symbol 16");
        symbol_16.setOrigin(0.5114536722676569, 0.9997812065389464);

        // lights0004
        const lights0004 = this.add.sprite(86, 423, "lake", "lights0004");

        // symbol_30
        this.add.image(72, 248, "lake", "Symbol 30");

        // buoy0001
        const buoy0001 = this.add.sprite(1350, 563, "lake", "buoy0001");
        buoy0001.tintTopLeft = 10790052;
        buoy0001.tintTopRight = 10790052;
        buoy0001.tintBottomLeft = 10790052;
        buoy0001.tintBottomRight = 10790052;

        // symbol_24
        this.add.image(-29, 548, "lake", "Symbol 24");

        // symbol_389_copia
        this.add.image(1018, 197, "halloween", "Symbol 389 copia");

        // symbol_329
        const symbol_329 = this.add.image(851.1069528994517, 449.9412047349232, "halloween", "Symbol 329");
        symbol_329.setOrigin(0.530535549267416, 1.37789704143823);

        // lists
        const sort = [s_mbolo_33, symbol_8, boat0001, s_mbolo_34, symbol_7, symbol_16, symbol_329];

        // speakers0001 (components)
        const speakers0001Animation = new Animation(speakers0001);
        speakers0001Animation.key = "speakers";
        speakers0001Animation.end = 10;

        // boat0001 (components)
        const boat0001Animation = new Animation(boat0001);
        boat0001Animation.key = "boat";
        boat0001Animation.end = 80;
        new SimpleButton(boat0001);
        const boat0001ShowHint = new ShowHint(boat0001);
        boat0001ShowHint.text = "Play Hydrohopper";
        const boat0001MoveTo = new MoveTo(boat0001);
        boat0001MoveTo.x = 518;
        boat0001MoveTo.y = 814;

        // speakers (components)
        const speakersAnimation = new Animation(speakers);
        speakersAnimation.key = "speakers";
        speakersAnimation.end = 10;

        // lights0004 (components)
        const lights0004Animation = new Animation(lights0004);
        lights0004Animation.key = "lights";
        lights0004Animation.end = 46;

        // buoy0001 (components)
        const buoy0001Animation = new Animation(buoy0001);
        buoy0001Animation.key = "buoy";
        buoy0001Animation.end = 50;

        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    // Write your code here

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
