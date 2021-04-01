import { $ } from '@core/Dom';

export const resizeHandler = ($root, event) => {
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
                if (e.pageX - coords.left > 40) {
                    newWidth = (coords.width + delta) + 'px'
                    $target.css({left: e.pageX - coords.left + 'px'});
                }
            }
            else if (resize === 'row') {
                const delta = e.pageY - coords.bottom
                if (e.pageY - coords.top > 20) {
                    newHeight = (coords.height + delta) + 'px'
                    $target.css({top: e.pageY - coords.top + 'px'});
                }
            }
        }

        document.onmouseup =  () => {
            document.onmousemove = null
            document.onmouseup = null

            if (resize === 'col') {
                $parent.css({width: newWidth});
                $root.findAll(`[data-index="${currecntIndex}"]`)
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
    }
}