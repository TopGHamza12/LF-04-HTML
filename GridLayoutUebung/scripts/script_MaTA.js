let durchschnitt = () => {
    let wert1 = parseInt(document.getElementById("sie_ihn").value);
    let wert2 = parseInt(document.getElementById("er_sie").value);
    let durchschnitt = (wert1 + wert2) / 2;
    let ausgabe = document.getElementById("ergebnis");
    ausgabe.value = durchschnitt;
    ausgabe.style.fontWeight = "bold"; // hier wird in Javascript ein CSS-Style festgelegt
    if (durchschnitt <=3) {
        ausgabe.style.color = "green";
    } else {
        ausgabe.style.color = "red";
    }
}