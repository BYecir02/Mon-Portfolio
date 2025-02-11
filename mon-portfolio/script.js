let activeSection = 0;
const sections = document.querySelectorAll('.section-title');
const contents = document.querySelectorAll('.tab-content');
const timelineProgress = document.querySelector('.timeline-progress');

function changeSection(index) {
    // Mise à jour des sections
    sections.forEach((section, i) => {
        section.classList.toggle('active', i === index);
    });
    
    // Animation des contenus
    contents.forEach((content, i) => {
        content.style.display = i === index ? 'block' : 'none';
    });

    // Animation de la timeline
    const progressHeight = (index / (sections.length - 1)) * 100;
    timelineProgress.style.height = progressHeight + '%';

    activeSection = index;
}