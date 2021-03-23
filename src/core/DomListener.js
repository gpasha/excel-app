import {capitalize} from './utils'
// import {capitalize} from './utils'

export class DomListener {
    constructor($root, name, listeners = []) {
        if (!$root) {
            throw new Error('No $root provided for DomListener')
        }
        this.$root = $root
        this.name = name
        this.listeners = listeners
    }

    initDomListeners() {
        // console.log("initDomListeners listeners: ", this.listeners )
        this.listeners.forEach(listener => {
            let method = formMethodName(listener)
            let name = this.name || ''
            if (!this[method]) {
                throw new Error(`Method ${method} is not implemented in ${name}`)
            }
            this[method] = this[method].bind(this)
            this.$root.on(listener, this[method])
        })
    }

    removeDomListeners() {
        // console.log("removeDomListeners listeners: ", this.listeners )
        this.listeners.forEach(listener => {
            let method = formMethodName(listener)
            this.$root.off(listener, this[method])
        })
    }
}

function formMethodName(functionName) {
    return 'on' + capitalize(functionName)
}