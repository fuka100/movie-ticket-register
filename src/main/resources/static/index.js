// Variables for inputs
const innFilm = $("#innFilm");
const innAntall = $("#innAntall");
const innFornavn = $("#innFornavn");
const innEtternavn = $("#innEtternavn");
const innTelefonnr = $("#innTelefonnr");
const innEpost = $("#innEpost");

// Variables for error messages
const errorFilm = $("#errorFilm")
const errorAntall = $("#errorAntall")
const errorFornavn = $("#errorFornavn")
const errorEtternavn = $("#errorEtternavn");
const errorTelefonnr = $("#errorTelefonnr");
const errorEpost = $("#errorEpost");

// Function to register new tickets
$("#registrer").click(() => {

    // Object for a new ticket
    const nyBillett = {
        film: $("#innFilm option:selected").text(),
        antall: innAntall.val(),
        fornavn: innFornavn.val(),
        etternavn: innEtternavn.val(),
        telefonnr: innTelefonnr.val(),
        epost: innEpost.val()
    };

    // Clear error messages when the inputs are corrected
    errorFilm.text("");
    errorAntall.text("");
    errorFornavn.text("");
    errorEtternavn.text("");
    errorTelefonnr.text("");
    errorEpost.text("");

    // If all inputs are valid, put entered info into the array
    if (inputVerdi(nyBillett)) {
        // Store the registered tickets
        $.post("/lagre", nyBillett, () => hent());

        // Reset the drop-down list and empty input fields
        innFilm.prop("selectedIndex", 0);
        innAntall.val("");
        innFornavn.val("");
        innEtternavn.val("");
        innTelefonnr.val("");
        innEpost.val("");
    }
})

// Check if a film is not chosen or if inputs are invalid
// If not, show error messages
// If ok, return true
const inputVerdi = nyBillett => {
    if (innFilm.val() === "") {
        errorFilm.text("Du må velge en film.");
    }
    if (nyBillett.antall.length === 0) {
        errorAntall.text("Du må skrive noe inn i antall.");
    }
    else if (nyBillett.antall.length !== 0 && isNaN(Number(nyBillett.antall))) {
        errorAntall.text("Du må skrive inn gyldig antall.");
    }
    else if (Number(nyBillett.antall) <= 0) {
        errorAntall.text("Antall må være mer enn 0.");
    }
    if (nyBillett.fornavn === "") {
        errorFornavn.text("Du må skrive noe inn i fornavnet.");
    }
    if (nyBillett.etternavn === "") {
        errorEtternavn.text("Du må skrive noe inn i etternavnet.");
    }
    if (nyBillett.telefonnr === "") {
        errorTelefonnr.text("Du må skrive noe inn i telefonnr.");
    }
    if (nyBillett.epost === "") {
        errorEpost.text("Du må skrive noe inn i epost.");
    }
    if(innFilm.val() !== "" &&
        nyBillett.antall !== "" &&
        nyBillett.antall.length !== 0 &&
        !(isNaN(Number(nyBillett.antall))) &&
        Number(nyBillett.antall) > 0 &&
        nyBillett.fornavn !== "" &&
        nyBillett.etternavn !== "" &&
        nyBillett.telefonnr !== "" &&
        nyBillett.epost !== "") {
        return true;
    }
}

// Function to get the stored data
const hent = () => {
    $.get("/hent", billettter => formater(billettter));
}

// Function to display the registered tickets
const formater = billetter => {
    let ut = "<table><tr>" +
        "<th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnr</th><th>Epost</th>" +
        "</tr>";

    for (let billett of billetter) {
        ut += "<tr>";
        ut += "<td>" + billett.film + "</td><td>" + billett.antall + "</td><td>" + billett.fornavn + "</td><td>" +
            billett.etternavn + "</td><td>" + billett.telefonnr + "</td><td>" + billett.epost + "</td>";
        ut += "</tr>";
    }
    ut += "</table>"
    $("#visBilletter").html(ut);
}

// Function to delete registered tickets
$("#slett").click(() => {
    $.get("/slett", () => hent());
})