# Supabase SQL Übungen

In diesem Dokument findest du Übungen, um SQL-Operationen mit der Supabase-API (JavaScript-Schnittstelle) zu verstehen und zu üben. Die Übungen basieren auf einer (kleinen) Film-Datenbank mit Tabellen für Filme, Regisseure, Schauspieler und einer Relationstabelle für Filme und Schauspieler.

## Datenbankschema

- `movies`: Enthält Filmdetails, wobei jeder Film einem Regisseur zugeordnet ist.
- `directors`: Enthält Details zu Filmregisseuren.
- `actors`: Enthält Details zu Filmschauspielenden.
- `movie_actors`: Eine Relationstabelle, die eine many-to-many-Beziehung zwischen Filmen und Schauspielern herstellt.

## Datenbank Importieren

Falls noch nicht geschehen, importiere die [Film-Datenbank]() in dein Supabase-Projekt. Kopiere dafür den SQL-Code und füge diesen im `SQL-Editor` im Supabase Dashboard ein.

## Übungen

### Basic

#### Select

1. **Alle Filme abrufen**: Hole alle Spalten aller Filme aus der Tabelle `movies`.
   
2. **Nach Genre filtern**: Rufe alle Filme ab, die dem Genre "Action" gehören.

3. **Ergebnisse sortieren**: Rufe alle Regisseure ab. Ordne sie nach ihrem Geburtsdatum `birth_date` in absteigender Reihenfolge.

4. **Filme zählen**: Ermittle, wie viele Filme Quentin Tarantino gedreht hat.

#### Insert

5. **Schauspieler einfügen**: Füge bekannte Schauspieler in die Tabelle `actors` ein.

6. **Einen neuen Film hinzufügen**: Füge einen neuen Film zur Tabelle `movies` hinzu.

#### Update

7. **Aktualisierungen**: Ändere das Genre eines bestimmten Films und überprüfe die Änderung.

8. **Regisseur aktualisieren**: Ändere den Namen eines bestimmten Regisseurs.

#### Delete

9. **Schauspieler löschen**: Lösche einen bestimmten Schauspieler.

### Intermediate

10. **Tabellen verknüpfen**: Rufe alle Filme zusammen mit den vollständigen Namen ihrer jeweiligen Regisseure ab.

11. **Mit Verknüpfungen filtern**: Rufe alle Filme ab, die von amerikanischen Regisseuren gedreht wurden.

12. **Datumsoperationen**: Liste alle Filme auf, die vor dem Jahr 2000 veröffentlicht wurden.

13. **Zeichenkettenmanipulationen**: Finde alle Regisseure, deren Vorname ODER Nachname mit dem Buchstaben 'C' beginnt.

14. **Schauspieler für einen Film abrufen**: Liste alle Schauspieler für einen bestimmten Film auf.

15. **Filme für einen Schauspieler abrufen**: Liste alle Filme auf, in denen ein bestimmter Schauspieler mitgewirkt hat.

16. **Filme für jeden Schauspieler zählen**: Zähle, in wie vielen Filmen jeder Schauspieler mitgewirkt hat.

### Advanced

17. **Schauspieler mit Filmen verlinken**: Verlinke Schauspieler mit bestimmten Filmen mithilfe der Relationstabelle `movie_actors`.

18. **Aggregation**: Ermittle, wie viele Filme jeder Regisseur gedreht hat, und ordne das Ergebnis nach der Anzahl der Filme in absteigender Reihenfolge.

19. **Case-Anweisungen**: Kategorisiere Filme anhand ihrer Veröffentlichungsdaten (z.B. vor 2010 als 'Alt') und zähle die Anzahl in jeder Kategorie.

20. **Löschungen mit Bedingungen**: Lösche alle Filme eines bestimmten Regisseurs und entferne dann den Eintrag des Regisseurs.
