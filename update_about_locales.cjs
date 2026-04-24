const fs = require('fs');

const ptPath = './src/locales/pt.json';
const enPath = './src/locales/en.json';

const pt = JSON.parse(fs.readFileSync(ptPath, 'utf8'));
const en = JSON.parse(fs.readFileSync(enPath, 'utf8'));

pt.about.metrics = [
  { label: "Projetos B2B\nLiderados" },
  { label: "On-time\nDelivery" },
  { label: "Carga de\nProcessamento" },
  { label: "Falhas\nOperacionais" }
];

pt.about.stacks = [
  {
    title: "Infraestrutura & Servers (Linux)",
    desc: "Gerenciamento rigoroso de ambientes cloud. Redução de gargalos de processamento configurando balanceamento, administração de servidores virtuais via linha de comando Bash e isolamento seguro de ecossistemas via Docker. Operações críticas rodando 24/7.",
    items: ["Arquitetura de Uptime 99.9%", "Bancos PostgreSQL/Redis", "Sistemas Linux Bash/Debian", "Docker / Portainer"]
  },
  {
    title: "Sistemas CRM & ERP",
    desc: "Mapeando e extorquindo o máximo de dados comerciais das operações lideradas sem fatigar a equipe. Customização severa e criação de fluxos de eventos nos maiores players (Kommo, Pipedrive), mitigando fricções que geram perda invisível de LTV e abandono do cliente e gargalos de funil.",
    items: ["Bases Kommo, Pipedrive", "Modelagem de Funis B2B", "Dashboards de ERP Integrados", "Parametrização Analítica"]
  },
  {
    title: "Data Engineering (n8n & APIs)",
    desc: "Substituindo massivamente o trabalho mecânico por fluxos lógicos executáveis no servidor. Construção de túneis de comunicação complexos (REST, Webhooks) forçando ferramentas separadas a operarem sincronizadas sem redundâncias processuais.",
    items: ["Deploy n8n Self-Hosted", "Hooks Complexos (Lógica C-Level)", "APIs WhatsApp / IA", "Tratamento Violento de Exceções"]
  },
  {
    title: "Soluções Sob Medida (Web)",
    desc: "A entrega palpável da lógica. Projetamos interfaces proprietárias (não prateleiras) em aplicações modernas, ultrarrápidas, que consomem e alimentam as engrenagens de infraestrutura, mantendo navegação focada em design UX de alto contraste.",
    items: ["React, Next.js e TypeScript Full", "Landing Pages Roteadas vs Conversão", "WordPress Avançado (Headless/Custom)", "Copywriting, Layout UI/UX e Estética"]
  }
];

pt.about.career_title = "Trajetória";
pt.about.career = [
  {
    period: "Agt 2025 – Presente",
    role: "Gestor de Projetos de Automação e CRM",
    company: "Zera Company",
    desc1: "Liderança direta em +15 projetos de implementação B2B (Kommo, Pipedrive, Agendor) garantindo 100% de on-time delivery. Estruturação de automação avançada com n8n (+1000 registros diários) sincronizada via webhooks, REST APIs com integrações ativas entre Sheets, WhatsApp IA e CRM. Aumento severo da eficiência operacional do cliente destruindo retrabalho de dados em 95%.",
    desc2: "Desenvolvimento e performance de Landing Pages (WordPress/Next) focadas em otimização de conversão (15-22% de taxa média), alinhando Copywriting persuasivo às propostas comerciais fechadas garantindo consistência técnica em toda a esteira do projeto."
  },
  {
    period: "Fev 2023 – Mai 2024",
    role: "Analista de T.I & Suporte Avançado",
    company: "Kamaleão Color",
    desc1: "Gerenciamento da infraestrutura de rede, administração de roteamento, manutenção preventiva e segurança de servidores para a fábrica física. Migração complexa de ecossistemas E-commerce e ERP envolvendo bases com +30.000 clientes e portfólio massivo de produtos e regras."
  },
  {
    period: "Autônomo / Dev",
    role: "Engenheiro Code/Low-Code & Dev Web",
    company: "Projetos Paralelos",
    desc1: "Construção de ecossistemas digitais que não dependem de uma única stack. Desenvolvimento sólido via JavaScript ES6+, Front-End imersivo. Orquestração complexa de dados corporativos no Google Sheets cruzificados com dashboards e APIs consumidas pelo Make/Zapier/n8n."
  }
];

pt.about.education_title = "Formação";
pt.about.education = [
  {
    title: "Análise e Desenv. de Sistemas",
    subtitle: "CEUB • Nível Superior",
    desc: "Foco central no desenvolvimento rigoroso do currículo aplicado do mercado moderno de Startups e Corporate: Gestão de Sistemas de ponta, Arquitetura da Infraestrutura de TI, compliance com Segurança da Informação. Capacitação intensa em Administração de Projetos tecnológicos de grande escala e gestão orientada a líderes."
  },
  {
    title: "Comunicação e Línguas",
    subtitle: "Internacional",
    desc: "Inglês Avançado: Domínio completo da documentação técnica internacional (escrita/leitura crítica). Conversação qualificada para negociações com clientes B2B multilingues e integração com stakeholders remotos."
  }
];

