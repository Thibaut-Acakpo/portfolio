// ⚠️ REMPLACEZ CES VALEURS PAR VOS IDS EmailJS
const EMAILJS_SERVICE_ID = 'service_pl6japh';  // À remplacer
const EMAILJS_TEMPLATE_ID = 'template_vd2yv7l'; // À remplacer

// ========== EFFET DE FEUILLES ==========
function createLeaves() {
    const container = document.getElementById('leaves-container');
    if (!container) return;

    // Nombre de feuilles à l'écran
    const leafCount = 20;

    for (let i = 0; i < leafCount; i++) {
        const leaf = document.createElement('div');
        leaf.classList.add('leaf');

        // Taille aléatoire entre 10px et 25px
        const size = Math.random() * 15 + 10;
        leaf.style.width = `${size}px`;
        leaf.style.height = `${size}px`;

        // Position horizontale aléatoire
        leaf.style.left = `${Math.random() * 100}%`;

        // Durée de chute aléatoire (entre 6s et 15s)
        const duration = Math.random() * 9 + 6;
        leaf.style.animationDuration = `${duration}s`;

        // Délai de départ aléatoire pour ne pas qu'elles tombent toutes en même temps
        leaf.style.animationDelay = `-${Math.random() * 10}s`;

        container.appendChild(leaf);
    }
}

// Lancer la création des feuilles
createLeaves();

// Limite de projets affichés avant le bouton "Voir tous"
const PROJECTS_LIMIT = 9;
let showAllProjects = false;

// ========== NOUVEAUX EFFETS HERO ==========

// --- Effet de lueur qui suit la souris ---
const hero = document.getElementById('hero');
const glow = document.getElementById('heroGlow');

if (hero && glow) {
    hero.addEventListener('mousemove', (e) => {
        const rect = hero.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        glow.style.opacity = '1';
        glow.style.left = `${x}px`;
        glow.style.top = `${y}px`;
    });

    hero.addEventListener('mouseleave', () => {
        glow.style.opacity = '0';
    });
}

