import BaseContainer from '@scenes/base/BaseContainer'

import { Button, Interactive, ShowHint, SimpleButton } from '@components/components'

import IglooMap from './igloo_map/IglooMap'


/* START OF COMPILED CODE */

export default class Map extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {IglooMap} */
        this.iglooMap;


        // block
        const block = scene.add.rectangle(-11, 0, 1520, 960);
        block.scaleX = 1.0622070020971;
        block.scaleY = 1.1688154174421634;
        block.isFilled = true;
        block.fillColor = 0;
        block.fillAlpha = 0.5;
        this.add(block);

        // bg
        const bg = scene.add.image(0, -35, "map", "bg");
        bg.setOrigin(0.5, 0.5007429420505201);
        bg.visible = false;
        this.add(bg);

        // dojo
        const dojo = scene.add.image(69, -310, "map", "dojo");
        dojo.setOrigin(0.5038759689922481, 0.5056179775280899);
        dojo.visible = false;
        this.add(dojo);

        // mountains
        const mountains = scene.add.image(29, -276, "map", "mountains");
        mountains.visible = false;
        this.add(mountains);

        // island
        const island = scene.add.image(-12, -30, "map", "island");
        island.setOrigin(0.5005417118093174, 0.5);
        island.visible = false;
        this.add(island);

        // mtn
        const mtn = scene.add.image(-232, -256, "map", "mtn");
        mtn.visible = false;
        this.add(mtn);

        // village
        const village = scene.add.image(-181, -179, "map", "village");
        village.setOrigin(0.503030303030303, 0.5041322314049587);
        village.visible = false;
        this.add(village);

        // beach
        const beach = scene.add.image(-390, -94, "map", "beach");
        beach.visible = false;
        this.add(beach);

        // dock
        const dock = scene.add.image(-370, 114, "map", "dock");
        dock.setOrigin(0.5, 0.5037037037037037);
        dock.visible = false;
        this.add(dock);

        // town
        const town = scene.add.image(-128, 22, "map", "town");
        town.visible = false;
        this.add(town);

        // forts
        const forts = scene.add.image(78, 30, "map", "forts");
        forts.setOrigin(0.5045045045045045, 0.5045871559633027);
        forts.visible = false;
        this.add(forts);

        // igloo
        const igloo = scene.add.image(201, 141, "map", "igloo");
        igloo.visible = false;
        this.add(igloo);

        // rink
        const rink = scene.add.image(52, -98, "map", "rink");
        rink.setOrigin(0.5023041474654378, 0.5);
        rink.visible = false;
        this.add(rink);

        // forest
        const forest = scene.add.image(291, -84, "map", "forest");
        forest.setOrigin(0.5027027027027027, 0.5057471264367817);
        forest.visible = false;
        this.add(forest);

        // cove
        const cove = scene.add.image(334, -169, "map", "cove");
        cove.setOrigin(0.5, 0.5058823529411764);
        cove.visible = false;
        this.add(cove);

        // mine
        const mine = scene.add.image(168, -214, "map", "mine");
        mine.setOrigin(0.5042016806722689, 0.5);
        mine.visible = false;
        this.add(mine);

        // berg
        const berg = scene.add.image(402, -210, "map", "berg");
        berg.visible = false;
        this.add(berg);

        // note
        const note = scene.add.image(419, 242, "map", "note");
        note.setOrigin(0.5017667844522968, 0.5);
        note.visible = false;
        this.add(note);

        // iglooMap
        const iglooMap = new IglooMap(scene, 0, 0);
        iglooMap.visible = false;
        this.add(iglooMap);

        // a
        const a = scene.add.image(-1, 18, "map", "a");
        a.scaleX = 0.91;
        a.scaleY = 0.91;
        this.add(a);

        // central_test
        const central_test = scene.add.rectangle(-150, 134, 128, 128);
        central_test.scaleY = 0.4364936485290203;
        this.add(central_test);

        // overlay_main
        const overlay_main = scene.add.image(0, 17, "map-new", "overlay/main");
        overlay_main.scaleX = 0.97;
        overlay_main.scaleY = 0.95;
        this.add(overlay_main);

        // grey_button
        const grey_button = scene.add.image(696, -398, "main", "grey-button");
        this.add(grey_button);

        // grey_x
        const grey_x = scene.add.image(696, -400, "main", "grey-x");
        this.add(grey_x);

        // rectangle_1
        const rectangle_1 = scene.add.rectangle(449, 126, 128, 128);
        rectangle_1.scaleX = 0.5104699314572384;
        rectangle_1.scaleY = 0.3728060295052945;
        rectangle_1.alpha = 0.1;
        rectangle_1.isFilled = true;
        this.add(rectangle_1);

        // rectangle
        const rectangle = scene.add.rectangle(534, 71, 128, 128);
        rectangle.scaleX = 0.6781767344211687;
        rectangle.scaleY = 0.4780733043598887;
        rectangle.alpha = 0.1;
        rectangle.isFilled = true;
        this.add(rectangle);

        // rectangle_2
        const rectangle_2 = scene.add.rectangle(405, 69, 128, 128);
        rectangle_2.scaleX = 0.3793734102024384;
        rectangle_2.scaleY = 0.2614106227221028;
        rectangle_2.alpha = 0.1;
        rectangle_2.isFilled = true;
        this.add(rectangle_2);

        // rectangle_3
        const rectangle_3 = scene.add.rectangle(279, 122, 128, 128);
        rectangle_3.scaleX = 0.8954755570136395;
        rectangle_3.scaleY = 0.6041666565449354;
        rectangle_3.alpha = 0.1;
        rectangle_3.isFilled = true;
        this.add(rectangle_3);

        // rectangle_4
        const rectangle_4 = scene.add.rectangle(497, 263, 128, 128);
        rectangle_4.scaleX = 0.8954755570136395;
        rectangle_4.scaleY = 0.6041666565449354;
        rectangle_4.alpha = 0.1;
        rectangle_4.isFilled = true;
        this.add(rectangle_4);

        // rectangle_5
        const rectangle_5 = scene.add.rectangle(-271, 322, 128, 128);
        rectangle_5.scaleX = 1.4937234037182128;
        rectangle_5.scaleY = 0.754009407852105;
        rectangle_5.alpha = 0.1;
        rectangle_5.isFilled = true;
        this.add(rectangle_5);

        // rectangle_6
        const rectangle_6 = scene.add.rectangle(-508, 379, 128, 128);
        rectangle_6.scaleX = 0.8954755570136395;
        rectangle_6.scaleY = 0.6041666565449354;
        rectangle_6.alpha = 0.1;
        rectangle_6.isFilled = true;
        this.add(rectangle_6);

        // central_test_1
        const central_test_1 = scene.add.rectangle(68, 82, 128, 128);
        central_test_1.scaleY = 0.4364936485290203;
        this.add(central_test_1);

        // rectangle_7
        const rectangle_7 = scene.add.rectangle(-288, 238, 128, 128);
        rectangle_7.scaleX = 0.5141331000220111;
        rectangle_7.scaleY = 0.5863126157852041;
        rectangle_7.alpha = 0.1;
        rectangle_7.isFilled = true;
        this.add(rectangle_7);

        // block (components)
        new Interactive(block);

        // bg (components)
        new Interactive(bg);

        // dojo (components)
        const dojoButton = new Button(dojo);
        dojoButton.spriteName = "dojo";
        dojoButton.callback = () => this.onRoomClick(321);
        dojoButton.activeFrame = false;
        const dojoShowHint = new ShowHint(dojo);
        dojoShowHint.text = "dojoext_hint";

        // mtn (components)
        const mtnButton = new Button(mtn);
        mtnButton.spriteName = "mtn";
        mtnButton.callback = () => this.onRoomClick(230);
        mtnButton.activeFrame = false;
        const mtnShowHint = new ShowHint(mtn);
        mtnShowHint.text = "mtn_hint";

        // village (components)
        const villageButton = new Button(village);
        villageButton.spriteName = "village";
        villageButton.callback = () => this.onRoomClick(200);
        villageButton.activeFrame = false;
        const villageShowHint = new ShowHint(village);
        villageShowHint.text = "village_hint";

        // beach (components)
        const beachButton = new Button(beach);
        beachButton.spriteName = "beach";
        beachButton.callback = () => this.onRoomClick(400);
        beachButton.activeFrame = false;
        const beachShowHint = new ShowHint(beach);
        beachShowHint.text = "beach_hint";

        // dock (components)
        const dockButton = new Button(dock);
        dockButton.spriteName = "dock";
        dockButton.callback = () => this.onRoomClick(800);
        dockButton.activeFrame = false;
        const dockShowHint = new ShowHint(dock);
        dockShowHint.text = "dock_hint";

        // town (components)
        const townButton = new Button(town);
        townButton.spriteName = "town";
        townButton.callback = () => this.onRoomClick(100);
        townButton.activeFrame = false;
        const townShowHint = new ShowHint(town);
        townShowHint.text = "town_hint";

        // forts (components)
        const fortsButton = new Button(forts);
        fortsButton.spriteName = "forts";
        fortsButton.callback = () => this.onRoomClick(801);
        fortsButton.activeFrame = false;
        const fortsShowHint = new ShowHint(forts);
        fortsShowHint.text = "forts_hint";

        // igloo (components)
        const iglooButton = new Button(igloo);
        iglooButton.spriteName = "igloo";
        iglooButton.callback = () => this.iglooMap.show();
        iglooButton.activeFrame = false;
        const iglooShowHint = new ShowHint(igloo);
        iglooShowHint.text = "igloos_hint";

        // rink (components)
        const rinkButton = new Button(rink);
        rinkButton.spriteName = "rink";
        rinkButton.callback = () => this.onRoomClick(802);
        rinkButton.activeFrame = false;
        const rinkShowHint = new ShowHint(rink);
        rinkShowHint.text = "rink_hint";

        // forest (components)
        const forestButton = new Button(forest);
        forestButton.spriteName = "forest";
        forestButton.callback = () => this.onRoomClick(809);
        forestButton.activeFrame = false;
        const forestShowHint = new ShowHint(forest);
        forestShowHint.text = "forest_hint";

        // cove (components)
        const coveButton = new Button(cove);
        coveButton.spriteName = "cove";
        coveButton.callback = () => this.onRoomClick(810);
        coveButton.activeFrame = false;
        const coveShowHint = new ShowHint(cove);
        coveShowHint.text = "cove_hint";

        // mine (components)
        const mineButton = new Button(mine);
        mineButton.spriteName = "mine";
        mineButton.callback = () => this.onRoomClick(807);
        mineButton.activeFrame = false;
        const mineShowHint = new ShowHint(mine);
        mineShowHint.text = "shack_hint";

        // berg (components)
        const bergButton = new Button(berg);
        bergButton.spriteName = "berg";
        bergButton.callback = () => this.onRoomClick(805);
        bergButton.activeFrame = false;

        // note (components)
        new Interactive(note);

        // central_test (components)
        const central_testShowHint = new ShowHint(central_test);
        central_testShowHint.text = "Town on Building";
        const central_testSimpleButton = new SimpleButton(central_test);
        central_testSimpleButton.callback = () => this.onRoomClick(10);

        // grey_button (components)
        const grey_buttonButton = new Button(grey_button);
        grey_buttonButton.spriteName = "grey-button";
        grey_buttonButton.callback = () => { this.visible = false };

        // rectangle_1 (components)
        const rectangle_1SimpleButton = new SimpleButton(rectangle_1);
        rectangle_1SimpleButton.callback = () => this.onRoomClick(60);
        const rectangle_1ShowHint = new ShowHint(rectangle_1);
        rectangle_1ShowHint.text = "Park";

        // rectangle (components)
        const rectangleSimpleButton = new SimpleButton(rectangle);
        rectangleSimpleButton.callback = () => this.onRoomClick(80);
        const rectangleShowHint = new ShowHint(rectangle);
        rectangleShowHint.text = "Lost Forest";

        // rectangle_2 (components)
        const rectangle_2SimpleButton = new SimpleButton(rectangle_2);
        rectangle_2SimpleButton.callback = () => this.onRoomClick(70);
        const rectangle_2ShowHint = new ShowHint(rectangle_2);
        rectangle_2ShowHint.text = "Mine";

        // rectangle_3 (components)
        const rectangle_3SimpleButton = new SimpleButton(rectangle_3);
        rectangle_3SimpleButton.callback = () => this.onRoomClick(50);
        const rectangle_3ShowHint = new ShowHint(rectangle_3);
        rectangle_3ShowHint.text = "Plaza";

        // rectangle_4 (components)
        const rectangle_4SimpleButton = new SimpleButton(rectangle_4);
        rectangle_4SimpleButton.callback = () => this.onRoomClick(90);
        const rectangle_4ShowHint = new ShowHint(rectangle_4);
        rectangle_4ShowHint.text = "Lake";

        // rectangle_5 (components)
        const rectangle_5SimpleButton = new SimpleButton(rectangle_5);
        rectangle_5SimpleButton.callback = () => this.onRoomClick(30);
        const rectangle_5ShowHint = new ShowHint(rectangle_5);
        rectangle_5ShowHint.text = "The Port";

        // rectangle_6 (components)
        const rectangle_6SimpleButton = new SimpleButton(rectangle_6);
        rectangle_6SimpleButton.callback = () => this.onRoomClick(40);
        const rectangle_6ShowHint = new ShowHint(rectangle_6);
        rectangle_6ShowHint.text = "Pirate Island";

        // central_test_1 (components)
        const central_test_1ShowHint = new ShowHint(central_test_1);
        central_test_1ShowHint.text = "Central on Building";
        new SimpleButton(central_test_1);

        // rectangle_7 (components)
        const rectangle_7SimpleButton = new SimpleButton(rectangle_7);
        rectangle_7SimpleButton.callback = () => this.onRoomClick(20);
        const rectangle_7ShowHint = new ShowHint(rectangle_7);
        rectangle_7ShowHint.text = "Tropical Forest";

        this.iglooMap = iglooMap;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    onRoomClick(id) {
        let room = this.crumbs.scenes.rooms[id]
        if (this.world.room.key == room.key) return

        this.visible = false

        this.world.client.sendJoinRoom(id, room.key, room.x, room.y, 80)
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
