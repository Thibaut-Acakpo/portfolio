const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const bcrypt = require('bcrypt');
const db = require('./config/db');

const app = express();
const PORT = 3000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuration de l'email avec Brevo
const transporter = nodemailer.createTransport({
    host: 'smtp-relay.brevo.com',
    port: 465,
    secure: true,
    auth: {
        user: '9f0f51001@smtp-brevo.com',
        pass: 'VOTRE_CLE_SMTP_ICI'  // Remplacez par la clé complète visible en cliquant sur l'œil
    }
});

// Route de test
app.get('/', (req, res) => {
    res.json({ message: '✅ Serveur portfolio backend fonctionne!' });
});

// Route de connexion admin
app.post('/api/admin/login', (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ 
            success: false, 
            message: 'Email et mot de passe requis' 
        });
    }

    const query = 'SELECT * FROM admin WHERE email = ?';
    
    db.query(query, [email], async (err, results) => {
        if (err) {
            console.error('❌ Erreur DB:', err);
            return res.status(500).json({ 
                success: false, 
                message: 'Erreur serveur' 
            });
        }

        if (results.length === 0) {
            return res.status(401).json({ 
                success: false, 
                message: 'Email ou mot de passe incorrect' 
            });
        }

        const admin = results[0];
        
        // Vérifier le mot de passe
        const isMatch = await bcrypt.compare(password, admin.mot_de_passe);
        
        if (!isMatch) {
            return res.status(401).json({ 
                success: false, 
                message: 'Email ou mot de passe incorrect' 
            });
        }

        console.log('✅ Admin connecté:', admin.email);
        res.status(200).json({ 
            success: true, 
            message: 'Connexion réussie',
            admin: {
                id: admin.id,
                email: admin.email,
                nom: admin.nom
            }
        });
    });
});

// Route pour recevoir les messages du formulaire de contact
app.post('/api/contact', (req, res) => {
    const { nom, email, sujet, message } = req.body;

    // Validation des données
    if (!nom || !email || !sujet || !message) {
        return res.status(400).json({ 
            success: false, 
            message: 'Tous les champs sont obligatoires' 
        });
    }

    // Insertion dans la base de données
    const query = 'INSERT INTO messages (nom, email, sujet, message) VALUES (?, ?, ?, ?)';
    
    db.query(query, [nom, email, sujet, message], (err, result) => {
        if (err) {
            console.error('❌ Erreur lors de l\'insertion:', err);
            return res.status(500).json({ 
                success: false, 
                message: 'Erreur lors de l\'envoi du message' 
            });
        }

        console.log('✅ Message reçu de:', nom);
        res.status(200).json({ 
            success: true, 
            message: 'Message envoyé avec succès!',
            id: result.insertId
        });
    });
});

// Route pour récupérer tous les messages
app.get('/api/messages', (req, res) => {
    const query = 'SELECT * FROM messages ORDER BY date_envoi DESC';
    
    db.query(query, (err, results) => {
        if (err) {
            console.error('❌ Erreur lors de la récupération:', err);
            return res.status(500).json({ 
                success: false, 
                message: 'Erreur lors de la récupération des messages' 
            });
        }

        res.status(200).json({ 
            success: true, 
            messages: results 
        });
    });
});

// Route pour marquer un message comme lu/répondu
app.put('/api/messages/:id/statut', (req, res) => {
    const { id } = req.params;
    const { statut } = req.body;

    const query = 'UPDATE messages SET statut = ? WHERE id = ?';
    
    db.query(query, [statut, id], (err, result) => {
        if (err) {
            console.error('❌ Erreur lors de la mise à jour:', err);
            return res.status(500).json({ 
                success: false, 
                message: 'Erreur lors de la mise à jour' 
            });
        }

        res.status(200).json({ 
            success: true, 
            message: 'Statut mis à jour' 
        });
    });
});