// --- Effet Machine à écrire (Typewriter) ---
const typewriterElement = document.getElementById('typewriter');
if (typewriterElement) {
    const text = typewriterElement.innerText;
    typewriterElement.innerText = '';

    let i = 0;
    const speed = 50; // Vitesse en ms

    function typeWriter() {
        if (i < text.length) {
            typewriterElement.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }

    // Démarrer l'animation après un petit délai
    setTimeout(typeWriter, 800);
}

// ========== DATA PROJETS ==========
const projects = [
    // ============================================
    // 3 NOUVEAUX PROJETS (en premier)
    // ============================================
    {
        id: 9,
        title: "PrononciA+",
        category: "web",
        image: "images/projets/prononcia.jpg",
        description: "Application d'apprentissage qui améliore ta prononciation anglaise en pointant des objets réels avec la caméra.",
        longDescription: "Application innovante utilisant l'IA (TensorFlow.js + MediaPipe) pour reconnaître en temps réel les objets pointés par l'utilisateur via la caméra, et l'aider à prononcer leur nom en anglais. Système de retour immédiat sur la prononciation, défi quotidien avec classement en direct via WebSockets, et suivi détaillé des progrès avec graphiques interactifs. Fonctionne comme PWA installable sur mobile.",
        tags: [
            { name: "React", slug: "react" },
            { name: "TensorFlow", slug: "tensorflow" },
            // ✅ CORRIGÉ : slug "mediapipe" (existe) au lieu de "google"
            { name: "MediaPipe", slug: "mediapipe" },
            { name: "MySQL", slug: "mysql" },
            { name: "Socket.IO", slug: "socketdotio" },
            { name: "Vite", slug: "vite" }
        ],
        link: "https://prononciation.onrender.com"
    },
    {
        id: 10,
        title: "Atelier Réparation",
        category: "web",
        image: "images/projets/atelier-reparation.jpg",
        description: "Site vitrine pour atelier de réparation électronique avec suivi de réparation en ligne.",
        longDescription: "Plateforme complète pour un atelier de réparation au Bénin : présentation des services (réparation matérielle, logicielle, diagnostic gratuit, maintenance), prise de rendez-vous en ligne, suivi en temps réel des réparations et gestion administrative des demandes clients. Back-office sécurisé avec authentification JWT.",
        tags: [
            { name: "React", slug: "react" },
            { name: "TailwindCSS", slug: "tailwindcss" },
            { name: "Node.js", slug: "nodedotjs" },
            { name: "PostgreSQL", slug: "postgresql" },
            { name: "Vite", slug: "vite" }
        ],
        link: "https://atelier-reparation.onrender.com/s/atelier-reparation"
    },
    {
        id: 11,
        title: "Gestion de Tontines",
        category: "web",
        image: "images/projets/tontines.jpg",
        description: "Plateforme de gestion transparente et sécurisée des tontines avec suivi des cotisations.",
        longDescription: "Application web qui digitalise la gestion des tontines : organisation des tours, suivi de chaque cotisation, versement des bénéficiaires en toute confiance. Livre de comptes inviolable, paiements sécurisés, gestion des rôles (administrateur, gestionnaire, trésorier, membre) et interface sombre moderne. Back-end sécurisé avec hachage Argon2, validation Zod et protection Helmet.",
        tags: [
            { name: "React", slug: "react" },
            { name: "Node.js", slug: "nodedotjs" },
            { name: "MySQL", slug: "mysql" },
            { name: "Vite", slug: "vite" }
            // ✅ CORRIGÉ : tag "Argon2" retiré (slug "letsencrypt" montrait le mauvais logo — Argon2 n'existe pas dans Simple Icons)
        ],
        link: "https://tontine-sooty.vercel.app"
    },
    {
        id: 12,
        title: "DevQuiz",
        category: "web",
        image: "images/projets/devquiz.jpg",
        description: "Quiz du développement web, installable et utilisable hors ligne.",
        longDescription: "Application PWA de quiz sur les notions du développement web. Les questions changent à chaque partie, l'ordre des réponses est mélangé, et l'expérience fonctionne hors ligne grâce à un service worker. Aucune base de données ni backend n'est nécessaire : le projet est entièrement conçu en HTML, CSS et JavaScript.",
        tags: [
            { name: "JavaScript", slug: "javascript" },
            { name: "HTML5", slug: "html5" },
            { name: "CSS3", slug: "css" },
            // ✅ CORRIGÉ : slug "pwa" (existe) au lieu de "progressivewebapps"
            { name: "PWA", slug: "pwa" }
        ],
        link: "https://thibaut-acakpo.github.io/devquiz/"
    },
    // ============================================
    // 8 ANCIENS PROJETS
    // ============================================
    {
        id: 1,
        title: "GestionDons",
        category: "web",
        image: "images/projets/gestion-dons.jpg",
        icon: "heart",
        description: "Site de collecte et de suivi de dons pour un orphelinat, avec gestion des besoins et reçus PDF.",
        longDescription: "Plateforme de collecte de dons et de suivi des contributions pour l’Orphelinat du Centre YƐtƐn. Elle permet de gérer les dons financiers et matériels, afficher les besoins avec filtres, traiter les contributions via un parcours dédié, générer un reçu PDF, suivre l’historique par numéro de téléphone et superviser la collecte depuis un espace d’administration. Développée en PHP/MySQL sans framework, avec sécurité, export CSV, gestion des répartitions et tableau de bord administratif.",
        tags: [
            { name: "PHP", slug: "php" },
            { name: "MySQL", slug: "mysql" },
            { name: "JavaScript", slug: "javascript" },
            { name: "HTML5", slug: "html5" },
            { name: "CSS3", slug: "css" }
        ],
        link: "https://gestion-dons.freedev.app"
    },
    {
        id: 2,
        title: "GestionFinances",
        image: "images/projets/finances.jpg",
        icon: "wallet",
        description: "Dashboard de gestion financière personnelle avec visualisation des dépenses.",
        longDescription: "Application web permettant de suivre revenus, dépenses et budgets mensuels. Back-end en PHP avec base de données MySQL, graphiques interactifs pour visualiser la répartition des dépenses par catégorie, export des données en PDF.",
        tags: [
            { name: "PHP", slug: "php" },
            { name: "MySQL", slug: "mysql" },
            { name: "JavaScript", slug: "javascript" },
            { name: "Chart.js", slug: "chartdotjs" }
        ],
        link: "https://gestion-finances.onrender.com"
    },
    {
        id: 3,
        title: "MédiRDV",
        category: "web",
        image: "images/projets/medirdv.jpg",
        icon: "pulse",
        description: "Plateforme de prise de rendez-vous médicaux en ligne pour cabinets et patients.",
        longDescription: "Système complet de réservation de créneaux médicaux : espace patient, espace praticien, gestion des disponibilités et rappels automatiques par email. Architecture PHP/MySQL avec une interface dynamique en JavaScript.",
        tags: [
            { name: "PHP", slug: "php" },
            { name: "MySQL", slug: "mysql" },
            { name: "JavaScript", slug: "javascript" },
            { name: "Bootstrap", slug: "bootstrap" }
        ],
        link: "https://medirdv.freedev.app/public/"
    },
    {
        id: 4,
        title: "GestionTâches",
        category: "web",
        image: "images/projets/gestion-tâches.jpg",
        icon: "layout",
        description: "Outil collaboratif de gestion de projets en mode kanban, temps réel.",
        longDescription: "Application de gestion de projets façon kanban avec colonnes personnalisables, glisser-déposer des tâches, notifications en temps réel et permissions par équipe. Front-end React/TypeScript, API Node.js et base PostgreSQL.",
        tags: [
            { name: "React", slug: "react" },
            { name: "TypeScript", slug: "typescript" },
            { name: "Node.js", slug: "nodedotjs" },
            { name: "PostgreSQL", slug: "postgresql" }
        ],
        link: "https://gestion-taches-0cy3.onrender.com/"
    },
    {
        id: 5,
        title: "RestoRésa",
        category: "web",
        icon: "coffee",
        description: "Système de commande en ligne et réservation de tables pour restaurants.",
        longDescription: "Solution pensée pour les restaurants indépendants : menu en ligne, commande à emporter, réservation de table avec plan de salle, back-office PHP pour gérer les plats et les créneaux. Base de données MySQL relationnelle.",
        tags: [
            { name: "PHP", slug: "php" },
            { name: "JavaScript", slug: "javascript" },
            { name: "MySQL", slug: "mysql" },
            { name: "HTML5", slug: "html5" }
        ],
        link: "#"
    },
    {
        id: 6,
        title: "MétéoInstant",
        category: "web",
        image: "images/projets/meteo-instant.jpg",
        icon: "cloud",
        description: "Application météo temps réel avec prévisions et visualisations interactives.",
        longDescription: "Application météo consommant une API REST publique, avec géolocalisation, prévisions sur 7 jours et graphiques d'évolution de la température construits avec Chart.js. Optimisée pour un chargement rapide et une interface fluide.",
        tags: [
            { name: "JavaScript", slug: "javascript" },
            { name: "Chart.js", slug: "chartdotjs" },
            { name: "HTML5", slug: "html5" },
            { name: "CSS3", slug: "css" }
        ],
        link: "https://thibaut-acakpo.github.io/meteoInstant"
    },
    {
        id: 7,
        title: "SuiviForme Mobile",
        category: "mobile",
        icon: "bolt",
        description: "Application mobile de suivi d'entraînement et de nutrition.",
        longDescription: "Application mobile cross-platform permettant de suivre séances d'entraînement, apports nutritionnels et progression. Synchronisation cloud via Firebase et graphiques de suivi de performance.",
        tags: [
            { name: "React Native", slug: "react" },
            { name: "Firebase", slug: "firebase" },
            { name: "JavaScript", slug: "javascript" }
        ],
        link: "#"
    },
    {
        id: 8,
        title: "Système de Design",
        category: "design",
        icon: "layers",
        description: "Système de design complet pour une cohérence visuelle.",
        longDescription: "Système de design complet incluant une bibliothèque de composants réutilisables (React + Storybook), des tokens de design, et une documentation interactive avec vérification d'accessibilité.",
        tags: [
            { name: "Figma", slug: "figma" },
            { name: "Storybook", slug: "storybook" },
            { name: "React", slug: "react" },
            { name: "CSS3", slug: "css" }
        ],
        link: "#"
    }
];

// ========== COMPÉTENCES PAR CATÉGORIE ==========
const skills = [
    {
        category: "Front-end",
        icon: "monitor",
        description: "Interfaces modernes, accessibles et adaptées à tous les écrans.",
        skills: [
            ["HTML5", "mastered"],
            ["CSS3", "mastered"],
            ["JavaScript", "mastered"],
            ["TypeScript", "mastered"],
            ["React", "mastered"],
            ["Next.js", "mastered"],
            ["Vue.js", "mastered"],
            ["Tailwind CSS", "mastered"],
            ["Bootstrap", "mastered"],
            ["Responsive Design", "mastered"],
            ["Animations CSS", "mastered"],
            ["Accessibilité web", "mastered"],
            ["Optimisation des performances", "mastered"],
            ["JSON", "notions"],
            ["DOM et événements JavaScript", "notions"],
            ["Context API", "notions"],
            ["React Router", "notions"]
        ]
    },
    {
        category: "Back-end",
        icon: "server",
        description: "Logique métier, API et sécurité des applications.",
        skills: [
            ["PHP", "mastered"],
            ["Node.js", "mastered"],
            ["JavaScript côté serveur", "mastered"],
            ["Python", "mastered"],
            ["NestJS", "mastered"],
            ["Laravel", "notions"],
            ["Express.js", "notions"],
            ["Django", "notions"],
            ["Flask", "notions"],
            ["FastAPI", "notions"],
            ["API REST", "notions"],
            ["Authentification", "mastered"],
            ["Gestion des rôles et permissions", "mastered"],
            ["Sécurité des applications web", "mastered"],
            ["Sessions, cookies et JWT", "notions"],
            ["Architecture MVC", "notions"]
        ]
    },
    {
        category: "Bases de données",
        icon: "database",
        description: "Conception, organisation et gestion des données.",
        skills: [
            ["MySQL", "mastered"],
            ["PostgreSQL", "mastered"],
            ["SQLite", "mastered"],
            ["MariaDB", "mastered"],
            ["MongoDB", "mastered"],
            ["Firestore", "notions"],
            ["SQL", "notions"],
            ["Modélisation des données", "mastered"],
            ["MCD / MLD", "mastered"],
            ["Schémas relationnels", "mastered"],
            ["Requêtes complexes et jointures", "notions"],
            ["Transactions et index", "notions"],
            ["SQL Server", "notions"]
        ]
    },
    {
        category: "Développement mobile",
        icon: "smartphone",
        description: "Applications mobiles et expériences installables.",
        skills: [
            ["React Native", "mastered"],
            ["Expo", "mastered"],
            ["Flutter", "mastered"],
            ["Dart", "mastered"],
            ["Applications hybrides", "notions"],
            ["Applications Android natives", "notions"],
            ["Java pour Android", "notions"],
            ["Kotlin", "notions"],
            ["PWA", "mastered"]
        ]
    },
    {
        category: "Tests logiciels et QA",
        icon: "check-circle",
        description: "Vérification de la qualité, détection et suivi des anomalies.",
        skills: [
            ["Tests fonctionnels", "mastered"],
            ["Tests de régression", "mastered"],
            ["Tests exploratoires", "mastered"],
            ["Plans de test et rapports d'anomalies", "mastered"],
            ["Tests unitaires", "mastered"],
            ["Tests d'intégration", "notions"],
            ["Reproduction des bugs", "notions"],
            ["Suivi et priorisation des anomalies", "notions"],
            ["Trello / ClickUp / Jira", "mastered"],
            ["Méthodes Agile / Scrum", "notions"]
        ]
    },
    {
        category: "Outils et déploiement",
        icon: "rocket",
        description: "Outils de développement, versionnement et mise en ligne.",
        skills: [
            ["WampServer", "mastered"],
            ["Node.js et npm", "mastered"],
            ["PowerShell", "mastered"],
            ["GitHub Pages", "mastered"],
            ["Render", "mastered"],
            ["Vercel", "mastered"],
            ["Docker", "notions"],
            ["Apache", "notions"],
            ["Variables d'environnement", "notions"],
            ["AWS", "notions"]
        ]
    },
    {
        category: "Services et intégrations",
        icon: "plug",
        description: "Connexion aux services externes, e-mails, notifications et paiements.",
        groups: [
            {
                title: "E-mails",
                skills: [
                    ["Envoi d'e-mails via une adresse e-mail", "mastered"],
                    ["EmailJS", "mastered"],
                    ["Brevo", "mastered"],
                    ["Resend", "mastered"],
                    ["Nodemailer", "notions"]
                ]
            },
            {
                title: "Notifications",
                skills: [
                    ["Firebase Cloud Messaging", "notions"],
                    ["OneSignal", "notions"]
                ]
            },
            {
                title: "Paiements en ligne",
                skills: [
                    ["FedaPay", "mastered"],
                    ["KKiaPay", "mastered"]
                ]
            }
        ]
    },
    {
        category: "Intelligence artificielle",
        icon: "sparkles",
        description: "IA générative, vision par ordinateur et intégration de modèles.",
        skills: [
            ["Assistants IA pour le développement", "mastered"],
            ["Google Gemini API", "mastered"],
            ["YOLO", "mastered"],
            ["Prompt engineering", "notions"],
            ["Intégration d'API IA", "notions"],
            ["OpenAI API", "notions"],
            ["Création de chatbots", "notions"],
            ["Agents IA", "notions"],
            ["Vision par ordinateur", "notions"],
            ["Traitement du langage naturel", "notions"],
            ["Reconnaissance et traitement de la parole", "notions"],
            ["NumPy", "notions"]
        ]
    },
    {
        category: "Design et outils graphiques",
        icon: "palette",
        description: "Conception visuelle, prototypage et outils graphiques.",
        skills: [
            ["Canva", "mastered"],
            ["Adobe Photoshop", "mastered"],
            ["Figma", "notions"],
            ["UI/UX Design", "notions"],
            ["Maquettes de sites web", "notions"],
            ["Wireframes", "notions"],
            ["Identité visuelle", "notions"],
            ["Intégration fidèle de maquettes", "notions"],
            ["Principes d'accessibilité", "notions"]
        ]
    },
    {
        category: "Compétences professionnelles",
        icon: "briefcase",
        description: "Méthodes de travail, analyse, collaboration et résolution de problèmes.",
        skills: [
            ["Résolution de problèmes", "mastered"],
            ["Débogage", "mastered"],
            ["Analyse des besoins", "mastered"],
            ["Autonomie", "mastered"],
            ["Travail en équipe", "mastered"],
            ["Gestion du temps", "mastered"],
            ["Organisation et rigueur", "mastered"],
            ["Apprentissage de nouvelles technologies", "mastered"],
            ["Gestion de projet", "mastered"],
            ["Présentation de projets", "mastered"],
            ["Documentation technique", "notions"],
            ["Veille technologique", "notions"],
            ["Communication technique", "notions"]
        ]
    }
];

// ========== ICÔNES SVG (pour les 8 anciens projets) ==========
const PROJECT_ICONS = {
    heart: `<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s-8.5-5.2-10.5-9.7C.5 8.8 2.8 4 7.1 4c2.1 0 3.3 1.1 4.1 2.2C12 5.1 13.2 4 15.3 4c4.3 0 6.6 4.8 5.6 7.3C20.5 15.8 12 21 12 21z"></path></svg>`,
    wallet: `<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>`,
    pulse: `<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>`,
    layout: `<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>`,
    coffee: `<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line></svg>`,
    cloud: `<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>`,
    bolt: `<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>`,
    layers: `<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>`
};

// ========== Loading ==========
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('loading').classList.add('hidden');
    }, 1000);
});

