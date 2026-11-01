const input = document.getElementById("name-input")
let resultat = ""
input.addEventListener('input',(e)=>{
    resultat=""
    resultat=e.target.value
})
const output = document.getElementById("output")
const btn = document.getElementById("validate-btn")
btn.addEventListener('click', (e)=>{
    output.textContent=resultat
})