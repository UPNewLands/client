import BaseContainer from '@scenes/base/BaseContainer'

import { Button } from '@components/components'


/* START OF COMPILED CODE */

export default class Server extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Image} */
        this.server;
        /** @type {Phaser.GameObjects.Image} */
        this.bar;
        /** @type {Phaser.GameObjects.Image} */
        this.buddy;
        /** @type {Phaser.GameObjects.Image} */
        this.safe;
        /** @type {Phaser.GameObjects.Text} */
        this.name;
        /** @type {Phaser.GameObjects.Image} */
        this.full;
        /** @type {Phaser.GameObjects.Image} */
        this.text;
        /** @type {Phaser.GameObjects.Image[]} */
        this.bars;
        /** @type {string} */
        this.name = "";
        /** @type {boolean} */
        this.safe = false;


        // server
        const server = scene.add.image(0, 0, "servers", "server");
        this.add(server);

        // bar
        const bar = scene.add.image(2, 0, "newServers", "bar");
        bar.scaleX = 1.53;
        bar.scaleY = 1.51;
        this.add(bar);

        // bar_5
        const bar_5 = scene.add.image(322, 1, "servers", "bar_empty");
        bar_5.setOrigin(0.5161290322580645, 0.5098039215686274);
        this.add(bar_5);

        // bar_4
        const bar_4 = scene.add.image(277, 1, "servers", "bar_empty");
        bar_4.setOrigin(0.5161290322580645, 0.5098039215686274);
        this.add(bar_4);

        // bar_3
        const bar_3 = scene.add.image(232, 1, "servers", "bar_empty");
        bar_3.setOrigin(0.5161290322580645, 0.5098039215686274);
        this.add(bar_3);

        // bar_2
        const bar_2 = scene.add.image(187, 1, "servers", "bar_empty");
        bar_2.setOrigin(0.5161290322580645, 0.5098039215686274);
        this.add(bar_2);

        // bar_1
        const bar_1 = scene.add.image(142, 1, "servers", "bar_full");
        bar_1.setOrigin(0.5135135135135135, 0.5084745762711864);
        this.add(bar_1);

        // buddy
        const buddy = scene.add.image(-338, 0, "servers", "offline");
        buddy.setOrigin(0.509090909090909, 0.509090909090909);
        this.add(buddy);

        // safe
        const safe = scene.add.image(79, 1, "servers", "safe");
        safe.setOrigin(0.509090909090909, 0.5094339622641509);
        safe.visible = false;
        this.add(safe);

        // name
        const name = scene.add.text(-125, 0, "", {});
        name.setOrigin(0.5, 0.5);
        name.setStyle({ "fixedWidth":350,"fontFamily": "Arial", "fontSize": "50px" });
        this.add(name);

        // full
        const full = scene.add.image(240, 0, "servers", "full");
        full.setOrigin(0.5, 0.5076923076923077);
        full.visible = false;
        this.add(full);

        // on
        const on = scene.add.image(142, 0, "newServers", "on");
        on.scaleX = 2.1;
        on.scaleY = 1.85;
        this.add(on);

        // off
        const off = scene.add.image(187, 0, "newServers", "off");
        off.scaleX = 2.1;
        off.scaleY = 1.86;
        this.add(off);

        // off_1
        const off_1 = scene.add.image(232, 0, "newServers", "off");
        off_1.scaleX = 2.1;
        off_1.scaleY = 1.86;
        this.add(off_1);

        // off_2
        const off_2 = scene.add.image(277, 0, "newServers", "off");
        off_2.scaleX = 2.1;
        off_2.scaleY = 1.86;
        this.add(off_2);

        // off_3
        const off_3 = scene.add.image(322, 0, "newServers", "off");
        off_3.scaleX = 2.1;
        off_3.scaleY = 1.86;
        this.add(off_3);

        // text
        const text = scene.add.image(78.5, -0.8, "newServers", "text");
        text.scaleX = 1.86;
        text.scaleY = 1.86;
        text.visible = false;
        this.add(text);

        // lists
        const bars = [bar_1, bar_2, bar_3, bar_4, bar_5];

        // server (components)
        const serverButton = new Button(server);
        serverButton.spriteName = "server";
        serverButton.activeFrame = false;

        // bar (components)
        const barButton = new Button(bar);
        barButton.spriteName = "bar";
        barButton.activeFrame = false;

        this.server = server;
        this.bar = bar;
        this.buddy = buddy;
        this.safe = safe;
        this.name = name;
        this.full = full;
        this.text = text;
        this.bars = bars;

        /* START-USER-CTR-CODE */

        this.button = serverButton
        this.button = barButton

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    setPopulation(population) {
        for (let [index, bar] of this.bars.entries()) {
            let frame = (index + 1 <= population) ? 'bar_full' : 'bar_empty'

            bar.setFrame(frame)

            this.full.visible = population >= 6
        }
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
