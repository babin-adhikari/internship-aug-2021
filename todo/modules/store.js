export const addItem = (item) => {
    let todoItems = window.localStorage.getItem('todos');
    if(todoItems) {
        todoItems = JSON.parse(todoItems);
    } else {
        todoItems = [];
    }
    todoItems.push(item);

    window.localStorage.setItem('todos', JSON.stringify(todoItems));
}

export const getItems = () => {
    let todoItems = window.localStorage.getItem('todos');
    if(todoItems) {
        todoItems = JSON.parse(todoItems);
    } else {
        todoItems = [];
    }
    return todoItems;
}

export const removeItemByName = (name) => {
    let todoItems = window.localStorage.getItem('todos');

    if(todoItems) {
        todoItems = JSON.parse(todoItems);
    } else {
        todoItems = [];
    }
    
    let todoItemsByNameIndex = todoItems.findIndex((item) => {
        // return item.name.toLowerCase() == name.toLowerCase();
        return name.includes(item.name);
    })
    console.log('Item index', todoItemsByNameIndex);
    if(todoItemsByNameIndex > -1) {
        todoItems.splice(todoItemsByNameIndex, 1)
    }

    window.localStorage.setItem('todos', JSON.stringify(todoItems));
}

export const updateCompletedStatusByName = (name, status, completedDate) => {
    let todoItems = window.localStorage.getItem('todos');

    if(todoItems) {
        todoItems = JSON.parse(todoItems);
    } else {
        todoItems = [];
    }
    console.log(todoItems)
    let todoItemsByNameIndex = todoItems.findIndex((item) => {
        // return item.name.toLowerCase()==(name.toLowerCase());
        return name.includes(item.name);
    })
    console.log('Item index', todoItemsByNameIndex);
    if(todoItemsByNameIndex > -1) {
        todoItems[todoItemsByNameIndex].isComplete = status;
        todoItems[todoItemsByNameIndex].completedDate = completedDate;
    }

    window.localStorage.setItem('todos', JSON.stringify(todoItems));
}




