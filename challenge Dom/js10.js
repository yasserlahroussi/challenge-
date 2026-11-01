let count = 0;
const btn = document.getElementById("increment")
const resultat = document.getElementById("counter")
btn.addEventListener('click',(e)=>{
    count =count + 1
    resultat.textContent = count

})