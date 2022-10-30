import RoomScene from '../RoomScene'

import { Animation, SimpleButton, ShowHint, MoveTo } from '@components/components'

/* START OF COMPILED CODE */

export default class Pirate extends RoomScene {

    constructor() {
        super("Pirate");

        /** @type {Phaser.GameObjects.Sprite} */
        this.candy_4;


        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            'port': () => this.triggerRoom(30, 1154, 435),
        }

        this.music = "h_pirate"
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("pirate-pack", "assets/media/rooms/pirate/pirate-pack.json");
    }

    /** @returns {void} */
    _create() {

        // fore_png
        const fore_png = this.add.image(628, 673, "pirate", "fore.png");
        fore_png.visible = false;

        // sea
        this.add.image(760, 615, "pirate", "sea");

        // s_mbolo_53
        this.add.image(1091, 276, "pirate", "Símbolo 53");

        // clouds
        this.add.image(957, 185, "pirate", "clouds");

        // water
        const water = this.add.image(764, 638, "pirate", "water");
        water.tintTopLeft = 4447837;
        water.tintTopRight = 4447837;
        water.tintBottomLeft = 4447837;
        water.tintBottomRight = 4447837;

        // puffle0001
        const puffle0001 = this.add.sprite(953, 253, "pirate", "puffle0001");

        // sand
        const sand = this.add.image(645, 558, "pirate", "sand");
        sand.tintBottomRight = 10790052;

        // s_mbolo_8
        const s_mbolo_8 = this.add.image(714, 617, "pirate", "Símbolo 8");
        s_mbolo_8.tintTopRight = 8880770;
        s_mbolo_8.tintBottomLeft = 8880770;
        s_mbolo_8.tintBottomRight = 8880770;

        // candy_4
        const candy_4 = this.add.sprite(1157, 497, "dialogue", "candy_4");
        candy_4.scaleX = 0.2;
        candy_4.scaleY = 0.2;

        // symbol_136
        this.add.image(793, 297, "pirate", "Symbol 136");

        // s_mbolo_9
        const s_mbolo_9 = this.add.image(729, 322, "pirate", "Símbolo 9");
        s_mbolo_9.tintBottomLeft = 8880770;
        s_mbolo_9.tintBottomRight = 8880770;

        // symbol_111
        this.add.image(558, 216, "pirate", "Symbol 111");

        // symbol_130
        const symbol_130 = this.add.image(552, 164, "pirate", "Symbol 130");
        symbol_130.tintTopLeft = 8880770;
        symbol_130.tintTopRight = 8880770;
        symbol_130.tintBottomLeft = 8880770;
        symbol_130.tintBottomRight = 8880770;

        // symbol_158
        this.add.image(517, 221, "pirate", "Symbol 158");

        // ship
        const ship = this.add.image(443, 312, "pirate", "ship");
        ship.tintTopLeft = 7564396;

        // symbol_32
        this.add.image(259, 360, "pirate", "Symbol 32");

        // symbol_20
        this.add.image(961, 441, "pirate", "Symbol 20");

        // symbol_23
        const symbol_23 = this.add.image(1134, 487, "pirate", "Symbol 23");
        symbol_23.tintTopLeft = 8880770;

        // symbol_22
        const symbol_22 = this.add.image(1131, 577, "pirate", "Symbol 22");
        symbol_22.tintTopLeft = 11776947;
        symbol_22.tintTopRight = 11776947;
        symbol_22.tintBottomLeft = 11776947;
        symbol_22.tintBottomRight = 11776947;

        // symbol_166
        this.add.image(679, 653, "pirate", "Symbol 166");

        // symbol_21
        this.add.image(698, 671, "pirate", "Symbol 21");

        // symbol_19
        const symbol_19 = this.add.image(814, 736, "pirate", "Symbol 19");
        symbol_19.tintBottomLeft = 8880770;
        symbol_19.tintBottomRight = 8880770;

        // sprite_308
        this.add.image(536, 643, "pirate", "Sprite 308");

        // s_mbolo_11
        this.add.image(539, 847, "pirate", "Símbolo 11");

        // s_mbolo_5
        this.add.image(771, 729, "pirate", "Símbolo 5");

        // symbol_108
        this.add.image(930, 704, "pirate", "Symbol 108");

        // s_mbolo_4
        this.add.image(1065, 443, "pirate", "Símbolo 4");

        // symbol_40_copy
        this.add.image(1175, 447, "pirate", "Symbol 40 copy");

        // symbol_12
        this.add.image(1191, 549, "pirate", "Symbol 12");

        // symbol
        const symbol = this.add.image(1013, 456, "pirate", "Symbol 108");
        symbol.flipX = true;

        // symbol_1
        this.add.image(881, 362, "pirate", "Symbol 1");

        // wave10001
        const wave10001 = this.add.sprite(444, 797, "pirate", "wave10001");

        // symbol_5
        this.add.image(531, 839, "pirate", "Symbol 5");

        // symbol_2
        this.add.image(551, 768, "pirate", "Symbol 108");

        // symbol_175_copy_2
        this.add.image(862, 822, "pirate", "Symbol 175 copy 2");

        // symbol_320
        this.add.image(921, 867, "pirate", "Symbol 320");

        // symbol_2_copy_3
        this.add.image(1025, 876, "pirate", "Symbol 2 copy 3");

        // wave20001
        const wave20001 = this.add.sprite(579, 883, "pirate", "wave20001");
        wave20001.angle = -33;
        wave20001.flipX = true;
        wave20001.flipY = true;
        wave20001.tintFill = true;

        // particles0001
        const particles0001 = this.add.sprite(614, 950, "pirate", "particles0001");
        particles0001.flipX = true;

        // symbol_175_copy
        this.add.image(1145, 878, "pirate", "Symbol 175 copy");

        // symbol_6_copy_2
        const symbol_6_copy_2 = this.add.image(1388, 864, "pirate", "Symbol 6 copy 2");

        // flag0001
        const flag0001 = this.add.sprite(1439, 806, "pirate", "flag0001");

        // symbol_56
        this.add.image(760, 463, "pirate", "Symbol 56");

        // rectangle_1
        const rectangle_1 = this.add.rectangle(766, 477, 128, 128);
        rectangle_1.scaleX = 13.061895678386591;
        rectangle_1.scaleY = 8.093393731727916;
        rectangle_1.alpha = 0.4;
        rectangle_1.isFilled = true;
        rectangle_1.fillColor = 51;

        // symbol_329
        this.add.image(1113, 499, "halloween", "Symbol 329");

        // symbol_207_copia
        this.add.image(141, 425, "halloween", "Symbol 207 copia");

        // symbol_389_copia
        this.add.image(1401, 715, "halloween", "Symbol 389 copia");

        // puffle0001 (components)
        const puffle0001Animation = new Animation(puffle0001);
        puffle0001Animation.key = "puffle";
        puffle0001Animation.end = 76;

        // candy_4 (components)
        const candy_4SimpleButton = new SimpleButton(candy_4);
        candy_4SimpleButton.callback = () => {this.foundCandy(4,this.candy_4)};

        // wave10001 (components)
        const wave10001Animation = new Animation(wave10001);
        wave10001Animation.key = "wave1";
        wave10001Animation.end = 16;

        // wave20001 (components)
        const wave20001Animation = new Animation(wave20001);
        wave20001Animation.key = "wave2";
        wave20001Animation.end = 7;

        // particles0001 (components)
        const particles0001Animation = new Animation(particles0001);
        particles0001Animation.key = "particles";
        particles0001Animation.end = 16;

        // symbol_6_copy_2 (components)
        new SimpleButton(symbol_6_copy_2);
        const symbol_6_copy_2ShowHint = new ShowHint(symbol_6_copy_2);
        symbol_6_copy_2ShowHint.text = "Travel to The Port";
        const symbol_6_copy_2MoveTo = new MoveTo(symbol_6_copy_2);
        symbol_6_copy_2MoveTo.x = 1386;
        symbol_6_copy_2MoveTo.y = 742;

        // flag0001 (components)
        const flag0001Animation = new Animation(flag0001);
        flag0001Animation.key = "flag";
        flag0001Animation.end = 13;

        this.candy_4 = candy_4;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create() {
        super.create();
        if (this.world.client.penguin.candy4 == 1) {
            this.candy_4.visible = false;
        }
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
