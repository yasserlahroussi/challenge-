const notes = [12, 8, 15, 9, 18];
const ul = document.getElementById("grades")
console.log(ul)
function ajouter(notes) {
    for (let i = 0; i < notes.length; i++) {
     const note = document.createElement("li")
     note.textContent = notes[i]+" /20"
     note.id="li"
     if (notes[i]>10) {
        note.className="success"
     }else{
        note.className="danger"
     }
     ul.append(note)
    }
}
ajouter(notes)
// 