import RoomScene from '../RoomScene'

import { Animation, Button, MoveTo, SimpleButton } from '@components/components'


/* START OF COMPILED CODE */

export default class Town extends RoomScene {

    constructor() {
        super("Town");

        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'central': () => this.triggerRoom(1, 259, 727),
            'coffee': () => this.triggerRoom(11, 975, 440),
            'dance': () => this.triggerRoom(15, 1141, 425),
            'shop': () => this.triggerRoom(13, 334, 546),
            'tropical': () => this.triggerRoom(20, 1164, 354),
        }

        this.music = "town"

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("town-pack", "assets/media/rooms/town/town-pack.json");
    }

    /** @returns {void} */
    _create() {

        // sky
        this.add.image(699, 31, "town", "sky");

        // s_mbolo_22
        this.add.image(1220, 141, "town", "Símbolo 22");

        // s_mbolo_6
        this.add.image(1315, 337, "town", "Símbolo 6");

        // s_mbolo_30
        this.add.image(34, 156, "town", "Símbolo 30");

        // s_mbolo_47
        this.add.image(89, 957, "town", "Símbolo 47");

        // s_mbolo_24
        this.add.image(208, 951, "town", "Símbolo 24");

        // s_mbolo_25
        this.add.image(760, 595, "town", "Símbolo 25");

        // s_mbolo_31
        this.add.image(90, 241, "town", "Símbolo 31");

        // shopdoor
        const shopdoor = this.add.image(981, 295, "town", "shopdoor");

        // discodoor0001
        const discodoor0001 = this.add.sprite(682, 349, "town", "discodoor0001");

        // s_mbolo_34
        this.add.image(609, 95, "town", "Símbolo 34");

        // s_mbolo_44
        this.add.image(1050, 746, "town", "Símbolo 44");

        // s_mbolo_49
        this.add.image(-43, 806, "town", "Símbolo 49");

        // s_mbolo_1
        const s_mbolo_1 = this.add.image(73, 627, "town", "Símbolo 24");
        s_mbolo_1.scaleX = 0.5812929253893424;
        s_mbolo_1.scaleY = 0.5812929253893424;
        s_mbolo_1.flipX = true;

        // s_mbolo
        this.add.image(239, 581, "town", "Símbolo 47");

        // sprite_210
        this.add.image(822, 945, "town", "sprite 210");

        // s_mbolo_46
        this.add.image(1261, 773, "town", "Símbolo 46");

        // symbol_1
        this.add.image(140, 304, "town", "Symbol 90");

        // coffee
        this.add.image(388, 225, "town", "coffee");

        // coffeedoor
        const coffeedoor = this.add.image(329, 311, "town", "coffeedoor");

        // s_mbolo_38
        this.add.image(1097, 229, "town", "Símbolo 38");

        // s_mbolo_40
        this.add.image(1042, 200, "town", "Símbolo 40");

        // s_mbolo_41
        this.add.image(1025, 147, "town", "Símbolo 41");

        // s_mbolo_42
        this.add.image(1042, 116, "town", "Símbolo 42");

        // s_mbolo_50
        this.add.image(725, 234, "town", "Símbolo 50");

        // s_mbolo_48
        this.add.image(1318, 310, "town", "Símbolo 48");

        // s_mbolo_51
        this.add.image(1465, 287, "town", "Símbolo 51");

        // s_mbolo_2
        this.add.image(1546, 627, "town", "Símbolo 48");

        // s_mbolo_45
        this.add.image(1512, 908, "town", "Símbolo 45");

        // sprite_470
        const sprite_470 = this.add.image(1010, 760, "town", "sprite 470");

        // symbol_281
        this.add.image(1368, 998, "town", "Symbol 281");

        // sprite_232
        const sprite_232 = this.add.image(1286, 650, "town", "sprite 232");

        // s_mbolo_11
        const s_mbolo_11 = this.add.image(1333.1419950240486, 279.9713012189646, "town", "Símbolo 11");
        s_mbolo_11.scaleX = 1.5;
        s_mbolo_11.scaleY = 1.5;
        s_mbolo_11.setOrigin(0.7266855911925535, 0.9358448631288497);
        s_mbolo_11.flipX = true;

        // bottom
        this.add.image(1328, 309, "town", "bottom");

        // s_mbolo_13
        const s_mbolo_13 = this.add.image(1351.0913287599444, 298.99145460279135, "town", "Símbolo 13");
        s_mbolo_13.setOrigin(0.04004497936044132, 0.6895592724136329);

        // symbol_94
        this.add.image(6, 424, "town", "Symbol 94");

        // signs
        const signs = this.add.image(221.48559018866226, 541.1685743392318, "town", "signs");
        signs.setOrigin(0.6849233819410655, 0.5244382593905437);

        // symbol_90
        this.add.image(32, 563, "town", "Symbol 90");

        // s_mbolo_18
        this.add.image(57, 604, "town", "Símbolo 18");

        // s_mbolo_36
        this.add.image(-33, 388, "town", "Símbolo 36");

        // s_mbolo_43
        this.add.image(687, 592, "town", "Símbolo 43");

        // symbol_132
        this.add.image(1285, 746, "town", "Symbol 132");

        // symbol_394
        const symbol_394 = this.add.image(557, 833, "town", "Symbol 394");

        // s_mbolo_9
        this.add.image(1029, 174, "town", "Símbolo 9");

        // port
        this.add.image(381, 298, "town", "port");

        // symbol
        this.add.image(-58, 303, "town", "Symbol 158");

        // symbol_158
        this.add.image(959, 295, "town", "Symbol 158");

        // lists
        const sort = [sprite_470, sprite_232, symbol_394, s_mbolo_13, signs, s_mbolo_11];

        // shopdoor (components)
        const shopdoorButton = new Button(shopdoor);
        shopdoorButton.spriteName = "shopdoor";
        shopdoorButton.activeFrame = false;
        const shopdoorMoveTo = new MoveTo(shopdoor);
        shopdoorMoveTo.x = 987;
        shopdoorMoveTo.y = 346;

        // discodoor0001 (components)
        new SimpleButton(discodoor0001);
        const discodoor0001Animation = new Animation(discodoor0001);
        discodoor0001Animation.key = "discodoor";
        discodoor0001Animation.end = 7;
        discodoor0001Animation.repeat = 0;
        discodoor0001Animation.autoPlay = false;
        discodoor0001Animation.onHover = true;
        const discodoor0001MoveTo = new MoveTo(discodoor0001);
        discodoor0001MoveTo.x = 692;
        discodoor0001MoveTo.y = 445;

        // coffeedoor (components)
        const coffeedoorButton = new Button(coffeedoor);
        coffeedoorButton.spriteName = "coffeedoor";
        coffeedoorButton.activeFrame = false;
        const coffeedoorMoveTo = new MoveTo(coffeedoor);
        coffeedoorMoveTo.x = 331;
        coffeedoorMoveTo.y = 356;

        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    onCanopyOver() {
        this.disco.setFrame('disco-hover')
        this.canopy_lights.__Animation.play()
        this.disco_lights.__Animation.play()
    }

    onCanopyOut() {
        this.disco.setFrame('disco')
        this.canopy_lights.__Animation.stop()
        this.disco_lights.__Animation.stop()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
