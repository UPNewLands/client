
// You can write more code here

/* START OF COMPILED CODE */

import RoomScene from "../RoomScene";
import Button from "../../components/Button";
import MoveTo from "../../components/MoveTo";
import SimpleButton from "../../components/SimpleButton";
import ShowHint from "../../components/ShowHint";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Coffee extends RoomScene {

    constructor() {
        super("Coffee");

        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            'beans': () => this.triggerGame('beanCounters', 908),
            'library': () => this.triggerRoom(12, 1265, 489),
            'smash': () => null,
            'town': () => this.triggerRoom(10, 260, 439),
        }

        this.music = "coffee"
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("coffee-pack", "assets/media/rooms/coffee/coffee-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        this.add.image(764, 494, "coffee", "bg");

        // symbol_211
        this.add.image(982, 713, "coffee", "Symbol 211");

        // symbol_213
        const symbol_213 = this.add.image(1094.9745915396577, 726.2647588729293, "coffee", "Symbol 213");
        symbol_213.setOrigin(0.4075623934384003, 0.20631125035839443);

        // door2
        const door2 = this.add.image(963, 245, "coffee", "door2");

        // symbol_173
        this.add.image(1098, 423, "coffee", "Symbol 173");

        // symbol_147
        const symbol_147 = this.add.image(707.3192683878211, 376.53808712469214, "coffee", "Symbol 147");
        symbol_147.setOrigin(0.8107619795313605, 0.6008967466010908);

        // symbol
        const symbol = this.add.image(707.8609583625088, 428.40628436843554, "coffee", "Symbol 147");
        symbol.setOrigin(0.7390476765625843, 0.46367717122360735);

        // symbol_1
        const symbol_1 = this.add.image(714.1560094209514, 516.8089552221917, "coffee", "Symbol 147");
        symbol_1.setOrigin(0.8765000905860708, 0.5766815274168291);

        // symbol_200
        this.add.image(564, 360, "coffee", "Symbol 200");

        // symbol_202
        this.add.image(573, 463, "coffee", "Symbol 202");

        // symbol_1940001
        this.add.image(204, 440, "coffee", "Symbol 1940001");

        // symbol_175
        this.add.image(1127, 534, "coffee", "Symbol 175");

        // s_mbolo_3
        this.add.image(890, 866, "coffee", "Símbolo 3");

        // s_mbolo_5
        const s_mbolo_5 = this.add.image(735, 681, "coffee", "Símbolo 5");

        // s_mbolo_4
        const s_mbolo_4 = this.add.image(632.8223714715443, 960.3360185885441, "coffee", "Símbolo 4");
        s_mbolo_4.setOrigin(0.632246088282344, 0.6918096892842265);

        // symbol_217
        this.add.image(412, 805, "coffee", "Symbol 217");

        // symbol_196
        this.add.image(58, 509, "coffee", "Symbol 196");

        // symbol_198
        this.add.image(156, 742, "coffee", "Symbol 198");

        // door
        const door = this.add.image(1337, 436, "coffee", "door");

        // symbol_223
        const symbol_223 = this.add.image(1480, 748, "coffee", "Symbol 223");

        // sprite_764
        const sprite_764 = this.add.image(733, 1215.1535917971228, "coffee", "Sprite 764");
        sprite_764.setOrigin(0.5, 1.0354965604745079);

        // symbol_103
        this.add.image(1474, 471, "coffee", "Symbol 103");

        // lists
        const sort = [s_mbolo_5, symbol_213, sprite_764, s_mbolo_4, symbol, symbol_147, symbol_1];

        // door2 (components)
        const door2Button = new Button(door2);
        door2Button.spriteName = "door2";
        door2Button.activeFrame = false;
        const door2MoveTo = new MoveTo(door2);
        door2MoveTo.x = 963;
        door2MoveTo.y = 352;

        // door (components)
        const doorButton = new Button(door);
        doorButton.spriteName = "door";
        doorButton.activeFrame = false;
        const doorMoveTo = new MoveTo(door);
        doorMoveTo.x = 1327;
        doorMoveTo.y = 580;

        // symbol_223 (components)
        new SimpleButton(symbol_223);
        const symbol_223ShowHint = new ShowHint(symbol_223);
        symbol_223ShowHint.text = "Play Bean Counters";
        const symbol_223MoveTo = new MoveTo(symbol_223);
        symbol_223MoveTo.x = 1480;
        symbol_223MoveTo.y = 748;

        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    // Write your code here
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
