const mysql = require('mysql2');

// Configuration de la connexion à MySQL
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',           // Utilisateur par défaut de WAMP
    password: '',           // Mot de passe vide par défaut
    database: 'portfolio_db'
});

// Connexion à la base de données
connection.connect((err) => {
    if (err) {
        console.error('❌ Erreur de connexion à MySQL:', err.message);
        return;
    }
    console.log('✅ Connecté à la base de données MySQL!');
});

module.exports = connection;