enum TypeNote { Devoir , Examen}

type Devoir = {
    typeNote : TypeNote.Devoir
    Matiere : string,
    Appreciation : string,
    Note : number,
    Date : string
}

type Examen = {
    typeNote :TypeNote.Examen
    Matiere : string,
    Appreciation : string,
    Note : number
}

type Note = Devoir | Examen

function affiche(note:Note) {
    if (note.typeNote == TypeNote.Devoir) {
    }
}

let note:Note = {
    typeNote :TypeNote.Devoir,
    Matiere : 'francais',
    Appreciation : 'aly',
    Note : 20,
    Date : ''
}

let devoir : Devoir








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
 