const ROWS = {
    A: 65,
    Z: 90
}

function createCell() {
    return `
        <div class="cell" contenteditable=""></div>
    `
}

function createCol(el) {
    return `<div class="column">${el}</div>`
}

function createRow(rowNumber, content) {
    return `
        <div class="row">
            <div class="row-info">${rowNumber ? rowNumber : ''}</div>
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