// ========== Particles ==========
function createParticles() {
    const container = document.getElementById('particles');
    if (!container) return;
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 10 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 5) + 's';
        container.appendChild(particle);
    }
}
createParticles();

// ========== Menu Toggle ==========
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}

// ========== Header Hide on Scroll ==========
let lastScroll = 0;
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    if (!header) return;
    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll && currentScroll > 100) {
        header.classList.add('hidden');
    } else {
        header.classList.remove('hidden');
    }
    lastScroll = currentScroll;
});

// ========== Smooth Scroll ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ========== Counter Animation ==========
function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 30);
}

const counters = document.querySelectorAll('.stat-number');
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounter(entry.target);
            counterObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

counters.forEach(counter => counterObserver.observe(counter));

// ========== Projects ==========
// ✅ CORRIGÉ : les logos de tech ont un onerror qui masque l'image si le slug est invalide
// (le nom reste visible dans la liste .project-tags)
function techLogoImg(tag) {
    return `<img src="https://cdn.simpleicons.org/${tag.slug}" alt="${tag.name}" title="${tag.name}" loading="lazy" onerror="this.style.display='none'">`;
}

function renderProjects(filter = 'all') {
    const grid = document.getElementById('projectsGrid');
    if (!grid) return;
    grid.innerHTML = '';

    let filteredProjects = filter === 'all'
        ? projects
        : projects.filter(p => p.category === filter);

    const totalProjects = filteredProjects.length;
    if (!showAllProjects && totalProjects > PROJECTS_LIMIT) {
        filteredProjects = filteredProjects.slice(0, PROJECTS_LIMIT);
    }

    filteredProjects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.setAttribute('data-category', project.category);

        const imageContent = project.image
            ? `<img src="${project.image}" alt="${project.title}" loading="lazy">`
            : `<div class="project-icon-logo">${PROJECT_ICONS[project.icon]}</div>`;

        card.innerHTML = `
            <div class="project-image">
                ${imageContent}
                <div class="project-overlay">
                    <button onclick="openModal(${project.id})">Voir plus</button>
                </div>
            </div>
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tech-logos">
                    ${project.tags.map(tag => techLogoImg(tag)).join('')}
                </div>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="tag">${tag.name}</span>`).join('')}
                </div>
            </div>
        `;
        grid.appendChild(card);
    });

    const btnContainer = document.getElementById('showAllContainer');
    if (btnContainer) {
        if (filter === 'all' && totalProjects > PROJECTS_LIMIT) {
            btnContainer.style.display = 'flex';
            const btn = document.getElementById('showAllBtn');
            btn.textContent = showAllProjects
                ? 'Voir moins de projets'
                : `Voir tous les projets (${totalProjects})`;
        } else {
            btnContainer.style.display = 'none';
        }
    }
}

function toggleShowAllProjects() {
    showAllProjects = !showAllProjects;
    renderProjects('all');
}

const filterButtons = document.querySelectorAll('.filter-btn');
filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        showAllProjects = false;
        renderProjects(btn.getAttribute('data-filter'));
    });
});

renderProjects();

// ========== Modal ==========
function openModal(projectId) {
    const project = projects.find(p => p.id === projectId);
    if (!project) return;
    const modal = document.getElementById('projectModal');
    const modalBody = document.getElementById('modalBody');

    const imageContent = project.image
        ? `<img src="${project.image}" alt="${project.title}" style="width:100%;height:100%;object-fit:cover;">`
        : `<div class="modal-icon-logo">${PROJECT_ICONS[project.icon]}</div>`;

    modalBody.innerHTML = `
        <div class="modal-image">${imageContent}</div>
        <h2>${project.title}</h2>
        <p style="margin: 1rem 0;">${project.longDescription}</p>
        <div class="project-tech-logos">
            ${project.tags.map(tag => techLogoImg(tag)).join('')}
        </div>
        <div class="project-tags">
            ${project.tags.map(tag => `<span class="tag">${tag.name}</span>`).join('')}
        </div>
        <a href="${project.link}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="margin-top: 2rem;">Voir le projet</a>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('projectModal').classList.remove('active');
    document.body.style.overflow = 'auto';
}

