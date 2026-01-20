const bcrypt = require('bcrypt');

// Mot de passe à hasher
const password = 'Thibaut1904';

bcrypt.hash(password, 10, (err, hash) => {
    if (err) {
        console.error('Erreur:', err);
        return;
    }
    console.log('Mot de passe hashé:', hash);
    console.log('\nCopiez ce hash et utilisez-le dans la requête SQL:');
    console.log(`INSERT INTO admin (email, mot_de_passe, nom) VALUES ('acakpothibaut2@gmail.com', '${hash}', 'Thibaut Acakpo');`);
});