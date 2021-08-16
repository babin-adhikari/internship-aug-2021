import { addItem, getItems, isCompleted, removeItemByName } from './store.js'

function addTodo(todo, dueDate) {
    let ul = document.querySelector('ul');
    let li = document.createElement('li');
    let dueMessage = "";
    let today = moment();
    let due = moment(dueDate);
    if (due.isBefore(today)) {
        li.style.backgroundColor = "rgb(255, 105, 97)";
    }
    if (today.date() + 1 == due.date()) {
        dueMessage = "Due Tommorow";
    }

    li.innerHTML = `
        <span class="todo-item">${todo} Due Date ${dueDate} ${dueMessage}</span>
        <button name="checkButton"><i class="fas fa-check-square"></i></button>
        <button name="deleteButton" ><i class="fas fa-trash"></i></button>
    `;

    li.classList.add('todo-list-item');
    ul.appendChild(li);

    let newTodoItem = {
        id: Math.random(),
        name: todo,
        dueDate: due,
        isComplete: false,
        completedDate: null
    }
    addItem(newTodoItem);
    return newTodoItem;
}

function checkTodo(e) {
    let item = e.target.parentNode;
    console.log(item);
    if (item.style.textDecoration == 'line-through'){
        item.style.textDecoration = 'none';
        // isCompleted(item.innerText);
    }else{
        item.style.textDecoration = 'line-through';
    }    
}



function deleteTodo(e) {
    let item = e.target.parentNode;

    console.log(item.innerText)

    item.addEventListener('transitionend', function () {
        item.remove();
        removeItemByName(item.innerText);
    });

    item.classList.add('todo-list-item-fall');
}

export {
    addTodo,
    checkTodo,
    deleteTodo
}