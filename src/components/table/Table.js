import { ExcelComponent } from "@core/ExcelComponent";
import { createTable } from './table.template';
import { $ } from '@core/Dom';

export class Table extends ExcelComponent {
    
    static className = 'excel__table'

    constructor($root) {
        super($root, {
            listeners: ['mousedown']
        })
    }

    toHTML() {
        return createTable(50);
    }

    onMousedown(event) {
        let resize = event.target.dataset.resize
        if (resize) {
            const $target = $(event.target)
            const $parent = $target.closest('[data-type="resizable"]')
            const currecntIndex = $parent.data.index
            const coords = $parent.getCoords()
            const currentPropperty = resize === 'col' ? 'bottom' : 'right';
            let newWidth;
            let newHeight;

            
            $target.css({
                opacity: 1,
                [currentPropperty]: '-5000px'
            })
            
            document.onmousemove =  e => {
                if (resize === 'col') {
                    const delta = e.pageX - coords.right
                    newWidth = (coords.width + delta) + 'px'
                    // if (e.pageX - coords.left > 40) {
                        $target.css({left: e.pageX - coords.left + 'px'});
                    // }
                }
                else if (resize === 'row') {
                    const delta = e.pageY - coords.bottom
                    newHeight = (coords.height + delta) + 'px'
                    $target.css({top: e.pageY - coords.top + 'px'});
                }
            }

            document.onmouseup =  () => {
                document.onmousemove = null
                document.onmouseup = null

                if (resize === 'col') {
                    $parent.css({width: newWidth});
                    this.$root.findAll(`[data-index="${currecntIndex}"]`)
                        .forEach( cell => {
                            if (cell) {
                                cell.style.width = newWidth
                            }
                        })
                }
                else if (resize === 'row') {
                    $parent.css({height: newHeight});
                }
                
                $target.css({
                    opacity: 0,
                    right: 0,
                    bottom: 0
                })
            }

            // const changeColumnsWidth = () => {
            //     if (resize === 'col') {
            //         $parent.css({width: newWidth});
            //         this.$root.findAll(`[data-index="${currecntIndex}"]`)
            //             .forEach( cell => {
            //                 if (cell) {
            //                     cell.style.width = newWidth
            //                 }
            //             })
            //     }
            //     else if (resize === 'row') {
            //         $parent.css({height: newHeight});
            //     }
            // }
        }
    }   
}




// function changeColumnsWidth() {
//     //old version
//     //$parent.$el.style.width = newWidth
//     // const rows = document.querySelectorAll('[data-row="true"]')
//     // rows.forEach( row => {
//     //     const cell = [...row.querySelectorAll('[data-cell="true"]')].find(cell => cell.dataset.index === currecntIndex)
//     //     if (cell) {
//     //         cell.style.width = newWidth
//     //     }
//     // })

//     //new version
//     $parent.css({width: newWidth});
//     cells.forEach( cell => {
//         if (cell) {
//             cell.style.width = newWidth
//         }
//     })
// }