document.getElementById('projectModal')?.addEventListener('click', (e) => {
    if (e.target.id === 'projectModal') {
        closeModal();
    }
});

// ========== Affichage des compétences par catégorie (DESIGN OPTION 2) ==========
const SKILL_CATEGORY_ICONS = {
    monitor: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8M12 17v4"/></svg>',
    server: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="3" width="16" height="7" rx="2"/><rect x="4" y="14" width="16" height="7" rx="2"/><path d="M8 6h.01M8 17h.01M12 6h4M12 17h4"/></svg>',
    database: '<svg viewBox="0 0 24 24" aria-hidden="true"><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/></svg>',
    smartphone: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="6" y="2" width="12" height="20" rx="2"/><path d="M10 18h4"/></svg>',
    'check-circle': '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="9"/></svg>',
    rocket: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 14c-2 1-3 3-3 5 2 0 4-1 5-3M9 15l-1-5C11 5 15 3 21 3c0 6-2 10-7 13l-5-1z"/><circle cx="15" cy="8" r="1.5"/></svg>',
    plug: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 3v5M16 3v5M6 8h12v3a6 6 0 0 1-6 6v4M12 17v4"/></svg>',
    sparkles: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3zM19 15l1 2.5 2 1-2 1-1 2.5-1-2.5-2-1 2-1 1-2.5z"/></svg>',
    palette: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3a9 9 0 1 0 0 18h1a2 2 0 0 0 1-3.7 1.5 1.5 0 0 1 1-2.8H17a4 4 0 0 0 4-4c0-4.1-4-7.5-9-7.5z"/><path d="M7.5 10h.01M10 6.5h.01M15 7.5h.01M17 11h.01"/></svg>',
    briefcase: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="7" width="18" height="14" rx="2"/><path d="M8 7V4h8v3M3 12h18M10 12v2h4v-2"/></svg>'
};

