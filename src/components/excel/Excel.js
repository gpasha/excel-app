import {$} from '@core/Dom'


export class Excel {

  constructor(selector, options) {
    this.$coreRoot = $(selector)
    this.components = options.components || []
  }

  getRoot() {
    const $root = $.create('div', 'excel')
    this.components = this.components.map(Component => {      
      const $compRoot = $.create('div', Component.className)
      const component = new Component($compRoot)
      console.log("component => ", component)
      if (component.name) {
        window['c' + component.name] = component;
      }
      $compRoot.html(component.toHTML())
      $root.append($compRoot)
      return component
    });
    console.log("$root => ", $root)
    return $root
  }

  render() {
    this.$coreRoot.append(this.getRoot())
    this.components.forEach(component  => component.init());
    console.log("this.components => ", this.components)
  }
}
