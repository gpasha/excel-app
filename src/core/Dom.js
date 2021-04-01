class Dom {

    constructor(selector) {
        this.$el = typeof selector === 'string'
            ? document.querySelector(selector)
            : selector
    }

    html(html) {
        if (typeof html === 'string') {
            this.$el.innerHTML = html
            return this
        }
        return this.$el.outerHtml.trim()
    }

    clear() {
        this.html('')
        return this
    }

    on(eventType, callback) {
        this.$el.addEventListener(eventType, callback)
    }

    off(eventType, callback) {
        this.$el.removeEventListener(eventType, callback)
    }

    append(node) {    

        if (node instanceof Dom) {
            node = node.$el
        }

        Element.prototype.append
            ? this.$el.append(node)
            : this.$el.appendChild(node);

        return this
    }

    get data() {
        return this.$el.dataset
    }

    closest(selector) {
        return $(this.$el.closest(selector))
    }

    getCoords() {
        return this.$el.getBoundingClientRect()
    }

    findAll(selector) {
        return this.$el.querySelectorAll(selector)
    }
    
    css(styles) {
        //old version
        // for (let key in styles) {
        //     if (styles.hasOwnProperty(key)) {
        //         this.$el.style[key] = styles[key]
        //     }
        // }
        //actual version
        Object
            .keys(styles)
            .forEach(key => this.$el.style[key] = styles[key])
        return this.$el
    }
}

export function $(selector) {
    return new Dom(selector)
}

$.create = (tagName, className = '') => {
    const el = document.createElement(tagName)
    if (className) {
        el.classList.add(className)
    }
    return $(el)
}