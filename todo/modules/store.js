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

export const getItems = async () => {
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

// export const isCompleted = (item) => {
//     let todoItems = window.localStorage.getItem('todos');
//     if(todoItems) {
//         todoItems = JSON.parse(todoItems);
//     } else {
//         todoItems = [];
//     }
    
//     const todoItems = getItems();

//     for(let index in todoItems) {
//         if(todoItems[index].isComplete==false) {
//             todoItems[index] = {

//             }
//         }
//     }

//     window.localStorage.setItem('todos', JSON.stringify(todoItems));
// }


