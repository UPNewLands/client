import BaseContainer from '@scenes/base/BaseContainer'

import { Button, Interactive, ShowHint, SimpleButton, Animation } from '@components/components'

import IglooMap from './igloo_map/IglooMap'


/* START OF COMPILED CODE */

export default class Map extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Rectangle} */
        this.white_overlay;
        /** @type {IglooMap} */
        this.iglooMap;
        /** @type {Phaser.GameObjects.Container} */
        this.shops_container;
        /** @type {Phaser.GameObjects.Sprite} */
        this.catchinwavesupgrades;
        /** @type {Phaser.GameObjects.Sprite} */
        this.costumetrunk;
        /** @type {Phaser.GameObjects.Sprite} */
        this.hydrohopperupgrades;
        /** @type {Phaser.GameObjects.Sprite} */
        this.martialartworks;
        /** @type {Phaser.GameObjects.Sprite} */
        this.musiccatalog;
        /** @type {Phaser.GameObjects.Sprite} */
        this.penguinstyle;
        /** @type {Phaser.GameObjects.Sprite} */
        this.petfurniture;
        /** @type {Phaser.GameObjects.Sprite} */
        this.sledraceupgrades;
        /** @type {Phaser.GameObjects.Sprite} */
        this.snowandsports;
        /** @type {Phaser.GameObjects.Container} */
        this.games_container;
        /** @type {Phaser.GameObjects.Sprite} */
        this.aqua;
        /** @type {Phaser.GameObjects.Sprite} */
        this.arcade;
        /** @type {Phaser.GameObjects.Sprite} */
        this.counters;
        /** @type {Phaser.GameObjects.Sprite} */
        this.jitsu;
        /** @type {Phaser.GameObjects.Sprite} */
        this.surfer;
        /** @type {Phaser.GameObjects.Sprite} */
        this.waves_1;
        /** @type {Phaser.GameObjects.Sprite} */
        this.dancecontest;
        /** @type {Phaser.GameObjects.Sprite} */
        this.soundstudio;
        /** @type {Phaser.GameObjects.Sprite} */
        this.hydro;
        /** @type {Phaser.GameObjects.Sprite} */
        this.fishing;
        /** @type {Phaser.GameObjects.Sprite} */
        this.jetpack;
        /** @type {Phaser.GameObjects.Sprite} */
        this.pizzatron;
        /** @type {Phaser.GameObjects.Sprite} */
        this.cannon;
        /** @type {Phaser.GameObjects.Sprite} */
        this.rescue;
        /** @type {Phaser.GameObjects.Sprite} */
        this.roundup;
        /** @type {Phaser.GameObjects.Sprite} */
        this.pufflescape;
        /** @type {Phaser.GameObjects.Sprite} */
        this.sled;
        /** @type {Phaser.GameObjects.Sprite} */
        this.smoothie;


        // s_mbolo_27
        const s_mbolo_27 = scene.add.image(53, 362, "newestMap", "Símbolo 27");
        s_mbolo_27.scaleX = 0.5;
        s_mbolo_27.scaleY = 0.5;
        this.add(s_mbolo_27);

        // bg
        const bg = scene.add.image(0, -35, "map", "bg");
        bg.setOrigin(0.5, 0.5007429420505201);
        bg.visible = false;
        this.add(bg);

        // block
        const block = scene.add.rectangle(-32.77707700843423, 23.469213665729455, 1520, 960);
        block.scaleX = 1.0622070020971;
        block.scaleY = 1.1688154174421634;
        block.setOrigin(0.4803183635209356, 0.49685330762054664);
        block.isFilled = true;
        block.fillColor = 0;
        block.fillAlpha = 0.5;
        this.add(block);

        // sky
        const sky = scene.add.image(26, -272, "newestMap", "sky");
        sky.scaleX = 0.5;
        sky.scaleY = 0.5;
        this.add(sky);

        // cloud2
        const cloud2 = scene.add.image(506, -219, "newestMap", "cloud2");
        cloud2.scaleX = 0.5;
        cloud2.scaleY = 0.5;
        this.add(cloud2);

        // sprite_35
        const sprite_35 = scene.add.image(400, -256, "newestMap", "sprite 35");
        sprite_35.scaleX = 0.5;
        sprite_35.scaleY = 0.5;
        this.add(sprite_35);

        // cloud1
        const cloud1 = scene.add.image(-417, -179, "newestMap", "cloud1");
        cloud1.scaleX = 0.5;
        cloud1.scaleY = 0.5;
        this.add(cloud1);

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

        // a
        const a = scene.add.image(-1, 18, "map", "a");
        a.scaleX = 0.91;
        a.scaleY = 0.91;
        a.visible = false;
        this.add(a);

        // overlay_main
        const overlay_main = scene.add.image(0, 17, "map-new", "overlay/main");
        overlay_main.scaleX = 0.97;
        overlay_main.scaleY = 0.95;
        overlay_main.visible = false;
        this.add(overlay_main);

        // sea
        const sea = scene.add.image(9, 216, "newestMap", "sea");
        sea.scaleX = 0.5;
        sea.scaleY = 0.5;
        this.add(sea);

        // waves
        const waves = scene.add.image(1, 167, "newestMap", "waves");
        waves.scaleX = 0.5;
        waves.scaleY = 0.5;
        this.add(waves);

        // s_mbolo_42
        const s_mbolo_42 = scene.add.image(98, -291, "newestMap", "Símbolo 42");
        s_mbolo_42.scaleX = 0.5;
        s_mbolo_42.scaleY = 0.5;
        this.add(s_mbolo_42);

        // symbol_14
        const symbol_14 = scene.add.image(29, -190, "newestMap", "Symbol 14");
        symbol_14.scaleX = 0.5;
        symbol_14.scaleY = 0.5;
        this.add(symbol_14);

        // s_mbolo_46
        const s_mbolo_46 = scene.add.image(-231, -159, "newestMap", "Símbolo 46");
        s_mbolo_46.scaleX = 0.5;
        s_mbolo_46.scaleY = 0.5;
        this.add(s_mbolo_46);

        // s_mbolo_47
        const s_mbolo_47 = scene.add.image(394, -193, "newestMap", "Símbolo 47");
        s_mbolo_47.scaleX = 0.5;
        s_mbolo_47.scaleY = 0.5;
        this.add(s_mbolo_47);

        // s_mbolo_45
        const s_mbolo_45 = scene.add.image(-410, -183, "newestMap", "Símbolo 45");
        s_mbolo_45.scaleX = 0.5;
        s_mbolo_45.scaleY = 0.5;
        this.add(s_mbolo_45);

        // s_mbolo_48
        const s_mbolo_48 = scene.add.image(-86, -205, "newestMap", "Símbolo 48");
        s_mbolo_48.scaleX = 0.5;
        s_mbolo_48.scaleY = 0.5;
        this.add(s_mbolo_48);

        // shadows
        const shadows = scene.add.image(-7, 14, "newestMap", "shadows");
        shadows.scaleX = 0.5;
        shadows.scaleY = 0.5;
        shadows.alpha = 0.2;
        shadows.alphaTopLeft = 0.2;
        shadows.alphaTopRight = 0.2;
        shadows.alphaBottomLeft = 0.2;
        shadows.alphaBottomRight = 0.2;
        this.add(shadows);

        // s_mbolo_44
        const s_mbolo_44 = scene.add.image(88, 196, "newestMap", "Símbolo 44");
        s_mbolo_44.scaleX = 0.5;
        s_mbolo_44.scaleY = 0.5;
        this.add(s_mbolo_44);

        // s_mbolo_4
        const s_mbolo_4 = scene.add.image(-160, 111, "newestMap", "Símbolo 4");
        s_mbolo_4.scaleX = 0.5;
        s_mbolo_4.scaleY = 0.5;
        this.add(s_mbolo_4);

        // s_mbolo_52
        const s_mbolo_52 = scene.add.image(-481, 176, "newestMap", "Símbolo 52");
        s_mbolo_52.scaleX = 0.5;
        s_mbolo_52.scaleY = 0.5;
        this.add(s_mbolo_52);

        // s_mbolo_64
        const s_mbolo_64 = scene.add.image(92, 83, "newestMap", "Símbolo 64");
        s_mbolo_64.scaleX = 0.5;
        s_mbolo_64.scaleY = 0.5;
        this.add(s_mbolo_64);

        // central
        const central = scene.add.image(121, 11, "newestMap", "central");
        central.scaleX = 0.5;
        central.scaleY = 0.5;
        this.add(central);

        // s_mbolo_69
        const s_mbolo_69 = scene.add.image(142, 40, "newestMap", "Símbolo 69");
        s_mbolo_69.scaleX = 0.5;
        s_mbolo_69.scaleY = 0.5;
        this.add(s_mbolo_69);

        // igloo_1
        const igloo_1 = scene.add.image(30, 7, "newestMap", "igloo");
        igloo_1.scaleX = 0.5;
        igloo_1.scaleY = 0.5;
        this.add(igloo_1);

        // s_mbolo_66
        const s_mbolo_66 = scene.add.image(179, 103, "newestMap", "Símbolo 66");
        s_mbolo_66.scaleX = 0.5;
        s_mbolo_66.scaleY = 0.5;
        this.add(s_mbolo_66);

        // s_mbolo_70
        const s_mbolo_70 = scene.add.image(70, 115, "newestMap", "Símbolo 70");
        s_mbolo_70.scaleX = 0.5;
        s_mbolo_70.scaleY = 0.5;
        this.add(s_mbolo_70);

        // town_1
        const town_1 = scene.add.image(-177, 137, "newestMap", "town");
        town_1.scaleX = 0.5;
        town_1.scaleY = 0.5;
        this.add(town_1);

        // s_mbolo_93
        const s_mbolo_93 = scene.add.image(-292, 199, "newestMap", "Símbolo 93");
        s_mbolo_93.scaleX = 0.5;
        s_mbolo_93.scaleY = 0.5;
        this.add(s_mbolo_93);

        // s_mbolo_6
        const s_mbolo_6 = scene.add.image(-169, 156, "newestMap", "Símbolo 6");
        s_mbolo_6.scaleX = 0.5;
        s_mbolo_6.scaleY = 0.5;
        this.add(s_mbolo_6);

        // s_mbolo_77
        const s_mbolo_77 = scene.add.image(-400, 203, "newestMap", "Símbolo 77");
        s_mbolo_77.scaleX = 0.5;
        s_mbolo_77.scaleY = 0.5;
        this.add(s_mbolo_77);

        // pirate
        const pirate = scene.add.image(-602, 395, "newestMap", "pirate");
        pirate.scaleX = 0.5;
        pirate.scaleY = 0.5;
        this.add(pirate);

        // s_mbolo_65
        const s_mbolo_65 = scene.add.image(-296, 370, "newestMap", "Símbolo 65");
        s_mbolo_65.scaleX = 0.5;
        s_mbolo_65.scaleY = 0.5;
        this.add(s_mbolo_65);

        // s_mbolo_78
        const s_mbolo_78 = scene.add.image(-301, 336, "newestMap", "Símbolo 78");
        s_mbolo_78.scaleX = 0.5;
        s_mbolo_78.scaleY = 0.5;
        this.add(s_mbolo_78);

        // s_mbolo_109
        const s_mbolo_109 = scene.add.image(-412, 322, "newestMap", "Símbolo 109");
        s_mbolo_109.scaleX = 0.5;
        s_mbolo_109.scaleY = 0.5;
        this.add(s_mbolo_109);

        // port
        const port = scene.add.image(-380, 305, "newestMap", "port");
        port.scaleX = 0.5;
        port.scaleY = 0.5;
        this.add(port);

        // s_mbolo_97
        const s_mbolo_97 = scene.add.image(523, 46, "newestMap", "Símbolo 97");
        s_mbolo_97.scaleX = 0.5;
        s_mbolo_97.scaleY = 0.5;
        this.add(s_mbolo_97);

        // s_mbolo_87
        const s_mbolo_87 = scene.add.image(677, 263, "newestMap", "Símbolo 87");
        s_mbolo_87.scaleX = 0.5;
        s_mbolo_87.scaleY = 0.5;
        this.add(s_mbolo_87);

        // forest_1
        const forest_1 = scene.add.image(581, 63, "newestMap", "forest");
        forest_1.scaleX = 0.5;
        forest_1.scaleY = 0.5;
        this.add(forest_1);

        // s_mbolo_98
        const s_mbolo_98 = scene.add.image(596, 92, "newestMap", "Símbolo 98");
        s_mbolo_98.scaleX = 0.5;
        s_mbolo_98.scaleY = 0.5;
        this.add(s_mbolo_98);

        // hidden
        const hidden = scene.add.image(675, 269, "newestMap", "hidden");
        hidden.scaleX = 0.5;
        hidden.scaleY = 0.5;
        this.add(hidden);

        // s_mbolo_62
        const s_mbolo_62 = scene.add.image(649, 86, "newestMap", "Símbolo 62");
        s_mbolo_62.scaleX = 0.5;
        s_mbolo_62.scaleY = 0.5;
        this.add(s_mbolo_62);

        // s_mbolo_99
        const s_mbolo_99 = scene.add.image(611, 110, "newestMap", "Símbolo 99");
        s_mbolo_99.scaleX = 0.5;
        s_mbolo_99.scaleY = 0.5;
        this.add(s_mbolo_99);

        // tropical
        const tropical = scene.add.image(-500, 177, "newestMap", "tropical");
        tropical.scaleX = 0.5;
        tropical.scaleY = 0.5;
        this.add(tropical);

        // s_mbolo_100
        const s_mbolo_100 = scene.add.image(615, 122, "newestMap", "Símbolo 100");
        s_mbolo_100.scaleX = 0.5;
        s_mbolo_100.scaleY = 0.5;
        this.add(s_mbolo_100);

        // plaza
        const plaza = scene.add.image(290, 94, "newestMap", "plaza");
        plaza.scaleX = 0.5;
        plaza.scaleY = 0.5;
        this.add(plaza);

        // s_mbolo_107
        const s_mbolo_107 = scene.add.image(462, 218, "newestMap", "Símbolo 107");
        s_mbolo_107.scaleX = 0.5;
        s_mbolo_107.scaleY = 0.5;
        this.add(s_mbolo_107);

        // s_mbolo_60
        const s_mbolo_60 = scene.add.image(378, 187, "newestMap", "Símbolo 60");
        s_mbolo_60.scaleX = 0.5;
        s_mbolo_60.scaleY = 0.5;
        this.add(s_mbolo_60);

        // mine_1
        const mine_1 = scene.add.image(429, 51, "newestMap", "mine");
        mine_1.scaleX = 0.5;
        mine_1.scaleY = 0.5;
        this.add(mine_1);

        // s_mbolo_84
        const s_mbolo_84 = scene.add.image(506, 229, "newestMap", "Símbolo 84");
        s_mbolo_84.scaleX = 0.5;
        s_mbolo_84.scaleY = 0.5;
        this.add(s_mbolo_84);

        // lake
        const lake = scene.add.image(537, 291, "newestMap", "lake");
        lake.scaleX = 0.5;
        lake.scaleY = 0.5;
        this.add(lake);

        // s_mbolo_85
        const s_mbolo_85 = scene.add.image(592, 282, "newestMap", "Símbolo 85");
        s_mbolo_85.scaleX = 0.5;
        s_mbolo_85.scaleY = 0.5;
        this.add(s_mbolo_85);

        // s_mbolo_71
        const s_mbolo_71 = scene.add.image(511, 155, "newestMap", "Símbolo 71");
        s_mbolo_71.scaleX = 0.5;
        s_mbolo_71.scaleY = 0.5;
        this.add(s_mbolo_71);

        // s_mbolo_105
        const s_mbolo_105 = scene.add.image(445, 112, "newestMap", "Símbolo 105");
        s_mbolo_105.scaleX = 0.5;
        s_mbolo_105.scaleY = 0.5;
        this.add(s_mbolo_105);

        // s_mbolo_51
        const s_mbolo_51 = scene.add.image(440, -175, "newestMap", "Símbolo 51");
        s_mbolo_51.scaleX = 0.5;
        s_mbolo_51.scaleY = 0.5;
        this.add(s_mbolo_51);

        // park
        const park = scene.add.image(485, 99, "newestMap", "park");
        park.scaleX = 0.5;
        park.scaleY = 0.5;
        this.add(park);

        // berg_1
        const berg_1 = scene.add.image(-726, 89, "newestMap", "berg");
        berg_1.scaleX = 0.5;
        berg_1.scaleY = 0.5;
        this.add(berg_1);

        // s_mbolo_50
        const s_mbolo_50 = scene.add.image(97, -173, "newestMap", "Símbolo 50");
        s_mbolo_50.scaleX = 0.5;
        s_mbolo_50.scaleY = 0.5;
        this.add(s_mbolo_50);

        // s_mbolo_35
        const s_mbolo_35 = scene.add.image(609, 215, "newestMap", "Símbolo 35");
        s_mbolo_35.scaleX = 0.5;
        s_mbolo_35.scaleY = 0.5;
        this.add(s_mbolo_35);

        // dojo_1
        const dojo_1 = scene.add.image(472, -315, "newestMap", "dojo");
        this.add(dojo_1);

        // cloudsall
        const cloudsall = scene.add.image(-5, 9, "newestMap", "cloudsall");
        cloudsall.scaleX = 0.5;
        cloudsall.scaleY = 0.5;
        this.add(cloudsall);

        // white_overlay
        const white_overlay = scene.add.rectangle(5, 5, 128, 128);
        white_overlay.scaleX = 11.693966924568103;
        white_overlay.scaleY = 7.654820022230695;
        white_overlay.visible = false;
        white_overlay.alpha = 0.5;
        white_overlay.isFilled = true;
        this.add(white_overlay);

        // overlay_main_1
        const overlay_main_1 = scene.add.image(0, 20, "map-new", "overlay/main");
        this.add(overlay_main_1);

        // grey_button
        const grey_button = scene.add.image(716, -414, "main", "grey-button");
        this.add(grey_button);

        // grey_x
        const grey_x = scene.add.image(716, -416, "main", "grey-x");
        this.add(grey_x);

        // overlay_shopsbutton0001
        const overlay_shopsbutton0001 = scene.add.image(-666, -377, "map-new", "overlay/shopsbutton0001");
        this.add(overlay_shopsbutton0001);

        // overlay_placesbutton0001
        const overlay_placesbutton0001 = scene.add.image(-540, -377, "map-new", "overlay/placesbutton0001");
        this.add(overlay_placesbutton0001);

        // overlay_gamesbutton0001
        const overlay_gamesbutton0001 = scene.add.image(-411, -377, "map-new", "overlay/gamesbutton0001");
        this.add(overlay_gamesbutton0001);

        // text_1
        const text_1 = scene.add.text(-700, -321, "", {});
        text_1.text = "Shops";
        text_1.setStyle({ "color": "#404040ff", "fontFamily": "Burbank Small ", "fontSize": "25px" });
        this.add(text_1);

        // text
        const text = scene.add.text(-577, -321, "", {});
        text.text = "Places";
        text.setStyle({ "color": "#404040ff", "fontFamily": "Burbank Small", "fontSize": "25px" });
        this.add(text);

        // text_2
        const text_2 = scene.add.text(-450, -321, "", {});
        text_2.text = "Games";
        text_2.setStyle({ "color": "#404040ff", "fontFamily": "Burbank Small", "fontSize": "25px" });
        this.add(text_2);

        // iglooMap
        const iglooMap = new IglooMap(scene, 0, 0);
        iglooMap.visible = false;
        this.add(iglooMap);

        // shops_container
        const shops_container = scene.add.container(-466, -158);
        shops_container.visible = false;
        this.add(shops_container);

        // catchinwavesupgrades
        const catchinwavesupgrades = scene.add.sprite(-42, 365, "map-new", "shops/catchinwavesupgrades0001");
        shops_container.add(catchinwavesupgrades);

        // costumetrunk
        const costumetrunk = scene.add.sprite(916, 320, "map-new", "shops/costumetrunk0001");
        costumetrunk.visible = false;
        shops_container.add(costumetrunk);

        // hydrohopperupgrades
        const hydrohopperupgrades = scene.add.sprite(1008, 424, "map-new", "shops/hydrohopperupgrades0001");
        shops_container.add(hydrohopperupgrades);

        // martialartworks
        const martialartworks = scene.add.sprite(746, 33, "map-new", "shops/martialartworks0001");
        martialartworks.visible = false;
        shops_container.add(martialartworks);

        // musiccatalog
        const musiccatalog = scene.add.sprite(80, 447, "map-new", "shops/musiccatalog0001");
        shops_container.add(musiccatalog);

        // penguinstyle
        const penguinstyle = scene.add.sprite(275, 287, "map-new", "shops/penguinstyle0001");
        shops_container.add(penguinstyle);

        // petfurniture
        const petfurniture = scene.add.sprite(755, 265, "map-new", "shops/petfurniture0001");
        shops_container.add(petfurniture);

        // sledraceupgrades
        const sledraceupgrades = scene.add.sprite(123, 71, "map-new", "shops/sledracerupgrades0001");
        sledraceupgrades.visible = false;
        shops_container.add(sledraceupgrades);

        // snowandsports
        const snowandsports = scene.add.sprite(544, 172, "map-new", "shops/snowandsports0001");
        snowandsports.visible = false;
        shops_container.add(snowandsports);

        // games_container
        const games_container = scene.add.container(-642, -216);
        games_container.visible = false;
        this.add(games_container);

        // aqua
        const aqua = scene.add.sprite(-54, 276, "map-new", "games/aquagrabber0001");
        games_container.add(aqua);

        // arcade
        const arcade = scene.add.sprite(464, 258, "map-new", "games/arcadegames0001");
        games_container.add(arcade);

        // counters
        const counters = scene.add.sprite(356, 338, "map-new", "games/beancounters0001");
        games_container.add(counters);

        // jitsu
        const jitsu = scene.add.sprite(789, 50, "map-new", "games/cardjitsu0001");
        jitsu.visible = false;
        games_container.add(jitsu);

        // surfer
        const surfer = scene.add.sprite(1098, 307, "map-new", "games/cartsurfer0001");
        games_container.add(surfer);

        // waves_1
        const waves_1 = scene.add.sprite(141, 421, "map-new", "games/catchinwaves0001");
        games_container.add(waves_1);

        // dancecontest
        const dancecontest = scene.add.sprite(464, 400, "map-new", "games/dancecontest0001");
        games_container.add(dancecontest);

        // soundstudio
        const soundstudio = scene.add.sprite(448, 444, "map-new", "games/dj3ksoundstudio0001");
        soundstudio.visible = false;
        games_container.add(soundstudio);

        // hydro
        const hydro = scene.add.sprite(1190, 497, "map-new", "games/hydrohopper0001");
        games_container.add(hydro);

        // fishing
        const fishing = scene.add.sprite(182, 225, "map-new", "games/icefishing0001");
        fishing.visible = false;
        games_container.add(fishing);

        // jetpack
        const jetpack = scene.add.sprite(259, 498, "map-new", "games/jetpackadventure0001");
        games_container.add(jetpack);

        // pizzatron
        const pizzatron = scene.add.sprite(983, 338, "map-new", "games/pizzatron0001");
        games_container.add(pizzatron);

        // cannon
        const cannon = scene.add.sprite(836, 364, "map-new", "games/pufflelaunch0001");
        games_container.add(cannon);

        // rescue
        const rescue = scene.add.sprite(1071, 189, "map-new", "games/pufflerescue0001");
        games_container.add(rescue);

        // roundup
        const roundup = scene.add.sprite(890, 247, "map-new", "games/puffleroundup0001");
        games_container.add(roundup);

        // pufflescape
        const pufflescape = scene.add.sprite(855, 491, "map-new", "games/pufflescape0001");
        pufflescape.visible = false;
        games_container.add(pufflescape);

        // sled
        const sled = scene.add.sprite(153, 89, "map-new", "games/sledracing0001");
        sled.visible = false;
        games_container.add(sled);

        // smoothie
        const smoothie = scene.add.sprite(322, 529, "map-new", "games/smoothiesmash0001");
        smoothie.visible = false;
        games_container.add(smoothie);

        // bg (components)
        new Interactive(bg);

        // block (components)
        new Interactive(block);

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

        // central (components)
        const centralButton = new Button(central);
        centralButton.spriteName = "central";
        centralButton.callback = () => this.onRoomClick(1);
        centralButton.activeFrame = false;
        const centralShowHint = new ShowHint(central);
        centralShowHint.text = "Centre Island";

        // igloo_1 (components)
        const igloo_1Button = new Button(igloo_1);
        igloo_1Button.spriteName = "igloo";
        igloo_1Button.callback = () => this.iglooMap.show();
        igloo_1Button.activeFrame = false;
        const igloo_1ShowHint = new ShowHint(igloo_1);
        igloo_1ShowHint.text = "Show Igloos";

        // town_1 (components)
        const town_1Button = new Button(town_1);
        town_1Button.spriteName = "town";
        town_1Button.callback = () => this.onRoomClick(10);
        town_1Button.activeFrame = false;
        const town_1ShowHint = new ShowHint(town_1);
        town_1ShowHint.text = "Town Center";

        // pirate (components)
        const pirateButton = new Button(pirate);
        pirateButton.spriteName = "pirate";
        pirateButton.callback = () => this.onRoomClick(40);
        pirateButton.activeFrame = false;
        const pirateShowHint = new ShowHint(pirate);
        pirateShowHint.text = "Pirate Island";

        // port (components)
        const portButton = new Button(port);
        portButton.spriteName = "port";
        portButton.callback = () => this.onRoomClick(30);
        portButton.activeFrame = false;
        const portShowHint = new ShowHint(port);
        portShowHint.text = "The Port";

        // forest_1 (components)
        const forest_1Button = new Button(forest_1);
        forest_1Button.spriteName = "forest";
        forest_1Button.callback = () => this.onRoomClick(80);
        forest_1Button.activeFrame = false;
        const forest_1ShowHint = new ShowHint(forest_1);
        forest_1ShowHint.text = "Lost Forest";

        // tropical (components)
        const tropicalButton = new Button(tropical);
        tropicalButton.spriteName = "tropical";
        tropicalButton.callback = () => this.onRoomClick(20);
        tropicalButton.activeFrame = false;
        const tropicalShowHint = new ShowHint(tropical);
        tropicalShowHint.text = "Tropical Forest";

        // plaza (components)
        const plazaButton = new Button(plaza);
        plazaButton.spriteName = "plaza";
        plazaButton.callback = () => this.onRoomClick(50);
        plazaButton.activeFrame = false;
        const plazaShowHint = new ShowHint(plaza);
        plazaShowHint.text = "Plaza";

        // mine_1 (components)
        const mine_1Button = new Button(mine_1);
        mine_1Button.spriteName = "mine";
        mine_1Button.callback = () => this.onRoomClick(70);
        mine_1Button.activeFrame = false;
        const mine_1ShowHint = new ShowHint(mine_1);
        mine_1ShowHint.text = "Mine Entrance";

        // lake (components)
        const lakeButton = new Button(lake);
        lakeButton.spriteName = "lake";
        lakeButton.callback = () => this.onRoomClick(90);
        lakeButton.activeFrame = false;
        const lakeShowHint = new ShowHint(lake);
        lakeShowHint.text = "Lake";

        // park (components)
        const parkButton = new Button(park);
        parkButton.spriteName = "park";
        parkButton.callback = () => this.onRoomClick(60);
        parkButton.activeFrame = false;
        const parkShowHint = new ShowHint(park);
        parkShowHint.text = "Nature Park";

        // berg_1 (components)
        const berg_1SimpleButton = new SimpleButton(berg_1);
        berg_1SimpleButton.callback = () => this.onRoomClick(2);

        // dojo_1 (components)
        const dojo_1ShowHint = new ShowHint(dojo_1);
        dojo_1ShowHint.text = "Yōso Village";

        // white_overlay (components)
        new Interactive(white_overlay);

        // grey_button (components)
        const grey_buttonButton = new Button(grey_button);
        grey_buttonButton.spriteName = "grey-button";
        grey_buttonButton.callback = () => { this.visible = false };

        // overlay_shopsbutton0001 (components)
        const overlay_shopsbutton0001SimpleButton = new SimpleButton(overlay_shopsbutton0001);
        overlay_shopsbutton0001SimpleButton.callback = null;

        // overlay_placesbutton0001 (components)
        const overlay_placesbutton0001SimpleButton = new SimpleButton(overlay_placesbutton0001);
        overlay_placesbutton0001SimpleButton.callback = () => this.changeMode("places");

        // catchinwavesupgrades (components)
        const catchinwavesupgradesShowHint = new ShowHint(catchinwavesupgrades);
        catchinwavesupgradesShowHint.text = "Game Upgrade";
        new SimpleButton(catchinwavesupgrades);

        // hydrohopperupgrades (components)
        new SimpleButton(hydrohopperupgrades);
        const hydrohopperupgradesShowHint = new ShowHint(hydrohopperupgrades);
        hydrohopperupgradesShowHint.text = "Game Upgrade";

        // musiccatalog (components)
        const musiccatalogSimpleButton = new SimpleButton(musiccatalog);
        musiccatalogSimpleButton.callback = () => this.onRoomClick(410);
        const musiccatalogShowHint = new ShowHint(musiccatalog);
        musiccatalogShowHint.text = "Music Catalog";

        // penguinstyle (components)
        const penguinstyleSimpleButton = new SimpleButton(penguinstyle);
        penguinstyleSimpleButton.callback = () => this.onRoomClick(130);
        const penguinstyleShowHint = new ShowHint(penguinstyle);
        penguinstyleShowHint.text = "Penguin Style";

        // petfurniture (components)
        new SimpleButton(petfurniture);
        const petfurnitureShowHint = new ShowHint(petfurniture);
        petfurnitureShowHint.text = "Pet Furniture";

        // aqua (components)
        const aquaSimpleButton = new SimpleButton(aqua);
        aquaSimpleButton.callback = () => this.onRoomClick(805);
        const aquaShowHint = new ShowHint(aqua);
        aquaShowHint.text = "Aqua Grabber";

        // arcade (components)
        const arcadeSimpleButton = new SimpleButton(arcade);
        arcadeSimpleButton.callback = () => this.onRoomClick(121);
        const arcadeShowHint = new ShowHint(arcade);
        arcadeShowHint.text = "Arcade";

        // counters (components)
        const countersSimpleButton = new SimpleButton(counters);
        countersSimpleButton.callback = () => this.onRoomClick(110);
        const countersShowHint = new ShowHint(counters);
        countersShowHint.text = "Bean Counters";

        // surfer (components)
        const surferSimpleButton = new SimpleButton(surfer);
        surferSimpleButton.callback = () => this.onRoomClick(808);
        const surferShowHint = new ShowHint(surfer);
        surferShowHint.text = "Cart Surfer";

        // dancecontest (components)
        const dancecontestSimpleButton = new SimpleButton(dancecontest);
        dancecontestSimpleButton.callback = () => this.onRoomClick(120);
        const dancecontestShowHint = new ShowHint(dancecontest);
        dancecontestShowHint.text = "Dance Contest";

        // hydro (components)
        const hydroSimpleButton = new SimpleButton(hydro);
        hydroSimpleButton.callback = () => this.onRoomClick(800);
        const hydroShowHint = new ShowHint(hydro);
        hydroShowHint.text = "Hydro Hopper";

        // fishing (components)
        const fishingSimpleButton = new SimpleButton(fishing);
        fishingSimpleButton.callback = () => this.onRoomClick(220);
        const fishingShowHint = new ShowHint(fishing);
        fishingShowHint.text = "Ice Fishing";

        // jetpack (components)
        const jetpackSimpleButton = new SimpleButton(jetpack);
        jetpackSimpleButton.callback = () => this.onRoomClick(411);
        const jetpackShowHint = new ShowHint(jetpack);
        jetpackShowHint.text = "Jetpack Adventure";

        // pizzatron (components)
        const pizzatronSimpleButton = new SimpleButton(pizzatron);
        pizzatronSimpleButton.callback = () => this.onRoomClick(330);
        const pizzatronShowHint = new ShowHint(pizzatron);
        pizzatronShowHint.text = "Pizzatron 3000";

        // cannon (components)
        const cannonSimpleButton = new SimpleButton(cannon);
        cannonSimpleButton.callback = () => this.onRoomClick(310);
        const cannonShowHint = new ShowHint(cannon);
        cannonShowHint.text = "Puffle Launch";

        // rescue (components)
        const rescueSimpleButton = new SimpleButton(rescue);
        rescueSimpleButton.callback = () => this.onRoomClick(808);
        const rescueShowHint = new ShowHint(rescue);
        rescueShowHint.text = "Puffle Rescue";

        // roundup (components)
        const roundupSimpleButton = new SimpleButton(roundup);
        roundupSimpleButton.callback = () => this.onRoomClick(310);
        const roundupShowHint = new ShowHint(roundup);
        roundupShowHint.text = "Puffle Roundup\n";

        // sled (components)
        const sledSimpleButton = new SimpleButton(sled);
        sledSimpleButton.callback = () => this.onRoomClick(230);
        const sledShowHint = new ShowHint(sled);
        sledShowHint.text = "Sled Racing";

        this.white_overlay = white_overlay;
        this.iglooMap = iglooMap;
        this.shops_container = shops_container;
        this.catchinwavesupgrades = catchinwavesupgrades;
        this.costumetrunk = costumetrunk;
        this.hydrohopperupgrades = hydrohopperupgrades;
        this.martialartworks = martialartworks;
        this.musiccatalog = musiccatalog;
        this.penguinstyle = penguinstyle;
        this.petfurniture = petfurniture;
        this.sledraceupgrades = sledraceupgrades;
        this.snowandsports = snowandsports;
        this.games_container = games_container;
        this.aqua = aqua;
        this.arcade = arcade;
        this.counters = counters;
        this.jitsu = jitsu;
        this.surfer = surfer;
        this.waves_1 = waves_1;
        this.dancecontest = dancecontest;
        this.soundstudio = soundstudio;
        this.hydro = hydro;
        this.fishing = fishing;
        this.jetpack = jetpack;
        this.pizzatron = pizzatron;
        this.cannon = cannon;
        this.rescue = rescue;
        this.roundup = roundup;
        this.pufflescape = pufflescape;
        this.sled = sled;
        this.smoothie = smoothie;

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

    changeMode(newMode){
        if (newMode == "shops"){
            if (this.mode == "shops"){
                this.other.visible = false
                this.unselected.visible = true
                this.shops_container.visible = false
                this.mode = "none"
            }
            else{
                this.games_container.visible = false
                this.shops_container.visible = true
                this.white_overlay.visible = true
                this.other.visible = true
                this.unselected.visible = false
                this.mode = "shops"
            }
        }
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
