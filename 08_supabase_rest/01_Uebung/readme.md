# Supabase SQL Übungen

In diesem Dokument findest du Übungen, die dir helfen sollen, SQL-Operationen auf der Supabase-Plattform zu verstehen und zu üben. Die Übungen basieren auf einer (fiktiven) Film-Datenbank mit Tabellen für Filme, Regisseure, Schauspieler und einer Relationstabelle für Filme und Schauspieler.

## Datenbankschema

- `movies`: Enthält Filmdetails, wobei jeder Film einem Regisseur zugeordnet ist.
- `directors`: Enthält Details zu Filmregisseuren.
- `actors`: Enthält Details zu Filmschauspielenden.
- `movie_actors`: Eine Relationstabelle, die eine many-to-many-Beziehung zwischen Filmen und Schauspielern herstellt.

## Übungen

### Basic

#### Select

1. **Alle Filme abrufen**: Hole alle Spalten aller Filme aus der Tabelle `movies`.
   
2. **Nach Genre filtern**: Rufe alle Filme ab, die dem Genre "Action" gehören.

3. **Ergebnisse sortieren**: Rufe alle Regisseure ab. Ordne das Ergebnis nach ihrem Geburtsdatum `birth_date` in absteigender Reihenfolge.

4. **Filme zählen**: Ermittle, wie viele Filme Quentin Tarantino gedreht hat.

#### Insert

5. **Schauspieler einfügen**: Füge bekannte Schauspieler in die Tabelle `actors` ein.

8. **Einen neuen Film hinzufügen**: Füge einen neuen Film zur Tabelle `movies` hinzu.

#### Update
6. **Aktualisierungen**: Ändere das Genre eines bestimmten Films und überprüfe die Änderung.

10. **Regisseur aktualisieren**: Ändere den Namen eines bestimmten Regisseurs.

#### Delete
7. **Schauspieler löschen**: Lösche einen bestimmten Schauspieler.

9. **Einen Film löschen**: Entferne einen Film aus der Tabelle `movies`.

### Intermediate

11. **Tabellen verknüpfen**: Rufe alle Filme zusammen mit den vollständigen Namen ihrer jeweiligen Regisseure ab.

12. **Mit Verknüpfungen filtern**: Rufe alle Filme ab, die von amerikanischen Regisseuren gedreht wurden.

13. **Datumsoperationen**: Liste alle Filme auf, die vor dem Jahr 2000 veröffentlicht wurden.

14. **Zeichenkettenmanipulationen**: Finde alle Regisseure, deren Vorname ODER Nachname mit dem Buchstaben 'C' beginnt.

15. **Schauspieler für einen Film abrufen**: Liste alle Schauspieler für einen bestimmten Film auf.

16. **Filme für einen Schauspieler abrufen**: Liste alle Filme auf, in denen ein bestimmter Schauspieler mitgewirkt hat.

17. **Filme für jeden Schauspieler zählen**: Zähle, in wie vielen Filmen jeder Schauspieler mitgewirkt hat.

### Advanced

18. **Schauspieler mit Filmen verlinken**: Verlinke Schauspieler mit bestimmten Filmen mithilfe der Relationstabelle `movie_actors`.

19. **Aggregation**: Ermittle, wie viele Filme jeder Regisseur gedreht hat, und ordne das Ergebnis nach der Anzahl der Filme in absteigender Reihenfolge.

20. **Case-Anweisungen**: Kategorisiere Filme anhand ihrer Veröffentlichungsdaten (z.B. vor 2010 als 'Alt') und zähle die Anzahl in jeder Kategorie.

21. **Löschungen mit Bedingungen**: Lösche alle Filme eines bestimmten Regisseurs und entferne dann den Eintrag des Regisseurs.

22. **Schauspieler, die mit einem bestimmten Regisseur gearbeitet haben**: Ermittle Schauspieler, die in mindestens einem Film von Quentin Tarantino mitgewirkt haben.

23. **Beziehungen löschen**: Ein Schauspieler entscheidet sich, in den Ruhestand zu treten und möchte, dass alle seine Verbindungen zu Filmen entfernt werden. Lösche die Verbindungen des Schauspielers aus `movie_actors`, ohne die Filme oder den individuellen Eintrag des Schauspielers zu entfernen.

Viel Erfolg bei den Übungen!
