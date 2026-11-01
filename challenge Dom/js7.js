const btn = document.getElementById("btn")
btn.addEventListener('click' ,(e)=>{
  console.log(e.currentTarget)
  e.currentTarget.textContent = "C'est cliqué !"
})