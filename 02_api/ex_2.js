// Supabase Importieren
import { supa } from "../../00_setup/supabase.js";

console.log("Hello World");

async function getAllDirectors() {
    const { data, error } = await supa.from("actors").select("first_name, last_name");

    return data;
}

async function displayDirectors() {
    const directors = await getAllDirectors();
    const directorListElement = document.getElementById("directorList"); // Assuming you have an HTML element with id="directorList"

    directors.forEach((director) => {
        const fullName = `${director.first_name} ${director.last_name}`;
        const li = document.createElement("li");
        li.textContent = fullName;
        directorListElement.appendChild(li);
    });
}

// Call the function to display director names
displayDirectors();

