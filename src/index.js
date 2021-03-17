// import { Excel } from './components/excel/Excel'
import { Excel } from '@/components/excel/Excel'
import { Header } from '@/components/header/Header'
import { Toolbar } from '@/components/toolbar/Toolbar'
import { Formula } from '@/components/formula/Formula'
import { Table } from '@/components/table/Table'
import './scss/index.scss'
// import { Excel } from './components/excel/Excel.js'
// import {Excel} from '@/components/excel/Excel'

const excel = new Excel('#app', {
    components: [Header, Toolbar, Formula, Table],
});

excel.render();
// const excel = new Excel();
// console.log("excel", excel)