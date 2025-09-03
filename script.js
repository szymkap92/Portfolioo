// Modern Portfolio JavaScript with Advanced Animations

class PortfolioApp {
    constructor() {
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.initAnimations();
        this.setupNavigation();
        this.setupCursor();
        this.setupScrollEffects();
        this.setupTypingEffect();
        this.setupSkillBars();
        this.setupCounters();
        this.setupIntersectionObserver();
        this.setupMatrixEffect();
        console.log('🚀 Portfolio loaded successfully');
    }

    setupEventListeners() {
        window.addEventListener('load', () => this.handlePageLoad());
        window.addEventListener('scroll', () => this.handleScroll());
        window.addEventListener('resize', () => this.handleResize());
        document.addEventListener('mousemove', (e) => this.updateCursor(e));
        
        // Mobile navigation
        const navToggle = document.querySelector('.nav-toggle');
        const navMenu = document.querySelector('.nav-menu');
        
        if (navToggle && navMenu) {
            navToggle.addEventListener('click', () => {
                navMenu.classList.toggle('active');
                navToggle.classList.toggle('active');
            });
        }

        // Close mobile menu on link click
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
    }

    handlePageLoad() {
        document.body.classList.add('loaded');
        this.startTypingAnimation();
        this.animateHeroElements();
    }

    handleScroll() {
        const navbar = document.querySelector('.navbar');
        const scrollTop = window.pageYOffset;

        // Navbar scroll effect
        if (scrollTop > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Update active navigation
        this.updateActiveNavigation();
    }

    handleResize() {
        // Recalculate positions on resize
        this.setupSkillBars();
    }

    // Advanced Cursor Effect
    setupCursor() {
        const cursor = document.querySelector('.cursor-glow');
        if (!cursor) return;

        let mouseX = 0;
        let mouseY = 0;
        let cursorX = 0;
        let cursorY = 0;

        const updateCursorPosition = () => {
            const dx = mouseX - cursorX;
            const dy = mouseY - cursorY;
            
            cursorX += dx * 0.1;
            cursorY += dy * 0.1;
            
            cursor.style.left = `${cursorX}px`;
            cursor.style.top = `${cursorY}px`;
            
            requestAnimationFrame(updateCursorPosition);
        };

        updateCursorPosition();

        // Cursor interactions
        document.querySelectorAll('a, button, .project-card, .skill-tag').forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.style.transform = 'scale(2)';
                cursor.style.mixBlendMode = 'difference';
            });
            
