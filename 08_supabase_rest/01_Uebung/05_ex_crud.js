import { supa } from "../../00_setup/supabase.js";

console.log("08 Übung Supabase REST API CRUD")

// 1. **Alle Filme abrufen**: Hole alle Spalten aller Filme aus der Tabelle `movies`.

async function ex_1() {
    const { data, error } = await supa.from("movies").select();
  
    return data;
  }

console.log(ex_1());