# Supabase Tutorial

Dieses Tutorial besteht aus 3 Kapiteln und 

## Einen Account erstellen

1. Gehe auf [supabase.io](https://supabase.io/) und klicke auf den Button "Start your project".

![Screenshot](../../assets/Supabase_Tutorial_1.png)

2. Klicke unten auf den Button "Sign Up Now"

![Screenshot](../../assets/Supabase_Tutorial_2.png)

3. Erstelle deinen Account entweder mit GitHub (empfohlen) oder gib deine E-Mail-Adresse und dein Passwort ein.

![Screenshot](../../assets/Supabase_Tutorial_3.png)

4. Wenn du dich mit E-Mail und Passwort angemeldet hast, klicke auf den Link in der Bestätigungsmail. Bei der Anmeldung mit GitHub fällt dieser Schritt möglicherweise weg.

![Screenshot](../../assets/Supabase_Tutorial_4.png)

5. Wenn die Registrierung resp. das Login erfolgreich war, solltest du das leere Dashboard sehen. Nun kannst du ein neues Projekt erstellen.

![Screenshot](../../assets/Supabase_Tutorial_5.png)

## Ein neues Projekt erstellen

1. Klicke im Dashboard auf den grünen Button "New Project" und wähle deine Organisation aus.

![Screenshot](../../assets/Supabase_Tutorial_51.png)

2.  1. Gib dem Projekt einen Namen. Bspw. IM3
    2. Setze ein starkes Passwort. Es wird empfohlen, dieses automatisch zu generieren. Für unseren Anwendungsfall musst du das Passwort nirgendwo speichern.
    3. Wähle die Region aus, in der die Daten gespeichert werden sollen. Hier macht es Sinn die Region auszuwählen, die am nächsten bei dir ist.
    4. Wähle den Gratis-Plan aus.
    5. Klicke auf den Button "Create Project"

![Screenshot](../../assets/Supabase_Tutorial_6.png)

3. Wenn das Projekt erfolgreich erstellt wurde, siehst du das Dashboard mit deinem Projekt.

![Screenshot](../../assets/Supabase_Tutorial_7.png)

## Mit Supabase verbinden

1. Klicke auf das kleine Zahnrad in der linken unteren Ecke in der Navigation.

![Screenshot](../../assets/Supabase_Tutorial_7.png)

2. Klicke dann auf den Abschnitt API in der Navigation links.

![Screenshot](../../assets/Supabase_Tutorial_8.png)

3. Kopiere folgende Informationen:
    1. Die Project URL (in unserem JS-File heisst die Variable dann supabaseUrl)
    2. Den anonymen Public Key (in unserem JS-File heisst die Variable dann supabaseKey)


![Screenshot](../../assets/Supabase_Tutorial_9.png)

4. In `supabase_vorlage.js` kannst du die beiden Variablen `supabaseUrl` und `supabaseKey` mit den kopierten Werten ersetzen. 

**Wichtig:** Damit das File in diesem Übungsordner richtig funktioniert, bennene es zu `supabase.js` um.