pt.about.tactics_title = "Capacitação Tática";
pt.about.tactics = [
  { title: "Project Management (Agile)", desc: "Frameworks Scrum e Kanban na vida real. Liderança, SLAs e redução de gargalos de equipe." },
  { title: "Sistemas Nativos CRM", desc: "Configuração massiva e arquitetada nos principais players: Kommo, Pipedrive." },
  { title: "n8n / Integração (DevOps)", desc: "Self-hosting via Docker. Tratamento agressivo de exceções e mapeamento via JSON REST Webhooks." },
  { title: "React & Arquitetura Web", desc: "Construção tipada de aplicações Front-End dinâmicas usando Next.js, TypeSript e interfaces componentizadas." }
];

en.about.metrics = [
  { label: "B2B Projects\nLed" },
  { label: "On-time\nDelivery" },
  { label: "Processing\nLoad" },
  { label: "Operational\nFailures" }
];

en.about.stacks = [
  {
    title: "Infrastructure & Servers (Linux)",
    desc: "Rigorous management of cloud environments. Reduction of processing bottlenecks by configuring load balancing, virtual server administration via Bash command line, and secure isolation of ecosystems via Docker. Critical operations running 24/7.",
    items: ["99.9% Uptime Architecture", "PostgreSQL/Redis Databases", "Linux Bash/Debian Systems", "Docker / Portainer"]
  },
  {
    title: "CRM & ERP Systems",
    desc: "Mapping and extorting maximum commercial data from led operations without fatiguing the team. Severe customization and event flow creation in major players (Kommo, Pipedrive), mitigating frictions that cause invisible LTV loss, customer abandonment, and funnel bottlenecks.",
    items: ["Kommo, Pipedrive Bases", "B2B Funnel Modeling", "Integrated ERP Dashboards", "Analytical Parameterization"]
  },
  {
    title: "Data Engineering (n8n & APIs)",
    desc: "Massively replacing mechanical work with logical executable flows on the server. Building complex communication tunnels (REST, Webhooks) forcing separate tools to operate in sync without procedural redundancies.",
    items: ["Self-Hosted n8n Deploy", "Complex Hooks (C-Level Logic)", "WhatsApp APIs / AI", "Aggressive Exception Handling"]
  },
  {
    title: "Custom Solutions (Web)",
    desc: "The tangible delivery of logic. We design proprietary interfaces (not off-the-shelf) in modern, ultra-fast applications that consume and feed the infrastructure gears, maintaining navigation focused on high-contrast UX design.",
    items: ["React, Next.js and Full TypeScript", "Conversion-Routed Landing Pages", "Advanced WordPress (Headless/Custom)", "Copywriting, UI/UX Layout and Aesthetics"]
  }
];

en.about.career_title = "Trajectory";
en.about.career = [
  {
    period: "Aug 2025 – Present",
    role: "Automation and CRM Project Manager",
    company: "Zera Company",
    desc1: "Direct leadership in 15+ B2B implementation projects (Kommo, Pipedrive, Agendor) guaranteeing 100% on-time delivery. Structuring advanced automation with n8n (+1000 daily records) synchronized via webhooks, REST APIs with active integrations between Sheets, WhatsApp AI and CRM. Severe increase in client operational efficiency, destroying data rework by 95%.",
    desc2: "Development and performance of Landing Pages (WordPress/Next) focused on conversion optimization (15-22% average rate), aligning persuasive Copywriting to closed commercial proposals guaranteeing technical consistency throughout the project pipeline."
  },
  {
    period: "Feb 2023 – May 2024",
    role: "IT Analyst & Advanced Support",
    company: "Kamaleão Color",
    desc1: "Network infrastructure management, routing administration, preventive maintenance and server security for the physical factory. Complex migration of E-commerce and ERP ecosystems involving databases with +30,000 clients and a massive portfolio of products and rules."
  },
  {
    period: "Freelance / Dev",
    role: "Code/Low-Code Engineer & Web Dev",
    company: "Side Projects",
    desc1: "Building digital ecosystems that do not depend on a single stack. Solid development via JavaScript ES6+, immersive Front-End. Complex orchestration of corporate data in Google Sheets cross-referenced with dashboards and APIs consumed by Make/Zapier/n8n."
  }
];

en.about.education_title = "Education";
en.about.education = [
  {
    title: "Systems Analysis and Development",
    subtitle: "CEUB • Higher Education",
    desc: "Central focus on the rigorous development of the applied curriculum of the modern Startup and Corporate market: Cutting-edge Systems Management, IT Infrastructure Architecture, compliance with Information Security. Intense training in large-scale technological Project Administration and leadership-oriented management."
  },
  {
    title: "Communication and Languages",
    subtitle: "International",
    desc: "Advanced English: Complete mastery of international technical documentation (writing/critical reading). Qualified conversation for negotiations with multilingual B2B clients and integration with remote stakeholders."
  }
];

en.about.tactics_title = "Tactical Training";
en.about.tactics = [
  { title: "Project Management (Agile)", desc: "Scrum and Kanban frameworks in real life. Leadership, SLAs and team bottleneck reduction." },
  { title: "Native CRM Systems", desc: "Massive and architected configuration in major players: Kommo, Pipedrive." },
  { title: "n8n / Integration (DevOps)", desc: "Self-hosting via Docker. Aggressive exception handling and mapping via JSON REST Webhooks." },
  { title: "React & Web Architecture", desc: "Typed construction of dynamic Front-End applications using Next.js, TypeScript and componentized interfaces." }
];

fs.writeFileSync(ptPath, JSON.stringify(pt, null, 2));
fs.writeFileSync(enPath, JSON.stringify(en, null, 2));

console.log('About locales fully updated!');