// ✅ CORRIGÉ :
//  - 'PWA' utilise maintenant le slug 'pwa' (le slug 'progressivewebapps' n'existe pas)
//  - Entrées retirées (aucun logo correspondant dans Simple Icons, le fallback SVG prend le relais) :
//    WampServer, EmailJS, Nodemailer, OneSignal, FedaPay, KKiaPay
const SKILL_LOGOS = {
    'HTML5': 'html5', 'CSS3': 'css', 'JavaScript': 'javascript', 'TypeScript': 'typescript',
    'React': 'react', 'Next.js': 'nextdotjs', 'Vue.js': 'vuedotjs', 'Tailwind CSS': 'tailwindcss',
    'Bootstrap': 'bootstrap', 'PHP': 'php', 'Node.js': 'nodedotjs', 'Python': 'python',
    'NestJS': 'nestjs', 'Laravel': 'laravel', 'Express.js': 'express', 'Django': 'django',
    'Flask': 'flask', 'FastAPI': 'fastapi', 'MySQL': 'mysql', 'PostgreSQL': 'postgresql',
    'SQLite': 'sqlite', 'MariaDB': 'mariadb', 'MongoDB': 'mongodb', 'Firestore': 'firebase',
    'SQL Server': 'microsoftsqlserver', 'React Native': 'react', 'Expo': 'expo', 'Flutter': 'flutter',
    'Dart': 'dart', 'PWA': 'pwa', 'Node.js et npm': 'nodedotjs',
    'GitHub Pages': 'github', 'Render': 'render', 'Vercel': 'vercel', 'Docker': 'docker',
    'Apache': 'apache', 'Brevo': 'brevo', 'Resend': 'resend',
    'Firebase Cloud Messaging': 'firebase', 'Google Gemini API': 'googlegemini', 'YOLO': 'ultralytics',
    'OpenAI API': 'openai', 'NumPy': 'numpy', 'Canva': 'canva', 'Adobe Photoshop': 'adobephotoshop',
    'Figma': 'figma', 'Trello / ClickUp / Jira': 'trello'
};

