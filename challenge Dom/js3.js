
const user = {
  nom: "Karim Benali",
  email: "karim@exemple.com",
  role: "Administrateur",
};
const parent = document.querySelector('.card-user-card')
const nom = parent.querySelector('.card-title')
const email = parent.querySelector('.card-email')
const role = parent.querySelector('.card-role')
nom.textContent = user.nom
email.textContent = user.email
role.textContent = user.role

