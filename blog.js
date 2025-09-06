// Blog page translations
const blogTranslations = {
    pl: {
        'back': 'Powrót',
        'blog.title': 'Blog',
        'blog.subtitle': 'Dzielę się wiedzą i doświadczeniami z dziedziny cyberbezpieczeństwa i IT',
        'blog.categories.all': 'Wszystkie',
        'blog.categories.security': 'Cyberbezpieczeństwo',
        'blog.categories.programming': 'Programowanie',
        'blog.categories.networks': 'Sieci',
        'blog.categories.tools': 'Narzędzia',
        'blog.pagination.prev': 'Poprzednia',
        'blog.pagination.next': 'Następna',
        'blog.pagination.page': 'Strona',
        'blog.pagination.of': 'z',
        'blog.read.more': 'Czytaj więcej',
        'blog.read.time': 'min czytania',
        'footer.description': 'Student informatyki specjalizujący się w cyberbezpieczeństwie',
        'footer.rights': 'Wszelkie prawa zastrzeżone.'
    },
    en: {
        'back': 'Back',
        'blog.title': 'Blog',
        'blog.subtitle': 'Sharing knowledge and experiences in cybersecurity and IT',
        'blog.categories.all': 'All',
        'blog.categories.security': 'Cybersecurity',
        'blog.categories.programming': 'Programming',
        'blog.categories.networks': 'Networks',
        'blog.categories.tools': 'Tools',
        'blog.pagination.prev': 'Previous',
        'blog.pagination.next': 'Next',
        'blog.pagination.page': 'Page',
        'blog.pagination.of': 'of',
        'blog.read.more': 'Read more',
        'blog.read.time': 'min read',
        'footer.description': 'Computer Science student specializing in cybersecurity',
        'footer.rights': 'All rights reserved.'
    },
    de: {
        'back': 'Zurück',
        'blog.title': 'Blog',
        'blog.subtitle': 'Wissen und Erfahrungen aus Cybersicherheit und IT teilen',
        'blog.categories.all': 'Alle',
        'blog.categories.security': 'Cybersicherheit',
        'blog.categories.programming': 'Programmierung',
        'blog.categories.networks': 'Netzwerke',
        'blog.categories.tools': 'Tools',
        'blog.pagination.prev': 'Vorherige',
        'blog.pagination.next': 'Nächste',
        'blog.pagination.page': 'Seite',
        'blog.pagination.of': 'von',
        'blog.read.more': 'Weiterlesen',
        'blog.read.time': 'Min. Lesezeit',
        'footer.description': 'Informatikstudent mit Spezialisierung auf Cybersicherheit',
        'footer.rights': 'Alle Rechte vorbehalten.'
    },
    es: {
        'back': 'Volver',
        'blog.title': 'Blog',
        'blog.subtitle': 'Compartiendo conocimiento y experiencias en ciberseguridad e IT',
        'blog.categories.all': 'Todos',
        'blog.categories.security': 'Ciberseguridad',
        'blog.categories.programming': 'Programación',
        'blog.categories.networks': 'Redes',
        'blog.categories.tools': 'Herramientas',
        'blog.pagination.prev': 'Anterior',
        'blog.pagination.next': 'Siguiente',
        'blog.pagination.page': 'Página',
        'blog.pagination.of': 'de',
        'blog.read.more': 'Leer más',
        'blog.read.time': 'min de lectura',
        'footer.description': 'Estudiante de Informática especializado en ciberseguridad',
        'footer.rights': 'Todos los derechos reservados.'
    }
};

