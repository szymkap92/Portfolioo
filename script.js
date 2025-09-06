// Language translations
const translations = {
    pl: {
        'nav.home': 'Home',
        'nav.skills': 'Umiejętności',
        'nav.projects': 'Projekty',
        'nav.about': 'O mnie',
        'nav.blog': 'Blog',
        'nav.contact': 'Kontakt',
        'hero.title': 'Cześć<span class="punctuation">,</span> jestem <span class="name">Szymon</span> Kaput',
        'hero.subtitle': 'Student informatyki specjalizujący się w cyberbezpieczeństwie',
        'hero.description': 'Pasjonuje się nowymi technologiami, sieciami komputerowymi i bezpieczeństwem systemów. Aktualnie kończę studia inżynierskie i planuję kontynuować naukę na PJATK.',
        'hero.portfolio': 'Sprawdź portfolio',
        'hero.contact': 'Skontaktuj się',
        'skills.title': 'Umiejętności',
        'skills.category.programming': 'Języki programowania',
        'skills.category.frontend': 'Frontend & Design',
        'skills.category.systems': 'Systemy & Infrastruktura',
        'skills.category.databases': 'Bazy danych',
        'skills.category.devops': 'DevOps & Narzędzia',
        'skills.category.cybersecurity': 'CyberSecurity',
        'skills.kubernetes': 'Orkiestracja kontenerów, zarządzanie klastrami, skalowanie aplikacji',
        'skills.wazuh': 'SIEM/SOAR platform do monitoringu bezpieczeństwa i analizy zagrożeń',
        'skills.zabbix': 'Monitoring infrastruktury IT i aplikacji, alerting i metryki',
        'skills.python': 'Programowanie w Pythonie, automatyzacja, skrypty bezpieczeństwa',
        'skills.linux': 'Administracja systemami Linux, bash scripting, konfiguracja serwerów',
        'skills.windows': 'Systemy Windows, Active Directory, PowerShell',
        'skills.networking.title': 'Sieci komputerowe',
        'skills.networking.desc': 'Konfiguracja sieci, protokoły, bezpieczeństwo sieciowe',
        'skills.php': 'Tworzenie aplikacji webowych, Laravel, bezpieczne kodowanie',
        'skills.js': 'Tworzenie interaktywnych stron, Node.js, React',
        'skills.docker': 'Konteneryzacja aplikacji, orkiestracja, CI/CD',
        'skills.git': 'Kontrola wersji, GitHub, collaborative development',
        'skills.csharp': 'Programowanie w C#, .NET Framework, aplikacje desktopowe',
        'skills.frontend.title': 'Frontend / UX',
        'skills.frontend.desc': 'Projektowanie interfejsów użytkownika, doświadczenie użytkownika',
        'skills.webtech.title': 'HTML5 / CSS3 / Tailwind',
        'skills.webtech.desc': 'Nowoczesne technologie webowe, responsywny design',
        'skills.cicd.title': 'CI/CD',
        'skills.cicd.desc': 'GitHub Actions, GitLab CI, Jenkins - automatyzacja wdrożeń',
        'skills.sql.title': 'SQL',
        'skills.sql.desc': 'MySQL, PostgreSQL - relacyjne bazy danych',
        'skills.nosql.title': 'NoSQL',
        'skills.nosql.desc': 'MongoDB, Redis - nierelacyjne bazy danych',
        'projects.title': 'Projekty',
        'projects.loading': 'Ładowanie projektów z GitHub...',
        'projects.github': 'Zobacz więcej na GitHub',
        'about.title': 'O mnie',
        'about.intro': 'Student informatyki na ostatnim roku studiów inżynierskich, specjalizujący się w cyberbezpieczeństwie.',
        'about.passion': 'Zainteresowanie IT towarzyszyło mi od dziecka. Fascynuje mnie świat technologii, bezpieczeństwa systemów i sieci komputerowych.',
        'about.future': 'Planuję kontynuować naukę na Polsko-Japońskiej Akademii Technik Komputerowych (PJATK), aby pogłębić swoją wiedzę w dziedzinie cyberbezpieczeństwa.',
        'about.personal': 'Prywatnie jestem pasjonatem sportu, nowych technologii i narzędzi, które mogą pomóc w codziennej pracy i rozwoju osobistym.',
        'about.more': 'Dowiedz się więcej',
        'blog.title': 'Blog',
        'blog.post1.title': 'Wprowadzenie do cyberbezpieczeństwa',
        'blog.post1.excerpt': 'Podstawowe pojęcia i narzędzia w dziedzinie cyberbezpieczeństwa...',
        'blog.post2.title': 'Python w automatyzacji zadań',
        'blog.post2.excerpt': 'Jak wykorzystać Python do automatyzacji codziennych zadań...',
        'blog.post3.title': 'Bezpieczeństwo sieci - podstawy',
        'blog.post3.excerpt': 'Wprowadzenie do zabezpieczania sieci komputerowych...',
        'blog.all': 'Zobacz wszystkie wpisy',
        'contact.title': 'Kontakt',
        'contact.info.title': 'Dane kontaktowe',
        'contact.form.title': 'Wyślij wiadomość',
        'contact.form.name': 'Imię i nazwisko',
        'contact.form.email': 'E-mail',
        'contact.form.message': 'Wiadomość',
        'contact.form.send': 'Wyślij',
        'footer.description': 'Student informatyki specjalizujący się w cyberbezpieczeństwie',
        'footer.rights': 'Wszelkie prawa zastrzeżone.'
    },
    en: {
        'nav.home': 'Home',
        'nav.skills': 'Skills',
        'nav.projects': 'Projects',
        'nav.about': 'About',
        'nav.blog': 'Blog',
        'nav.contact': 'Contact',
        'hero.title': 'Hi<span class="punctuation">,</span> I\'m <span class="name">Szymon</span> Kaput',
        'hero.subtitle': 'Computer Science Student specializing in Cybersecurity',
        'hero.description': 'I\'m passionate about new technologies, computer networks and system security. Currently finishing my engineering studies and planning to continue education at PJATK.',
        'hero.portfolio': 'Check Portfolio',
        'hero.contact': 'Get in Touch',
        'skills.title': 'Skills',
        'skills.category.programming': 'Programming Languages',
        'skills.category.frontend': 'Frontend & Design',
        'skills.category.systems': 'Systems & Infrastructure',
        'skills.category.databases': 'Databases',
        'skills.category.devops': 'DevOps & Tools',
        'skills.category.cybersecurity': 'CyberSecurity',
        'skills.kubernetes': 'Container orchestration, cluster management, application scaling',
        'skills.wazuh': 'SIEM/SOAR platform for security monitoring and threat analysis',
        'skills.zabbix': 'IT infrastructure and application monitoring, alerting and metrics',
        'skills.python': 'Python programming, automation, security scripts',
        'skills.linux': 'Linux system administration, bash scripting, server configuration',
        'skills.windows': 'Windows systems, Active Directory, PowerShell',
        'skills.networking.title': 'Computer Networks',
        'skills.networking.desc': 'Network configuration, protocols, network security',
        'skills.php': 'Web application development, Laravel, secure coding',
        'skills.js': 'Interactive web development, Node.js, React',
        'skills.docker': 'Application containerization, orchestration, CI/CD',
        'skills.git': 'Version control, GitHub, collaborative development',
        'skills.csharp': 'C# programming, .NET Framework, desktop applications',
        'skills.frontend.title': 'Frontend / UX',
        'skills.frontend.desc': 'User interface design, user experience',
        'skills.webtech.title': 'HTML5 / CSS3 / Tailwind',
        'skills.webtech.desc': 'Modern web technologies, responsive design',
        'skills.cicd.title': 'CI/CD',
        'skills.cicd.desc': 'GitHub Actions, GitLab CI, Jenkins - deployment automation',
        'skills.sql.title': 'SQL',
        'skills.sql.desc': 'MySQL, PostgreSQL - relational databases',
        'skills.nosql.title': 'NoSQL',
        'skills.nosql.desc': 'MongoDB, Redis - non-relational databases',
        'projects.title': 'Projects',
        'projects.loading': 'Loading projects from GitHub...',
        'projects.github': 'See more on GitHub',
        'about.title': 'About Me',
        'about.intro': 'Final year Computer Science student specializing in cybersecurity.',
        'about.passion': 'Interest in IT has accompanied me since childhood. I\'m fascinated by the world of technology, system security and computer networks.',
        'about.future': 'I plan to continue my education at the Polish-Japanese Academy of Information Technology (PJATK) to deepen my knowledge in cybersecurity.',
        'about.personal': 'Privately, I\'m passionate about sports, new technologies and tools that can help in everyday work and personal development.',
        'about.more': 'Learn More',
        'blog.title': 'Blog',
        'blog.post1.title': 'Introduction to Cybersecurity',
        'blog.post1.excerpt': 'Basic concepts and tools in the field of cybersecurity...',
        'blog.post2.title': 'Python in Task Automation',
        'blog.post2.excerpt': 'How to use Python to automate everyday tasks...',
        'blog.post3.title': 'Network Security - Basics',
        'blog.post3.excerpt': 'Introduction to securing computer networks...',
        'blog.all': 'View All Posts',
        'contact.title': 'Contact',
        'contact.info.title': 'Contact Information',
        'contact.form.title': 'Send Message',
        'contact.form.name': 'Full Name',
        'contact.form.email': 'E-mail',
        'contact.form.message': 'Message',
        'contact.form.send': 'Send',
        'footer.description': 'Computer Science student specializing in cybersecurity',
        'footer.rights': 'All rights reserved.'
    },
    de: {
        'nav.home': 'Startseite',
        'nav.skills': 'Fähigkeiten',
        'nav.projects': 'Projekte',
        'nav.about': 'Über mich',
        'nav.blog': 'Blog',
        'nav.contact': 'Kontakt',
        'hero.title': 'Hallo<span class="punctuation">,</span> ich bin <span class="name">Szymon</span> Kaput',
        'hero.subtitle': 'Informatikstudent mit Spezialisierung auf Cybersicherheit',
        'hero.description': 'Ich begeistere mich für neue Technologien, Computernetzwerke und Systemsicherheit. Derzeit beende ich mein Ingenieursstudium und plane, meine Ausbildung an der PJATK fortzusetzen.',
        'hero.portfolio': 'Portfolio ansehen',
        'hero.contact': 'Kontakt aufnehmen',
        'skills.title': 'Fähigkeiten',
        'skills.category.programming': 'Programmiersprachen',
        'skills.category.frontend': 'Frontend & Design',
        'skills.category.systems': 'Systeme & Infrastruktur',
        'skills.category.databases': 'Datenbanken',
        'skills.category.devops': 'DevOps & Tools',
        'skills.category.cybersecurity': 'CyberSecurity',
        'skills.kubernetes': 'Containerorchestrierung, Cluster-Management, Anwendungsskalierung',
        'skills.wazuh': 'SIEM/SOAR-Plattform für Sicherheitsüberwachung und Bedrohungsanalyse',
        'skills.zabbix': 'IT-Infrastruktur- und Anwendungsüberwachung, Benachrichtigungen und Metriken',
        'skills.python': 'Python-Programmierung, Automatisierung, Sicherheitsskripte',
        'skills.linux': 'Linux-Systemadministration, Bash-Scripting, Serverkonfiguration',
        'skills.windows': 'Windows-Systeme, Active Directory, PowerShell',
        'skills.networking.title': 'Computernetzwerke',
        'skills.networking.desc': 'Netzwerkkonfiguration, Protokolle, Netzwerksicherheit',
        'skills.php': 'Webentwicklung, Laravel, sichere Programmierung',
        'skills.js': 'Interaktive Webentwicklung, Node.js, React',
        'skills.docker': 'Anwendungscontainerisierung, Orchestrierung, CI/CD',
        'skills.git': 'Versionskontrolle, GitHub, kollaborative Entwicklung',
        'skills.csharp': 'C#-Programmierung, .NET Framework, Desktop-Anwendungen',
        'skills.frontend.title': 'Frontend / UX',
        'skills.frontend.desc': 'Benutzeroberflächen-Design, Benutzererfahrung',
        'skills.webtech.title': 'HTML5 / CSS3 / Tailwind',
        'skills.webtech.desc': 'Moderne Webtechnologien, responsives Design',
        'skills.cicd.title': 'CI/CD',
        'skills.cicd.desc': 'GitHub Actions, GitLab CI, Jenkins - Deployment-Automatisierung',
        'skills.sql.title': 'SQL',
        'skills.sql.desc': 'MySQL, PostgreSQL - relationale Datenbanken',
        'skills.nosql.title': 'NoSQL',
        'skills.nosql.desc': 'MongoDB, Redis - nicht-relationale Datenbanken',
        'projects.title': 'Projekte',
        'projects.loading': 'Projekte von GitHub laden...',
        'projects.github': 'Mehr auf GitHub sehen',
        'about.title': 'Über mich',
        'about.intro': 'Informatikstudent im letzten Jahr mit Spezialisierung auf Cybersicherheit.',
        'about.passion': 'Das Interesse an IT begleitet mich seit der Kindheit. Mich fasziniert die Welt der Technologie, Systemsicherheit und Computernetzwerke.',
        'about.future': 'Ich plane, meine Ausbildung an der Polnisch-Japanischen Akademie für Informationstechnologie (PJATK) fortzusetzen, um mein Wissen im Bereich Cybersicherheit zu vertiefen.',
        'about.personal': 'Privat bin ich leidenschaftlich interessiert an Sport, neuen Technologien und Tools, die bei der täglichen Arbeit und persönlichen Entwicklung helfen können.',
        'about.more': 'Mehr erfahren',
        'blog.title': 'Blog',
        'blog.post1.title': 'Einführung in die Cybersicherheit',
        'blog.post1.excerpt': 'Grundlegende Konzepte und Tools im Bereich Cybersicherheit...',
        'blog.post2.title': 'Python in der Aufgabenautomatisierung',
        'blog.post2.excerpt': 'Wie man Python zur Automatisierung alltäglicher Aufgaben nutzt...',
        'blog.post3.title': 'Netzwerksicherheit - Grundlagen',
        'blog.post3.excerpt': 'Einführung in die Sicherung von Computernetzwerken...',
        'blog.all': 'Alle Beiträge anzeigen',
        'contact.title': 'Kontakt',
        'contact.info.title': 'Kontaktinformationen',
        'contact.form.title': 'Nachricht senden',
        'contact.form.name': 'Vollständiger Name',
        'contact.form.email': 'E-Mail',
        'contact.form.message': 'Nachricht',
        'contact.form.send': 'Senden',
        'footer.description': 'Informatikstudent mit Spezialisierung auf Cybersicherheit',
        'footer.rights': 'Alle Rechte vorbehalten.'
    },
    es: {
        'nav.home': 'Inicio',
        'nav.skills': 'Habilidades',
        'nav.projects': 'Proyectos',
        'nav.about': 'Sobre mí',
        'nav.blog': 'Blog',
        'nav.contact': 'Contacto',
        'hero.title': 'Hola<span class="punctuation">,</span> soy <span class="name">Szymon</span> Kaput',
        'hero.subtitle': 'Estudiante de Informática especializado en Ciberseguridad',
        'hero.description': 'Me apasionan las nuevas tecnologías, las redes informáticas y la seguridad de sistemas. Actualmente terminando mis estudios de ingeniería y planeando continuar la educación en PJATK.',
        'hero.portfolio': 'Ver Portfolio',
        'hero.contact': 'Contactar',
        'skills.title': 'Habilidades',
        'skills.category.programming': 'Lenguajes de Programación',
        'skills.category.frontend': 'Frontend & Diseño',
        'skills.category.systems': 'Sistemas & Infraestructura',
        'skills.category.databases': 'Bases de Datos',
        'skills.category.devops': 'DevOps & Herramientas',
        'skills.category.cybersecurity': 'CyberSecurity',
        'skills.kubernetes': 'Orquestación de contenedores, gestión de clusters, escalado de aplicaciones',
        'skills.wazuh': 'Plataforma SIEM/SOAR para monitoreo de seguridad y análisis de amenazas',
        'skills.zabbix': 'Monitoreo de infraestructura IT y aplicaciones, alertas y métricas',
        'skills.python': 'Programación en Python, automatización, scripts de seguridad',
        'skills.linux': 'Administración de sistemas Linux, bash scripting, configuración de servidores',
        'skills.windows': 'Sistemas Windows, Active Directory, PowerShell',
        'skills.networking.title': 'Redes Informáticas',
        'skills.networking.desc': 'Configuración de redes, protocolos, seguridad de red',
        'skills.php': 'Desarrollo de aplicaciones web, Laravel, programación segura',
        'skills.js': 'Desarrollo web interactivo, Node.js, React',
        'skills.docker': 'Contenerización de aplicaciones, orquestación, CI/CD',
        'skills.git': 'Control de versiones, GitHub, desarrollo colaborativo',
        'skills.csharp': 'Programación en C#, .NET Framework, aplicaciones de escritorio',
        'skills.frontend.title': 'Frontend / UX',
        'skills.frontend.desc': 'Diseño de interfaces de usuario, experiencia de usuario',
        'skills.webtech.title': 'HTML5 / CSS3 / Tailwind',
        'skills.webtech.desc': 'Tecnologías web modernas, diseño responsivo',
        'skills.cicd.title': 'CI/CD',
        'skills.cicd.desc': 'GitHub Actions, GitLab CI, Jenkins - automatización de despliegue',
        'skills.sql.title': 'SQL',
        'skills.sql.desc': 'MySQL, PostgreSQL - bases de datos relacionales',
        'skills.nosql.title': 'NoSQL',
        'skills.nosql.desc': 'MongoDB, Redis - bases de datos no relacionales',
        'projects.title': 'Proyectos',
        'projects.loading': 'Cargando proyectos desde GitHub...',
        'projects.github': 'Ver más en GitHub',
        'about.title': 'Sobre mí',
        'about.intro': 'Estudiante de último año de Informática especializado en ciberseguridad.',
        'about.passion': 'El interés por la informática me acompaña desde la infancia. Me fascina el mundo de la tecnología, la seguridad de sistemas y las redes informáticas.',
        'about.future': 'Planeo continuar mi educación en la Academia Polaco-Japonesa de Tecnología de la Información (PJATK) para profundizar mis conocimientos en ciberseguridad.',
        'about.personal': 'En lo personal, soy apasionado del deporte, las nuevas tecnologías y herramientas que pueden ayudar en el trabajo diario y el desarrollo personal.',
        'about.more': 'Saber más',
        'blog.title': 'Blog',
        'blog.post1.title': 'Introducción a la Ciberseguridad',
        'blog.post1.excerpt': 'Conceptos básicos y herramientas en el campo de la ciberseguridad...',
        'blog.post2.title': 'Python en la Automatización de Tareas',
        'blog.post2.excerpt': 'Cómo usar Python para automatizar tareas cotidianas...',
        'blog.post3.title': 'Seguridad de Redes - Fundamentos',
        'blog.post3.excerpt': 'Introducción a la seguridad de redes informáticas...',
        'blog.all': 'Ver todas las publicaciones',
        'contact.title': 'Contacto',
        'contact.info.title': 'Información de contacto',
        'contact.form.title': 'Enviar mensaje',
        'contact.form.name': 'Nombre completo',
        'contact.form.email': 'Correo electrónico',
        'contact.form.message': 'Mensaje',
        'contact.form.send': 'Enviar',
        'footer.description': 'Estudiante de Informática especializado en ciberseguridad',
        'footer.rights': 'Todos los derechos reservados.'
    }
};

