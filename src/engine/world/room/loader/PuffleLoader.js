import BaseLoader from '@engine/loaders/BaseLoader'


export default class PuffleLoader extends BaseLoader {

    constructor(puffle, room) {
        super(room)
		this.puffle = puffle
		this.baseURL = '/assets/media/puffles/'
		this.keyPrefix = 'puffle_'
    }

    loadPuffle(puffle) {
        this.penguin.penguinLoader.loadPuffle(penguin, puffle)
        this.puffle.loadPuffle()

        let mainKey = this.getKey(puffle)


        for (const element of ["adopt"]) {
            if(!this.textureExists(mainKey + element)) this.multiatlas(mainKey + element, `/${puffle}_${element}.json`)
            this.createAnim(`puffle_${puffle}_${element}`, 'Sprite')
        }
        this.start()
    }

    createAnim(key, frame) {
        let frames = this.generateFrames(key, frame)

        this.world.anims.create({
            key: `${key}`,
            frames: frames,
            frameRate: 24,
            repeat: 0
        })
    }

    generateFrames(key, frame) {
        let textureFrames = this.world.textures.get(key).getFrameNames(false)
        textureFrames.sort(function(a, b) {
            return parseInt(a.substring(6)) - parseInt(b.substring(6))
        });
        textureFrames = textureFrames.filter(frame => frame[0] !== '.')
        let config = {
            frames: textureFrames
        }

        return this.world.anims.generateFrameNames(key, config)
    }

}