// Sample blog posts data
const blogPosts = {
    pl: [
        {
            id: 1,
            title: 'Wprowadzenie do cyberbezpieczeństwa',
            excerpt: 'Podstawowe pojęcia i narzędzia w dziedzinie cyberbezpieczeństwa. Dowiedz się, od czego zacząć swoją przygodę z bezpieczeństwem IT.',
            content: 'Cyberbezpieczeństwo to jedna z najszybciej rozwijających się dziedzin IT. W dzisiejszych czasach, gdy coraz więcej procesów przechodzi do świata cyfrowego, zabezpieczanie systemów i danych staje się kluczowe...',
            category: 'security',
            date: '2024-01-15',
            readTime: 8,
            tags: ['cyberbezpieczeństwo', 'podstawy', 'wprowadzenie']
        },
        {
            id: 2,
            title: 'Python w automatyzacji zadań',
            excerpt: 'Jak wykorzystać Python do automatyzacji codziennych zadań. Praktyczne przykłady skryptów, które ułatwią Ci pracę.',
            content: 'Python jest jednym z najlepszych języków do automatyzacji zadań. Dzięki swojej prostocie i bogatej bibliotece standardowej, możemy szybko tworzyć skuteczne skrypty...',
            category: 'programming',
            date: '2024-01-10',
            readTime: 12,
            tags: ['python', 'automatyzacja', 'skrypty']
        },
        {
            id: 3,
            title: 'Bezpieczeństwo sieci - podstawy',
            excerpt: 'Wprowadzenie do zabezpieczania sieci komputerowych. Najważniejsze protokoły, narzędzia i najlepsze praktyki.',
            content: 'Zabezpieczanie sieci komputerowych to kompleksowy proces, który wymaga znajomości wielu protokołów i technologii. W tym artykule omówimy podstawowe elementy...',
            category: 'networks',
            date: '2024-01-05',
            readTime: 15,
            tags: ['sieci', 'bezpieczeństwo', 'protokoły']
        },
        {
            id: 4,
            title: 'Docker dla początkujących',
            excerpt: 'Wprowadzenie do konteneryzacji aplikacji z Docker. Podstawowe komendy i najlepsze praktyki dla beginnerów.',
            content: 'Docker rewolucjonizuje sposób, w jaki deweloperzy budują, testują i wdrażają aplikacje. Konteneryzacja pozwala na tworzenie przenośnych, skalowalnych aplikacji...',
            category: 'tools',
            date: '2023-12-28',
            readTime: 10,
            tags: ['docker', 'konteneryzacja', 'devops']
        },
        {
            id: 5,
            title: 'Analiza malware - pierwsze kroki',
            excerpt: 'Jak bezpiecznie analizować szkodliwe oprogramowanie. Narzędzia, środowiska i metodologie dla analityków bezpieczeństwa.',
            content: 'Analiza malware to kluczowa umiejętność dla specjalistów ds. cyberbezpieczeństwa. Pozwala zrozumieć sposób działania zagrożeń i opracować skuteczne mechanizmy obrony...',
            category: 'security',
            date: '2023-12-20',
            readTime: 18,
            tags: ['malware', 'analiza', 'reverse engineering']
        },
        {
            id: 6,
            title: 'Git - zaawansowane techniki',
            excerpt: 'Poznaj zaawansowane funkcjonalności Git, które pomogą Ci w codziennej pracy programisty. Branching, merging i nie tylko.',
            content: 'Git to potężne narzędzie do kontroli wersji, które oferuje znacznie więcej niż podstawowe komendy add, commit i push. W tym artykule omówimy zaawansowane techniki...',
            category: 'tools',
            date: '2023-12-15',
            readTime: 14,
            tags: ['git', 'version control', 'workflows']
        }
    ],
    en: [
        {
            id: 1,
            title: 'Introduction to Cybersecurity',
            excerpt: 'Basic concepts and tools in cybersecurity. Learn where to start your journey with IT security.',
            content: 'Cybersecurity is one of the fastest-growing fields in IT. Nowadays, as more processes move to the digital world, securing systems and data becomes crucial...',
            category: 'security',
            date: '2024-01-15',
            readTime: 8,
            tags: ['cybersecurity', 'basics', 'introduction']
        },
        {
            id: 2,
            title: 'Python in Task Automation',
            excerpt: 'How to use Python to automate everyday tasks. Practical script examples that will make your work easier.',
            content: 'Python is one of the best languages for task automation. Thanks to its simplicity and rich standard library, we can quickly create effective scripts...',
            category: 'programming',
            date: '2024-01-10',
            readTime: 12,
            tags: ['python', 'automation', 'scripts']
        },
        {
            id: 3,
            title: 'Network Security - Basics',
            excerpt: 'Introduction to securing computer networks. Most important protocols, tools and best practices.',
            content: 'Securing computer networks is a comprehensive process that requires knowledge of many protocols and technologies. In this article, we will discuss basic elements...',
            category: 'networks',
            date: '2024-01-05',
            readTime: 15,
            tags: ['networks', 'security', 'protocols']
        },
        {
            id: 4,
            title: 'Docker for Beginners',
            excerpt: 'Introduction to application containerization with Docker. Basic commands and best practices for beginners.',
            content: 'Docker revolutionizes the way developers build, test, and deploy applications. Containerization allows creating portable, scalable applications...',
            category: 'tools',
            date: '2023-12-28',
            readTime: 10,
            tags: ['docker', 'containerization', 'devops']
        },
        {
            id: 5,
            title: 'Malware Analysis - First Steps',
            excerpt: 'How to safely analyze malicious software. Tools, environments and methodologies for security analysts.',
            content: 'Malware analysis is a key skill for cybersecurity specialists. It allows understanding how threats work and developing effective defense mechanisms...',
            category: 'security',
            date: '2023-12-20',
            readTime: 18,
            tags: ['malware', 'analysis', 'reverse engineering']
        },
        {
            id: 6,
            title: 'Git - Advanced Techniques',
            excerpt: 'Learn advanced Git functionalities that will help you in daily programming work. Branching, merging and more.',
            content: 'Git is a powerful version control tool that offers much more than basic add, commit and push commands. In this article, we will discuss advanced techniques...',
            category: 'tools',
            date: '2023-12-15',
            readTime: 14,
            tags: ['git', 'version control', 'workflows']
        }
    ],
    de: [
        {
            id: 1,
            title: 'Einführung in die Cybersicherheit',
            excerpt: 'Grundlegende Konzepte und Tools in der Cybersicherheit. Erfahren Sie, wo Sie Ihre Reise mit IT-Sicherheit beginnen können.',
            content: 'Cybersicherheit ist eines der am schnellsten wachsenden Gebiete in der IT. Heutzutage, da immer mehr Prozesse in die digitale Welt übergehen, wird die Sicherung von Systemen und Daten entscheidend...',
            category: 'security',
            date: '2024-01-15',
            readTime: 8,
            tags: ['cybersicherheit', 'grundlagen', 'einführung']
        },
        {
            id: 2,
            title: 'Python in der Aufgabenautomatisierung',
            excerpt: 'Wie man Python zur Automatisierung alltäglicher Aufgaben nutzt. Praktische Skriptbeispiele, die Ihre Arbeit erleichtern.',
            content: 'Python ist eine der besten Sprachen für die Aufgabenautomatisierung. Dank seiner Einfachheit und reichen Standardbibliothek können wir schnell effektive Skripte erstellen...',
            category: 'programming',
            date: '2024-01-10',
            readTime: 12,
            tags: ['python', 'automatisierung', 'skripte']
        },
        {
            id: 3,
            title: 'Netzwerksicherheit - Grundlagen',
            excerpt: 'Einführung in die Sicherung von Computernetzwerken. Wichtigste Protokolle, Tools und bewährte Praktiken.',
            content: 'Die Sicherung von Computernetzwerken ist ein umfassender Prozess, der Kenntnisse vieler Protokolle und Technologien erfordert. In diesem Artikel besprechen wir grundlegende Elemente...',
            category: 'networks',
            date: '2024-01-05',
            readTime: 15,
            tags: ['netzwerke', 'sicherheit', 'protokolle']
        }
    ],
    es: [
        {
            id: 1,
            title: 'Introducción a la Ciberseguridad',
            excerpt: 'Conceptos básicos y herramientas en ciberseguridad. Aprende dónde empezar tu viaje con la seguridad IT.',
            content: 'La ciberseguridad es uno de los campos de IT que crece más rápido. Hoy en día, como más procesos se mueven al mundo digital, asegurar sistemas y datos se vuelve crucial...',
            category: 'security',
            date: '2024-01-15',
            readTime: 8,
            tags: ['ciberseguridad', 'básicos', 'introducción']
        },
        {
            id: 2,
            title: 'Python en la Automatización de Tareas',
            excerpt: 'Cómo usar Python para automatizar tareas cotidianas. Ejemplos prácticos de scripts que facilitarán tu trabajo.',
            content: 'Python es uno de los mejores lenguajes para la automatización de tareas. Gracias a su simplicidad y rica librería estándar, podemos crear rápidamente scripts efectivos...',
            category: 'programming',
            date: '2024-01-10',
            readTime: 12,
            tags: ['python', 'automatización', 'scripts']
        },
        {
            id: 3,
            title: 'Seguridad de Redes - Fundamentos',
            excerpt: 'Introducción a la seguridad de redes informáticas. Protocolos más importantes, herramientas y mejores prácticas.',
            content: 'Asegurar redes informáticas es un proceso integral que requiere conocimiento de muchos protocolos y tecnologías. En este artículo discutiremos elementos básicos...',
            category: 'networks',
            date: '2024-01-05',
            readTime: 15,
            tags: ['redes', 'seguridad', 'protocolos']
        }
    ]
};

