/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import BorderGlow from './BorderGlow';
import profilePhoto from './GuilhermeFerreiraPB.webp';
import DarkVeil from './DarkVeil';
// Logos
import logoBarra from './logos/Logo-Barra-scaled.png';
import logoSolar from './logos/Logo_solar_da_colina_2.0-removebg-preview.png';
import logoLoriane from './logos/LorianeLogo.png';
import logoMTM from './logos/logo-MTM.png.bv.webp';
import logoClara from './logos/logoClaraInvestContabeis.png';

import solarAppScreenshot from './solardash.webp';
import zaacDesignScreenshot from './zaac-designdash.webp';

// Solar Prints
import solarPrint1 from './solar-prints/screencapture-solar-zaac-br-2026-04-09-00_49_59.webp';
import solarPrint2 from './solar-prints/screencapture-solar-zaac-br-2026-04-09-00_50_23.webp';
import solarPrint3 from './solar-prints/screencapture-solar-zaac-br-2026-04-09-00_50_36.webp';
import solarPrint4 from './solar-prints/screencapture-solar-zaac-br-2026-04-09-00_50_51.webp';
import solarPrint5 from './solar-prints/screencapture-solar-zaac-br-2026-04-09-00_51_04.webp';
import solarPrint6 from './solar-prints/screencapture-solar-zaac-br-2026-04-09-00_51_34.webp';
import solarPrint7 from './solar-prints/screencapture-solar-zaac-br-2026-04-09-00_51_45.webp';
import solarHomeSite from './solar-prints/SolarHomeSite.webp';

// Zaac Prints
import zaacPrint1 from './zaac-prints/screencapture-design-zaac-br-dashboard-2026-04-09-01_10_18.webp';
import zaacPrint2 from './zaac-prints/screencapture-design-zaac-br-dashboard-services-2026-04-09-01_10_27.webp';
import zaacPrint3 from './zaac-prints/screencapture-design-zaac-br-dashboard-professionals-2026-04-09-01_10_35.webp';
import zaacPrint4 from './zaac-prints/screencapture-design-zaac-br-dashboard-clients-2026-04-09-01_10_43.webp';
import zaacPrint5 from './zaac-prints/screencapture-design-zaac-br-dashboard-reports-2026-04-09-01_10_51.webp';

import { 
  Terminal, 
  Database, 
  Globe, 
  Cpu, 
  ArrowRight, 
  CheckCircle2, 
  Linkedin, 
  Github, 
  ExternalLink, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Zap,
  Menu,
  X,
  Code2,
  Workflow,
  BarChart3,
  MessageCircle
} from 'lucide-react';
import { View, Project, Service } from './types';

