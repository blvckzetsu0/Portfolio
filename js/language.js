// All translations for the website
const translations = {
  en: {
    // Navigation
    home: 'Home',
    about: 'About me',
    skills: 'Skills',

    // Home section
    hello: "Hello, I'm",
    name: 'Azmi Zakaryae',
    title: 'Future Software Engineer',

    // About section
    aboutTitle: 'About Me',
    aboutSubtitle: 'Future Software Engineer',
    aboutText:
      "Hello! I'm Azmi Zakaryae, a software engineering student with a broad interest in technology and software development. I enjoy exploring different areas of programming, from web development and design to problem-solving and system fundamentals. I'm constantly learning, experimenting, and improving my skills to grow as a versatile engineer.",

    // Skills section
    skillsTitle: 'My Skills',
    codingTitle: 'Coding Languages',
    codingText: 'HTML, CSS, JavaScript, C++, Java, Python',
    dataTitle: 'Data Manipulation',
    dataText: 'MySQL, Excel',
    toolsTitle: 'Environment & Tools',
    toolsText: 'Linux, JetBrains, VS Code, Git',

    // Footer
    footer: 'All Rights Reserved © 2026 Azmi Zakaryae',
  },

  fr: {
    // Navigation
    home: 'Accueil',
    about: 'À propos',
    skills: 'Compétences',

    // Home section
    hello: 'Bonjour, je suis',
    name: 'Azmi Zakaryae',
    title: 'Futur Ingénieur Logiciel',

    // About section
    aboutTitle: 'À Propos de Moi',
    aboutSubtitle: 'Futur Ingénieur Logiciel',
    aboutText:
      "Bonjour! Je suis Azmi Zakaryae, un étudiant en génie logiciel avec un large intérêt pour la technologie et le développement de logiciels. J'aime explorer différents domaines de la programmation, du développement web et du design à la résolution de problèmes et aux fondamentaux des systèmes. J'apprends constamment, j'expérimente et j'améliore mes compétences pour devenir un ingénieur polyvalent.",

    // Skills section
    skillsTitle: 'Mes Compétences',
    codingTitle: 'Langages de Programmation',
    codingText: 'HTML, CSS, JavaScript, C++, Java, Python',
    dataTitle: 'Manipulation de Données',
    dataText: 'MySQL, Excel',
    toolsTitle: 'Environnement & Outils',
    toolsText: 'Linux, JetBrains, VS Code, Git',

    // Footer
    footer: 'Tous droits réservés © 2026 Azmi Zakaryae',
  },

  ar: {
    // Navigation
    home: 'الرئيسية',
    about: 'نبذة عني',
    skills: 'المهارات',

    // Home section
    hello: 'مرحباً، أنا',
    name: 'عزمي زكرياء',
    title: 'مهندس برمجيات مستقبلاً',

    // About section
    aboutTitle: 'نبذة عني',
    aboutSubtitle: 'مهندس برمجيات مستقبلا',
    aboutText:
      'مرحباً! أنا عزمي زكرياء، طالب هندسة برمجيات لدي اهتمام واسع بالتكنولوجيا وتطوير البرمجيات. أستمتع باستكشاف مجالات مختلفة من البرمجة، من تطوير الويب والتصميم إلى حل المشكلات وأساسيات الأنظمة. أتعلم باستمرار وأجرب وأحسن مهاراتي لأنمو كمهندس متعدد المهارات.',

    // Skills section
    skillsTitle: 'مهاراتي',
    codingTitle: 'لغات البرمجة',
    codingText: 'HTML, CSS, JavaScript, C++, Java, Python',
    dataTitle: 'معالجة البيانات',
    dataText: 'MySQL, Excel',
    toolsTitle: 'البيئة والأدوات',
    toolsText: 'Linux, JetBrains, VS Code, Git',

    // Footer
    footer: 'جميع الحقوق محفوظة © 2026 عزمي زكرياء',
  },
};

// Current language (default is English)
let currentLanguage = 'en';

// Function to change the language
function changeLanguage(lang) {
  currentLanguage = lang;

  // Update the button text
  document.querySelector('.btn').textContent = lang.toUpperCase();

  // Update all text on the page
  updatePageText();

  // Save language preference
  localStorage.setItem('preferredLanguage', lang);

  // Update direction for Arabic
  if (lang === 'ar') {
    document.body.setAttribute('dir', 'rtl');
  } else {
    document.body.setAttribute('dir', 'ltr');
  }
}

// Function to update all text on the page
function updatePageText() {
  const t = translations[currentLanguage];

  // Navigation
  document.querySelector('nav ul li a[href="#home"]').textContent = t.home;
  document.querySelector('nav ul li a[href="#about"]').textContent = t.about;
  document.querySelector('nav ul li a[href="#skills"]').textContent = t.skills;

  // Home section
  document.querySelector('.home .container-text h4').textContent = t.hello;
  document.querySelector('.home .container-text h3').innerHTML =
    t.title.replace('Software', '<span>Software</span>');

  // About section
  document.querySelector('.about .container-text h1').innerHTML = t.aboutTitle
    .replace('Me', '<span>Me</span>')
    .replace('Moi', '<span>Moi</span>')
    .replace('عني', '<span>عني</span>');
  document.querySelector('.about .container-text h5').innerHTML =
    t.aboutSubtitle
      .replace('Software', '<span>Software</span>')
      .replace('Logiciel', '<span>Logiciel</span>')
      .replace('برمجيات', '<span>برمجيات</span>');
  document.querySelector('.about .container-text p').textContent = t.aboutText;

  // Skills section
  document.querySelector('.skills .container-text h1').innerHTML = t.skillsTitle
    .replace('Skills', '<span>Skills</span>')
    .replace('Compétences', '<span>Compétences</span>')
    .replace('مهاراتي', '<span>مهاراتي</span>');

  const cards = document.querySelectorAll('.card');
  cards[0].querySelector('h5').textContent = t.codingTitle;
  cards[0].querySelector('p').textContent = t.codingText;
  cards[1].querySelector('h5').textContent = t.dataTitle;
  cards[1].querySelector('p').textContent = t.dataText;
  cards[2].querySelector('h5').textContent = t.toolsTitle;
  cards[2].querySelector('p').textContent = t.toolsText;

  // Footer
  document.querySelector('footer p').textContent = t.footer;
}

// Show/hide language menu
function toggleLanguageMenu() {
  let menu = document.querySelector('.language-menu');

  if (!menu) {
    // Create menu if it doesn't exist
    menu = document.createElement('div');
    menu.className = 'language-menu';
    menu.innerHTML = `
      <button onclick="selectLanguage('en')">English</button>
      <button onclick="selectLanguage('fr')">Français</button>
      <button onclick="selectLanguage('ar')">العربية</button>
    `;
    document.querySelector('.btn').parentElement.appendChild(menu);
  }

  // Toggle visibility
  menu.classList.toggle('show');
}

// Select language and close menu
function selectLanguage(lang) {
  changeLanguage(lang);
  toggleLanguageMenu();
}

// Load saved language when page loads
window.addEventListener('DOMContentLoaded', function () {
  const savedLanguage = localStorage.getItem('preferredLanguage');
  if (savedLanguage) {
    changeLanguage(savedLanguage);
  }

  // Close language menu when clicking outside
  document.addEventListener('click', function (event) {
    const menu = document.querySelector('.language-menu');
    const btn = document.querySelector('.btn');

    if (menu && menu.classList.contains('show')) {
      // Check if click is outside both button and menu
      if (!btn.contains(event.target) && !menu.contains(event.target)) {
        menu.classList.remove('show');
      }
    }
  });
});
