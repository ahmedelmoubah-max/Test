Deutsch A1 – Lernplattform mit Login und Admin-Dashboard

Starten:
1. ZIP vollständig entpacken.
2. Starte im Ordner Deutsch_A1_Plattform einen lokalen Webserver, z. B.:
   python -m http.server 8000
3. Öffne http://localhost:8000 im Browser.

Admin-Zugang:
E-Mail: admin@gmail.com
Passwort: 111111

Funktionen:
- Schülerkonten im Admin-Dashboard erstellen, aktivieren/deaktivieren, löschen und Passwörter zurücksetzen.
- Gmail-Adressvorschläge und zufällige Passwörter generieren.
- Testergebnisse aus den eingebauten Lektionstests pro Schüler anzeigen.
- Ergebnisse und Konten als JSON-Backup exportieren.
- Schüler können ihre eigenen Ergebnisse ansehen.

WICHTIGE GRENZEN DES LOCALSTORAGE-PROTOTYPS:
- Alle Daten liegen nur im aktuellen Browser auf diesem Gerät. Sie werden NICHT automatisch mit anderen Geräten oder Browsern synchronisiert.
- Wenn mehrere Schüler denselben Browser verwenden, werden ihre Fortschritte getrennt nach Konto gespeichert.
- Das Admin-Passwort ist im Frontend-Code hinterlegt. LocalStorage-Login ist keine sichere Produktions-Authentifizierung.
- Der Gmail-Generator erzeugt nur einen möglichen Gmail-Namen und ein Passwort. Er erstellt kein echtes Google-Konto und prüft nicht, ob die Adresse verfügbar ist.
- Für eine echte Schulplattform mit zentralen Ergebnissen aller Schüler über verschiedene Geräte, sicherem Admin-Zugang und echten Benutzerkonten muss später eine Backend-Datenbank (z. B. Firebase oder Supabase) angeschlossen werden.

Projektstruktur:
- index.html: Einstiegspunkt
- css/style.css: Design
- js/app.js: Lernplattform, Login und Admin-Dashboard
- js/student-progress.js: Fortschrittsspeicherung pro Schüler
- pages/: Lektionen, Übungen und Podcasts
- assets/: Bilder und Audiodateien
