document.addEventListener('DOMContentLoaded', function () {
    'use strict';

    // =====================
    // TRADUÇÕES (PT / EN)
    // =====================
    const translations = {
        pt: {
            'skip': 'Pular para o conteúdo',
            'nav.projects': 'Projetos',
            'nav.about': 'Sobre',
            'nav.contact': 'Contato',
            'cta.cv': 'Baixar CV',
            'cta.projects': 'Ver projetos',
            'cta.case': 'Ler o case Sistema ID22',
            'hero.eyebrow': '// desenvolvedor full-stack · dublin, irlanda',
            'hero.lead': 'Construo aplicações web, sites e automações com IA,',
            'hero.lead.strong': 'do banco de dados ao deploy.',
            'hero.status1': 'Disponível · Dublin',
            'hero.status2': 'Remoto ou presencial',
            'stack.title': 'Stack do dia a dia',
            'case.eyebrow': 'Projeto em destaque · ID22 Marketing & Tecnologia',
            'case.lead': 'A agência controlava clientes, domínios e contratos em uma planilha. Transformei isso em uma plataforma interna que verifica se cada site está no ar, avisa antes de um domínio vencer e manda o alerta direto no WhatsApp.',
            'case.more': 'Depois vieram login próprio, página de equipe e controle de ponto. Hoje o sistema está virando o ERP da agência, com um módulo de cadastro de clientes que alimenta os outros.',
            'case.stat1': 'sites monitorados',
            'case.stat2': 'verificações: uptime e domínio',
            'case.stat3': 'módulos no ar: login, equipe, ponto',
            'case.note': 'Código privado da agência · demonstração sob pedido',
            'flow.1.label': 'antes',
            'flow.1.title': 'Planilha Google',
            'flow.1.text': 'clientes, domínios e contratos à mão',
            'flow.2.text': 'site no ar? domínio vence quando?',
            'flow.3.text': 'painel com login, equipe e ponto',
            'flow.4.title': 'Alerta no WhatsApp',
            'flow.4.text': 'o time sabe antes do cliente',
            'projects.eyebrow': '// sites e landing pages',
            'projects.title': 'Do design ao deploy',
            'projects.more': 'Ver os 12 projetos',
            'projects.less': 'Mostrar menos',
            'btn.live': 'Ver ao vivo',
            'p.ciceroneri.label': 'Landing page',
            'p.ciceroneri.kind': 'Landing page para consultoria comercial.',
            'p.paiola.label': 'Site institucional',
            'p.paiola.kind': 'Site para assistência técnica, com orçamento pelo WhatsApp.',
            'p.ackleiloes.label': 'Landing page editorial',
            'p.ackleiloes.kind': 'Assessoria jurídica em leilões de imóveis.',
            'p.cdc.label': 'Landing page de evento',
            'p.cdc.kind': 'Evento para profissionais da saúde, com lotes de ingresso.',
            'p.trekking.label': 'Site institucional',
            'p.trekking.kind': 'Assessoria em investimentos imobiliários.',
            'p.ap.label': 'Site institucional',
            'p.ap.kind': 'Consultoria de RH, com formulário integrado ao n8n.',
            'p.lavaseca.label': 'Landing page',
            'p.lavaseca.kind': 'Captação de orçamentos para conserto de lava e seca.',
            'p.ackermann.label': 'Landing page',
            'p.ackermann.kind': 'Landing page para escritório jurídico.',
            'p.tuboforte.label': 'Site institucional',
            'p.tuboforte.kind': 'Site institucional e catálogo B2B.',
            'p.claumixx.label': 'Landing page de vendas',
            'p.claumixx.kind': 'Lançamento de produto em e-commerce.',
            'p.larissa.label': 'Landing page',
            'p.larissa.kind': 'Captação de pacientes para clínica.',
            'p.mundogeo.label': 'Blog',
            'p.mundogeo.kind': 'Arquitetura de conteúdo para SEO.',
            'ai.eyebrow': '// automações e ia',
            'ai.title': 'Agentes que atendem 24 horas',
            'ai.v1.title': 'Agente de atendimento no WhatsApp',
            'ai.v1.text': 'Responde perguntas frequentes sobre os membros do BNI. Os fluxos rodam no n8n, a conversa passa pela Evolution API e os dados ficam no Supabase.',
            'ai.v2.title': 'Menos alucinação, mais precisão',
            'ai.v2.text': 'A segunda versão lê os dados direto do Google Docs e usa um prompt refinado para errar menos. A orquestração continua no n8n.',
            'about.eyebrow': '// sobre mim',
            'about.title': 'Do Direito ao deploy',
            'about.f1': 'Formação',
            'about.f1v': 'Análise e Desenvolvimento de Sistemas · Direito',
            'about.f2': 'Base',
            'about.f2v': 'Dublin, Irlanda',
            'about.f3': 'Fora do código',
            'about.f3v': 'Maratonas',
            'about.p1': 'Sou o Matheus, desenvolvedor full-stack. Construo aplicações web, sites e automações com IA, do banco de dados ao deploy.',
            'about.p2': 'Meu maior projeto até agora é o Sistema ID22. Transformei a planilha que uma agência digital usava para controlar clientes e domínios em uma plataforma em Next.js e Supabase que monitora 28 sites e envia alertas pelo WhatsApp. Na mesma agência, entreguei 25 sites, landing pages e e-commerces, além de agentes de IA que atendem leads 24 horas por dia.',
            'about.p3': 'Cheguei à tecnologia por um caminho pouco comum. Sou formado em Direito, e uma temporada em Londres me fez perceber que eu queria construir coisas, e não só dar parecer sobre elas. De volta ao Brasil, comecei pelo e-commerce da família, criando landing pages, automações e campanhas com resultados que eu conseguia medir.',
            'about.p4': 'Hoje moro em Dublin e estou aberto a vagas full-stack e de automação, remotas ou presenciais. Gosto de código limpo, interfaces simples e soluções diretas. Fora do trabalho, corro maratonas.',
            'contact.eyebrow': '// contato',
            'contact.title': 'Vamos construir algo juntos.',
            'contact.copy': 'Copiar',
            'contact.copied': 'Copiado',
            'aria.menuOpen': 'Abrir menu',
            'aria.menuClose': 'Fechar menu',
            'aria.lang': 'Switch to English'
        },
        en: {
            'skip': 'Skip to content',
            'nav.projects': 'Projects',
            'nav.about': 'About',
            'nav.contact': 'Contact',
            'cta.cv': 'Download CV',
            'cta.projects': 'See projects',
            'cta.case': 'Read the Sistema ID22 case',
            'hero.eyebrow': '// full-stack developer · dublin, ireland',
            'hero.lead': 'I build web applications, websites and AI automations,',
            'hero.lead.strong': 'from the database to deployment.',
            'hero.status1': 'Available · Dublin',
            'hero.status2': 'Remote or on-site',
            'stack.title': 'Everyday stack',
            'case.eyebrow': 'Featured project · ID22 Marketing & Technology',
            'case.lead': 'The agency tracked clients, domains and contracts in a spreadsheet. I turned it into an internal platform that checks whether every site is up, warns before a domain expires and sends the alert straight to WhatsApp.',
            'case.more': 'Then came its own login, a team page and time tracking. The system is now becoming the agency\'s ERP, with a client registry module that feeds all the others.',
            'case.stat1': 'websites monitored',
            'case.stat2': 'checks: uptime and domain',
            'case.stat3': 'modules live: login, team, time tracking',
            'case.note': 'Private agency code · demo on request',
            'flow.1.label': 'before',
            'flow.1.title': 'Google Sheet',
            'flow.1.text': 'clients, domains and contracts by hand',
            'flow.2.text': 'is the site up? when does the domain expire?',
            'flow.3.text': 'dashboard with login, team and time tracking',
            'flow.4.title': 'WhatsApp alert',
            'flow.4.text': 'the team knows before the client does',
            'projects.eyebrow': '// websites and landing pages',
            'projects.title': 'From design to deployment',
            'projects.more': 'See all 12 projects',
            'projects.less': 'Show less',
            'btn.live': 'View live',
            'p.ciceroneri.label': 'Landing page',
            'p.ciceroneri.kind': 'Landing page for a sales consultancy.',
            'p.paiola.label': 'Corporate website',
            'p.paiola.kind': 'Website for an appliance repair service, with quotes via WhatsApp.',
            'p.ackleiloes.label': 'Editorial landing page',
            'p.ackleiloes.kind': 'Legal advisory for property auctions.',
            'p.cdc.label': 'Event landing page',
            'p.cdc.kind': 'Event for healthcare professionals, with ticket tiers.',
            'p.trekking.label': 'Corporate website',
            'p.trekking.kind': 'Real estate investment advisory.',
            'p.ap.label': 'Corporate website',
            'p.ap.kind': 'HR consultancy, with a form connected to n8n.',
            'p.lavaseca.label': 'Landing page',
            'p.lavaseca.kind': 'Lead generation for washer-dryer repair quotes.',
            'p.ackermann.label': 'Landing page',
            'p.ackermann.kind': 'Landing page for a law firm.',
            'p.tuboforte.label': 'Corporate website',
            'p.tuboforte.kind': 'Corporate website and B2B catalogue.',
            'p.claumixx.label': 'Sales landing page',
            'p.claumixx.kind': 'Product launch for an online store.',
            'p.larissa.label': 'Landing page',
            'p.larissa.kind': 'Patient acquisition for a clinic.',
            'p.mundogeo.label': 'Blog',
            'p.mundogeo.kind': 'Content architecture built for SEO.',
            'ai.eyebrow': '// automation and ai',
            'ai.title': 'Agents that answer 24/7',
            'ai.v1.title': 'WhatsApp support agent',
            'ai.v1.text': 'Answers frequent questions about BNI members. The flows run on n8n, the conversation goes through the Evolution API and the data lives in Supabase.',
            'ai.v2.title': 'Fewer hallucinations, more accuracy',
            'ai.v2.text': 'The second version reads the data straight from Google Docs and uses a refined prompt to make fewer mistakes. Orchestration still runs on n8n.',
            'about.eyebrow': '// about me',
            'about.title': 'From Law to deployment',
            'about.f1': 'Education',
            'about.f1v': 'Systems Analysis and Development · Law',
            'about.f2': 'Based in',
            'about.f2v': 'Dublin, Ireland',
            'about.f3': 'Outside code',
            'about.f3v': 'Marathons',
            'about.p1': 'I\'m Matheus, a full-stack developer. I build web applications, websites and AI automations, from the database to deployment.',
            'about.p2': 'My biggest project so far is Sistema ID22. I turned the spreadsheet a digital agency used to track clients and domains into a Next.js and Supabase platform that monitors 28 websites and sends alerts via WhatsApp. At the same agency, I\'ve delivered 25 websites, landing pages and e-commerce stores, plus AI agents that handle leads 24/7.',
            'about.p3': 'I came to tech by an unusual route. I have a Law degree, and a stint in London made me realise I wanted to build things, not just give opinions on them. Back in Brazil, I started with my family\'s e-commerce business, creating landing pages, automations and campaigns with results I could measure.',
            'about.p4': 'Today I live in Dublin and I\'m open to full-stack and automation roles, remote or on-site. I like clean code, simple interfaces and straightforward solutions. Outside work, I run marathons.',
            'contact.eyebrow': '// contact',
            'contact.title': 'Let\'s build something together.',
            'contact.copy': 'Copy',
            'contact.copied': 'Copied',
            'aria.menuOpen': 'Open menu',
            'aria.menuClose': 'Close menu',
            'aria.lang': 'Mudar para português'
        }
    };

    function getStoredLang() {
        try { return localStorage.getItem('lang'); } catch (e) { return null; }
    }
    function storeLang(lang) {
        try { localStorage.setItem('lang', lang); } catch (e) { /* sem armazenamento */ }
    }

    let currentLang = getStoredLang() === 'en' ? 'en' : 'pt';
    const t = function (key) { return translations[currentLang][key]; };

    const langToggle = document.getElementById('lang-toggle');
    const menuToggle = document.getElementById('menu-toggle');
    const nav = document.getElementById('main-nav');
    const moreBtn = document.getElementById('projects-more');
    const copyBtn = document.getElementById('copy-email');

    function applyTranslations() {
        document.documentElement.lang = currentLang === 'pt' ? 'pt-br' : 'en';
        document.querySelectorAll('[data-i18n]').forEach(function (el) {
            const text = t(el.getAttribute('data-i18n'));
            if (text !== undefined) el.textContent = text;
        });
        if (langToggle) {
            langToggle.textContent = currentLang === 'pt' ? 'EN' : 'PT';
            langToggle.setAttribute('aria-label', t('aria.lang'));
        }
        if (menuToggle) {
            const open = menuToggle.getAttribute('aria-expanded') === 'true';
            menuToggle.setAttribute('aria-label', t(open ? 'aria.menuClose' : 'aria.menuOpen'));
        }
        if (moreBtn) {
            const expanded = moreBtn.getAttribute('aria-expanded') === 'true';
            moreBtn.textContent = t(expanded ? 'projects.less' : 'projects.more');
        }
    }

    if (langToggle) {
        langToggle.addEventListener('click', function () {
            currentLang = currentLang === 'pt' ? 'en' : 'pt';
            storeLang(currentLang);
            applyTranslations();
        });
    }

    // =====================
    // MENU MOBILE
    // =====================
    function setMenu(open) {
        if (!menuToggle || !nav) return;
        nav.classList.toggle('is-open', open);
        menuToggle.setAttribute('aria-expanded', String(open));
        menuToggle.setAttribute('aria-label', t(open ? 'aria.menuClose' : 'aria.menuOpen'));
    }
    if (menuToggle && nav) {
        menuToggle.addEventListener('click', function () {
            setMenu(!nav.classList.contains('is-open'));
        });
        nav.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () { setMenu(false); });
        });
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && nav.classList.contains('is-open')) {
                setMenu(false);
                menuToggle.focus();
            }
        });
    }

    // =====================
    // VER TODOS OS PROJETOS
    // =====================
    if (moreBtn) {
        const extras = document.querySelectorAll('[data-extra]');
        moreBtn.addEventListener('click', function () {
            const expand = moreBtn.getAttribute('aria-expanded') !== 'true';
            extras.forEach(function (el) { el.hidden = !expand; });
            moreBtn.setAttribute('aria-expanded', String(expand));
            moreBtn.textContent = t(expand ? 'projects.less' : 'projects.more');
            if (expand && extras[0]) {
                const link = extras[0].querySelector('a');
                if (link) link.focus({ preventScroll: true });
            } else if (!expand) {
                document.getElementById('projetos').scrollIntoView();
            }
        });
    }

    // =====================
    // COPIAR E-MAIL
    // =====================
    if (copyBtn && navigator.clipboard) {
        copyBtn.addEventListener('click', function () {
            navigator.clipboard.writeText(copyBtn.dataset.email).then(function () {
                copyBtn.textContent = t('contact.copied');
                setTimeout(function () { copyBtn.textContent = t('contact.copy'); }, 2000);
            }).catch(function () { /* o e-mail continua visível para copiar à mão */ });
        });
    } else if (copyBtn) {
        copyBtn.hidden = true;
    }

    applyTranslations();
});
