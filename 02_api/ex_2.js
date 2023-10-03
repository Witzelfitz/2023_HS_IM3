// Supabase Importieren
import { supa } from "../../00_setup/supabase.js";

console.log("Hello World");

async function ex_1() {
    const { data, error } = await supa.from("movies").select("title"); // Only select the 'title' column

    return data;
}

async function displayMovieTitles() {
    const movies = await ex_1(); // Fetch the movies
    const movieListElement = document.getElementById("movieList");

    // Loop through the movies and add each title to the <ul> element
    movies.forEach((movie) => {
        const li = document.createElement("li");
        li.textContent = movie.title;
        movieListElement.appendChild(li);
    });
}

// Call the function to display movie titles
displayMovieTitles();

