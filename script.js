// ⚠️ REMPLACEZ CES VALEURS PAR VOS IDS EmailJS
const EMAILJS_SERVICE_ID = 'service_qhh2dea';  // À remplacer
const EMAILJS_TEMPLATE_ID = 'template_u937i15'; // À remplacer

// Icônes représentant le DOMAINE / la nature de chaque projet (et non une technologie)
// Utilisées pour la grande illustration de chaque carte projet
const PROJECT_ICONS = {
    cart: `<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>`,
    wallet: `<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>`,
    pulse: `<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>`,
    layout: `<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>`,
    coffee: `<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line></svg>`,
    cloud: `<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>`,
    bolt: `<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>`,
    layers: `<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>`
};

// Data
// Chaque tag possède un "slug" Simple Icons pour afficher le vrai logo officiel de la technologie
const projects = [
    {
        id: 1,
        title: "NovaBoutique",
        category: "web",
        icon: "cart",
        description: "Plateforme e-commerce complète avec panier, paiement Stripe et gestion des commandes.",
        longDescription: "Plateforme de commerce électronique développée avec React côté client et Node.js/Express côté serveur. Intègre Stripe pour les paiements sécurisés, une gestion des stocks en temps réel et un tableau de bord administrateur pour le suivi des commandes.",
        tags: [
            { name: "React", slug: "react" },
            { name: "Node.js", slug: "nodedotjs" },
            { name: "MongoDB", slug: "mongodb" },
            { name: "Stripe", slug: "stripe" }
        ],
        link: "#"
    },
    {
        id: 2,
        title: "GestionFinances",
        category: "web",
        icon: "wallet",
        description: "Dashboard de gestion financière personnelle avec visualisation des dépenses.",
        longDescription: "Application web permettant de suivre revenus, dépenses et budgets mensuels. Back-end en PHP avec base de données MySQL, graphiques interactifs pour visualiser la répartition des dépenses par catégorie, export des données en PDF.",
        tags: [
            { name: "PHP", slug: "php" },
            { name: "MySQL", slug: "mysql" },
            { name: "JavaScript", slug: "javascript" },
            { name: "Chart.js", slug: "chartdotjs" }
        ],
        link: "#"
    },
    {
        id: 3,
        title: "MédiRDV",
        category: "web",
        icon: "pulse",
        description: "Plateforme de prise de rendez-vous médicaux en ligne pour cabinets et patients.",
        longDescription: "Système complet de réservation de créneaux médicaux : espace patient, espace praticien, gestion des disponibilités et rappels automatiques par email. Architecture PHP/MySQL avec une interface dynamique en JavaScript.",
        tags: [
            { name: "PHP", slug: "php" },
            { name: "MySQL", slug: "mysql" },
            { name: "JavaScript", slug: "javascript" },
            { name: "Bootstrap", slug: "bootstrap" }
        ],
        link: "#"
    },
    {
        id: 4,
        title: "GestionTâches",
        category: "web",
        icon: "layout",
        description: "Outil collaboratif de gestion de projets en mode kanban, temps réel.",
        longDescription: "Application de gestion de projets façon kanban avec colonnes personnalisables, glisser-déposer des tâches, notifications en temps réel et permissions par équipe. Front-end React/TypeScript, API Node.js et base PostgreSQL.",
        tags: [
            { name: "React", slug: "react" },
            { name: "TypeScript", slug: "typescript" },
            { name: "Node.js", slug: "nodedotjs" },
            { name: "PostgreSQL", slug: "postgresql" }
        ],
        link: "#"
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
        icon: "cloud",
        description: "Application météo temps réel avec prévisions et visualisations interactives.",
        longDescription: "Application météo consommant une API REST publique, avec géolocalisation, prévisions sur 7 jours et graphiques d'évolution de la température construits avec Chart.js. Optimisée pour un chargement rapide et une interface fluide.",
        tags: [
            { name: "JavaScript", slug: "javascript" },
            { name: "Chart.js", slug: "chartdotjs" },
            { name: "HTML5", slug: "html5" },
            { name: "CSS3", slug: "css" }
        ],
        link: "#"
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

const skills = [
    { name: "PHP (langage principal)", slug: "php", level: 92 },
    { name: "JavaScript", slug: "javascript", level: 90 },
    { name: "React", slug: "react", level: 88 },
    { name: "Node.js", slug: "nodedotjs", level: 85 },
    { name: "HTML5", slug: "html5", level: 95 },
    { name: "CSS3", slug: "css", level: 93 },
    { name: "Vue.js", slug: "vuedotjs", level: 82 },
    { name: "MongoDB", slug: "mongodb", level: 80 },
    { name: "TypeScript", slug: "typescript", level: 83 },
    { name: "Figma (UI/UX)", slug: "figma", level: 85 }
];

// Loading
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('loading').classList.add('hidden');
    }, 1000);
});

