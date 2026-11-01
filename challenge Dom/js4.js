

const users = [
    { id: 1, nom: "Karim Benali", email: "karim@exemple.com", role: "Administrateur" },
    { id: 2, nom: "Sofia Martin", email: "sofia@exemple.com", role: "Éditrice" },
    { id: 3, nom: "Yanis Haddad", email: "yanis@exemple.com", role: "Développeur" },
    { id: 4, nom: "Léa Dubois", email: "lea@exemple.com", role: "Designer" },
];

const parent = document.querySelectorAll('.card-user-card')
for (const key in users) {
    const nom = parent[key].querySelector('.card-title')
    nom.textContent = users[key].nom
    const email = parent[key].querySelector('.card-email')
    email.textContent = users[key].email
    const role = parent[key].querySelector('.card-role')
    role.textContent = users[key].role

}


