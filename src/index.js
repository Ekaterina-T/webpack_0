import {reformat} from './reformat';
import './index.css';
import './table/table.css'

function test() {
    let str = document.querySelector('#in').value;
    document.querySelector('#out').value = reformat(str);
}

document.querySelector('button').addEventListener('click', test);