// Current language and pagination
let currentLang = 'pl';
let currentCategory = 'all';
let currentPage = 1;
const postsPerPage = 3;

// DOM Elements
const langButtons = document.querySelectorAll('.lang-btn');
const categoryButtons = document.querySelectorAll('.category-btn');
const blogContainer = document.getElementById('blog-posts-container');
const prevButton = document.getElementById('prev-page');
const nextButton = document.getElementById('next-page');
const currentPageSpan = document.getElementById('current-page');
const totalPagesSpan = document.getElementById('total-pages');

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    initializeLanguage();
    initializeCategories();
    initializePagination();
    
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
        if (blogTranslations[lang] && blogTranslations[lang][key]) {
            element.textContent = blogTranslations[lang][key];
        }
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Save language preference
    localStorage.setItem('preferred-language', lang);
    
    // Reload blog posts for new language
    loadBlogPosts();
}

// Category filtering functionality
function initializeCategories() {
    categoryButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.getAttribute('data-category');
            setActiveCategory(category);
        });
    });
}

function setActiveCategory(category) {
    currentCategory = category;
    currentPage = 1;
    
    // Update active category button
    categoryButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-category') === category) {
            btn.classList.add('active');
        }
    });
    
    loadBlogPosts();
}

// Pagination functionality
function initializePagination() {
    prevButton.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            loadBlogPosts();
        }
    });
    
    nextButton.addEventListener('click', () => {
        const totalPages = getTotalPages();
        if (currentPage < totalPages) {
            currentPage++;
            loadBlogPosts();
        }
    });
}

