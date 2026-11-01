const btn = document.querySelectorAll('.color-btn')
const p = document.getElementById("info")
document.querySelectorAll('.color-btn').forEach((btn)=>{
    btn.addEventListener('mouseenter',(e)=>{
        p.textContent = "Vous survolez la couleur "+ e.currentTarget.textContent 
    })
})