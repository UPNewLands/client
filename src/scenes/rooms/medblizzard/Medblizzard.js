import RoomScene from "../RoomScene";
import Button from "../../components/Button";
import MoveTo from "../../components/MoveTo";
import ShowHint from "../../components/ShowHint";
import SimpleButton from "../../components/SimpleButton";
import Animation from "../../components/Animation";

// You can write more code here

/* START OF COMPILED CODE */

export default class Medblizzard extends RoomScene {

	constructor() {
		super("Medblizzard");

		/** @type {Array<any>} */
		this.sort;


		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	_preload() {

		this.load.pack("medblizzard-pack", "assets/media/rooms/midblizzard/medblizzard-pack.json");
	}

	/** @returns {void} */
	_create() {

		// symbol_5
		this.add.image(729, 188, "medblizzard", "Symbol 5");

		// symbol_6
		this.add.image(917, 314, "medblizzard", "Symbol 6");

		// symbol_13
		this.add.image(729, 617, "medblizzard", "Symbol 13");

		// fondo
		this.add.image(1270, 642, "medblizzard", "Fondo");

		// fondo2
		this.add.image(339, 465, "medblizzard", "Fondo2");

		// pared_2
		this.add.image(1011, 774, "medblizzard", "pared 2");

		// cerca_Escaleras
		this.add.image(434, 122, "medblizzard", "Cerca Escaleras");

		// symbol_300
		this.add.image(793, 174, "medblizzard", "Symbol 300");

		// stairs
		this.add.image(344, 136, "medblizzard", "Stairs");

		// pared
		this.add.image(1151, 712, "medblizzard", "pared 2");

		// s_mbolo_7
		this.add.image(665, 555, "medblizzard", "Símbolo 7");

		// tower
		this.add.image(950, 214, "medblizzard", "tower");

		// rope20001
		const rope20001 = this.add.sprite(1297, 262, "medblizzard", "rope20001");

		// rueda0001
		const rueda0001 = this.add.sprite(1016, 130, "medblizzard", "rueda0001");

		// tube_Stack
		this.add.image(352, 510, "medblizzard", "Tube Stack");

		// symbol
		const symbol = this.add.image(754, 247, "medblizzard", "Symbol 304");
		symbol.scaleX = 0.8;
		symbol.scaleY = 0.8;

		// escaleras_Refugio
		this.add.image(240, 488, "medblizzard", "Escaleras Refugio");

		// arboles
		this.add.image(633, 133, "medblizzard", "Arboles");

		// flecha
		this.add.image(542, 246, "medblizzard", "Flecha");

		// mountain_Wall
		this.add.image(151, 143, "medblizzard", "Mountain Wall");

		// symbol_304
		const symbol_304 = this.add.image(606, 287, "medblizzard", "Symbol 304");
		symbol_304.scaleX = 0.8;
		symbol_304.scaleY = 0.8;
		symbol_304.flipX = true;

		// s_mbolo_8
		this.add.image(325, 340, "medblizzard", "Símbolo 8");

		// door1
		const door1 = this.add.image(210, 567, "medblizzard", "door1");

		// refugio
		this.add.image(123, 470, "medblizzard", "Refugio");

		// rod
		const rod = this.add.image(563.7413924862333, 335.90660510015107, "medblizzard", "rod");
		rod.scaleX = 0.9;
		rod.scaleY = 0.9;
		rod.setOrigin(0.41770031361755333, 0.45164683708189934);

		// s_mbolo_60002
		this.add.image(205, 469, "medblizzard", "Símbolo 60002");

		// cerca_Background
		this.add.image(1138, 409, "medblizzard", "Cerca Background");

		// nieve_Foreground
		this.add.image(434, 834, "medblizzard", "Nieve Foreground");

		// symbol_100_copia_3
		this.add.image(1401, 923, "medblizzard", "Symbol 100 copia 3");

		// symbol_100_copia
		this.add.image(1269, 918, "medblizzard", "Symbol 100 copia 3");

		// symbol_100_copia_1
		this.add.image(1093, 918, "medblizzard", "Symbol 100 copia 3");

		// symbol_100_copia_2
		this.add.image(1144, 875, "medblizzard", "Symbol 100 copia 3");

		// symbol_100_copia_4
		this.add.image(1130, 873, "medblizzard", "Symbol 100 copia 3");

		// symbol_100_copia_5
		this.add.image(1244, 851, "medblizzard", "Symbol 100 copia 3");

		// symbol_100_copia_6
		this.add.image(1208, 869, "medblizzard", "Symbol 100 copia 3");

		// symbol_100_copia_7
		this.add.image(1240, 869, "medblizzard", "Symbol 100 copia 3");

		// symbol_100_copia_8
		this.add.image(1146, 896, "medblizzard", "Symbol 100 copia 3");

		// symbol_100_copia_9
		this.add.image(1340, 902, "medblizzard", "Symbol 100 copia 3");

		// symbol_100_copia_10
		this.add.image(1350, 897, "medblizzard", "Symbol 100 copia 3");

		// symbol_100_copia_11
		this.add.image(1383, 875, "medblizzard", "Symbol 100 copia 3");

		// symbol_100_copia_12
		this.add.image(1381, 869, "medblizzard", "Symbol 100 copia 3");

		// symbol_100_copia_13
		this.add.image(1405, 881, "medblizzard", "Symbol 100 copia 3");

		// symbol_100_copia_14
		this.add.image(1348, 851, "medblizzard", "Symbol 100 copia 3");

		// symbol_100_copia_15
		this.add.image(1413, 902, "medblizzard", "Symbol 100 copia 3");

		// symbol_100_copia_16
		this.add.image(1411, 910, "medblizzard", "Symbol 100 copia 3");

		// arbol_2
		this.add.image(1166, 880, "medblizzard", "Arbol 2");

		// penguins0001
		const penguins0001 = this.add.sprite(223, 1071, "medblizzard", "penguins0001");

		// jetpack
		const jetpack = this.add.image(883, 677, "medblizzard", "jetpack");

		// rope10001
		const rope10001 = this.add.sprite(1237, 293, "medblizzard", "rope10001");

		// lists
		const sort = [];

		// rope20001 (components)
		const rope20001Animation = new Animation(rope20001);
		rope20001Animation.key = "rope2";
		rope20001Animation.end = 10;

		// rueda0001 (components)
		const rueda0001Animation = new Animation(rueda0001);
		rueda0001Animation.key = "rueda";
		rueda0001Animation.end = 29;

		// door1 (components)
		const door1Button = new Button(door1);
		door1Button.spriteName = "door1";
		door1Button.activeFrame = false;
		const door1MoveTo = new MoveTo(door1);
		door1MoveTo.x = 256;
		door1MoveTo.y = 600;

		// rod (components)
		const rodButton = new Button(rod);
		rodButton.spriteName = "rod";
		rodButton.activeFrame = false;
		const rodShowHint = new ShowHint(rod);
		rodShowHint.text = "Go Fishing";
		const rodMoveTo = new MoveTo(rod);
		rodMoveTo.x = 625;
		rodMoveTo.y = 381;

		// penguins0001 (components)
		const penguins0001Animation = new Animation(penguins0001);
		penguins0001Animation.key = "penguins";
		penguins0001Animation.end = 54;

		// jetpack (components)
		const jetpackButton = new Button(jetpack);
		jetpackButton.spriteName = "jetpack";
		jetpackButton.activeFrame = false;
		const jetpackShowHint = new ShowHint(jetpack);
		jetpackShowHint.text = "Jetpack Adventure";
		const jetpackMoveTo = new MoveTo(jetpack);
		jetpackMoveTo.x = 951;
		jetpackMoveTo.y = 658;

		// rope10001 (components)
		const rope10001Animation = new Animation(rope10001);
		rope10001Animation.key = "rope1";
		rope10001Animation.end = 10;

		this.sort = sort;

		this.events.emit("scene-awake");
	}


	/* START-USER-CODE */

	// Write your code here

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