function getTotalPages() {
    const filteredPosts = getFilteredPosts();
    return Math.ceil(filteredPosts.length / postsPerPage);
}

function getFilteredPosts() {
    const posts = blogPosts[currentLang] || blogPosts.pl;
    if (currentCategory === 'all') {
        return posts;
    }
    return posts.filter(post => post.category === currentCategory);
}

// Load and display blog posts
function loadBlogPosts() {
    const filteredPosts = getFilteredPosts();
    const totalPages = getTotalPages();
    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    const postsToShow = filteredPosts.slice(startIndex, endIndex);
    
    // Update pagination info
    currentPageSpan.textContent = currentPage;
    totalPagesSpan.textContent = totalPages;
    
    // Update pagination buttons
    prevButton.disabled = currentPage <= 1;
    nextButton.disabled = currentPage >= totalPages;
    
    // Clear container
    blogContainer.innerHTML = '';
    
    // Add posts
    if (postsToShow.length === 0) {
        blogContainer.innerHTML = `
            <div class="no-posts">
                <p>Brak postów w tej kategorii.</p>
            </div>
        `;
        return;
    }
    
    postsToShow.forEach(post => {
        const postElement = createPostElement(post);
        blogContainer.appendChild(postElement);
    });
    
    // Add animation to posts
    setTimeout(() => {
        const posts = blogContainer.querySelectorAll('.blog-post-full');
        posts.forEach((post, index) => {
            setTimeout(() => {
                post.classList.add('animate-on-scroll');
            }, index * 100);
        });
    }, 50);
}

