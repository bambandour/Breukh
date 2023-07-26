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

function renverserTableau<T>(tab:T[]):T[]{
    return tab.reverse()
}
const ta:number[]=[1,5,8,9]
console.log(renverserTableau<number>(ta));
const st:string[]=[ "champion","yaye","Diogs"]
console.log(renverserTableau<string>(st));





