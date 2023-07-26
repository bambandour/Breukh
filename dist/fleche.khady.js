// function sum (a:number,b:number):number{
//     return a+b;
// }
// console.log(sum(12,4));
// const sum =(a:number,b:number):number=>a+b;
// console.log(sum(13,4));
let person = {
    nom: "diop",
    prenom: "babacar",
    afficher: (age) => {
        console.log(this.nom, this.prenom, age);
    },
    afficher1: function () {
        console.log(this.nom, this.prenom);
    }
};
person.afficher(12);