// ✅ NOUVEAU : logos officiels introuvables sur Simple Icons, servis via l'API Iconify
// (devicon / selfhst / logos = vrais logos de marque)
const SKILL_CUSTOM_LOGOS = {
    'EmailJS': 'https://api.iconify.design/devicon/emailjs.svg',
    'Nodemailer': 'https://api.iconify.design/selfhst/nodemailer.svg',
    'OneSignal': 'https://api.iconify.design/logos/onesignal.svg'
};
// WampServer, FedaPay et KKiaPay : aucun logo officiel disponible dans une
// bibliothèque d'icônes → icônes personnalisées (voir createFallbackIcon)

function createFallbackIcon(name) {
    const icons = {
        'Responsive Design': '<rect x="3" y="4" width="13" height="10" rx="1.5"/><path d="M7 18h5M9.5 14v4"/><rect x="17" y="9" width="4" height="10" rx="1"/>',
        'Animations CSS': '<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z"/><path d="M19 16v5M16.5 18.5h5"/>',
        'Accessibilité web': '<circle cx="12" cy="5" r="2"/><path d="M4 9h16M12 9v5m0 0l-4 7m4-7l4 7"/>',
        'Optimisation des performances': '<path d="M3 17l6-6 4 3 8-9"/><path d="M15 5h6v6"/>',
        'JSON': '<path d="M9 4H7a2 2 0 0 0-2 2v3a3 3 0 0 1-2 3 3 3 0 0 1 2 3v3a2 2 0 0 0 2 2h2M15 4h2a2 2 0 0 1 2 2v3a3 3 0 0 0 2 3 3 3 0 0 0-2 3v3a2 2 0 0 1-2 2h-2"/>',
        'DOM et événements JavaScript': '<circle cx="12" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/><path d="M12 7v5M5 17v-3h14v3"/>',
        'Context API': '<circle cx="12" cy="12" r="9"/><path d="M12 7v10M7 12h10"/>',
        'React Router': '<circle cx="6" cy="6" r="2"/><circle cx="18" cy="18" r="2"/><path d="M8 6h5a5 5 0 0 1 5 5v5M16 14l2 2 2-2"/>',
        'JavaScript côté serveur': '<rect x="3" y="4" width="18" height="6" rx="1.5"/><rect x="3" y="14" width="18" height="6" rx="1.5"/><path d="M7 7h.01M7 17h.01M11 7h6M11 17h6"/>',
        'API REST': '<path d="M7 7h10M13 3l4 4-4 4M17 17H7m4-4l-4 4 4 4"/>',
        'Authentification': '<rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3"/>',
        'Gestion des rôles et permissions': '<circle cx="9" cy="8" r="3"/><path d="M3 20v-2a6 6 0 0 1 12 0v2M16 11l2 2 4-4"/>',
        'Sécurité des applications web': '<path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11z"/><path d="M9 12l2 2 4-4"/>',
        'Sessions, cookies et JWT': '<rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3"/>',
        'Architecture MVC': '<rect x="3" y="4" width="7" height="6" rx="1"/><rect x="14" y="4" width="7" height="6" rx="1"/><rect x="8.5" y="15" width="7" height="6" rx="1"/><path d="M6.5 10v2h11v-2M12 12v3"/>',
        'SQL': '<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/>',
        'Modélisation des données': '<circle cx="5" cy="6" r="2"/><circle cx="19" cy="6" r="2"/><circle cx="12" cy="18" r="2"/><path d="M7 7l4 9M17 7l-4 9M7 6h10"/>',
        'MCD / MLD': '<rect x="3" y="4" width="7" height="6" rx="1"/><rect x="14" y="14" width="7" height="6" rx="1"/><path d="M10 7h4a2 2 0 0 1 2 2v5"/>',
        'Schémas relationnels': '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><path d="M10 6h4v8M6 10v4h8"/>',
        'Requêtes complexes et jointures': '<path d="M4 7h15l-3-3M20 17H5l3 3M9 4l-4 3 4 3M15 14l4 3-4 3"/>',
        'Transactions et index': '<path d="M8 6h13M8 12h13M8 18h13"/><path d="M3 6h.01M3 12h.01M3 18h.01"/>',
        'Applications hybrides': '<rect x="6" y="2" width="12" height="20" rx="2"/><path d="M10 18h4M3 6h3M18 16h3"/>',
        'Applications Android natives': '<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 7h6M9 17h6"/>',
        'Java pour Android': '<path d="M8 3c4 2-4 3 0 5M14 3c4 2-4 3 0 5M5 11h14l-1 8H6z"/><path d="M4 21h16"/>',
        'Kotlin': '<path d="M4 4h7L4 12l7 8H4zM12 12l8-8v16z"/>',
        'Tests fonctionnels': '<path d="M5 12l4 4L19 6"/><circle cx="12" cy="12" r="9"/>',
        'Tests de régression': '<path d="M3 11a9 9 0 0 1 15-6l2 2M20 3v4h-4M21 13a9 9 0 0 1-15 6l-2-2M4 21v-4h4"/>',
        'Tests exploratoires': '<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5M8 10h5M10.5 7.5v5"/>',
        "Plans de test et rapports d'anomalies": '<path d="M8 4h11v17H5V4h3M9 2h6v4H9zM8 11h8M8 15h8"/>',
        'Tests unitaires': '<path d="M5 12l4 4L19 6"/><path d="M4 4h5M4 20h5M15 4h5M15 20h5"/>',
        'Tests d’intégration': '<circle cx="12" cy="12" r="9"/><path d="M12 7v10M7 12h10"/>',
        "Tests d'intégration": '<circle cx="12" cy="12" r="9"/><path d="M12 7v10M7 12h10"/>',
        'Reproduction des bugs': '<path d="M8 8h8v12H8zM10 4h4l2 4H8zM5 11H3M5 15H3M19 11h2M19 15h2M10 12h4M10 16h4"/>',
        'Suivi et priorisation des anomalies': '<path d="M4 6h16M4 12h10M4 18h7"/><circle cx="18" cy="17" r="3"/><path d="M18 15v2l1 1"/>',
        'Méthodes Agile / Scrum': '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
        'PowerShell': '<path d="m5 5 6 7-6 7M13 19h6"/>',
        'Variables d’environnement': '<path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1"/><circle cx="12" cy="12" r="5"/>',
        "Variables d'environnement": '<path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1"/><circle cx="12" cy="12" r="5"/>',
        'AWS': '<path d="M3 17a4 4 0 0 1 1-8 6 6 0 0 1 11-2 5 5 0 0 1 5 10H3z"/>',
        'Envoi d’e-mails via une adresse e-mail': '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
        'Envoi d\'e-mails via une adresse e-mail': '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
        // ✅ NOUVEAUX FALLBACKS (pas de logo Simple Icons disponible)
        // WampServer : « W » stylisé évoquant le logo officiel
        'WampServer': '<path d="M4 5l2.6 12.5L12 8.5l5.4 9L20 5"/><path d="M9 19h6"/>',
        'EmailJS': '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/><path d="M12 16h.01"/>',
        'Nodemailer': '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/><path d="M2 12l20-6-4 10-6 2z"/>',
        'OneSignal': '<path d="M18 8a6 6 0 1 0-12 0c0 7-3 8-3 8h18s-3-1-3-8"/><path d="M10.3 21a1.9 1.9 0 0 0 3.4 0"/>',
        // FedaPay : « F » stylisé (marque verte béninoise)
        'FedaPay': '<path d="M7 20V4h10M7 12h7"/>',
        // KKiaPay : « K » stylisé dans un téléphone
        'KKiaPay': '<rect x="6" y="2" width="12" height="20" rx="2"/><path d="M11 18h2M9 7l6 6M15 7l-6 6"/>',
        'Prompt engineering': '<path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z"/>',
        'Intégration d’API IA': '<path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8"/><circle cx="12" cy="12" r="4"/>',
        "Intégration d'API IA": '<path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8"/><circle cx="12" cy="12" r="4"/>',
        'Création de chatbots': '<path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5 9 9 0 0 1-4-.9L3 21l1.9-5.5a9 9 0 0 1-.9-4A8.5 8.5 0 0 1 12.5 3h.5a8.5 8.5 0 0 1 8 8v.5z"/><path d="M8 11h.01M12 11h.01M16 11h.01"/>',
        'Agents IA': '<circle cx="12" cy="12" r="3"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M19.1 4.9l-2.8 2.8M7.7 16.3l-2.8 2.8"/>',
        'Vision par ordinateur': '<path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
        'Traitement du langage naturel': '<path d="M4 5h16v12H9l-5 4z"/><path d="M8 9h8M8 13h5"/>',
        'Reconnaissance et traitement de la parole': '<rect x="9" y="3" width="6" height="12" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3M9 21h6"/>',
        'UI/UX Design': '<path d="m4 20 4-.8L19 8a2.8 2.8 0 0 0-4-4L4 15l0 5z"/><path d="m13.5 5.5 4 4"/>',
        'Maquettes de sites web': '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M7 6.5h.01M10 6.5h.01M7 13h4M7 16h8"/>',
        'Wireframes': '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 9v12M13 13h4M13 17h4"/>',
        'Identité visuelle': '<path d="M12 3l2.5 5.5L20 11l-5.5 2.5L12 19l-2.5-5.5L4 11l5.5-2.5L12 3z"/>',
        'Intégration fidèle de maquettes': '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M7 13h4M7 16h8"/>',
        'Principes d’accessibilité': '<circle cx="12" cy="5" r="2"/><path d="M4 9h16M12 9v5m0 0-4 7m4-7 4 7"/>',
        "Principes d'accessibilité": '<circle cx="12" cy="5" r="2"/><path d="M4 9h16M12 9v5m0 0-4 7m4-7 4 7"/>',
        'Résolution de problèmes': '<path d="M9 3h6l1 3 3 1v6l-3 1-1 3H9l-1-3-3-1V7l3-1z"/><circle cx="12" cy="10" r="2"/><path d="M12 12v3"/>',
        'Débogage': '<path d="M8 8h8v12H8zM10 4h4l2 4H8zM5 11H3M5 15H3M19 11h2M19 15h2"/>',
        'Analyse des besoins': '<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5M8 10h5"/>',
        'Autonomie': '<path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6 5.6 18.4"/>',
        'Travail en équipe': '<circle cx="9" cy="8" r="3"/><path d="M3 20v-2a6 6 0 0 1 12 0v2M16 5a3 3 0 0 1 0 6M18 14a5 5 0 0 1 3 4v2"/>',
        'Gestion du temps': '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
        'Organisation et rigueur': '<path d="M9 6h11M9 12h11M9 18h11M4 6h.01M4 12h.01M4 18h.01"/>',
        'Apprentissage de nouvelles technologies': '<path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6 5.6 18.4"/>',
        'Gestion de projet': '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M8 4v16M8 9h13M8 14h13"/>',
        'Présentation de projets': '<rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8M12 17v4M8 9l3 2 5-4"/>',
        'Documentation technique': '<path d="M5 3h10l4 4v14H5zM15 3v5h4M8 12h8M8 16h8"/>',
        'Veille technologique': '<circle cx="11" cy="11" r="7"/><path d="m16 16 5 5M8 11h6M11 8v6"/>',
        'Communication technique': '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>'
    };
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('width', '22');
    svg.setAttribute('height', '22');
    svg.setAttribute('aria-hidden', 'true');
    svg.setAttribute('focusable', 'false');
    svg.innerHTML = icons[name] || '<path d="M12 3v18M3 12h18"/><circle cx="12" cy="12" r="8"/>';
    const wrapper = document.createElement('span');
    wrapper.className = 'skill-badge-fallback';
    wrapper.setAttribute('aria-hidden', 'true');
    wrapper.appendChild(svg);
    return wrapper;
}

