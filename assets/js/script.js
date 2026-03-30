document.addEventListener('DOMContentLoaded', function () {

    // =====================
    // I18N — TRANSLATIONS
    // =====================
    const translations = {
        pt: {
            'nav.projects': 'Projetos',
            'nav.skills': 'Skills',
            'nav.about': 'Sobre Mim',
            'nav.contact': 'Contato',
            'hero.location': 'Dublin, Ireland',
            'hero.availability': 'Disponível · Remoto (BR & Global) · Presencial em Dublin / Europa',
            'hero.subtitle': 'Desenvolvedor Web especializado em criar soluções digitais robustas e elegantes.',
            'hero.cta.primary': 'Veja meus projetos',
            'hero.cta.secondary': 'Entre em contato',
            'hero.cta.cv': 'Download CV',
            'projects.title': 'Meus Projetos',
            'filter.all': 'Todos',
            'filter.sites': 'Sites',
            'filter.lp': 'Landing Pages',
            'filter.automation': 'Automações',
            'btn.live': 'Ver ao Vivo',
            'project.id22.subtitle': 'Site Institucional & Plataforma de Atendimento',
            'project.id22.desc': 'Desenvolvimento do site institucional do zero, refletindo a identidade inovadora da agência, e implementação de um agente de atendimento virtual inteligente via WhatsApp.',
            'project.casanova.subtitle': 'Portfólio Digital Interativo',
            'project.casanova.desc': 'Criação de uma vitrine digital elegante para uma empresa de móveis, com foco na experiência visual e uma galeria interativa customizada com HTML e CSS para exibir os projetos.',
            'project.mundogeo.subtitle': 'Plataforma de Conteúdo & Análise',
            'project.mundogeo.desc': 'Gestão completa do projeto, da negociação à entrega, criando um site institucional e um blog de análises para um especialista, incluindo configuração de hospedagem e e-mails.',
            'project.blogmundogeo.subtitle': 'Desenvolvimento de Blog Personalizado',
            'project.blogmundogeo.desc': 'Desenvolvimento e integração de um blog para expandir a presença digital do especialista. O foco foi na criação de uma arquitetura de conteúdo otimizada para SEO, visando atrair tráfego orgânico e estabelecer o autor como uma autoridade no nicho.',
            'project.claumixx.subtitle': 'Landing Page de Vendas Diretas',
            'project.claumixx.desc': 'Criação de uma landing page de alta conversão para o lançamento de um produto, validando um novo canal de vendas para o cliente que gerou 7 vendas já na primeira semana.',
            'project.ciceroneri.subtitle': 'Presença Digital para Consultor de Vendas',
            'project.ciceroneri.desc': 'Desenvolvimento de uma landing page de captação de lead para um consultor de vendas e palestrante, focando na apresentação profissional e na criação de conteúdo relevante para o público-alvo.',
            'project.tuboforte.subtitle': 'Site Institucional & Catálogo Digital B2B',
            'project.tuboforte.desc': 'Desenvolvimento de um site institucional para uma empresa com mais de 20 anos de mercado, com foco em narrar sua história e destacar seus valores de inovação e sustentabilidade. Projeto concebido do zero, desde o design minimalista até a criação de um canal no YouTube para integrar vídeos da empresa.',
            'project.dralarissa.subtitle': 'Landing Page para Captação de Leads',
            'project.dralarissa.desc': 'Criação de uma landing page estratégica para uma médica em início de carreira, projetada para construir autoridade e captar novos pacientes. Desenvolvi do design à entrega, aplicando um estilo minimalista e informativo, resultando em maior visibilidade e aquisição de clientes.',
            'project.apsolucoes.subtitle': 'Site Institucional & Plataforma de Serviços',
            'project.apsolucoes.desc': 'Desenvolvimento de diversas páginas web e implementação de uma solução de automação customizada e sem plugins para o site da AP Soluções Humanas, otimizando a experiência do usuário e processos críticos da cliente.',
            'project.bni1.subtitle': 'BNI Nebbiolo Indaiatuba - Automação de Atendimento via WhatsApp',
            'project.bni1.desc': 'Desenvolvimento de um agente de atendimento virtual para o BNI, utilizando n8n para orquestrar fluxos de trabalho e integrar com a API do WhatsApp (Evolution API). O agente responde perguntas frequentes sobre membros do BNI, com todos os dados armazenados no Supabase/PostgreSQL.',
            'project.bni2.subtitle': 'BNI Nebbiolo Indaiatuba - Automação Avançada via WhatsApp',
            'project.bni2.desc': 'Evolução do agente de atendimento BNI com melhorias significativas na compreensão e resposta às consultas. Integração com Google Docs para acesso direto às informações dos membros, prompt refinado para reduzir alucinações e aumentar precisão, com orquestração via n8n.',
            'about.title': 'Olá, sou o Matheus.',
            'about.p1': 'Minha jornada na tecnologia começou de forma pouco convencional. Graduado em Direito, uma temporada em Londres foi o ponto de virada: percebi que minha verdadeira vocação estava em construir no universo digital. De volta ao Brasil, coloquei em prática no e-commerce da família — criando landing pages, automações e campanhas que geravam resultados concretos.',
            'about.p2': 'Hoje, baseado em Dublin, atuo como desenvolvedor full-stack com foco em soluções que unem desenvolvimento web e automação com IA. Sou guiado por minimalismo estratégico: código limpo, design funcional e soluções diretas. Fora do digital, sou maratonista — consistência e estratégia que também aplico em cada projeto.',
            'about.p3': '',
            'about.p4': '',
            'about.p5': '',
            'contact.title': 'Vamos conversar',
            'contact.p1': 'Estou aberto a novas oportunidades, colaborações e projetos interessantes. Baseado em Dublin, Irlanda e disponível para trabalho remoto.',
            'contact.p2': '',
            'contact.p3': '',
            'skills.title': 'Skills',
            'skills.frontend': 'Frontend',
            'skills.backend': 'Backend & Infra',
            'skills.ai': 'IA & Automação',
            'skills.tools': 'Ferramentas',
            'footer.rights': '© 2025 Matheus Dias de Souza. Todos os direitos reservados.',
        },
        en: {
            'nav.projects': 'Projects',
            'nav.skills': 'Skills',
            'nav.about': 'About',
            'nav.contact': 'Contact',
            'hero.location': 'Dublin, Ireland',
            'hero.availability': 'Available · Remote (BR & Global) · On-site in Dublin / Europe',
            'hero.subtitle': 'Full-Stack Developer & AI Automation Engineer building robust and elegant digital solutions.',
            'hero.cta.primary': 'See my projects',
            'hero.cta.secondary': 'Get in touch',
            'hero.cta.cv': 'Download CV',
            'projects.title': 'My Projects',
            'filter.all': 'All',
            'filter.sites': 'Websites',
            'filter.lp': 'Landing Pages',
            'filter.automation': 'Automations',
            'btn.live': 'View Live',
            'project.id22.subtitle': 'Institutional Website & Customer Service Platform',
            'project.id22.desc': 'Built the institutional website from scratch, reflecting the agency\'s innovative identity, and implemented an intelligent virtual customer service agent via WhatsApp.',
            'project.casanova.subtitle': 'Interactive Digital Portfolio',
            'project.casanova.desc': 'Created an elegant digital showcase for a furniture company, focused on the visual experience with a custom interactive gallery built in HTML and CSS to display their projects.',
            'project.mundogeo.subtitle': 'Content & Analysis Platform',
            'project.mundogeo.desc': 'Full project management from negotiation to delivery — built an institutional website and an analysis blog for a geopolitics specialist, including hosting and email configuration.',
            'project.blogmundogeo.subtitle': 'Custom Blog Development',
            'project.blogmundogeo.desc': 'Developed and integrated a blog to expand the specialist\'s digital presence. Focus on creating an SEO-optimized content architecture to drive organic traffic and establish the author as a niche authority.',
            'project.claumixx.subtitle': 'Direct Sales Landing Page',
            'project.claumixx.desc': 'Built a high-conversion landing page for a product launch, validating a new sales channel that generated 7 sales in the very first week.',
            'project.ciceroneri.subtitle': 'Digital Presence for Sales Consultant',
            'project.ciceroneri.desc': 'Developed a lead-generation landing page for a sales consultant and speaker, focused on professional presentation and creating relevant content for the target audience.',
            'project.tuboforte.subtitle': 'Institutional Website & B2B Digital Catalogue',
            'project.tuboforte.desc': 'Built an institutional website for a 20+ year company, focused on storytelling and highlighting innovation and sustainability values. Designed from scratch — including a YouTube channel integration for company videos — generating new visibility and clients.',
            'project.dralarissa.subtitle': 'Lead Generation Landing Page',
            'project.dralarissa.desc': 'Created a strategic landing page for a doctor starting her career, designed to build authority and attract new patients. Delivered end-to-end from design to launch with a minimalist, informative style, resulting in increased visibility and client acquisition.',
            'project.apsolucoes.subtitle': 'Institutional Website & Services Platform',
            'project.apsolucoes.desc': 'Developed multiple web pages and implemented a custom, plugin-free automation solution for AP Soluções Humanas, optimizing the user experience and critical business processes.',
            'project.bni1.subtitle': 'BNI Nebbiolo Indaiatuba — WhatsApp Customer Service Automation',
            'project.bni1.desc': 'Built a virtual customer service agent for BNI using n8n to orchestrate workflows and integrate with the WhatsApp API (Evolution API). The agent answers FAQs about BNI members, with all contact data stored in Supabase/PostgreSQL.',
            'project.bni2.subtitle': 'BNI Nebbiolo Indaiatuba — Advanced WhatsApp Automation',
            'project.bni2.desc': 'Evolution of the BNI agent with significant improvements in query understanding and response accuracy. Integrated Google Docs tools for direct access to member data, with refined prompting to reduce hallucinations — orchestrated via n8n.',
            'about.title': 'Hi, I\'m Matheus.',
            'about.p1': 'My journey into tech started unconventionally. After a Law degree in Brazil, a stint in London was the turning point — I realised my calling was to build in the digital world. Back in Brazil, I put that into practice in my family\'s e-commerce business, building landing pages, automations and campaigns that delivered real results.',
            'about.p2': 'Now based in Dublin, I work as a full-stack developer focused on solutions that combine web development and AI automation. I\'m guided by strategic minimalism: clean code, functional design, and direct solutions. Outside of tech, I\'m a marathon runner — consistency and strategy I bring to every project.',
            'about.p3': '',
            'about.p4': '',
            'about.p5': '',
            'contact.title': 'Let\'s Talk',
            'contact.p1': 'I\'m always open to new opportunities, collaborations, and interesting projects. Based in Dublin, Ireland and available for remote work worldwide.',
            'contact.p2': '',
            'contact.p3': '',
            'skills.title': 'Skills',
            'skills.frontend': 'Frontend',
            'skills.backend': 'Backend & Infra',
            'skills.ai': 'AI & Automation',
            'skills.tools': 'Tools',
            'footer.rights': '© 2025 Matheus Dias de Souza. All rights reserved.',
        }
    };

    let currentLang = localStorage.getItem('lang') || 'pt';

    function applyTranslations(lang) {
        document.documentElement.lang = lang === 'pt' ? 'pt-br' : 'en';
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const text = translations[lang][key];
            if (text !== undefined) {
                if (text === '') {
                    el.style.display = 'none';
                } else {
                    el.textContent = text;
                    el.style.display = '';
                }
            }
        });
        const toggle = document.getElementById('lang-toggle');
        if (toggle) toggle.textContent = lang === 'pt' ? 'EN' : 'PT';
    }

    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        langToggle.addEventListener('click', function () {
            currentLang = currentLang === 'pt' ? 'en' : 'pt';
            localStorage.setItem('lang', currentLang);
            applyTranslations(currentLang);
        });
    }

    applyTranslations(currentLang);

    // =====================
    // HAMBURGER MENU
    // =====================
    const hamburger = document.getElementById('hamburger');
    const mainNav = document.getElementById('main-nav');

    if (hamburger && mainNav) {
        hamburger.addEventListener('click', function () {
            const isOpen = mainNav.classList.toggle('open');
            hamburger.classList.toggle('open', isOpen);
            hamburger.setAttribute('aria-expanded', isOpen);
        });

        // Fecha o menu ao clicar em um link
        mainNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mainNav.classList.remove('open');
                hamburger.classList.remove('open');
                hamburger.setAttribute('aria-expanded', false);
            });
        });
    }

    // =====================
    // PROJECT FILTER
    // =====================
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            const filterValue = this.getAttribute('data-filter');
            projectCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-filter') === filterValue) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });

});
