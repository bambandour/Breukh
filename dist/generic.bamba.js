// function fusion(a:object,b:object){
//     return Object.assign(a,b)
// }
// const nom=fusion({name:'aly'},{prenom:'sarr'});
// if('name' in nom){
//     console.log(nom.name);
// }
// function fusion<T,U>(a:T,b:U){
//     return Object.assign(a,b)
// }
// const nom=fusion({name:'aly'},{prenom:'sarr'});
// console.log(nom.prenom);
function renverserTableau(tab) {
    return tab.reverse();
}
const ta = [1, 5, 8, 9];
console.log(renverserTableau(ta));
const st = ["champion", "yaye", "Diogs"];
console.log(renverserTableau(st));