// Particles
function createParticles() {
    const container = document.getElementById('particles');
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

// Typing Effect
const texts = ['Développeur Full Stack', 'Designer UI/UX', 'Créateur d\'Expériences'];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingElement = document.querySelector('.typing');

function type() {
    const currentText = texts[textIndex];
    
    if (isDeleting) {
        typingElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }

    typingElement.innerHTML = typingElement.textContent + '<span class="cursor"></span>';

    let delay = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentText.length) {
        delay = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        delay = 500;
    }

    setTimeout(type, delay);
}
type();

// Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Header Hide on Scroll
let lastScroll = 0;
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > lastScroll && currentScroll > 100) {
        header.classList.add('hidden');
    } else {
        header.classList.remove('hidden');
    }
    lastScroll = currentScroll;
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Counter Animation
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

// Projects
function renderProjects(filter = 'all') {
    const grid = document.getElementById('projectsGrid');
    grid.innerHTML = '';
    
    const filteredProjects = filter === 'all' 
        ? projects 
        : projects.filter(p => p.category === filter);

    filteredProjects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.setAttribute('data-category', project.category);
        card.innerHTML = `
            <div class="project-image">
                <div class="project-icon-logo">${PROJECT_ICONS[project.icon]}</div>
                <div class="project-overlay">
                    <button onclick="openModal(${project.id})">Voir plus</button>
                </div>
            </div>
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tech-logos">
                    ${project.tags.map(tag => `<img src="https://cdn.simpleicons.org/${tag.slug}" alt="${tag.name}" title="${tag.name}" loading="lazy">`).join('')}
                </div>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="tag">${tag.name}</span>`).join('')}
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Filter Projects
const filterButtons = document.querySelectorAll('.filter-btn');
filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderProjects(btn.getAttribute('data-filter'));
    });
});

renderProjects();

// Modal
function openModal(projectId) {
    const project = projects.find(p => p.id === projectId);
    const modal = document.getElementById('projectModal');
    const modalBody = document.getElementById('modalBody');
    
    modalBody.innerHTML = `
        <div class="modal-image"><div class="modal-icon-logo">${PROJECT_ICONS[project.icon]}</div></div>
        <h2>${project.title}</h2>
        <p style="margin: 1rem 0;">${project.longDescription}</p>
        <div class="project-tech-logos">
            ${project.tags.map(tag => `<img src="https://cdn.simpleicons.org/${tag.slug}" alt="${tag.name}" title="${tag.name}" loading="lazy">`).join('')}
        </div>
        <div class="project-tags">
            ${project.tags.map(tag => `<span class="tag">${tag.name}</span>`).join('')}
        </div>
        <a href="${project.link}" class="btn btn-primary" style="margin-top: 2rem;">Voir le projet</a>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('projectModal').classList.remove('active');
    document.body.style.overflow = 'auto';
}

document.getElementById('projectModal').addEventListener('click', (e) => {
    if (e.target.id === 'projectModal') {
        closeModal();
    }
});

// Skills
function renderSkills() {
    const grid = document.getElementById('skillsGrid');
    skills.forEach(skill => {
        const card = document.createElement('div');
        card.className = 'skill-card';
        card.innerHTML = `
            <div class="skill-icon"><img src="https://cdn.simpleicons.org/${skill.slug}" alt="${skill.name}" loading="lazy"></div>
            <div class="skill-name">${skill.name}</div>
            <div class="skill-bar">
                <div class="skill-progress" style="--progress: ${skill.level}%"></div>
            </div>
            <div class="skill-percentage">${skill.level}%</div>
        `;
        grid.appendChild(card);
    });
}
renderSkills();

// Skills Animation
const skillCards = document.querySelectorAll('.skill-card');
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.5 });

skillCards.forEach(card => skillObserver.observe(card));

// ⚠️ NOUVEAU CODE : Formulaire avec EmailJS
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const submitBtn = document.getElementById('submitBtn');
    const originalText = submitBtn.textContent;
    
    // Désactiver le bouton
    submitBtn.disabled = true;
    submitBtn.textContent = 'Envoi en cours...';
    
    // Envoyer l'email avec EmailJS
    emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, this)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            
            // Réinitialiser le formulaire
            document.getElementById('contactForm').reset();
            
            // Afficher le modal de succès
            showSuccessModal();
            
        }, function(error) {
            console.log('FAILED...', error);
            alert('❌ Erreur lors de l\'envoi. Veuillez réessayer.');
        })
        .finally(function() {
            // Réactiver le bouton
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
        });
});

// Fonctions Modal de Succès
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

// Fermer le modal en cliquant à l'extérieur
document.getElementById('successModal')?.addEventListener('click', function(e) {
    if (e.target.id === 'successModal') {
        closeSuccessModal();
    }
});

// Scroll to Top
const scrollTop = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTop.classList.add('visible');
    } else {
        scrollTop.classList.remove('visible');
    }
});

scrollTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});