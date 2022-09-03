import BaseLoader from '@engine/loaders/BaseLoader'


export default class PuffleLoader extends BaseLoader {

    constructor(penguin) {
        super(penguin.room)
        this.penguin = penguin
        this.baseURL = '/assets/media/puffles/'
        this.keyPrefix = 'puffle_'
    }

    loadPuffle(penguin,puffle) {
        let mainKey = this.getKey(puffle)
        let interval = setInterval(() => {
            this.onFileComplete(mainKey, puffle, penguin)
            clearInterval(interval)
        }, 100)

        this.start()
    }

    onFileComplete(key, puffle,penguin) {
        if (!this.textureExists(key)) {
            return
        }

        this.penguin.penguinLoader.loadPuffle(penguin, puffle)
    }

}