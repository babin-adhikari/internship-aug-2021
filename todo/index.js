import {addTodo, checkTodo, deleteTodo} from './modules/app.js';

const form = document.querySelector('form');

const ul = document.querySelector('ul')

form.addEventListener('submit', e => {
    e.preventDefault();
    let input = document.querySelector('input');
    let dueDate = document.getElementById('due-date');
    if (input.value != '')
        addTodo(input.value, dueDate.value);
    input.value = '';
});


ul.addEventListener('click', e => {
    if (e.target.name == 'checkButton')
        checkTodo(e);

    if (e.target.name == 'deleteButton')
        deleteTodo(e);
});