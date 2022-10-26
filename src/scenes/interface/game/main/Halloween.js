
// You can write more code here

/* START OF COMPILED CODE */


/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Halloween extends Phaser.GameObjects.Container {

    constructor(scene, x, y) {
        super(scene, x ?? 884, y ?? 245);

        // s_mbolo_2
        const s_mbolo_2 = scene.add.image(-193, 241, "halloween", "Símbolo 2");
        this.add(s_mbolo_2);

        // bar
        const bar = scene.add.container(-27, 248);
        this.add(bar);

        // s_mbolo_7
        const s_mbolo_7 = scene.add.image(10, 4, "halloween", "Símbolo 7");
        bar.add(s_mbolo_7);

        // reflect
        const reflect = scene.add.image(0, 0, "halloween", "reflect");
        bar.add(reflect);

        this.bar = bar;

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    /** @type {Phaser.GameObjects.Container} */
    bar;

    /* START-USER-CODE */

    // Write your code here.

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
