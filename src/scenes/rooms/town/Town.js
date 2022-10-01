import RoomScene from '../RoomScene'

import { Animation, Button, MoveTo, SimpleButton } from '@components/components'


/* START OF COMPILED CODE */

export default class Town extends RoomScene {

    constructor() {
        super("Town");

        /** @type {Phaser.GameObjects.Sprite} */
        this.canopy_lights;
        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Sprite>} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'central': () => this.triggerRoom(1, 259, 727),
            'coffee': () => this.triggerRoom(11, 975, 440),
            'dance': () => null,
            'shop': () => this.triggerRoom(13, 334, 546),
            'tropical': () => this.triggerRoom(20, 1164, 354),
        }

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

        // canopy_lights
        const canopy_lights = this.add.sprite(648, 548, "town", "canopy_lights0001");
        canopy_lights.setOrigin(0, 7.142857142857143);
        canopy_lights.visible = false;

        // canopy_stars
        const canopy_stars = this.add.image(647, 548, "town", "canopy_stars");
        canopy_stars.setOrigin(0, 7.142857142857143);

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

        // betabottom
        this.add.image(630, 130, "town", "betabottom");

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

        // hat
        this.add.image(951, 198, "town", "hat");

        // s_mbolo_2
        this.add.image(1546, 627, "town", "Símbolo 48");

        // s_mbolo_45
        this.add.image(1512, 908, "town", "Símbolo 45");

        // sprite_470
        const sprite_470 = this.add.image(1010, 760, "town", "sprite 470");

        // s_mbolo_8
        this.add.image(471, 495, "town", "Símbolo 8");

        // s_mbolo_8_copia
        this.add.image(1107, 318, "town", "Símbolo 8 copia");

        // symbol_281
        this.add.image(1368, 998, "town", "Symbol 281");

        // sprite_232
        const sprite_232 = this.add.image(1286, 650, "town", "sprite 232");

        // betabottom_1
        this.add.image(1812, 193, "town", "betabottom");

        // s_mbolo_16
        const s_mbolo_16 = this.add.image(622.5402420516511, 604.0344553837848, "town", "Símbolo 16");
        s_mbolo_16.setOrigin(0.38321765727700174, 0.7933523965557625);

        // s_mbolo_13
        this.add.image(1467, 248, "town", "Símbolo 13");

        // symbol_94
        this.add.image(6, 424, "town", "Symbol 94");

        // symbol_90
        this.add.image(32, 563, "town", "Symbol 90");

        // s_mbolo_18
        this.add.image(57, 604, "town", "Símbolo 18");

        // s_mbolo_36
        this.add.image(-33, 388, "town", "Símbolo 36");

        // s_mbolo_43
        this.add.image(687, 592, "town", "Símbolo 43");

        // symbol_158
        this.add.image(804, 274, "town", "Symbol 158");

        // symbol_132
        this.add.image(1285, 746, "town", "Symbol 132");

        // symbol_394
        const symbol_394 = this.add.image(557, 865, "town", "Symbol 394");

        // balloons
        const balloons = this.add.image(772.0382807855852, 982.3307164736958, "town", "balloons");
        balloons.setOrigin(0.4926162063666352, 0.9881816031810594);

        // betatop
        this.add.image(742, 180, "town", "betatop");

        // s_mbolo_9
        this.add.image(1029, 174, "town", "Símbolo 9");

        // port
        this.add.image(381, 298, "town", "port");

        // lists
        const sort = [canopy_stars, canopy_lights, s_mbolo_16, balloons, sprite_470, sprite_232, symbol_394];

        // canopy_lights (components)
        const canopy_lightsAnimation = new Animation(canopy_lights);
        canopy_lightsAnimation.key = "canopy_lights";
        canopy_lightsAnimation.end = 57;
        canopy_lightsAnimation.autoPlay = false;
        canopy_lightsAnimation.showOnStart = true;
        canopy_lightsAnimation.hideOnComplete = true;

        // shopdoor (components)
        const shopdoorButton = new Button(shopdoor);
        shopdoorButton.spriteName = "shopdoor";

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

        this.canopy_lights = canopy_lights;
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
