import {$} from '@core/Dom'

export class Excel {
  constructor(selector, options) {
    this.$el = document.querySelector(selector)
    this.components = options.components || []
  }

  getRoot() {
    // for check
    // const $root = document.createElement('h1')
    // $root.textContent = 'Test app'
    // return $root

    //work case
    // const $root = document.createElement('div')
    // $root.classList.add('excel')

    //optimal case
    const $root = $.create('div', 'excel')
    this.components.forEach(Component => {
        //old
        // $root.insertAdjacentHTML('afterbegin', component.toHTML())
        // console.log(component.toHTML())

        //work case
        // const $el = document.createElement('div')
        // $el.classList.add(Component.className)

        //optim case
        const $el = $.create('div', Component.className)
        const component = new Component($el)
        $el.innerHTML = component.toHTML()
        $root.append($el)
    })

    return $root
  }

  render() {
      return this.$el.append(this.getRoot())
    //   return this.$el.innerHTML = '<h1>TEST</h1>'
  }
}