function createPostElement(post) {
    const postDiv = document.createElement('article');
    postDiv.className = 'blog-post-full';
    
    const readTimeText = blogTranslations[currentLang]['blog.read.time'] || 'min czytania';
    const readMoreText = blogTranslations[currentLang]['blog.read.more'] || 'Czytaj więcej';
    
    const categoryName = getCategoryName(post.category);
    const formattedDate = formatDate(post.date);
    
    postDiv.innerHTML = `
        <div class="post-header">
            <div class="post-meta">
                <span class="post-category">${categoryName}</span>
                <span class="post-date">${formattedDate}</span>
                <span class="post-read-time">${post.readTime} ${readTimeText}</span>
            </div>
        </div>
        <div class="post-content">
            <h2 class="post-title">${post.title}</h2>
            <p class="post-excerpt">${post.excerpt}</p>
            <div class="post-tags">
                ${post.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
            <button class="btn btn-primary read-more-btn" onclick="togglePostContent(${post.id})">
                ${readMoreText}
            </button>
            <div class="post-full-content" id="content-${post.id}" style="display: none;">
                <p>${post.content}</p>
            </div>
        </div>
    `;
    
    return postDiv;
}

function getCategoryName(category) {
    const categoryKey = `blog.categories.${category}`;
    return blogTranslations[currentLang][categoryKey] || category;
}

function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    
    try {
        return date.toLocaleDateString(currentLang, options);
    } catch (error) {
        return date.toLocaleDateString('pl', options);
    }
}

// Toggle post content
function togglePostContent(postId) {
    const contentElement = document.getElementById(`content-${postId}`);
    const button = event.target;
    
    if (contentElement.style.display === 'none') {
        contentElement.style.display = 'block';
        button.textContent = blogTranslations[currentLang]['blog.read.less'] || 'Zwiń';
    } else {
        contentElement.style.display = 'none';
        button.textContent = blogTranslations[currentLang]['blog.read.more'] || 'Czytaj więcej';
    }
}

