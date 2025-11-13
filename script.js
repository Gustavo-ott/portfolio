// --- 1. Forçar Scroll para o Topo ao Recarregar ---
if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
} else {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
}

// --- 2. Animação de Scroll (Scroll Reveal) ---
document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        threshold: 0.1
    };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach(el => observer.observe(el));
});

// --- 3. Dicionário de Traduções ---
const translations = {
    pt: {
        // Nav & Hero
        nav_about: "Sobre mim",
        nav_projects: "Meus projetos",
        nav_contact: "Entre em contato",
        hero_intro: "Olá, seja bem-vindo! Eu sou",
        hero_title: "Designer de Produtos <br class='hidden lg:block' /> há mais de 5 anos",
        hero_desc: "Transformo necessidades em experiências digitais funcionais e relevantes, unindo design, tecnologia e foco no usuário!",
        
        // Sobre
        about_title: "Como Posso Ajudar",
        about_text_1: "Venho trilhando minha jornada na área tecnológica, atuando no desenvolvimento e na criação de produtos digitais centrados na experiência do usuário.",
        about_text_2: "Sou formado em Engenharia de Software pela Universidade Estadual de Ponta Grossa (UEPG) e me envolvo ativamente no planejamento, gestão e execução de produtos digitais.",
        
        // Projetos
        projects_title: "Meus Projetos",
        status_building: "🚧 Em construção!",
        
        // Projeto 1 (Trizy Cargas)
        proj1_title: "Facilitando o transporte de demanda de cargas",
        proj1_desc: "Reduzi a quantidade de etapas enfrentadas pelo embarcador para criação e transporte de cargas.",
        
        // Projeto 2 (Trizy Classificador)
        proj2_title: "Otimização para classificadores de carga",
        proj2_desc: "Compreendi um processo realizado de forma manual e sem acompanhamento e construí uma solução facilitadora.",
        
        // Projeto 3 (Barbearia/Odin)
        proj3_title: "Gerenciamento e agendamento de agendas",
        proj3_desc: "Automatização de agendamentos e gestão financeira para otimizar a rotina operacional de barbearias.",
        
        // Projeto 4 (Fluxo de Compra - Slide 2)
        proj4_title: "Fluxo de compra e cadastro de clientes",
        proj4_desc: "Reelaboração do processo de compra e venda de produtos de catálogo de vendas de uma empresa de varejo.",
        
        // Projeto 5 (Crédito - Slide 2)
        proj5_title: "Plataforma de gestão de crédito e financiamento pessoal",
        proj5_desc: "Otimização da contratação de empréstimos e análise de crédito com foco na transparência para o usuário.",

        // Contato & Footer
        contact_title: "Vamos transformar grandes ideias em resultados concretos?",
        contact_subtitle: "Valorizo imensamente a conexão profissional e a busca criativa por respostas.",
        contact_msg: "Sinta-se à vontade para entrar em contato; terei satisfação em receber sua mensagem para explorarmos novas demandas.",
        footer_rights: "© 2025 Gustavo Ott. Todos os direitos reservados."    
    },
    en: {
        // Nav & Hero
        nav_about: "About me",
        nav_projects: "My projects",
        nav_contact: "Get in touch",
        hero_intro: "Hello, welcome! I am",
        hero_title: "Product Designer <br class='hidden lg:block' /> for over 5 years",
        hero_desc: "I transform needs into functional and relevant digital experiences, uniting design, technology, and user focus!",
        
        // About
        about_title: "How Can I Help",
        about_text_1: "I have been forging my path in the tech area, acting in the development and creation of digital products centered on user experience.",
        about_text_2: "I hold a degree in Software Engineering from UEPG and am actively involved in the planning, management, and execution of digital products.",
        
        // Projects
        projects_title: "My Projects",
        status_building: "🚧 Under construction!",
        
        // Project 1
        proj1_title: "Facilitating cargo demand transport",
        proj1_desc: "Reduced the number of steps faced by the shipper for creating and transporting cargo.",
        
        // Project 2
        proj2_title: "Optimized process for cargo classifiers",
        proj2_desc: "Understood a manual process without tracking and built a facilitating solution.",
        
        // Project 3
        proj3_title: "Schedule management and booking",
        proj3_desc: "Scheduling automation and financial management to optimize barbershop operational routines.",
        
        // Project 4
        proj4_title: "Purchase flow and customer registration",
        proj4_desc: "Redesign of the buying and selling process for sales catalog products of a retail company.",
        
        // Project 5
        proj5_title: "Personal credit and financing management platform",
        proj5_desc: "Optimization of loan applications and credit analysis focusing on user transparency.",

        // Contact & Footer
        contact_title: "Let's transform big ideas into concrete results?",
        contact_subtitle: "I immensely value professional connection and the creative search for answers.",
        contact_msg: "Feel free to get in touch; I will be pleased to receive your message to explore new demands.",
        footer_rights: "© 2025 Gustavo Ott. All rights reserved."    
    },
    es: {
        // Nav & Hero
        nav_about: "Sobre mí",
        nav_projects: "Mis proyectos",
        nav_contact: "Ponte en contacto",
        hero_intro: "¡Hola, bienvenido! Soy",
        hero_title: "Diseñador de Productos <br class='hidden lg:block' /> por más de 5 años",
        hero_desc: "¡Transformo necesidades en experiencias digitales funcionales y relevantes, uniendo diseño, tecnología y enfoque en el usuario!",
        
        // About
        about_title: "Cómo Puedo Ayudar",
        about_text_1: "He estado recorriendo mi camino en el área tecnológica, actuando en el desarrollo y creación de productos digitales centrados en la experiencia del usuario.",
        about_text_2: "Soy graduado en Ingeniería de Software por la UEPG y me involucro activamente en la planificación, gestión y ejecución de productos digitales.",
        
        // Projects
        projects_title: "Mis Proyectos",
        status_building: "🚧 ¡En construcción!",
        
        // Project 1
        proj1_title: "Facilitando el transporte de demanda de cargas",
        proj1_desc: "Reduje la cantidad de etapas enfrentadas por el embarcador para la creación y transporte de cargas.",
        
        // Project 2
        proj2_title: "Proceso optimizado para clasificadores de carga",
        proj2_desc: "Comprendí un proceso realizado de forma manual y sin seguimiento y construí una solución facilitadora.",
        
        // Project 3
        proj3_title: "Gestión y reserva de agendas",
        proj3_desc: "Automatización de reservas y gestión financiera para optimizar la rutina operativa de barberías.",
        
        // Project 4
        proj4_title: "Flujo de compra y registro de clientes",
        proj4_desc: "Reelaboración del proceso de compra y venta de productos de catálogo de ventas de una empresa minorista.",
        
        // Project 5
        proj5_title: "Plataforma de gestión de crédito y financiación personal",
        proj5_desc: "Optimización de la solicitud de préstamos y análisis de crédito enfocada en la transparencia.",

        // Contact & Footer
        contact_title: "¿Transformamos grandes ideas en resultados concretos?",
        contact_subtitle: "Valoro inmensamente la conexión profesional y la búsqueda creativa de respuestas.",
        contact_msg: "Siéntase libre de ponerse en contacto; tendré satisfacción en recibir su mensaje para explorar nuevas demandas.",
        footer_rights: "© 2025 Gustavo Ott. Todos los derechos reservados."    
    }
};