// Route pour répondre à un message
app.post('/api/messages/:id/repondre', (req, res) => {
    const { id } = req.params;
    const { reponse } = req.body;

    // D'abord, récupérer les infos du message original
    const selectQuery = 'SELECT * FROM messages WHERE id = ?';
    
    db.query(selectQuery, [id], (err, results) => {
        if (err || results.length === 0) {
            console.error('❌ Message introuvable');
            return res.status(404).json({ 
                success: false, 
                message: 'Message introuvable' 
            });
        }

        const message = results[0];

        // Configuration de l'email
        const mailOptions = {
            from: 'votre-email@gmail.com', // REMPLACEZ par votre email
            to: message.email,
            subject: `Re: ${message.sujet}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #667eea;">Réponse à votre message</h2>
                    <p>Bonjour ${message.nom},</p>
                    <div style="background: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
                        ${reponse.replace(/\n/g, '<br>')}
                    </div>
                    <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
                    <p style="color: #666; font-size: 0.9em;">
                        <strong>Votre message original :</strong><br>
                        ${message.message.replace(/\n/g, '<br>')}
                    </p>
                    <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
                    <p style="color: #999; font-size: 0.85em; text-align: center;">
                        Thibaut Acakpo - Portfolio<br>
                        acakpothibaut2@gmail.com
                    </p>
                </div>
            `
        };

        // Envoyer l'email
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('❌ Erreur lors de l\'envoi de l\'email:', error);
                return res.status(500).json({ 
                    success: false, 
                    message: 'Erreur lors de l\'envoi de l\'email: ' + error.message
                });
            }

            console.log('✅ Email envoyé:', info.response);

            // Mettre à jour le statut du message à "répondu"
            const updateQuery = 'UPDATE messages SET statut = ? WHERE id = ?';
            db.query(updateQuery, ['repondu', id], (err) => {
                if (err) {
                    console.error('❌ Erreur mise à jour statut:', err);
                }
            });

            res.status(200).json({ 
                success: true, 
                message: 'Email envoyé avec succès!' 
            });
        });
    });
});

// Route pour récupérer les infos du portfolio
app.get('/api/portfolio/infos', (req, res) => {
    const query = 'SELECT * FROM infos_portfolio LIMIT 1';
    
    db.query(query, (err, results) => {
        if (err) {
            console.error('❌ Erreur:', err);
            return res.status(500).json({ success: false, message: 'Erreur serveur' });
        }
        res.json({ success: true, data: results[0] || {} });
    });
});

// Route pour mettre à jour les infos du portfolio
app.put('/api/portfolio/infos', (req, res) => {
    const { nom_complet, email, telephone, localisation, bio } = req.body;
    const query = 'UPDATE infos_portfolio SET nom_complet = ?, email = ?, telephone = ?, localisation = ?, bio = ? WHERE id = 1';
    
    db.query(query, [nom_complet, email, telephone, localisation, bio], (err) => {
        if (err) {
            console.error('❌ Erreur:', err);
            return res.status(500).json({ success: false, message: 'Erreur serveur' });
        }
        console.log('✅ Infos portfolio mises à jour');
        res.json({ success: true, message: 'Informations mises à jour' });
    });
});

// Route pour récupérer les statistiques
app.get('/api/portfolio/stats', (req, res) => {
    const query = 'SELECT * FROM statistiques LIMIT 1';
    
    db.query(query, (err, results) => {
        if (err) {
            console.error('❌ Erreur:', err);
            return res.status(500).json({ success: false, message: 'Erreur serveur' });
        }
        res.json({ success: true, data: results[0] || {} });
    });
});

// Route pour mettre à jour les statistiques
app.put('/api/portfolio/stats', (req, res) => {
    const { projets_realises, clients_satisfaits, annees_experience } = req.body;
    const query = 'UPDATE statistiques SET projets_realises = ?, clients_satisfaits = ?, annees_experience = ? WHERE id = 1';
    
    db.query(query, [projets_realises, clients_satisfaits, annees_experience], (err) => {
        if (err) {
            console.error('❌ Erreur:', err);
            return res.status(500).json({ success: false, message: 'Erreur serveur' });
        }
        console.log('✅ Statistiques mises à jour');
        res.json({ success: true, message: 'Statistiques mises à jour' });
    });
});

