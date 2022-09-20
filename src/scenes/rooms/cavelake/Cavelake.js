
// You can write more code here

/* START OF COMPILED CODE */

import RoomScene from "../RoomScene";
import Animation from "../../components/Animation";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Cavelake extends RoomScene {

    constructor() {
        super("Cavelake");

        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Sprite>} */
        this.sort;


        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            'hidden': null,
            'minecave': null,
            'popup': () => this.world.interface.main.cavepopup.visible = true
        }
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("cavelake-pack", "assets/media/rooms/cavelake/cavelake-pack.json");
    }

    /** @returns {void} */
    _create() {

        // symbol_11
        this.add.image(743, 190, "cavelake", "Symbol 11");

        // s_mbolo_35
        this.add.image(674, 728, "cavelake", "Símbolo 35");

        // s_mbolo_37
        this.add.image(719, 325, "cavelake", "Símbolo 37");

        // s_mbolo_34
        this.add.image(957, 635, "cavelake", "Símbolo 34");

        // s_mbolo_47
        this.add.image(688, 365, "cavelake", "Símbolo 47");

        // symbol_10
        this.add.image(892, 530, "cavelake", "Symbol 10");

        // s_mbolo_18
        this.add.image(1123, 483, "cavelake", "Símbolo 18");

        // shape_58
        this.add.image(832, 674, "cavelake", "shape 58");

        // symbol
        this.add.image(874, 658, "cavelake", "Symbol 10");

        // s_mbolo_36
        this.add.image(1481, 741, "cavelake", "Símbolo 36");

        // s_mbolo_49
        const s_mbolo_49 = this.add.image(1041, 967.5522133939583, "cavelake", "Símbolo 49");
        s_mbolo_49.setOrigin(0.5, 0.9116939359409789);

        // s_mbolo_50
        this.add.image(644, 347, "cavelake", "Símbolo 50");

        // s_mbolo_11
        this.add.image(338, 665, "cavelake", "Símbolo 11");

        // s_mbolo_52
        this.add.image(653, 394, "cavelake", "Símbolo 52");

        // symbol_13
        const symbol_13 = this.add.image(1397.7910445589227, 1041.492487625536, "cavelake", "Symbol 13");
        symbol_13.setOrigin(0.5048017280400073, 1.2904610064519262);

        // s_mbolo_51
        this.add.image(648, 140, "cavelake", "Símbolo 51");

        // water10001
        const water10001 = this.add.sprite(652, 251, "cavelake", "water10001");
        water10001.scaleX = 2;
        water10001.scaleY = 2;
        water10001.tintFill = true;

        // water20001
        const water20001 = this.add.sprite(700.0642890701754, 1016.0431725964909, "cavelake", "water20001");
        water20001.setOrigin(0.5287743697169056, 8.056240834864935);

        // water
        const water = this.add.sprite(606.725011745614, 1033.7681843421049, "cavelake", "water20001");
        water.setOrigin(0.6007102940091703, 8.337590227652457);
        water.flipX = true;

        // symbol_7
        this.add.image(1241, 170, "cavelake", "Symbol 7");

        // s_mbolo_54
        this.add.image(1080, 136, "cavelake", "Símbolo 54");

        // s_mbolo_38
        this.add.image(300, 303, "cavelake", "Símbolo 38");

        // s_mbolo_39
        this.add.image(1369, 502, "cavelake", "Símbolo 39");

        // symbol_149
        const symbol_149 = this.add.image(762.9915433732508, 1010.2642734728257, "cavelake", "Symbol_149");
        symbol_149.setOrigin(0.5039548141077563, 1.0418547541297565);

        // symbol_14
        const symbol_14 = this.add.image(545.4028511256201, 1005.2767608609074, "cavelake", "Symbol 14");
        symbol_14.setOrigin(0.5078372227642497, 1.2893312732565585);

        // lists
        const sort = [symbol_149, s_mbolo_49, symbol_13, symbol_14, water20001, water];

        // water10001 (components)
        const water10001Animation = new Animation(water10001);
        water10001Animation.key = "water1";
        water10001Animation.end = 6;

        // water20001 (components)
        const water20001Animation = new Animation(water20001);
        water20001Animation.key = "water2";
        water20001Animation.end = 12;

        // water (components)
        const waterAnimation = new Animation(water);
        waterAnimation.key = "water2";
        waterAnimation.end = 12;

        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    // Write your code here
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
