import { supa } from "../../00_setup/supabase.js";

console.log("08 Übungsdatei verbunden")

// 1. **Alle Filme abrufen**: Hole alle Spalten aller Filme aus der Tabelle `movies`.

async function ex_1() {
    const { data, error } = await supa.from("movies").select();
  
    return data;
  }

console.log('ex_1', ex_1());

// kopiere diesen Code mit dem console.log() für die weiteren Übungen