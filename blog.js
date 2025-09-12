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
            id: 11,
            title: 'Prometheus i Grafana w monitoringu cyberbezpieczeństwa',
            excerpt: 'Jak wykorzystać Prometheus i Grafana do budowy skutecznego systemu monitoringu bezpieczeństwa. Kompleksowe rozwiązanie dla SOC i zespołów bezpieczeństwa.',
            content: 'W dzisiejszym świecie cyberbezpieczeństwa, gdzie ataki stają się coraz bardziej wyrafinowane, kluczowe jest posiadanie skutecznego systemu monitoringu. Prometheus i Grafana to potężne narzędzia, które mogą znacząco wzmocnić nasze możliwości obronne.<br><br><strong>Czym są Prometheus i Grafana?</strong><br><br><strong>Prometheus</strong> to system monitoringu i alertowania typu open-source, pierwotnie stworzony przez SoundCloud. Specjalizuje się w zbieraniu i przechowywaniu danych metrycznych jako szeregów czasowych.<br><br><strong>Grafana</strong> to platforma wizualizacji i analizy, która pozwala na tworzenie interaktywnych dashboardów i alertów na podstawie różnych źródeł danych.<br><br><strong>Dlaczego są idealne do cyberbezpieczeństwa?</strong><br><br>• <strong>Monitoring w czasie rzeczywistym</strong> - Natychmiastowe wykrywanie anomalii<br>• <strong>Skalowalne alertowanie</strong> - Automatyczne powiadomienia o incydentach<br>• <strong>Wizualizacja zagrożeń</strong> - Graficzne przedstawienie stanu bezpieczeństwa<br>• <strong>Analiza trendów</strong> - Identyfikacja wzorców ataków<br>• <strong>Integracja</strong> - Łatwe połączenie z istniejącą infrastrukturą<br><br><strong>Przypadki użycia w cyberbezpieczeństwie</strong><br><br><strong>1. Monitoring ruchu sieciowego</strong><br>• Wykrywanie nietypowego ruchu<br>• Analiza przepustowości<br>• Identyfikacja ataków DDoS<br>• Monitoring geolokalizacji połączeń<br><br><strong>2. Monitorowanie logów bezpieczeństwa</strong><br>• Analiza logów firewall<br>• Monitoring prób logowania<br>• Wykrywanie ataków brute-force<br>• Śledzenie dostępów do systemów krytycznych<br><br><strong>3. Monitoring infrastruktury</strong><br>• Wydajność systemów bezpieczeństwa<br>• Status antywirusów i EDR<br>• Monitoring certyfikatów SSL/TLS<br>• Kontrola aktualizacji bezpieczeństwa<br><br><strong>4. Compliance i audyty</strong><br>• Raportowanie zgodności (GDPR, ISO 27001)<br>• Śledzenie zmian w systemach<br>• Dokumentacja incydentów<br>• Metryki czasu odpowiedzi SOC<br><br><strong>Kluczowe metryki bezpieczeństwa do monitorowania</strong><br><br>• <strong>MTTR (Mean Time To Response)</strong> - Średni czas odpowiedzi na incydent<br>• <strong>MTTD (Mean Time To Detection)</strong> - Średni czas wykrycia zagrożenia<br>• <strong>Liczba ataków na dzień/godzinę</strong><br>• <strong>Wskaźniki false positive/negative</strong><br>• <strong>Pokrycie monitoringu</strong> - procent monitorowanych zasobów<br>• <strong>Wydajność narzędzi bezpieczeństwa</strong><br><br><strong>Przykładowe dashboardy dla SOC</strong><br><br><strong>Security Overview Dashboard:</strong><br>• Mapa zagrożeń w czasie rzeczywistym<br>• Top 10 adresów IP atakujących<br>• Trendy ataków (dzienne/tygodniowe)<br>• Status systemów obrony<br><br><strong>Network Security Dashboard:</strong><br>• Ruch sieciowy według portów i protokołów<br>• Geo-mapa połączeń<br>• Wykryte malware i botnet<br>• Anomalie w ruchu DNS<br><br><strong>Incident Response Dashboard:</strong><br>• Aktywne incydenty według prioritetu<br>• Czas trwania investigacji<br>• Metryki zespołu SOC<br>• Timeline najważniejszych zdarzeń<br><br><strong>Integracja z narzędziami bezpieczeństwa</strong><br><br>Prometheus i Grafana mogą zbierać dane z:<br>• <strong>SIEM</strong> (Splunk, ElasticSearch, QRadar)<br>• <strong>EDR/XDR</strong> (CrowdStrike, SentinelOne)<br>• <strong>Firewall i IDS/IPS</strong><br>• <strong>Vulnerability Scanners</strong><br>• <strong>Threat Intelligence Platforms</strong><br><br><strong>Najlepsze praktyki implementacji</strong><br><br><strong>1. Rozpocznij od podstawowych metryk</strong><br>• Nie próbuj monitorować wszystkiego od razu<br>• Skup się na krytycznych zasobach<br>• Stopniowo rozszerzaj zakres<br><br><strong>2. Ustaw inteligentne alerty</strong><br>• Unikaj alert fatigue<br>• Używaj progów dynamicznych<br>• Implementuj escalation policies<br><br><strong>3. Regularnie przeglądaj i dostosowuj</strong><br>• Aktualizuj dashboardy według potrzeb<br>• Analizuj skuteczność alertów<br>• Zbieraj feedback od analityków SOC<br><br><strong>4. Zabezpiecz sam system monitoringu</strong><br>• Używaj HTTPS i TLS<br>• Implementuj proper authentication<br>• Regularnie aktualizuj komponenty<br>• Twórz backupy konfiguracji<br><br><strong>Wyzwania i rozwiązania</strong><br><br><strong>Problem: Zbyt dużo danych</strong><br>Rozwiązanie: Użyj recording rules w Prometheus do pre-agregacji<br><br><strong>Problem: Wydajność dashboardów</strong><br>Rozwiązanie: Optymalizuj zapytania, używaj template variables<br><br><strong>Problem: False positive alerts</strong><br>Rozwiązanie: Fine-tune thresholds, używaj korelacji zdarzeń<br><br><strong>Podsumowanie</strong><br><br>Prometheus i Grafana to potężne narzędzia, które mogą znacząco poprawić skuteczność zespołów cyberbezpieczeństwa. Właściwie wdrożone, pozwalają na:<br><br>• Szybsze wykrywanie zagrożeń<br>• Lepsze zrozumienie landscape bezpieczeństwa<br>• Efektywniejszą pracę analityków SOC<br>• Dokumentację compliance i audytów<br><br>Jeśli jeszcze nie używasz tych narzędzi w swojej organizacji, warto rozważyć ich wdrożenie. To inwestycja, która może znacząco wzmocnić twoją obronność cybernetyczną.',
            category: 'security',
            date: '2025-09-11',
            readTime: 15,
            tags: ['prometheus', 'grafana', 'monitoring', 'SOC', 'cyberbezpieczeństwo', 'SIEM', 'alertowanie']
        },
        {
            id: 10,
            title: 'Nowe książki C++ - pogłębianie wiedzy o języku',
            excerpt: 'Dziś kupiłem dwie nowe książki o C++, żeby zagłębić moją wiedzę z tego języka. Czas na poważną naukę programowania systemowego!',
            content: 'Dziś zrobiłem kolejny krok w pogłębianiu swojej wiedzy programistycznej - kupiłem dwie fantastyczne książki o języku C++. To inwestycja w moją przyszłość programistyczną!<br><br><div style="display: flex; gap: 2rem; margin: 2rem 0; justify-content: center; flex-wrap: wrap;"><img src="img/Blog-cpp/Jezyk-C-Szkola-programowania.jpeg" alt="Język C++ Szkoła programowania Stephen Prata" style="width: 200px; height: auto; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.15);"><img src="img/Blog-cpp/Opus-magnum-C-11-Programowanie-w-jezyku-C-KPL.jpeg" alt="Opus Magnum C++11 Programowanie w języku C" style="width: 200px; height: auto; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.15);"></div><br><strong>Co kupiłem?</strong><br><br><strong>1. "Język C++ Szkoła programowania" - Stephen Prata</strong><br>To klasyka wśród książek o C++! Stephen Prata ma świetny sposób tłumaczenia skomplikowanych konceptów programistycznych. Ta książka jest uznawana za jedną z najlepszych pozycji do nauki C++ od podstaw.<br><br><strong>2. "Opus Magnum C++11 Programowanie w języku C++"</strong><br>Druga książka to pozycja skupiająca się na nowoczesnym standardzie C++11. To świetne uzupełnienie, które pozwoli mi poznać najnowsze funkcjonalności języka.<br><br><strong>Dlaczego C++?</strong><br><br>C++ to język, który:<br>• Daje pełną kontrolę nad systemem<br>• Jest używany w programowaniu gier, systemów operacyjnych i aplikacji wymagających wysokiej wydajności<br>• Uczy dobrego myślenia o zarządzaniu pamięcią<br>• Stanowi doskonałą bazę do nauki innych języków programowania<br>• Jest wciąż bardzo aktualny w branży IT<br><br><strong>Moje plany nauki</strong><br><br>Planuję systematycznie przerabiać obie książki równolegle:<br>• Zaczną od podstaw z książką Praty<br>• Równocześnie będę poznawał nowoczesne funkcjonalności C++11<br>• Każdy rozdział będę uzupełniał praktycznymi ćwiczeniami<br>• Postaram się tworzyć małe projekty, żeby utrwalić wiedzę<br><br><strong>Dlaczego warto inwestować w książki?</strong><br><br>W czasach internetu i darmowych kursów, książki wciąż mają ogromną wartość:<br>• Strukturalne podejście do nauki<br>• Głębsze omówienie tematów<br>• Możliwość nauki bez rozpraszaczy<br>• Solidne podstawy teoretyczne<br>• Można wracać do trudnych fragmentów<br><br>C++ to język, który wymaga cierpliwości i systematycznej nauki. Te książki to moja inwestycja w przyszłość programistyczną. Będę dzielił się postępami w nauce na blogu!<br><br>Jeśli też uczysz się C++, polecam te pozycje. Stephen Prata to autor, który naprawdę umie tłumaczyć skomplikowane rzeczy w prosty sposób.',
            category: 'programming',
            date: '2025-09-11',
            readTime: 8,
            tags: ['C++', 'książki', 'nauka', 'programowanie', 'Stephen Prata', 'C++11']
        },
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
            content: 'Nauka IT przez kursy online to świetny sposób na zdobycie praktycznej wiedzy. Dzisiaj podzielę się moimi sprawdzonymi kursami, z których sam się uczyłem.<br><br><strong>Darmowe polskie źródła - Pasja Informatyki</strong><br><br><strong><a href="https://pasja-informatyki.pl/sieci-komputerowe/" target="_blank">Kurs Sieci Komputerowych</a></strong> - Damian Stelmacha<br>Kurs trochę już stary, ale idealnie tłumaczy podstawy sieci komputerowych. Damian w bardzo przystępny sposób wprowadza w świat networking. Dostępny również na YouTube: <a href="https://www.youtube.com/watch?v=WxH9YNAfAao&list=PLOYHgt8dIdoz2fyn0gv4fs2t4tayalsh3" target="_blank">playlist</a>.<br><br><strong><a href="https://miroslawzelent.pl/kurs-c++/" target="_blank">Kurs C++</a></strong> - Mirosław Zelent<br>Doskonały kurs programowania w C++ od podstaw. Mirosław ma świetny sposób tłumaczenia skomplikowanych zagadnień programistycznych. Kurs dostępny też na YouTube: <a href="https://www.youtube.com/watch?v=ErOzmh3BiXU&list=PLOYHgt8dIdoxx0Y5wzs7CFpmBzb40PaDo" target="_blank">playlist</a>.<br><br><strong>Polskie kursy - zrozumiały język, solidne podstawy</strong><br><br><strong><a href="https://zrozumsieci.pl/" target="_blank">Zrozum Sieci</a></strong> - Marcel Guzenda<br>Idealny kurs na początek przygody z sieciami. Marcel w przystępny sposób tłumaczy podstawy sieci komputerowych. Polskojęzyczny materiał sprawia, że nawet skomplikowane koncepty stają się zrozumiałe.<br><br><strong><a href="https://www.programujodpodstaw.pl/python-od-podstaw/" target="_blank">Python od podstaw</a></strong> - Kamil Brzeziński<br>Doskonały punkt startu dla osób chcących nauczyć się Pythona. Kamil prowadzi kurs w bardzo zrozumiały sposób, idealne wprowadzenie do programowania.<br><br><strong>Kursy Udemy - jakość zależy od podejścia</strong><br><br>Wiem, że Udemy bywa przez wielu krytykowane, ale prawda jest taka - jeśli przerobimy materiał krok po kroku, każdy dobry kurs przyniesie efekty. Oto moje sprawdzone polecenia:<br><br><strong>Linux - linia komend dla początkujących</strong> - Rafał Mobilo<br>Jak rozpocząć profesjonalną pracę w Linuxie. Rafał doskonale wprowadza w świat linii komend.<br><a href="https://www.udemy.com/course/linux101/" target="_blank">Link do kursu</a><br><br><strong>Powershell dla administratora - kompletny kurs</strong> - Rafał Mobilo<br>Zostań mistrzem linii komend Windows. Naucz się oskryptowywać powtarzalne zadania i ceniić swój czas jako administrator.<br><a href="https://www.udemy.com/course/powershell-dla-administratora-windows/" target="_blank">Link do kursu</a><br><br><strong>100 Days of Code: The Complete Python Pro Bootcamp</strong> - Dr. Angela Yu<br>Jeden z najpopularniejszych kursów Pythona na Udemy (ponad 1,1 mln studentów!). Dr. Angela Yu prowadzi przez 100 projektów w 100 dni. Kurs obejmuje automatyzację, tworzenie gier, aplikacji, stron internetowych, data science i machine learning.<br><br><strong>The Complete Networking Fundamentals Course</strong> - David Bombal<br>Doskonały start do certyfikacji CCNA. David Bombal to uznany ekspert w dziedzinie sieci, a kurs stanowi solidne wprowadzenie do podstaw networking.<br><a href="https://www.udemy.com/course/complete-networking-fundamentals-course-ccna-start/" target="_blank">Link do kursu</a><br><br><strong>CCNA 200-301 Video Boot Camp</strong> - Chris Bryant (CCIE #12933)<br>Ponad 100,000 studentów dołączyło do poprzednich kursów Chrisa na Udemy. Boot camp z ponad 30 godzinami materiału wideo, przygotowujący zarówno do egzaminu jak i do pracy w świecie rzeczywistym.<br><a href="https://www.udemy.com/course/ccna-200-301-video-boot-camp-with-chris-bryant/" target="_blank">Link do kursu</a><br><br><strong>Cisco CCNA 200-301 – The Complete Guide to Getting Certified</strong> - Neil Anderson (CCIE #23618)<br>Najwyżej oceniany kurs CCNA online z kompleksowymi filmami, ćwiczeniami laboratoryjnymi, notatkami i kartami Anki. Idealny do przygotowania się do certyfikacji.<br><br><strong>Moja rada</strong><br><br>Niezależnie od platformy - kluczem do sukcesu jest systematyczność i praktyka. Polskie kursy mają tę zaletę, że nie ma bariery językowej, natomiast kursy anglojęzyczne często oferują więcej zaawansowanych treści. Polecam zacząć od polskich źródeł dla podstaw, a potem rozwijać wiedzę na międzynarodowych platformach.',
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
            id: 11,
            title: 'Prometheus and Grafana in Cybersecurity Monitoring',
            excerpt: 'How to use Prometheus and Grafana to build an effective security monitoring system. Comprehensive solution for SOC and security teams.',
            content: 'In today\'s cybersecurity world, where attacks are becoming increasingly sophisticated, having an effective monitoring system is crucial. Prometheus and Grafana are powerful tools that can significantly strengthen our defensive capabilities.<br><br><strong>What are Prometheus and Grafana?</strong><br><br><strong>Prometheus</strong> is an open-source monitoring and alerting system originally created by SoundCloud. It specializes in collecting and storing metric data as time series.<br><br><strong>Grafana</strong> is a visualization and analytics platform that allows creating interactive dashboards and alerts based on various data sources.<br><br><strong>Why are they ideal for cybersecurity?</strong><br><br>• <strong>Real-time monitoring</strong> - Instant anomaly detection<br>• <strong>Scalable alerting</strong> - Automatic incident notifications<br>• <strong>Threat visualization</strong> - Graphical representation of security status<br>• <strong>Trend analysis</strong> - Attack pattern identification<br>• <strong>Integration</strong> - Easy connection with existing infrastructure<br><br><strong>Cybersecurity use cases</strong><br><br><strong>1. Network traffic monitoring</strong><br>• Detecting unusual traffic<br>• Bandwidth analysis<br>• DDoS attack identification<br>• Connection geolocation monitoring<br><br><strong>2. Security log monitoring</strong><br>• Firewall log analysis<br>• Login attempt monitoring<br>• Brute-force attack detection<br>• Critical system access tracking<br><br><strong>3. Infrastructure monitoring</strong><br>• Security system performance<br>• Antivirus and EDR status<br>• SSL/TLS certificate monitoring<br>• Security update control<br><br><strong>4. Compliance and audits</strong><br>• Compliance reporting (GDPR, ISO 27001)<br>• System change tracking<br>• Incident documentation<br>• SOC response time metrics<br><br><strong>Key security metrics to monitor</strong><br><br>• <strong>MTTR (Mean Time To Response)</strong> - Average incident response time<br>• <strong>MTTD (Mean Time To Detection)</strong> - Average threat detection time<br>• <strong>Number of attacks per day/hour</strong><br>• <strong>False positive/negative rates</strong><br>• <strong>Monitoring coverage</strong> - percentage of monitored assets<br>• <strong>Security tool performance</strong><br><br><strong>Example SOC dashboards</strong><br><br><strong>Security Overview Dashboard:</strong><br>• Real-time threat map<br>• Top 10 attacking IP addresses<br>• Attack trends (daily/weekly)<br>• Defense system status<br><br><strong>Network Security Dashboard:</strong><br>• Network traffic by ports and protocols<br>• Connection geo-map<br>• Detected malware and botnets<br>• DNS traffic anomalies<br><br><strong>Incident Response Dashboard:</strong><br>• Active incidents by priority<br>• Investigation duration<br>• SOC team metrics<br>• Timeline of key events<br><br><strong>Integration with security tools</strong><br><br>Prometheus and Grafana can collect data from:<br>• <strong>SIEM</strong> (Splunk, ElasticSearch, QRadar)<br>• <strong>EDR/XDR</strong> (CrowdStrike, SentinelOne)<br>• <strong>Firewall and IDS/IPS</strong><br>• <strong>Vulnerability Scanners</strong><br>• <strong>Threat Intelligence Platforms</strong><br><br><strong>Implementation best practices</strong><br><br><strong>1. Start with basic metrics</strong><br>• Don\'t try to monitor everything at once<br>• Focus on critical assets<br>• Gradually expand scope<br><br><strong>2. Set up intelligent alerts</strong><br>• Avoid alert fatigue<br>• Use dynamic thresholds<br>• Implement escalation policies<br><br><strong>3. Regularly review and adjust</strong><br>• Update dashboards as needed<br>• Analyze alert effectiveness<br>• Collect feedback from SOC analysts<br><br><strong>4. Secure the monitoring system itself</strong><br>• Use HTTPS and TLS<br>• Implement proper authentication<br>• Regularly update components<br>• Create configuration backups<br><br><strong>Summary</strong><br><br>Prometheus and Grafana are powerful tools that can significantly improve the effectiveness of cybersecurity teams. When properly implemented, they enable:<br><br>• Faster threat detection<br>• Better understanding of security landscape<br>• More efficient SOC analyst work<br>• Compliance and audit documentation<br><br>If you\'re not using these tools in your organization yet, it\'s worth considering their implementation. It\'s an investment that can significantly strengthen your cyber defenses.',
            category: 'security',
            date: '2025-09-11',
            readTime: 15,
            tags: ['prometheus', 'grafana', 'monitoring', 'SOC', 'cybersecurity', 'SIEM', 'alerting']
        },
        {
            id: 10,
            title: 'New C++ Books - Deepening My Language Knowledge',
            excerpt: 'Today I bought two new C++ books to deepen my knowledge of this language. Time for serious system programming learning!',
            content: 'Today I took another step in deepening my programming knowledge - I bought two fantastic books about C++. This is an investment in my programming future!<br><br><div style="display: flex; gap: 2rem; margin: 2rem 0; justify-content: center; flex-wrap: wrap;"><img src="img/Blog-cpp/Jezyk-C-Szkola-programowania.jpeg" alt="C++ Programming School Stephen Prata" style="width: 200px; height: auto; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.15);"><img src="img/Blog-cpp/Opus-magnum-C-11-Programowanie-w-jezyku-C-KPL.jpeg" alt="Opus Magnum C++11 Programming in C++ Language" style="width: 200px; height: auto; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.15);"></div><br><strong>What did I buy?</strong><br><br><strong>1. "C++ Programming School" - Stephen Prata</strong><br>This is a classic among C++ books! Stephen Prata has a great way of explaining complex programming concepts. This book is considered one of the best positions for learning C++ from scratch.<br><br><strong>2. "Opus Magnum C++11 Programming in C++ Language"</strong><br>The second book focuses on the modern C++11 standard. It\'s a great complement that will allow me to learn the latest language features.<br><br><strong>Why C++?</strong><br><br>C++ is a language that:<br>• Gives full system control<br>• Is used in game programming, operating systems and high-performance applications<br>• Teaches good thinking about memory management<br>• Provides an excellent foundation for learning other programming languages<br>• Is still very relevant in the IT industry<br><br><strong>My learning plans</strong><br><br>I plan to systematically work through both books in parallel:<br>• Start with basics from Prata\'s book<br>• Simultaneously learn modern C++11 features<br>• Supplement each chapter with practical exercises<br>• Try to create small projects to consolidate knowledge<br><br><strong>Why invest in books?</strong><br><br>In times of internet and free courses, books still have enormous value:<br>• Structural approach to learning<br>• Deeper coverage of topics<br>• Ability to learn without distractions<br>• Solid theoretical foundations<br>• You can return to difficult sections<br><br>C++ is a language that requires patience and systematic learning. These books are my investment in my programming future. I\'ll share my learning progress on the blog!<br><br>If you\'re also learning C++, I recommend these positions. Stephen Prata is an author who really knows how to explain complex things in a simple way.',
            category: 'programming',
            date: '2025-09-11',
            readTime: 8,
            tags: ['C++', 'books', 'learning', 'programming', 'Stephen Prata', 'C++11']
        },
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
            id: 11,
            title: 'Prometheus und Grafana im Cybersicherheits-Monitoring',
            excerpt: 'Wie man Prometheus und Grafana nutzt, um ein effektives Sicherheits-Monitoring-System aufzubauen. Umfassende Lösung für SOC und Sicherheitsteams.',
            content: 'In der heutigen Cybersicherheitswelt, in der Angriffe immer raffinierter werden, ist ein effektives Monitoring-System entscheidend. Prometheus und Grafana sind mächtige Tools, die unsere Abwehrfähigkeiten erheblich stärken können.<br><br><strong>Was sind Prometheus und Grafana?</strong><br><br><strong>Prometheus</strong> ist ein Open-Source-Monitoring- und Alerting-System, ursprünglich von SoundCloud entwickelt. Es spezialisiert sich auf das Sammeln und Speichern von Metrik-Daten als Zeitreihen.<br><br><strong>Grafana</strong> ist eine Visualisierungs- und Analyseplattform, die es ermöglicht, interaktive Dashboards und Alerts basierend auf verschiedenen Datenquellen zu erstellen.<br><br><strong>Warum sind sie ideal für Cybersicherheit?</strong><br><br>• <strong>Echtzeit-Monitoring</strong> - Sofortige Anomalieerkennung<br>• <strong>Skalierbare Alarmierung</strong> - Automatische Vorfallbenachrichtigungen<br>• <strong>Bedrohungsvisualisierung</strong> - Grafische Darstellung des Sicherheitsstatus<br>• <strong>Trendanalyse</strong> - Identifikation von Angriffsmustern<br>• <strong>Integration</strong> - Einfache Verbindung mit bestehender Infrastruktur<br><br><strong>Anwendungsfälle in der Cybersicherheit</strong><br><br><strong>1. Netzwerk-Traffic-Monitoring</strong><br>• Erkennung ungewöhnlichen Traffics<br>• Bandbreitenanalyse<br>• DDoS-Angriffserkennung<br>• Geolokalisierungs-Monitoring von Verbindungen<br><br><strong>2. Sicherheitslog-Monitoring</strong><br>• Firewall-Log-Analyse<br>• Login-Versuch-Monitoring<br>• Brute-Force-Angriffserkennung<br>• Verfolgung von Zugriffen auf kritische Systeme<br><br><strong>3. Infrastruktur-Monitoring</strong><br>• Leistung von Sicherheitssystemen<br>• Antivirus- und EDR-Status<br>• SSL/TLS-Zertifikat-Monitoring<br>• Sicherheitsupdate-Kontrolle<br><br><strong>4. Compliance und Audits</strong><br>• Compliance-Berichterstattung (GDPR, ISO 27001)<br>• Systemänderungs-Tracking<br>• Vorfallsdokumentation<br>• SOC-Antwortzeit-Metriken<br><br><strong>Wichtige Sicherheitsmetriken zum Monitoring</strong><br><br>• <strong>MTTR (Mean Time To Response)</strong> - Durchschnittliche Vorfallsantwortzeit<br>• <strong>MTTD (Mean Time To Detection)</strong> - Durchschnittliche Bedrohungserkennungszeit<br>• <strong>Anzahl Angriffe pro Tag/Stunde</strong><br>• <strong>False-Positive/Negative-Raten</strong><br>• <strong>Monitoring-Abdeckung</strong> - Prozent der überwachten Assets<br>• <strong>Sicherheitstool-Performance</strong><br><br><strong>Beispiel-SOC-Dashboards</strong><br><br><strong>Security Overview Dashboard:</strong><br>• Echtzeit-Bedrohungskarte<br>• Top 10 angreifende IP-Adressen<br>• Angriffstrends (täglich/wöchentlich)<br>• Status der Abwehrsysteme<br><br><strong>Network Security Dashboard:</strong><br>• Netzwerk-Traffic nach Ports und Protokollen<br>• Verbindungs-Geo-Karte<br>• Erkannte Malware und Botnets<br>• DNS-Traffic-Anomalien<br><br><strong>Incident Response Dashboard:</strong><br>• Aktive Vorfälle nach Priorität<br>• Untersuchungsdauer<br>• SOC-Team-Metriken<br>• Timeline wichtiger Ereignisse<br><br><strong>Zusammenfassung</strong><br><br>Prometheus und Grafana sind mächtige Tools, die die Effektivität von Cybersicherheitsteams erheblich verbessern können. Richtig implementiert, ermöglichen sie:<br><br>• Schnellere Bedrohungserkennung<br>• Besseres Verständnis der Sicherheitslandschaft<br>• Effizientere SOC-Analyst-Arbeit<br>• Compliance- und Audit-Dokumentation<br><br>Wenn Sie diese Tools in Ihrer Organisation noch nicht verwenden, ist es eine Überlegung wert, sie zu implementieren. Es ist eine Investition, die Ihre Cyberabwehr erheblich stärken kann.',
            category: 'security',
            date: '2025-09-11',
            readTime: 15,
            tags: ['prometheus', 'grafana', 'monitoring', 'SOC', 'cybersicherheit', 'SIEM', 'alarmierung']
        },
        {
            id: 10,
            title: 'Neue C++ Bücher - Vertiefung meiner Sprachkenntnisse',
            excerpt: 'Heute habe ich zwei neue C++ Bücher gekauft, um mein Wissen über diese Sprache zu vertiefen. Zeit für ernsthaftes Systemprogrammierung lernen!',
            content: 'Heute habe ich einen weiteren Schritt zur Vertiefung meines Programmierwissens gemacht - ich habe zwei fantastische Bücher über C++ gekauft. Das ist eine Investition in meine Programmierzukunft!<br><br><div style="display: flex; gap: 2rem; margin: 2rem 0; justify-content: center; flex-wrap: wrap;"><img src="img/Blog-cpp/Jezyk-C-Szkola-programowania.jpeg" alt="C++ Programmierschule Stephen Prata" style="width: 200px; height: auto; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.15);"><img src="img/Blog-cpp/Opus-magnum-C-11-Programowanie-w-jezyku-C-KPL.jpeg" alt="Opus Magnum C++11 Programmierung in C++ Sprache" style="width: 200px; height: auto; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.15);"></div><br><strong>Was habe ich gekauft?</strong><br><br><strong>1. "C++ Programmierschule" - Stephen Prata</strong><br>Das ist ein Klassiker unter den C++ Büchern! Stephen Prata hat eine großartige Art, komplexe Programmierkonzepte zu erklären. Dieses Buch gilt als eine der besten Positionen zum Erlernen von C++ von Grund auf.<br><br><strong>2. "Opus Magnum C++11 Programmierung in C++ Sprache"</strong><br>Das zweite Buch konzentriert sich auf den modernen C++11 Standard. Es ist eine großartige Ergänzung, die es mir ermöglicht, die neuesten Sprachfeatures zu lernen.<br><br><strong>Warum C++?</strong><br><br>C++ ist eine Sprache, die:<br>• Vollständige Systemkontrolle bietet<br>• In der Spieleprogrammierung, Betriebssystemen und Hochleistungsanwendungen verwendet wird<br>• Gutes Denken über Speicherverwaltung lehrt<br>• Eine ausgezeichnete Grundlage für das Erlernen anderer Programmiersprachen bietet<br>• Immer noch sehr relevant in der IT-Branche ist<br><br><strong>Meine Lernpläne</strong><br><br>Ich plane, beide Bücher systematisch parallel zu bearbeiten:<br>• Beginnen mit Grundlagen aus Pratas Buch<br>• Gleichzeitig moderne C++11 Features lernen<br>• Jedes Kapitel mit praktischen Übungen ergänzen<br>• Versuchen, kleine Projekte zu erstellen, um Wissen zu festigen<br><br><strong>Warum in Bücher investieren?</strong><br><br>In Zeiten von Internet und kostenlosen Kursen haben Bücher immer noch enormen Wert:<br>• Struktureller Ansatz zum Lernen<br>• Tiefere Abdeckung von Themen<br>• Möglichkeit zu lernen ohne Ablenkungen<br>• Solide theoretische Grundlagen<br>• Man kann zu schwierigen Abschnitten zurückkehren<br><br>C++ ist eine Sprache, die Geduld und systematisches Lernen erfordert. Diese Bücher sind meine Investition in meine Programmierzukunft. Ich werde meine Lernfortschritte im Blog teilen!<br><br>Wenn Sie auch C++ lernen, empfehle ich diese Positionen. Stephen Prata ist ein Autor, der wirklich weiß, wie man komplexe Dinge einfach erklärt.',
            category: 'programming',
            date: '2025-09-11',
            readTime: 8,
            tags: ['C++', 'bücher', 'lernen', 'programmierung', 'Stephen Prata', 'C++11']
        },
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
            id: 11,
            title: 'Prometheus y Grafana en Monitoreo de Ciberseguridad',
            excerpt: 'Cómo usar Prometheus y Grafana para construir un sistema efectivo de monitoreo de seguridad. Solución integral para SOC y equipos de seguridad.',
            content: 'En el mundo actual de la ciberseguridad, donde los ataques se vuelven cada vez más sofisticados, tener un sistema de monitoreo efectivo es crucial. Prometheus y Grafana son herramientas poderosas que pueden fortalecer significativamente nuestras capacidades defensivas.<br><br><strong>¿Qué son Prometheus y Grafana?</strong><br><br><strong>Prometheus</strong> es un sistema de monitoreo y alertas de código abierto originalmente creado por SoundCloud. Se especializa en recopilar y almacenar datos métricos como series de tiempo.<br><br><strong>Grafana</strong> es una plataforma de visualización y análisis que permite crear dashboards interactivos y alertas basadas en varias fuentes de datos.<br><br><strong>¿Por qué son ideales para ciberseguridad?</strong><br><br>• <strong>Monitoreo en tiempo real</strong> - Detección instantánea de anomalías<br>• <strong>Alertas escalables</strong> - Notificaciones automáticas de incidentes<br>• <strong>Visualización de amenazas</strong> - Representación gráfica del estado de seguridad<br>• <strong>Análisis de tendencias</strong> - Identificación de patrones de ataques<br>• <strong>Integración</strong> - Fácil conexión con infraestructura existente<br><br><strong>Casos de uso en ciberseguridad</strong><br><br><strong>1. Monitoreo de tráfico de red</strong><br>• Detección de tráfico inusual<br>• Análisis de ancho de banda<br>• Identificación de ataques DDoS<br>• Monitoreo de geolocalización de conexiones<br><br><strong>2. Monitoreo de logs de seguridad</strong><br>• Análisis de logs de firewall<br>• Monitoreo de intentos de login<br>• Detección de ataques de fuerza bruta<br>• Seguimiento de accesos a sistemas críticos<br><br><strong>3. Monitoreo de infraestructura</strong><br>• Rendimiento de sistemas de seguridad<br>• Estado de antivirus y EDR<br>• Monitoreo de certificados SSL/TLS<br>• Control de actualizaciones de seguridad<br><br><strong>4. Compliance y auditorías</strong><br>• Reportes de cumplimiento (GDPR, ISO 27001)<br>• Seguimiento de cambios en sistemas<br>• Documentación de incidentes<br>• Métricas de tiempo de respuesta SOC<br><br><strong>Métricas clave de seguridad para monitorear</strong><br><br>• <strong>MTTR (Mean Time To Response)</strong> - Tiempo promedio de respuesta a incidentes<br>• <strong>MTTD (Mean Time To Detection)</strong> - Tiempo promedio de detección de amenazas<br>• <strong>Número de ataques por día/hora</strong><br>• <strong>Tasas de falsos positivos/negativos</strong><br>• <strong>Cobertura de monitoreo</strong> - porcentaje de activos monitoreados<br>• <strong>Rendimiento de herramientas de seguridad</strong><br><br><strong>Dashboards de ejemplo para SOC</strong><br><br><strong>Security Overview Dashboard:</strong><br>• Mapa de amenazas en tiempo real<br>• Top 10 direcciones IP atacantes<br>• Tendencias de ataques (diarias/semanales)<br>• Estado de sistemas de defensa<br><br><strong>Network Security Dashboard:</strong><br>• Tráfico de red por puertos y protocolos<br>• Geo-mapa de conexiones<br>• Malware y botnets detectados<br>• Anomalías en tráfico DNS<br><br><strong>Incident Response Dashboard:</strong><br>• Incidentes activos por prioridad<br>• Duración de investigaciones<br>• Métricas del equipo SOC<br>• Línea de tiempo de eventos clave<br><br><strong>Resumen</strong><br><br>Prometheus y Grafana son herramientas poderosas que pueden mejorar significativamente la efectividad de los equipos de ciberseguridad. Correctamente implementadas, permiten:<br><br>• Detección más rápida de amenazas<br>• Mejor comprensión del panorama de seguridad<br>• Trabajo más eficiente de analistas SOC<br>• Documentación de compliance y auditorías<br><br>Si aún no estás usando estas herramientas en tu organización, vale la pena considerar su implementación. Es una inversión que puede fortalecer significativamente tus defensas cibernéticas.',
            category: 'security',
            date: '2025-09-11',
            readTime: 15,
            tags: ['prometheus', 'grafana', 'monitoreo', 'SOC', 'ciberseguridad', 'SIEM', 'alertas']
        },
        {
            id: 10,
            title: 'Nuevos Libros de C++ - Profundizando Mi Conocimiento del Lenguaje',
            excerpt: 'Hoy compré dos nuevos libros de C++ para profundizar mi conocimiento de este lenguaje. ¡Hora de aprender programación de sistemas en serio!',
            content: 'Hoy di otro paso para profundizar mi conocimiento de programación - compré dos libros fantásticos sobre C++. ¡Esta es una inversión en mi futuro de programación!<br><br><div style="display: flex; gap: 2rem; margin: 2rem 0; justify-content: center; flex-wrap: wrap;"><img src="img/Blog-cpp/Jezyk-C-Szkola-programowania.jpeg" alt="Escuela de Programación C++ Stephen Prata" style="width: 200px; height: auto; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.15);"><img src="img/Blog-cpp/Opus-magnum-C-11-Programowanie-w-jezyku-C-KPL.jpeg" alt="Opus Magnum C++11 Programación en Lenguaje C++" style="width: 200px; height: auto; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.15);"></div><br><strong>¿Qué compré?</strong><br><br><strong>1. "Escuela de Programación C++" - Stephen Prata</strong><br>¡Este es un clásico entre los libros de C++! Stephen Prata tiene una gran manera de explicar conceptos complejos de programación. Este libro es considerado una de las mejores posiciones para aprender C++ desde cero.<br><br><strong>2. "Opus Magnum C++11 Programación en Lenguaje C++"</strong><br>El segundo libro se enfoca en el estándar moderno C++11. Es un gran complemento que me permitirá aprender las características más recientes del lenguaje.<br><br><strong>¿Por qué C++?</strong><br><br>C++ es un lenguaje que:<br>• Da control completo del sistema<br>• Se usa en programación de juegos, sistemas operativos y aplicaciones de alto rendimiento<br>• Enseña buen pensamiento sobre gestión de memoria<br>• Proporciona una excelente base para aprender otros lenguajes de programación<br>• Sigue siendo muy relevante en la industria IT<br><br><strong>Mis planes de aprendizaje</strong><br><br>Planeo trabajar sistemáticamente a través de ambos libros en paralelo:<br>• Empezar con básicos del libro de Prata<br>• Simultáneamente aprender características modernas de C++11<br>• Complementar cada capítulo con ejercicios prácticos<br>• Tratar de crear pequeños proyectos para consolidar conocimiento<br><br><strong>¿Por qué invertir en libros?</strong><br><br>En tiempos de internet y cursos gratuitos, los libros aún tienen un valor enorme:<br>• Enfoque estructural al aprendizaje<br>• Cobertura más profunda de temas<br>• Capacidad de aprender sin distracciones<br>• Fundamentos teóricos sólidos<br>• Puedes volver a secciones difíciles<br><br>C++ es un lenguaje que requiere paciencia y aprendizaje sistemático. Estos libros son mi inversión en mi futuro de programación. ¡Compartiré mi progreso de aprendizaje en el blog!<br><br>Si también estás aprendiendo C++, recomiendo estas posiciones. Stephen Prata es un autor que realmente sabe cómo explicar cosas complejas de manera simple.',
            category: 'programming',
            date: '2025-09-11',
            readTime: 8,
            tags: ['C++', 'libros', 'aprendizaje', 'programación', 'Stephen Prata', 'C++11']
        },
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