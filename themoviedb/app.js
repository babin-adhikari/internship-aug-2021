// fetch("https://api.themoviedb.org/3/search/movie?api_key=4b85ac0e094a89ef04e63f677423c3d0&query=avengers")
//     .then(response => response.json)
//     .then(data => console.log(data))

// fetch('https://api.themoviedb.org/3/search/movie?api_key=4b85ac0e094a89ef04e63f677423c3d0&query=avengers').then(response => response.json()).then(data => console.log(data))

function searchShow(query) {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=4b85ac0e094a89ef04e63f677423c3d0&query=avengers`
    fetch(url)
    .then(response => {
        console.log('We got a res')
        response.json();
    })
    .then(data => {
        console.log('Data')
        console.log(data)
    })
}

searchShow('Avengers')

