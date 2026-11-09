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
            'projects.lead': 'Sites institucionais e landing pages que desenvolvi do design ao deploy. Arraste para o lado ou use as setas para conhecer cada projeto.',
            'projects.automation': 'Automações & IA',
            'pc.ackermannleiloes.kind': 'Landing page editorial',
            'pc.ciceroneri.kind': 'Landing page para consultoria comercial',
            'pc.paiola.kind': 'Site institucional para assistência técnica',
            'pc.paiolalavaseca.kind': 'Landing page para captação de orçamentos',
            'pc.cdccampinas.kind': 'Landing page de evento para profissionais da saúde',
            'pc.trekkingcapital.kind': 'Site para assessoria em investimentos imobiliários',
            'pc.ackermann.kind': 'Landing page para escritório jurídico',
            'pc.apsolucoes.kind': 'Site institucional para consultoria de RH',
            'pc.tuboforte.kind': 'Site institucional e catálogo B2B',
            'pc.claumixx.kind': 'Landing page de vendas para lançamento de produto',
            'pc.dralarissa.kind': 'Landing page para captação de pacientes',
            'pc.blogmundogeo.kind': 'Blog com arquitetura de conteúdo para SEO',
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
            'project.vocustom.subtitle': 'Landing Page para Empresa de Pintura',
            'project.vocustom.desc': 'Desenvolvimento de landing page para empresa de pintura profissional em Dublin, com slider interativo de antes e depois, foco em conversão via WhatsApp, design responsivo e depoimentos para construção de autoridade local.',
            'project.trekkingcapital.subtitle': 'Assessoria em Investimentos Imobiliários',
            'project.trekkingcapital.desc': 'Desenvolvimento completo da interface institucional, com responsividade mobile, gráfico interativo de retorno de investimento com dados de 30 anos, seção de diagnóstico de dores do cliente e configuração de SEO e Open Graph para compartilhamento em redes sociais.',
            'project.ackermann.subtitle': 'Landing Page para Escritório Jurídico',
            'project.ackermann.desc': 'Desenvolvimento de landing page institucional para escritório especializado em assessoria jurídica para leilões de imóveis, com foco em conversão via formulário de pré-qualificação e WhatsApp.',
            'project.paiola.subtitle': 'Site Institucional para Assistência Técnica',
            'project.paiola.desc': 'Desenvolvimento de site institucional para assistência técnica em refrigeração na região do ABC, destacando serviços de lava-seca, ar-condicionado e refrigeradores, com captação de clientes via orçamento por WhatsApp e chamada direta.',
            'project.bni1.subtitle': 'BNI Nebbiolo Indaiatuba - Automação de Atendimento via WhatsApp',
            'project.bni1.desc': 'Desenvolvimento de um agente de atendimento virtual para o BNI, utilizando n8n para orquestrar fluxos de trabalho e integrar com a API do WhatsApp (Evolution API). O agente responde perguntas frequentes sobre membros do BNI, com todos os dados armazenados no Supabase/PostgreSQL.',
            'project.bni2.subtitle': 'BNI Nebbiolo Indaiatuba - Automação Avançada via WhatsApp',
            'project.bni2.desc': 'Evolução do agente de atendimento BNI com melhorias significativas na compreensão e resposta às consultas. Integração com Google Docs para acesso direto às informações dos membros, prompt refinado para reduzir alucinações e aumentar precisão, com orquestração via n8n.',
            'about.title': 'Sobre mim',
            'about.p1': 'Sou o Matheus, desenvolvedor full-stack. Construo aplicações web, sites e automações com IA, do banco de dados ao deploy.',
            'about.p2': 'Meu maior projeto até agora é o Sistema ID22. Transformei a planilha que uma agência digital usava para controlar clientes e domínios em uma plataforma em Next.js e Supabase que monitora 28 sites e envia alertas pelo WhatsApp. Na mesma agência, entreguei 25 sites, landing pages e e-commerces, além de agentes de IA que atendem leads 24 horas por dia.',
            'about.p3': 'Cheguei à tecnologia por um caminho pouco comum. Sou formado em Direito, e uma temporada em Londres me fez perceber que eu queria construir coisas, e não só dar parecer sobre elas. De volta ao Brasil, comecei pelo e-commerce da família, criando landing pages, automações e campanhas com resultados que eu conseguia medir.',
            'about.p4': 'Hoje moro em Dublin e estou aberto a vagas full-stack e de automação, remotas ou presenciais. Gosto de código limpo, interfaces simples e soluções diretas. Fora do trabalho, corro maratonas.',
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
            'footer.rights': '© 2026 Matheus Dias de Souza. Todos os direitos reservados.',
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
            'projects.lead': 'Corporate websites and landing pages I built from design to deployment. Swipe or use the arrows to browse each project.',
            'projects.automation': 'Automation & AI',
            'pc.ackermannleiloes.kind': 'Editorial landing page',
            'pc.ciceroneri.kind': 'Landing page for a sales consultancy',
            'pc.paiola.kind': 'Website for an appliance repair service',
            'pc.paiolalavaseca.kind': 'Lead-generation landing page for quote requests',
            'pc.cdccampinas.kind': 'Event landing page for healthcare professionals',
            'pc.trekkingcapital.kind': 'Website for a real estate investment advisory',
            'pc.ackermann.kind': 'Landing page for a law firm',
            'pc.apsolucoes.kind': 'Website for an HR consultancy',
            'pc.tuboforte.kind': 'Corporate website and B2B catalogue',
            'pc.claumixx.kind': 'Sales landing page for a product launch',
            'pc.dralarissa.kind': 'Patient-acquisition landing page',
            'pc.blogmundogeo.kind': 'SEO-driven content blog',
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
            'project.vocustom.subtitle': 'Landing Page for Painting Company',
            'project.vocustom.desc': 'Built a landing page for a professional painting company in Dublin, featuring an interactive before-and-after image slider, WhatsApp-focused conversion strategy, responsive design, and client testimonials for local authority building.',
            'project.trekkingcapital.subtitle': 'Real Estate Investment Advisory',
            'project.trekkingcapital.desc': 'Full institutional interface development with mobile responsiveness, an interactive 30-year investment return chart, a client pain-point diagnosis section, and SEO and Open Graph configuration for social media sharing.',
            'project.ackermann.subtitle': 'Landing Page for Law Firm',
            'project.ackermann.desc': 'Built an institutional landing page for a law firm specialising in legal advisory for real estate auctions, focused on conversion through a pre-qualification form and WhatsApp.',
            'project.paiola.subtitle': 'Institutional Website for Technical Service',
            'project.paiola.desc': 'Built an institutional website for a refrigeration repair shop in the ABC region, highlighting services for laundry appliances, air conditioning, and refrigerators, with client acquisition via WhatsApp quotes and direct calls.',
            'project.bni1.subtitle': 'BNI Nebbiolo Indaiatuba — WhatsApp Customer Service Automation',
            'project.bni1.desc': 'Built a virtual customer service agent for BNI using n8n to orchestrate workflows and integrate with the WhatsApp API (Evolution API). The agent answers FAQs about BNI members, with all contact data stored in Supabase/PostgreSQL.',
            'project.bni2.subtitle': 'BNI Nebbiolo Indaiatuba — Advanced WhatsApp Automation',
            'project.bni2.desc': 'Evolution of the BNI agent with significant improvements in query understanding and response accuracy. Integrated Google Docs tools for direct access to member data, with refined prompting to reduce hallucinations — orchestrated via n8n.',
            'about.title': 'About me',
            'about.p1': 'I\'m Matheus, a full-stack developer. I build web applications, websites and AI automations, from the database to deployment.',
            'about.p2': 'My biggest project so far is Sistema ID22. I turned the spreadsheet a digital agency used to track clients and domains into a Next.js and Supabase platform that monitors 28 websites and sends alerts via WhatsApp. At the same agency, I\'ve delivered 25 websites, landing pages and e-commerce stores, plus AI agents that handle leads 24/7.',
            'about.p3': 'I came to tech by an unusual route. I have a Law degree, and a stint in London made me realise I wanted to build things, not just give opinions on them. Back in Brazil, I started with my family\'s e-commerce business, creating landing pages, automations and campaigns with results I could measure.',
            'about.p4': 'Today I live in Dublin and I\'m open to full-stack and automation roles, remote or on-site. I like clean code, simple interfaces and straightforward solutions. Outside work, I run marathons.',
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
            'footer.rights': '© 2026 Matheus Dias de Souza. All rights reserved.',
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

});
