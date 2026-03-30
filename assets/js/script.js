document.addEventListener('DOMContentLoaded', function () {

    // =====================
    // I18N — TRANSLATIONS
    // =====================
    const translations = {
        pt: {
            'nav.projects': 'Projetos',
            'nav.about': 'Sobre Mim',
            'nav.contact': 'Contato',
            'hero.subtitle': 'Desenvolvedor Web especializado em criar soluções digitais robustas e elegantes.',
            'hero.cta.primary': 'Veja meus projetos',
            'hero.cta.secondary': 'Entre em contato',
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
            'about.p1': 'Minha jornada na tecnologia começou de uma forma pouco convencional. Após concluir minha graduação em Direito, uma temporada em Londres despertou uma nova perspectiva e uma certeza: minha verdadeira vocação estava em construir e criar no universo digital.',
            'about.p2': 'De volta ao Brasil, mergulhei de cabeça no mundo real, aplicando meus novos conhecimentos no e-commerce da minha família. Ali, fui além da teoria, criando landing pages, gerenciando o site, desenvolvendo campanhas e automações que geravam resultados concretos. Foi essa experiência prática que solidificou minha paixão: transformar ideias e sonhos em interfaces funcionais e elegantes que as pessoas realmente usam.',
            'about.p3': 'Como engenheiro de software, sou guiado por uma filosofia de minimalismo estratégico. Valorizo soluções diretas e um código que seja não apenas limpo e performático, mas também de fácil entendimento para futuras atualizações. Para mim, um bom design é aquele que une beleza, funcionalidade e acessibilidade para todos. Sou metódico, analítico e organizado, qualidades que aplico em cada linha de código e em cada projeto que desenvolvo.',
            'about.p4': 'Fora do universo digital, meu foco e disciplina são canalizados em outra grande paixão: a corrida de rua. Como maratonista, aprendi que os maiores desafios são vencidos com consistência, estratégia e a visão de que o impossível é apenas uma questão de tempo e dedicação.',
            'about.p5': 'Impulsionado pela velocidade com que a tecnologia avança, meu objetivo é trabalhar com pessoas que também pensam no futuro, vivendo os dias de hoje. Porque, para mim, o impossível é apenas o próximo grande projeto esperando para ser construído.',
            'contact.title': 'Precisa de ajuda? Vamos conversar',
            'contact.p1': 'Estou sempre aberto a novas oportunidades e colaborações, e posso ajudar através de projetos práticos já implementados que unem a eficiência da automação com a excelência do desenvolvimento web. Implemento agentes de IA que utilizam o N8N para orquestrar fluxos de trabalho e responder ao WhatsApp de forma inteligente, gerenciando a triagem inicial de leads e fornecendo respostas rápidas.',
            'contact.p2': 'No front-end, crio sites e landing pages de alta conversão usando Elementor, complementando-os com a configuração e gestão de envio de Email Marketing e pela criação de blogs estratégicos que atraem tráfego qualificado. Em e-commerce, administro plataformas como Loja Integrada e Tray Commerce, garantindo a estabilidade e performance da loja, além de cuidar da administração de hospedagem e do desenvolvimento de scripts específicos para otimização de tarefas e integração de sistemas.',
            'contact.p3': 'Para completar, desenvolvo e-books e tutoriais de suporte técnico que não apenas capacitam clientes e equipes, mas reduzem a demanda por suporte recorrente, melhorando a satisfação e a eficiência operacional. Eu transformo suas ferramentas em um ecossistema de crescimento e minha proposta é clara: usar tecnologia de ponta para automatizar o que é repetitivo e focar no desenvolvimento do que é estratégico.',
            'footer.rights': '© 2025 Matheus Dias de Souza. Todos os direitos reservados.',
        },
        en: {
            'nav.projects': 'Projects',
            'nav.about': 'About',
            'nav.contact': 'Contact',
            'hero.subtitle': 'Full-Stack Developer & AI Automation Engineer building robust and elegant digital solutions.',
            'hero.cta.primary': 'See my projects',
            'hero.cta.secondary': 'Get in touch',
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
            'about.p1': 'My journey into tech started unconventionally. After completing a Law degree in Brazil, a stint in London sparked a new perspective and a clear realization: my true calling was to build and create in the digital world.',
            'about.p2': 'Back in Brazil, I dove headfirst into the real world — applying my new skills to my family\'s e-commerce business. I went beyond theory, building landing pages, managing the website, and developing campaigns and automations that delivered concrete results. That hands-on experience solidified my passion: turning ideas into functional, elegant interfaces that people actually use.',
            'about.p3': 'As a software engineer, I\'m guided by a philosophy of strategic minimalism. I value direct solutions and code that is not only clean and performant, but also easy to understand for future updates. Good design, to me, unites beauty, functionality, and accessibility. I\'m methodical, analytical, and organized — qualities I bring to every line of code and every project I develop.',
            'about.p4': 'Outside the digital world, my focus and discipline are channelled into another great passion: road running. As a marathon runner, I\'ve learned that the biggest challenges are overcome with consistency, strategy, and the belief that the impossible is just a matter of time and dedication.',
            'about.p5': 'Now based in Dublin, Ireland, I\'m driven by the pace of technological change and eager to work with forward-thinking teams. Because for me, the impossible is simply the next great project waiting to be built.',
            'contact.title': 'Let\'s Talk',
            'contact.p1': 'I\'m always open to new opportunities, collaborations, and interesting projects. Based in Dublin, Ireland and available for remote work worldwide.',
            'contact.p2': '',
            'contact.p3': '',
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