const projects: Project[] = [
  {
    id: 'solar-colina-ecosystem',
    title: 'Ecossistema Solar da Colina',
    category: 'Hospitalidade & Camping',
    description: 'Sistema full-stack completo: do site de reservas à integração com Airbnb e Booking.com, centralizando toda a operação do camping em um único lugar.',
    tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Channel-Manager'],
    stats: [
      { label: 'Reservas', value: '+200%' },
      { label: 'Ocupação', value: '98%' },
      { label: 'Sincronização', value: 'Real-time' }
    ],
    image: solarHomeSite,
    logicId: 'LOGIC 01'
  },
  {
    id: 'headless-ecommerce',
    title: 'Plataforma de E-commerce Headless',
    category: 'Scalable Commerce',
    description: 'Arquitetura desacoplada garantindo performance extrema em dispositivos móveis e SEO de nível superior.',
    tags: ['Shopify', 'Bling', 'CSS', 'Mercado Pago', '+'],
    stats: [
      { label: 'Page Speed', value: '98/100' },
      { label: 'Conversão', value: '+18%' }
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'multi-platform-sites',
    title: 'Mais de 50 Projetos Entregues',
    category: 'Web & E-commerce',
    description: 'Experiência comprovada no desenvolvimento de dezenas de sites e lojas virtuais. Do básico bem feito com HTML, CSS e JS, até integrações complexas em plataformas líderes de mercado.',
    tags: ['HTML/CSS/JS', 'Shopify', 'Mercado Livre', 'WooCommerce', 'WordPress', '+'],
    stats: [
      { label: 'Projetos', value: '+50' },
      { label: 'Plataformas', value: 'Múltiplas' }
    ],
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200'
  }
];

export default function App() {
  const [currentView, setCurrentView] = useState<View>('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Update document title for SEO
    const baseTitle = "Guilherme Izaac | Soluções Digitais";
    switch(currentView) {
      case 'home':
        document.title = baseTitle;
        break;
      case 'portfolio':
        document.title = `Portfólio | ${baseTitle}`;
        break;
      case 'about':
        document.title = `Sobre Mim | ${baseTitle}`;
        break;
      case 'experiences':
        document.title = `Experiências | ${baseTitle}`;
        break;
      case 'contact':
        document.title = `Contato | ${baseTitle}`;
        break;
      case 'solar-case':
        document.title = `Case: Solar da Colina | ${baseTitle}`;
        break;
      case 'zaac-case':
        document.title = `Case: Zaac Platform | ${baseTitle}`;
        break;
      case 'thanks':
        document.title = `Obrigado | ${baseTitle}`;
        break;
    }
  }, [currentView]);

  const NavLink = ({ view, label }: { view: View, label: string }) => (
    <button 
      onClick={() => { setCurrentView(view); setIsMenuOpen(false); }}
      className={`font-sans text-xs tracking-widest uppercase transition-colors duration-300 hover:text-primary ${currentView === view ? 'text-primary' : 'text-on-surface'}`}
    >
      {label}
    </button>
  );

  return (
    <div className="min-h-screen flex flex-col selection:bg-primary selection:text-on-primary">
      <div className="fixed inset-0 z-[-1] pointer-events-none">
        <DarkVeil
          hueShift={36}
          noiseIntensity={0}
          scanlineIntensity={0}
          speed={1.6}
          scanlineFrequency={0}
          warpAmount={0}
        />
      </div>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/[0.03] backdrop-blur-2xl border-b border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
          <div 
            className="text-2xl font-display font-black text-on-surface tracking-tighter cursor-pointer flex items-center gap-2"
            onClick={() => setCurrentView('home')}
          >
            <div>ZAAC<span className="text-primary">.</span></div>
          </div>
          
          <div className="hidden md:flex gap-12 items-center">
            <NavLink view="home" label="Início" />
            <NavLink view="portfolio" label="Portfólio" />
            <NavLink view="about" label="Sobre" />
            <NavLink view="experiences" label="Experiências" />
          </div>

          <div className="flex items-center gap-6">
            <button 
              onClick={() => setCurrentView('contact')}
              className="hidden md:block bg-primary text-on-primary font-sans text-xs font-bold uppercase tracking-widest px-8 py-3 transition-colors hover:bg-white hover:text-black"
            >
              Contato
            </button>
            <button 
              className="md:hidden text-on-surface hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white/[0.03] backdrop-blur-2xl border-b border-white/[0.05] flex flex-col"
            >
              <div className="p-8 flex flex-col gap-8 items-start">
                <NavLink view="home" label="Início" />
                <NavLink view="portfolio" label="Portfólio" />
                <NavLink view="about" label="Sobre" />
                <NavLink view="experiences" label="Experiências" />
                <button 
                  onClick={() => { setCurrentView('contact'); setIsMenuOpen(false); }}
                  className="bg-primary text-on-primary text-xs font-bold uppercase tracking-widest px-8 py-4 w-full"
                >
                  Contato
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentView}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {currentView === 'home' && <HomeView setView={setCurrentView} />}
            {currentView === 'portfolio' && <PortfolioView setView={setCurrentView} />}
            {currentView === 'about' && <AboutView setView={setCurrentView} />}
            {currentView === 'experiences' && <ExperiencesView setView={setCurrentView} />}
            {currentView === 'contact' && <ContactView setView={setCurrentView} />}
            {currentView === 'thanks' && <ThanksView setView={setCurrentView} />}
            {currentView === 'solar-case' && <SolarCaseView setView={setCurrentView} />}
            {currentView === 'zaac-case' && <ZaacCaseView setView={setCurrentView} />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="border-t border-outline-variant py-20 px-8 bg-surface">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          <div>
            <div className="text-4xl font-display font-black text-on-surface mb-6 tracking-tighter">ZAAC<span className="text-primary">.</span></div>
            <p className="text-xs uppercase tracking-widest text-on-surface-variant leading-relaxed max-w-sm font-sans">
              Soluções Digitais de Extremo Contraste.<br />
              © 2026 Todos os direitos reservados.
            </p>
          </div>
          <div className="flex gap-16">
            <div className="flex flex-col gap-4">
              <span className="text-[0.6rem] font-bold text-on-surface-variant tracking-[0.2em] uppercase">Redes</span>
              <a href="https://www.linkedin.com/in/guilherme-izaac/" className="text-xs uppercase tracking-widest font-bold text-on-surface hover:text-primary transition-colors">LinkedIn</a>
              <a href="https://github.com/ZaacBR" className="text-xs uppercase tracking-widest font-bold text-on-surface hover:text-primary transition-colors">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ThanksView({ setView }: { setView: (v: View) => void }) {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="px-8 max-w-5xl mx-auto pb-40 min-h-[70vh] flex flex-col justify-center items-center text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="space-y-12"
      >
        <div className="flex justify-center mb-8">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center border border-primary/20">
            <CheckCircle2 className="text-primary" size={40} />
          </div>
        </div>
        
        <h1 className="text-5xl md:text-8xl font-display font-black tracking-tighter leading-none">
          MUITO <br/>
          <span className="text-primary">OBRIGADO.</span>
        </h1>
        
        <div className="space-y-6 max-w-2xl mx-auto">
          <p className="text-xl font-sans text-on-surface leading-relaxed">
            Sua mensagem foi redirecionada com sucesso. Nossa equipe já foi notificada sobre o seu interesse.
          </p>
          <div className="bg-surface border border-outline-variant p-8 inline-block">
            <p className="text-sm font-bold uppercase tracking-widest text-primary mb-2">Prazo de Resposta</p>
            <p className="text-lg font-sans text-on-surface-variant">
              Resposta média em até <span className="text-on-surface font-bold">4 horas úteis</span>.
            </p>
          </div>
        </div>

        <div className="pt-12">
          <button 
            onClick={() => setView('home')}
            className="border border-outline-variant text-on-surface font-bold px-12 py-5 uppercase tracking-widest text-xs transition-colors hover:bg-white hover:text-black hover:border-white flex items-center gap-2 mx-auto"
          >
            Voltar para o Início <ArrowRight size={16} />
          </button>
        </div>
      </motion.div>
    </div>
  );
}

function HomeView({ setView }: { setView: (v: View) => void }) {
  return (
    <div className="pb-40 overflow-x-hidden">
      {/* Hero: Fixed Fold CTA */}
      <section className="relative w-full min-h-[75vh] flex flex-col justify-center">
        <div className="px-8 max-w-[1400px] mx-auto w-full space-y-12 relative z-10 pt-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 text-primary text-xs font-bold uppercase tracking-[0.3em]"
          >
            <div className="w-8 h-[2px] bg-primary"></div>
            Soluções Robustas, Resultados Reais
          </motion.div>
          
          <h1 className="type-giant font-display text-on-surface block">
            <motion.span 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="block"
            >
              SOLUÇÕES
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="block text-primary"
            >
              DIGITAIS
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="block text-on-surface"
            >
              SOB MEDIDA.
            </motion.span>
          </h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-6 pt-4"
          >
            <button 
              onClick={() => setView('contact')}
              className="bg-primary text-on-primary font-bold px-12 py-5 uppercase tracking-widest text-xs transition-colors hover:bg-white hover:text-black"
            >
              Iniciar Projeto
            </button>
            <button 
              onClick={() => setView('portfolio')}
              className="border border-outline-variant text-on-surface font-bold px-12 py-5 uppercase tracking-widest text-xs transition-colors hover:bg-white hover:text-black hover:border-white"
            >
              Ver Portfólio
            </button>
          </motion.div>
        </div>
      </section>

      {/* Vision Section: Centralized and Concise */}
      <section className="px-8 max-w-7xl mx-auto py-28">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center space-y-8"
        >
          <div className="w-12 h-[1px] bg-primary mx-auto"></div>
          <p className="text-lg md:text-xl text-on-surface-variant font-sans leading-relaxed">
            Unimos webdesign de alta fidelidade à implementação de sistemas robustos. Desenvolvemos propostas personalizadas que transformam complexidade em eficiência, garantindo que sua fundação digital seja sempre contínua, escalável e impecável.
          </p>
        </motion.div>
      </section>

      {/* Process: Linear Flow */}
      <section className="px-8 max-w-7xl mx-auto py-28">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter uppercase text-on-surface mb-6">PROCESSO</h2>
          <div className="w-full h-[1px] bg-outline-variant"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-outline-variant pb-20">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group space-y-6">
            <div className="text-8xl font-display font-black text-primary mb-8 transition-colors duration-500">01</div>
            <h3 className="text-3xl font-display font-bold tracking-tight">Estudo da Dor</h3>
            <p className="text-on-surface-variant font-sans leading-relaxed text-sm">
              Toda arquitetura brilhante nasce de um problema limitante. Antes de qualquer linha de código ou infraestrutura, mergulhamos na raiz da sua dor corporativa para entender exatamente quais gargalos estão consumindo seus recursos, corrompendo a rotina e blindando a escala natural da sua empresa.
            </p>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="group space-y-6">
            <div className="text-8xl font-display font-black text-primary mb-8 transition-colors duration-500">02</div>
            <h3 className="text-3xl font-display font-bold tracking-tight">Diagnóstico Preciso</h3>
            <p className="text-on-surface-variant font-sans leading-relaxed text-sm">
              Em uma reunião de alinhamento tático, expomos as fragilidades operacionais em um mapa transparente. Dissecamos os requisitos arquitetônicos para amarrar perfeitamente as tecnologias necessárias com os processos já existentes. Traçamos conectores essenciais em comunicação com CRMs e ERPs cruciais.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="group space-y-6">
            <div className="text-8xl font-display font-black text-primary mb-8 transition-colors duration-500">03</div>
            <h3 className="text-3xl font-display font-bold tracking-tight">Proposta de Solução</h3>
            <p className="text-on-surface-variant font-sans leading-relaxed text-sm">
              Apresentamos o mapa definitivo. Uma fundação técnica customizada que centraliza operações desordenadas sem gargalos ou dependência engessada. Validamos o modelo, a velocidade da infraestrutura (Cloud), escopo assertivo e o plano de implantação sob medida para você escalar de imediato.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Manifesto Block */}
      <section className="px-8 max-w-7xl mx-auto py-32 border-b border-outline-variant">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
            className="md:col-span-5"
          >
            <h2 className="text-5xl md:text-6xl font-display font-black leading-[1.1] uppercase tracking-tighter">
              A Direção da Escala <br/> <span className="text-primary italic font-light tracking-tight">Quebra <br/> </span> Sistemas Amadores.
            </h2>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
            className="md:col-span-7 space-y-8 text-xl font-sans text-on-surface-variant leading-relaxed"
          >
            <p>
              Nós não acreditamos no conforto da superfície: enquanto os negócios delegam o controle total da sua gestão ao software fechado oferecido pelo mercado, as rupturas se tornam inevitáveis quando submetidas a uma força desproporcional. 
              As empresas perdem retenção massiva de base nas entediantes "falhas em logs de contatos" ou travamento de APIs de terceiros.
            </p>
            <p>
              Sua equipe exige automação impiedosa construída em fundações modulares. Assumindo a responsabilidade ponta-a-ponta – do Bash Script rodando invisível sob os servidores virtuais no ecossistema até o hook complexo capturando o cliente ideal –, o crescimento se estabiliza. E é o que a gestão robusta faz: previsibilidade.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Statement CTA */}
      <section className="px-8 max-w-7xl mx-auto text-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="bg-primary text-on-primary py-32 px-8 flex flex-col items-center justify-center"
        >
          <h2 className="text-5xl md:text-8xl font-display font-black uppercase tracking-tighter max-w-4xl mx-auto leading-none mb-12">
            ESCALABILIDADE SEM LIMITES.
          </h2>
          <button 
              onClick={() => setView('contact')}
              className="bg-black text-white font-sans font-bold px-12 py-5 uppercase tracking-widest text-xs transition-transform hover:scale-105"
            >
              Agendar Consultoria
            </button>
        </motion.div>
      </section>
    </div>
  );
}

