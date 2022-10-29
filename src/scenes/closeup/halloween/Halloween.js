
// You can write more code here

/* START OF COMPILED CODE */

import BaseContainer from "../../base/BaseContainer";
import Interactive from "../../components/Interactive";
import Button from "../../components/Button";
import SimpleButton from "../../components/SimpleButton";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Halloween extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 542, y ?? 462);

        // s_mbolo_3
        const s_mbolo_3 = scene.add.image(214, 50, "newinterface", "Símbolo 3");
        this.add(s_mbolo_3);

        // container_1
        const container_1 = scene.add.container(-542, -462);
        this.add(container_1);

        // day1
        const day1 = scene.add.image(768, 362, "newinterface", "day1");
        container_1.add(day1);

        // claim
        const claim = scene.add.image(257, 469, "newinterface", "claim");
        container_1.add(claim);

        // claim_1
        const claim_1 = scene.add.image(517, 469, "newinterface", "claim");
        container_1.add(claim_1);

        // base
        const base = scene.add.image(260, 446, "newinterface", "base");
        container_1.add(base);

        // base_1
        const base_1 = scene.add.image(519, 446, "newinterface", "base");
        container_1.add(base_1);

        // item1
        const item1 = scene.add.image(261, 392, "newinterface", "item1");
        container_1.add(item1);

        // item2
        const item2 = scene.add.image(519, 472, "newinterface", "item2");
        container_1.add(item2);

        // tp
        const tp = scene.add.image(1124, 563, "newinterface", "tp");
        container_1.add(tp);

        // text_1
        const text_1 = scene.add.text(246, 558, "", {});
        text_1.text = "Claim";
        text_1.setStyle({ "color": "#885A19", "fontFamily": "Burbank Small", "fontSize": "20px" });
        container_1.add(text_1);

        // text
        const text = scene.add.text(510, 558, "", {});
        text.text = "Claim";
        text.setStyle({ "color": "#885A19", "fontFamily": "Burbank Small", "fontSize": "20px" });
        container_1.add(text);

        // text_2
        const text_2 = scene.add.text(856, 335, "", {});
        text_2.text = "Help Gary with the\npumpkins at his lab";
        text_2.setStyle({ "align": "center", "fontFamily": "Burbank Small", "fontSize": "60px", "stroke": "#717171ff", "strokeThickness":2,"shadow.offsetX":5,"shadow.color": "#000000ff", "shadow.stroke":true});
        container_1.add(text_2);

        // text_3
        const text_3 = scene.add.text(1043, 539, "", {});
        text_3.text = "GO THERE";
        text_3.setStyle({ "fontFamily": "Burbank Small", "fontSize": "40px", "stroke": "#717171ff", "strokeThickness":2,"shadow.offsetX":5,"shadow.color": "#000000ff", "shadow.stroke":true});
        container_1.add(text_3);

        // rectangle_1
        const rectangle_1 = scene.add.rectangle(399, 171, 128, 128);
        rectangle_1.scaleX = 2.10134431306879;
        rectangle_1.scaleY = 0.6787617711688003;
        rectangle_1.isFilled = true;
        rectangle_1.fillColor = 4605766;
        container_1.add(rectangle_1);

        // rectangle
        const rectangle = scene.add.rectangle(1131, 166, 128, 128);
        rectangle.scaleX = 2.10134431306879;
        rectangle.scaleY = 0.6787617711688003;
        rectangle.isFilled = true;
        rectangle.fillColor = 4605766;
        container_1.add(rectangle);

        // text_4
        const text_4 = scene.add.text(297, 116, "", {});
        text_4.text = "Daily Free \nItems";
        text_4.setStyle({ "align": "center", "fontFamily": "Burbank Small", "fontSize": "40px", "stroke": "#717171ff", "strokeThickness":2,"shadow.offsetX":5,"shadow.color": "#000000ff", "shadow.stroke":true});
        container_1.add(text_4);

        // text_5
        const text_5 = scene.add.text(1041, 116, "", {});
        text_5.text = "Day #1\nMission";
        text_5.setStyle({ "align": "center", "fontFamily": "Burbank Small", "fontSize": "40px", "stroke": "#717171ff", "strokeThickness":2,"shadow.offsetX":5,"shadow.color": "#000000ff", "shadow.stroke":true});
        container_1.add(text_5);

        // container_2
        const container_2 = scene.add.container(-542, -462);
        this.add(container_2);

        // day2
        const day2 = scene.add.image(796, 439, "newinterface", "day2");
        day2.visible = false;
        container_2.add(day2);

        // symbol_519
        const symbol_519 = scene.add.image(238, 412, "newinterface", "Symbol 519");
        this.add(symbol_519);

        // right
        const right = scene.add.image(930, -20, "newinterface", "right");
        this.add(right);

        // left
        const left = scene.add.image(-485, -20, "newinterface", "left");
        this.add(left);

        // closepanel
        const closepanel = scene.add.image(921, -387, "newinterface", "closepanel");
        this.add(closepanel);

        // s_mbolo_3 (components)
        new Interactive(s_mbolo_3);

        // claim (components)
        const claimButton = new Button(claim);
        claimButton.spriteName = "claim";

        // claim_1 (components)
        const claim_1Button = new Button(claim_1);
        claim_1Button.spriteName = "claim";

        // tp (components)
        const tpButton = new Button(tp);
        tpButton.spriteName = "tp";

        // symbol_519 (components)
        new Interactive(symbol_519);

        // right (components)
        const rightButton = new Button(right);
        rightButton.spriteName = "right";

        // left (components)
        const leftButton = new Button(left);
        leftButton.spriteName = "left";

        // closepanel (components)
        const closepanelSimpleButton = new SimpleButton(closepanel);
        closepanelSimpleButton.callback = () => this.visible = false;

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    /* START-USER-CODE */

    // Write your code here.

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
