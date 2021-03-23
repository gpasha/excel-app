// import { ExcelComponent } from '../../core/ExcelComponent';
import { ExcelComponent } from '@core/ExcelComponent';

export class Formula extends ExcelComponent {
    
    static className = 'excel__formula'

    constructor($root) {
        super($root, {
            name: 'Formula',
            listeners: ['input']
        })
        // this.options = options
    }

    toHTML() {
        return `
            <div class="info">fx</div>
            <div class="input" contenteditable spellcheck="false"></div>
        `
    }

    onInput(event) {
        console.log("Formula this.$root", this.$root)
        console.log("Formula onInput event", event)
    }
}