const nom = document.getElementById("nom")
const email = document.getElementById("email")
const submit = document.getElementById("submit")
let objet = {}
let name_=""
let email_=""
nom.addEventListener('input',(e)=>{
 name_ =e.target.value
})
email.addEventListener('input',(e)=>{
 email_ =e.target.value
})

submit.addEventListener('click',(e)=>{
  objet={nom:name_,email:email_}
  e.preventDefault()
  console.log(objet)
})
