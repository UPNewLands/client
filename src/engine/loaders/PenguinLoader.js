import PenguinSpriteFactory from './PenguinSpriteFactory'
import PuffleLoader from './PuffleLoader'


export default class PenguinLoader {

    constructor(world) {
        this.world = world

        this.nameStyle = {
            fontFamily: 'Arial',
            fontSize: 24,
            color: '#000000',
            align: 'center',
            fixedWidth: 250
        }
    }

    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
      

    loadPenguin(penguin) {
        this.ploader = new PuffleLoader(penguin)
        this.addPenguin(penguin)
        this.addShadow(penguin)
        this.addInput(penguin)
    }

    addPenguin(penguin) {
        PenguinSpriteFactory.create(penguin, 'penguin_body', 1)
        PenguinSpriteFactory.create(penguin, 'penguin', 2)
    }

    addShadow(penguin) {
        let shadow = penguin.room.add.image(0, 0, 'penguin_base', 'shadow')

        penguin.addAt(shadow, 0)
    }

    addRing(penguin) {
        let ring = penguin.room.add.image(0, 0, 'penguin_base', 'ring')

        penguin.addAt(ring, 0)
    }

    addName(penguin) {
        let x = penguin.x
        let y = penguin.y + 40
        if (penguin.username_approved == 1) {
            var username = this.capitalizeFirstLetter(penguin.username)
        } else if (penguin.username_approved != 1) {
            var username = "P" + penguin.id
        }

        var nameTag = penguin.room.add.text(x, y, username, this.nameStyle)

        nameTag.setOrigin(0.5)
        nameTag.depth = penguin.depth + 2000 // Keep nametag above everything else

        return nameTag
    }

    addInput(penguin) {
        let hitArea = new Phaser.Geom.Ellipse(0, -20, 70, 90)

        penguin.setInteractive({
            cursor: 'pointer',
            hitArea: hitArea,
            hitAreaCallback: Phaser.Geom.Ellipse.Contains
        })

        penguin.on('pointerup', () => this.onPenguinClick(penguin.id))
    }

    onPenguinClick(id) {
        this.world.interface.showCard(id)
    }

    addPuffle(penguin, puffle) {
        if (!penguin.puffle || !penguin.active || penguin.hasPuffle) return
        let color = this.world.crumbs.puffles[puffle].name
        this.ploader.loadPuffle(penguin,color)
    }

    loadPuffle(penguin, color) {
        if (!penguin.puffle) return

        penguin.pufflesprite = penguin.room.add.sprite(60, 0, `puffle_${color}`, '1_1')
        penguin.pufflesprite.depth = 3

        penguin.add(penguin.pufflesprite)
        penguin.pufflesprite.color = color
        penguin.hasPuffle = true

        if (this.world.client.penguin.id == this.world.room.id) {
            this.addPuffleInput(penguin)
        }
    }

    addPuffleInput(penguin) {
        // creates the hitbox to open the puffle care menu
        penguin.pufflesprite.hitArea = new Phaser.Geom.Ellipse(25, 25, 50, 50)
        penguin.pufflesprite.setInteractive({
            cursor: 'pointer',
            hitArea: penguin.pufflesprite.hitArea,
            hitAreaCallback: Phaser.Geom.Ellipse.Contains
        })
        penguin.pufflesprite.on('pointerup', () => this.onPuffleClick(penguin.puffle))
        penguin.pufflesprite.isButton = true
    }

    onPuffleClick(puffle) {
        // sends a packet to the server which requests the wellbeing information for the care menu to use
        this.world.network.send('get_wellbeing', {
            puffle: puffle
        })
    }

}
