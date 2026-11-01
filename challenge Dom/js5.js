const users = [
  { id: 1, nom: "Karim Benali", email: "karim@exemple.com", role: "Administrateur" },
  { id: 2, nom: "Sofia Martin", email: "sofia@exemple.com", role: "Éditrice" },
  { id: 3, nom: "Yanis Haddad", email: "yanis@exemple.com", role: "Développeur" },
  { id: 4, nom: "Léa Dubois", email: "lea@exemple.com", role: "Designer" },
];
const parent = document.querySelectorAll('.card')

parent.forEach(parent => {
  const id = Number(parent.dataset.userId)
  const user = users.find(users => users.id === id)
  if (!user) return
  const nom = parent.querySelector('.card-title')
  nom.textContent = user.nom
  const email = parent.querySelector('.card-email')
  email.textContent = user.email
  const role = parent.querySelector('.card-role')
  role.textContent = user.role
}
)