// Additional styles for blog page
const blogStyles = `
/* Blog page specific styles */
.blog-page {
    padding: 120px 0 80px;
}

.back-button {
    margin-bottom: 2rem;
}

.blog-hero {
    text-align: center;
    margin-bottom: 3rem;
}

.blog-hero h1 {
    color: #dc2626;
    margin-bottom: 1rem;
}

.blog-hero p {
    font-size: 1.1rem;
    color: #6b7280;
    max-width: 600px;
    margin: 0 auto;
}

.blog-categories {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 3rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid #e5e7eb;
}

.category-btn {
    padding: 8px 16px;
    border: 2px solid #e5e7eb;
    background-color: transparent;
    color: #6b7280;
    border-radius: 25px;
    cursor: pointer;
    font-size: 0.9rem;
    font-weight: 500;
    transition: all 0.3s ease;
}

.category-btn:hover,
.category-btn.active {
    background-color: #dc2626;
    color: white;
    border-color: #dc2626;
}

.blog-posts {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    margin-bottom: 3rem;
}

.blog-post-full {
    background: white;
    border-radius: 15px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
    overflow: hidden;
    transition: all 0.3s ease;
    opacity: 0;
    transform: translateY(20px);
}

.blog-post-full.animate-on-scroll {
    opacity: 1;
    transform: translateY(0);
}

.blog-post-full:hover {
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
}

.post-header {
    padding: 1.5rem 2rem 0;
}

.post-meta {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    font-size: 0.875rem;
}

.post-category {
    background-color: #dc2626;
    color: white;
    padding: 0.25rem 0.75rem;
    border-radius: 15px;
    font-weight: 500;
}

.post-date,
.post-read-time {
    color: #6b7280;
}

.post-content {
    padding: 1rem 2rem 2rem;
}

.post-title {
    color: #111827;
    margin-bottom: 1rem;
    font-size: 1.5rem;
}

.post-excerpt {
    color: #6b7280;
    line-height: 1.6;
    margin-bottom: 1.5rem;
}

.post-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
}

.tag {
    background-color: #f3f4f6;
    color: #374151;
    padding: 0.25rem 0.75rem;
    border-radius: 12px;
    font-size: 0.75rem;
    font-weight: 500;
}

.post-full-content {
    margin-top: 1.5rem;
    padding-top: 1.5rem;
    border-top: 1px solid #e5e7eb;
}

.post-full-content p {
    color: #374151;
    line-height: 1.7;
}

.read-more-btn {
    padding: 8px 16px;
    font-size: 0.9rem;
}

.blog-pagination {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 3rem;
    padding-top: 2rem;
    border-top: 1px solid #e5e7eb;
}

.pagination-btn {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 10px 16px;
    border: 2px solid #dc2626;
    background-color: transparent;
    color: #dc2626;
    border-radius: 5px;
    cursor: pointer;
    font-weight: 500;
    transition: all 0.3s ease;
}

.pagination-btn:hover:not(:disabled) {
    background-color: #dc2626;
    color: white;
}

.pagination-btn:disabled {
    border-color: #d1d5db;
    color: #9ca3af;
    cursor: not-allowed;
}

.pagination-info {
    color: #6b7280;
    font-weight: 500;
}

.no-posts {
    text-align: center;
    padding: 4rem 2rem;
    color: #6b7280;
}

/* Responsive design */
@media (max-width: 768px) {
    .blog-page {
        padding: 100px 0 60px;
    }
    
    .blog-categories {
        gap: 0.5rem;
    }
    
    .category-btn {
        padding: 6px 12px;
        font-size: 0.8rem;
    }
    
    .post-header,
    .post-content {
        padding-left: 1.5rem;
        padding-right: 1.5rem;
    }
    
    .post-meta {
        gap: 0.5rem;
    }
    
    .post-title {
        font-size: 1.25rem;
    }
    
    .blog-pagination {
        flex-direction: column;
        gap: 1rem;
    }
    
    .pagination-btn {
        width: 100%;
        max-width: 200px;
        justify-content: center;
    }
}

@media (max-width: 480px) {
    .post-header,
    .post-content {
        padding-left: 1rem;
        padding-right: 1rem;
    }
    
    .post-meta {
        flex-direction: column;
        gap: 0.25rem;
    }
    
    .blog-categories {
        flex-direction: column;
        align-items: center;
    }
    
    .category-btn {
        width: 100%;
        max-width: 200px;
    }
}
`;

// Add blog-specific styles to document
if (!document.querySelector('#blog-styles')) {
    const styleElement = document.createElement('style');
    styleElement.id = 'blog-styles';
    styleElement.textContent = blogStyles;
    document.head.appendChild(styleElement);
}

// Make togglePostContent globally available
window.togglePostContent = togglePostContent;