// ========== ROUTES PROJETS ==========
app.get('/api/projets', (req, res) => {
    const query = 'SELECT * FROM projets ORDER BY ordre_affichage ASC';
    db.query(query, (err, results) => {
        if (err) {
            console.error('❌ Erreur:', err);
            return res.status(500).json({ success: false, message: 'Erreur serveur' });
        }
        res.json({ success: true, data: results });
    });
});

app.post('/api/projets', (req, res) => {
    const { titre, categorie, icone, description_courte, description_longue, tags, lien_projet } = req.body;
    const query = 'INSERT INTO projets (titre, categorie, icone, description_courte, description_longue, tags, lien_projet) VALUES (?, ?, ?, ?, ?, ?, ?)';
    
    db.query(query, [titre, categorie, icone, description_courte, description_longue, tags, lien_projet], (err, result) => {
        if (err) {
            console.error('❌ Erreur:', err);
            return res.status(500).json({ success: false, message: 'Erreur serveur' });
        }
        console.log('✅ Projet ajouté');
        res.json({ success: true, message: 'Projet ajouté', id: result.insertId });
    });
});

app.put('/api/projets/:id', (req, res) => {
    const { id } = req.params;
    const { titre, categorie, icone, description_courte, description_longue, tags, lien_projet } = req.body;
    const query = 'UPDATE projets SET titre = ?, categorie = ?, icone = ?, description_courte = ?, description_longue = ?, tags = ?, lien_projet = ? WHERE id = ?';
    
    db.query(query, [titre, categorie, icone, description_courte, description_longue, tags, lien_projet, id], (err) => {
        if (err) {
            console.error('❌ Erreur:', err);
            return res.status(500).json({ success: false, message: 'Erreur serveur' });
        }
        console.log('✅ Projet mis à jour');
        res.json({ success: true, message: 'Projet mis à jour' });
    });
});

app.delete('/api/projets/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM projets WHERE id = ?';
    
    db.query(query, [id], (err) => {
        if (err) {
            console.error('❌ Erreur:', err);
            return res.status(500).json({ success: false, message: 'Erreur serveur' });
        }
        console.log('✅ Projet supprimé');
        res.json({ success: true, message: 'Projet supprimé' });
    });
});

// ========== ROUTES COMPÉTENCES ==========
app.get('/api/competences', (req, res) => {
    const query = 'SELECT * FROM competences ORDER BY ordre_affichage ASC';
    db.query(query, (err, results) => {
        if (err) {
            console.error('❌ Erreur:', err);
            return res.status(500).json({ success: false, message: 'Erreur serveur' });
        }
        res.json({ success: true, data: results });
    });
});

app.post('/api/competences', (req, res) => {
    const { nom, icone, niveau } = req.body;
    const query = 'INSERT INTO competences (nom, icone, niveau) VALUES (?, ?, ?)';
    
    db.query(query, [nom, icone, niveau], (err, result) => {
        if (err) {
            console.error('❌ Erreur:', err);
            return res.status(500).json({ success: false, message: 'Erreur serveur' });
        }
        console.log('✅ Compétence ajoutée');
        res.json({ success: true, message: 'Compétence ajoutée', id: result.insertId });
    });
});

app.put('/api/competences/:id', (req, res) => {
    const { id } = req.params;
    const { nom, icone, niveau } = req.body;
    const query = 'UPDATE competences SET nom = ?, icone = ?, niveau = ? WHERE id = ?';
    
    db.query(query, [nom, icone, niveau, id], (err) => {
        if (err) {
            console.error('❌ Erreur:', err);
            return res.status(500).json({ success: false, message: 'Erreur serveur' });
        }
        console.log('✅ Compétence mise à jour');
        res.json({ success: true, message: 'Compétence mise à jour' });
    });
});