// FONCTION MODIFIÉE POUR LE DESIGN OPTION 2
function renderSkills() {
    const grid = document.getElementById('skillsGrid');
    if (!grid) return;
    grid.innerHTML = '';

    skills.forEach((category, index) => {
        const card = document.createElement('article');
        card.className = 'skill-category';
        card.style.setProperty('--skill-card-index', index);

        // En-tête de la catégorie
        const header = document.createElement('div');
        header.className = 'skill-category-header';

        const icon = document.createElement('span');
        icon.className = 'skill-category-icon';
        icon.innerHTML = SKILL_CATEGORY_ICONS[category.icon] || SKILL_CATEGORY_ICONS.monitor;

        const headingContent = document.createElement('div');
        headingContent.className = 'skill-category-heading';

        const title = document.createElement('h3');
        title.className = 'skill-category-title';
        title.textContent = category.category;

        const description = document.createElement('p');
        description.className = 'skill-category-description';
        description.textContent = category.description || '';

        headingContent.append(title, description);
        header.append(icon, headingContent);
        card.appendChild(header);

        // Fonction pour créer les badges
        function createBadges(items) {
            const badges = document.createElement('div');
            badges.className = 'skill-badges';
            items.forEach(([name, level]) => {
                const badge = document.createElement('span');
                badge.className = `skill-badge ${level}`;
                badge.title = level === 'mastered' ? 'Maîtrisé' : 'Notions';

                const slug = SKILL_LOGOS[name];
                const customUrl = SKILL_CUSTOM_LOGOS[name];
                if (customUrl) {
                    // Logo officiel servi par l'API Iconify (ex : OneSignal, EmailJS, Nodemailer)
                    const logo = document.createElement('img');
                    logo.className = 'skill-badge-logo';
                    logo.src = customUrl;
                    logo.alt = '';
                    logo.loading = 'lazy';
                    logo.onerror = () => {
                        logo.replaceWith(createFallbackIcon(name));
                    };
                    badge.appendChild(logo);
                } else if (slug) {
                    const logo = document.createElement('img');
                    logo.className = 'skill-badge-logo';
                    logo.src = `https://cdn.simpleicons.org/${slug}`;
                    logo.alt = '';
                    logo.loading = 'lazy';
                    logo.onerror = () => {
                        logo.replaceWith(createFallbackIcon(name));
                    };
                    badge.appendChild(logo);
                } else {
                    badge.appendChild(createFallbackIcon(name));
                }

                const label = document.createElement('span');
                label.textContent = name;
                badge.appendChild(label);
                badges.appendChild(badge);
            });
            return badges;
        }

        if (category.skills) card.appendChild(createBadges(category.skills));
        if (category.groups) {
            category.groups.forEach(group => {
                const groupTitle = document.createElement('h4');
                groupTitle.className = 'skill-group-title';
                groupTitle.textContent = group.title;
                card.appendChild(groupTitle);
                card.appendChild(createBadges(group.skills));
            });
        }
        grid.appendChild(card);
    });
}