// --- 4. Lógica de Troca de Idioma (Fade) ---
const langBtn = document.getElementById('lang-btn');
const langDropdown = document.getElementById('lang-dropdown');
const currentLangSpan = document.getElementById('current-lang');

if (langBtn && langDropdown) {
    langBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        langDropdown.classList.toggle('hidden');
    });
    document.addEventListener('click', () => {
        if (!langDropdown.classList.contains('hidden')) {
            langDropdown.classList.add('hidden');
        }
    });
}

function changeLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        element.classList.add('opacity-0'); // Fade out
    });

    setTimeout(() => {
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                element.innerHTML = translations[lang][key];
            }
            element.classList.remove('opacity-0'); // Fade in
        });

        if (currentLangSpan) {
            currentLangSpan.textContent = lang.toUpperCase();
        }
    }, 300);

    if (langDropdown) {
        langDropdown.classList.add('hidden');
    }
}

// --- 5. Lógica de ScrollSpy (Menu Ativo) ---
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

function highlightLink() {
    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= (sectionTop - 300)) {
            current = section.getAttribute('id');
        }
    });
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
        current = "contato";
    }
    if (window.scrollY < 300 || current === "home") {
        current = "sobre";
    }
    navLinks.forEach((link) => {
        link.classList.remove('text-brand-purple', 'font-bold');
        link.classList.add('text-brand-gray', 'font-medium');
        if (link.getAttribute('href').includes(current)) {
            link.classList.remove('text-brand-gray', 'font-medium');
            link.classList.add('text-brand-purple', 'font-bold');
        }
    });
}
window.addEventListener('scroll', highlightLink);
document.addEventListener('DOMContentLoaded', highlightLink);


// --- 6. Nova Lógica do Carrossel de Projetos ---
let currentSlide = 1;
const totalSlides = 2;

function showSlide(index) {
    // Esconde todos os slides
    for (let i = 1; i <= totalSlides; i++) {
        const slide = document.getElementById(`slide-${i}`);
        const dot = document.getElementById(`dot-${i}`);
        
        // Esconde e remove animação anterior
        slide.classList.add('hidden');
        slide.classList.remove('grid'); 
        slide.classList.remove('animate-carousel-fade'); 
        
        // Reseta o dot
        if (dot) {
            dot.classList.remove('bg-purple-600');
            dot.classList.add('bg-gray-300');
        }
    }

    // Prepara o slide atual
    const activeSlide = document.getElementById(`slide-${index}`);
    const activeDot = document.getElementById(`dot-${index}`);

    if (activeSlide) {
        // Mostra o slide
        activeSlide.classList.remove('hidden');
        activeSlide.classList.add('grid');
        
        // Truque para reiniciar a animação CSS (Trigger Reflow)
        void activeSlide.offsetWidth; 
        
        // Adiciona a classe de animação
        activeSlide.classList.add('animate-carousel-fade');

        // Ativa o dot
        if (activeDot) {
            activeDot.classList.remove('bg-gray-300');
            activeDot.classList.add('bg-purple-600');
        }
    }
    currentSlide = index;
}

function nextSlide() {
    let next = currentSlide + 1;
    if (next > totalSlides) next = 1; // Volta para o 1 se passar do último
    showSlide(next);
}

function prevSlide() {
    let prev = currentSlide - 1;
    if (prev < 1) prev = totalSlides; // Vai para o último se voltar do primeiro
    showSlide(prev);
}

// Inicializa
document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
});