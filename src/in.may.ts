type Person ={
    prenom:string,
    nom:string
}

function printInfo(person:Person) {
    if ("prenom" in person){
       console.log(person.prenom);
    }
    if ("nom" in person){
        console.log(person.nom);
     }
}

const personne1={
    prenom:"Bamba",
    nom:"Ndour"
}
let personne2:Person

printInfo(personne1);
printInfo(personne2);