renderSkills();

// ========== Animation des catégories de compétences ==========
const skillCategories = document.querySelectorAll('.skill-category');
if ('IntersectionObserver' in window) {
    const skillObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08 });
    skillCategories.forEach(category => skillObserver.observe(category));
} else {
    skillCategories.forEach(category => category.classList.add('visible'));
}

// ========== Formulaire avec EmailJS ==========
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
    e.preventDefault();

    const submitBtn = document.getElementById('submitBtn');
    const originalText = submitBtn.textContent;

    submitBtn.disabled = true;
    submitBtn.textContent = 'Envoi en cours...';

    emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, this)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            document.getElementById('contactForm').reset();
            showSuccessModal();
        }, function(error) {
            console.log('FAILED...', error);
            // ✅ CORRIGÉ : apostrophe échappée (erreur de syntaxe avant)
            alert("❌ Erreur lors de l'envoi. Veuillez réessayer.");
        })
        .finally(function() {
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
        });
});

// ========== Modal de Succès ==========
function showSuccessModal() {
    const modal = document.getElementById('successModal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeSuccessModal() {
    const modal = document.getElementById('successModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

document.getElementById('successModal')?.addEventListener('click', function(e) {
    if (e.target.id === 'successModal') {
        closeSuccessModal();
    }
});

// ========== Scroll to Top ==========
const scrollTop = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
    if (!scrollTop) return;
    if (window.pageYOffset > 300) {
        scrollTop.classList.add('visible');
    } else {
        scrollTop.classList.remove('visible');
    }
});

scrollTop?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ========== PWA SERVICE WORKER ==========
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js')
            .then(registration => {
                console.log('Service Worker enregistré avec succès:', registration.scope);
            })
            .catch(error => {
                console.log('Échec de l\'enregistrement du Service Worker:', error);
            });
    });
}