            el.addEventListener('mouseleave', () => {
                cursor.style.transform = 'scale(1)';
                cursor.style.mixBlendMode = 'screen';
            });
        });
    }

    updateCursor(e) {
        const cursor = document.querySelector('.cursor-glow');
        if (cursor) {
            mouseX = e.clientX;
            mouseY = e.clientY;
        }
    }

    // Navigation System
    setupNavigation() {
        const navLinks = document.querySelectorAll('.nav-link');
        const sections = document.querySelectorAll('section[id]');

        // Smooth scroll for navigation links
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);
                
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 70;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    updateActiveNavigation() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
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

    // Advanced Typing Effect
    setupTypingEffect() {
        const typingElements = document.querySelectorAll('.typing-text, .command.typing');
        
        typingElements.forEach(element => {
            const text = element.textContent;
            element.textContent = '';
            this.typeWriter(element, text, 100);
        });
    }

    typeWriter(element, text, speed) {
        let i = 0;
        const timer = setInterval(() => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(timer);
                // Add blinking cursor
                if (!element.querySelector('.cursor')) {
                    const cursor = document.createElement('span');
                    cursor.classList.add('cursor');
                    cursor.textContent = '|';
                    element.appendChild(cursor);
                }
            }
        }, speed);
    }

    startTypingAnimation() {
        const typingText = document.querySelector('.typing-text');
        if (typingText) {
            const texts = [
                'Cybersecurity Student & Full-Stack Developer',
                'Problem Solver & Tech Enthusiast',
                'Building Secure Applications',
                'Learning New Technologies'
            ];
            
            let currentIndex = 0;
            
            const cycleText = () => {
                typingText.textContent = '';
                this.typeWriter(typingText, texts[currentIndex], 80);
                currentIndex = (currentIndex + 1) % texts.length;
            };
            
            // Initial text
            cycleText();
            
            // Cycle through texts
            setInterval(cycleText, 4000);
        }
    }

    // Skill Bars Animation
    setupSkillBars() {
        const skillBars = document.querySelectorAll('.skill-progress');
        
        skillBars.forEach(bar => {
            const width = bar.getAttribute('data-width');
            bar.style.width = '0%';
            
            // Animate when in viewport
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            bar.style.width = `${width}%`;
                        }, Math.random() * 500);
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });
            
            observer.observe(bar);
        });
    }

    // Counter Animation
    setupCounters() {
        const counters = document.querySelectorAll('.stat-number');
        
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-count'));
            counter.textContent = '0';
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        this.animateCounter(counter, target);
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });
            
            observer.observe(counter);
        });
    }

    animateCounter(element, target) {
        let current = 0;
        const increment = target / 50;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                element.textContent = Math.ceil(current);
            }
        }, 40);
    }

    // Scroll Effects
    setupScrollEffects() {
        // Parallax effect for hero section
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const heroParticles = document.querySelector('.hero-particles');
            if (heroParticles) {
                heroParticles.style.transform = `translateY(${scrolled * 0.3}px)`;
            }
        });
    }

    // Advanced Animation System
    initAnimations() {
        // Fade in animation for sections
        const animatedElements = document.querySelectorAll('.about-card, .skill-category, .project-card, .contact-method');
        
        animatedElements.forEach((element, index) => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(50px)';
            element.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
            element.style.transitionDelay = `${index * 0.1}s`;
        });
    }

    setupIntersectionObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    
                    // Special animations for specific elements
                    if (entry.target.classList.contains('project-card')) {
                        entry.target.style.transform = 'translateY(0) scale(1)';
                    }
                    
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.2,
            rootMargin: '0px 0px -50px 0px'
        });

        document.querySelectorAll('.about-card, .skill-category, .project-card, .contact-method').forEach(el => {
            observer.observe(el);
        });
    }

    animateHeroElements() {
        const heroText = document.querySelector('.hero-text');
        const heroVisual = document.querySelector('.hero-visual');
        
        if (heroText) {
            heroText.style.animation = 'slideInLeft 1s cubic-bezier(0.4, 0, 0.2, 1)';
        }
        
        if (heroVisual) {
            heroVisual.style.animation = 'slideInRight 1s cubic-bezier(0.4, 0, 0.2, 1) 0.3s both';
        }
    }

    // Matrix Rain Effect
    setupMatrixEffect() {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
        // Create matrix background
        const matrixBg = document.querySelector('.matrix-bg');
        if (!matrixBg) return;
        
        canvas.style.position = 'fixed';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        canvas.style.pointerEvents = 'none';
        canvas.style.zIndex = '-1';
        canvas.style.opacity = '0.1';
        
        matrixBg.appendChild(canvas);
        
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        
        // Matrix characters
        const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
        const charArray = chars.split('');
        
        const fontSize = 14;
        const columns = Math.floor(canvas.width / fontSize);
        const drops = Array(columns).fill(1);
        
        const drawMatrix = () => {
            ctx.fillStyle = 'rgba(10, 10, 15, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            ctx.fillStyle = '#00ff9f';
            ctx.font = `${fontSize}px monospace`;
            
            for (let i = 0; i < drops.length; i++) {
                const text = charArray[Math.floor(Math.random() * charArray.length)];
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);
                
                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        };
        
        // Start matrix animation
        setInterval(drawMatrix, 50);
    }

    // Project Card Interactions
    setupProjectInteractions() {
        const projectCards = document.querySelectorAll('.project-card');
        
        projectCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-15px) rotateX(10deg)';
                card.style.boxShadow = '0 25px 50px rgba(0, 255, 159, 0.2)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0) rotateX(0deg)';
                card.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
            });
        });
    }

    // Terminal Animation
    setupTerminalAnimation() {
        const terminalBody = document.querySelector('.terminal-body');
        if (!terminalBody) return;
        
        const commands = [
            { prompt: 'szymon@dev:~$', command: 'cat skills.txt', delay: 1000 },
            { output: 'Python ████████████ 85%', delay: 2000 },
            { output: 'JavaScript ██████████ 80%', delay: 2500 },
            { output: 'C# ████████ 75%', delay: 3000 },
            { prompt: 'szymon@dev:~$', command: 'ls projects/', delay: 4000 },
            { output: 'DiveCenter/ Portfolio/ SecurityScanner/', delay: 4500 },
            { prompt: 'szymon@dev:~$', command: '', delay: 5000 }
        ];
        
        let currentIndex = 0;
        
        const executeCommand = () => {
            if (currentIndex >= commands.length) return;
            
            const cmd = commands[currentIndex];
            const line = document.createElement('div');
            line.className = 'terminal-line';
            
            if (cmd.prompt) {
                line.innerHTML = `<span class="prompt">${cmd.prompt}</span> <span class="command">${cmd.command}</span>`;
            } else {
                line.innerHTML = `<div class="output-line">${cmd.output}</div>`;
            }
            
            terminalBody.appendChild(line);
            currentIndex++;
            
            if (currentIndex < commands.length) {
                setTimeout(executeCommand, commands[currentIndex].delay);
            }
        };
        
        // Start terminal animation after page load
        setTimeout(executeCommand, 2000);
    }

    // Contact Form Enhancement (if added later)
    setupContactForm() {
        const contactForm = document.querySelector('#contact-form');
        if (!contactForm) return;
        
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Add form submission logic here
            this.showNotification('Message sent successfully!', 'success');
        });
    }

    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: var(--bg-card);
            color: var(--text-primary);
            padding: 1rem 2rem;
            border-radius: 8px;
            border: 1px solid var(--primary);
            box-shadow: var(--glow-primary);
            z-index: 10000;
            transform: translateX(400px);
            transition: all 0.3s ease;
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        setTimeout(() => {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    // Easter Egg - Konami Code
    setupEasterEgg() {
        const konamiCode = [
            'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
            'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
            'KeyB', 'KeyA'
        ];
        let userInput = [];
        
        document.addEventListener('keydown', (e) => {
            userInput.push(e.code);
            if (userInput.length > konamiCode.length) {
                userInput.shift();
            }
            
            if (JSON.stringify(userInput) === JSON.stringify(konamiCode)) {
                this.activateEasterEgg();
                userInput = [];
            }
        });
    }

    activateEasterEgg() {
        document.body.style.filter = 'hue-rotate(180deg)';
        this.showNotification('🎉 Easter egg activated! Matrix mode enabled!', 'success');
        
        setTimeout(() => {
            document.body.style.filter = 'none';
        }, 5000);
    }
}

// CSS Animations (added via JavaScript for better control)
const addDynamicStyles = () => {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInLeft {
            from {
                transform: translateX(-50px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideInRight {
            from {
                transform: translateX(50px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes fadeInUp {
            from {
                transform: translateY(30px);
                opacity: 0;
            }
            to {
                transform: translateY(0);
                opacity: 1;
            }
        }
        
        .loaded .hero-text {
            animation: slideInLeft 1s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .loaded .hero-visual {
            animation: slideInRight 1s cubic-bezier(0.4, 0, 0.2, 1) 0.3s both;
        }
    `;
    
    document.head.appendChild(style);
};

// Performance Optimization
const optimizePerformance = () => {
    // Preload critical fonts
    const fontPreloads = [
        'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;600;700&display=swap',
        'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap'
    ];
    
    fontPreloads.forEach(url => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = url;
        link.as = 'style';
        document.head.appendChild(link);
    });
    
    // Lazy load non-critical resources
    if ('IntersectionObserver' in window) {
        const lazyImages = document.querySelectorAll('img[data-src]');
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        lazyImages.forEach(img => imageObserver.observe(img));
    }
};

// Initialize application
document.addEventListener('DOMContentLoaded', () => {
    addDynamicStyles();
    optimizePerformance();
    setupLanguageSelector();
    new PortfolioApp();
});

// Service Worker Registration (for PWA capabilities)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Service worker would be registered here for production
        console.log('🔧 Ready for PWA implementation');
    });
}

// Language Selector Setup - standalone function
function setupLanguageSelector() {
        const langToggle = document.querySelector('.lang-toggle');
        const langDropdown = document.querySelector('.lang-dropdown');
        const languageSelector = document.querySelector('.language-selector');
        
        if (!langToggle || !langDropdown) return;
        
        // Toggle dropdown
        langToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            languageSelector.classList.toggle('active');
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!languageSelector.contains(e.target)) {
                languageSelector.classList.remove('active');
            }
        });
        
        // Prevent dropdown from closing when clicking inside
        langDropdown.addEventListener('click', (e) => {
            e.stopPropagation();
        });
        
        // Add hover effects
        const langOptions = document.querySelectorAll('.lang-option');
        langOptions.forEach(option => {
            option.addEventListener('mouseenter', () => {
                option.style.background = 'rgba(0, 255, 159, 0.1)';
                option.style.borderColor = 'var(--primary)';
            });
            
            option.addEventListener('mouseleave', () => {
                if (!option.classList.contains('active')) {
                    option.style.background = 'transparent';
                    option.style.borderColor = 'var(--border)';
                }
            });
        });
}

// Export for potential module use
window.PortfolioApp = PortfolioApp;