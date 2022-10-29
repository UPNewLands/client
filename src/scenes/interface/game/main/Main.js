import BaseScene from '@scenes/base/BaseScene'

import { Button, Interactive, SimpleButton, ShowHint } from '@components/components'
import TextInput from '@engine/interface/text/TextInput'

import BalloonFactory from '@engine/interface/balloons/BalloonFactory'
import Hint from '@engine/interface/hint/Hint'
import SnowballFactory from '@engine/interface/snowball/SnowballFactory'

import FindFour from '@scenes/games/four/FindFour'

import ActionsMenu from '../floating/actions/ActionsMenu'
import Buddy from '../buddy/Buddy'
import ChatLog from '../chatlog/ChatLog'
import EmotesMenu from '../floating/emotes/EmotesMenu'
import Waddle from '../waddle/Waddle'
import Map from '../map/Map'
import NewMap from '../map/NewMap'
import PlayerCard from '../playercard/PlayerCard'
import PuffleCare from '../pufflecare/PuffleCare'
import Settings from '../settings/Settings'
import Manage from '../manage/Manage'
import Prompt from '../prompt/Prompt'
import Elevator from '../elevator/Elevator'
import Cavepopup from '@scenes/popup/cavepoup/Cavepopup'
import Rules from '@scenes/popup/rules/Rules'
import Changelog from '@scenes/closeup/changelog/Changelog'
import Halloween from '@scenes/closeup/halloween/Halloween'
import Telescope from '@scenes/closeup/telescope/Telescope'
import PufflesMenu from '../floating/puffles/PufflesMenu'
import Safe from '../floating/safe/Safe'
import Gary from '../../dialogue/Gary'
import Moderator from '../moderator/Moderator'
import ModActions from '../modactions/ModActions'
import Snitch from '../snitch/Snitch'



/* START OF COMPILED CODE */

export default class Main extends BaseScene {

