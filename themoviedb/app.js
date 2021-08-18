
function searchShow(query) {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=4b85ac0e094a89ef04e63f677423c3d0&query=${query}`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const results = data.results.map(element => element.original_title);
        console.log(results);
    })
}

searchShow('Fast');

window.onload =() => {
    const searchFieldConst = document.getElementById('searchField');
    searchFieldConst.onkeyup = (event) => {
        searchShow(searchFieldConst.value);
    }       
}

// fucntion renderResults(results) {
//     const list = document.getElementById('resultsLists');
//     results.forEach(result => {
//         const element = document.createElement('li');
//         element.innerText=result;
//         list.append(element);
//     })
// }

