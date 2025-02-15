document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.sidebar ul li a');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3
    };

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            const navLink = document.querySelector(`.sidebar ul li a[href="#${entry.target.id}"]`);
            if (entry.isIntersecting) {
                navLink.classList.add('active');
            } else {
                navLink.classList.remove('active');
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
});

// Ajoutez ceci à votre fichier script.js
document.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.section');
    const titles = document.querySelectorAll('.titre');
    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            titles[index].classList.add('visible');
        } else {
            titles[index].classList.remove('visible');
        }
    });
});


const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Vérifier le thème stocké au chargement
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    body.classList.add('dark-theme');
} else {
    body.classList.add('light-theme');
}

// Gestion du clic
themeToggle.addEventListener('click', () => {
    if (body.classList.contains('dark-theme')) {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        localStorage.setItem('theme', 'light');
    } else {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark');
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const atoutsElements = document.querySelectorAll('.atouts');
    const section = document.getElementById('home');
    const sectionRect = section.getBoundingClientRect();

    atoutsElements.forEach(element => {
        const maxX = sectionRect.width - element.offsetWidth;
        const maxY = sectionRect.height - element.offsetHeight;

        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        element.style.left = `${randomX}px`;
        element.style.top = `${randomY}px`;
    });
});

document.addEventListener('DOMContentLoaded', () => {
    typeWriter('Badirou Mohamed Yecir', 'typing-target', 100);
});

function typeWriter(text, elementId, speed = 100) {
    const element = document.getElementById(elementId);
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else {
            // Anime les autres éléments après fin d'écriture
            document.querySelectorAll('.text-container h4, .text-container h6')
                   .forEach(el => el.style.opacity = 1);
        }
    }
    type();
}

// Gestion des compétences
document.querySelectorAll('.menu-item').forEach(button => {
    button.addEventListener('click', function() {
        // Retire l'état actif de tous les éléments
        document.querySelectorAll('.menu-item, .content-category').forEach(el => {
            el.classList.remove('active');
        });

        // Ajoute l'état actif aux éléments cliqués
        this.classList.add('active');
        const targetId = this.dataset.target;
        document.getElementById(targetId).classList.add('active');
    });
});

const swiper = new Swiper('.swiper', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});