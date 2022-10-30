
// You can write more code here

/* START OF COMPILED CODE */

import RoomScene from "../RoomScene";
import Animation from "../../components/Animation";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Mine extends RoomScene {

    constructor() {
        super("Mine");

        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Sprite>} */
        this.sort;


        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            'mineint': () => this.triggerRoom(71, 718, 226),
            'forest': () => this.triggerRoom(80, 380, 577),
        }
        this.music = "h_mine"
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("mine-pack", "assets/media/rooms/mine/mine-pack.json");
    }

    /** @returns {void} */
    _create() {

        // sky
        this.add.image(748, 144, "mine", "sky");

        // s_mbolo_5
        this.add.image(817, 580, "mine", "Símbolo 5");

        // s_mbolo_47
        this.add.image(772, 683, "mine", "Símbolo 47");

        // s_mbolo_37
        this.add.image(568, 772, "mine", "Símbolo 37");

        // s_mbolo_18
        this.add.image(950, 437, "mine", "Símbolo 18");

        // s_mbolo_33
        this.add.image(796, 651, "mine", "Símbolo 33");

        // s_mbolo_42
        this.add.image(876, 355, "mine", "Símbolo 42");

        // s_mbolo_21
        this.add.image(492, 193, "mine", "Símbolo 21");

        // symbol_8
        this.add.image(881, 358, "mine", "Symbol 8");

        // symbol_401
        this.add.image(851, 710, "mine", "Symbol 401");

        // symbol_84
        const symbol_84 = this.add.image(909.6701892008058, 414.93727631370774, "mine", "Symbol 84");
        symbol_84.setOrigin(0.5581256223710717, 0.6371982561776091);

        // symbol_406
        const symbol_406 = this.add.image(861, 604.3978635495336, "mine", "Symbol 406");
        symbol_406.setOrigin(0.5, 0.5958928833997277);

        // water0001
        const water0001 = this.add.sprite(807, 936, "mine", "water0001");

        // symbol_287
        this.add.image(1302, 452, "mine", "Symbol 287");

        // s_mbolo_444
        this.add.image(663, 351, "mine", "Símbolo 444");

        // s_mbolo_44
        this.add.image(194, 309, "mine", "Símbolo 44");

        // s_mbolo_45
        this.add.image(266, 484, "mine", "Símbolo 45");

        // s_mbolo_46
        const s_mbolo_46 = this.add.image(237.13697113053811, 582.0991964307987, "mine", "Símbolo 46");
        s_mbolo_46.setOrigin(0.45546403263583807, 0.6120986429614977);

        // symbol_207_copia
        const symbol_207_copia = this.add.image(237, 744, "mine", "Symbol 207 copia");

        // s_mbolo_27
        this.add.image(119, 791, "mine", "Símbolo 27");

        // overlay
        const overlay = this.add.image(776.334337472626, 976.5356701397272, "mine", "overlay");
        overlay.setOrigin(0.5260111021235716, 0.8912806341410331);

        // lists
        const sort = [overlay, symbol_406, water0001, s_mbolo_46, symbol_84, symbol_207_copia];

        // water0001 (components)
        const water0001Animation = new Animation(water0001);
        water0001Animation.key = "water";
        water0001Animation.end = 10;

        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    // Write your code here

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
