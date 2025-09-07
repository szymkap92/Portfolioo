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
        'blog.categories.polecane': 'Polecane',
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
        'blog.categories.polecane': 'Recommended',
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
        'blog.categories.polecane': 'Empfohlen',
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
        'blog.categories.polecane': 'Recomendado',
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
            id: 9,
            title: 'Rozpoczynam przygodę z Akademią Sekurak',
            excerpt: 'Właśnie zapisałem się do Akademii Sekurak 2025. Podzielę się swoimi doświadczeniami z nauki cyberbezpieczeństwa w najbliższych miesiącach.',
            content: 'Cyberbezpieczeństwo to dziedzina, która mnie szczególnie fascynuje i w której chcę się rozwijać. Po długich przemyśleniach postanowiłem zrobić kolejny krok w swojej edukacji IT.<br><br><strong>Dlaczego Akademia Sekurak?</strong><br><br>Sekurak to marka, która w polskim środowisku cyberbezpieczeństwa nie wymaga przedstawienia. Zine Sekurak, kursy, książki - wszystko to tworzy solidną bazę wiedzy dla osób chcących rozwijać się w tej dziedzinie. Akademia Sekurak to kompleksowy program szkoleniowy, który obejmuje praktyczne aspekty bezpieczeństwa IT.<br><br><strong>Co mnie czeka?</strong><br><br>Akademia oferuje szeroki zakres tematów - od podstaw bezpieczeństwa aplikacji webowych, przez analizę malware, testy penetracyjne, aż po zaawansowane techniki ataku i obrony. To dokładnie to, czego potrzebuję, żeby pogłębić swoją wiedzę i umiejętności praktyczne.<br><br><strong>Moje plany</strong><br><br>W najbliższych miesiącach będę systematycznie przerabiał materiały z Akademii i dzielił się swoimi doświadczeniami na blogu. Planuję pisać o:<br><br>• Postępach w nauce<br>• Interesujących tematach, które poznam<br>• Praktycznych zastosowaniach zdobytej wiedzy<br>• Tips & tricks, które odkryję po drodze<br><br>Jeśli także interesujesz się cyberbezpieczeństwem, zapraszam do śledzenia moich postów. Możesz sprawdzić więcej informacji o Akademii Sekurak <a href="https://sklep.securitum.pl/sekurak-academy-2025" target="_blank">tutaj</a>.<br><br><strong>Co dalej?</strong><br><br>To dopiero początek mojej przygody z profesjonalnym cyberbezpieczeństwem. Liczę na to, że wiedza z Akademii pomoże mi lepiej rozumieć zagrożenia i sposoby ochrony w cyfrowym świecie. Stay tuned for more updates!',
            category: 'security',
            date: '2024-01-30',
            readTime: 6,
            tags: ['sekurak', 'akademia', 'cyberbezpieczeństwo', 'nauka', 'bezpieczeństwo']
        },
        {
            id: 8,
            title: 'Polecane kursy IT - od polskich platform po międzynarodowe',
            excerpt: 'Moje sprawdzone kursy online, które pomogły mi w nauce IT - od polskich źródeł po popularne platformy jak Udemy.',
            content: 'Nauka IT przez kursy online to świetny sposób na zdobycie praktycznej wiedzy. Dzisiaj podzielę się moimi sprawdzonymi kursami, z których sam się uczyłem.<br><br><strong>Polskie kursy - zrozumiały język, solidne podstawy</strong><br><br><strong><a href="https://zrozumsieci.pl/" target="_blank">Zrozum Sieci</a></strong> - Marcel Guzenda<br>Idealny kurs na początek przygody z sieciami. Marcel w przystępny sposób tłumaczy podstawy sieci komputerowych. Polskojęzyczny materiał sprawia, że nawet skomplikowane koncepty stają się zrozumiałe.<br><br><strong><a href="https://www.programujodpodstaw.pl/python-od-podstaw/" target="_blank">Python od podstaw</a></strong> - Kamil Brzeziński<br>Doskonały punkt startu dla osób chcących nauczyć się Pythona. Kamil prowadzi kurs w bardzo zrozumiały sposób, idealne wprowadzenie do programowania.<br><br><strong>Kursy Udemy - jakość zależy od podejścia</strong><br><br>Wiem, że Udemy bywa przez wielu krytykowane, ale prawda jest taka - jeśli przerobimy materiał krok po kroku, każdy dobry kurs przyniesie efekty. Oto moje sprawdzone polecenia:<br><br><strong>Linux - linia komend dla początkujących</strong> - Rafał Mobilo<br>Jak rozpocząć profesjonalną pracę w Linuxie. Rafał doskonale wprowadza w świat linii komend.<br><a href="https://www.udemy.com/course/linux101/" target="_blank">Link do kursu</a><br><br><strong>Powershell dla administratora - kompletny kurs</strong> - Rafał Mobilo<br>Zostań mistrzem linii komend Windows. Naucz się oskryptowywać powtarzalne zadania i ceniić swój czas jako administrator.<br><a href="https://www.udemy.com/course/powershell-dla-administratora-windows/" target="_blank">Link do kursu</a><br><br><strong>100 Days of Code: The Complete Python Pro Bootcamp</strong> - Dr. Angela Yu<br>Jeden z najpopularniejszych kursów Pythona na Udemy (ponad 1,1 mln studentów!). Dr. Angela Yu prowadzi przez 100 projektów w 100 dni. Kurs obejmuje automatyzację, tworzenie gier, aplikacji, stron internetowych, data science i machine learning.<br><br><strong>The Complete Networking Fundamentals Course</strong> - David Bombal<br>Doskonały start do certyfikacji CCNA. David Bombal to uznany ekspert w dziedzinie sieci, a kurs stanowi solidne wprowadzenie do podstaw networking.<br><a href="https://www.udemy.com/course/complete-networking-fundamentals-course-ccna-start/" target="_blank">Link do kursu</a><br><br><strong>CCNA 200-301 Video Boot Camp</strong> - Chris Bryant (CCIE #12933)<br>Ponad 100,000 studentów dołączyło do poprzednich kursów Chrisa na Udemy. Boot camp z ponad 30 godzinami materiału wideo, przygotowujący zarówno do egzaminu jak i do pracy w świecie rzeczywistym.<br><a href="https://www.udemy.com/course/ccna-200-301-video-boot-camp-with-chris-bryant/" target="_blank">Link do kursu</a><br><br><strong>Cisco CCNA 200-301 – The Complete Guide to Getting Certified</strong> - Neil Anderson (CCIE #23618)<br>Najwyżej oceniany kurs CCNA online z kompleksowymi filmami, ćwiczeniami laboratoryjnymi, notatkami i kartami Anki. Idealny do przygotowania się do certyfikacji.<br><br><strong>Moja rada</strong><br><br>Niezależnie od platformy - kluczem do sukcesu jest systematyczność i praktyka. Polskie kursy mają tę zaletę, że nie ma bariery językowej, natomiast kursy anglojęzyczne często oferują więcej zaawansowanych treści. Polecam zacząć od polskich źródeł dla podstaw, a potem rozwijać wiedzę na międzynarodowych platformach.',
            category: 'polecane',
            date: '2024-01-25',
            readTime: 12,
            tags: ['kursy', 'nauka', 'online', 'python', 'linux', 'sieci', 'udemy']
        },
        {
            id: 7,
            title: 'Polecane książki IT - od zabawy do akademickiego poziomu',
            excerpt: 'Moja subiektywna lista książek IT, które polecam - od przyjaznej serii "Rusz Głową" po bardziej akademickie pozycje.',
            content: 'W tej epoce technologicznej wybór odpowiednich książek może znacząco wpłynąć na naszą karierę w IT. Dzisiaj chciałbym podzielić się moją subiektywną listą książek, które szczególnie polecam.<br><br><div class="book-images-grid"><img src="img/Blog-książki/rusz-głową-js.jpg" alt="Rusz Głową JavaScript" class="book-image"><img src="img/Blog-książki/rusz-głową-python.jpg" alt="Rusz Głową Python" class="book-image"><img src="img/Blog-książki/sieci-komputerowe-rusz-głową.jpg" alt="Sieci komputerowe Rusz Głową" class="book-image"><img src="img/Blog-książki/php-rusz-głową.jpg" alt="PHP Rusz Głową" class="book-image"><img src="img/Blog-książki/jezyk-c-stephen-prata.jpg" alt="Język C Stephen Prata" class="book-image"><img src="img/Blog-książki/python-wprowadzenie.jpg" alt="Python Wprowadzenie" class="book-image"><img src="img/Blog-książki/linux-bilbia.jpg" alt="Linux Biblia" class="book-image"><img src="img/Blog-książki/linux-wiersz-polecen.jpg" alt="Linux Wiersz poleceń" class="book-image"><img src="img/Blog-książki/systemy-operacyjne.jpg" alt="Systemy operacyjne" class="book-image"><img src="img/Blog-książki/ccna-Adam-Józefiok.jpg" alt="CCNA Adam Józefiok" class="book-image"><img src="img/Blog-książki/sekurak-tom1.jpg" alt="Sekurak Tom 1" class="book-image"><img src="img/Blog-książki/js-john-bucket.jpg" alt="JavaScript John Bucket" class="book-image"><img src="img/Blog-książki/php-john-bucket.jpg" alt="PHP John Bucket" class="book-image"></div><br><strong>Seria "Rusz Głową" - nauka przez zabawę</strong><br><br>Na początek muszę wspomnieć o serii "Rusz Głową" (Head First), którą początkowo traktowałem bardziej jako zabawę niż poważną naukę. Jednak okazało się to bardzo pozytywnym i przyjaznym wprowadzeniem dla początkujących:<br><br>• <em>Rusz Głową JavaScript</em> - doskonałe wprowadzenie do świata JS<br>• <em>Rusz Głową Python</em> - idealne dla osób zaczynających przygodę z programowaniem<br>• <em>Sieci komputerowe. Rusz Głową</em> - skomplikowane tematy przedstawione w przystępny sposób<br>• <em>PHP. Rusz Głową</em> - programowanie stron internetowych w PHP<br><br>Książki te charakteryzują się unikalnym podejściem - używają wizualizacji, analogii i interaktywnych ćwiczeń, które sprawiają, że nawet trudne koncepty stają się zrozumiałe.<br><br><strong>Pozycje akademickie - głęboka wiedza</strong><br><br>Gdy podstawy są już opanowane, warto sięgnąć po bardziej akademickie pozycje:<br><br>• <em>Język C. Kompendium wiedzy</em> Stephen Prata - biblia programowania w C<br>• <em>Python. Wprowadzenie</em> - solidne podstawy tego języka<br>• <em>Linux. Biblia</em> - kompleksowy przewodnik po systemie Linux<br>• <em>Linux. Wiersz poleceń</em> - nieoceniona wiedza dla administratorów<br>• <em>Systemy operacyjne</em> - teoretyczne podstawy działania systemów<br>• <em>CCNA</em> Adam Józefiok - praktyczna wiedza o sieciach Cisco<br>• <em>Sekurak Tom 1</em> - polskie podejście do cyberbezpieczeństwa<br><br>Te książki wymagają większego zaangażowania, ale oferują znacznie głębszą wiedzę teoretyczną i praktyczną.<br><br><strong>Moja rekomendacja</strong><br><br>Polecam rozpoczęcie nauki od serii "Rusz Głową" - to świetny sposób na zbudowanie motywacji i podstawowego zrozumienia. Potem warto przejść do bardziej akademickich pozycji, które pozwolą zgłębić temat i zdobyć ekspercki poziom wiedzy.<br><br>Pamiętajcie - nie ma uniwersalnej drogi w nauce IT. Każdy ma swój styl uczenia się, ale te książki na pewno warto mieć w swojej biblioteczce!',
            category: 'polecane',
            date: '2024-01-20',
            readTime: 10,
            tags: ['książki', 'nauka', 'programowanie', 'IT', 'rekomendacje']
        },
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
            id: 9,
            title: 'Starting My Journey with Sekurak Academy',
            excerpt: 'I just enrolled in Sekurak Academy 2025. I\'ll share my cybersecurity learning experiences in the coming months.',
            content: 'Cybersecurity is a field that particularly fascinates me and where I want to develop. After long deliberation, I decided to take the next step in my IT education.<br><br><strong>Why Sekurak Academy?</strong><br><br>Sekurak is a brand that needs no introduction in the Polish cybersecurity community. Sekurak Zine, courses, books - all of this creates a solid knowledge base for people wanting to develop in this field. Sekurak Academy is a comprehensive training program covering practical aspects of IT security.<br><br><strong>What awaits me?</strong><br><br>The Academy offers a wide range of topics - from web application security fundamentals, through malware analysis, penetration testing, to advanced attack and defense techniques. This is exactly what I need to deepen my knowledge and practical skills.<br><br><strong>My plans</strong><br><br>In the coming months, I will systematically work through Academy materials and share my experiences on the blog. I plan to write about:<br><br>• Learning progress<br>• Interesting topics I discover<br>• Practical applications of acquired knowledge<br>• Tips & tricks I find along the way<br><br>If you\'re also interested in cybersecurity, I invite you to follow my posts. You can check more information about Sekurak Academy <a href="https://sklep.securitum.pl/sekurak-academy-2025" target="_blank">here</a>.<br><br><strong>What\'s next?</strong><br><br>This is just the beginning of my adventure with professional cybersecurity. I hope that knowledge from the Academy will help me better understand threats and protection methods in the digital world. Stay tuned for more updates!',
            category: 'security',
            date: '2024-01-30',
            readTime: 6,
            tags: ['sekurak', 'academy', 'cybersecurity', 'learning', 'security']
        },
        {
            id: 8,
            title: 'Recommended IT Courses - From Polish Platforms to International',
            excerpt: 'My proven online courses that helped me learn IT - from Polish sources to popular platforms like Udemy.',
            content: 'Learning IT through online courses is a great way to gain practical knowledge. Today I\'ll share my proven courses that I personally learned from.<br><br><strong>Polish Courses - Clear Language, Solid Foundations</strong><br><br><strong><a href="https://zrozumsieci.pl/" target="_blank">Zrozum Sieci (Understand Networks)</a></strong> - Marcel Guzenda<br>Perfect course to start your networking journey. Marcel explains computer networking fundamentals in an accessible way. Polish-language material makes even complex concepts understandable.<br><br><strong><a href="https://www.programujodpodstaw.pl/python-od-podstaw/" target="_blank">Python od podstaw (Python from Basics)</a></strong> - Kamil Brzeziński<br>Excellent starting point for those wanting to learn Python. Kamil conducts the course in a very understandable way, ideal introduction to programming.<br><br><strong>Udemy Courses - Quality Depends on Your Approach</strong><br><br>I know Udemy is often criticized by many, but the truth is - if you work through the material step by step, any good course will bring results. Here are my proven recommendations:<br><br><strong>Linux - Command Line for Beginners</strong> - Rafał Mobilo<br>How to start professional work in Linux. Rafał excellently introduces the world of command line.<br><a href="https://www.udemy.com/course/linux101/" target="_blank">Course Link</a><br><br><strong>PowerShell for Administrator - Complete Course</strong> - Rafał Mobilo<br>Become a Windows command line master. Learn to script repetitive tasks and value your time as an administrator.<br><a href="https://www.udemy.com/course/powershell-dla-administratora-windows/" target="_blank">Course Link</a><br><br><strong>100 Days of Code: The Complete Python Pro Bootcamp</strong> - Dr. Angela Yu<br>One of the most popular Python courses on Udemy (over 1.1 million students!). Dr. Angela Yu guides through 100 projects in 100 days. The course covers automation, game creation, apps, websites, data science and machine learning.<br><br><strong>The Complete Networking Fundamentals Course</strong> - David Bombal<br>Excellent start for CCNA certification. David Bombal is a recognized networking expert, and the course provides solid introduction to networking fundamentals.<br><a href="https://www.udemy.com/course/complete-networking-fundamentals-course-ccna-start/" target="_blank">Course Link</a><br><br><strong>CCNA 200-301 Video Boot Camp</strong> - Chris Bryant (CCIE #12933)<br>Over 100,000 students joined Chris\'s previous courses on Udemy. Boot camp with over 30 hours of video material, preparing both for the exam and real-world work.<br><a href="https://www.udemy.com/course/ccna-200-301-video-boot-camp-with-chris-bryant/" target="_blank">Course Link</a><br><br><strong>Cisco CCNA 200-301 – The Complete Guide to Getting Certified</strong> - Neil Anderson (CCIE #23618)<br>The highest rated CCNA course online with comprehensive videos, lab exercises, study notes and Anki flashcards. Perfect for certification preparation.<br><br><strong>My Advice</strong><br><br>Regardless of the platform - the key to success is consistency and practice. Polish courses have the advantage of no language barrier, while English courses often offer more advanced content. I recommend starting with Polish sources for basics, then expanding knowledge on international platforms.',
            category: 'polecane',
            date: '2024-01-25',
            readTime: 12,
            tags: ['courses', 'learning', 'online', 'python', 'linux', 'networking', 'udemy']
        },
        {
            id: 7,
            title: 'Recommended IT Books - From Fun to Academic Level',
            excerpt: 'My subjective list of IT books I recommend - from the friendly "Head First" series to more academic positions.',
            content: 'In this technological era, choosing the right books can significantly impact our IT career. Today I would like to share my subjective list of books that I particularly recommend.<br><br><div class="book-images-grid"><img src="img/Blog-książki/rusz-głową-js.jpg" alt="Head First JavaScript" class="book-image"><img src="img/Blog-książki/rusz-głową-python.jpg" alt="Head First Python" class="book-image"><img src="img/Blog-książki/sieci-komputerowe-rusz-głową.jpg" alt="Head First Networking" class="book-image"><img src="img/Blog-książki/php-rusz-głową.jpg" alt="Head First PHP" class="book-image"><img src="img/Blog-książki/jezyk-c-stephen-prata.jpg" alt="C Language Stephen Prata" class="book-image"><img src="img/Blog-książki/python-wprowadzenie.jpg" alt="Python Introduction" class="book-image"><img src="img/Blog-książki/linux-bilbia.jpg" alt="Linux Bible" class="book-image"><img src="img/Blog-książki/linux-wiersz-polecen.jpg" alt="Linux Command Line" class="book-image"><img src="img/Blog-książki/systemy-operacyjne.jpg" alt="Operating Systems" class="book-image"><img src="img/Blog-książki/ccna-Adam-Józefiok.jpg" alt="CCNA Adam Józefiok" class="book-image"><img src="img/Blog-książki/sekurak-tom1.jpg" alt="Sekurak Volume 1" class="book-image"><img src="img/Blog-książki/js-john-bucket.jpg" alt="JavaScript John Bucket" class="book-image"><img src="img/Blog-książki/php-john-bucket.jpg" alt="PHP John Bucket" class="book-image"></div><br><strong>Head First Series - Learning Through Fun</strong><br><br>First, I must mention the "Head First" series, which I initially treated more as entertainment than serious learning. However, it turned out to be a very positive and friendly introduction for beginners:<br><br>• <em>Head First JavaScript</em> - excellent introduction to the world of JS<br>• <em>Head First Python</em> - ideal for those starting their programming adventure<br>• <em>Head First Networking</em> - complex topics presented in an accessible way<br>• <em>Head First PHP</em> - web programming with PHP<br><br>These books are characterized by a unique approach - they use visualizations, analogies, and interactive exercises that make even difficult concepts understandable.<br><br><strong>Academic Positions - Deep Knowledge</strong><br><br>Once the basics are mastered, it\'s worth reaching for more academic positions:<br><br>• <em>C Language Compendium</em> Stephen Prata - the bible of C programming<br>• <em>Python Introduction</em> - solid foundations of this language<br>• <em>Linux Bible</em> - comprehensive guide to the Linux system<br>• <em>Linux Command Line</em> - invaluable knowledge for administrators<br>• <em>Operating Systems</em> - theoretical foundations of system operation<br>• <em>CCNA</em> Adam Józefiok - practical knowledge about Cisco networks<br>• <em>Sekurak Volume 1</em> - Polish approach to cybersecurity<br><br>These books require more commitment but offer much deeper theoretical and practical knowledge.<br><br><strong>My Recommendation</strong><br><br>I recommend starting learning with the "Head First" series - it\'s a great way to build motivation and basic understanding. Then it\'s worth moving to more academic positions that will allow you to delve deeper into the topic and gain expert-level knowledge.<br><br>Remember - there is no universal path in IT learning. Everyone has their own learning style, but these books are definitely worth having in your library!',
            category: 'polecane',
            date: '2024-01-20',
            readTime: 10,
            tags: ['books', 'learning', 'programming', 'IT', 'recommendations']
        },
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
            id: 9,
            title: 'Beginn meiner Reise mit der Sekurak Academy',
            excerpt: 'Ich habe mich gerade für die Sekurak Academy 2025 angemeldet. Ich werde meine Erfahrungen beim Lernen von Cybersicherheit in den kommenden Monaten teilen.',
            content: 'Cybersicherheit ist ein Bereich, der mich besonders fasziniert und in dem ich mich entwickeln möchte. Nach langen Überlegungen habe ich beschlossen, den nächsten Schritt in meiner IT-Ausbildung zu machen.<br><br><strong>Warum Sekurak Academy?</strong><br><br>Sekurak ist eine Marke, die in der polnischen Cybersicherheits-Community keiner Vorstellung bedarf. Sekurak Zine, Kurse, Bücher - all das schafft eine solide Wissensbasis für Menschen, die sich in diesem Bereich entwickeln möchten. Die Sekurak Academy ist ein umfassendes Trainingsprogramm, das praktische Aspekte der IT-Sicherheit abdeckt.<br><br><strong>Was erwartet mich?</strong><br><br>Die Academy bietet eine breite Palette von Themen - von Grundlagen der Webanwendungssicherheit über Malware-Analyse, Penetrationstests bis hin zu fortgeschrittenen Angriffs- und Verteidigungstechniken.<br><br><strong>Meine Pläne</strong><br><br>In den kommenden Monaten werde ich systematisch durch die Academy-Materialien arbeiten und meine Erfahrungen im Blog teilen. Ich plane zu schreiben über:<br><br>• Lernfortschritte<br>• Interessante Themen, die ich entdecke<br>• Praktische Anwendungen des erworbenen Wissens<br>• Tipps & Tricks, die ich unterwegs finde<br><br>Weitere Informationen über die Sekurak Academy finden Sie <a href="https://sklep.securitum.pl/sekurak-academy-2025" target="_blank">hier</a>.<br><br><strong>Was kommt als nächstes?</strong><br><br>Dies ist nur der Beginn meines Abenteuers mit professioneller Cybersicherheit. Ich hoffe, dass das Wissen aus der Academy mir hilft, Bedrohungen und Schutzmethoden in der digitalen Welt besser zu verstehen.',
            category: 'security',
            date: '2024-01-30',
            readTime: 6,
            tags: ['sekurak', 'akademie', 'cybersicherheit', 'lernen', 'sicherheit']
        },
        {
            id: 8,
            title: 'Empfohlene IT-Kurse - Von polnischen Plattformen bis international',
            excerpt: 'Meine bewährten Online-Kurse, die mir beim IT-Lernen geholfen haben - von polnischen Quellen bis zu populären Plattformen wie Udemy.',
            content: 'Das Erlernen von IT durch Online-Kurse ist eine großartige Möglichkeit, praktisches Wissen zu erlangen. Heute teile ich meine bewährten Kurse, von denen ich persönlich gelernt habe.<br><br><strong>Polnische Kurse - Klare Sprache, Solide Grundlagen</strong><br><br><strong><a href="https://zrozumsieci.pl/" target="_blank">Zrozum Sieci (Verstehe Netzwerke)</a></strong> - Marcel Guzenda<br>Perfekter Kurs, um Ihre Netzwerk-Reise zu beginnen. Marcel erklärt Computernetzwerk-Grundlagen auf verständliche Weise.<br><br><strong><a href="https://www.programujodpodstaw.pl/python-od-podstaw/" target="_blank">Python od podstaw (Python von Grund auf)</a></strong> - Kamil Brzeziński<br>Ausgezeichneter Ausgangspunkt für diejenigen, die Python lernen möchten. Kamil führt den Kurs auf sehr verständliche Weise durch.<br><br><strong>Udemy-Kurse - Qualität hängt vom Ansatz ab</strong><br><br>Ich weiß, dass Udemy oft kritisiert wird, aber die Wahrheit ist - wenn Sie das Material Schritt für Schritt durcharbeiten, wird jeder gute Kurs Ergebnisse bringen. Hier sind meine bewährten Empfehlungen:<br><br><strong>Linux - Kommandozeile für Anfänger</strong> - Rafał Mobilo<br>Wie man professionelle Arbeit in Linux beginnt. Rafał führt ausgezeichnet in die Welt der Kommandozeile ein.<br><br><strong>100 Days of Code: The Complete Python Pro Bootcamp</strong> - Dr. Angela Yu<br>Einer der beliebtesten Python-Kurse auf Udemy (über 1,1 Millionen Studenten!). Dr. Angela Yu führt durch 100 Projekte in 100 Tagen.<br><br><strong>The Complete Networking Fundamentals Course</strong> - David Bombal<br>Ausgezeichneter Start für CCNA-Zertifizierung. David Bombal ist ein anerkannter Netzwerk-Experte.<br><br><strong>CCNA 200-301 Video Boot Camp</strong> - Chris Bryant (CCIE #12933)<br>Über 100.000 Studenten nahmen an Chris\'s vorherigen Kursen auf Udemy teil. Boot Camp mit über 30 Stunden Videomaterial.<br><br><strong>Cisco CCNA 200-301 – The Complete Guide to Getting Certified</strong> - Neil Anderson (CCIE #23618)<br>Der am höchsten bewertete CCNA-Kurs online mit umfassenden Videos, Laborübungen und Anki-Karten.<br><br><strong>Mein Rat</strong><br><br>Unabhängig von der Plattform - der Schlüssel zum Erfolg ist Konsistenz und Übung. Polnische Kurse haben den Vorteil keiner Sprachbarriere, während englische Kurse oft erweiterte Inhalte bieten.',
            category: 'polecane',
            date: '2024-01-25',
            readTime: 12,
            tags: ['kurse', 'lernen', 'online', 'python', 'linux', 'netzwerke', 'udemy']
        },
        {
            id: 7,
            title: 'Empfohlene IT-Bücher - Von Spaß bis akademischem Niveau',
            excerpt: 'Meine subjektive Liste von IT-Büchern, die ich empfehle - von der freundlichen "Head First" Serie bis zu akademischeren Werken.',
            content: 'In dieser technologischen Ära kann die Wahl der richtigen Bücher unsere IT-Karriere erheblich beeinflussen. Heute möchte ich meine subjektive Liste von Büchern teilen, die ich besonders empfehle.<br><br><div class="book-images-grid"><img src="img/Blog-książki/rusz-głową-js.jpg" alt="Head First JavaScript" class="book-image"><img src="img/Blog-książki/rusz-głową-python.jpg" alt="Head First Python" class="book-image"><img src="img/Blog-książki/sieci-komputerowe-rusz-głową.jpg" alt="Head First Networking" class="book-image"><img src="img/Blog-książki/php-rusz-głową.jpg" alt="Head First PHP" class="book-image"><img src="img/Blog-książki/jezyk-c-stephen-prata.jpg" alt="C Sprache Stephen Prata" class="book-image"><img src="img/Blog-książki/python-wprowadzenie.jpg" alt="Python Einführung" class="book-image"><img src="img/Blog-książki/linux-bilbia.jpg" alt="Linux Bibel" class="book-image"><img src="img/Blog-książki/linux-wiersz-polecen.jpg" alt="Linux Kommandozeile" class="book-image"><img src="img/Blog-książki/systemy-operacyjne.jpg" alt="Betriebssysteme" class="book-image"><img src="img/Blog-książki/ccna-Adam-Józefiok.jpg" alt="CCNA Adam Józefiok" class="book-image"><img src="img/Blog-książki/sekurak-tom1.jpg" alt="Sekurak Band 1" class="book-image"><img src="img/Blog-książki/js-john-bucket.jpg" alt="JavaScript John Bucket" class="book-image"><img src="img/Blog-książki/php-john-bucket.jpg" alt="PHP John Bucket" class="book-image"></div><br><strong>Head First Serie - Lernen durch Spaß</strong><br><br>Zunächst muss ich die "Head First" Serie erwähnen, die ich anfangs eher als Unterhaltung denn als ernsthaftes Lernen behandelte. Es stellte sich jedoch als sehr positive und freundliche Einführung für Anfänger heraus:<br><br>• <em>Head First JavaScript</em> - ausgezeichnete Einführung in die Welt von JS<br>• <em>Head First Python</em> - ideal für diejenigen, die ihr Programmierabenteuer beginnen<br>• <em>Head First Networking</em> - komplexe Themen verständlich dargestellt<br>• <em>Head First PHP</em> - Webprogrammierung mit PHP<br><br>Diese Bücher zeichnen sich durch einen einzigartigen Ansatz aus - sie verwenden Visualisierungen, Analogien und interaktive Übungen, die selbst schwierige Konzepte verständlich machen.<br><br><strong>Akademische Werke - Tiefes Wissen</strong><br><br>Wenn die Grundlagen beherrscht sind, lohnt es sich, zu akademischeren Werken zu greifen:<br><br>• <em>C Sprache Kompendium</em> Stephen Prata - die Bibel der C-Programmierung<br>• <em>Python Einführung</em> - solide Grundlagen dieser Sprache<br>• <em>Linux Bibel</em> - umfassender Leitfaden zum Linux-System<br>• <em>Linux Kommandozeile</em> - unschätzbares Wissen für Administratoren<br>• <em>Betriebssysteme</em> - theoretische Grundlagen des Systembetriebs<br>• <em>CCNA</em> Adam Józefiok - praktisches Wissen über Cisco-Netzwerke<br>• <em>Sekurak Band 1</em> - polnischer Ansatz zur Cybersicherheit<br><br>Diese Bücher erfordern mehr Engagement, bieten aber viel tieferes theoretisches und praktisches Wissen.<br><br><strong>Meine Empfehlung</strong><br><br>Ich empfehle, das Lernen mit der "Head First" Serie zu beginnen - das ist ein großartiger Weg, Motivation und grundlegendes Verständnis aufzubauen. Dann lohnt es sich, zu akademischeren Werken überzugehen, die es ermöglichen, tiefer in das Thema einzutauchen und Expertenwissen zu erlangen.<br><br>Denken Sie daran - es gibt keinen universellen Weg beim IT-Lernen. Jeder hat seinen eigenen Lernstil, aber diese Bücher sind definitiv einen Platz in Ihrer Bibliothek wert!',
            category: 'polecane',
            date: '2024-01-20',
            readTime: 10,
            tags: ['bücher', 'lernen', 'programmierung', 'IT', 'empfehlungen']
        },
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
            id: 9,
            title: 'Comenzando Mi Aventura con la Academia Sekurak',
            excerpt: 'Acabo de inscribirme en la Academia Sekurak 2025. Compartiré mis experiencias de aprendizaje en ciberseguridad en los próximos meses.',
            content: 'La ciberseguridad es un campo que me fascina particularmente y donde quiero desarrollarme. Después de largas deliberaciones, decidí dar el siguiente paso en mi educación IT.<br><br><strong>¿Por qué la Academia Sekurak?</strong><br><br>Sekurak es una marca que no necesita presentación en la comunidad polaca de ciberseguridad. Sekurak Zine, cursos, libros - todo esto crea una base sólida de conocimiento para personas que quieren desarrollarse en este campo. La Academia Sekurak es un programa de entrenamiento integral que cubre aspectos prácticos de la seguridad IT.<br><br><strong>¿Qué me espera?</strong><br><br>La Academia ofrece una amplia gama de temas - desde fundamentos de seguridad de aplicaciones web, análisis de malware, pruebas de penetración, hasta técnicas avanzadas de ataque y defensa.<br><br><strong>Mis planes</strong><br><br>En los próximos meses, trabajaré sistemáticamente a través de los materiales de la Academia y compartiré mis experiencias en el blog. Planeo escribir sobre:<br><br>• Progreso de aprendizaje<br>• Temas interesantes que descubra<br>• Aplicaciones prácticas del conocimiento adquirido<br>• Consejos y trucos que encuentre en el camino<br><br>Puedes consultar más información sobre la Academia Sekurak <a href="https://sklep.securitum.pl/sekurak-academy-2025" target="_blank">aquí</a>.<br><br><strong>¿Qué sigue?</strong><br><br>Este es solo el comienzo de mi aventura con la ciberseguridad profesional. Espero que el conocimiento de la Academia me ayude a entender mejor las amenazas y métodos de protección en el mundo digital.',
            category: 'security',
            date: '2024-01-30',
            readTime: 6,
            tags: ['sekurak', 'academia', 'ciberseguridad', 'aprendizaje', 'seguridad']
        },
        {
            id: 8,
            title: 'Cursos IT Recomendados - De Plataformas Polacas a Internacionales',
            excerpt: 'Mis cursos online probados que me ayudaron a aprender IT - desde fuentes polacas hasta plataformas populares como Udemy.',
            content: 'Aprender IT a través de cursos online es una excelente manera de obtener conocimiento práctico. Hoy compartiré mis cursos probados de los que personalmente aprendí.<br><br><strong>Cursos Polacos - Idioma Claro, Fundamentos Sólidos</strong><br><br><strong><a href="https://zrozumsieci.pl/" target="_blank">Zrozum Sieci (Entender Redes)</a></strong> - Marcel Guzenda<br>Curso perfecto para comenzar tu viaje en redes. Marcel explica los fundamentos de redes de computadoras de manera accesible.<br><br><strong><a href="https://www.programujodpodstaw.pl/python-od-podstaw/" target="_blank">Python od podstaw (Python desde lo Básico)</a></strong> - Kamil Brzeziński<br>Excelente punto de partida para quienes quieren aprender Python. Kamil conduce el curso de manera muy comprensible.<br><br><strong>Cursos de Udemy - La Calidad Depende de tu Enfoque</strong><br><br>Sé que Udemy es a menudo criticado, pero la verdad es - si trabajas el material paso a paso, cualquier buen curso traerá resultados. Aquí están mis recomendaciones probadas:<br><br><strong>Linux - Línea de Comandos para Principiantes</strong> - Rafał Mobilo<br>Cómo comenzar trabajo profesional en Linux. Rafał introduce excelentemente el mundo de la línea de comandos.<br><br><strong>100 Days of Code: The Complete Python Pro Bootcamp</strong> - Dr. Angela Yu<br>Uno de los cursos de Python más populares en Udemy (¡más de 1.1 millones de estudiantes!). La Dr. Angela Yu guía a través de 100 proyectos en 100 días.<br><br><strong>The Complete Networking Fundamentals Course</strong> - David Bombal<br>Excelente inicio para la certificación CCNA. David Bombal es un experto en redes reconocido.<br><br><strong>CCNA 200-301 Video Boot Camp</strong> - Chris Bryant (CCIE #12933)<br>Más de 100,000 estudiantes se unieron a los cursos anteriores de Chris en Udemy. Boot camp con más de 30 horas de material en video.<br><br><strong>Cisco CCNA 200-301 – The Complete Guide to Getting Certified</strong> - Neil Anderson (CCIE #23618)<br>El curso CCNA mejor calificado online con videos completos, ejercicios de laboratorio y tarjetas Anki.<br><br><strong>Mi Consejo</strong><br><br>Sin importar la plataforma - la clave del éxito es consistencia y práctica. Los cursos polacos tienen la ventaja de no tener barrera idiomática, mientras que los cursos en inglés a menudo ofrecen contenido más avanzado.',
            category: 'polecane',
            date: '2024-01-25',
            readTime: 12,
            tags: ['cursos', 'aprendizaje', 'online', 'python', 'linux', 'redes', 'udemy']
        },
        {
            id: 7,
            title: 'Libros IT Recomendados - De la Diversión al Nivel Académico',
            excerpt: 'Mi lista subjetiva de libros de IT que recomiendo - desde la amigable serie "Head First" hasta posiciones más académicas.',
            content: 'En esta era tecnológica, elegir los libros correctos puede impactar significativamente nuestra carrera en IT. Hoy me gustaría compartir mi lista subjetiva de libros que particularmente recomiendo.<br><br><div class="book-images-grid"><img src="img/Blog-książki/rusz-głową-js.jpg" alt="Head First JavaScript" class="book-image"><img src="img/Blog-książki/rusz-głową-python.jpg" alt="Head First Python" class="book-image"><img src="img/Blog-książki/sieci-komputerowe-rusz-głową.jpg" alt="Head First Networking" class="book-image"><img src="img/Blog-książki/php-rusz-głową.jpg" alt="Head First PHP" class="book-image"><img src="img/Blog-książki/jezyk-c-stephen-prata.jpg" alt="Compendio del Lenguaje C Stephen Prata" class="book-image"><img src="img/Blog-książki/python-wprowadzenie.jpg" alt="Introducción a Python" class="book-image"><img src="img/Blog-książki/linux-bilbia.jpg" alt="Biblia de Linux" class="book-image"><img src="img/Blog-książki/linux-wiersz-polecen.jpg" alt="Línea de Comandos de Linux" class="book-image"><img src="img/Blog-książki/systemy-operacyjne.jpg" alt="Sistemas Operativos" class="book-image"><img src="img/Blog-książki/ccna-Adam-Józefiok.jpg" alt="CCNA Adam Józefiok" class="book-image"><img src="img/Blog-książki/sekurak-tom1.jpg" alt="Sekurak Volumen 1" class="book-image"><img src="img/Blog-książki/js-john-bucket.jpg" alt="JavaScript John Bucket" class="book-image"><img src="img/Blog-książki/php-john-bucket.jpg" alt="PHP John Bucket" class="book-image"></div><br><strong>Serie Head First - Aprendiendo Através de la Diversión</strong><br><br>Primero, debo mencionar la serie "Head First", que inicialmente traté más como entretenimiento que como aprendizaje serio. Sin embargo, resultó ser una introducción muy positiva y amigable para principiantes:<br><br>• <em>Head First JavaScript</em> - excelente introducción al mundo de JS<br>• <em>Head First Python</em> - ideal para aquellos que comienzan su aventura en programación<br>• <em>Head First Networking</em> - temas complejos presentados de manera accesible<br>• <em>Head First PHP</em> - programación web con PHP<br><br>Estos libros se caracterizan por un enfoque único - usan visualizaciones, analogías y ejercicios interactivos que hacen que incluso los conceptos difíciles sean comprensibles.<br><br><strong>Posiciones Académicas - Conocimiento Profundo</strong><br><br>Una vez que se dominan los básicos, vale la pena alcanzar posiciones más académicas:<br><br>• <em>Compendio del Lenguaje C</em> Stephen Prata - la biblia de la programación en C<br>• <em>Introducción a Python</em> - fundamentos sólidos de este lenguaje<br>• <em>Biblia de Linux</em> - guía completa del sistema Linux<br>• <em>Línea de Comandos de Linux</em> - conocimiento invaluable para administradores<br>• <em>Sistemas Operativos</em> - fundamentos teóricos de la operación del sistema<br>• <em>CCNA</em> Adam Józefiok - conocimiento práctico sobre redes Cisco<br>• <em>Sekurak Volumen 1</em> - enfoque polaco a la ciberseguridad<br><br>Estos libros requieren más compromiso pero ofrecen conocimiento teórico y práctico mucho más profundo.<br><br><strong>Mi Recomendación</strong><br><br>Recomiendo comenzar el aprendizaje con la serie "Head First" - es una gran manera de construir motivación y comprensión básica. Luego vale la pena pasar a posiciones más académicas que permitirán profundizar en el tema y obtener conocimiento de nivel experto.<br><br>Recuerden - no hay un camino universal en el aprendizaje de IT. Cada uno tiene su propio estilo de aprendizaje, ¡pero estos libros definitivamente valen la pena tener en su biblioteca!',
            category: 'polecane',
            date: '2024-01-20',
            readTime: 10,
            tags: ['libros', 'aprendizaje', 'programación', 'IT', 'recomendaciones']
        },
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
/* Book images grid styles */
.book-images-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 1rem;
    margin: 2rem 0;
    padding: 1rem;
    background: #f8f9fa;
    border-radius: 10px;
}

.book-image {
    width: 100%;
    height: 160px;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.15);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
}

.book-image:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0 8px 20px rgba(0,0,0,0.25);
}

@media (max-width: 768px) {
    .book-images-grid {
        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
        gap: 0.8rem;
    }
    
    .book-image {
        height: 140px;
    }
}

@media (max-width: 480px) {
    .book-images-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 0.5rem;
    }
    
    .book-image {
        height: 120px;
    }
}

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