import {$} from '@core/Dom'


export class Excel {

  constructor(selector, options) {
    this.$coreRoot = $(selector)
    this.components = options.components || []
  }

  getRoot() {
    const $root = $.create('div', 'excel')
    this.components.forEach(Component => {      
      const $compRoot = $.create('div', Component.className)
      const component = new Component($compRoot)
      $compRoot.html(component.toHTML())
      $root.append($compRoot)
    });
    return $root
  }

  render() {
    return this.$coreRoot.append(this.getRoot())
  }
}
