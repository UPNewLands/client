import Plugin from '../Plugin'


export default class MiniGame extends Plugin {

    constructor(network) {
        super(network)
        this.events = {
            'start_game': this.startGame,
            'send_move': this.sendMove,
            'game_over': this.gameOver,
			'end_ruffle_mingame': this.endRuffleMinigame,
			'check_legit': this.checkLegit,
            'init_four': this.initFour,
			'place_counter': this.placeCounter,
			'change_turn': this.changeTurn,
			'four_over': this.fourOver
        }
    }
	
	get client() {
        return this.world.client
    }

    startGame(args) {
        this.world.room.handleStartGame(args)
    }

    sendMove(args) {
        this.world.room.handleSendMove(args)
    }

    gameOver(args) {
        this.world.client.coins = args.coins

        this.interface.refreshPlayerCard()
        this.interface.updateCatalogCoins(args.coins)
    }
	
	endRuffleMinigame(args){
		this.client.coins = args.coins
		let prompt = this.world.game.scene.getScene('InterfaceController').prompt
		if (args.coinsEarned == null){
			args.coinsEarned = 0
		}
        prompt.showCoin(args.game, args.coinsEarned)
	}
	
	checkLegit(args) {
		let ruffleplayer = document.getElementsByTagName("ruffle-player")[0]
		this.network.send('check_legit', { coins: ruffleplayer.checkCoins(), game: args.game })
		ruffleplayer.pause()
	}

    initFour(args) {
        this.interface.main.findFour.init(args.users, args.turn)
    }
	
	placeCounter(args) {
		let colour;
		if (args.user == this.world.client.id) { colour = this.interface.main.findFour.seat + 1 }
		else if ( this.interface.main.findFour.seat == 0 ) { colour = 2 }
		else { colour = 1 }
		
		this.interface.main.findFour.placeCounter(args.row, args.column, colour)
	}
	
	changeTurn(args) {
		this.interface.main.findFour.changeTurn(args.turn)
	}
	
	fourOver(args) {
		this.interface.main.findFour.reset()
	}

}
