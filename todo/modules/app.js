// document.querySelector('form').addEventListener('submit', handleSubmitForm);

// document.querySelector('ul').addEventListener('click', handleClickDeleteOrCheck);

// document.getElementById('clearAll').addEventListener('click', handleClearAll);

function handleSubmitForm(e) {
    e.preventDefault();
    let input = document.querySelector('input');
    let dueDate = document.getElementById('due-date');
    if (input.value != '')
        addTodo(input.value,dueDate.value);
    input.value = '';
}

function addTodo(todo,dueDate) {
    let ul = document.querySelector('ul');
    let li = document.createElement('li');
    let dueMessage="";
    var today = new Date();
    var due = new Date(dueDate);
    if (due.getMonth() == today.getMonth() && due.getFullYear() == today.getFullYear()) {
        if (due.getDate() < today.getDate()) {
            li.style.backgroundColor = "rgb(255, 105, 97)";
        }
        if (today.getDate() + 1 == due.getDate()) {
            dueMessage = "Due Tommorow";
        }
    }
    li.innerHTML = `
        <span class="todo-item">${todo} Due Date ${dueDate} ${dueMessage}</span>
        <button name="checkButton"><i class="fas fa-check-square"></i></button>
        <button name="deleteButton" ><i class="fas fa-trash"></i></button>
    `;
    
    li.classList.add('todo-list-item');
    ul.appendChild(li);
}

function handleClickDeleteOrCheck(e) {
    if (e.target.name == 'checkButton')
        checkTodo(e);

    if (e.target.name == 'deleteButton')
        deleteTodo(e);
}

function checkTodo(e) {
    let item = e.target.parentNode;
    if (item.style.textDecoration == 'line-through')
        item.style.textDecoration = 'none';
    else
        item.style.textDecoration = 'line-through';
}

function deleteTodo(e) {
    let item = e.target.parentNode;
    
    item.addEventListener('transitionend', function () {
        item.remove(); 
    });

    item.classList.add('todo-list-item-fall');
}

function handleClearAll(e) {
    document.querySelector('ul').innerHTML = '';
}

export {addTodo, checkTodo, handleSubmitForm, handleClickDeleteOrCheck,handleClearAll, deleteTodo}