import {reformat} from './reformat';
import './index.css';

function test() {
    let str = document.querySelector('#in').value;
    document.querySelector('#out').value = reformat(str);
}

document.querySelector('button').addEventListener('click', test);