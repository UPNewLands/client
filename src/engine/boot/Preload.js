import BaseScene from '@scenes/base/BaseScene'

import Start from '@scenes/interface/menus/start/Start'
import Login from '@scenes/interface/menus/login/Login'
import PenguinSelect from '@scenes/interface/menus/login/penguin_select/PenguinSelect'
import PenguinLogin from '@scenes/interface/menus/login/penguin_login/PenguinLogin'
import Servers from '@scenes/interface/menus/servers/Servers'
import Main from '@scenes/interface/game/main/Main'
import IglooEdit from '@scenes/interface/game/iglooedit/IglooEdit'


export default class Preload extends BaseScene {

    preload() {
        this.load.cacheBuster = TIMESTAMP

        this.load.on('progress', this.onProgress, this)

        WebFont.load(this.crumbs.fonts)

        
        this.load.pack('preload', 'assets/media/preload/preload-pack.json')
        this.load.pack('puffles-preload', 'assets/media/puffles/puffles-pack.json')

        this.scene.add('Start', Start)
        this.scene.add('Login', Login)
        this.scene.add('PenguinSelect', PenguinSelect)
        this.scene.add('PenguinLogin', PenguinLogin)
        this.scene.add('Servers', Servers)
        this.scene.add('Main', Main)
        this.scene.add('IglooEdit', IglooEdit)
    }

    create() {
        // Set crumbs
        let crumbs = this.cache.json.get('crumbs')

        this.game.crumbs = {
            ...this.game.crumbs,
            ...crumbs
        }

        // Start
        this.interface.hideLoading()

        this.scene.start('InterfaceController')
        this.scene.start('Start')

        this.interface.bringToTop()
    }

    onProgress(progress) {
        this.interface.loading.progress.scaleX = progress
        this.updateLoader(progress)
    }

    updateLoader(prog) {
        let text = this.getText(prog)
        if (text === this.LoadText) return
        this.interface.loading.setContent("Loading " + text, true)
        this.LoadText = text;
    }

    getText(prog) {
        let arr = ["Game", "Content", "Interface", "Stamps", "Puffles"]
        let c = 4;
        if (prog <= 0.01) { c=0}
        else if (prog <= 0.25) {
            c = 1;
        } else if (prog <= 0.5) {
            c = 2
        }
        return arr[c];
    }



}
