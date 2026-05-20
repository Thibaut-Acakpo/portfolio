// ⚠️ REMPLACEZ CES VALEURS PAR VOS IDS EmailJS
const EMAILJS_SERVICE_ID = 'service_qhh2dea';  // À remplacer
const EMAILJS_TEMPLATE_ID = 'template_u937i15'; // À remplacer

// Data
const projects = [
    {
        id: 1,
        title: "E-Commerce Platform",
        category: "web",
        icon: "🛒",
        description: "Plateforme e-commerce complète avec panier, paiement et gestion des commandes.",
        longDescription: "Une plateforme de commerce électronique complète développée avec React et Node.js. Intègre Stripe pour les paiements, un système de gestion des stocks en temps réel, et un tableau de bord administrateur complet.",
        tags: ["React", "Node.js", "MongoDB", "Stripe"],
        link: "#"
    },
    {
        id: 2,
        title: "Application Mobile Fitness",
        category: "mobile",
        icon: "💪",
        description: "Application de suivi d'entraînement et de nutrition.",
        longDescription: "Application mobile cross-platform permettant aux utilisateurs de suivre leurs entraînements, leur nutrition et leurs progrès. Intègre des graphiques interactifs et un système de gamification.",
        tags: ["React Native", "Firebase", "Redux"],
        link: "#"
    },
    {
        id: 3,
        title: "Dashboard Analytics",
        category: "web",
        icon: "📊",
        description: "Tableau de bord analytique avec visualisations de données en temps réel.",
        longDescription: "Dashboard moderne avec visualisations de données complexes, mises à jour en temps réel via WebSocket, et exports personnalisables. Optimisé pour gérer de grands volumes de données.",
        tags: ["Vue.js", "D3.js", "WebSocket", "PostgreSQL"],
        link: "#"
    },
    {
        id: 4,
        title: "Portfolio Design System",
        category: "design",
        icon: "🎨",
        description: "Système de design complet pour une cohérence visuelle.",
        longDescription: "Système de design complet incluant une bibliothèque de composants réutilisables, des guidelines de marque, et une documentation interactive. Construit avec Storybook.",
        tags: ["Figma", "Storybook", "CSS", "Design Tokens"],
        link: "#"
    },
    {
        id: 5,
        title: "API REST Scalable",
        category: "web",
        icon: "⚡",
        description: "API RESTful haute performance avec authentification JWT.",
        longDescription: "API RESTful robuste et scalable avec authentification JWT, rate limiting, caching avec Redis, et documentation Swagger complète. Déployée sur AWS avec CI/CD.",
        tags: ["Node.js", "Express", "Redis", "AWS"],
        link: "#"
    },
    {
        id: 6,
        title: "App de Réservation",
        category: "mobile",
        icon: "📅",
        description: "Application de réservation en ligne avec calendrier interactif.",
        longDescription: "Application permettant la réservation de services en ligne avec gestion de calendrier, notifications push, et paiements intégrés. Interface intuitive et fluide.",
        tags: ["Flutter", "Firebase", "Google Calendar API"],
        link: "#"
    }
];

const skills = [
    { name: "HTML/CSS", icon: "🌐", level: 95 },
    { name: "JavaScript", icon: "⚡", level: 90 },
    { name: "React", icon: "⚛️", level: 88 },
    { name: "Node.js", icon: "🟢", level: 85 },
    { name: "Vue.js", icon: "💚", level: 82 },
    { name: "MongoDB", icon: "🍃", level: 80 },
    { name: "UI/UX Design", icon: "🎨", level: 85 },
    { name: "TypeScript", icon: "📘", level: 83 }
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
                ${project.icon}
                <div class="project-overlay">
                    <button onclick="openModal(${project.id})">Voir plus</button>
                </div>
            </div>
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
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
        <div class="modal-image">${project.icon}</div>
        <h2>${project.title}</h2>
        <p style="margin: 1rem 0;">${project.longDescription}</p>
        <div class="project-tags">
            ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
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
            <div class="skill-icon">${skill.icon}</div>
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