app.delete('/api/competences/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM competences WHERE id = ?';
    
    db.query(query, [id], (err) => {
        if (err) {
            console.error('❌ Erreur:', err);
            return res.status(500).json({ success: false, message: 'Erreur serveur' });
        }
        console.log('✅ Compétence supprimée');
        res.json({ success: true, message: 'Compétence supprimée' });
    });
});

// ========== ROUTES EXPÉRIENCES ==========
app.get('/api/experiences', (req, res) => {
    const query = 'SELECT * FROM experiences ORDER BY ordre_affichage ASC';
    db.query(query, (err, results) => {
        if (err) {
            console.error('❌ Erreur:', err);
            return res.status(500).json({ success: false, message: 'Erreur serveur' });
        }
        res.json({ success: true, data: results });
    });
});

app.post('/api/experiences', (req, res) => {
    const { periode, poste, entreprise, description } = req.body;
    const query = 'INSERT INTO experiences (periode, poste, entreprise, description) VALUES (?, ?, ?, ?)';
    
    db.query(query, [periode, poste, entreprise, description], (err, result) => {
        if (err) {
            console.error('❌ Erreur:', err);
            return res.status(500).json({ success: false, message: 'Erreur serveur' });
        }
        console.log('✅ Expérience ajoutée');
        res.json({ success: true, message: 'Expérience ajoutée', id: result.insertId });
    });
});

app.put('/api/experiences/:id', (req, res) => {
    const { id } = req.params;
    const { periode, poste, entreprise, description } = req.body;
    const query = 'UPDATE experiences SET periode = ?, poste = ?, entreprise = ?, description = ? WHERE id = ?';
    
    db.query(query, [periode, poste, entreprise, description, id], (err) => {
        if (err) {
            console.error('❌ Erreur:', err);
            return res.status(500).json({ success: false, message: 'Erreur serveur' });
        }
        console.log('✅ Expérience mise à jour');
        res.json({ success: true, message: 'Expérience mise à jour' });
    });
});

app.delete('/api/experiences/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM experiences WHERE id = ?';
    
    db.query(query, [id], (err) => {
        if (err) {
            console.error('❌ Erreur:', err);
            return res.status(500).json({ success: false, message: 'Erreur serveur' });
        }
        console.log('✅ Expérience supprimée');
        res.json({ success: true, message: 'Expérience supprimée' });
    });
});

// Route pour changer le mot de passe admin
app.put('/api/admin/change-password', async (req, res) => {
    const { email, oldPassword, newPassword } = req.body;
    
    // Vérifier l'ancien mot de passe
    const selectQuery = 'SELECT * FROM admin WHERE email = ?';
    db.query(selectQuery, [email], async (err, results) => {
        if (err || results.length === 0) {
            return res.status(404).json({ success: false, message: 'Admin non trouvé' });
        }
        
        const admin = results[0];
        const isMatch = await bcrypt.compare(oldPassword, admin.mot_de_passe);
        
        if (!isMatch) {
            return res.status(401).json({ success: false, message: 'Ancien mot de passe incorrect' });
        }
        
        // Hasher le nouveau mot de passe
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        const updateQuery = 'UPDATE admin SET mot_de_passe = ? WHERE email = ?';
        
        db.query(updateQuery, [hashedPassword, email], (err) => {
            if (err) {
                console.error('❌ Erreur:', err);
                return res.status(500).json({ success: false, message: 'Erreur serveur' });
            }
            console.log('✅ Mot de passe changé');
            res.json({ success: true, message: 'Mot de passe changé avec succès' });
        });
    });
});

// Démarrage du serveur
app.listen(PORT, () => {
    console.log(`🚀 Serveur démarré sur http://localhost:${PORT}`);
});