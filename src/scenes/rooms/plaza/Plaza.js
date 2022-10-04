
// You can write more code here

/* START OF COMPILED CODE */

import RoomScene from "../RoomScene";
import Animation from "../../components/Animation";
import Button from "../../components/Button";
import MoveTo from "../../components/MoveTo";
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
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("plaza-pack", "assets/media/rooms/plaza/plaza-pack.json");
    }

    /** @returns {void} */
    _create() {

        // block
        this.add.image(760, 480, "plaza", "block");

        // sky
        this.add.image(805, 140, "plaza", "sky");

        // smoke0001
        const smoke0001 = this.add.sprite(1048, 29, "plaza", "smoke0001");

        // s_mbolo_64
        this.add.image(749, 654, "plaza", "Símbolo 64");

        // s_mbolo_60
        this.add.image(635, 346, "plaza", "Símbolo 60");

        // s_mbolo_43
        this.add.image(656, 764, "plaza", "Símbolo 43");

        // s_mbolo_56
        this.add.image(1305, 208, "plaza", "Símbolo 56");

        // s_mbolo_28
        this.add.image(124, 296, "plaza", "Símbolo 28");

        // pizza
        this.add.image(916, 284, "plaza", "pizza");

        // s_mbolo_69
        this.add.image(530, 189, "plaza", "Símbolo 69");

        // symbol_242
        this.add.image(221, 398, "plaza", "Symbol 242");

        // sprite
        const sprite = this.add.image(725.995492125174, 786.5465872776916, "plaza", "Sprite 331");
        sprite.setOrigin(0.4480228119410787, 0.330181364038933);

        // pizzadoor
        const pizzadoor = this.add.image(1003, 433, "plaza", "pizzadoor");

        // s_mbolo_59
        const s_mbolo_59 = this.add.image(614.2298322702271, 793.2090540588943, "plaza", "Símbolo 59");
        s_mbolo_59.setOrigin(0.3769827671120317, 0.6106236779833379);

        // s_mbolo_77
        const s_mbolo_77 = this.add.image(758, 869, "plaza", "Símbolo 77");

        // sprite_791_copia
        this.add.image(1518, 491, "plaza", "Sprite 791 copia");

        // symbol_185
        const symbol_185 = this.add.image(1267, 556, "plaza", "Symbol 185");

        // sprite_72
        const sprite_72 = this.add.image(1283, 559, "plaza", "Sprite 72");

        // s_mbolo_65
        this.add.image(1365, 688, "plaza", "Símbolo 65");

        // s_mbolo_61
        const s_mbolo_61 = this.add.image(1050.857327137573, 695.0079164547627, "plaza", "Símbolo 61");
        s_mbolo_61.setOrigin(0.5997958236247515, 0.7446082416019714);

        // s_mbolo_75
        const s_mbolo_75 = this.add.image(1186.396861463759, 717.5814353182392, "plaza", "Símbolo 75");
        s_mbolo_75.setOrigin(0.4766347031629726, 0.011130609047263703);

        // s_mbolo
        this.add.image(342, 538, "plaza", "Símbolo 21");

        // s_mbolo_20
        this.add.image(395, 543, "plaza", "Símbolo 20");

        // petdoor
        const petdoor = this.add.image(411, 470, "plaza", "petdoor");

        // s_mbolo_610001
        this.add.image(132, 863, "plaza", "Símbolo 610001");

        // s_mbolo_440001
        this.add.image(-33, 761, "plaza", "Símbolo 440001");

        // s_mbolo_76
        const s_mbolo_76 = this.add.image(119.4261586612322, 906.3786836925167, "plaza", "Símbolo 76");
        s_mbolo_76.setOrigin(0.804937285407684, 0.6893130863996516);

        // s_mbolo_63
        const s_mbolo_63 = this.add.image(1486.8542065760457, 1014.6990939933496, "plaza", "Símbolo 63");
        s_mbolo_63.setOrigin(0.5181810337408466, 1.0351018337028859);

        // s_mbolo_21
        this.add.image(441, 546, "plaza", "Símbolo 21");

        // s_mbolo_73
        this.add.image(780, 604, "plaza", "Símbolo 73");

        // entry
        const entry = this.add.image(689, 561, "plaza", "entry");

        // s_mbolo_24
        this.add.image(930, 271, "plaza", "Símbolo 24");

        // sprite_331
        const sprite_331 = this.add.image(817.5754687099732, 531.4454092157933, "plaza", "Sprite 331");
        sprite_331.setOrigin(0.5167236450692404, 0.3950041693445508);

        // s_mbolo_78
        this.add.image(667, 256, "plaza", "Símbolo 78");

        // back
        this.add.image(373, 179, "plaza", "back");

        // glow
        this.add.image(372, 179, "plaza", "glow");

        // fire0001
        const fire0001 = this.add.sprite(371, 178, "plaza", "fire0001");

        // front
        this.add.image(373, 182, "plaza", "front");

        // s_mbolo_79
        this.add.image(752, 137, "plaza", "Símbolo 79");

        // lists
        const sort = [s_mbolo_59, s_mbolo_77, sprite, symbol_185, sprite_72, sprite_331, s_mbolo_76, s_mbolo_61, s_mbolo_75, s_mbolo_63];

        // smoke0001 (components)
        const smoke0001Animation = new Animation(smoke0001);
        smoke0001Animation.key = "smoke";
        smoke0001Animation.end = 30;

        // pizzadoor (components)
        const pizzadoorButton = new Button(pizzadoor);
        pizzadoorButton.spriteName = "pizzadoor";
        pizzadoorButton.activeFrame = false;
        const pizzadoorMoveTo = new MoveTo(pizzadoor);
        pizzadoorMoveTo.x = 995;
        pizzadoorMoveTo.y = 472;

        // petdoor (components)
        const petdoorButton = new Button(petdoor);
        petdoorButton.spriteName = "petdoor";
        petdoorButton.activeFrame = false;
        const petdoorMoveTo = new MoveTo(petdoor);
        petdoorMoveTo.x = 417;
        petdoorMoveTo.y = 505;

        // entry (components)
        const entryButton = new Button(entry);
        entryButton.spriteName = "entry";
        entryButton.activeFrame = false;

        // fire0001 (components)
        const fire0001Animation = new Animation(fire0001);
        fire0001Animation.key = "fire";
        fire0001Animation.end = 21;

        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    // Write your code here

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