function PortfolioView({ setView }: { setView: (v: View) => void }) {
  const partnerLogos = [
    { src: logoBarra, alt: 'Logo Barra' },
    { src: logoSolar, alt: 'Solar da Colina' },
    { src: logoLoriane, alt: 'Loriane' },
    { src: logoMTM, alt: 'MTM' },
    { src: logoClara, alt: 'Clara Invest Contábeis' },
  ];

  return (
    <div className="px-8 max-w-7xl mx-auto pb-40 space-y-40">
      <header className="pt-10">
            <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 text-on-surface-variant text-xs font-bold uppercase tracking-[0.3em] mb-8"
          >
            Portfólio de Projetos
        </motion.div>
        <h1 className="text-6xl md:text-9xl font-display font-black tracking-tighter leading-none mb-12">
          <motion.span initial={{y: 50, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 0.6}} className="block text-on-surface">CASOS DE</motion.span>
          <motion.span initial={{y: 50, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 0.6, delay: 0.1}} className="block text-primary">SUCESSO</motion.span>
        </h1>
      </header>

      <section className="mb-32">
        <div className="mb-20">
          <h2 className="text-[0.65rem] text-primary font-bold tracking-[0.3em] uppercase mb-6">Software & Engenharia</h2>
          <h3 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter">Sistemas Desenvolvidos.</h3>
          <p className="text-on-surface-variant max-w-2xl mt-6 font-sans text-sm leading-relaxed">
            Plataformas proprietárias e ecossistemas construídos do zero para resolver gargalos corporativos complexos. Modulamos código focado em conversão, velocidade e integração profunda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Espaço para Sistema 1 (Solar da Colina) */}
          <BorderGlow
            edgeSensitivity={30}
            glowColor="40 80 80"
            backgroundColor="#0a0a0a"
            borderRadius={2}
            glowRadius={40}
            glowIntensity={1}
            coneSpread={25}
            animated={false}
            colors={['#c084fc', '#f472b6', '#38bdf8']}
            className="group transition-colors duration-500 overflow-hidden"
          >
            <div className="h-72 border-b border-outline-variant relative overflow-hidden flex items-center justify-center p-4">
              <img src={solarHomeSite} alt="Ecossistema Solar da Colina" loading="lazy" decoding="async" className="w-full h-full object-cover object-left-top border border-outline-variant shadow-2xl rounded-sm opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="p-10 flex-grow flex flex-col">
              <span className="text-[0.6rem] uppercase tracking-widest text-primary font-bold mb-4">SaaS / Gestão de Hospedagem</span>
              <h4 className="text-2xl font-display font-bold mb-4">Ecossistema Solar da Colina</h4>
              <p className="text-on-surface-variant font-sans text-sm leading-relaxed mb-8 flex-grow">
                Plataforma full-stack moderna para gestão completa de reservas. Centraliza o catálogo de hóspedes e a operação administrativa em uma interface única e rápida.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {['React', 'TypeScript', 'Node.js', 'MySQL'].map(tag => (
                  <span key={tag} className="text-[0.6rem] tracking-widest font-bold border border-outline-variant px-3 py-1.5 uppercase font-sans">
                    {tag}
                  </span>
                ))}
              </div>
              <button 
                onClick={() => setView('solar-case')}
                className="text-xs uppercase tracking-widest font-bold text-on-surface hover:text-primary transition-colors flex items-center gap-2 self-start mt-auto"
              >
                Ver Case Completo <ExternalLink size={14} />
              </button>
            </div>
          </BorderGlow>

          {/* Espaço para Sistema 2 (Zaac Platform) */}
          <BorderGlow
            edgeSensitivity={30}
            glowColor="40 80 80"
            backgroundColor="#0a0a0a"
            borderRadius={2}
            glowRadius={40}
            glowIntensity={1}
            coneSpread={25}
            animated={false}
            colors={['#c084fc', '#f472b6', '#38bdf8']}
            className="group transition-colors duration-500 overflow-hidden"
          >
            <div className="h-72 border-b border-outline-variant relative overflow-hidden flex items-center justify-center p-4">
              <img src={zaacDesignScreenshot} alt="Zaac Platform Dashboard" loading="lazy" decoding="async" className="w-full h-full object-cover object-left-top border border-outline-variant shadow-2xl rounded-sm opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="p-10 flex-grow flex flex-col">
              <span className="text-[0.6rem] uppercase tracking-widest text-primary font-bold mb-4">SaaS / Gestão de Estética & Design</span>
              <h4 className="text-2xl font-display font-bold mb-4">Zaac Platform</h4>
              <p className="text-on-surface-variant font-sans text-sm leading-relaxed mb-8 flex-grow">
                Ecossistema premium para gestão de agendamentos e administração de negócios de bem-estar. Interface imersiva focada em UX de alta fidelidade.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {['React', 'TypeScript', 'Node.js', 'Google AI'].map(tag => (
                  <span key={tag} className="text-[0.6rem] tracking-widest font-bold border border-outline-variant px-3 py-1.5 uppercase font-sans">
                    {tag}
                  </span>
                ))}
              </div>
              <button 
                onClick={() => setView('zaac-case')}
                className="text-xs uppercase tracking-widest font-bold text-on-surface hover:text-primary transition-colors flex items-center gap-2 self-start mt-auto"
              >
                Ver Case Completo <ExternalLink size={14} />
              </button>
            </div>
          </BorderGlow>
        </div>
      </section>

      <section className="border-t border-outline-variant pt-32 mb-16">
        <h2 className="text-[0.65rem] text-primary font-bold tracking-[0.3em] uppercase mb-16">Aplicações Diversas</h2>
        <div className="space-y-8">
          {projects.map((project, idx) => (
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              key={project.id}
              className="group flex flex-col lg:flex-row border border-outline-variant bg-surface hover:border-primary transition-colors duration-500 overflow-hidden"
            >
              <div className="lg:w-1/2 p-12 lg:p-20 flex flex-col justify-between order-2 lg:order-1 relative z-10 bg-surface">
                <div>
                  <span className="text-[0.6rem] uppercase tracking-widest text-primary font-bold block mb-8">
                    {project.category}
                  </span>
                  <h2 className="text-4xl lg:text-5xl font-display font-bold mb-8 tracking-tight">{project.title}</h2>
                  <p className="text-on-surface-variant font-sans text-sm max-w-md leading-relaxed mb-12">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[0.6rem] tracking-widest font-bold border border-outline-variant px-3 py-1.5 uppercase font-sans">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 min-h-[400px] relative order-1 lg:order-2 overflow-hidden border-b lg:border-b-0 lg:border-l border-outline-variant">
                <img 
                  src={project.image} 
                  className="absolute inset-0 w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  alt={project.title}
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="border-t border-outline-variant py-32">
        <div className="mb-20">
          <h2 className="text-[0.65rem] text-primary font-bold tracking-[0.3em] uppercase mb-6">A Estrutura Por Trás</h2>
          <h3 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter">Metodologia de Entrega.</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="border border-outline-variant p-10 bg-surface group hover:border-primary transition-colors duration-500">
            <div className="text-5xl font-display font-black text-outline-variant mb-8 group-hover:text-primary transition-colors">/01</div>
            <h4 className="text-2xl font-display font-bold mb-6">Auditoria Linux & Servidores</h4>
            <p className="text-on-surface-variant font-sans text-sm leading-relaxed">
              O diagnóstico severo. Analisamos rotas de rede, segurança de acesso aos bancos e eficiência do provisionamento (Docker). Não construímos o topo antes da base estrutural. Todo o ambiente de servidor cloud suportará, desde o dia zero, o triplo da carga exigida pela operação.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="border border-outline-variant p-10 bg-surface group hover:border-primary transition-colors duration-500">
            <div className="text-5xl font-display font-black text-outline-variant mb-8 group-hover:text-primary transition-colors">/02</div>
            <h4 className="text-2xl font-display font-bold mb-6">Soluções Sob Medida</h4>
            <p className="text-on-surface-variant font-sans text-sm leading-relaxed">
              Onde o código reflete a regra de negócio comercial. Front-ends imersivos construídos via React e modelagens orientadas a escalabilidade. Nenhuma API é construída por capricho técnico, tudo é desenhado visando extrair conversão de leads e fluidez implacável da equipe comercial interligada.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="border border-outline-variant p-10 bg-surface group hover:border-primary transition-colors duration-500">
            <div className="text-5xl font-display font-black text-outline-variant mb-8 group-hover:text-primary transition-colors">/03</div>
            <h4 className="text-2xl font-display font-bold mb-6">Integração Massiva (CRM)</h4>
            <p className="text-on-surface-variant font-sans text-sm leading-relaxed">
              Sementes de tráfego convertidas em ecossistemas de vendas (Kommo/Pipedrive). Usando mapeamento de Webhooks JSON complexos acoplados à engenharia de dados corporativos (n8n), forçamos uma união perfeita: o sistema de captura avisa o CRM central sem necessidade de atritos, cliques manuais ou importações frágeis.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="border-t border-outline-variant pt-20">
        <h2 className="text-[0.65rem] text-primary font-bold tracking-[0.3em] uppercase mb-16 text-center">Ecossistemas em Operação</h2>
        <div className="relative overflow-hidden py-10">
          <motion.div 
            className="flex gap-20 items-center whitespace-nowrap"
            animate={{ x: [0, -2320] }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          >
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-32 items-center">
                {partnerLogos.map((logo, idx) => (
                  <div key={`${i}-${idx}`} className="w-64 h-32 flex items-center justify-center grayscale opacity-30 hover:opacity-100 hover:grayscale-0 transition-opacity duration-300">
                    <img src={logo.src} alt={logo.alt} loading="lazy" decoding="async" className="max-w-full max-h-full object-contain filter brightness-200 contrast-100" referrerPolicy="no-referrer" />
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function AboutView({ setView }: { setView: (v: View) => void }) {
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
                alt="Guilherme Ferreira"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
          <div className="lg:col-span-7">
            <h1 className="text-6xl md:text-8xl font-display font-black tracking-tighter leading-none mb-10">
              <span className="block text-on-surface">SOLUÇÕES</span>
              <span className="block">DIGITAIS.</span>
            </h1>
            <div className="space-y-8 mb-16">
              <div className="border-l-2 border-primary pl-6">
                <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-3">A Perspectiva da Máquina (Infra/Dev)</h4>
                <p className="text-xl font-sans text-on-surface-variant leading-relaxed max-w-3xl">
                  Com base sólida em Análise e Desenvolvimento de Sistemas (ADS), minha abordagem técnica desce ao metal. Administro ambientes complexos de servidores virtuais Linux cloud, infraestruturas conteinerizadas em Docker e bancos de dados transacionais, garantindo que toda a base que sustenta os pesados workflows de dados nunca ceda sob estresse extremo.
                </p>
              </div>
              <div className="border-l-2 border-outline-variant pl-6">
                <h4 className="text-sm font-bold uppercase tracking-widest text-on-surface mb-3">A Perspectiva de Valor (CRM/Business)</h4>
                <p className="text-xl font-sans text-on-surface-variant leading-relaxed max-w-3xl">
                  Mas a tecnologia é apenas um meio. Eu alio essa execução arquitetural implacável à Gestão focada no ciclo de vida do cliente comercial. As dezenas de automações assíncronas, integrações REST corporativas e a customização nativa em CRMs de ponta (Kommo, Pipedrive) são moldadas para garantir uma única coisa: que seu negócio não perca dinheiro ou leads pelo ralo da ineficiência humana.
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
            SUA EMPRESA EXIGE <br/> SOLUÇÕES DE VERDADE.
          </h2>
          <button 
              onClick={handleContactClick}
              className="bg-black text-white font-sans font-bold px-12 py-5 uppercase tracking-widest text-xs transition-transform hover:scale-105 inline-block"
            >
              Iniciar Conversa
            </button>
        </motion.div>
      </section>
    </div>
  );
}

function ContactView({ setView }: { setView: (v: View) => void }) {
  const handleContactClick = () => {
    // Open WhatsApp in a new tab
    window.open("https://wa.me/556192439505?text=Olá!%20Gostaria%20de%20conversar%20sobre%20um%20projeto.", "_blank");
    // Redirect the current page to the thanks view
    setView('thanks');
  };

  return (
    <div className="px-8 max-w-5xl mx-auto pb-40">
      <header className="mb-24 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-9xl font-display font-black tracking-tighter leading-none mb-8"
        >
          INICIAR <br/>
          <span className="text-primary">PROJETO.</span>
        </motion.h1>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="border border-outline-variant bg-surface p-12">
          <h2 className="text-2xl font-display font-bold mb-12 uppercase">Comunicação</h2>
          <div className="space-y-12">
            <div>
              <label className="text-[0.6rem] tracking-[0.2em] uppercase text-on-surface-variant mb-3 block font-bold">Email Direto</label>
              <a href="mailto:Guilherme@zaac.com.br" className="text-lg font-sans font-medium text-on-surface hover:text-primary transition-colors">
                Guilherme@zaac.com.br
              </a>
            </div>
            <div>
              <label className="text-[0.6rem] tracking-[0.2em] uppercase text-on-surface-variant mb-3 block font-bold">WhatsApp</label>
              <a href="https://wa.me/556192439505" target="_blank" rel="noopener text-lg font-sans font-medium text-on-surface hover:text-primary transition-colors block">
                +55 (61) 9243-9505
              </a>
            </div>
            <div>
              <label className="text-[0.6rem] tracking-[0.2em] uppercase text-on-surface-variant mb-3 block font-bold">Local base</label>
              <span className="text-lg font-sans font-medium text-on-surface-variant">Brasília - DF / Global</span>
            </div>
          </div>
        </div>

        <div className="bg-primary text-black p-12 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-display font-bold mb-6 uppercase">Disponibilidade</h2>
            <p className="font-sans font-medium leading-relaxed max-w-sm">
              Agenda aberta para novos projetos. Resposta média em até 4 horas úteis.
            </p>
          </div>
          <div className="mt-16">
            <button 
              onClick={handleContactClick}
              className="bg-black text-white font-sans font-bold uppercase tracking-widest px-8 py-5 text-xs inline-flex items-center gap-4 hover:bg-white hover:text-black transition-colors min-w-full justify-center"
            >
               Iniciar Conversa <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function SolarCaseView({ setView }: { setView: (v: View) => void }) {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="px-8 max-w-5xl mx-auto pb-40">
      <header className="mb-24 pt-10">
        <button 
          onClick={() => setView('portfolio')}
          className="text-xs font-bold uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors mb-12 flex items-center gap-2"
        >
          <ArrowRight className="rotate-180" size={16} /> Voltar para Portfólio
        </button>
        <span className="text-[0.6rem] uppercase tracking-widest text-primary font-bold block mb-6">Case de Desenvolvimento</span>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-8xl font-display font-black tracking-tighter leading-none mb-8"
        >
          SOLAR <br/>
          <span className="text-primary">DA COLINA.</span>
        </motion.h1>
        
        <div className="flex items-center gap-4 mt-8">
          <a 
            href="https://solardacolina.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="border border-outline-variant text-on-surface font-bold px-8 py-4 uppercase tracking-widest text-[0.65rem] transition-colors hover:bg-white hover:text-black hover:border-white inline-flex items-center gap-2"
          >
            Acessar Sistema <ExternalLink size={14} />
          </a>
        </div>
      </header>

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="border border-outline-variant bg-surface mb-24 overflow-hidden p-2"
      >
        <img src={solarAppScreenshot} alt="Solar da Colina Dashboard App" loading="lazy" decoding="async" className="w-full object-cover rounded-sm border border-outline-variant/30 shadow-2xl" />
      </motion.div>

      <section className="mb-32 border-b border-outline-variant pb-32">
        <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter mb-20 text-center">Interface & Operação</h2>
        <div className="space-y-32">
          {[
            { img: solarPrint1, title: "Painel de Controle", desc: "Visão geral em tempo real de ocupação, faturamento e atividades recentes em um layout limpo." },
            { img: solarPrint2, title: "Calendário de Disponibilidade", desc: "Gestão visual e intuitiva para controle de reservas e bloqueio estratégico de datas." },
            { img: solarPrint3, title: "Gestão de Acomodações", desc: "Cadastro e edição detalhada de unidades (Camping, Suítes, Chalés) com controle de capacidade." },
            { img: solarPrint4, title: "Fluxo de Check-in & Out", desc: "Monitoramento diário de chegadas e partidas, garantindo fluidez na recepção e limpeza." },
            { img: solarPrint5, title: "Gestão de Preços", desc: "Configuração de inteligência tarifária para altas temporadas e feriados programados." },
            { img: solarPrint6, title: "Diretório de Usuários", desc: "Controle rigoroso de permissões e logs de auditoria para monitorar toda a atividade administrativa." },
            { img: solarPrint7, title: "Interface Pública de Reserva", desc: "Fluxo minimalista focado em conversão para que o cliente reserve sua estadia em segundos." }
          ].map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center"
            >
              <div className={`md:col-span-8 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                <div className="border border-outline-variant p-2 bg-surface shadow-xl">
                  <img src={item.img} alt={item.title} loading="lazy" decoding="async" className="w-full h-auto object-cover" />
                </div>
              </div>
              <div className={`md:col-span-4 space-y-6 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                <div className="text-primary font-display font-black text-4xl">0{index + 1}</div>
                <h3 className="text-2xl font-display font-bold uppercase tracking-tight">{item.title}</h3>
                <p className="text-on-surface-variant font-sans text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-16 item-start">
        <div className="md:col-span-8 space-y-16">
          <section>
            <h2 className="text-2xl font-display font-bold mb-6 uppercase border-l-2 border-primary pl-4">Propósito</h2>
            <p className="text-on-surface-variant font-sans text-lg leading-relaxed">
              Facilitar o processo de reserva para os clientes e centralizar toda a operação administrativa em uma única interface intuitiva e potente. O Solar da Colina é uma plataforma full-stack moderna desenvolvida para a gestão completa de reservas e administração de uma propriedade de hospedagem de alto fluxo.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold mb-6 uppercase border-l-2 border-primary pl-4">Motor Administrativo (Admin)</h2>
            <ul className="space-y-4 font-sans text-on-surface-variant leading-relaxed">
              <li><strong className="text-on-surface">Dashboard de Visão Geral:</strong> Métricas instantâneas sobre taxas de ocupação, faturamento e tarefas do dia.</li>
              <li><strong className="text-on-surface">Calendário Interativo:</strong> Gestão visual e rápida para visualizar disponibilidade na linha do tempo e forçar bloqueios.</li>
              <li><strong className="text-on-surface">Quadro Kanban:</strong> Sistema ágil para movimentar reservadas baseadas no status (Pendente, Negociação, Check-in, Finalizado).</li>
              <li><strong className="text-on-surface">Gestão de Preços Dinâmicos:</strong> Setup de regras tarifárias baseadas em alta/baixa temporada e taxas adicionais escaláveis.</li>
              <li><strong className="text-on-surface">Sincronização iCal:</strong> Integração com plataformas externas como Airbnb e Booking.com.</li>
              <li><strong className="text-on-surface">Gestão de Check-in:</strong> Fluxo extremamente agilizado para recepção rápida dos hóspedes e emissão de notas.</li>
              <li><strong className="text-on-surface">Controle de Usuários:</strong> Gerenciamento de acessos e permissões para garantir o controle da operação.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold mb-6 uppercase border-l-2 border-primary pl-4">Experiência do Cliente</h2>
            <ul className="space-y-4 font-sans text-on-surface-variant leading-relaxed">
              <li><strong className="text-on-surface">Catálogo de Acomodações:</strong> Visualização rica e detalhada de opções de hospedagem, incluindo Camping, Quartos e Chalés.</li>
              <li><strong className="text-on-surface">Sistema de Reserva:</strong> Fluxo minimalista e rápido, desde a escolha da data no calendário até a confirmação do pagamento final.</li>
              <li><strong className="text-on-surface">Painel do Cliente:</strong> Histórico de faturas, reservas antigas e administração fluída do perfil logado.</li>
              <li><strong className="text-on-surface">Políticas & Suporte:</strong> Páginas informativas sobre regras da casa e canais de contato com a equipe.</li>
            </ul>
          </section>
        </div>
      </div>


    </div>
  );
}

function ZaacCaseView({ setView }: { setView: (v: View) => void }) {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="px-8 max-w-5xl mx-auto pb-40">
      <header className="mb-24 pt-10">
        <button 
          onClick={() => setView('portfolio')}
          className="text-xs font-bold uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors mb-12 flex items-center gap-2"
        >
          <ArrowRight className="rotate-180" size={16} /> Voltar para Portfólio
        </button>
        <span className="text-[0.6rem] uppercase tracking-widest text-primary font-bold block mb-6">Case de Desenvolvimento</span>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-8xl font-display font-black tracking-tighter leading-none mb-8"
        >
          ZAAC <br/>
          <span className="text-primary">PLATFORM.</span>
        </motion.h1>
      </header>

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="border border-outline-variant bg-surface mb-24 overflow-hidden p-2"
      >
        <img src={zaacDesignScreenshot} alt="Zaac Platform Dashboard" loading="lazy" decoding="async" className="w-full object-cover rounded-sm border border-outline-variant/30 shadow-2xl" />
      </motion.div>

      <section className="mb-32 border-b border-outline-variant pb-32">
        <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter mb-20 text-center">Interface & Operação</h2>
        <div className="space-y-32">
          {[
            { img: zaacPrint1, title: "Visão Geral", desc: "Métricas de desempenho, faturamento e fluxo de clientes em tempo real no dashboard central." },
            { img: zaacPrint2, title: "Gestão de Serviços", desc: "Visualização e controle detalhado do catálogo de procedimentos (Cortes, Coloração, Massagens)." },
            { img: zaacPrint3, title: "Gestão de Equipe", desc: "Controle e acompanhamento visual da agenda dos profissionais e especialistas da clínica." },
            { img: zaacPrint4, title: "CRM / Base de Clientes", desc: "Gestão centralizada de dados dos clientes e histórico completo de atendimentos." },
            { img: zaacPrint5, title: "Relatórios Avançados", desc: "Análise de dados avançada baseada em métricas e insights para tomada de decisão estratégica." }
          ].map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center"
            >
              <div className={`md:col-span-8 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                <div className="border border-outline-variant p-2 bg-surface shadow-xl">
                  <img src={item.img} alt={item.title} loading="lazy" decoding="async" className="w-full h-auto object-cover" />
                </div>
              </div>
              <div className={`md:col-span-4 space-y-6 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                <div className="text-primary font-display font-black text-4xl">0{index + 1}</div>
                <h3 className="text-2xl font-display font-bold uppercase tracking-tight">{item.title}</h3>
                <p className="text-on-surface-variant font-sans text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-16 item-start">
        <div className="md:col-span-8 space-y-16">
          <section>
            <h2 className="text-2xl font-display font-bold mb-6 uppercase border-l-2 border-primary pl-4">Propósito</h2>
            <p className="text-on-surface-variant font-sans text-lg leading-relaxed">
              Transformar a experiência de autocuidado em um "Santuário Digital", facilitando o processo de agendamento para os clientes e centralizando toda a operação administrativa em uma interface focada em design premium e eficiência. A Zaac Design é uma plataforma full-stack moderna para gestão de negócios nos setores de estética e bem-estar.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold mb-6 uppercase border-l-2 border-primary pl-4">Administração & Dashboard</h2>
            <ul className="space-y-4 font-sans text-on-surface-variant leading-relaxed">
              <li><strong className="text-on-surface">Visão Geral de Métricas:</strong> Acompanhamento de desempenho, faturamento e fluxo de clientes em tempo real.</li>
              <li><strong className="text-on-surface">Agenda Inteligente:</strong> Gestão visual e intuitiva de horários dos profissionais com bloqueio de intervalos.</li>
              <li><strong className="text-on-surface">Gestão de Equipe:</strong> Controle total sobre o cadastro de procedimentos e profissionais especialistas.</li>
              <li><strong className="text-on-surface">CRM Centralizado:</strong> Base de dados rica com histórico completo de atendimentos por cliente.</li>
              <li><strong className="text-on-surface">IA Suporte:</strong> Integração com Google Gemini para suporte e automação inteligente no atendimento.</li>
              <li><strong className="text-on-surface">Design System:</strong> Customização total do tema (Light/Dark mode) e personalização da interface.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold mb-6 uppercase border-l-2 border-primary pl-4">Experiência do Cliente</h2>
            <ul className="space-y-4 font-sans text-on-surface-variant leading-relaxed">
              <li><strong className="text-on-surface">Catálogo de Serviços:</strong> Visualização detalhada e elegante de procedimentos como corte, coloração e massagens.</li>
              <li><strong className="text-on-surface">Agendamento Inteligente:</strong> Fluxo simplificado em 4 passos (Serviço → Especialista → Data/Hora → Confirmação).</li>
              <li><strong className="text-on-surface">Painel do Cliente:</strong> Área dedicada para histórico de sessões e gestão de perfil personalizada.</li>
              <li><strong className="text-on-surface">Landing Page Premium:</strong> Experiência visual imersiva que reflete a identidade luxuosa da marca.</li>
            </ul>
          </section>
        </div>

        <div className="md:col-span-4 space-y-12">
          <div className="border border-outline-variant p-8 bg-background">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6">Stack & Engine</h3>
            <ul className="space-y-6 font-sans text-sm text-on-surface-variant">
              <li className="border-b border-outline-variant/30 pb-4"><strong className="block text-on-surface mb-1">Frontend</strong> React 19, TypeScript e Tailwind CSS 4</li>
              <li className="border-b border-outline-variant/30 pb-4"><strong className="block text-on-surface mb-1">Animações</strong> Motion (Framer Motion)</li>
              <li className="border-b border-outline-variant/30 pb-4"><strong className="block text-on-surface mb-1">Inteligência Artificial</strong> Google Generative AI</li>
              <li className="border-b border-outline-variant/30 pb-4"><strong className="block text-on-surface mb-1">Backend</strong> Node.js com Express</li>
              <li className="pt-2"><strong className="block text-on-surface mb-1">Design System</strong> Custom Theme (Dark/Light)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function ExperiencesView({ setView }: { setView: (v: View) => void }) {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="px-8 max-w-7xl mx-auto pb-40">
      <header className="pt-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-4 text-on-surface-variant text-xs font-bold uppercase tracking-[0.3em] mb-8"
        >
          Minha Trajetória
        </motion.div>
        <h1 className="text-6xl md:text-9xl font-display font-black tracking-tighter leading-none mb-12">
          <motion.span initial={{y: 50, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 0.6}} className="block text-on-surface">EXPERIÊNCIAS &</motion.span>
          <motion.span initial={{y: 50, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 0.6, delay: 0.1}} className="block text-primary">HABILIDADES</motion.span>
        </h1>
      </header>

      <section className="mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          
          <div className="border border-outline-variant p-10 bg-surface group hover:border-primary transition-colors duration-500">
            <h4 className="text-2xl font-display font-bold mb-4 uppercase">WordPress & Front-End</h4>
            <p className="text-on-surface-variant font-sans text-sm leading-relaxed mb-6">
              Desenvolvimento e manutenção em WordPress / Customização de landing pages (front-end). Costumo utilizar Wordpress com Elementor para o desenvolvimento das páginas, e HTML/CSS/JS para customizações. Utilizo ReactJS para desenvolvimento Frontend em projetos fora do ecossistema Wordpress.
            </p>
          </div>

          <div className="border border-outline-variant p-10 bg-surface group hover:border-primary transition-colors duration-500">
            <h4 className="text-2xl font-display font-bold mb-4 uppercase">Integração de APIs & CRMs</h4>
            <p className="text-on-surface-variant font-sans text-sm leading-relaxed mb-6">
              Integração de formulários nativos (Elementor, Google, Meta) e envio de dados para o CRM <strong className="text-on-surface hover:text-primary transition-colors"><a href="https://kommo.com" target="_blank" rel="noreferrer">Kommo.com</a></strong>. Automação de fluxos utilizando Make.com e N8N. Deploy e gerenciamento de VPS Linux com Docker Portainer para instâncias self-hosted do N8N.
            </p>
          </div>

          <div className="border border-outline-variant p-10 bg-surface group hover:border-primary transition-colors duration-500">
            <h4 className="text-2xl font-display font-bold mb-4 uppercase">Automações Zapier & Make</h4>
            <p className="text-on-surface-variant font-sans text-sm leading-relaxed mb-6">
              Construção de integrações entre ferramentas e formulários centralizando-as em planilhas para gerar dashboards, conectando todos os leads com o CRM para tratamento dos dados ou construindo sistemas de atendimento com o n8n.
            </p>
          </div>

          <div className="border border-outline-variant p-10 bg-surface group hover:border-primary transition-colors duration-500">
            <h4 className="text-2xl font-display font-bold mb-4 uppercase">Implementação de Tracking (GA4 & GTM)</h4>
            <p className="text-on-surface-variant font-sans text-sm leading-relaxed mb-6">
              Configuração pelo Google Tag Manager via native do WordPress para inserir tags em todas páginas. Monitoramento no Google Analytics para feedbacks e otimizações de performance, juntamente com a equipe de tráfego.
            </p>
          </div>

          <div className="border border-outline-variant p-10 bg-surface group hover:border-primary transition-colors duration-500">
            <h4 className="text-2xl font-display font-bold mb-4 uppercase">Integrações de Mídia</h4>
            <p className="text-on-surface-variant font-sans text-sm leading-relaxed mb-6">
              (Google Ads e Meta Ads). Configuração de tags rastreáveis utilizando métodos nativos de plataformas ou injeção manual na tag Head das páginas, mantendo a métrica de vendas e leads 100% precisa.
            </p>
          </div>

          <div className="border border-outline-variant p-10 bg-surface group hover:border-primary transition-colors duration-500">
            <h4 className="text-2xl font-display font-bold mb-4 uppercase">Organização de Fluxos de Dados</h4>
            <p className="text-on-surface-variant font-sans text-sm leading-relaxed mb-6">
              Práticas ágeis (Kanban) na gestão processual. Ferramentas como Notion e ClickUp utilizadas amplamente, bem como desenvolvimento de ferramentas proprietárias para acompanhamento de progressos e aprovação de protótipos.
            </p>
          </div>

          <div className="border border-outline-variant p-10 bg-surface group hover:border-primary transition-colors duration-500 md:col-span-2">
            <h4 className="text-2xl font-display font-bold mb-4 uppercase">Diagnóstico e Solução de Problemas Técnicos</h4>
            <p className="text-on-surface-variant font-sans text-sm leading-relaxed mb-6">
              Iniciado em 2016 na área de tecnologia (Grupo Marista). Minha vivência une o entendimento das "dores" dos clientes aos parâmetros técnicos necessários para resolver não apenas falhas em anúncios, mas investigar e resolver os fluxos empresariais e operacionais por completo.
            </p>
          </div>

          <div className="border border-outline-variant p-10 bg-surface group hover:border-primary transition-colors duration-500 md:col-span-2">
            <h4 className="text-2xl font-display font-bold mb-4 uppercase">Otimização & Processos Extras</h4>
            <ul className="space-y-4 font-sans text-sm text-on-surface-variant pt-2">
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary"></div> Criação ágil de Copy's baseadas nas transcrições de reuniões gravadas com IA.</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary"></div> Gestão de repositórios de referências de UI/UX.</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary"></div> Configuração de DNS e gerenciamento de infraestrutura de hospedagens/servidores.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Statement CTA */}
      <section className="text-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="bg-primary text-on-primary py-32 px-8 flex flex-col items-center justify-center"
        >
          <h2 className="text-5xl md:text-8xl font-display font-black uppercase tracking-tighter max-w-4xl mx-auto leading-none mb-12">
            PRONTO PARA ESCALAR?
          </h2>
          <button 
              onClick={() => setView('contact')}
              className="bg-black text-white font-sans font-bold px-12 py-5 uppercase tracking-widest text-xs transition-transform hover:scale-105"
            >
              Entrar em Contato
            </button>
        </motion.div>
      </section>
    </div>
  );
}
