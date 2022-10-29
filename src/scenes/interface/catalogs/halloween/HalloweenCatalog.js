
// You can write more code here
import Book from '@scenes/interface/books/Book'
import Interactive from "../../../components/Interactive";
import Button from "../../../components/Button";
/* START OF COMPILED CODE */

export default class HalloweenCatalog extends Book {

    constructor() {
        super("HalloweenCatalog");

        /** @type {Phaser.GameObjects.Container} */
        this.buttons;
        /** @type {Phaser.GameObjects.Text} */
        this.coins;
        /** @type {Phaser.GameObjects.Container[]} */
        this.pages;


        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    preload() {

        this.load.pack("halloween-pack", "assets/media/interface/catalogs/halloween/halloween-pack.json");
    }

    /** @returns {void} */
    _create() {

        // block
        const block = this.add.rectangle(0, 1, 1520, 960);
        block.scaleX = 1.0855357488020507;
        block.scaleY = 1.041677287131595;
        block.setOrigin(0, 0);
        block.isFilled = true;
        block.fillColor = 0;
        block.fillAlpha = 0.2;

        // page12
        const page12 = this.add.container(0, 0);
        page12.visible = false;

        // p12
        const p12 = this.add.image(760, 480, "HalloweenCatalog", "Symbol 5");
        p12.scaleX = 1.5;
        p12.scaleY = 1.5;
        page12.add(p12);

        // symbol_661_png
        const symbol_661_png = this.add.image(887, 554, "HalloweenCatalog", "Symbol 661");
        symbol_661_png.scaleX = 1.5;
        symbol_661_png.scaleY = 1.5;
        page12.add(symbol_661_png);

        // shadow_png-123
        const shadow_png_123 = this.add.image(1061, 468, "HalloweenCatalog", "shadow");
        shadow_png_123.scaleX = 1.5;
        shadow_png_123.scaleY = 1.5;
        page12.add(shadow_png_123);

        // text_210983
        const text_210983 = this.add.text(753, 214, "", {});
        text_210983.setOrigin(0.5, 0.5);
        text_210983.text = "UPNewLands Style\n";
        text_210983.setStyle({ "fontFamily": "Asterisk", "fontSize": "64px", "fontStyle": "bold italic" });
        page12.add(text_210983);

        // text12903
        const text12903 = this.add.text(814, 262, "", {});
        text12903.setOrigin(0.5, 0.5);
        text12903.text = "Halloween 2022 Edition\n";
        text12903.setStyle({ "fontFamily": "Asterisk", "fontSize": "32px", "fontStyle": "italic" });
        page12.add(text12903);

        // close12
        const close12 = this.add.image(1041, 143, "HalloweenCatalog", "close");
        close12.scaleX = 1.5;
        close12.scaleY = 1.5;
        page12.add(close12);

        // backPage_12
        const backPage_12 = this.add.image(497, 771, "HalloweenCatalog", "backPage");
        backPage_12.scaleX = 1.5;
        backPage_12.scaleY = 1.5;
        page12.add(backPage_12);

        // text_882828
        const text_882828 = this.add.text(645, 617, "", {});
        text_882828.setOrigin(0.5, 0.5);
        text_882828.text = "Made by wildmaster84\nand alot of tears :')";
        text_882828.setStyle({ "fontFamily": "Asterisk", "fontSize": "32px", "fontStyle": "italic" });
        page12.add(text_882828);

        // page11
        const page11 = this.add.container(0, 0);
        page11.visible = false;

        // p11
        const p11 = this.add.image(760, 480, "HalloweenCatalog", "Symbol 1328");
        p11.scaleX = 1.8175061799564842;
        p11.scaleY = 1.6143088989137644;
        page11.add(p11);

        // flagBtn_active
        const flagBtn_active = this.add.image(415, 234, "HalloweenCatalog", "flagBtn");
        flagBtn_active.scaleX = 1.5;
        flagBtn_active.scaleY = 1.5;
        page11.add(flagBtn_active);

        // flagBtn_active_1
        const flagBtn_active_1 = this.add.image(499, 233, "HalloweenCatalog", "flagBtn");
        flagBtn_active_1.scaleX = 1.5;
        flagBtn_active_1.scaleY = 1.5;
        page11.add(flagBtn_active_1);

        // flagBtn_active_2
        const flagBtn_active_2 = this.add.image(589, 233, "HalloweenCatalog", "flagBtn");
        flagBtn_active_2.scaleX = 1.5;
        flagBtn_active_2.scaleY = 1.5;
        page11.add(flagBtn_active_2);

        // flagBtn_active_3
        const flagBtn_active_3 = this.add.image(679, 232, "HalloweenCatalog", "flagBtn");
        flagBtn_active_3.scaleX = 1.5;
        flagBtn_active_3.scaleY = 1.5;
        page11.add(flagBtn_active_3);

        // flagBtn_active_4
        const flagBtn_active_4 = this.add.image(677, 331, "HalloweenCatalog", "flagBtn");
        flagBtn_active_4.scaleX = 1.5;
        flagBtn_active_4.scaleY = 1.5;
        page11.add(flagBtn_active_4);

        // flagBtn_active_5
        const flagBtn_active_5 = this.add.image(586, 330, "HalloweenCatalog", "flagBtn");
        flagBtn_active_5.scaleX = 1.5;
        flagBtn_active_5.scaleY = 1.5;
        page11.add(flagBtn_active_5);

        // flagBtn_active_6
        const flagBtn_active_6 = this.add.image(498, 330, "HalloweenCatalog", "flagBtn");
        flagBtn_active_6.scaleX = 1.5;
        flagBtn_active_6.scaleY = 1.5;
        page11.add(flagBtn_active_6);

        // flagBtn_active_7
        const flagBtn_active_7 = this.add.image(409, 331, "HalloweenCatalog", "flagBtn");
        flagBtn_active_7.scaleX = 1.5;
        flagBtn_active_7.scaleY = 1.5;
        page11.add(flagBtn_active_7);

        // flagBtn_active_8
        const flagBtn_active_8 = this.add.image(677, 427, "HalloweenCatalog", "flagBtn");
        flagBtn_active_8.scaleX = 1.5;
        flagBtn_active_8.scaleY = 1.5;
        page11.add(flagBtn_active_8);

        // flagBtn_active_9
        const flagBtn_active_9 = this.add.image(586, 426, "HalloweenCatalog", "flagBtn");
        flagBtn_active_9.scaleX = 1.5;
        flagBtn_active_9.scaleY = 1.5;
        page11.add(flagBtn_active_9);

        // flagBtn_active_10
        const flagBtn_active_10 = this.add.image(497, 426, "HalloweenCatalog", "flagBtn");
        flagBtn_active_10.scaleX = 1.5;
        flagBtn_active_10.scaleY = 1.5;
        page11.add(flagBtn_active_10);

        // flagBtn_active_11
        const flagBtn_active_11 = this.add.image(406, 427, "HalloweenCatalog", "flagBtn");
        flagBtn_active_11.scaleX = 1.5;
        flagBtn_active_11.scaleY = 1.5;
        page11.add(flagBtn_active_11);

        // flagBtn_active_12
        const flagBtn_active_12 = this.add.image(676, 527, "HalloweenCatalog", "flagBtn");
        flagBtn_active_12.scaleX = 1.5;
        flagBtn_active_12.scaleY = 1.5;
        page11.add(flagBtn_active_12);

        // flagBtn_active_13
        const flagBtn_active_13 = this.add.image(585, 526, "HalloweenCatalog", "flagBtn");
        flagBtn_active_13.scaleX = 1.5;
        flagBtn_active_13.scaleY = 1.5;
        page11.add(flagBtn_active_13);

        // flagBtn_active_14
        const flagBtn_active_14 = this.add.image(498, 526, "HalloweenCatalog", "flagBtn");
        flagBtn_active_14.scaleX = 1.5;
        flagBtn_active_14.scaleY = 1.5;
        page11.add(flagBtn_active_14);

        // flagBtn_active_15
        const flagBtn_active_15 = this.add.image(406, 527, "HalloweenCatalog", "flagBtn");
        flagBtn_active_15.scaleX = 1.5;
        flagBtn_active_15.scaleY = 1.5;
        page11.add(flagBtn_active_15);

        // flagBtn_active_16
        const flagBtn_active_16 = this.add.image(677, 629, "HalloweenCatalog", "flagBtn");
        flagBtn_active_16.scaleX = 1.5;
        flagBtn_active_16.scaleY = 1.5;
        page11.add(flagBtn_active_16);

        // flagBtn_active_17
        const flagBtn_active_17 = this.add.image(586, 628, "HalloweenCatalog", "flagBtn");
        flagBtn_active_17.scaleX = 1.5;
        flagBtn_active_17.scaleY = 1.5;
        page11.add(flagBtn_active_17);

        // flagBtn_active_18
        const flagBtn_active_18 = this.add.image(498, 628, "HalloweenCatalog", "flagBtn");
        flagBtn_active_18.scaleX = 1.5;
        flagBtn_active_18.scaleY = 1.5;
        page11.add(flagBtn_active_18);

        // flagBtn_active_20
        const flagBtn_active_20 = this.add.image(677, 733, "HalloweenCatalog", "flagBtn");
        flagBtn_active_20.scaleX = 1.5;
        flagBtn_active_20.scaleY = 1.5;
        page11.add(flagBtn_active_20);

        // flagBtn_active_21
        const flagBtn_active_21 = this.add.image(585, 733, "HalloweenCatalog", "flagBtn");
        flagBtn_active_21.scaleX = 1.5;
        flagBtn_active_21.scaleY = 1.5;
        page11.add(flagBtn_active_21);

        // flagBtn_active_22
        const flagBtn_active_22 = this.add.image(499, 733, "HalloweenCatalog", "flagBtn");
        flagBtn_active_22.scaleX = 1.5;
        flagBtn_active_22.scaleY = 1.5;
        page11.add(flagBtn_active_22);

        // flagBtn_active_23
        const flagBtn_active_23 = this.add.image(407, 733, "HalloweenCatalog", "flagBtn");
        flagBtn_active_23.scaleX = 1.5;
        flagBtn_active_23.scaleY = 1.5;
        page11.add(flagBtn_active_23);

        // flagBtn_active_24
        const flagBtn_active_24 = this.add.image(862, 626, "HalloweenCatalog", "flagBtn");
        flagBtn_active_24.scaleX = 1.5;
        flagBtn_active_24.scaleY = 1.5;
        page11.add(flagBtn_active_24);

        // flagBtn_active_25
        const flagBtn_active_25 = this.add.image(860, 729, "HalloweenCatalog", "flagBtn");
        flagBtn_active_25.scaleX = 1.5;
        flagBtn_active_25.scaleY = 1.5;
        page11.add(flagBtn_active_25);

        // flagBtn_active_26
        const flagBtn_active_26 = this.add.image(948, 729, "HalloweenCatalog", "flagBtn");
        flagBtn_active_26.scaleX = 1.5;
        flagBtn_active_26.scaleY = 1.5;
        page11.add(flagBtn_active_26);

        // flagBtn_active_27
        const flagBtn_active_27 = this.add.image(1035, 729, "HalloweenCatalog", "flagBtn");
        flagBtn_active_27.scaleX = 1.5;
        flagBtn_active_27.scaleY = 1.5;
        page11.add(flagBtn_active_27);

        // flagBtn_active_28
        const flagBtn_active_28 = this.add.image(1119, 729, "HalloweenCatalog", "flagBtn");
        flagBtn_active_28.scaleX = 1.5;
        flagBtn_active_28.scaleY = 1.5;
        page11.add(flagBtn_active_28);

        // flagBtn_active_29
        const flagBtn_active_29 = this.add.image(945, 626, "HalloweenCatalog", "flagBtn");
        flagBtn_active_29.scaleX = 1.5;
        flagBtn_active_29.scaleY = 1.5;
        page11.add(flagBtn_active_29);

        // flagBtn_active_30
        const flagBtn_active_30 = this.add.image(1035, 627, "HalloweenCatalog", "flagBtn");
        flagBtn_active_30.scaleX = 1.5;
        flagBtn_active_30.scaleY = 1.5;
        page11.add(flagBtn_active_30);

        // flagBtn_active_31
        const flagBtn_active_31 = this.add.image(1119, 626, "HalloweenCatalog", "flagBtn");
        flagBtn_active_31.scaleX = 1.5;
        flagBtn_active_31.scaleY = 1.5;
        page11.add(flagBtn_active_31);

        // flagBtn_active_32
        const flagBtn_active_32 = this.add.image(861, 523, "HalloweenCatalog", "flagBtn");
        flagBtn_active_32.scaleX = 1.5;
        flagBtn_active_32.scaleY = 1.5;
        page11.add(flagBtn_active_32);

        // flagBtn_active_33
        const flagBtn_active_33 = this.add.image(947, 524, "HalloweenCatalog", "flagBtn");
        flagBtn_active_33.scaleX = 1.5;
        flagBtn_active_33.scaleY = 1.5;
        page11.add(flagBtn_active_33);

        // flagBtn_active_34
        const flagBtn_active_34 = this.add.image(1035, 523, "HalloweenCatalog", "flagBtn");
        flagBtn_active_34.scaleX = 1.5;
        flagBtn_active_34.scaleY = 1.5;
        page11.add(flagBtn_active_34);

        // flagBtn_active_35
        const flagBtn_active_35 = this.add.image(1119, 524, "HalloweenCatalog", "flagBtn");
        flagBtn_active_35.scaleX = 1.5;
        flagBtn_active_35.scaleY = 1.5;
        page11.add(flagBtn_active_35);

        // flagBtn_active_36
        const flagBtn_active_36 = this.add.image(861, 424, "HalloweenCatalog", "flagBtn");
        flagBtn_active_36.scaleX = 1.5;
        flagBtn_active_36.scaleY = 1.5;
        page11.add(flagBtn_active_36);

        // flagBtn_active_37
        const flagBtn_active_37 = this.add.image(947, 422, "HalloweenCatalog", "flagBtn");
        flagBtn_active_37.scaleX = 1.5;
        flagBtn_active_37.scaleY = 1.5;
        page11.add(flagBtn_active_37);

        // flagBtn_active_38
        const flagBtn_active_38 = this.add.image(1034, 422, "HalloweenCatalog", "flagBtn");
        flagBtn_active_38.scaleX = 1.5;
        flagBtn_active_38.scaleY = 1.5;
        page11.add(flagBtn_active_38);

        // flagBtn_active_39
        const flagBtn_active_39 = this.add.image(1118, 422, "HalloweenCatalog", "flagBtn");
        flagBtn_active_39.scaleX = 1.5;
        flagBtn_active_39.scaleY = 1.5;
        page11.add(flagBtn_active_39);

        // flagBtn_active_40
        const flagBtn_active_40 = this.add.image(862, 324, "HalloweenCatalog", "flagBtn");
        flagBtn_active_40.scaleX = 1.5;
        flagBtn_active_40.scaleY = 1.5;
        page11.add(flagBtn_active_40);

        // flagBtn_active_41
        const flagBtn_active_41 = this.add.image(947, 324, "HalloweenCatalog", "flagBtn");
        flagBtn_active_41.scaleX = 1.5;
        flagBtn_active_41.scaleY = 1.5;
        page11.add(flagBtn_active_41);

        // flagBtn_active_42
        const flagBtn_active_42 = this.add.image(1034, 324, "HalloweenCatalog", "flagBtn");
        flagBtn_active_42.scaleX = 1.5;
        flagBtn_active_42.scaleY = 1.5;
        page11.add(flagBtn_active_42);

        // flagBtn_active_43
        const flagBtn_active_43 = this.add.image(1117, 325, "HalloweenCatalog", "flagBtn");
        flagBtn_active_43.scaleX = 1.5;
        flagBtn_active_43.scaleY = 1.5;
        page11.add(flagBtn_active_43);

        // flagBtn_active_44
        const flagBtn_active_44 = this.add.image(1120, 227, "HalloweenCatalog", "flagBtn");
        flagBtn_active_44.scaleX = 1.5;
        flagBtn_active_44.scaleY = 1.5;
        page11.add(flagBtn_active_44);

        // flagBtn_active_45
        const flagBtn_active_45 = this.add.image(1032, 228, "HalloweenCatalog", "flagBtn");
        flagBtn_active_45.scaleX = 1.5;
        flagBtn_active_45.scaleY = 1.5;
        page11.add(flagBtn_active_45);

        // flagBtn_active_46
        const flagBtn_active_46 = this.add.image(947, 228, "HalloweenCatalog", "flagBtn");
        flagBtn_active_46.scaleX = 1.5;
        flagBtn_active_46.scaleY = 1.5;
        page11.add(flagBtn_active_46);

        // flagBtn_active_47
        const flagBtn_active_47 = this.add.image(862, 227, "HalloweenCatalog", "flagBtn");
        flagBtn_active_47.scaleX = 1.5;
        flagBtn_active_47.scaleY = 1.5;
        page11.add(flagBtn_active_47);

        // flagBtn_active_19
        const flagBtn_active_19 = this.add.image(408, 629, "HalloweenCatalog", "flagBtn");
        flagBtn_active_19.scaleX = 1.5;
        flagBtn_active_19.scaleY = 1.5;
        page11.add(flagBtn_active_19);

        // flagBtn_active_48
        const flagBtn_active_48 = this.add.image(1207.568115234375, 227.89950561523438, "HalloweenCatalog", "flagBtn");
        flagBtn_active_48.scaleX = 1.5;
        flagBtn_active_48.scaleY = 1.5;
        page11.add(flagBtn_active_48);

        // flagBtn_active_49
        const flagBtn_active_49 = this.add.image(1206.568115234375, 325.8995056152344, "HalloweenCatalog", "flagBtn");
        flagBtn_active_49.scaleX = 1.5;
        flagBtn_active_49.scaleY = 1.5;
        page11.add(flagBtn_active_49);

        // flagBtn_active_50
        const flagBtn_active_50 = this.add.image(1205.568115234375, 423.89947509765625, "HalloweenCatalog", "flagBtn");
        flagBtn_active_50.scaleX = 1.5;
        flagBtn_active_50.scaleY = 1.5;
        page11.add(flagBtn_active_50);

        // flagBtn_active_51
        const flagBtn_active_51 = this.add.image(1206.568115234375, 524.8994750976562, "HalloweenCatalog", "flagBtn");
        flagBtn_active_51.scaleX = 1.5;
        flagBtn_active_51.scaleY = 1.5;
        page11.add(flagBtn_active_51);

        // flagBtn_active_52
        const flagBtn_active_52 = this.add.image(1206.568115234375, 628.8994750976562, "HalloweenCatalog", "flagBtn");
        flagBtn_active_52.scaleX = 1.5;
        flagBtn_active_52.scaleY = 1.5;
        page11.add(flagBtn_active_52);

        // flagBtn_active_54
        const flagBtn_active_54 = this.add.image(315, 331, "HalloweenCatalog", "flagBtn");
        flagBtn_active_54.scaleX = 1.5;
        flagBtn_active_54.scaleY = 1.5;
        page11.add(flagBtn_active_54);

        // flagBtn_active_55
        const flagBtn_active_55 = this.add.image(314, 428, "HalloweenCatalog", "flagBtn");
        flagBtn_active_55.scaleX = 1.5;
        flagBtn_active_55.scaleY = 1.5;
        page11.add(flagBtn_active_55);

        // flagBtn_active_56
        const flagBtn_active_56 = this.add.image(317, 528, "HalloweenCatalog", "flagBtn");
        flagBtn_active_56.scaleX = 1.5;
        flagBtn_active_56.scaleY = 1.5;
        page11.add(flagBtn_active_56);

        // flagBtn_active_57
        const flagBtn_active_57 = this.add.image(315, 629, "HalloweenCatalog", "flagBtn");
        flagBtn_active_57.scaleX = 1.5;
        flagBtn_active_57.scaleY = 1.5;
        page11.add(flagBtn_active_57);

        // flagBtn_active_58
        const flagBtn_active_58 = this.add.image(315, 735, "HalloweenCatalog", "flagBtn");
        flagBtn_active_58.scaleX = 1.5;
        flagBtn_active_58.scaleY = 1.5;
        page11.add(flagBtn_active_58);

        // flagBtn_active_53
        const flagBtn_active_53 = this.add.image(1205.568115234375, 728.8994750976562, "HalloweenCatalog", "flagBtn");
        flagBtn_active_53.scaleX = 1.5;
        flagBtn_active_53.scaleY = 1.5;
        page11.add(flagBtn_active_53);

        // symbol_13
        const symbol_13 = this.add.image(760, 480, "HalloweenCatalog", "Symbol 13");
        symbol_13.scaleX = 1.5;
        symbol_13.scaleY = 1.5;
        page11.add(symbol_13);

        // shadow_png_1345
        const shadow_png_1345 = this.add.image(760, 480, "HalloweenCatalog", "shadow");
        shadow_png_1345.scaleX = 1.5;
        shadow_png_1345.scaleY = 1.5;
        page11.add(shadow_png_1345);

        // symbol_1637
        const symbol_1637 = this.add.image(281, 172, "HalloweenCatalog", "Symbol 1637");
        symbol_1637.scaleX = 1.5;
        symbol_1637.scaleY = 1.5;
        page11.add(symbol_1637);

        // text_2345
        const text_2345 = this.add.text(273, 169, "", {});
        text_2345.setOrigin(0.5, 0.5);
        text_2345.text = "Flags for your\nplayercard";
        text_2345.setStyle({ "fontFamily": "MYRIADPRO", "fontSize": "24px" });
        page11.add(text_2345);

        // nextPage_1345
        const nextPage_1345 = this.add.image(1291, 738, "HalloweenCatalog", "nextPage");
        nextPage_1345.scaleX = 1.5;
        nextPage_1345.scaleY = 1.5;
        page11.add(nextPage_1345);

        // backPage324
        const backPage324 = this.add.image(240, 738, "HalloweenCatalog", "backPage");
        backPage324.scaleX = 1.5;
        backPage324.scaleY = 1.5;
        page11.add(backPage324);

        // close_1123
        const close_1123 = this.add.image(1308, 153, "HalloweenCatalog", "close");
        close_1123.scaleX = 1.5;
        close_1123.scaleY = 1.5;
        page11.add(close_1123);

        // page10
        const page10 = this.add.container(0, 0);
        page10.visible = false;

        // p10
        const p10 = this.add.image(698, 120, "HalloweenCatalog", "Symbol 983");
        p10.scaleX = 1.4944271024159024;
        p10.scaleY = 1.5188868705268257;
        p10.setOrigin(0.5, 0);
        page10.add(p10);

        // shadow_png_443
        const shadow_png_443 = this.add.image(760, 480, "HalloweenCatalog", "shadow");
        shadow_png_443.scaleX = 1.5;
        shadow_png_443.scaleY = 1.5;
        page10.add(shadow_png_443);

        // nextPage_3564
        const nextPage_3564 = this.add.image(1289, 760, "HalloweenCatalog", "nextPage");
        nextPage_3564.scaleX = 1.5;
        nextPage_3564.scaleY = 1.5;
        page10.add(nextPage_3564);

        // backPage_1015
        const backPage_1015 = this.add.image(232, 759, "HalloweenCatalog", "backPage");
        backPage_1015.scaleX = 1.5;
        backPage_1015.scaleY = 1.5;
        page10.add(backPage_1015);

        // close_3534
        const close_3534 = this.add.image(1308, 153, "HalloweenCatalog", "close");
        close_3534.scaleX = 1.5;
        close_3534.scaleY = 1.5;
        page10.add(close_3534);

        // text_34565
        const text_34565 = this.add.text(955, 486, "", {});
        text_34565.setOrigin(0.5, 0.5);
        text_34565.text = "The Grim";
        text_34565.setStyle({ "color": "#000000ff" });
        page10.add(text_34565);

        // buy_30454
        const buy_30454 = this.add.image(951, 511, "HalloweenCatalog", "buy");
        page10.add(buy_30454);

        // buy_31555
        const buy_31555 = this.add.image(1185, 505, "HalloweenCatalog", "buy");
        page10.add(buy_31555);

        // text_3544
        const text_3544 = this.add.text(1189, 479, "", {});
        text_3544.setOrigin(0.5, 0.5);
        text_3544.text = "Spectacles";
        text_3544.setStyle({ "color": "#000000ff" });
        page10.add(text_3544);

        // buy_32wada
        const buy_32wada = this.add.image(954, 718, "HalloweenCatalog", "buy");
        page10.add(buy_32wada);

        // text_3656u
        const text_3656u = this.add.text(958, 693, "", {});
        text_3656u.setOrigin(0.5, 0.5);
        text_3656u.text = "Gravedigger Suit";
        text_3656u.setStyle({ "color": "#000000ff" });
        page10.add(text_3656u);

        // buy_333222
        const buy_333222 = this.add.image(1183, 717, "HalloweenCatalog", "buy");
        page10.add(buy_333222);

        // text_3756u
        const text_3756u = this.add.text(1187, 691, "", {});
        text_3756u.setOrigin(0.5, 0.5);
        text_3756u.text = "Gray Shovel";
        text_3756u.setStyle({ "color": "#000000ff" });
        page10.add(text_3756u);

        // page9
        const page9 = this.add.container(0, 0);
        page9.visible = false;

        // p9
        const p9 = this.add.image(765, 577, "HalloweenCatalog", "Symbol 857");
        p9.scaleX = 1.502;
        p9.scaleY = 1.5;
        page9.add(p9);

        // shadow_png_99
        const shadow_png_99 = this.add.image(760, 480, "HalloweenCatalog", "shadow");
        shadow_png_99.scaleX = 1.5;
        shadow_png_99.scaleY = 1.5;
        page9.add(shadow_png_99);

        // nextPage_9
        const nextPage_9 = this.add.image(1289, 759, "HalloweenCatalog", "nextPage");
        nextPage_9.scaleX = 1.5;
        nextPage_9.scaleY = 1.5;
        page9.add(nextPage_9);

        // backPage9
        const backPage9 = this.add.image(232, 759, "HalloweenCatalog", "backPage");
        backPage9.scaleX = 1.5;
        backPage9.scaleY = 1.5;
        page9.add(backPage9);

        // close_9
        const close_9 = this.add.image(1308, 153, "HalloweenCatalog", "close");
        close_9.scaleX = 1.5;
        close_9.scaleY = 1.5;
        page9.add(close_9);

        // text_2945
        const text_2945 = this.add.text(928, 352, "", {});
        text_2945.setOrigin(0.5, 0.5);
        text_2945.text = "The Enchantress";
        page9.add(text_2945);

        // buy_25g65
        const buy_25g65 = this.add.image(923, 379, "HalloweenCatalog", "buy");
        page9.add(buy_25g65);

        // buy_2655555
        const buy_2655555 = this.add.image(1131, 365, "HalloweenCatalog", "buy");
        page9.add(buy_2655555);

        // text_30erg
        const text_30erg = this.add.text(1136, 338, "", {});
        text_30erg.setOrigin(0.5, 0.5);
        text_30erg.text = "Candy Wing Warmers";
        page9.add(text_30erg);

        // buy_27qwd
        const buy_27qwd = this.add.image(924, 606, "HalloweenCatalog", "buy");
        page9.add(buy_27qwd);

        // text_31ewf
        const text_31ewf = this.add.text(929, 579, "", {});
        text_31ewf.setOrigin(0.5, 0.5);
        text_31ewf.text = "Enchantdress";
        page9.add(text_31ewf);

        // buy_28
        const buy_28 = this.add.image(932, 750, "HalloweenCatalog", "buy");
        page9.add(buy_28);

        // text_32t6j
        const text_32t6j = this.add.text(937, 723, "", {});
        text_32t6j.setOrigin(0.5, 0.5);
        text_32t6j.text = "Sparkly Amber Shoes";
        page9.add(text_32t6j);

        // buy_29rrgrg
        const buy_29rrgrg = this.add.image(1145, 695, "HalloweenCatalog", "buy");
        page9.add(buy_29rrgrg);

        // text_3365u5
        const text_3365u5 = this.add.text(1150, 668, "", {});
        text_3365u5.setOrigin(0.5, 0.5);
        text_3365u5.text = "Witches Broom";
        page9.add(text_3365u5);

        // page8
        const page8 = this.add.container(0, 0);
        page8.visible = false;

        // p8
        const p8 = this.add.image(185, 839, "HalloweenCatalog", "Symbol 820");
        p8.scaleX = 1.4235059355563722;
        p8.scaleY = 1.435386474187358;
        p8.setOrigin(0, 1);
        page8.add(p8);

        // text_2378956478
        const text_2378956478 = this.add.text(447, 293, "", {});
        text_2378956478.setOrigin(0.5, 0.5);
        text_2378956478.text = "Creepy Doll Makeup";
        text_2378956478.setStyle({ "align": "center", "fontSize": "13px" });
        page8.add(text_2378956478);

        // buy_1948g9dq
        const buy_1948g9dq = this.add.image(441, 320, "HalloweenCatalog", "buy");
        page8.add(buy_1948g9dq);

        // buy_205f5f58798
        const buy_205f5f58798 = this.add.image(892, 399, "HalloweenCatalog", "buy");
        page8.add(buy_205f5f58798);

        // text_24d4d44d
        const text_24d4d44d = this.add.text(898, 372, "", {});
        text_24d4d44d.setOrigin(0.5, 0.5);
        text_24d4d44d.text = "The Phantom";
        text_24d4d44d.setStyle({ "align": "center", "fontSize": "13px" });
        page8.add(text_24d4d44d);

        // buy_212135
        const buy_212135 = this.add.image(1121, 330, "HalloweenCatalog", "buy");
        page8.add(buy_212135);

        // text_25456456
        const text_25456456 = this.add.text(1127, 303, "", {});
        text_25456456.setOrigin(0.5, 0.5);
        text_25456456.text = "Skull Mask";
        text_25456456.setStyle({ "align": "center", "fontSize": "13px" });
        page8.add(text_25456456);

        // buy_22u8lu
        const buy_22u8lu = this.add.image(1066, 662, "HalloweenCatalog", "buy");
        page8.add(buy_22u8lu);

        // text_26i9i
        const text_26i9i = this.add.text(1072, 635, "", {});
        text_26i9i.setOrigin(0.5, 0.5);
        text_26i9i.text = "The Mystery";
        text_26i9i.setStyle({ "align": "center", "fontSize": "13px" });
        page8.add(text_26i9i);

        // buy_23lihl
        const buy_23lihl = this.add.image(572, 517, "HalloweenCatalog", "buy");
        page8.add(buy_23lihl);

        // text_27u65
        const text_27u65 = this.add.text(578, 490, "", {});
        text_27u65.setOrigin(0.5, 0.5);
        text_27u65.text = "Count Mask";
        text_27u65.setStyle({ "align": "center", "fontSize": "13px" });
        page8.add(text_27u65);

        // buy_24u65
        const buy_24u65 = this.add.image(362, 668, "HalloweenCatalog", "buy");
        page8.add(buy_24u65);

        // text_28q
        const text_28q = this.add.text(368, 641, "", {});
        text_28q.setOrigin(0.5, 0.5);
        text_28q.text = "Countess Makeup";
        text_28q.setStyle({ "align": "center", "fontSize": "13px" });
        page8.add(text_28q);

        // shadow_png_8
        const shadow_png_8 = this.add.image(760, 480, "HalloweenCatalog", "shadow");
        shadow_png_8.scaleX = 1.5;
        shadow_png_8.scaleY = 1.5;
        page8.add(shadow_png_8);

        // nextPage_8
        const nextPage_8 = this.add.image(1288, 754, "HalloweenCatalog", "nextPage");
        nextPage_8.scaleX = 1.5;
        nextPage_8.scaleY = 1.5;
        page8.add(nextPage_8);

        // backPage88
        const backPage88 = this.add.image(232, 759, "HalloweenCatalog", "backPage");
        backPage88.scaleX = 1.5;
        backPage88.scaleY = 1.5;
        page8.add(backPage88);

        // close_8
        const close_8 = this.add.image(1308, 153, "HalloweenCatalog", "close");
        close_8.scaleX = 1.5;
        close_8.scaleY = 1.5;
        page8.add(close_8);

        // page7
        const page7 = this.add.container(0, 0);
        page7.visible = false;

        // p7
        const p7 = this.add.image(751, 488, "HalloweenCatalog", "Symbol 731");
        p7.scaleX = 1.4884518288130728;
        p7.scaleY = 1.5176249240285442;
        page7.add(p7);

        // shadow_png_7
        const shadow_png_7 = this.add.image(760, 480, "HalloweenCatalog", "shadow");
        shadow_png_7.scaleX = 1.5;
        shadow_png_7.scaleY = 1.5;
        page7.add(shadow_png_7);

        // symbol_615
        const symbol_615 = this.add.image(323, 160, "HalloweenCatalog", "Symbol 615");
        symbol_615.scaleX = 1.5;
        symbol_615.scaleY = 1.5;
        page7.add(symbol_615);

        // text_esfsuifysiue
        const text_esfsuifysiue = this.add.text(316, 157, "", {});
        text_esfsuifysiue.setOrigin(0.5, 0.5);
        text_esfsuifysiue.text = "Custom Items!";
        text_esfsuifysiue.setStyle({ "color": "#000000ff", "fontFamily": "MYRIADPRO", "fontSize": "32px" });
        page7.add(text_esfsuifysiue);

        // nextPage_7
        const nextPage_7 = this.add.image(1288, 754, "HalloweenCatalog", "nextPage");
        nextPage_7.scaleX = 1.5;
        nextPage_7.scaleY = 1.5;
        page7.add(nextPage_7);

        // backPage7
        const backPage7 = this.add.image(232, 759, "HalloweenCatalog", "backPage");
        backPage7.scaleX = 1.5;
        backPage7.scaleY = 1.5;
        page7.add(backPage7);

        // close_7
        const close_7 = this.add.image(1308, 153, "HalloweenCatalog", "close");
        close_7.scaleX = 1.5;
        close_7.scaleY = 1.5;
        page7.add(close_7);

        // text_20
        const text_20 = this.add.text(1068, 304, "", {});
        text_20.setOrigin(0.5, 0.5);
        text_20.text = "Blue pumpkin head";
        page7.add(text_20);

        // buy_16
        const buy_16 = this.add.image(1063, 330, "HalloweenCatalog", "buy");
        page7.add(buy_16);

        // buy_17
        const buy_17 = this.add.image(1066, 564, "HalloweenCatalog", "buy");
        page7.add(buy_17);

        // text_21
        const text_21 = this.add.text(1071, 538, "", {});
        text_21.setOrigin(0.5, 0.5);
        text_21.text = "Pumpkin headband";
        page7.add(text_21);

        // buy_18
        const buy_18 = this.add.image(1048, 727, "HalloweenCatalog", "buy");
        page7.add(buy_18);

        // text_22
        const text_22 = this.add.text(1053, 700, "", {});
        text_22.setOrigin(0.5, 0.5);
        text_22.text = "Chained pumpkin";
        page7.add(text_22);

        // page6
        const page6 = this.add.container(0, 0);
        page6.visible = false;

        // p6
        const p6 = this.add.image(640, 400, "HalloweenCatalog", "Symbol 699");
        p6.scaleX = 1.52;
        p6.scaleY = 1.508;
        page6.add(p6);

        // shadow_png_6
        const shadow_png_6 = this.add.image(760, 480, "HalloweenCatalog", "shadow");
        shadow_png_6.scaleX = 1.5;
        shadow_png_6.scaleY = 1.5;
        page6.add(shadow_png_6);

        // nextPage_6
        const nextPage_6 = this.add.image(1288, 754, "HalloweenCatalog", "nextPage");
        nextPage_6.scaleX = 1.5;
        nextPage_6.scaleY = 1.5;
        page6.add(nextPage_6);

        // backPage6
        const backPage6 = this.add.image(232, 759, "HalloweenCatalog", "backPage");
        backPage6.scaleX = 1.5;
        backPage6.scaleY = 1.5;
        page6.add(backPage6);

        // close_6
        const close_6 = this.add.image(1308, 153, "HalloweenCatalog", "close");
        close_6.scaleX = 1.5;
        close_6.scaleY = 1.5;
        page6.add(close_6);

        // text_15
        const text_15 = this.add.text(936, 728, "", {});
        text_15.setOrigin(0.5, 0.5);
        text_15.text = "Happy Punk O'Ween";
        page6.add(text_15);

        // text_16
        const text_16 = this.add.text(1157, 636, "", {});
        text_16.setOrigin(0.5, 0.5);
        text_16.text = "Halloween Tee";
        page6.add(text_16);

        // text_17
        const text_17 = this.add.text(944, 484, "", {});
        text_17.setOrigin(0.5, 0.5);
        text_17.text = "Jagged Purple\necklace";
        text_17.setStyle({ "align": "center" });
        page6.add(text_17);

        // text_18
        const text_18 = this.add.text(1148, 385, "", {});
        text_18.setOrigin(0.5, 0.5);
        text_18.text = "The Shadow Spike";
        text_18.setStyle({ "align": "center" });
        page6.add(text_18);

        // text_19
        const text_19 = this.add.text(941, 342, "", {});
        text_19.setOrigin(0.5, 0.5);
        text_19.text = "The Spider Poof";
        text_19.setStyle({ "align": "center" });
        page6.add(text_19);

        // buy_11
        const buy_11 = this.add.image(1152, 671, "HalloweenCatalog", "buy");
        buy_11.scaleX = 1.52;
        buy_11.scaleY = 1.52;
        page6.add(buy_11);

        // buy_12
        const buy_12 = this.add.image(1141, 420, "HalloweenCatalog", "buy");
        buy_12.scaleX = 1.52;
        buy_12.scaleY = 1.52;
        page6.add(buy_12);

        // buy_13
        const buy_13 = this.add.image(934, 374, "HalloweenCatalog", "buy");
        buy_13.scaleX = 1.52;
        buy_13.scaleY = 1.52;
        page6.add(buy_13);

        // buy_14
        const buy_14 = this.add.image(936, 526, "HalloweenCatalog", "buy");
        buy_14.scaleX = 1.52;
        buy_14.scaleY = 1.52;
        page6.add(buy_14);

        // buy_15
        const buy_15 = this.add.image(929, 768, "HalloweenCatalog", "buy");
        buy_15.scaleX = 1.52;
        buy_15.scaleY = 1.52;
        page6.add(buy_15);

        // page5
        const page5 = this.add.container(0, 0);
        page5.visible = false;

        // p5
        const p5 = this.add.image(760, 329, "HalloweenCatalog", "Symbol 610");
        p5.scaleX = 1.5;
        p5.scaleY = 1.431;
        page5.add(p5);

        // symbol_611
        const symbol_611 = this.add.image(311, 177, "HalloweenCatalog", "Symbol 611");
        symbol_611.scaleX = 1.5;
        symbol_611.scaleY = 1.5;
        page5.add(symbol_611);

        // shadow_png_5
        const shadow_png_5 = this.add.image(760, 480, "HalloweenCatalog", "shadow");
        shadow_png_5.scaleX = 1.5;
        shadow_png_5.scaleY = 1.5;
        page5.add(shadow_png_5);

        // text_2uwudwuai
        const text_2uwudwuai = this.add.text(304, 174, "", {});
        text_2uwudwuai.setOrigin(0.5, 0.5);
        text_2uwudwuai.text = "Custom Items!";
        text_2uwudwuai.setStyle({ "color": "#000000ff", "fontFamily": "MYRIADPRO", "fontSize": "32px" });
        page5.add(text_2uwudwuai);

        // nextPage_5
        const nextPage_5 = this.add.image(1317, 754, "HalloweenCatalog", "nextPage");
        nextPage_5.scaleX = 1.5;
        nextPage_5.scaleY = 1.5;
        page5.add(nextPage_5);

        // backPage
        const backPage = this.add.image(203, 755, "HalloweenCatalog", "backPage");
        backPage.scaleX = 1.5;
        backPage.scaleY = 1.5;
        page5.add(backPage);

        // close_5
        const close_5 = this.add.image(1308, 153, "HalloweenCatalog", "close");
        close_5.scaleX = 1.5;
        close_5.scaleY = 1.5;
        page5.add(close_5);

        // buy_7
        const buy_7 = this.add.image(485, 441, "HalloweenCatalog", "buy");
        buy_7.scaleX = 1.5;
        buy_7.scaleY = 1.5;
        page5.add(buy_7);

        // text_11
        const text_11 = this.add.text(492, 406, "", {});
        text_11.setOrigin(0.5, 0.5);
        text_11.text = "Green Ghost Costume";
        page5.add(text_11);

        // text_12
        const text_12 = this.add.text(1050, 406, "", {});
        text_12.setOrigin(0.5, 0.5);
        text_12.text = "Scary Penguin mask";
        page5.add(text_12);

        // buy_8
        const buy_8 = this.add.image(1043, 441, "HalloweenCatalog", "buy");
        buy_8.scaleX = 1.5;
        buy_8.scaleY = 1.5;
        page5.add(buy_8);

        // text_13
        const text_13 = this.add.text(492, 669, "", {});
        text_13.setOrigin(0.5, 0.5);
        text_13.text = "Purple skeleton costume";
        page5.add(text_13);

        // buy_9
        const buy_9 = this.add.image(485, 704, "HalloweenCatalog", "buy");
        buy_9.scaleX = 1.5;
        buy_9.scaleY = 1.5;
        page5.add(buy_9);

        // buy_10
        const buy_10 = this.add.image(1043, 704, "HalloweenCatalog", "buy");
        buy_10.scaleX = 1.5;
        buy_10.scaleY = 1.5;
        page5.add(buy_10);

        // text_14
        const text_14 = this.add.text(1050, 658, "", {});
        text_14.setOrigin(0.5, 0.5);
        text_14.text = "Vintage snowman\nhead";
        text_14.setStyle({ "align": "center" });
        page5.add(text_14);

        // page4
        const page4 = this.add.container(0, 0);
        page4.visible = false;

        // p4
        const p4 = this.add.image(760, 480, "HalloweenCatalog", "Symbol 11");
        p4.scaleX = 1.493;
        p4.scaleY = 1.446;
        page4.add(p4);

        // symbol_239_png
        const symbol_239_png = this.add.image(323, 171, "HalloweenCatalog", "Symbol 558");
        symbol_239_png.scaleX = 1.5;
        symbol_239_png.scaleY = 1.5;
        page4.add(symbol_239_png);

        // symbol_504
        const symbol_504 = this.add.image(290, 855, "HalloweenCatalog", "Symbol 504");
        symbol_504.scaleX = 1.493;
        symbol_504.scaleY = 1.446;
        page4.add(symbol_504);

        // penguin0001
        const penguin0001 = this.add.image(925, 502, "HalloweenCatalog", "penguin0001");
        penguin0001.scaleX = 1.493;
        penguin0001.scaleY = 1.446;
        page4.add(penguin0001);

        // shadow_png_4
        const shadow_png_4 = this.add.image(760, 480, "HalloweenCatalog", "shadow");
        shadow_png_4.scaleX = 1.5;
        shadow_png_4.scaleY = 1.5;
        page4.add(shadow_png_4);

        // text_2dawdawdatt
        const text_2dawdawdatt = this.add.text(316, 166, "", {});
        text_2dawdawdatt.setOrigin(0.5, 0.5);
        text_2dawdawdatt.text = "Items for everyone";
        text_2dawdawdatt.setStyle({ "fontFamily": "MYRIADPRO", "fontSize": "25px" });
        page4.add(text_2dawdawdatt);

        // nextPage_4
        const nextPage_4 = this.add.image(1288, 758, "HalloweenCatalog", "nextPage");
        nextPage_4.scaleX = 1.5;
        nextPage_4.scaleY = 1.5;
        page4.add(nextPage_4);

        // backPage4
        const backPage4 = this.add.image(234, 757, "HalloweenCatalog", "backPage");
        backPage4.scaleX = 1.5;
        backPage4.scaleY = 1.5;
        page4.add(backPage4);

        // close_4
        const close_4 = this.add.image(1308, 153, "HalloweenCatalog", "close");
        close_4.scaleX = 1.5;
        close_4.scaleY = 1.5;
        page4.add(close_4);

        // symbol_10
        const symbol_10 = this.add.image(960, 271, "HalloweenCatalog", "Symbol 10");
        symbol_10.scaleX = 1.493;
        symbol_10.scaleY = 1.446;
        page4.add(symbol_10);

        // symbol_12
        const symbol_12 = this.add.image(1251, 614, "HalloweenCatalog", "Symbol 12");
        symbol_12.scaleX = 1.493;
        symbol_12.scaleY = 1.446;
        page4.add(symbol_12);

        // symbol_15
        const symbol_15 = this.add.image(1108, 617, "HalloweenCatalog", "Symbol 15");
        symbol_15.scaleX = 1.493;
        symbol_15.scaleY = 1.446;
        page4.add(symbol_15);

        // symbol_515
        const symbol_515 = this.add.image(1108, 452, "HalloweenCatalog", "Symbol 515");
        symbol_515.scaleX = 1.493;
        symbol_515.scaleY = 1.446;
        page4.add(symbol_515);

        // symbol_517
        const symbol_517 = this.add.image(1251, 442, "HalloweenCatalog", "Symbol 517");
        symbol_517.scaleX = 1.493;
        symbol_517.scaleY = 1.446;
        page4.add(symbol_517);

        // symbol_520
        const symbol_520 = this.add.image(1251, 271, "HalloweenCatalog", "Symbol 520");
        symbol_520.scaleX = 1.493;
        symbol_520.scaleY = 1.446;
        page4.add(symbol_520);

        // symbol_522
        const symbol_522 = this.add.image(1108, 271, "HalloweenCatalog", "Symbol 522");
        symbol_522.scaleX = 1.493;
        symbol_522.scaleY = 1.446;
        page4.add(symbol_522);

        // buy
        const buy = this.add.image(955, 356, "HalloweenCatalog", "buy");
        page4.add(buy);

        // buy_1
        const buy_1 = this.add.image(1104, 356, "HalloweenCatalog", "buy");
        page4.add(buy_1);

        // buy_2
        const buy_2 = this.add.image(1247, 356, "HalloweenCatalog", "buy");
        page4.add(buy_2);

        // text_3
        const text_3 = this.add.text(959, 321, "", {});
        text_3.setOrigin(0.5, 0.5);
        text_3.text = "Star\nT-Shirt";
        text_3.setStyle({ "align": "center" });
        page4.add(text_3);

        // text_4
        const text_4 = this.add.text(1109, 321, "", {});
        text_4.setOrigin(0.5, 0.5);
        text_4.text = "Green\nBaseball cap";
        text_4.setStyle({ "align": "center" });
        page4.add(text_4);

        // text_5
        const text_5 = this.add.text(1251, 321, "", {});
        text_5.setOrigin(0.5, 0.5);
        text_5.text = "Baseball Glove";
        text_5.setStyle({ "align": "center" });
        page4.add(text_5);

        // text_6
        const text_6 = this.add.text(903, 646, "", {});
        text_6.setOrigin(0.5, 0.5);
        text_6.text = "Run the cursor through the Items\nto see how they look on your penguin";
        text_6.setStyle({ "align": "center", "fontSize": "12px" });
        page4.add(text_6);

        // text_7
        const text_7 = this.add.text(1109, 504, "", {});
        text_7.setOrigin(0.5, 0.5);
        text_7.text = "Red scarf";
        text_7.setStyle({ "align": "center" });
        page4.add(text_7);

        // text_8
        const text_8 = this.add.text(1251, 504, "", {});
        text_8.setOrigin(0.5, 0.5);
        text_8.text = "Pink purse";
        text_8.setStyle({ "align": "center" });
        page4.add(text_8);

        // buy_3
        const buy_3 = this.add.image(1104, 539, "HalloweenCatalog", "buy");
        page4.add(buy_3);

        // buy_4
        const buy_4 = this.add.image(1247, 539, "HalloweenCatalog", "buy");
        page4.add(buy_4);

        // text_9
        const text_9 = this.add.text(1251, 680, "", {});
        text_9.setOrigin(0.5, 0.5);
        text_9.text = "Bufferfly\nT-Shirt";
        text_9.setStyle({ "align": "center" });
        page4.add(text_9);

        // buy_5
        const buy_5 = this.add.image(1247, 715, "HalloweenCatalog", "buy");
        page4.add(buy_5);

        // text_10
        const text_10 = this.add.text(1109, 680, "", {});
        text_10.setOrigin(0.5, 0.5);
        text_10.text = "Golden hairstyle\nfor girls";
        text_10.setStyle({ "align": "center" });
        page4.add(text_10);

        // buy_6
        const buy_6 = this.add.image(1104, 715, "HalloweenCatalog", "buy");
        page4.add(buy_6);

        // page3
        const page3 = this.add.container(0, 0);
        page3.visible = false;

        // p3
        const p3 = this.add.image(760, 480, "HalloweenCatalog", "Symbol 7");
        p3.scaleX = 1.4238;
        p3.scaleY = 1.4238;
        page3.add(p3);

        // symbol_2323456789
        const symbol_2323456789 = this.add.image(336, 165, "HalloweenCatalog", "Symbol 491");
        symbol_2323456789.scaleX = 1.5;
        symbol_2323456789.scaleY = 1.5;
        page3.add(symbol_2323456789);

        // shadow_png_13
        const shadow_png_13 = this.add.image(760, 480, "HalloweenCatalog", "shadow");
        shadow_png_13.scaleX = 1.4238;
        shadow_png_13.scaleY = 1.4238;
        page3.add(shadow_png_13);

        // text_2798789798
        const text_2798789798 = this.add.text(327, 163, "", {});
        text_2798789798.setOrigin(0.5, 0.5);
        text_2798789798.text = "Backgrounds for your\nplayercard";
        text_2798789798.setStyle({ "fontFamily": "MYRIADPRO", "fontSize": "26px" });
        page3.add(text_2798789798);

        // nextPage_13
        const nextPage_13 = this.add.image(1288, 754, "HalloweenCatalog", "nextPage");
        nextPage_13.scaleX = 1.5;
        nextPage_13.scaleY = 1.5;
        page3.add(nextPage_13);

        // backPage33
        const backPage33 = this.add.image(232, 759, "HalloweenCatalog", "backPage");
        backPage33.scaleX = 1.5;
        backPage33.scaleY = 1.5;
        page3.add(backPage33);

        // close_33
        const close_33 = this.add.image(1308, 153, "HalloweenCatalog", "close");
        close_33.scaleX = 1.5;
        close_33.scaleY = 1.5;
        page3.add(close_33);

        // symbol_409
        const symbol_409 = this.add.image(486, 500, "HalloweenCatalog", "Symbol 409");
        symbol_409.scaleX = 1.4238;
        symbol_409.scaleY = 1.4238;
        page3.add(symbol_409);

        // symbol_487
        const symbol_487 = this.add.image(1023, 500, "HalloweenCatalog", "Symbol 487");
        symbol_487.scaleX = 1.4238;
        symbol_487.scaleY = 1.4238;
        page3.add(symbol_487);

        // page2
        const page2 = this.add.container(0, 0);
        page2.visible = false;

        // p2
        const p2 = this.add.image(760, 480, "HalloweenCatalog", "Symbol 178");
        p2.scaleX = 1.5;
        p2.scaleY = 1.5;
        page2.add(p2);

        // symbol_235555_png
        const symbol_235555_png = this.add.image(323, 162, "HalloweenCatalog", "Symbol 239");
        symbol_235555_png.scaleX = 1.5;
        symbol_235555_png.scaleY = 1.5;
        page2.add(symbol_235555_png);

        // color0001_png
        const color0001_png = this.add.image(1042, 525, "HalloweenCatalog", "color0001");
        color0001_png.scaleX = 1.5;
        color0001_png.scaleY = 1.5;
        page2.add(color0001_png);

        // shadow_png_12222
        const shadow_png_12222 = this.add.image(760, 480, "HalloweenCatalog", "shadow");
        shadow_png_12222.scaleX = 1.5;
        shadow_png_12222.scaleY = 1.5;
        page2.add(shadow_png_12222);

        // aqua
        const aqua = this.add.image(567, 524, "HalloweenCatalog", "aqua");
        aqua.scaleX = 1.5;
        aqua.scaleY = 1.5;
        page2.add(aqua);

        // black
        const black = this.add.image(367, 724, "HalloweenCatalog", "black");
        black.scaleX = 1.5;
        black.scaleY = 1.5;
        page2.add(black);

        // blue
        const blue = this.add.image(367, 324, "HalloweenCatalog", "blue");
        blue.scaleX = 1.5;
        blue.scaleY = 1.5;
        page2.add(blue);

        // brown
        const brown = this.add.image(467, 424, "HalloweenCatalog", "brown");
        brown.scaleX = 1.5;
        brown.scaleY = 1.5;
        page2.add(brown);

        // cyan
        const cyan = this.add.image(367, 524, "HalloweenCatalog", "cyan");
        cyan.scaleX = 1.5;
        cyan.scaleY = 1.5;
        page2.add(cyan);

        // darkgreen
        const darkgreen = this.add.image(467, 724, "HalloweenCatalog", "darkgreen");
        darkgreen.scaleX = 1.5;
        darkgreen.scaleY = 1.5;
        page2.add(darkgreen);

        // green
        const green = this.add.image(467, 324, "HalloweenCatalog", "green");
        green.scaleX = 1.5;
        green.scaleY = 1.5;
        page2.add(green);

        // lime
        const lime = this.add.image(467, 524, "HalloweenCatalog", "lime");
        lime.scaleX = 1.5;
        lime.scaleY = 1.5;
        page2.add(lime);

        // magenta
        const magenta = this.add.image(567, 324, "HalloweenCatalog", "magenta");
        magenta.scaleX = 1.5;
        magenta.scaleY = 1.5;
        page2.add(magenta);

        // orange
        const orange = this.add.image(467, 624, "HalloweenCatalog", "orange");
        orange.scaleX = 1.5;
        orange.scaleY = 1.5;
        page2.add(orange);

        // pink
        const pink = this.add.image(567, 424, "HalloweenCatalog", "pink");
        pink.scaleX = 1.5;
        pink.scaleY = 1.5;
        page2.add(pink);

        // purple
        const purple = this.add.image(367, 424, "HalloweenCatalog", "purple");
        purple.scaleX = 1.5;
        purple.scaleY = 1.5;
        page2.add(purple);

        // red
        const red = this.add.image(367, 624, "HalloweenCatalog", "red");
        red.scaleX = 1.5;
        red.scaleY = 1.5;
        page2.add(red);

        // white
        const white = this.add.image(567, 724, "HalloweenCatalog", "white");
        white.scaleX = 1.5;
        white.scaleY = 1.5;
        page2.add(white);

        // yellow
        const yellow = this.add.image(567, 624, "HalloweenCatalog", "yellow");
        yellow.scaleX = 1.5;
        yellow.scaleY = 1.5;
        page2.add(yellow);

        // text_24646645
        const text_24646645 = this.add.text(316, 157, "", {});
        text_24646645.setOrigin(0.5, 0.5);
        text_24646645.text = "Colors\n     for everyone!";
        text_24646645.setStyle({ "fontFamily": "MYRIADPRO", "fontSize": "32px" });
        page2.add(text_24646645);

        // nextPage_19494949977
        const nextPage_19494949977 = this.add.image(1288, 754, "HalloweenCatalog", "nextPage");
        nextPage_19494949977.scaleX = 1.5;
        nextPage_19494949977.scaleY = 1.5;
        page2.add(nextPage_19494949977);

        // backPage489489984894
        const backPage489489984894 = this.add.image(232, 759, "HalloweenCatalog", "backPage");
        backPage489489984894.scaleX = 1.5;
        backPage489489984894.scaleY = 1.5;
        page2.add(backPage489489984894);

        // close_1
        const close_1 = this.add.image(1308, 153, "HalloweenCatalog", "close");
        close_1.scaleX = 1.5;
        close_1.scaleY = 1.5;
        page2.add(close_1);

        // page1
        const page1 = this.add.container(0, 0);
        page1.visible = false;

        // p1
        const p1 = this.add.image(760, 480, "HalloweenCatalog", "Symbol 5");
        p1.scaleX = 1.5;
        p1.scaleY = 1.5;
        page1.add(p1);

        // symbol_3120_png
        const symbol_3120_png = this.add.image(751, 721, "HalloweenCatalog", "Symbol 30");
        symbol_3120_png.scaleX = 1.4;
        page1.add(symbol_3120_png);

        // symbol_66100
        const symbol_66100 = this.add.image(712, 572, "HalloweenCatalog", "Symbol 661");
        symbol_66100.scaleX = 1.5;
        symbol_66100.scaleY = 1.5;
        page1.add(symbol_66100);

        // shadow_png
        const shadow_png = this.add.image(456, 468, "HalloweenCatalog", "shadow");
        shadow_png.scaleX = 1.5;
        shadow_png.scaleY = 1.5;
        page1.add(shadow_png);

        // text_1uioqueioqueoqp
        const text_1uioqueioqueoqp = this.add.text(753, 214, "", {});
        text_1uioqueioqueoqp.setOrigin(0.5, 0.5);
        text_1uioqueioqueoqp.text = "UPNewLands Style\n";
        text_1uioqueioqueoqp.setStyle({ "fontFamily": "Asterisk", "fontSize": "64px", "fontStyle": "bold italic" });
        page1.add(text_1uioqueioqueoqp);

        // textrgdrgdrgd
        const textrgdrgdrgd = this.add.text(814, 262, "", {});
        textrgdrgdrgd.setOrigin(0.5, 0.5);
        textrgdrgdrgd.text = "Halloween 2022 Edition\n";
        textrgdrgdrgd.setStyle({ "fontFamily": "Asterisk", "fontSize": "32px", "fontStyle": "italic" });
        page1.add(textrgdrgdrgd);

        // nextPage231
        const nextPage231 = this.add.image(1023, 771, "HalloweenCatalog", "nextPage");
        nextPage231.scaleX = 1.5;
        nextPage231.scaleY = 1.5;
        page1.add(nextPage231);

        // close34243
        const close34243 = this.add.image(1041, 143, "HalloweenCatalog", "close");
        close34243.scaleX = 1.5;
        close34243.scaleY = 1.5;
        page1.add(close34243);

        // buttons
        const buttons = this.add.container(0, 0);
        buttons.visible = false;

        // coins
        const coins = this.add.text(1130, 790, "", {});
        coins.setOrigin(1, 0);
        coins.text = "YOUR COINS:";
        coins.setStyle({ "align": "right", "fixedWidth":600,"fontFamily": "CCComiccrazy", "fontSize": "32px", "stroke": "#000", "strokeThickness":9});
        buttons.add(coins);

        // lists
        const pages = [page1, page2, page3, page4, page5, page6, page7, page8, page9, page10, page11, page12];

        // block (components)
        new Interactive(block);

        // close12 (components)
        const close12Button = new Button(close12);
        close12Button.spriteName = "close";
        close12Button.callback = () => this.close();

        // backPage_12 (components)
        const backPage_12Button = new Button(backPage_12);
        backPage_12Button.spriteName = "backPage";
        backPage_12Button.callback = () => this.prevPage();

        // flagBtn_active (components)
        const flagBtn_activeButton = new Button(flagBtn_active);
        flagBtn_activeButton.spriteName = "flagBtn";
        flagBtn_activeButton.callback = () => this.scene.buy(1);

        // flagBtn_active_1 (components)
        const flagBtn_active_1Button = new Button(flagBtn_active_1);
        flagBtn_active_1Button.spriteName = "flagBtn";
        flagBtn_active_1Button.callback = () => this.scene.buy(1);

        // flagBtn_active_2 (components)
        const flagBtn_active_2Button = new Button(flagBtn_active_2);
        flagBtn_active_2Button.spriteName = "flagBtn";
        flagBtn_active_2Button.callback = () => this.scene.buy(1);

        // flagBtn_active_3 (components)
        const flagBtn_active_3Button = new Button(flagBtn_active_3);
        flagBtn_active_3Button.spriteName = "flagBtn";
        flagBtn_active_3Button.callback = () => this.scene.buy(1);

        // flagBtn_active_4 (components)
        const flagBtn_active_4Button = new Button(flagBtn_active_4);
        flagBtn_active_4Button.spriteName = "flagBtn";
        flagBtn_active_4Button.callback = () => this.scene.buy(1);

        // flagBtn_active_5 (components)
        const flagBtn_active_5Button = new Button(flagBtn_active_5);
        flagBtn_active_5Button.spriteName = "flagBtn";
        flagBtn_active_5Button.callback = () => this.scene.buy(1);

        // flagBtn_active_6 (components)
        const flagBtn_active_6Button = new Button(flagBtn_active_6);
        flagBtn_active_6Button.spriteName = "flagBtn";
        flagBtn_active_6Button.callback = () => this.scene.buy(1);

        // flagBtn_active_7 (components)
        const flagBtn_active_7Button = new Button(flagBtn_active_7);
        flagBtn_active_7Button.spriteName = "flagBtn";
        flagBtn_active_7Button.callback = () => this.scene.buy(1);

        // flagBtn_active_8 (components)
        const flagBtn_active_8Button = new Button(flagBtn_active_8);
        flagBtn_active_8Button.spriteName = "flagBtn";
        flagBtn_active_8Button.callback = () => this.scene.buy(1);

        // flagBtn_active_9 (components)
        const flagBtn_active_9Button = new Button(flagBtn_active_9);
        flagBtn_active_9Button.spriteName = "flagBtn";
        flagBtn_active_9Button.callback = () => this.scene.buy(1);

        // flagBtn_active_10 (components)
        const flagBtn_active_10Button = new Button(flagBtn_active_10);
        flagBtn_active_10Button.spriteName = "flagBtn";
        flagBtn_active_10Button.callback = () => this.scene.buy(1);

        // flagBtn_active_11 (components)
        const flagBtn_active_11Button = new Button(flagBtn_active_11);
        flagBtn_active_11Button.spriteName = "flagBtn";
        flagBtn_active_11Button.callback = () => this.scene.buy(1);

        // flagBtn_active_12 (components)
        const flagBtn_active_12Button = new Button(flagBtn_active_12);
        flagBtn_active_12Button.spriteName = "flagBtn";
        flagBtn_active_12Button.callback = () => this.scene.buy(1);

        // flagBtn_active_13 (components)
        const flagBtn_active_13Button = new Button(flagBtn_active_13);
        flagBtn_active_13Button.spriteName = "flagBtn";
        flagBtn_active_13Button.callback = () => this.buy(500);

        // flagBtn_active_14 (components)
        const flagBtn_active_14Button = new Button(flagBtn_active_14);
        flagBtn_active_14Button.spriteName = "flagBtn";
        flagBtn_active_14Button.callback = () => this.scene.buy(1);

        // flagBtn_active_15 (components)
        const flagBtn_active_15Button = new Button(flagBtn_active_15);
        flagBtn_active_15Button.spriteName = "flagBtn";
        flagBtn_active_15Button.callback = () => this.scene.buy(1);

        // flagBtn_active_16 (components)
        const flagBtn_active_16Button = new Button(flagBtn_active_16);
        flagBtn_active_16Button.spriteName = "flagBtn";
        flagBtn_active_16Button.callback = () => this.scene.buy(1);

        // flagBtn_active_17 (components)
        const flagBtn_active_17Button = new Button(flagBtn_active_17);
        flagBtn_active_17Button.spriteName = "flagBtn";
        flagBtn_active_17Button.callback = () => this.scene.buy(1);

        // flagBtn_active_18 (components)
        const flagBtn_active_18Button = new Button(flagBtn_active_18);
        flagBtn_active_18Button.spriteName = "flagBtn";
        flagBtn_active_18Button.callback = () => this.scene.buy(1);

        // flagBtn_active_20 (components)
        const flagBtn_active_20Button = new Button(flagBtn_active_20);
        flagBtn_active_20Button.spriteName = "flagBtn";
        flagBtn_active_20Button.callback = () => this.scene.buy(1);

        // flagBtn_active_21 (components)
        const flagBtn_active_21Button = new Button(flagBtn_active_21);
        flagBtn_active_21Button.spriteName = "flagBtn";
        flagBtn_active_21Button.callback = () => this.scene.buy(1);

        // flagBtn_active_22 (components)
        const flagBtn_active_22Button = new Button(flagBtn_active_22);
        flagBtn_active_22Button.spriteName = "flagBtn";
        flagBtn_active_22Button.callback = () => this.scene.buy(1);

        // flagBtn_active_23 (components)
        const flagBtn_active_23Button = new Button(flagBtn_active_23);
        flagBtn_active_23Button.spriteName = "flagBtn";
        flagBtn_active_23Button.callback = () => this.scene.buy(1);

        // flagBtn_active_24 (components)
        const flagBtn_active_24Button = new Button(flagBtn_active_24);
        flagBtn_active_24Button.spriteName = "flagBtn";
        flagBtn_active_24Button.callback = () => this.scene.buy(1);

        // flagBtn_active_25 (components)
        const flagBtn_active_25Button = new Button(flagBtn_active_25);
        flagBtn_active_25Button.spriteName = "flagBtn";
        flagBtn_active_25Button.callback = () => this.scene.buy(1);

        // flagBtn_active_26 (components)
        const flagBtn_active_26Button = new Button(flagBtn_active_26);
        flagBtn_active_26Button.spriteName = "flagBtn";
        flagBtn_active_26Button.callback = () => this.scene.buy(1);

        // flagBtn_active_27 (components)
        const flagBtn_active_27Button = new Button(flagBtn_active_27);
        flagBtn_active_27Button.spriteName = "flagBtn";
        flagBtn_active_27Button.callback = () => this.scene.buy(1);

        // flagBtn_active_28 (components)
        const flagBtn_active_28Button = new Button(flagBtn_active_28);
        flagBtn_active_28Button.spriteName = "flagBtn";
        flagBtn_active_28Button.callback = () => this.scene.buy(1);

        // flagBtn_active_29 (components)
        const flagBtn_active_29Button = new Button(flagBtn_active_29);
        flagBtn_active_29Button.spriteName = "flagBtn";
        flagBtn_active_29Button.callback = () => this.scene.buy(1);

        // flagBtn_active_30 (components)
        const flagBtn_active_30Button = new Button(flagBtn_active_30);
        flagBtn_active_30Button.spriteName = "flagBtn";
        flagBtn_active_30Button.callback = () => this.scene.buy(1);

        // flagBtn_active_31 (components)
        const flagBtn_active_31Button = new Button(flagBtn_active_31);
        flagBtn_active_31Button.spriteName = "flagBtn";
        flagBtn_active_31Button.callback = () => this.scene.buy(1);

        // flagBtn_active_32 (components)
        const flagBtn_active_32Button = new Button(flagBtn_active_32);
        flagBtn_active_32Button.spriteName = "flagBtn";
        flagBtn_active_32Button.callback = () => this.scene.buy(1);

        // flagBtn_active_33 (components)
        const flagBtn_active_33Button = new Button(flagBtn_active_33);
        flagBtn_active_33Button.spriteName = "flagBtn";
        flagBtn_active_33Button.callback = () => this.scene.buy(1);

        // flagBtn_active_34 (components)
        const flagBtn_active_34Button = new Button(flagBtn_active_34);
        flagBtn_active_34Button.spriteName = "flagBtn";
        flagBtn_active_34Button.callback = () => this.scene.buy(1);

        // flagBtn_active_35 (components)
        const flagBtn_active_35Button = new Button(flagBtn_active_35);
        flagBtn_active_35Button.spriteName = "flagBtn";
        flagBtn_active_35Button.callback = () => this.scene.buy(1);

        // flagBtn_active_36 (components)
        const flagBtn_active_36Button = new Button(flagBtn_active_36);
        flagBtn_active_36Button.spriteName = "flagBtn";
        flagBtn_active_36Button.callback = () => this.scene.buy(1);

        // flagBtn_active_37 (components)
        const flagBtn_active_37Button = new Button(flagBtn_active_37);
        flagBtn_active_37Button.spriteName = "flagBtn";
        flagBtn_active_37Button.callback = () => this.scene.buy(1);

        // flagBtn_active_38 (components)
        const flagBtn_active_38Button = new Button(flagBtn_active_38);
        flagBtn_active_38Button.spriteName = "flagBtn";
        flagBtn_active_38Button.callback = () => this.scene.buy(1);

        // flagBtn_active_39 (components)
        const flagBtn_active_39Button = new Button(flagBtn_active_39);
        flagBtn_active_39Button.spriteName = "flagBtn";
        flagBtn_active_39Button.callback = () => this.scene.buy(1);

        // flagBtn_active_40 (components)
        const flagBtn_active_40Button = new Button(flagBtn_active_40);
        flagBtn_active_40Button.spriteName = "flagBtn";
        flagBtn_active_40Button.callback = () => this.scene.buy(1);

        // flagBtn_active_41 (components)
        const flagBtn_active_41Button = new Button(flagBtn_active_41);
        flagBtn_active_41Button.spriteName = "flagBtn";
        flagBtn_active_41Button.callback = () => this.scene.buy(1);

        // flagBtn_active_42 (components)
        const flagBtn_active_42Button = new Button(flagBtn_active_42);
        flagBtn_active_42Button.spriteName = "flagBtn";
        flagBtn_active_42Button.callback = () => this.buy(503);

        // flagBtn_active_43 (components)
        const flagBtn_active_43Button = new Button(flagBtn_active_43);
        flagBtn_active_43Button.spriteName = "flagBtn";
        flagBtn_active_43Button.callback = () => this.scene.buy(1);

        // flagBtn_active_44 (components)
        const flagBtn_active_44Button = new Button(flagBtn_active_44);
        flagBtn_active_44Button.spriteName = "flagBtn";
        flagBtn_active_44Button.callback = () => this.scene.buy(1);

        // flagBtn_active_45 (components)
        const flagBtn_active_45Button = new Button(flagBtn_active_45);
        flagBtn_active_45Button.spriteName = "flagBtn";
        flagBtn_active_45Button.callback = () => this.scene.buy(1);

        // flagBtn_active_46 (components)
        const flagBtn_active_46Button = new Button(flagBtn_active_46);
        flagBtn_active_46Button.spriteName = "flagBtn";
        flagBtn_active_46Button.callback = () => this.scene.buy(1);

        // flagBtn_active_47 (components)
        const flagBtn_active_47Button = new Button(flagBtn_active_47);
        flagBtn_active_47Button.spriteName = "flagBtn";
        flagBtn_active_47Button.callback = () => this.scene.buy(1);

        // flagBtn_active_19 (components)
        const flagBtn_active_19Button = new Button(flagBtn_active_19);
        flagBtn_active_19Button.spriteName = "flagBtn";
        flagBtn_active_19Button.callback = () => this.scene.buy(1);

        // flagBtn_active_48 (components)
        const flagBtn_active_48Button = new Button(flagBtn_active_48);
        flagBtn_active_48Button.spriteName = "flagBtn";
        flagBtn_active_48Button.callback = () => this.scene.buy(1);

        // flagBtn_active_49 (components)
        const flagBtn_active_49Button = new Button(flagBtn_active_49);
        flagBtn_active_49Button.spriteName = "flagBtn";
        flagBtn_active_49Button.callback = () => this.scene.buy(1);

        // flagBtn_active_50 (components)
        const flagBtn_active_50Button = new Button(flagBtn_active_50);
        flagBtn_active_50Button.spriteName = "flagBtn";
        flagBtn_active_50Button.callback = () => this.buy(501);

        // flagBtn_active_51 (components)
        const flagBtn_active_51Button = new Button(flagBtn_active_51);
        flagBtn_active_51Button.spriteName = "flagBtn";
        flagBtn_active_51Button.callback = () => this.scene.buy(1);

        // flagBtn_active_52 (components)
        const flagBtn_active_52Button = new Button(flagBtn_active_52);
        flagBtn_active_52Button.spriteName = "flagBtn";
        flagBtn_active_52Button.callback = () => this.scene.buy(1);

        // flagBtn_active_54 (components)
        const flagBtn_active_54Button = new Button(flagBtn_active_54);
        flagBtn_active_54Button.spriteName = "flagBtn";
        flagBtn_active_54Button.callback = () => this.scene.buy(1);

        // flagBtn_active_55 (components)
        const flagBtn_active_55Button = new Button(flagBtn_active_55);
        flagBtn_active_55Button.spriteName = "flagBtn";
        flagBtn_active_55Button.callback = () => this.scene.buy(1);

        // flagBtn_active_56 (components)
        const flagBtn_active_56Button = new Button(flagBtn_active_56);
        flagBtn_active_56Button.spriteName = "flagBtn";
        flagBtn_active_56Button.callback = () => this.scene.buy(1);

        // flagBtn_active_57 (components)
        const flagBtn_active_57Button = new Button(flagBtn_active_57);
        flagBtn_active_57Button.spriteName = "flagBtn";
        flagBtn_active_57Button.callback = () => this.scene.buy(1);

        // flagBtn_active_58 (components)
        const flagBtn_active_58Button = new Button(flagBtn_active_58);
        flagBtn_active_58Button.spriteName = "flagBtn";
        flagBtn_active_58Button.callback = () => this.scene.buy(1);

        // flagBtn_active_53 (components)
        const flagBtn_active_53Button = new Button(flagBtn_active_53);
        flagBtn_active_53Button.spriteName = "flagBtn";
        flagBtn_active_53Button.callback = () => this.scene.buy(1);

        // nextPage_1345 (components)
        const nextPage_1345Button = new Button(nextPage_1345);
        nextPage_1345Button.spriteName = "nextPage";
        nextPage_1345Button.callback = () => this.nextPage();

        // backPage324 (components)
        const backPage324Button = new Button(backPage324);
        backPage324Button.spriteName = "backPage";
        backPage324Button.callback = () => this.prevPage();

        // close_1123 (components)
        const close_1123Button = new Button(close_1123);
        close_1123Button.spriteName = "close";
        close_1123Button.callback = () => this.close();

        // nextPage_3564 (components)
        const nextPage_3564Button = new Button(nextPage_3564);
        nextPage_3564Button.spriteName = "nextPage";
        nextPage_3564Button.callback = () => this.nextPage();

        // backPage_1015 (components)
        const backPage_1015Button = new Button(backPage_1015);
        backPage_1015Button.spriteName = "backPage";
        backPage_1015Button.callback = () => this.prevPage();

        // close_3534 (components)
        const close_3534Button = new Button(close_3534);
        close_3534Button.spriteName = "close";
        close_3534Button.callback = () => this.close();

        // buy_30454 (components)
        const buy_30454Button = new Button(buy_30454);
        buy_30454Button.spriteName = "buy";

        // buy_31555 (components)
        const buy_31555Button = new Button(buy_31555);
        buy_31555Button.spriteName = "buy";

        // buy_32wada (components)
        const buy_32wadaButton = new Button(buy_32wada);
        buy_32wadaButton.spriteName = "buy";

        // buy_333222 (components)
        const buy_333222Button = new Button(buy_333222);
        buy_333222Button.spriteName = "buy";

        // nextPage_9 (components)
        const nextPage_9Button = new Button(nextPage_9);
        nextPage_9Button.spriteName = "nextPage";
        nextPage_9Button.callback = () => this.nextPage();

        // backPage9 (components)
        const backPage9Button = new Button(backPage9);
        backPage9Button.spriteName = "backPage";
        backPage9Button.callback = () => this.prevPage();

        // close_9 (components)
        const close_9Button = new Button(close_9);
        close_9Button.spriteName = "close";
        close_9Button.callback = () => this.close();

        // buy_25g65 (components)
        const buy_25g65Button = new Button(buy_25g65);
        buy_25g65Button.spriteName = "buy";

        // buy_2655555 (components)
        const buy_2655555Button = new Button(buy_2655555);
        buy_2655555Button.spriteName = "buy";

        // buy_27qwd (components)
        const buy_27qwdButton = new Button(buy_27qwd);
        buy_27qwdButton.spriteName = "buy";

        // buy_28 (components)
        const buy_28Button = new Button(buy_28);
        buy_28Button.spriteName = "buy";

        // buy_29rrgrg (components)
        const buy_29rrgrgButton = new Button(buy_29rrgrg);
        buy_29rrgrgButton.spriteName = "buy";

        // buy_1948g9dq (components)
        const buy_1948g9dqButton = new Button(buy_1948g9dq);
        buy_1948g9dqButton.spriteName = "buy";

        // buy_205f5f58798 (components)
        const buy_205f5f58798Button = new Button(buy_205f5f58798);
        buy_205f5f58798Button.spriteName = "buy";

        // buy_212135 (components)
        const buy_212135Button = new Button(buy_212135);
        buy_212135Button.spriteName = "buy";

        // buy_22u8lu (components)
        const buy_22u8luButton = new Button(buy_22u8lu);
        buy_22u8luButton.spriteName = "buy";

        // buy_23lihl (components)
        const buy_23lihlButton = new Button(buy_23lihl);
        buy_23lihlButton.spriteName = "buy";

        // buy_24u65 (components)
        const buy_24u65Button = new Button(buy_24u65);
        buy_24u65Button.spriteName = "buy";

        // nextPage_8 (components)
        const nextPage_8Button = new Button(nextPage_8);
        nextPage_8Button.spriteName = "nextPage";
        nextPage_8Button.callback = () => this.nextPage();

        // backPage88 (components)
        const backPage88Button = new Button(backPage88);
        backPage88Button.spriteName = "backPage";
        backPage88Button.callback = () => this.prevPage();

        // close_8 (components)
        const close_8Button = new Button(close_8);
        close_8Button.spriteName = "close";
        close_8Button.callback = () => this.close();

        // nextPage_7 (components)
        const nextPage_7Button = new Button(nextPage_7);
        nextPage_7Button.spriteName = "nextPage";
        nextPage_7Button.callback = () => this.nextPage();

        // backPage7 (components)
        const backPage7Button = new Button(backPage7);
        backPage7Button.spriteName = "backPage";
        backPage7Button.callback = () => this.prevPage();

        // close_7 (components)
        const close_7Button = new Button(close_7);
        close_7Button.spriteName = "close";
        close_7Button.callback = () => this.close();

        // buy_16 (components)
        const buy_16Button = new Button(buy_16);
        buy_16Button.spriteName = "buy";

        // buy_17 (components)
        const buy_17Button = new Button(buy_17);
        buy_17Button.spriteName = "buy";

        // buy_18 (components)
        const buy_18Button = new Button(buy_18);
        buy_18Button.spriteName = "buy";

        // nextPage_6 (components)
        const nextPage_6Button = new Button(nextPage_6);
        nextPage_6Button.spriteName = "nextPage";
        nextPage_6Button.callback = () => this.nextPage();

        // backPage6 (components)
        const backPage6Button = new Button(backPage6);
        backPage6Button.spriteName = "backPage";
        backPage6Button.callback = () => this.prevPage();

        // close_6 (components)
        const close_6Button = new Button(close_6);
        close_6Button.spriteName = "close";
        close_6Button.callback = () => this.close();

        // buy_11 (components)
        const buy_11Button = new Button(buy_11);
        buy_11Button.spriteName = "buy";

        // buy_12 (components)
        const buy_12Button = new Button(buy_12);
        buy_12Button.spriteName = "buy";

        // buy_13 (components)
        const buy_13Button = new Button(buy_13);
        buy_13Button.spriteName = "buy";

        // buy_14 (components)
        const buy_14Button = new Button(buy_14);
        buy_14Button.spriteName = "buy";

        // buy_15 (components)
        const buy_15Button = new Button(buy_15);
        buy_15Button.spriteName = "buy";

        // nextPage_5 (components)
        const nextPage_5Button = new Button(nextPage_5);
        nextPage_5Button.spriteName = "nextPage";
        nextPage_5Button.callback = () => this.nextPage();

        // backPage (components)
        const backPageButton = new Button(backPage);
        backPageButton.spriteName = "backPage";
        backPageButton.callback = () => this.prevPage();

        // close_5 (components)
        const close_5Button = new Button(close_5);
        close_5Button.spriteName = "close";
        close_5Button.callback = () => this.close();

        // buy_7 (components)
        const buy_7Button = new Button(buy_7);
        buy_7Button.spriteName = "buy";

        // buy_8 (components)
        const buy_8Button = new Button(buy_8);
        buy_8Button.spriteName = "buy";

        // buy_9 (components)
        const buy_9Button = new Button(buy_9);
        buy_9Button.spriteName = "buy";

        // buy_10 (components)
        const buy_10Button = new Button(buy_10);
        buy_10Button.spriteName = "buy";

        // nextPage_4 (components)
        const nextPage_4Button = new Button(nextPage_4);
        nextPage_4Button.spriteName = "nextPage";
        nextPage_4Button.callback = () => this.nextPage();

        // backPage4 (components)
        const backPage4Button = new Button(backPage4);
        backPage4Button.spriteName = "backPage";
        backPage4Button.callback = () => this.prevPage();

        // close_4 (components)
        const close_4Button = new Button(close_4);
        close_4Button.spriteName = "close";
        close_4Button.callback = () => this.close();

        // buy (components)
        const buyButton = new Button(buy);
        buyButton.spriteName = "buy";

        // buy_1 (components)
        const buy_1Button = new Button(buy_1);
        buy_1Button.spriteName = "buy";

        // buy_2 (components)
        const buy_2Button = new Button(buy_2);
        buy_2Button.spriteName = "buy";

        // buy_3 (components)
        const buy_3Button = new Button(buy_3);
        buy_3Button.spriteName = "buy";

        // buy_4 (components)
        const buy_4Button = new Button(buy_4);
        buy_4Button.spriteName = "buy";

        // buy_5 (components)
        const buy_5Button = new Button(buy_5);
        buy_5Button.spriteName = "buy";

        // buy_6 (components)
        const buy_6Button = new Button(buy_6);
        buy_6Button.spriteName = "buy";

        // nextPage_13 (components)
        const nextPage_13Button = new Button(nextPage_13);
        nextPage_13Button.spriteName = "nextPage";
        nextPage_13Button.callback = () => this.nextPage();

        // backPage33 (components)
        const backPage33Button = new Button(backPage33);
        backPage33Button.spriteName = "backPage";
        backPage33Button.callback = () => this.prevPage();

        // close_33 (components)
        const close_33Button = new Button(close_33);
        close_33Button.spriteName = "close";
        close_33Button.callback = () => this.close();

        // aqua (components)
        const aquaButton = new Button(aqua);
        aquaButton.spriteName = "aqua";
        aquaButton.callback = () => this.scene.buy(9);

        // black (components)
        const blackButton = new Button(black);
        blackButton.spriteName = "black";
        blackButton.callback = () => this.scene.buy(13);

        // blue (components)
        const blueButton = new Button(blue);
        blueButton.spriteName = "blue";
        blueButton.callback = () => this.scene.buy(1);

        // brown (components)
        const brownButton = new Button(brown);
        brownButton.spriteName = "brown";
        brownButton.callback = () => this.scene.buy(5);

        // cyan (components)
        const cyanButton = new Button(cyan);
        cyanButton.spriteName = "cyan";
        cyanButton.callback = () => this.scene.buy(7);

        // darkgreen (components)
        const darkgreenButton = new Button(darkgreen);
        darkgreenButton.spriteName = "darkgreen";
        darkgreenButton.callback = () => this.scene.buy(14);

        // green (components)
        const greenButton = new Button(green);
        greenButton.spriteName = "green";
        greenButton.callback = () => this.scene.buy(2);

        // lime (components)
        const limeButton = new Button(lime);
        limeButton.spriteName = "lime";
        limeButton.callback = () => this.scene.buy(8);

        // magenta (components)
        const magentaButton = new Button(magenta);
        magentaButton.spriteName = "magenta";
        magentaButton.callback = () => this.scene.buy(3);

        // orange (components)
        const orangeButton = new Button(orange);
        orangeButton.spriteName = "orange";
        orangeButton.callback = () => this.scene.buy(11);

        // pink (components)
        const pinkButton = new Button(pink);
        pinkButton.spriteName = "pink";
        pinkButton.callback = () => this.scene.buy(6);

        // purple (components)
        const purpleButton = new Button(purple);
        purpleButton.spriteName = "purple";
        purpleButton.callback = () => this.scene.buy(4);

        // red (components)
        const redButton = new Button(red);
        redButton.spriteName = "red";
        redButton.callback = () => this.scene.buy(10);

        // white (components)
        const whiteButton = new Button(white);
        whiteButton.spriteName = "white";
        whiteButton.callback = () => this.scene.buy(15);

        // yellow (components)
        const yellowButton = new Button(yellow);
        yellowButton.spriteName = "yellow";
        yellowButton.callback = () => this.scene.buy(12);

        // nextPage_19494949977 (components)
        const nextPage_19494949977Button = new Button(nextPage_19494949977);
        nextPage_19494949977Button.spriteName = "nextPage";
        nextPage_19494949977Button.callback = () => this.nextPage();

        // backPage489489984894 (components)
        const backPage489489984894Button = new Button(backPage489489984894);
        backPage489489984894Button.spriteName = "backPage";
        backPage489489984894Button.callback = () => this.prevPage();

        // close_1 (components)
        const close_1Button = new Button(close_1);
        close_1Button.spriteName = "close";
        close_1Button.callback = () => this.close();

        // nextPage231 (components)
        const nextPage231Button = new Button(nextPage231);
        nextPage231Button.spriteName = "nextPage";
        nextPage231Button.callback = () => this.nextPage();

        // close34243 (components)
        const close34243Button = new Button(close34243);
        close34243Button.spriteName = "close";
        close34243Button.callback = () => this.close();

        this.buttons = buttons;
        this.coins = coins;
        this.pages = pages;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    // Write your code here

    create() {
        super.create()

        this.setCoins(this.world.client.coins)
    }

    setCoins(coins) {
        this.coins.text = `YOUR COINS: ${coins}`
    }

    buy(item) {
        this.interface.prompt.showItem(item)
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
