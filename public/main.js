fetch('/movies')
.then(response => response.json())
.then(data => {
    console.log(data)});


const respuesta = await fetch("/movies");
const movies = await respuesta.json();
console.log(movies);


const tableBody = document.querySelector("#tabla");
console.log(tableBody);

movies.forEach(movie => {
    const tr = document.createElement("tr");
    const tdId = document.createElement("td");
    const tdTitle = document.createElement("td");
    const tdGenres = document.createElement("td");

    tdId.textContent = movie.id;
    tdTitle.textContent = movie.title;
    tdGenre.textContent = movie.genres;
    
    tr.appendChild(tdId);
    tr.appendChild(tdTitle);
    tr.appendChild(tdGenres);
    tableBody.appendChild(tr);
})