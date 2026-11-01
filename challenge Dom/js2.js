
const user = {
  nom: "Karim Benali",
  email: "karim@exemple.com",
  role: "Administrateur",
};
const name_ = document.getElementById("user-name")
const email = document.getElementById("user-email")
const role = document.getElementById("user-role")
console.log(name_)
name_.textContent = user.nom
email.textContent = user.email
role.textContent = user.role