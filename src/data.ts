import { Project } from './types';
import solarHomeSite from './solar-prints/SolarHomeSite.webp';
import yamamotoSite from './yamamoto-site.png';

export const projects: Project[] = [
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
    id: 'atelier-yamamoto',
    title: 'Atelier Yamamoto',
    category: 'Landing Page & Conversão B2B',
    description: 'Landing page premium para laboratório odontológico de alta performance. Copywriting orientado a conversão, funil de captação de parceiros e identidade visual profissional.',
    tags: ['WordPress', 'Elementor', 'Copywriting', 'SEO', 'Google Ads'],
    stats: [
      { label: 'Conversão', value: 'B2B' },
      { label: 'Entrega', value: '7 dias' }
    ],
    image: yamamotoSite,
    link: 'https://atelieryamamoto.com.br/'
  },
  {
    id: 'multi-platform-sites',
    title: 'Mais de 15 Projetos B2B Entregues',
    category: 'Web, CRM & Automação',
    description: 'Histórico comprovado de implementações B2B completas — de sites institucionais e landing pages a ecossistemas de automação com n8n, Kommo e APIs REST. Todos com 100% on-time delivery.',
    tags: ['React', 'WordPress', 'n8n', 'Kommo', 'REST APIs', 'Node.js'],
    stats: [
      { label: 'On-Time', value: '100%' },
      { label: 'Satisfação', value: '9.2/10' }
    ],
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200'
  }
];
