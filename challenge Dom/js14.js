const btn =document.getElementById("theme-btn")
console.log(btn)
btn.addEventListener('click',(e)=>{
    document.body.classList.toggle('dark-theme')
})