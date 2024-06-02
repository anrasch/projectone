// scripts.js

document.addEventListener("DOMContentLoaded", function() {
    const languageSwitcher = document.getElementById('language-switcher');
    const flagDe = document.getElementById('flag-de');
    const flagEn = document.getElementById('flag-en');
    const translations = {
        de: {
            title: "Meine Kurzgeschichten",
            home: "Startseite",
            about: "Über mich",
            stories: "Kurzgeschichten",
            contact: "Kontakt",
            heroTitle: "Entdecken Sie faszinierende Kurzgeschichten",
            heroDescription: "Lesen Sie meine neuesten Werke und tauchen Sie in spannende Welten ein.",
            heroButton: "Jetzt entdecken",
            storiesTitle: "Kurzgeschichten",
            story1Title: "Titel der Kurzgeschichte",
            story1Description: "Kurze Beschreibung der Kurzgeschichte. Spannung, Abenteuer und mehr erwarten Sie.",
            buyNow: "Jetzt kaufen"
        },
        en: {
            title: "My Short Stories",
            home: "Home",
            about: "About Me",
            stories: "Short Stories",
            contact: "Contact",
            heroTitle: "Discover Fascinating Short Stories",
            heroDescription: "Read my latest works and dive into exciting worlds.",
            heroButton: "Discover Now",
            storiesTitle: "Short Stories",
            story1Title: "Title of the Short Story",
            story1Description: "Short description of the story. Thrills, adventures, and more await you.",
            buyNow: "Buy Now"
        }
    };

    function switchLanguage(lang) {
        document.querySelectorAll('[data-key]').forEach(element => {
            const key = element.getAttribute('data-key');
            element.textContent = translations[lang][key];
        });

        if (lang === 'de') {
            flagDe.style.display = 'none';
            flagEn.style.display = 'inline';
        } else {
            flagDe.style.display = 'inline';
            flagEn.style.display = 'none';
        }
    }

    flagDe.addEventListener('click', () => {
        switchLanguage('de');
    });

    flagEn.addEventListener('click', () => {
        switchLanguage('en');
    });

    // Set initial language
    switchLanguage('de');

    // Hamburger-Menü
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navItems = navMenu.querySelectorAll('li');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navMenu.classList.remove('show');
        });
    });
});
