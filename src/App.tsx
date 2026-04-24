/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, Suspense, lazy } from 'react';
import { useTranslation } from 'react-i18next';
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

// Data layers and views are extracted for code splitting

const HomeView = lazy(() => import('./views/HomeView'));
const PortfolioView = lazy(() => import('./views/PortfolioView'));
const AboutView = lazy(() => import('./views/AboutView'));
const ExperiencesView = lazy(() => import('./views/ExperiencesView'));
const ContactView = lazy(() => import('./views/ContactView'));
const ThanksView = lazy(() => import('./views/ThanksView'));
const SolarCaseView = lazy(() => import('./views/SolarCaseView'));
const ZaacCaseView = lazy(() => import('./views/ZaacCaseView'));

export default function App() {
  const [currentView, setCurrentView] = useState<View>('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const nextLang = i18n.language.startsWith('pt') ? 'en' : 'pt';
    i18n.changeLanguage(nextLang);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Update document title for SEO
    switch(currentView) {
      case 'home':
        document.title = t('titles.base');
        break;
      case 'portfolio':
        document.title = t('titles.portfolio');
        break;
      case 'about':
        document.title = t('titles.about');
        break;
      case 'experiences':
        document.title = t('titles.experiences');
        break;
      case 'contact':
        document.title = t('titles.contact');
        break;
      case 'solar-case':
        document.title = t('titles.solar_case');
        break;
      case 'zaac-case':
        document.title = t('titles.zaac_case');
        break;
      case 'thanks':
        document.title = t('titles.thanks');
        break;
    }
  }, [currentView, i18n.language, t]);

  const NavLink = ({ view, label }: { view: View, label: string }) => (
    <button 
      onClick={() => { setCurrentView(view); setIsMenuOpen(false); }}
      className={`font-sans text-xs tracking-widest uppercase transition-colors duration-300 hover:text-primary ${currentView === view ? 'text-primary' : 'text-on-surface'}`}
      aria-current={currentView === view ? 'page' : undefined}
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
          <button 
            className="text-2xl font-display font-black text-on-surface tracking-tighter cursor-pointer flex items-center gap-2"
            onClick={() => setCurrentView('home')}
            aria-label="Página Inicial"
          >
            <div>ZAAC<span className="text-primary">.</span></div>
          </button>
          
          <div className="hidden md:flex gap-12 items-center">
            <NavLink view="home" label={t('nav.home')} />
            <NavLink view="portfolio" label={t('nav.portfolio')} />
            <NavLink view="about" label={t('nav.about')} />
            <NavLink view="experiences" label={t('nav.experiences')} />
          </div>

          <div className="flex items-center gap-4">
            {/* Social icons — desktop only */}
            <a
              href="https://www.linkedin.com/in/guilherme-izaac/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hidden md:flex text-on-surface-variant hover:text-primary transition-colors"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://github.com/ZaacBR"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hidden md:flex text-on-surface-variant hover:text-primary transition-colors"
            >
              <Github size={18} />
            </a>
            <button 
              onClick={() => setCurrentView('contact')}
              className="hidden md:block bg-primary text-on-primary font-sans text-xs font-bold uppercase tracking-widest px-8 py-3 transition-colors hover:bg-white hover:text-black"
            >
              {t('nav.contact')}
            </button>
            <button
              onClick={toggleLanguage}
              className="hidden md:flex items-center justify-center font-sans text-xs font-bold uppercase tracking-widest px-3 py-3 border border-outline-variant text-on-surface hover:border-primary hover:text-primary transition-colors"
              aria-label="Toggle language"
            >
              {i18n.language.startsWith('pt') ? 'EN' : 'PT'}
            </button>
            <button 
              className="md:hidden text-on-surface hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? t('nav.close_menu') : t('nav.open_menu')}
            >
              {isMenuOpen ? <X size={28} aria-hidden="true" /> : <Menu size={28} aria-hidden="true" />}
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
                <NavLink view="home" label={t('nav.home')} />
                <NavLink view="portfolio" label={t('nav.portfolio')} />
                <NavLink view="about" label={t('nav.about')} />
                <NavLink view="experiences" label={t('nav.experiences')} />
                <button 
                  onClick={() => { setCurrentView('contact'); setIsMenuOpen(false); }}
                  className="bg-primary text-on-primary text-xs font-bold uppercase tracking-widest px-8 py-4 w-full"
                >
                  {t('nav.contact')}
                </button>
                <button
                  onClick={toggleLanguage}
                  className="flex items-center justify-center font-sans text-xs font-bold uppercase tracking-widest px-8 py-4 w-full border border-outline-variant text-on-surface"
                >
                  {i18n.language.startsWith('pt') ? 'Switch to English' : 'Mudar para Português'}
                </button>
                {/* Social links no mobile */}
                <div className="flex gap-6 pt-2 border-t border-outline-variant/30 w-full">
                  <a
                    href="https://www.linkedin.com/in/guilherme-izaac/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Linkedin size={16} /> LinkedIn
                  </a>
                  <a
                    href="https://github.com/ZaacBR"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Github size={16} /> GitHub
                  </a>
                </div>
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
            <Suspense fallback={
              <div className="h-screen w-full flex items-center justify-center">
                <motion.div 
                  animate={{ opacity: [0.3, 1, 0.3], scale: [0.98, 1, 0.98] }} 
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  className="text-4xl font-display font-black tracking-tighter text-on-surface"
                >
                  ZAAC<span className="text-primary">.</span>
                </motion.div>
              </div>
            }>
              {currentView === 'home' && <HomeView setView={setCurrentView} />}
              {currentView === 'portfolio' && <PortfolioView setView={setCurrentView} />}
              {currentView === 'about' && <AboutView setView={setCurrentView} />}
              {currentView === 'experiences' && <ExperiencesView setView={setCurrentView} />}
              {currentView === 'contact' && <ContactView setView={setCurrentView} />}
              {currentView === 'thanks' && <ThanksView setView={setCurrentView} />}
              {currentView === 'solar-case' && <SolarCaseView setView={setCurrentView} />}
              {currentView === 'zaac-case' && <ZaacCaseView setView={setCurrentView} />}
            </Suspense>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="border-t border-outline-variant py-20 px-8 bg-surface">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          <div>
            <div className="text-4xl font-display font-black text-on-surface mb-6 tracking-tighter">ZAAC<span className="text-primary">.</span></div>
            <p className="text-xs uppercase tracking-widest text-on-surface-variant leading-relaxed max-w-sm font-sans">
              {t('footer.subtitle')}<br />
              {t('footer.rights')}
            </p>
          </div>
          <div className="flex gap-16">
            <div className="flex flex-col gap-4">
              <span className="text-[0.6rem] font-bold text-on-surface-variant tracking-[0.2em] uppercase">{t('footer.contact')}</span>
              <a href="mailto:Guilherme@zaac.com.br" className="text-xs uppercase tracking-widest font-bold text-on-surface hover:text-primary transition-colors">Email</a>
              <a href="https://wa.me/556192439505" target="_blank" rel="noopener noreferrer" className="text-xs uppercase tracking-widest font-bold text-on-surface hover:text-primary transition-colors">WhatsApp</a>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-[0.6rem] font-bold text-on-surface-variant tracking-[0.2em] uppercase">{t('footer.networks')}</span>
              <a href="https://www.linkedin.com/in/guilherme-izaac/" target="_blank" rel="noopener noreferrer" className="text-xs uppercase tracking-widest font-bold text-on-surface hover:text-primary transition-colors">LinkedIn</a>
              <a href="https://github.com/ZaacBR" target="_blank" rel="noopener noreferrer" className="text-xs uppercase tracking-widest font-bold text-on-surface hover:text-primary transition-colors">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
