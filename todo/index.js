import {addTodo, checkTodo, handleSubmitForm, handleClickDeleteOrCheck,handleClearAll, deleteTodo} from './modules/app.js';

document.querySelector('form').addEventListener('submit', handleSubmitForm);

document.querySelector('ul').addEventListener('click', handleClickDeleteOrCheck);

document.getElementById('clearAll').addEventListener('click', handleClearAll);