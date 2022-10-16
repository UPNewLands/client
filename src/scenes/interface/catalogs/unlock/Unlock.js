
// You can write more code here
import Book from '@scenes/interface/books/Book'
import Button from "../../../components/Button";
import Interactive from "../../../components/Interactive";
import Animation from "../../../components/Animation";
import TextInput from '@engine/interface/text/TextInput'

/* START OF COMPILED CODE */

export default class Unlock extends Book {

    constructor() {
        super("Unlock");

        /** @type {Phaser.GameObjects.Sprite} */
        this.chest;
        /** @type {Phaser.GameObjects.Container} */
        this.chest_buttons;
        /** @type {Phaser.GameObjects.Text} */
        this.item_text;
        /** @type {Phaser.GameObjects.Image} */
        this.field;
        /** @type {Phaser.GameObjects.Container[]} */
        this.pages;


        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    preload() {

        this.load.pack("unlock-pack", "assets/media/interface/catalogs/unlock/unlock-pack.json");
    }

    /** @returns {void} */
    _create() {

        // block
        const block = this.add.rectangle(825, 500, 1650, 1000);
        block.isFilled = true;
        block.fillColor = 0;
        block.fillAlpha = 0.2;

        // page2
        const page2 = this.add.container(0, 0);
        page2.visible = false;

        // background_1
        const background_1 = this.add.image(825, 500, "unlock", "background");
        page2.add(background_1);

        // symbol
        const symbol = this.add.image(825, 500, "unlock", "Symbol 4");
        page2.add(symbol);

        // chest
        const chest = this.add.sprite(825, 423, "unlock", "chest0001");
        chest.setOrigin(0.484, 0.523);
        page2.add(chest);

        // close_button_1
        const close_button_1 = this.add.image(1594, 54, "unlock", "close-button");
        page2.add(close_button_1);

        // next_button_1
        const next_button_1 = this.add.image(827, 839, "unlock", "next-button");
        next_button_1.scaleX = 0.7751291662326959;
        next_button_1.scaleY = 0.547162044689459;
        page2.add(next_button_1);

        // text
        const text = this.add.text(827, 839, "", {});
        text.setOrigin(0.5, 0.5);
        text.text = "Back";
        text.setStyle({ "align": "center", "fontFamily": "Calibri" });
        page2.add(text);

        // chest-buttons
        const chest_buttons = this.add.container(0, 0);
        page2.add(chest_buttons);

        // symbol_1
        const symbol_1 = this.add.image(825, 698, "unlock", "Symbol 173");
        chest_buttons.add(symbol_1);

        // unlock_button_1
        const unlock_button_1 = this.add.image(974, 535, "unlock", "unlock-button");
        chest_buttons.add(unlock_button_1);

        // book_button_1
        const book_button_1 = this.add.image(676, 535, "unlock", "book-button");
        chest_buttons.add(book_button_1);

        // book_text_1
        const book_text_1 = this.add.text(703, 537, "", {});
        book_text_1.setOrigin(0.5, 0.5);
        book_text_1.text = "I've got a Book";
        book_text_1.setStyle({ "fontFamily": "Calibri", "fontSize": "26px" });
        chest_buttons.add(book_text_1);

        // unlock_text_2
        const unlock_text_2 = this.add.text(986, 537, "", {});
        unlock_text_2.setOrigin(0.5, 0.5);
        unlock_text_2.text = "I've got a Code";
        unlock_text_2.setStyle({ "fontFamily": "Calibri", "fontSize": "26px" });
        chest_buttons.add(unlock_text_2);

        // item_text
        const item_text = this.add.text(825, 628, "", {});
        item_text.setOrigin(0.5, 0.5);
        item_text.text = "Enter your code! \nMake sure you enter it exactly as it appears.";
        item_text.setStyle({ "align": "center", "fontFamily": "Calibri", "fontSize": "26px" });
        chest_buttons.add(item_text);

        // next_button
        const next_button = this.add.image(825, 778, "unlock", "next-button");
        chest_buttons.add(next_button);

        // text_2
        const text_2 = this.add.text(825, 778, "", {});
        text_2.setOrigin(0.5, 0.5);
        text_2.text = "Next";
        text_2.setStyle({ "align": "center", "fontFamily": "Calibri", "fontSize": "26px" });
        chest_buttons.add(text_2);

        // field
        const field = this.add.image(825, 706, "unlock", "input");
        chest_buttons.add(field);

        // page1
        const page1 = this.add.container(0, 0);
        page1.visible = false;

        // background
        const background = this.add.image(825, 500, "unlock", "background");
        page1.add(background);

        // symbol_4
        const symbol_4 = this.add.image(825, 500, "unlock", "Symbol 4");
        page1.add(symbol_4);

        // chest-1
        const chest_1 = this.add.sprite(825, 423, "unlock", "chest0001");
        chest_1.setOrigin(0.484, 0.523);
        page1.add(chest_1);

        // symbol_173
        const symbol_173 = this.add.image(825, 698, "unlock", "Symbol 173");
        page1.add(symbol_173);

        // unlock_button
        const unlock_button = this.add.image(974, 535, "unlock", "unlock-button");
        page1.add(unlock_button);

        // book_button
        const book_button = this.add.image(676, 535, "unlock", "book-button");
        page1.add(book_button);

        // book_text
        const book_text = this.add.text(703, 537, "", {});
        book_text.setOrigin(0.5, 0.5);
        book_text.text = "I've got a Book";
        book_text.setStyle({ "fontFamily": "Calibri", "fontSize": "26px" });
        page1.add(book_text);

        // unlock_text
        const unlock_text = this.add.text(986, 537, "", {});
        unlock_text.setOrigin(0.5, 0.5);
        unlock_text.text = "I've got a Code";
        unlock_text.setStyle({ "fontFamily": "Calibri", "fontSize": "26px" });
        page1.add(unlock_text);

        // unlock_text_1
        const unlock_text_1 = this.add.text(825, 628, "", {});
        unlock_text_1.setOrigin(0.5, 0.5);
        unlock_text_1.text = "Unlock your items. Choose an option.";
        unlock_text_1.setStyle({ "fontFamily": "Calibri", "fontSize": "26px" });
        page1.add(unlock_text_1);

        // close_button
        const close_button = this.add.image(1594, 54, "unlock", "close-button");
        page1.add(close_button);

        // lists
        const pages = [page1, page2];

        // block (components)
        new Interactive(block);

        // chest (components)
        const chestAnimation = new Animation(chest);
        chestAnimation.key = "chest";
        chestAnimation.end = 57;
        chestAnimation.repeat = 0;
        chestAnimation.autoPlay = false;

        // close_button_1 (components)
        const close_button_1Button = new Button(close_button_1);
        close_button_1Button.spriteName = "close-button";
        close_button_1Button.callback = () => this.close();

        // next_button_1 (components)
        const next_button_1Button = new Button(next_button_1);
        next_button_1Button.spriteName = "next-button";
        next_button_1Button.callback = () => this.back();

        // unlock_button_1 (components)
        const unlock_button_1Button = new Button(unlock_button_1);
        unlock_button_1Button.spriteName = "unlock-button";

        // book_button_1 (components)
        const book_button_1Button = new Button(book_button_1);
        book_button_1Button.spriteName = "book-button";

        // next_button (components)
        const next_buttonButton = new Button(next_button);
        next_buttonButton.spriteName = "next-button";
        next_buttonButton.callback = () => this.onSubmit();

        // unlock_button (components)
        const unlock_buttonButton = new Button(unlock_button);
        unlock_buttonButton.spriteName = "unlock-button";
        unlock_buttonButton.callback = () => this.createCode();

        // book_button (components)
        const book_buttonButton = new Button(book_button);
        book_buttonButton.spriteName = "book-button";

        // close_button (components)
        const close_buttonButton = new Button(close_button);
        close_buttonButton.spriteName = "close-button";
        close_buttonButton.callback = () => this.close();

        this.chest = chest;
        this.chest_buttons = chest_buttons;
        this.item_text = item_text;
        this.field = field;
        this.pages = pages;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    onAnimComplete(item) {
        this.chest.setFrame('chest0001')
        //if (item == 0) {
        //    this.network.send('add_membership', { user: this.world.client.id })
           //    this.interface.prompt.showError('A Membership was added to your account! Please make sure to relog!')
        //}
    }
    isJsonString(str) {
        try {
            JSON.parse(str);
        } catch (e) {
            return false;
        }
        return true;
    }

    onSubmit() {

        let request = new XMLHttpRequest()
        request.onreadystatechange = () => this.handleResponse(request)
        let formData = new FormData()
        formData.set('code', this.coreInput.text);
        request.open('POST', '/create/scripts/php/redeem.php', false)
        request.send(formData)

    }
    handleResponse(request) {
        if (request.readyState !== XMLHttpRequest.DONE || request.status !== 200) {
            return
        }
        if (!this.isJsonString(request.responseText)) {
            this.item_text.text = 'Unexpected error occured! \n Responce: ' + request.responseText;
            return
        }

        let response = JSON.parse(request.responseText)

        if (!response) {
            return
        }
        if (response.code == "Invalid code") {
            this.item_text.text = response.code;
            return
        }
        this.chest.__Animation.play();
        this.coreInput.destroy();
        this.chest_buttons.visible = false;
        this.chest.on('animationcomplete', () => this.onAnimComplete(response.item))


    }
    createCode() {
        let style = {
            width: 360,
            height: 53,
            padding: '0 6px 0 6px',
            filter: 'none',
            fontFamily: 'Arial',
            fontSize: 35,
            color: '#000'
        }
        this.coreInput = new TextInput(this, 872, 706, 'text', style, () => this.onSubmit(), 13, true)
        this.add.existing(this.coreInput)
        this.chest_buttons.visible = true;
        this.nextPage()
    }
    buy(item) {
        this.interface.prompt.showItem(item)
    }
    back() {
        this.item_text.text = 'Enter your code! \nMake sure you enter it exactly as it appears.';
        this.prevPage()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
