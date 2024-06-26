import Plugin from '../Plugin'


export default class Puffles extends Plugin {

    constructor(network) {
        super(network)
        this.events = {
            'get_puffles': this.getPuffles,
            'get_wellbeing': this.getWellbeing,
            'get_puffle_color': this.getPuffleColor,
            'stop_walking': this.stopWalking,
            'walk_puffle': this.walkPuffle,
            'get_puffle_count': this.getPuffleCount,
            'adopt_puffle': this.adoptPuffle,
            'play_puffle_anim': this.sendPuffleAnim,
            'puffle_timeout' : this.timeout,
            'puffle_dig': this.puffleDig,
        }
    }

    get room() {
        return this.world.room
    }

    timeout(args) {
        this.world.client.penguin.puffleTimeout = args.timeout
    }

    puffleDig(args) {
        this.network.send("puffle_timeout")
        if (args.type == "coins") {
            this.world.interface.main.popup_coin_text.text = `You've earned ${args.coins} Coins!`
            this.world.interface.main.onCoinDigtween()
            this.world.client.coins = this.world.client.coins + args.coins

            this.interface.refreshPlayerCard()
            this.interface.updateCatalogCoins(this.world.client.coins)
        }

    }

    getPuffles(args) {
        if (!this.world.room.isIgloo) return
        this.world.room.spawnPuffles(args.puffles)
    }

    getWellbeing(args) {
        if (!this.world.room.isIgloo) return
        if (args.puffleId == this.world.client.penguin.puffle) {
            this.interface.main.puffleCare.showPuffle(args, true)
            this.interface.main.puffleCare.x = this.world.client.penguin.x + 60
            this.interface.main.puffleCare.y = this.world.client.penguin.y
        }
        else {
            this.interface.main.puffleCare.showPuffle(args)
            this.interface.main.puffleCare.x = this.world.room.puffles[args.puffleId].x
            this.interface.main.puffleCare.y = this.world.room.puffles[args.puffleId].y
        }
    }

    getPuffleColor(args) {
        if (!this.world.room) return
        let penguin = this.world.room.penguins[args.penguinId]
        penguin.penguinLoader.addPuffle(penguin, args.color)
        
        let playercard = this.world.interface.main.playerCard
        if (!playercard) return
        
        if (playercard.visible && (playercard.id === args.penguinId)) playercard.paperDoll.paperDollPuffleLoader.loadPuffle(this.world.crumbs.puffles[args.color].name)

        if (args.penguinId == this.world.client.penguin.id) this.world.interface.main.showPuffle(this.sortPuffleColors(this.world.crumbs.puffles[args.color].name))
    }

    sortPuffleColors(puffleName) {
        if (puffleName == "bluedog") puffleName = "blue" 
        else if (puffleName == "blackcat") puffleName = "black"
        else if (puffleName == "orangecat") puffleName = "orange"
        return puffleName
    }

    stopWalking(args) {
        if (!this.world.room) return
        let penguin = this.world.room.penguins[args.user]
        let puffle = this.world.room.penguins[args.user].pufflesprite
        const prevPuffle = penguin.puffle
        if (puffle) {
            puffle.destroy()
            penguin.hasPuffle = false
        }
        this.destroyPuffleplayercard(args) 
        if (penguin.puffle !== 0) penguin.puffle = 0
        if (args.user == this.world.client.penguin.id) this.world.interface.main.showPuffle(0)
        if (this.world.room.id == args.user) {
            this.world.room.spawnPuffle(prevPuffle)
        }
    }

    walkPuffle(args) {
        if (!this.world.room) return

        let penguin = this.world.room.penguins[args.user]
        let puffle = this.world.room.penguins[args.user].pufflesprite
        if (puffle) {
            puffle.destroy()
            penguin.hasPuffle = false
        }
        this.destroyPuffleplayercard(args) 

        if (this.world.room.isIgloo) {
            puffle = this.world.room.puffles[args.puffle]
            if (puffle) {
                puffle.destroy()
            }
        } 

        penguin.puffle = args.puffle
        if (args.info == "adopt") {
            return this.network.send('get_puffle_color', {puffle: args.puffle, penguinId: args.user, info: "adopt", color: args.color})
        }
        return this.network.send('get_puffle_color', {puffle: args.puffle, penguinId: args.user, color: args.color})

    }

    destroyPuffleplayercard(args) {
        let playercard = this.world.interface.main.playerCard
        if (playercard.visible && (playercard.id === args.user)) {
            playercard.paperDoll.puffle.destroy()
        }
    }

    getPuffleCount(args) {
        this.world.client.pufflecount = args.count
    }

    adoptPuffle(args) {
        args.user = this.world.client.penguin.id
        args.info = "adopt"
        this.network.send("walk_puffle", args)
        this.world.client.coins = args.coins
    }

    sendPuffleAnim(args) {
        if (!this.world.room) return
        let penguin = this.room.penguins[args.id]
        if (penguin.pufflesprite) {
            penguin.playPuffleAnim(args.anim)  
        }
    }
}