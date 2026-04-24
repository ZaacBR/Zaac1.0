import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, ExternalLink } from 'lucide-react';
import { useTranslation, Trans } from 'react-i18next';
import { View } from '../types';
import BorderGlow from '../BorderGlow';
import { projects } from '../data';

import profilePhoto from '../eu4.webp';

export default function AboutView({ setView }: { setView: (v: View) => void }) {
  const { t } = useTranslation();
  const handleContactClick = () => {
    window.open("https://wa.me/556192439505?text=Olá!%20Gostaria%20de%20conversar%20sobre%20um%20projeto.", "_blank");
    setView('thanks');
  };

  return (
    <div className="pb-40">
      <section className="max-w-7xl mx-auto px-8 mb-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          <div className="lg:col-span-5 relative">
            <motion.div 
              initial={{ filter: "grayscale(100%)", opacity: 0 }}
              animate={{ filter: "grayscale(100%)", opacity: 1 }}
              whileHover={{ filter: "grayscale(0%)" }}
              transition={{ duration: 0.8 }}
              className="aspect-[3/4] overflow-hidden border border-outline-variant"
            >
              <img 
                src={profilePhoto} 
                className="w-full h-full object-cover"
                alt="Guilherme Izaac Ferreira"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            {/* Name badge below photo */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-5 space-y-1"
            >
              <p className="text-base font-display font-bold tracking-tight text-on-surface">Guilherme Izaac Ferreira</p>
              <p className="text-[0.6rem] font-bold uppercase tracking-[0.25em] text-primary">{t('about.badge')}</p>
            </motion.div>
          </div>
          <div className="lg:col-span-7">
            <h1 className="text-6xl md:text-8xl font-display font-black tracking-tighter leading-none mb-10">
              <span className="block text-on-surface">{t('about.title_line1')}</span>
              <span className="block">{t('about.title_line2')}</span>
            </h1>
            <div className="space-y-8 mb-16">
              <div className="border-l-2 border-primary pl-6">
                <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-3">{t('about.intro.machine_title')}</h4>
                <p className="text-xl font-sans text-on-surface-variant leading-relaxed max-w-3xl">
                  {t('about.intro.machine_desc')}
                </p>
              </div>
              <div className="border-l-2 border-outline-variant pl-6">
                <h4 className="text-sm font-bold uppercase tracking-widest text-on-surface mb-3">{t('about.intro.value_title')}</h4>
                <p className="text-xl font-sans text-on-surface-variant leading-relaxed max-w-3xl">
                  {t('about.intro.value_desc')}
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-outline-variant pt-12">
              <div>
                <div className="text-primary text-4xl md:text-5xl font-display font-black mb-3">15+</div>
                <div className="text-[0.55rem] uppercase tracking-[0.2em] text-on-surface font-bold leading-tight">Projetos B2B<br/>Liderados</div>
              </div>
              <div>
                <div className="text-white text-4xl md:text-5xl font-display font-black mb-3">100%</div>
                <div className="text-[0.55rem] uppercase tracking-[0.2em] text-on-surface font-bold leading-tight">On-time<br/>Delivery</div>
              </div>
              <div>
                <div className="text-primary text-4xl md:text-5xl font-display font-black mb-3">-70%</div>
                <div className="text-[0.55rem] uppercase tracking-[0.2em] text-on-surface font-bold leading-tight">Carga de<br/>Processamento</div>
              </div>
              <div>
                <div className="text-white text-4xl md:text-5xl font-display font-black mb-3">-95%</div>
                <div className="text-[0.55rem] uppercase tracking-[0.2em] text-on-surface font-bold leading-tight">Falhas<br/>Operacionais</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface border-y border-outline-variant py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 group">
            {[
              { 
                title: 'Infraestrutura & Servers (Linux)', 
                desc: 'Gerenciamento rigoroso de ambientes cloud. Redução de gargalos de processamento configurando balanceamento, administração de servidores virtuais via linha de comando Bash e isolamento seguro de ecossistemas via Docker. Operações críticas rodando 24/7.',
                items: ['Arquitetura de Uptime 99.9%', 'Bancos PostgreSQL/Redis', 'Sistemas Linux Bash/Debian', 'Docker / Portainer'] 
              },
              { 
                title: 'Sistemas CRM & ERP', 
                desc: 'Mapeando e extorquindo o máximo de dados comerciais das operações lideradas sem fatigar a equipe. Customização severa e criação de fluxos de eventos nos maiores players (Kommo, Pipedrive), mitigando fricções que geram perda invisível de LTV e abandono do cliente e gargalos de funil.',
                items: ['Bases Kommo, Pipedrive', 'Modelagem de Funis B2B', 'Dashboards de ERP Integrados', 'Parametrização Analítica'] 
              },
              { 
                title: 'Data Engineering (n8n & APIs)', 
                desc: 'Substituindo massivamente o trabalho mecânico por fluxos lógicos executáveis no servidor. Construção de túneis de comunicação complexos (REST, Webhooks) forçando ferramentas separadas a operarem sincronizadas sem redundâncias processuais.',
                items: ['Deploy n8n Self-Hosted', 'Hooks Complexos (Lógica C-Level)', 'APIs WhatsApp / IA', 'Tratamento Violento de Exceções'] 
              },
              { 
                title: 'Soluções Sob Medida (Web)', 
                desc: 'A entrega palpável da lógica. Projetamos interfaces proprietárias (não prateleiras) em aplicações modernas, ultrarrápidas, que consomem e alimentam as engrenagens de infraestrutura, mantendo navegação focada em design UX de alto contraste.',
                items: ['React, Next.js e TypeScript Full', 'Landing Pages Roteadas vs Conversão', 'WordPress Avançado (Headless/Custom)', 'Copywriting, Layout UI/UX e Estética'] 
              }
            ].map((stack, idx) => (
              <div key={stack.title} className="border-t border-outline-variant pt-8 group/stack hover:border-primary transition-colors duration-500">
                <div className="text-4xl font-display font-bold text-primary mb-8 transition-colors">0{idx + 1}</div>
                <div className="font-display font-bold text-xl mb-4 uppercase tracking-tight">{stack.title}</div>
                <p className="text-on-surface-variant font-sans text-sm leading-relaxed mb-6">
                  {stack.desc}
                </p>
                <div className="text-[0.70rem] font-bold text-outline-variant uppercase tracking-widest font-sans space-y-3 border-l border-outline-variant pl-4">
                  {stack.items.map(item => <div key={item} className="group-hover/stack:text-on-surface transition-colors">{item}</div>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Desenvolvimento & Arquitetura de Soluções */}
      <section className="sobre-dev-section bg-background py-32 border-y border-outline-variant">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

            {/* Coluna esquerda: título + badges */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-4"
            >
              <p className="text-[0.6rem] font-sans font-bold uppercase tracking-[0.25em] text-primary mb-4">
                {t('about.dev_section.badge')}
              </p>
              <h2 className="text-4xl md:text-5xl font-display font-black tracking-tighter uppercase text-on-surface leading-tight mb-10 whitespace-pre-wrap">
                {t('about.dev_section.title')}
              </h2>

              {/* Tech badges */}
              <div className="flex flex-wrap gap-2">
                {['PHP', 'React', 'Next.js', 'TypeScript', 'REST APIs', 'SaaS', 'WordPress', 'MySQL'].map((tech) => (
                  <span
                    key={tech}
                    className="text-[0.6rem] font-sans font-bold uppercase tracking-widest px-3 py-1.5 border border-outline-variant text-on-surface-variant hover:border-primary hover:text-primary transition-colors duration-300 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Coluna direita: copy */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-8"
            >
              {/* Quote principal */}
              <blockquote className="border-l-2 border-primary pl-8 mb-12">
                <p className="text-xl md:text-2xl font-sans text-on-surface leading-relaxed font-light">
                  <Trans i18nKey="about.dev_section.quote">
                    Minha abordagem técnica vai além da escrita de código; trata-se de{' '}
                    <span className="text-primary font-semibold">orquestrar sistemas que escalam</span>.
                    Possuo sólida experiência no desenvolvimento de aplicações full-stack e arquitetura de integrações.
                  </Trans>
                </p>
              </blockquote>

              {/* Dois pilares lado a lado */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="border-t border-outline-variant pt-8 group hover:border-primary transition-colors duration-500">
                  <div className="text-4xl font-display font-bold text-primary mb-5 transition-colors">01</div>
                  <h3 className="font-display font-bold text-sm uppercase tracking-widest mb-3">{t('about.dev_section.php_title')}</h3>
                  <p className="text-on-surface-variant font-sans text-sm leading-relaxed">
                    {t('about.dev_section.php_desc')}
                  </p>
                </div>
                <div className="border-t border-outline-variant pt-8 group hover:border-primary transition-colors duration-500">
                  <div className="text-4xl font-display font-bold text-primary mb-5 transition-colors">02</div>
                  <h3 className="font-display font-bold text-sm uppercase tracking-widest mb-3">{t('about.dev_section.js_title')}</h3>
                  <p className="text-on-surface-variant font-sans text-sm leading-relaxed">
                    {t('about.dev_section.js_desc')}
                  </p>
                </div>
              </div>

              {/* Parágrafo final — resolução de gargalos */}
              <div className="border-l-2 border-outline-variant pl-6">
                <p className="text-on-surface-variant font-sans text-base leading-relaxed">
                  <Trans i18nKey="about.dev_section.footer">
                    Não apenas implemento funcionalidades — <span className="text-on-surface font-semibold">resolvo gargalos de infraestrutura e dados</span>,
                    garantindo que o back-end e o front-end se comuniquem com latência mínima e máxima segurança.
                    Seja criando plugins customizados, integrando APIs complexas ou desenvolvendo <span className="text-on-surface font-semibold">SaaS sob medida</span>, meu foco é sempre a
                    eficiência, a testabilidade e o impacto direto nos resultados do negócio.
                  </Trans>
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Trajetória Profissional */}
      <section className="bg-background py-32 border-y border-outline-variant">
        <div className="max-w-7xl mx-auto px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-display font-bold tracking-tighter uppercase text-on-surface mb-20"
          >
            Trajetória
          </motion.h2>
          
          <div className="space-y-16 border-l border-outline-variant/30 pl-8 md:pl-0 md:border-none">
            {/* Experiência 1 */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start group"
            >
              <div className="md:col-span-3 pt-2">
                <div className="text-[0.6rem] font-sans font-bold text-on-surface-variant uppercase tracking-widest group-hover:text-primary transition-colors">Agt 2025 – Presente</div>
              </div>
              <div className="md:col-span-9 md:border-l md:border-outline-variant/30 md:pl-8">
                <h3 className="text-3xl font-display font-bold mb-2">Gestor de Projetos de Automação e CRM</h3>
                <div className="text-primary text-[0.65rem] font-bold uppercase tracking-widest mb-6">Zera Company</div>
                <p className="text-on-surface-variant font-sans leading-relaxed text-sm mb-4 max-w-3xl">
                  Liderança direta em +15 projetos de implementação B2B (Kommo, Pipedrive, Agendor) garantindo 100% de on-time delivery. Estruturação de automação avançada com n8n (+1000 registros diários) sincronizada via webhooks, REST APIs com integrações ativas entre Sheets, WhatsApp IA e CRM. Aumento severo da eficiência operacional do cliente destruindo retrabalho de dados em 95%.
                </p>
                <p className="text-on-surface-variant font-sans leading-relaxed text-sm max-w-3xl">
                  Desenvolvimento e performance de Landing Pages (WordPress/Next) focadas em otimização de conversão (15-22% de taxa média), alinhando Copywriting persuasivo às propostas comerciais fechadas garantindo consistência técnica em toda a esteira do projeto.
                </p>
              </div>
            </motion.div>

            {/* Experiência 2 */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start group pt-8 border-t border-outline-variant/30"
            >
              <div className="md:col-span-3 pt-2">
                <div className="text-[0.6rem] font-sans font-bold text-on-surface-variant uppercase tracking-widest group-hover:text-primary transition-colors">Fev 2023 – Mai 2024</div>
              </div>
              <div className="md:col-span-9 md:border-l md:border-outline-variant/30 md:pl-8">
                <h3 className="text-3xl font-display font-bold mb-2">Analista de T.I & Suporte Avançado</h3>
                <div className="text-white text-[0.65rem] font-bold uppercase tracking-widest mb-6">Kamaleão Color</div>
                <p className="text-on-surface-variant font-sans leading-relaxed text-sm mb-4 max-w-3xl">
                  Gerenciamento da infraestrutura de rede, administração de roteamento, manutenção preventiva e segurança de servidores para a fábrica física. Migração complexa de ecossistemas E-commerce e ERP envolvendo bases com +30.000 clientes e portfólio massivo de produtos e regras.
                </p>
              </div>
            </motion.div>
            
            {/* Experiência 3 */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start group pt-8 border-t border-outline-variant/30"
            >
              <div className="md:col-span-3 pt-2">
                <div className="text-[0.6rem] font-sans font-bold text-on-surface-variant uppercase tracking-widest group-hover:text-primary transition-colors">Autônomo / Dev</div>
              </div>
              <div className="md:col-span-9 md:border-l md:border-outline-variant/30 md:pl-8">
                <h3 className="text-3xl font-display font-bold mb-2">Engenheiro Code/Low-Code & Dev Web</h3>
                <div className="text-white text-[0.65rem] font-bold uppercase tracking-widest mb-6">Projetos Paralelos</div>
                <p className="text-on-surface-variant font-sans leading-relaxed text-sm max-w-3xl border-l-2 border-primary pl-4">
                  Construção de ecossistemas digitais que não dependem de uma única stack. Desenvolvimento sólido via JavaScript ES6+, Front-End imersivo. Orquestração complexa de dados corporativos no Google Sheets cruzificados com dashboards e APIs consumidas pelo Make/Zapier/n8n.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Formação e Certificações */}
      <section className="bg-surface py-32 border-b border-outline-variant">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-24">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tighter uppercase text-on-surface mb-12">Formação</h2>
            
            <div className="space-y-12">
              <div className="border-l border-outline-variant pl-8 relative">
                 <div className="absolute w-2 h-2 bg-primary -left-[4.5px] top-2"></div>
                 <h3 className="font-display font-bold text-xl uppercase mb-2">Análise e Desenv. de Sistemas</h3>
                 <div className="text-on-surface-variant text-[0.65rem] font-bold uppercase tracking-widest mb-4">CEUB • Nível Superior</div>
                 <p className="text-sm text-on-surface-variant font-sans leading-relaxed">
                   Foco central no desenvolvimento rigoroso do currículo aplicado do mercado moderno de Startups e Corporate: Gestão de Sistemas de ponta, Arquitetura da Infraestrutura de TI, compliance com Segurança da Informação. Capacitação intensa em Administração de Projetos tecnológicos de grande escala e gestão orientada a líderes.
                 </p>
              </div>
              
              <div className="border-l border-outline-variant pl-8 relative">
                 <div className="absolute w-2 h-2 bg-white -left-[4.5px] top-2"></div>
                 <h3 className="font-display font-bold text-xl uppercase mb-2">Comunicação e Línguas</h3>
                 <div className="text-on-surface-variant text-[0.65rem] font-bold uppercase tracking-widest mb-4">Internacional</div>
                 <p className="text-sm text-on-surface-variant font-sans leading-relaxed">
                   Inglês Avançado: Domínio completo da documentação técnica internacional (escrita/leitura crítica). Conversação qualificada para negociações com clientes B2B multilingues e integração com stakeholders remotos.
                 </p>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tighter uppercase text-on-surface mb-12">Capacitação Tática</h2>
            
            <ul className="space-y-8">
              <li className="flex items-start gap-5 group">
                <CheckCircle2 className="text-on-surface-variant group-hover:text-primary transition-colors shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-display font-bold text-lg uppercase tracking-tight">Project Management (Agile)</h4>
                  <p className="text-xs font-sans text-on-surface-variant mt-1 leading-relaxed">Frameworks Scrum e Kanban na vida real. Liderança, SLAs e redução de gargalos de equipe.</p>
                </div>
              </li>
              <li className="flex items-start gap-5 group">
                <CheckCircle2 className="text-on-surface-variant group-hover:text-primary transition-colors shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-display font-bold text-lg uppercase tracking-tight">Sistemas Nativos CRM</h4>
                  <p className="text-xs font-sans text-on-surface-variant mt-1 leading-relaxed">Configuração massiva e arquitetada nos principais players: Kommo, Pipedrive.</p>
                </div>
              </li>
              <li className="flex items-start gap-5 group">
                <CheckCircle2 className="text-on-surface-variant group-hover:text-primary transition-colors shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-display font-bold text-lg uppercase tracking-tight">n8n / Integração (DevOps)</h4>
                  <p className="text-xs font-sans text-on-surface-variant mt-1 leading-relaxed">Self-hosting via Docker. Tratamento agressivo de exceções e mapeamento via JSON REST Webhooks.</p>
                </div>
              </li>
              <li className="flex items-start gap-5 group">
                <CheckCircle2 className="text-on-surface-variant group-hover:text-primary transition-colors shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-display font-bold text-lg uppercase tracking-tight">React & Arquitetura Web</h4>
                  <p className="text-xs font-sans text-on-surface-variant mt-1 leading-relaxed">Construção tipada de aplicações Front-End dinâmicas usando Next.js, TypeSript e interfaces componentizadas.</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Statement CTA */}
      <section className="px-8 max-w-7xl mx-auto text-center pt-20">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="bg-primary text-on-primary py-32 px-8 flex flex-col items-center justify-center"
        >
          <h2 className="text-4xl md:text-7xl font-display font-black uppercase tracking-tighter max-w-4xl mx-auto leading-none mb-12">
            {t('about.cta.title_line1')} <br/> {t('about.cta.title_line2')}
          </h2>
          <button 
              onClick={handleContactClick}
              className="bg-black text-white font-sans font-bold px-12 py-5 uppercase tracking-widest text-xs transition-transform hover:scale-105 inline-block"
            >
              {t('about.cta.btn')}
            </button>
        </motion.div>
      </section>
    </div>
  );
}