// Current language
let currentLang = 'pl';

// DOM Elements
const langButtons = document.querySelectorAll('.lang-btn');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const contactForm = document.getElementById('contact-form');

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    initializeLanguage();
    loadGitHubProjects();
    initializeNavigation();
    initializeContactForm();
    initializeScrollAnimations();
    
    // Set language from localStorage or default to 'pl'
    const savedLang = localStorage.getItem('preferred-language') || 'pl';
    switchLanguage(savedLang);
});

// Language switching functionality
function initializeLanguage() {
    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            switchLanguage(lang);
        });
    });
}

function switchLanguage(lang) {
    currentLang = lang;
    
    // Update active language button
    langButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
    
    // Update all translatable elements
    const translatableElements = document.querySelectorAll('[data-lang-key]');
    translatableElements.forEach(element => {
        const key = element.getAttribute('data-lang-key');
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Save language preference
    localStorage.setItem('preferred-language', lang);
}

// Navigation functionality
function initializeNavigation() {
    // Hamburger menu toggle
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close menu when clicking on nav links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Smooth scrolling and active link highlighting
    window.addEventListener('scroll', updateActiveNavLink);
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const scrollPos = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// GitHub Projects Loading
async function loadGitHubProjects() {
    const projectsContainer = document.getElementById('projects-container');
    
    try {
        const response = await fetch('https://api.github.com/users/szymkap92/repos?sort=updated&per_page=6');
        
        if (!response.ok) {
            throw new Error('Failed to fetch projects');
        }
        
        const repos = await response.json();
        
        // Filter out forks and select interesting repositories, exclude Portfolio project
        const filteredRepos = repos.filter(repo => {
            const excludedNames = ['szymkap92', 'Portfolio', 'PortFolio', 'portfolio'];
            const isPortfolioVariant = repo.name.toLowerCase().includes('portfolio');
            return !repo.fork && !excludedNames.includes(repo.name) && !isPortfolioVariant;
        });
        
        // Add Service-Monitoring manually (hardcoded due to API issues)
        const serviceMonitoringProject = {
            name: 'Service-Monitoring',
            description: 'PowerShell script for monitoring Windows services and system resources',
            html_url: 'https://github.com/szymkap92/Service-Monitoring',
            language: 'PowerShell',
            homepage: null
        };
        
        const serviceMonitoringExists = filteredRepos.some(repo => repo.name === 'Service-Monitoring');
        if (!serviceMonitoringExists) {
            filteredRepos.unshift(serviceMonitoringProject);
        }
        
        // Add Notebook project
        const notebookExists = filteredRepos.some(repo => repo.name === 'Notebook');
        if (!notebookExists) {
            try {
                const notebookResponse = await fetch('https://api.github.com/repos/szymkap92/Notebook');
                if (notebookResponse.ok) {
                    const notebookRepo = await notebookResponse.json();
                    filteredRepos.unshift(notebookRepo);
                }
            } catch (error) {
                console.warn('Could not fetch Notebook repository:', error);
            }
        }
        
        // Add Mini-honeypot project manually
        const miniHoneypotProject = {
            name: 'Mini-honeypot',
            description: 'Simple honeypot implementation for cybersecurity learning and threat detection',
            html_url: 'https://github.com/szymkap92/Mini-honeypot',
            language: 'Python',
            homepage: null
        };
        
        const miniHoneypotExists = filteredRepos.some(repo => repo.name === 'Mini-honeypot');
        if (!miniHoneypotExists) {
            filteredRepos.unshift(miniHoneypotProject);
        }
        
        projectsContainer.innerHTML = '';
        
        if (filteredRepos.length === 0) {
            projectsContainer.innerHTML = `
                <div class="project-loading">
                    <p>${translations[currentLang]['projects.loading'] || 'No projects found'}</p>
                </div>
            `;
            return;
        }
        
        filteredRepos.slice(0, 6).forEach(repo => {
            const projectElement = createProjectElement(repo);
            projectsContainer.appendChild(projectElement);
        });
        
    } catch (error) {
        console.error('Error loading GitHub projects:', error);
        projectsContainer.innerHTML = `
            <div class="project-loading">
                <p>Error loading projects. Please check back later.</p>
            </div>
        `;
    }
}

function createProjectElement(repo) {
    const projectDiv = document.createElement('div');
    projectDiv.className = 'project-item';
    
    const languages = repo.language ? [repo.language] : [];
    
    projectDiv.innerHTML = `
        <div class="project-content">
            <h3 class="project-title">${repo.name}</h3>
            <p class="project-description">${repo.description || 'No description available'}</p>
            <div class="project-tech">
                ${languages.map(lang => `<span class="tech-tag">${lang}</span>`).join('')}
            </div>
            <div class="project-links">
                <a href="${repo.html_url}" target="_blank" class="project-link">
                    <i class="fab fa-github"></i> GitHub
                </a>
                ${repo.homepage ? `<a href="${repo.homepage}" target="_blank" class="project-link">
                    <i class="fas fa-external-link-alt"></i> Live Demo
                </a>` : ''}
            </div>
        </div>
    `;
    
    return projectDiv;
}

// Contact Form Functionality
function initializeContactForm() {
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactFormSubmit);
    }
}

function handleContactFormSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Simple form validation
    if (!name || !email || !message) {
        alert(currentLang === 'pl' ? 'Proszę wypełnić wszystkie pola.' : 'Please fill in all fields.');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert(currentLang === 'pl' ? 'Proszę podać prawidłowy adres email.' : 'Please provide a valid email address.');
        return;
    }
    
    // Create mailto link
    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    const mailtoLink = `mailto:szymonkaput123@gmail.com?subject=${subject}&body=${body}`;
    
    // Open default email client
    window.location.href = mailtoLink;
    
    // Show success message
    const successMessage = currentLang === 'pl' ? 'Dziękuję za wiadomość! Klient email zostanie otwarty.' : 'Thank you for your message! Your email client will open.';
    alert(successMessage);
    
    // Reset form
    contactForm.reset();
}

// Scroll Animations
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-on-scroll');
            }
        });
    }, observerOptions);
    
    // Observe all sections and major elements
    const elementsToAnimate = document.querySelectorAll('section, .skill-item, .project-item, .blog-post');
    elementsToAnimate.forEach(el => observer.observe(el));
}

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Performance optimization
const debouncedScrollHandler = debounce(updateActiveNavLink, 100);
window.addEventListener('scroll', debouncedScrollHandler);

// Error handling for images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            this.style.display = 'none';
            console.warn(`Failed to load image: ${this.src}`);
        });
    });
});

// Keyboard navigation support
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Print styles support
window.addEventListener('beforeprint', function() {
    document.body.classList.add('printing');
});

window.addEventListener('afterprint', function() {
    document.body.classList.remove('printing');
});