function gesamtGebuehrErmittlung() {

    // Werte einlesen
    let kurs = document.getElementById("kurs").value;
    let teilnehmer = parseInt(document.getElementById("teilnehmer").value);
    let gesamtOutput = document.getElementById("gesamt");

    // Wenn Teilnehmerzahl keine Zahl ist → Abbruch
    if (isNaN(teilnehmer)) {
        gesamtOutput.value = "";
        return;
    }

    // Kursgebühr bestimmen
    let gebuehr = 0;
    if (kurs === "grundkurs") gebuehr = 100;
    if (kurs === "aufbaukurs") gebuehr = 150;
    if (kurs === "intensivkurs") gebuehr = 200;

    // Rabatt bestimmen
    let rabatt = 0;
    if (teilnehmer >= 20) {
        rabatt = 0.2;
    } else if (teilnehmer >= 10) {
        rabatt = 0.1;
    }

    // Gesamtgebühr berechnen
    let gesamt = teilnehmer * gebuehr * (1 - rabatt);

    // Ergebnis ausgeben
    gesamtOutput.value = gesamt.toFixed(2) + " €";
}
