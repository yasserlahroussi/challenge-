const btn = document.querySelectorAll('.btn')
console.log(btn)
document.querySelectorAll('.btn').forEach((btn) =>{
    btn.addEventListener('click', (e)=>{
        e.currentTarget.textContent = "C'est cliqué !"
    })
}
)