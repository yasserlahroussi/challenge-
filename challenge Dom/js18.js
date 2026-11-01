const langages = ["JavaScript", "Python", "Rust", "Go", "TypeScript"];
const ul = document.createElement("ul")
const div = document.getElementById("list-container")
function ajouter(langages) {
    for (let i = 0; i < langages.length; i++) {
       const li = document.createElement("li")
       li.textContent=langages[i]
       ul.append(li)
    }
    div.append(ul)
}
ajouter(langages)