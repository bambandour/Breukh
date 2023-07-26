function printInfo(person) {
    if ("prenom" in person) {
        console.log(person.prenom);
    }
    if ("nom" in person) {
        console.log(person.nom);
    }
}
const personne1 = {
    prenom: "Bamba",
    nom: "Ndour"
};
let personne2;
printInfo(personne1);
printInfo(personne2);
