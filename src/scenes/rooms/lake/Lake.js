
// You can write more code here

/* START OF COMPILED CODE */

import RoomScene from "../RoomScene";
import Animation from "../../components/Animation";
import SimpleButton from "../../components/SimpleButton";
import ShowHint from "../../components/ShowHint";
import MoveTo from "../../components/MoveTo";
import Button from "../../components/Button";
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
            'hydro': () => this.triggerGame('HydroHopper', 903)
        }

        this.music = "lake"
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("lake-pack", "assets/media/rooms/lake/lake-pack.json");
    }

    /** @returns {void} */
    _create() {

        // s_mbolo_2
        this.add.image(849, 639, "lake", "Símbolo 2");

        // s_mbolo_3
        const s_mbolo_3 = this.add.image(891, 995, "lake", "Símbolo 3");
        s_mbolo_3.setOrigin(0.5033443208200835, 1.0183697271129328);

        // buoy0001
        const buoy0001 = this.add.sprite(1351.4317262615164, 1109.5079281041458, "lake", "buoy0001");
        buoy0001.setOrigin(0.5219982452661305, 3.318918000531356);

        // symbol_1
        const symbol_1 = this.add.image(712.1129150390625, 1191.8485107421875, "lake", "Symbol 1");
        symbol_1.setOrigin(0.5330979263826029, 1.3272006818819861);

        // symbol_32
        this.add.image(488, 100, "lake", "Symbol 32");

        // symbol_8
        this.add.image(415, 797, "lake", "Symbol 8");

        // symbol_25
        this.add.image(175, 126, "lake", "Symbol 25");

        // symbol_3
        this.add.image(1071, 173, "lake", "Symbol 3");

        // symbol_11
        this.add.image(661, 268, "lake", "Symbol 11");

        // symbol_22
        this.add.image(100, 424, "lake", "Symbol 22");

        // symbol_192
        this.add.image(91, 372, "lake", "Symbol 192");

        // symbol
        this.add.image(24, 395, "lake", "Symbol 192");

        // speakers0001
        const speakers0001 = this.add.sprite(99, 368, "lake", "speakers0001");

        // s_mbolo_11
        this.add.image(802, 407, "lake", "Símbolo 11");

        // speakers
        const speakers = this.add.sprite(34, 385, "lake", "speakers0001");

        // s_mbolo_12
        this.add.image(749, 265, "lake", "Símbolo 12");

        // lights0001
        const lights0001 = this.add.sprite(79, 400, "lake", "lights0001");

        // symbol_16
        this.add.image(734, 348, "lake", "Symbol 16");

        // pole0002
        this.add.image(527, 126, "lake", "pole0002");

        // s_mbolo_7
        this.add.image(1244, 26, "lake", "Símbolo 7");

        // shape_315
        const shape_315 = this.add.image(912, 134, "lake", "shape 315");
        shape_315.scaleX = 0.8;
        shape_315.scaleY = 0.8;

        // fire0001
        const fire0001 = this.add.sprite(916, 72, "lake", "fire0001");
        fire0001.scaleX = 0.8;
        fire0001.scaleY = 0.8;

        // boat0001
        const boat0001 = this.add.sprite(422.3674793521371, 849.142231878498, "lake", "boat0001");
        boat0001.setOrigin(0.5290915055829669, 0.4669841918417959);
        boat0001.flipX = true;

        // s_mbolo_8
        this.add.image(1218, 141, "lake", "Símbolo 8");

        // symbol_411
        this.add.image(1277, 114, "lake", "Symbol 411");

        // symbol_425
        this.add.image(1204, 118, "lake", "Symbol 425");

        // symbol_2
        this.add.image(1127, 170, "lake", "Symbol 411");

        // s_mbolo_9
        this.add.image(727, 55, "lake", "Símbolo 9");

        // lakecatalog
        const lakecatalog = this.add.image(1417.0815259450555, 1050.5160173510058, "lake", "lakecatalog");
        lakecatalog.setOrigin(0.47665220756044435, 2.0001502151583113);

        // lists
        const sort = [s_mbolo_3, buoy0001, boat0001, lakecatalog];

        // buoy0001 (components)
        const buoy0001Animation = new Animation(buoy0001);
        buoy0001Animation.key = "buoy";
        buoy0001Animation.end = 50;

        // speakers0001 (components)
        const speakers0001Animation = new Animation(speakers0001);
        speakers0001Animation.key = "speakers";
        speakers0001Animation.end = 10;

        // speakers (components)
        const speakersAnimation = new Animation(speakers);
        speakersAnimation.key = "speakers";
        speakersAnimation.end = 10;

        // lights0001 (components)
        const lights0001Animation = new Animation(lights0001);
        lights0001Animation.key = "lights";
        lights0001Animation.end = 46;

        // fire0001 (components)
        const fire0001Animation = new Animation(fire0001);
        fire0001Animation.key = "fire";
        fire0001Animation.end = 20;

        // boat0001 (components)
        const boat0001Animation = new Animation(boat0001);
        boat0001Animation.key = "boat";
        boat0001Animation.end = 80;
        new SimpleButton(boat0001);
        const boat0001ShowHint = new ShowHint(boat0001);
        boat0001ShowHint.text = "Play Hydro Hopper";
        const boat0001MoveTo = new MoveTo(boat0001);
        boat0001MoveTo.x = 514;
        boat0001MoveTo.y = 814;

        // lakecatalog (components)
        const lakecatalogButton = new Button(lakecatalog);
        lakecatalogButton.spriteName = "lakecatalog";
        lakecatalogButton.callback = () => this.interface.loadExternal('Hydro');
        lakecatalogButton.activeFrame = false;

        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    // Write your code here

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
