import { addItem, getItems, removeItemByName, updateCompletedStatusByName } from './store.js'

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
        dueMessage = " Due Tommorow";
    }

    li.innerHTML = `
        <span class="todo-item">${todo}</span> <span class="due-date">Due Date ${dueDate} </span><span class="due-message"> !${dueMessage}</span>
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
    if (item.style.textDecoration == 'line-through'){
        item.style.textDecoration = 'none';
        console.log(item.textContent)
        updateCompletedStatusByName(item.innerText,false,null)
    }else{
        item.style.textDecoration = 'line-through';
        console.log(item.innerText)
        updateCompletedStatusByName(item.innerText,true,moment())
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