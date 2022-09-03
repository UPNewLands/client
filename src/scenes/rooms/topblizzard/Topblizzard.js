
// You can write more code here

/* START OF COMPILED CODE */

export default class Topblizzard extends RoomScene {

	constructor() {
		super("Topblizzard");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	_preload() {

		this.load.pack("shack-pack", "assets/media/rooms/shack/shack-pack.json");
	}

	/** @returns {void} */
	_create() {

		// bag
		const bag = this.add.image(680, 227, "shack", "bag");
		bag.setOrigin(0.09859154929577464, 0.7682926829268293);

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