    constructor() {
        super("Main");

        /** @type {Phaser.GameObjects.Container} */
        this.pinContainer;
        /** @type {Phaser.GameObjects.Image} */
        this.chat_box;
        /** @type {Phaser.GameObjects.Image} */
        this.puffle_button_disabled;
        /** @type {Phaser.GameObjects.Sprite} */
        this.puffle_button;
        /** @type {Phaser.GameObjects.Image} */
        this.puffle_icon;
        /** @type {Phaser.GameObjects.Image} */
        this.emote_button;
        /** @type {Phaser.GameObjects.Image} */
        this.action_button;
        /** @type {Phaser.GameObjects.Image} */
        this.action_icon;
        /** @type {Phaser.GameObjects.Image} */
        this.snowball_button;
        /** @type {Phaser.GameObjects.Image} */
        this.snowball_icon;
        /** @type {Phaser.GameObjects.Image} */
        this.chat_send_button;
        /** @type {Phaser.GameObjects.Image} */
        this.chat_send_icon;
        /** @type {Phaser.GameObjects.Image} */
        this.player_button;
        /** @type {Phaser.GameObjects.Image} */
        this.badge_member;
        /** @type {Phaser.GameObjects.Image} */
        this.buddies_button;
        /** @type {Phaser.GameObjects.Image} */
        this.buddies_icon;
        /** @type {Phaser.GameObjects.Image} */
        this.igloo_button;
        /** @type {Phaser.GameObjects.Image} */
        this.igloo_icon;
        /** @type {Phaser.GameObjects.Image} */
        this.help_button;
        /** @type {Phaser.GameObjects.Image} */
        this.help_icon;
        /** @type {Phaser.GameObjects.Container} */
        this.onlinePopup;
        /** @type {Phaser.GameObjects.Image} */
        this.popup;
        /** @type {Phaser.GameObjects.Text} */
        this.popupText;
        /** @type {ChatLog} */
        this.chatLog;
        /** @type {Phaser.GameObjects.Image} */
        this.crosshair;
        /** @type {Phaser.GameObjects.Image} */
        this.request_button;
        /** @type {Phaser.GameObjects.Sprite} */
        this.mail_btn;
        /** @type {Phaser.GameObjects.Image} */
        this.news_button;
        /** @type {Phaser.GameObjects.Container} */
        this.mod_btn;
        /** @type {Phaser.GameObjects.Image} */
        this.mod_button;
        /** @type {Phaser.GameObjects.Sprite} */
        this.mod_m;
        /** @type {Phaser.GameObjects.Layer} */
        this.widgetLayer;
        /** @type {Buddy} */
        this.buddy;
        /** @type {PlayerCard} */
        this.playerCard;
        /** @type {Settings} */
        this.settings;
        /** @type {Manage} */
        this.manage;
        /** @type {ActionsMenu} */
        this.actionsMenu;
        /** @type {EmotesMenu} */
        this.emotesMenu;
        /** @type {Safe} */
        this.safe;
        /** @type {PufflesMenu} */
        this.pufflesMenu;
        /** @type {Waddle} */
        this.waddle;
        /** @type {FindFour} */
        this.findFour;
        /** @type {Phaser.GameObjects.Image} */
        this.chat_button;
        /** @type {Phaser.GameObjects.Image} */
        this.chat_icon;
        /** @type {Phaser.GameObjects.Container} */
        this.stampEarned;
        /** @type {Phaser.GameObjects.Image} */
        this.stampEarnedBg;
        /** @type {Phaser.GameObjects.Image} */
        this.stampEarnedImage;
        /** @type {Phaser.GameObjects.Text} */
        this.stampEarnedHeader;
        /** @type {Phaser.GameObjects.Text} */
        this.stampEarnedBody;
        /** @type {PuffleCare} */
        this.puffleCare;
        /** @type {Elevator} */
        this.elevator;
        /** @type {Cavepopup} */
        this.cavepopup;
        /** @type {Phaser.GameObjects.Image} */
        this.log;
        /** @type {Telescope} */
        this.telescope;
        /** @type {Phaser.GameObjects.Container} */
        this.popup_coins;
        /** @type {Phaser.GameObjects.Text} */
        this.popup_coin_text;
        /** @type {Phaser.GameObjects.Container} */
        this.popup_items;
        /** @type {Phaser.GameObjects.Text} */
        this.popup_items_text;
        /** @type {Changelog} */
        this.changelog;
        /** @type {Rules} */
        this.rules;
        /** @type {ModActions} */
        this.modActions;
        /** @type {Snitch} */
        this.snitch;
        /** @type {Moderator} */
        this.moderator;
        /** @type {Halloween} */
        this.halloween;
        /** @type {Gary} */
        this.gary;
        /** @type {Array<PlayerCard|Buddy>} */
        this.hideOnSleep;
        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Sprite|ChatLog>} */
        this.interfaceList;


        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _create() {

        // pinContainer
        const pinContainer = this.add.container(0, 5);

        // chatbar_png
        const chatbar_png = this.add.image(760, 915, "chatbar", "chatbar.png");
        chatbar_png.visible = false;

        // s_mbolo_23
        const s_mbolo_23 = this.add.image(760, 915, "newinterface", "Símbolo 23");
        s_mbolo_23.scaleX = 0.65;
        s_mbolo_23.scaleY = 0.75;

        // snow
        const snow = this.add.image(760, 879, "newinterface", "snow");
        snow.scaleX = 0.65;
        snow.scaleY = 0.75;

        // chat_box
        const chat_box = this.add.image(748, 915, "main", "chat-box");

        // puffle_button_disabled
        const puffle_button_disabled = this.add.image(246, 916, "main", "blue-button-disabled");

        // puffle_button
        const puffle_button = this.add.sprite(246, 916, "main", "blue-button");
        puffle_button.visible = false;

        // puffle_icon
        const puffle_icon = this.add.image(245, 915, "main", "puffle-icon-disabled");

        // emote_button
        const emote_button = this.add.image(306, 917, "main", "blue-button");

        // emote_icon
        const emote_icon = this.add.image(306, 915, "chatbar", "emotes.png");
        emote_icon.visible = false;

        // action_button
        const action_button = this.add.image(366, 917, "main", "blue-button");

        // action_icon
        const action_icon = this.add.image(366, 913, "main", "action-icon");
        action_icon.visible = false;

        // snowball_button
        const snowball_button = this.add.image(426, 917, "main", "blue-button");

        // snowball_icon
        const snowball_icon = this.add.image(426, 917, "main", "snowball-icon");
        snowball_icon.visible = false;

        // chat_send_button
        const chat_send_button = this.add.image(1026, 917, "main", "blue-button");

        // chat_send_icon
        const chat_send_icon = this.add.image(1027, 915, "main", "chat-send0001");
        chat_send_icon.visible = false;

        // player_button
        const player_button = this.add.image(1086, 917, "main", "blue-button");

        // badge_member
        const badge_member = this.add.image(1086, 914, "chatbar", "playercard0001.png");
        badge_member.visible = false;

        // buddies_button
        const buddies_button = this.add.image(1146, 917, "main", "blue-button");

        // buddies_icon
        const buddies_icon = this.add.image(1146, 915, "main", "buddies-icon");
        buddies_icon.visible = false;

        // igloo_button
        const igloo_button = this.add.image(1206, 917, "main", "blue-button");

        // igloo_icon
        const igloo_icon = this.add.image(1206, 915, "main", "igloo-icon");
        igloo_icon.visible = false;

        // help_button
        const help_button = this.add.image(1266, 917, "main", "blue-button");

        // emotes_1
        const emotes_1 = this.add.image(306, 915, "newinterface", "emotes");
        emotes_1.scaleX = 0.4;
        emotes_1.scaleY = 0.4;

        // actions_1
        const actions_1 = this.add.image(366, 915, "newinterface", "actions");
        actions_1.scaleX = 0.4;
        actions_1.scaleY = 0.4;

        // snowball
        const snowball = this.add.image(426, 915, "newinterface", "snowball");
        snowball.scaleX = 0.4;
        snowball.scaleY = 0.4;

        // player
        const player = this.add.image(1086, 915, "newinterface", "player");
        player.scaleX = 0.4;
        player.scaleY = 0.4;

        // buddies_1
        const buddies_1 = this.add.image(1146, 915, "newinterface", "buddies");
        buddies_1.scaleX = 0.4;
        buddies_1.scaleY = 0.4;

        // igloo
        const igloo = this.add.image(1206, 915, "newinterface", "igloo");
        igloo.scaleX = 0.4;
        igloo.scaleY = 0.4;

        // account_1
        const account_1 = this.add.image(1266, 915, "newinterface", "account");
        account_1.scaleX = 0.4;
        account_1.scaleY = 0.4;

        // send
        const send = this.add.image(1026, 915, "newinterface", "send");
        send.scaleX = 0.6;
        send.scaleY = 0.8;
        send.flipX = true;

        // help_icon
        const help_icon = this.add.image(1266, 915, "main", "help-icon");
        help_icon.visible = false;

        // onlinePopup
        const onlinePopup = this.add.container(1155, 858);
        onlinePopup.visible = false;

        // popup
        const popup = this.add.image(0, 11, "main", "buddy-online");
        onlinePopup.add(popup);

        // popupText
        const popupText = this.add.text(-6, 0, "", {});
        popupText.setOrigin(0.5, 0.5);
        popupText.setStyle({ "align": "center", "color": "#000000", "fixedWidth":380,"fontFamily": "Burbank Small", "fontSize": "24px" });
        onlinePopup.add(popupText);

        // chatLog
        const chatLog = new ChatLog(this, 760, 10);
        this.add.existing(chatLog);

        // crosshair
        const crosshair = this.add.image(0, 1100, "main", "crosshair");
        crosshair.visible = false;

        // request_button
        const request_button = this.add.image(269, 73, "main", "buddy-button");
        request_button.visible = false;

        // mail_btn
        const mail_btn = this.add.sprite(170, 59, "main", "mail-button");

        // news_button
        const news_button = this.add.image(70, 71, "main", "news-button");

        // mod_btn
        const mod_btn = this.add.container(1451, 71);

        // mod_button
        const mod_button = this.add.image(0, 2, "main", "mod/button");
        mod_btn.add(mod_button);

        // mod_m
        const mod_m = this.add.sprite(0, 1, "main", "mod/m");
        mod_btn.add(mod_m);

        // widgetLayer
        const widgetLayer = this.add.layer();

        // buddy
        const buddy = new Buddy(this, 1140, 436);
        buddy.visible = false;
        widgetLayer.add(buddy);

        // playerCard
        const playerCard = new PlayerCard(this, 446, 436);
        playerCard.visible = false;
        widgetLayer.add(playerCard);

        // settings
        const settings = new Settings(this, 760, 482);
        this.add.existing(settings);
        settings.visible = false;

        // manage
        const manage = new Manage(this, 760, 482);
        this.add.existing(manage);
        manage.visible = false;

        // actionsMenu
        const actionsMenu = new ActionsMenu(this, 366, 873);
        this.add.existing(actionsMenu);
        actionsMenu.visible = false;

        // emotesMenu
        const emotesMenu = new EmotesMenu(this, 306, 906);
        this.add.existing(emotesMenu);
        emotesMenu.visible = false;

        // safe
        const safe = new Safe(this, 246, 925);
        this.add.existing(safe);
        safe.visible = false;

        // pufflesMenu
        const pufflesMenu = new PufflesMenu(this, 246, 858);
        this.add.existing(pufflesMenu);
        pufflesMenu.visible = false;

        // waddle
        const waddle = new Waddle(this, 733, 422);
        this.add.existing(waddle);
        waddle.visible = false;

        // findFour
        const findFour = new FindFour(this, 736, 472);
        this.add.existing(findFour);
        findFour.visible = false;

        // chat_button
        const chat_button = this.add.image(486, 916, "main", "blue-button");

        // chat_icon
        const chat_icon = this.add.image(486, 915, "main", "chat-icon");

        // stampEarned
        const stampEarned = this.add.container(933, -150);

        // stampEarnedBg
        const stampEarnedBg = this.add.image(196, 0, "main", "stamps/bg");
        stampEarnedBg.alpha = 0.7;
        stampEarnedBg.alphaTopLeft = 0.7;
        stampEarnedBg.alphaTopRight = 0.7;
        stampEarnedBg.alphaBottomLeft = 0.7;
        stampEarnedBg.alphaBottomRight = 0.7;
        stampEarned.add(stampEarnedBg);

        // stampEarnedImage
        const stampEarnedImage = this.add.image(0, 70, "main", "stamps/activities0001");
        stampEarned.add(stampEarnedImage);

        // stampEarnedHeader
        const stampEarnedHeader = this.add.text(88, 25, "", {});
        stampEarnedHeader.text = "STAMP EARNED!";
        stampEarnedHeader.setStyle({ "fixedWidth":380,"fontFamily": "Burbank Small", "fontSize": "40px", "fontStyle": "bold italic" });
        stampEarned.add(stampEarnedHeader);

        // stampEarnedBody
        const stampEarnedBody = this.add.text(90, 80, "", {});
        stampEarnedBody.text = "Stamp Name";
        stampEarnedBody.setStyle({ "fixedWidth":380,"fontFamily": "Burbank Small", "fontSize": "35px" });
        stampEarned.add(stampEarnedBody);

        // puffleCare
        const puffleCare = new PuffleCare(this, 500, 583);
        this.add.existing(puffleCare);
        puffleCare.visible = false;

        // elevator
        const elevator = new Elevator(this, 27, 35);
        this.add.existing(elevator);
        elevator.visible = false;

        // newInterface
        const newInterface = this.add.container(0, -4);

        // map
        const map = this.add.image(93, 890, "newinterface", "map");
        map.scaleX = 0.6;
        map.scaleY = 0.6;

        // cavepopup
        const cavepopup = new Cavepopup(this, 16, -11);
        this.add.existing(cavepopup);
        cavepopup.visible = false;

        // log
        const log = this.add.image(68, 177, "newinterface", "log");
        log.scaleX = 0.5;
        log.scaleY = 0.5;
        log.visible = false;

        // telescope
        const telescope = new Telescope(this, 708, 249.00000000000003);
        this.add.existing(telescope);
        telescope.visible = false;

        // popup_coins
        const popup_coins = this.add.container(727, -106);

        // popup_coins_img
        const popup_coins_img = this.add.image(355, 33, "dig_popup", "popup_coins");
        popup_coins_img.alpha = 0.975;
        popup_coins_img.alphaTopLeft = 0.975;
        popup_coins_img.alphaTopRight = 0.975;
        popup_coins_img.alphaBottomLeft = 0.975;
        popup_coins_img.alphaBottomRight = 0.975;
        popup_coins.add(popup_coins_img);

        // popup_coin_text
        const popup_coin_text = this.add.text(364, 50, "", {});
        popup_coin_text.setOrigin(0.5043533631538751, 0.5785350741718311);
        popup_coin_text.alpha = 0.975;
        popup_coin_text.alphaTopLeft = 0.975;
        popup_coin_text.alphaTopRight = 0.975;
        popup_coin_text.alphaBottomLeft = 0.975;
        popup_coin_text.alphaBottomRight = 0.975;
        popup_coin_text.text = "You've earned XXXX Coins! ";
        popup_coin_text.setStyle({ "align": "center", "color": "#ffffffff", "fontFamily": "Burbank Small", "fontSize": "45px", "fontStyle": "bold italic", "stroke": "#b08f34ff", "strokeThickness":5,"shadow.offsetY":5,"shadow.color": "#000000ff", "shadow.stroke":true});
        popup_coins.add(popup_coin_text);

        // popup_items
        const popup_items = this.add.container(948, -188);
        popup_items.visible = false;

        // popup_items_img
        const popup_items_img = this.add.image(141, 48, "dig_popup", "popup_items");
        popup_items.add(popup_items_img);

        // popup_items_text
        const popup_items_text = this.add.text(0, 0, "", {});
        popup_items_text.text = "####################\nHas been Unlocked";
        popup_items_text.setStyle({ "fontFamily": "Burbank Small", "fontSize": "42px" });
        popup_items.add(popup_items_text);

        // changelog
        const changelog = new Changelog(this, 504, 304);
        this.add.existing(changelog);
        changelog.visible = false;

        // rules
        const rules = new Rules(this, 83, -48);
        this.add.existing(rules);
        rules.visible = false;

        // modActions
        const modActions = new ModActions(this, 760, 461);
        this.add.existing(modActions);
        modActions.visible = false;

        // snitch
        const snitch = new Snitch(this, 760, 487);
        this.add.existing(snitch);
        snitch.visible = false;

        // moderator
        const moderator = new Moderator(this, 760, 481);
        this.add.existing(moderator);
        moderator.visible = false;

        // icon_1
        const icon_1 = this.add.image(1344, 73, "newinterface", "icon");
        icon_1.scaleX = 0.5;
        icon_1.scaleY = 0.5;

        // halloween
        const halloween = new Halloween(this, 538, 452);
        this.add.existing(halloween);
        halloween.visible = false;

        // gary
        const gary = new Gary(this, 264, 683);
        this.add.existing(gary);

        // lists
        const hideOnSleep = [playerCard, buddy];
        const interfaceList = [help_icon, help_button, igloo_icon, igloo_button, buddies_icon, buddies_button, player_button, chat_send_icon, chat_send_button, snowball_icon, snowball_button, action_icon, action_button, emote_button, puffle_icon, puffle_button_disabled, chat_box, news_button, mod_m, chatLog, badge_member, emote_icon];

        // s_mbolo_23 (components)
        new Interactive(s_mbolo_23);

        // chat_box (components)
        new Interactive(chat_box);

        // puffle_button (components)
        const puffle_buttonButton = new Button(puffle_button);
        puffle_buttonButton.spriteName = "blue-button";
        puffle_buttonButton.callback = () => this.openPuffleMenu();

        // emote_button (components)
        const emote_buttonButton = new Button(emote_button);
        emote_buttonButton.spriteName = "blue-button";
        emote_buttonButton.callback = () => this.emotesMenu.visible = true;
        const emote_buttonShowHint = new ShowHint(emote_button);
        emote_buttonShowHint.text = "Emotes";

        // action_button (components)
        const action_buttonButton = new Button(action_button);
        action_buttonButton.spriteName = "blue-button";
        action_buttonButton.callback = () => this.actionsMenu.visible = true;
        const action_buttonShowHint = new ShowHint(action_button);
        action_buttonShowHint.text = "Actions";

        // snowball_button (components)
        const snowball_buttonButton = new Button(snowball_button);
        snowball_buttonButton.spriteName = "blue-button";
        snowball_buttonButton.callback = () => this.onSnowballClick();
        const snowball_buttonShowHint = new ShowHint(snowball_button);
        snowball_buttonShowHint.text = "Snowball";

        // chat_send_button (components)
        const chat_send_buttonButton = new Button(chat_send_button);
        chat_send_buttonButton.spriteName = "blue-button";
        chat_send_buttonButton.callback = () => this.onChatSend();
        const chat_send_buttonShowHint = new ShowHint(chat_send_button);
        chat_send_buttonShowHint.text = "Send";

        // player_button (components)
        const player_buttonButton = new Button(player_button);
        player_buttonButton.spriteName = "blue-button";
        player_buttonButton.callback = () => this.onPlayerClick();
        const player_buttonShowHint = new ShowHint(player_button);
        player_buttonShowHint.text = "Edit Player";

        // buddies_button (components)
        const buddies_buttonButton = new Button(buddies_button);
        buddies_buttonButton.spriteName = "blue-button";
        buddies_buttonButton.callback = () => this.onBuddyClick();
        const buddies_buttonShowHint = new ShowHint(buddies_button);
        buddies_buttonShowHint.text = "Show Buddies";

        // igloo_button (components)
        const igloo_buttonButton = new Button(igloo_button);
        igloo_buttonButton.spriteName = "blue-button";
        igloo_buttonButton.callback = () => this.onIglooClick();
        const igloo_buttonShowHint = new ShowHint(igloo_button);
        igloo_buttonShowHint.text = "Your Home";

        // help_button (components)
        const help_buttonButton = new Button(help_button);
        help_buttonButton.spriteName = "blue-button";
        help_buttonButton.callback = () => { this.settings.visible = true };
        const help_buttonShowHint = new ShowHint(help_button);
        help_buttonShowHint.text = "Edit Account";

        // crosshair (components)
        const crosshairSimpleButton = new SimpleButton(crosshair);
        crosshairSimpleButton.callback = () => this.onCrosshairClick();

        // request_button (components)
        const request_buttonButton = new Button(request_button);
        request_buttonButton.spriteName = "buddy-button";
        request_buttonButton.callback = () => this.onRequestClick();
        request_buttonButton.activeFrame = false;

        // mail_btn (components)
        const mail_btnButton = new Button(mail_btn);
        mail_btnButton.spriteName = "mail-button";
        mail_btnButton.callback = () => {this.world.RuffleManager.handleLoadOtherSwf("mail.swf")};
        mail_btnButton.activeFrame = false;

        // news_button (components)
        const news_buttonButton = new Button(news_button);
        news_buttonButton.spriteName = "news-button";
        news_buttonButton.callback = () => window.open('https://discord.com/invite/2JwJ7JjVeb', '_blank').focus();;
        news_buttonButton.activeFrame = false;

        // mod_button (components)
        const mod_buttonSimpleButton = new SimpleButton(mod_button);
        mod_buttonSimpleButton.hoverCallback = () => this.onModOver();
        mod_buttonSimpleButton.hoverOutCallback = () => this.onModOut();
        mod_buttonSimpleButton.callback = () => this.rules.visible = true;

        // chat_button (components)
        const chat_buttonButton = new Button(chat_button);
        chat_buttonButton.spriteName = "blue-button";
        chat_buttonButton.callback = () => this.safe.visible = true;
        const chat_buttonShowHint = new ShowHint(chat_button);
        chat_buttonShowHint.text = "Messages";

        // map (components)
        const mapButton = new Button(map);
        mapButton.spriteName = "map";
        mapButton.callback = () => this.map.visible = true;

        // log (components)
        const logButton = new Button(log);
        logButton.spriteName = "log";
        logButton.callback = () => this.world.network.send('get_unverified_users');
        logButton.activeFrame = false;

        // icon_1 (components)
        const icon_1Button = new Button(icon_1);
        icon_1Button.spriteName = "icon";
        icon_1Button.callback = () => this.halloween.visible = true;

        this.pinContainer = pinContainer;
        this.chat_box = chat_box;
        this.puffle_button_disabled = puffle_button_disabled;
        this.puffle_button = puffle_button;
        this.puffle_icon = puffle_icon;
        this.emote_button = emote_button;
        this.action_button = action_button;
        this.action_icon = action_icon;
        this.snowball_button = snowball_button;
        this.snowball_icon = snowball_icon;
        this.chat_send_button = chat_send_button;
        this.chat_send_icon = chat_send_icon;
        this.player_button = player_button;
        this.badge_member = badge_member;
        this.buddies_button = buddies_button;
        this.buddies_icon = buddies_icon;
        this.igloo_button = igloo_button;
        this.igloo_icon = igloo_icon;
        this.help_button = help_button;
        this.help_icon = help_icon;
        this.onlinePopup = onlinePopup;
        this.popup = popup;
        this.popupText = popupText;
        this.chatLog = chatLog;
        this.crosshair = crosshair;
        this.request_button = request_button;
        this.mail_btn = mail_btn;
        this.news_button = news_button;
        this.mod_btn = mod_btn;
        this.mod_button = mod_button;
        this.mod_m = mod_m;
        this.widgetLayer = widgetLayer;
        this.buddy = buddy;
        this.playerCard = playerCard;
        this.settings = settings;
        this.manage = manage;
        this.actionsMenu = actionsMenu;
        this.emotesMenu = emotesMenu;
        this.safe = safe;
        this.pufflesMenu = pufflesMenu;
        this.waddle = waddle;
        this.findFour = findFour;
        this.chat_button = chat_button;
        this.chat_icon = chat_icon;
        this.stampEarned = stampEarned;
        this.stampEarnedBg = stampEarnedBg;
        this.stampEarnedImage = stampEarnedImage;
        this.stampEarnedHeader = stampEarnedHeader;
        this.stampEarnedBody = stampEarnedBody;
        this.puffleCare = puffleCare;
        this.elevator = elevator;
        this.cavepopup = cavepopup;
        this.log = log;
        this.telescope = telescope;
        this.popup_coins = popup_coins;
        this.popup_coin_text = popup_coin_text;
        this.popup_items = popup_items;
        this.popup_items_text = popup_items_text;
        this.changelog = changelog;
        this.rules = rules;
        this.modActions = modActions;
        this.snitch = snitch;
        this.moderator = moderator;
        this.halloween = halloween;
        this.gary = gary;
        this.hideOnSleep = hideOnSleep;
        this.interfaceList = interfaceList;
        
        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create() {

        this._create()

        // map
        const map = (localStorage.clientMode == 'vanilla') ? new NewMap(this, 760, 460) : new Map(this, 760, 460)
        this.add.existing(map);
        map.visible = false;
        this.map = map;

        this.events.on('sleep', this.onSleep, this)

        if (this.world.client.penguin.rank > 4){
            this.log.visible = true
        }

        this.setupWidgets()

        // Factories

        this.balloonFactory = new BalloonFactory(this)
        this.snowballFactory = new SnowballFactory(this.world)

        // Hints

        this.hint = new Hint(this, 0, 0)
        this.add.existing(this.hint)
        this.hideOnSleep.push(this.hint)
        this.hint.visible = false

        // Buddy requests

        this.requests = []

        // Chat input

        let style = {
            width: 480,
            height: 50,
            fontFamily: 'Burbank Small',
            fontSize: 24,
            color: '#fff'
        }

        this.chatInput = (this.world.client.penguin.rank > 3) ? new TextInput(this, 770, 915, 'text', style, () => this.onChatSend(), 192, true, 'chat', true, true) : new TextInput(this, 755, 931, 'text', style, () => this.onChatSend(), 48, true, 'chat', false, false)
        this.add.existing(this.chatInput)

        // Mod search

        let searchstyle = {
            width: 250,
            height: 50,
            fontFamily: 'Burbank Small',
            fontSize: 24,
            color: '#fff',
            visibility: 'hidden'
        }

        this.search = new TextInput(this, 814, 118, 'text', searchstyle, () => this.onSearch(), 48, true, 'search', false, true)

        // Mod actions

        let actionsstyle = {
            width: 200,
            height: 30,
            fontFamily: 'Burbank Small',
            fontSize: 20,
            color: '#fff',
            visibility: 'hidden'
        }

        this.addcoins = new TextInput(this, 974, 322, 'number', actionsstyle, () => this.modActions.handleAddCoins(), 48, true, 'addcoins')
        this.additems = new TextInput(this, 974, 427, 'number', actionsstyle, () => this.modActions.handleAddItems(), 48, true, 'additems')
        this.changeusername = new TextInput(this, 974, 639, 'text', actionsstyle, () => this.modActions.handleChangeUsername(), 48, true, 'changeusername', false, true)

        let managestyle = {
            width: 250,
            height: 37.5,
            fontFamily: 'Burbank Small',
            fontSize: 25,
            color: '#fff',
            visibility: 'hidden'
        }

        this.newuser = new TextInput(this, 600, 352, 'text', managestyle, null, 48, true, 'newuser', false, true)
        this.newuserconfirm = new TextInput(this, 600, 459, 'text', managestyle, null, 48, true, 'newuserconfirm', false, true)
        this.newpass = new TextInput(this, 920, 352, 'text', managestyle, null, 48, true, 'newpass', true)
        this.newpassconfirm = new TextInput(this, 920, 459, 'text', managestyle, null, 48, true, 'newpassconfirm', true)


        if (this.world.client.penguin.rank > 3) {
            this.add.existing(this.addcoins)
            this.add.existing(this.additems)
            this.add.existing(this.changeusername)

            this.add.existing(this.search)
        }

        this.add.existing(this.newuser)
        this.add.existing(this.newuserconfirm)
        this.add.existing(this.newpass)
        this.add.existing(this.newpassconfirm)

        // Input

        this.input.keyboard.on('keydown-TAB', (event) => this.onChatKeyDown(event))
        this.input.keyboard.on('keydown-ENTER', (event) => this.onChatKeyDown(event))

        // Anims

        let anims = this.cache.json.get('main-anims')
        this.anims.fromJSON(anims)

        // Window functions

        window.hide = this.hide
        window.hide = hide.bind(this)

        window.show = this.show
        window.show = show.bind(this)

        this.network.send("puffle_timeout");

        // init partycontroller

        // this.world.party.getPartyCompletion()
    }

    onSleep(sys, data) {
        if (data.clearChat) {
            this.chatInput.clearText()
            this.chatLog.clearMessages()
        }

        if (this.chatLog.open) {
            this.chatLog.onTabClick()
        }

        this.stopCrosshair()

        this.waddle.activeSeat = null

        this.interface.prompt.hideAll()

        for (let item of this.hideOnSleep) {
            item.visible = false
        }
        this.map.iglooMap.visible = false
    }

    setupWidgets() {
        for (let widget of this.widgetLayer.list) {
            if (widget.__DraggableContainer) {
                widget.__DraggableContainer.widgetLayer = this.widgetLayer
            }
        }
    }

    showWidget(widget) {
        this.widgetLayer.bringToTop(widget)
        widget.visible = true
    }

    onSnowballClick() {
        this.crosshair.visible = true
        this.crosshair.x = this.input.x
        this.crosshair.y = this.input.y
    }

    onCrosshairMove(pointer) {
        this.crosshair.x = Math.round(pointer.x)
        this.crosshair.y = Math.round(pointer.y)
    }

    onCrosshairClick() {
        this.stopCrosshair()
        this.world.client.sendSnowball(this.crosshair.x, this.crosshair.y)
    }

    stopCrosshair() {
        this.crosshair.visible = false
    }

    onChatKeyDown(event) {
        // Prevent default to stop tab switching elements
        event.preventDefault()

        this.chatInput.setFocus()
    }


    onChatSend() {
        let text = this.chatInput.text
        text = text.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');
        text = text.replace(/[^¡!¿?-_/.,0-9a-zñáéíóúüçöêôîęėēįīºõøœōūâ|ªãåąæāÚÜÓÁÉÍÑÓûïëä ]+/g,"");
        text = text.replace("   ", "")

        if (text.replace(" ", "").length < 1) return;

        this.chatInput.clearText()

        this.network.send('send_message', { message: text })

        this.game.scene.getScene('InterfaceController')
            .showTextBalloon(this.world.client.penguin.id, text)
    }

    onSearch() {
        let text = this.search.text

        this.search.clearText()

        this.network.send('get_user_info', { username: text })
    }

    onPlayerClick() {
        this.playerCard.showCard(this.world.client.id)
    }

    onBuddyClick() {
        this.showWidget(this.buddy)
        this.buddy.showPage()
    }

    onIglooClick() {
        this.world.client.sendJoinIgloo(this.world.client.id)
    }

    onRequestClick() {
        let request = this.requests.shift()
        if (this.requests.length < 1) this.request_button.visible = false
        if (!request) return

        if (request.requester) {
            // Show buddy accept prompt
            this.showAccept(request)
        } else {
            // Show buddy request prompt
            this.showRequest(request)
        }
    }

    showAccept(request) {
        let text = `${request.username} is now your buddy!`

        this.interface.prompt.showWindow(text, 'single')
    }

    showRequest(request) {
        let text = `${request.username} has asked to be your buddy.\nDo you accept?`

        this.interface.prompt.showWindow(text, 'dual', () => {
            this.network.send('buddy_accept', request)
            this.interface.prompt.window.visible = false

        }, () => {
            this.network.send('buddy_reject', { id: request.id })
            this.interface.prompt.window.visible = false
        })
    }

    addRequest(request) {
        // Prevent duplicate requests
        if (this.requests.some(item => item.id == request.id && !item.requester)) return

        this.requests.push(request)

        this.request_button.visible = true
        this.bounce(this.request_button)
    }

    showOnlinePopup(username) {
        let text = `${username} is online`
        let texture = (text.length > 18) ? 'buddy-online-large' : 'buddy-online'

        this.popupText.text = text
        this.popup.setTexture('main', texture)

        this.onlinePopup.visible = true
        this.bounce(this.onlinePopup, 20)

        // Hide popup after 10 seconds
        this.time.addEvent({
            delay: 10000,
            callback: () => this.onlinePopup.visible = false
        })
    }

    bounce(gameObject, from = -100) {
        if (!gameObject.startY) gameObject.startY = gameObject.y

        this.tweens.add({
            targets: gameObject,
            y: {
                from: gameObject.startY + from,
                to: gameObject.startY
            },
            ease: 'Bounce',
            duration: 200
        })
    }

    onModOver() {
        this.mod_m.play('mod_button')
    }

    onModOut() {
        this.mod_m.stop()
        this.mod_m.setFrame('mod/m')
    }

    onModClick() {
        this.onModOut()
        this.moderator.visible = true
        this.moderator.load()
    }

    onEasterClick() {
        this.eastBoard.visible = true
    }

    unimplementedPrompt(){
        let prompt = this.game.scene.getScene('InterfaceController').prompt
        prompt.showError('This feature is not yet implemented!\UPNewlands is in development, and is being\nactively updated. Check back soon!',)
    }

    hide(){
        for (let item of this.interfaceList) {
            item.visible = false
        }

        this.input.keyboard.on('keydown-TAB', (event) => null)
        this.input.keyboard.on('keydown-ENTER', (event) => null)

        this.world.client.blockKeys()

        try {
              for (let penguin of Object.values(this.world.room.penguins)) {
                penguin.visible = false
                penguin.nameTag.visible = false
            }
        }

        catch(err) {
              console.error(err)
        }


    }

    show(){
        for (let item of this.interfaceList) {
            item.visible = true
        }

        this.mod_btn.visible = false
        this.log.visible = false
        this.input.keyboard.on('keydown-TAB', (event) => this.onChatKeyDown(event))
        this.input.keyboard.on('keydown-ENTER', (event) => this.onChatKeyDown(event))

        this.world.client.initKeys()

        try {
              for (let penguin of Object.values(this.world.room.penguins)) {
                penguin.visible = true
                penguin.nameTag.visible = true
            }
        }

        catch(err) {
              console.error(err)
        }
    }

    stampTween() {
        let tween = this.tweens.add({
            targets: this.stampEarned,
            y: 0,
            delay: 1000,
            duration: 300,
            onComplete: () => this.onStampTweenComplete()
        });
    }

    onCoinDigtween() {
        let tween = this.tweens.add({
            targets: this.popup_coins,
            y: 0,
            delay: 2000,
            duration: 500,
            onComplete: () => this.onCoinTweenComplete()
        });
    }

    onItemDigtween() {
        let tween = this.tweens.add({
            targets: this.popup_items,
            y: 0,
            delay: 1000,
            duration: 300,
            onComplete: () => this.onItemTweenComplete()
        });
    }

    onCoinTweenComplete() {
        let tween = this.tweens.add({
            targets: this.popup_coins,
            y: -110,
            delay: 2000,
            duration: 500,
        });
    }

    onItemTweenComplete() {
        let tween = this.tweens.add({
            targets: this.popup_items,
            y: -186,
            delay: 1500,
            duration: 300,
        });
    }

    onStampTweenComplete() {
        let tween = this.tweens.add({
            targets: this.stampEarned,
            y: -150,
            delay: 1500,
            duration: 300,
        });
    }

    onPIntOver(){
        this.party_interface.scaleX = 0.5
        this.party_interface.scaleY= 0.5
    }

    onPIntOut(){
        this.party_interface.scaleX = 0.4
        this.party_interface.scaleY= 0.4
    }

    onPuffleClick(){

    }

    openPuffleMenu() {
        this.network.send("puffle_timeout");
        if (this.world.client.penguin.puffleTimeout === undefined) {
            this.world.client.penguin.puffleTimeout = true;
        }        

        this.pufflesMenu.disableDigging(this.world.client.penguin.puffleTimeout)
        this.pufflesMenu.visible = true

    }


    showPuffle(color) {
        if (color === 0) {
            this.puffle_icon.setFrame("puffle-icon-disabled")
            this.puffle_button_disabled.visible = true
            this.puffle_button.visible = false
        }
        else{
            this.puffle_icon.setFrame(`puffle-icon-${color}`)
            this.puffle_button_disabled.visible = false
            this.puffle_button.visible = true
        }
    }
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */