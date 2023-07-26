var TypeNote;
(function (TypeNote) {
    TypeNote[TypeNote["Devoir"] = 0] = "Devoir";
    TypeNote[TypeNote["Examen"] = 1] = "Examen";
})(TypeNote || (TypeNote = {}));
function affiche(note) {
    if (note.typeNote == TypeNote.Devoir) {
    }
}
let note = {
    typeNote: TypeNote.Devoir,
    Matiere: 'francais',
    Appreciation: 'aly',
    Note: 20,
    Date: ''
};
let devoir;
// let examen : Examen 
// examen = {
//     Matiere : 'math',
//     Appreciation : 'Tres Bien',
//     Note : 12
// }
// let note : Devoir | Examen 
// note = {
//     Matiere : 'math',
//     Appreciation : 'Tres Bien',
//     Note : 12,
//     Date : '12 Janvier 2024'
// }
// note = {
//     Matiere : 'Francais',
//     Appreciation : 'Bien',
//     Note : 12
// }
