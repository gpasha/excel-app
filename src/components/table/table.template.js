const ROWS = {
    A: 65,
    Z: 90
}

function createCell(_, index) {
    return `
        <div class="cell" data-index="${index}" contenteditable=""></div>
    `
}

function createCol(el, index) {
    return `
        <div class="column" data-index="${index}" data-type="resizable">
            ${el}
            <div class="col-resize" data-resize="col"></div>
        </div>
    `
}

function createRow(rowNumber, content) {
    let resizer = rowNumber ? '<div class="row-resize" data-resize="row"></div>' : ''
    return `
        <div class="row" data-type="resizable">
            <div class="row-info">
                ${rowNumber ? rowNumber : ''}
                ${resizer}
            </div>
            <div class="row-data">${content}</div>
        </div>
    `
}

function toChar(_, index) {
    return String.fromCharCode(ROWS.A + index)
}

export function createTable(rowsCount = 15) {
    const colsCount = ROWS.Z - ROWS.A + 1
    const rows = []

    const cols = new Array(colsCount)
                    .fill('')                    
                    .map( toChar )
                    .map( createCol )
                    .join('')
    
    const cells = new Array(colsCount)
                    .fill('')
                    .map( createCell )
                    .join('')

    rows.push(createRow(0, cols))

    for (let i = 0; i < rowsCount; i++) {
        rows.push(createRow(i + 1, cells))
    }

    return rows.join('')
}