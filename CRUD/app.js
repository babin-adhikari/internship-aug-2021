const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const tableBodyOne = document.getElementById('table-1');
const tableBodyTwo = document.getElementById('table-2');
var pageNo = 1;

const navigation = (page) => {
    if(page==1){
        fetch('https://reqres.in/api/users?page=1')
            .then(response => response.json())
            .then(data => addItem(data,tableBodyOne));
        tableBodyTwo.innerHTML=``;
        pageNo=1;
    }else if(page==2){
        fetch('https://reqres.in/api/users?page=2')
            .then(response => response.json())
            .then(data => addItem(data,tableBodyTwo));
        tableBodyOne.innerHTML=``;        
        pageNo=2;
    }
}

window.onload = () => {
    const searchValue = document.getElementById('search-bar');
    if(searchValue.value==""){
        navigation(1);
    }
    searchValue.onkeyup = (event) => {
        fetch(`https://reqres.in/api/users/${searchValue.value}`)
            .then(response => response.json())
            .then(data => searchItem(data,tableBodyOne))
    }
}


// POST data into API
document.getElementById('submit').addEventListener('click', (e) => {
    e.preventDefault();
    if(firstName.value == ""){
        alert("Empty First Name Field");
    }else if(lastName.value == ""){
        alert("Empty Last Name Field");
    }else if(email.value == ""){
        alert("Empty Email Field");
    }

    fetch('https://reqres.in/api/users',{
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            first_name: firstName.value,
            last_name: lastName.value,
            email: email.value
        })
    })
        .then(response => response.json())
        .then(data => console.log(data))

})

// Update and Delete the Table Record
// const update = (e) => {
//     // let item = e.target.parentNode;
//     console.log('Hello',e)
// }

// const deleteData = (element) => {
//     console.log('World',element)
// }
//  onclick="${update()}"
// onclick="${deleteData()}"




const addItem = (data,table) => {
    showEntries(data);
    array = data.data;
    array.map((item) => {
        const tableRow = document.createElement('tr');
        tableRow.setAttribute('id',`tr-${item.id}`);
        tableRow.innerHTML = 
        `<td>${item.id}</td>
        <td>${item.email}</td>
        <td>${item.first_name}</td> 
        <td>${item.last_name}</td>
        <td>
            <button id="button-edit-${item.id}" name="button-edit">Edit</button>
            <button id="button-delete-${item.id}" name="button-delete">Delete</button>
        </td>` 
        table.append(tableRow);
    })
}

const searchItem = (data,table) => {
    showEntries(data);
    person = data.data;
    tableBodyOne.innerHTML=``;
    tableBodyTwo.innerHTML=``;

    const tableRow = document.createElement('tr');
    tableRow.setAttribute('id',`tr-${person.id}`);
    tableRow.innerHTML = 
        `<td>${person.id}</td>
        <td>${person.email}</td>
        <td>${person.first_name}</td> 
        <td>${person.last_name}</td>
        <td>
            <button id="button-edit-${person.id}">Edit</button>
            <button id="button-delete-${person.id}">Delete</button>
        </td>` 
    table.append(tableRow);
}


// Show 1 Entries && Showing 1 to 8 undefined entries
const showEntries = (data) => {
    let noOfEntries = data.total;
    console.log(noOfEntries)
    const optionSelect = document.getElementById('show-entries');
    for(let index=1; index<=noOfEntries; index++){
        const option = document.createElement('option');
        option.setAttribute('id',`show-${index}`);
        option.innerHTML= `${index}`;
        optionSelect.append(option);
    }
    const uptoEntries = document.getElementById('noOf-entries');
    uptoEntries.innerHTML =`Showing 1 to 8 of ${data.total} entries`;
}

const previous = document.getElementById('button-previous');
previous.addEventListener('click', () => {
    if(pageNo==2){
        navigation(1);
    }
})

const one = document.getElementById('button-1');
one.addEventListener('click', () => {
    if(pageNo==2){
        navigation(1);
    }
})

const next = document.getElementById('button-next');
next.addEventListener('click', () => {
    if(pageNo==1){
        navigation(2);
    }
})

const updateItem = (e) => {
    e.preventDefault();
    let item = e.target.parentNode.parentNode;
    let itemNo = item.getAttribute('id').substring(3);
    item.addEventListener('click', (e)=>{
        // console.log('Hello')
        // e.preventDefault();
        if(firstName.value == ""){
            alert("Empty First Name Field");
        }else if(lastName.value == ""){
            alert("Empty Last Name Field");
        }else if(email.value == ""){
            alert("Empty Email Field");
        }else{
            console.log(itemNo)
            fetch(`https://reqres.in/api/users/${itemNo}`,{
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    first_name: firstName.value,
                    last_name: lastName.value,
                    email: email.value
                })
            })
                .then(response => response.json())
                .then(data => console.log(data))
        }
    })
}

const deleteItem = (e) => {
    e.preventDefault();
    // console.log(e)
    let item = e.target.parentNode.parentNode;
    let itemNo = item.getAttribute('id').substring(3);
    item.addEventListener('click', (e)=>{
        console.log('World');
        fetch(`https://reqres.in/api/users/${itemNo}`,{
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(data => console.log(data))
    })
}

document.getElementById('main-table').addEventListener('click', e => {
    if(e.target.name == 'button-edit'){
        console.log(e.target.name);
        updateItem(e);
    }else if(e.target.name == 'button-delete'){
        console.log(e.target.name);
        deleteItem(e);
    }
}) 

// const editButton1=document.getElementById('button-edit-1');

// editButton1.addEventListener('click', (e)=>{
//     if(firstName.value == ""){
//         alert("Empty First Name Field");
//     }else if(lastName.value == ""){
//         alert("Empty Last Name Field");
//     }else if(email.value == ""){
//         alert("Empty Email Field");
//     }
//     fetch('https://reqres.in/api/users/1',{
//         method: 'PUT',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             first_name: firstName.value,
//             last_name: lastName.value,
//             email: email.value
//         })
//     })
//         .then(response => response.json())
//         .then(data => console.log(data))
// })

// document.getElementById('button-delete-1').addEventListener('click', (e)=>{
//     fetch('https://reqres.in/api/users/1',{
//         method: 'DELETE',
//     })
//         .then(response => response.json())
//         .then(data => console.log(data))
// })









