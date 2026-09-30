/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';

interface ServiceItem {
  id: string;
  title: string;
  category: string;
  description: string;
  icon: string;
  details: string;
  deliverables: string[];
}

interface ProjectItem {
  id: string;
  title: string;
  location: string;
  category: string;
  categorySlug: 'public' | 'industrial' | 'corporate' | 'rehabilitation';
  image: string;
  alt: string;
  description: string;
  badge: string;
  badgeClass: string;
}

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [projectFilter, setProjectFilter] = useState<string>('all');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Quotation Form State
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    serviceType: 'recuperacao',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const servicesData: ServiceItem[] = [
    {
      id: 'recuperacao',
      title: 'Recuperação e Restauração Ambiental',
      category: 'Ambiente',
      description: 'Recuperação de áreas degradadas, reflorestação e revegetação, recuperação de solos e reabilitação de áreas afectadas por obras e exploração de recursos naturais.',
      icon: 'forest',
      details: 'A nossa engenharia de restauração ecológica devolve a fertilidade e a biodiversidade a ecossistemas impactados por intervenções humanas ou industriais. Utilizamos espécies nativas adaptadas ao clima de Angola.',
      deliverables: ['Estudo edáfico e topográfico', 'Plantio de espécies endémicas', 'Nutrição e estabilização de taludes', 'Monitorizacão botânica bienal']
    },
    {
      id: 'jardinagem',
      title: 'Jardinagem e Paisagismo',
      category: 'Paisagismo',
      description: 'Criação e manutenção de jardins, paisagismo para empresas, condomínios, hotéis, escolas e espaços públicos, arborização urbana e manutenção de áreas verdes.',
      icon: 'yard',
      details: 'Desenhamos e executamos espaços verdes de excelência que valorizam a arquitectura institucional e residencial. Projectos que aliam estética tropical, rega inteligente e baixa manutenção.',
      deliverables: ['Projecto paisagístico 3D', 'Instalação de relvados e canteiros', 'Sistemas de rega gota-a-gota', 'Contratos de manutenção permanente']
    },
    {
      id: 'oilgas',
      title: 'Soluções para Oil & Gas e Mineração',
      category: 'Industrial',
      description: 'Recuperação de áreas afectadas por operações extractivas, reabilitação e revegetação de zonas de intervenção e monitorização das medidas de recuperação.',
      icon: 'oil_barrel',
      details: 'Serviços especializados para o sector petrolífero e mineiro com cumprimento estrito das normas internacionais de QHSE (Qualidade, Segurança, Saúde e Ambiente).',
      deliverables: ['Limpeza de faixas de segurança', 'Poda industrial e destronca controlada', 'Reabilitação de zonas extractivas', 'Relatórios de conformidade ambiental']
    },
    {
      id: 'limpeza',
      title: 'Limpeza, Higienização e Controlo de Pragas',
      category: 'Serviços',
      description: 'Limpeza e conservação de escritórios, edifícios e instalações industriais, recolha e acondicionamento de resíduos, desinfestação, controlo integrado de pragas, fumigação e higienização.',
      icon: 'pest_control',
      details: 'Asseguramos ambientes corporativos e industriais impecáveis, livres de vectores patogénicos e com processos certificados de higienização.',
      deliverables: ['Higienização industrial profunda', 'Controlo integrado de pragas (CIP)', 'Gestão e recolha de resíduos', 'Certificados de salubridade']
    },
    {
      id: 'agropecuaria',
      title: 'Agropecuária',
      category: 'Agronegócio',
      description: 'Desenvolvimento de projectos agropecuários com boas práticas agrícolas e gestão responsável dos recursos naturais e ordenamento de terrenos agrícolas.',
      icon: 'agriculture',
      details: 'Apoio técnico no ordenamento de terras agrícolas, selecção de culturas e implementação de práticas sustentáveis para fomento da segurança alimentar em Angola.',
      deliverables: ['Ordenamento agrário e topografia', 'Preparação e correcção de solos', 'Assistência técnica agrícola', 'Gestão de recursos hídricos']
    },
    {
      id: 'responsabilidade',
      title: 'Responsabilidade Social',
      category: 'Comunidade',
      description: 'Projecto Árvores e Plantas de Suhita, acções de sensibilização com trabalhadores e comunidades e doações contínuas de árvores e espécies botânicas nativas.',
      icon: 'volunteer_activism',
      details: 'Compromisso profundo com as comunidades locais através de campanhas de educação ambiental, doação de árvores e envolvimento activo dos cidadãos.',
      deliverables: ['Projecto Árvores de Suhita', 'Workshops de educação ambiental', 'Doação de mudas nativas', 'Parcerias com escolas e municípios']
    }
  ];

  const projectsData: ProjectItem[] = [
    {
      id: 'p1',
      title: 'Ministério da Educação',
      location: 'Luanda · Sector Público',
      category: 'Manutenção Permanente',
      categorySlug: 'public',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBSlHxOy0VVXF2sqosu0V-_G_FwmIq8YS0LdVKBRGahPuSNWYldRM5iKLf0KGQElfgDzpl2-CA18XVhGXH3eEGAJmMKfLB-D42su8OXDCUmiw70FBZazvWnK8jUz5M5gJr8cneUJSYeWm__KqzN6djfCy-GVYRWyVfqr9YMBs2suey1436s2lJyIlgiUWdlznCPCwMpwilV20siAOPQ3GCZXnjBEg1yiOwDTN69nNwB0IiyACFTXp658g',
      alt: 'Ministério da Educação gardens in Luanda',
      description: 'Manutenção contínua dos jardins e áreas verdes: corte e tratamento de relvados, poda, limpeza, rega e cuidados regulares com a vegetação, assegurando uma apresentação cuidada ao longo de todo o ano.',
      badge: 'Contrato Anual Activo',
      badgeClass: 'text-canopy-green bg-honeydew'
    },
    {
      id: 'p2',
      title: 'Refinaria de Luanda',
      location: 'Luanda · Sector Industrial',
      category: 'Oil & Gas',
      categorySlug: 'industrial',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBjI5eehCLMaF7mBZ8oabfhVhtGkUEcNUekNJX8BPXfW03ksqNfDxA3M8iJRhKNCBOVb7nlXqUmtRfp7xJNQWfhmw1OgUhJ3dDw2eBgPnxz0jjc_DFVu7P5epWmlSr_aydwdGzb6R0jIPv8aaLC8R7psniF3Lfn5ZBQ1rIidFHy8HvqdlGRqw8ZXtAL044P7R6RsXN6VcDmon7BG5ZAzqgWnQgkkpZYxtSOBsOR_BMp03b5m_ovMi763g',
      alt: 'Refinaria de Luanda safety zones',
      description: 'Trabalhos de poda, remoção controlada de árvores e destronca com limpeza e recolha rigorosa dos resíduos vegetais, executados com elevadas normas de segurança industrial e protecção ambiental.',
      badge: 'Segurança Industrial',
      badgeClass: 'text-toasted-almond bg-tertiary-fixed/30'
    },
    {
      id: 'p3',
      title: 'Governo Provincial do Bengo',
      location: 'Província do Bengo',
      category: 'Paisagismo Público',
      categorySlug: 'public',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBye47IW84kHQpnFTLWCrZTzV08lpB9K3xh7c6K10iqV1Ra-n70xq4i_fF3ONnM90C_v2b0jYu9MDf_0th2xep5RHOXF-hI0RYYSk0h_ULhvFSg8jTvsimGFNR4mzS-UWk5L6dWybnsZ_LJdrX1zZGkNyYgdNXXWoQGO9ngq4v06xhsp5qALQF1lZtqF1vmAzEGcCnkqtRZzbBI0vCggjCHGSGZqkI1kU22cNDHNk1a1Dg1D-5NBmQuQQ',
      alt: 'Bengo Province landscaped park',
      description: 'Preparação de solos e instalação técnica de áreas relvadas que trouxeram uniformidade, valorização visual e integração paisagística adaptada aos contextos institucionais da província.',
      badge: 'Intervenção Territorial',
      badgeClass: 'text-canopy-green bg-honeydew'
    },
    {
      id: 'p4',
      title: 'Fundo Soberano de Angola',
      location: 'Luanda · Sector Financeiro',
      category: 'Corporativo & Design',
      categorySlug: 'corporate',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDU95DznJk2yydy2205Fo-dtfG1AwVGFxtHgzRf2mbD4Q7hCFi7VrvSjWFhF-2Pht6yfvxTQ1xFJOJXgJd6e0wlVtLbGDnI0NfqxJMbJ_NMrTozYfNcf-jLNXOqeye_VcMNE3v62c-t2ItT2nxrgngCBf6qeWZBnhQNWAwZ_t9IzXL_Mgco9nIyvZsNsvSknILXWV4qUTzPLoGY8C7O3u_zJcZX-L0MsluNvbo1ANbZWgNrUTbSM4eXVQ',
      alt: 'Sovereign Wealth Fund of Angola terrace',
      description: 'Criação de jardins e ornamentação botânica com plantas em vasos seleccionadas para harmonizar com a arquitectura corporativa, elevando a estética e conforto do ambiente institucional.',
      badge: 'Arquitectura Paisagística',
      badgeClass: 'text-canopy-green bg-honeydew'
    },
    {
      id: 'p5',
      title: 'Icolo e Bengo',
      location: 'Icolo e Bengo',
      category: 'Reabilitação',
      categorySlug: 'rehabilitation',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC4Iz9PqYdAwkFhJyuR-_Z59K7D4zWEdacKhaGXk__Wpgrhe89xW7_Xm9Z5IWdzKb5iWteGD51PpYQI5H2aKa2G-IZiIsdzcKN3G61YWaTTe2BPpLBrBFa1G3yqYJ69dQ7pG5NuqsBwLjNlRP_KOeVoxH_S9cSGmawNijKWAddHiACOqyEG-LBbvh92oczP02gKKz6koAKZIlG1lHs01lbxjianOzciUTrXk0ERMCtylbIHnkKjCtuPmA',
      alt: 'Icolo e Bengo rehabilitated garden',
      description: 'Recuperação integral de jardim degradado, restaurando o equilíbrio edáfico, sistemas de nutrição vegetal e devolvendo vivacidade botânica e dignidade à área verde.',
      badge: 'Restauração Concluída',
      badgeClass: 'text-canopy-green bg-honeydew'
    },
    {
      id: 'p6',
      title: 'Orion',
      location: 'Luanda · Sector Empresarial',
      category: 'Manutenção Contínua',
      categorySlug: 'industrial',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBzi20won2lGu1xHq4FnaIx8p9Qvf5_v00TZJZXVg0ZraOQBLGlH8it7UybdalvTCC3dtWmz2krLy3wpBRvM-kSkaI8wxM6Re4mqLbNyQY5QDzhRFBY41j_iKDnvz7MR4ApTcAi7Oztz96O3KJA-rTUIPw1KgjthkEWGbfECnAuT4C0smBv7fEZ_xZCL2M93hn5FIEis1HcUE1ol_stwhGWk_F68HhaSP92lJDuLv42qURDJU0gLLOt9Q',
      alt: 'Orion commercial grounds',
      description: 'Programa integrado de recuperação e manutenção contínua das áreas verdes do complexo, garantindo durabilidade das espécies e preservação visual ininterrupta.',
      badge: 'Gestão Integral',
      badgeClass: 'text-canopy-green bg-honeydew'
    }
  ];

  const filteredProjects = projectFilter === 'all'
    ? projectsData
    : projectsData.filter(p => p.categorySlug === projectFilter);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setFormData({ name: '', company: '', phone: '', serviceType: 'recuperacao', message: '' });
    setTimeout(() => setFormSubmitted(false), 6000);
  };

  return (
    <div className="min-h-screen bg-surface font-body-md text-body-md text-on-surface antialiased flex flex-col selection:bg-moss-green selection:text-white">
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-porcelain/90 backdrop-blur-md shadow-[0_16px_36px_-6px_rgba(25,35,26,0.08)]">
        <div className="h-20 max-w-[1280px] mx-auto px-5 md:px-8 lg:px-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img
              alt="SOGREEN Logo"
              className="h-8 w-auto object-contain"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfjEt4awq8TL1X8BY4DPhm0SEkM35_BU5PIGvCF-KrJ6d6CmIR7ILyndvi9ke_Rqgia47G-et9V38uqdjqRqg9yH-rajzs3zRU-yIZ1YsE0NFDLChIFg1kBb9T5iXMgLLFCdxFUy6_JWXXfaylI_0pTSkk6Qr23lc8G_Ds21tPQ_av3ehBL4kMiK5s6zFkPAmi_G_qSqKNNF3VQHfUQoRnsJmP04TXmTmUc0P6TNKJ3bcMEeijhVcC6A"
              referrerPolicy="no-referrer"
            />
            <span className="font-headline-sm text-xl text-primary tracking-tight font-bold">SOGREEN</span>
          </div>

          <nav className="hidden xl:flex items-center gap-2">
            {[
              { id: 'hero', label: 'Início' },
              { id: 'servicos', label: 'Serviços' },
              { id: 'valores', label: 'Valores' },
              { id: 'projectos', label: 'Projectos' },
              { id: 'clientes', label: 'Clientes' },
              { id: 'sobre', label: 'Sobre Nós' },
              { id: 'faq', label: 'FAQ' },
              { id: 'contactos', label: 'Contactos' }
            ].map(item => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setActiveSection(item.id)}
                className={`font-label-md text-sm px-3 py-1.5 rounded-lg transition-colors ${
                  activeSection === item.id
                    ? 'bg-primary-container text-on-primary font-bold'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="#contactos"
              className="hidden sm:inline-flex items-center justify-center font-label-lg text-sm px-5 py-2.5 bg-deep-forest text-on-primary rounded-lg hover:bg-canopy-green transition-all shadow-[0_2px_8px_rgba(25,35,26,0.04)] hover:-translate-y-0.5 whitespace-nowrap"
            >
              Pedir Orçamento
            </a>
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
            </div>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="w-full pt-20 bg-surface flex-1">
        <div className="flex flex-col w-full">

          {/* HERO SECTION */}
          <section id="hero" className="relative w-full -mt-20 overflow-hidden bg-deep-forest text-on-primary">
            <div className="absolute inset-0 z-0">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuALIZbL_1idVP_hLJ401dEa7nQYsrZMug8W_-GxRtQ7HexX6_p8zV09bx47D-HjxIR4oGJULH8XctKs0DS21TDALByQJCUdg2vFlL1DEbYjSns0ppiHr6ejGtgY61naGq_hLb0vPVel77wRNG3y3vCW3jOTgmB9opIs4oJTb6NqaoNdmthEQr3Tyjyd1Br5QwuY7Lzr8eCNvnG58aviitiAeexHSpfxXFzIr9iL4KAX9vDYOx0qHqDgdA')`
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-r from-deep-forest/95 via-deep-forest/80 to-deep-forest/60"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-deep-forest via-transparent to-transparent"></div>
            </div>

            <div className="relative z-10 max-w-[1280px] mx-auto px-5 md:px-8 lg:px-16 pt-36 pb-16 md:pt-44 md:pb-36 flex flex-col justify-between">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-willow-green mb-6 shadow-sm">
                  <span className="material-symbols-outlined text-[16px]">eco</span>
                  <span className="font-label-caps text-xs uppercase tracking-wider font-bold">Engenharia Ecológica e Paisagismo em Angola</span>
                </div>
                <h1 className="font-display-hero text-3xl sm:text-4xl md:text-6xl text-surface-white font-bold leading-tight tracking-tight mb-6">
                  A força verde do desenvolvimento sustentável em Angola.
                </h1>
                <p className="font-body-xl text-lg md:text-xl text-surface-variant/90 max-w-2xl mb-10">
                  Recuperação de áreas degradadas, reflorestação, paisagismo e conservação de espaços verdes para empresas, instituições e comunidades — com qualidade, segurança e responsabilidade.
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="#contactos"
                    className="inline-flex items-center justify-center font-label-lg text-base px-8 py-3 bg-lime-moss text-slate-charcoal font-semibold rounded-lg shadow-md hover:bg-yellow-green hover:-translate-y-0.5 transition-all"
                  >
                    Pedir Orçamento
                    <span className="material-symbols-outlined ml-2 text-[20px]">arrow_forward</span>
                  </a>
                  <a
                    href="#servicos"
                    className="inline-flex items-center justify-center font-label-lg text-base px-8 py-3 bg-white/10 hover:bg-white/20 text-surface-white font-medium rounded-lg backdrop-blur-sm transition-all"
                  >
                    Os Nossos Serviços
                  </a>
                </div>
              </div>

              {/* Trust Bar */}
              <div className="mt-20 pt-8 bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
                <p className="font-label-caps text-xs text-willow-green tracking-widest uppercase mb-4 text-center md:text-left font-bold">
                  Confiança Institucional & Parceiros Estratégicos
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center justify-between">
                  {[
                    { icon: 'account_balance', name: 'Ministério da Educação' },
                    { icon: 'factory', name: 'Refinaria de Luanda' },
                    { icon: 'domain', name: 'Governo Prov. do Bengo' },
                    { icon: 'savings', name: 'Fundo Soberano de Angola' }
                  ].map((partner, idx) => (
                    <div key={idx} className="flex items-center justify-center md:justify-start gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                      <span className="material-symbols-outlined text-yellow-green text-[22px]">{partner.icon}</span>
                      <span className="font-headline-sm text-sm text-surface-white tracking-tight font-medium">{partner.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* SERVIÇOS SECTION */}
          <section id="servicos" className="py-24 max-w-[1280px] mx-auto px-5 md:px-8 lg:px-16 w-full">
            <div className="max-w-2xl mb-16">
              <span className="font-label-caps text-xs text-secondary uppercase tracking-widest bg-honeydew px-3 py-1 rounded-full font-bold">
                O que fazemos
              </span>
              <h2 className="font-headline-xl text-3xl md:text-4xl text-primary font-bold mt-3 mb-4">
                Soluções ambientais integradas
              </h2>
              <p className="font-body-lg text-base md:text-lg text-on-surface-variant">
                Da recuperação de áreas degradadas à manutenção quotidiana de jardins, a SOGREEN cobre todo o ciclo de vida do espaço verde — e o ambiente que o rodeia.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesData.map(service => (
                <div
                  key={service.id}
                  className="bg-surface-white rounded-xl p-8 shadow-sm hover:shadow-md border border-canopy-green/10 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-lg bg-honeydew text-canopy-green flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-[28px]">{service.icon}</span>
                    </div>
                    <h3 className="font-headline-sm text-xl text-primary font-bold mb-3">
                      {service.title}
                    </h3>
                    <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedService(service)}
                    className="mt-8 pt-4 border-t border-canopy-green/10 flex items-center gap-2 text-canopy-green font-label-md text-sm cursor-pointer group-hover:text-primary transition-colors w-full text-left"
                  >
                    <span>Saber mais</span>
                    <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* VALORES SECTION */}
          <section id="valores" className="py-24 bg-surface-container-low border-y border-canopy-green/10">
            <div className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-16">
              <div className="max-w-2xl mb-16">
                <span className="font-label-caps text-xs text-secondary uppercase tracking-widest bg-honeydew px-3 py-1 rounded-full font-bold">
                  A nossa essência
                </span>
                <h2 className="font-headline-xl text-3xl md:text-4xl text-primary font-bold mt-3 mb-4">
                  Valores que guiam cada projecto
                </h2>
                <p className="font-body-lg text-base md:text-lg text-on-surface-variant">
                  Mais do que executar serviços, criamos valor duradouro para organizações, comunidades e ambiente.
                </p>
              </div>

              {/* 5 Values Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
                {[
                  { num: '01', title: 'Segurança', text: 'Procedimentos rigorosos em todas as frentes de trabalho, sobretudo em instalações industriais e de risco elevado.' },
                  { num: '02', title: 'Qualidade', text: 'Acabamento cuidado e manutenção contínua: o espaço verde entregue é o mesmo que se vê meses e anos depois.' },
                  { num: '03', title: 'Integridade', text: 'Relações transparentes, éticas e de mútua confiança com clientes corporativos, parceiros e instituições do Estado.' },
                  { num: '04', title: 'Responsabilidade', text: 'Cumprimento rigoroso de prazos acordados, normas ambientais nacionais e compromissos assumidos em campo.' },
                  { num: '05', title: 'Sustentabilidade', text: 'Técnicas que respeitam os ecossistemas locais, regeneram o solo e prolongam o ciclo vital de cada intervenção.' }
                ].map((val, idx) => (
                  <div key={idx} className="bg-surface-white p-6 rounded-xl shadow-sm border border-canopy-green/10 flex flex-col justify-between hover:-translate-y-1 transition-transform">
                    <div>
                      <span className="text-5xl font-display-hero font-bold text-willow-green/60">{val.num}</span>
                      <h3 className="font-headline-sm text-lg text-primary font-bold mt-2 mb-2">{val.title}</h3>
                      <p className="font-body-md text-sm text-on-surface-variant">{val.text}</p>
                    </div>
                    <div className="mt-6 h-1.5 w-10 bg-lime-moss rounded-full"></div>
                  </div>
                ))}
              </div>

              {/* Institutional Quote Card */}
              <div className="bg-honeydew rounded-2xl p-8 md:p-12 shadow-sm border border-canopy-green/20 relative overflow-hidden">
                <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                  <div className="max-w-3xl">
                    <span className="material-symbols-outlined text-moss-green text-[48px] leading-none mb-4 block">format_quote</span>
                    <blockquote className="font-headline-md text-xl md:text-2xl text-primary font-semibold leading-relaxed mb-4">
                      “A SOGREEN não se limita a plantar: recupera solos, devolve vida a áreas degradadas e constrói espaços verdes que dignificam instituições e comunidades.”
                    </blockquote>
                    <p className="font-label-lg text-sm text-canopy-green font-bold">
                      — Direcção Geral, SOGREEN, LDA
                    </p>
                  </div>
                  <div className="flex-shrink-0 bg-surface-white p-5 rounded-xl shadow-sm border border-canopy-green/10 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-deep-forest text-on-primary flex items-center justify-center">
                      <span className="material-symbols-outlined text-[24px]">verified</span>
                    </div>
                    <div>
                      <p className="font-label-md text-sm text-primary font-bold">Garantia Técnica</p>
                      <p className="font-body-md text-xs text-on-surface-variant">Certificação e rigor angolano</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* PROJECTOS SECTION */}
          <section id="projectos" className="py-24 max-w-[1280px] mx-auto px-5 md:px-8 lg:px-16 w-full">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div>
                <span className="font-label-caps text-xs text-secondary uppercase tracking-widest bg-honeydew px-3 py-1 rounded-full font-bold">
                  Trabalho comprovado
                </span>
                <h2 className="font-headline-xl text-3xl md:text-4xl text-primary font-bold mt-3 mb-2">
                  Projectos que falam por nós
                </h2>
                <p className="font-body-lg text-base text-on-surface-variant">
                  Resultados tangíveis em sectores críticos e instituições de referência em Angola.
                </p>
              </div>

              {/* Filter Tabs */}
              <div className="flex flex-wrap items-center gap-2 p-1.5 bg-surface-container-high rounded-xl border border-canopy-green/10">
                {[
                  { id: 'all', label: 'Todos' },
                  { id: 'public', label: 'Público' },
                  { id: 'industrial', label: 'Industrial' },
                  { id: 'corporate', label: 'Corporativo' },
                  { id: 'rehabilitation', label: 'Reabilitação' }
                ].map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setProjectFilter(tab.id)}
                    className={`px-4 py-2 text-xs font-label-md rounded-lg transition-all ${
                      projectFilter === tab.id
                        ? 'bg-surface-white text-primary font-bold shadow-sm'
                        : 'text-on-surface-variant hover:text-primary'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map(project => (
                <div key={project.id} className="bg-surface-white rounded-xl overflow-hidden shadow-sm hover:shadow-md border border-canopy-green/10 transition-all flex flex-col group">
                  <div className="h-52 w-full overflow-hidden relative">
                    <img
                      src={project.image}
                      alt={project.alt}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className={`absolute top-3 left-3 bg-surface-white/90 backdrop-blur-md px-3 py-1 rounded-full font-label-caps text-xs font-bold shadow-sm ${project.badgeClass}`}>
                      {project.badge}
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-1.5 text-muted-olive-charcoal text-xs mb-2">
                        <span className="material-symbols-outlined text-[14px]">location_on</span>
                        <span>{project.location}</span>
                      </div>
                      <h3 className="font-headline-sm text-xl text-primary font-bold mb-3">{project.title}</h3>
                      <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                    <div className="mt-6 pt-4 border-t border-canopy-green/10 flex items-center justify-between text-xs font-label-md text-canopy-green">
                      <span>{project.category}</span>
                      <span className="material-symbols-outlined text-[18px]">verified</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CLIENTES SECTION */}
          <section id="clientes" className="py-24 bg-surface-container-low border-y border-canopy-green/10">
            <div className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-16">
              <div className="max-w-2xl mb-16">
                <span className="font-label-caps text-xs text-secondary uppercase tracking-widest bg-honeydew px-3 py-1 rounded-full font-bold">
                  Confiança construída
                </span>
                <h2 className="font-headline-xl text-3xl md:text-4xl text-primary font-bold mt-3 mb-4">
                  Quem confia na SOGREEN
                </h2>
                <p className="font-body-lg text-base md:text-lg text-on-surface-variant">
                  Uma carteira sólida que abrange os mais exigentes órgãos governamentais, multinacionais industriais e clientes residenciais.
                </p>
              </div>

              {/* Destaque: Clientes Permanentes */}
              <div className="mb-16">
                <h3 className="font-label-caps text-xs text-primary tracking-wider uppercase mb-6 font-bold">
                  Clientes com Contrato Permanente
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-surface-white p-8 rounded-xl shadow-sm border border-canopy-green/10 flex items-center justify-between">
                    <div className="flex items-center gap-5">
                      <div className="w-16 h-16 rounded-xl bg-deep-forest text-on-primary flex items-center justify-center flex-shrink-0 shadow-sm">
                        <span className="material-symbols-outlined text-[32px]">account_balance</span>
                      </div>
                      <div>
                        <h4 className="font-headline-sm text-lg text-primary font-bold mb-1">Ministério da Educação</h4>
                        <p className="font-body-md text-sm text-on-surface-variant">Conservação e gestão integral de espaços verdes institucionais</p>
                      </div>
                    </div>
                    <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-honeydew text-canopy-green text-xs font-bold whitespace-nowrap">Permanente</span>
                  </div>

                  <div className="bg-surface-white p-8 rounded-xl shadow-sm border border-canopy-green/10 flex items-center justify-between">
                    <div className="flex items-center gap-5">
                      <div className="w-16 h-16 rounded-xl bg-deep-forest text-on-primary flex items-center justify-center flex-shrink-0 shadow-sm">
                        <span className="material-symbols-outlined text-[32px]">precision_manufacturing</span>
                      </div>
                      <div>
                        <h4 className="font-headline-sm text-lg text-primary font-bold mb-1">Refinaria de Luanda</h4>
                        <p className="font-body-md text-sm text-on-surface-variant">Segurança vegetal, poda industrial e desobstrução de áreas de risco</p>
                      </div>
                    </div>
                    <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-honeydew text-canopy-green text-xs font-bold whitespace-nowrap">Permanente</span>
                  </div>
                </div>
              </div>

              {/* Sectores Atendidos */}
              <div>
                <h3 className="font-label-caps text-xs text-primary tracking-wider uppercase mb-6 font-bold">
                  Sectores e Estruturas Atendidas
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                  {[
                    { icon: 'business', title: 'Empresas Públicas e Privadas' },
                    { icon: 'apartment', title: 'Governos Provinciais' },
                    { icon: 'location_city', title: 'Administrações Municipais' },
                    { icon: 'holiday_village', title: 'Condomínios e Resorts' },
                    { icon: 'home', title: 'Residências Particulares' }
                  ].map((sec, idx) => (
                    <div key={idx} className="bg-surface-white p-6 rounded-xl text-center shadow-sm border border-canopy-green/10 hover:-translate-y-1 transition-transform flex flex-col items-center justify-center">
                      <span className="material-symbols-outlined text-canopy-green text-[32px] mb-3">{sec.icon}</span>
                      <p className="font-label-md text-sm text-primary font-semibold">{sec.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* SOBRE NÓS SECTION */}
          <section id="sobre" className="py-24 max-w-[1280px] mx-auto px-5 md:px-8 lg:px-16 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
              <div className="lg:col-span-7">
                <span className="font-label-caps text-xs text-secondary uppercase tracking-widest bg-honeydew px-3 py-1 rounded-full font-bold">
                  Institucional
                </span>
                <h2 className="font-headline-xl text-3xl md:text-4xl text-primary font-bold mt-3 mb-6">
                  Uma empresa angolana com raízes no ambiente
                </h2>
                <div className="space-y-4 font-body-lg text-base md:text-lg text-on-surface-variant leading-relaxed">
                  <p>
                    A <strong className="text-primary font-semibold">SOGREEN, LDA</strong> é uma empresa de direito angolano dedicada à prestação de serviços nas áreas do ambiente, jardinagem e paisagismo, reflorestação, recuperação de áreas degradadas e afectadas pela indústria extractiva, controlo de vectores, desinfestação, limpeza e conservação de espaços residenciais e industriais, e agropecuária.
                  </p>
                  <p>
                    Oferecemos soluções ambientais e de sustentabilidade com especialização técnica em engenharia de restauração ecológica, reflorestamento com espécies endémicas, arquitectura paisagística e implementação de projectos socioambientais com impacto directo nas comunidades de Angola.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-5 relative">
                <div className="rounded-2xl overflow-hidden shadow-xl aspect-square border border-canopy-green/20">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3NPb5TjF0pZnh-oY7mSMtNiaDEOIAOXmkNMnPf_FUKJ6c4Ja3WROWkRJleYgzYfewnIEFQ8o06sscsFJHwc-W9rjNGkwcBaqxRoDIrcpMwEYW9ijWuXFJmG6oUBDehk0A-9xJNpCsnNs20YN5yq0EpN6nWFuoR9u10ewBylOeA8mdOvT9-JSyvov5nLTdzNQ3ZILWN9eleGxK-7WC2idAOjTVQVnv665VRx9avd4eG5PdjTuv09mnMQ"
                    alt="SOGREEN environmental landscape engineer"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-surface-white p-4 rounded-xl shadow-md border border-canopy-green/10 hidden sm:flex items-center gap-4 max-w-xs">
                  <span className="material-symbols-outlined text-secondary text-[32px]">format_image_left</span>
                  <div>
                    <p className="font-label-md text-sm text-primary font-bold">100% Capital Angolano</p>
                    <p className="font-body-md text-xs text-on-surface-variant">Conformidade com a legislação ambiental nacional</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Missão / Visão / Valores Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-surface-white p-8 rounded-xl shadow-sm border border-canopy-green/10 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-honeydew text-canopy-green flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-[24px]">flag</span>
                  </div>
                  <h3 className="font-headline-sm text-xl text-primary font-bold mb-3">Missão</h3>
                  <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                    Prestar soluções integradas nas áreas ambientais e de conservação de espaços verdes e desenvolvimento sustentável, com qualidade, segurança e responsabilidade, criando valor para organizações, comunidades e ambiente.
                  </p>
                </div>
              </div>

              <div className="bg-surface-white p-8 rounded-xl shadow-sm border border-canopy-green/10 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-honeydew text-canopy-green flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-[24px]">visibility</span>
                  </div>
                  <h3 className="font-headline-sm text-xl text-primary font-bold mb-3">Visão</h3>
                  <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                    Ser uma empresa de referência nacional em Angola em soluções ambientais, conservação de espaços verdes e desenvolvimento sustentável, reconhecida pela qualidade, inovação, segurança e impacto positivo das suas operações.
                  </p>
                </div>
              </div>

              <div className="bg-surface-white p-8 rounded-xl shadow-sm border border-canopy-green/10 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-honeydew text-canopy-green flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-[24px]">balance</span>
                  </div>
                  <h3 className="font-headline-sm text-xl text-primary font-bold mb-3">Valores Fundamentais</h3>
                  <ul className="font-body-md text-sm text-on-surface-variant space-y-2 mt-2">
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-lime-moss"></span> Segurança Operacional</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-lime-moss"></span> Qualidade Comprovada</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-lime-moss"></span> Integridade e Ética</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-lime-moss"></span> Responsabilidade Ambiental</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-lime-moss"></span> Sustentabilidade e Inovação</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ SECTION */}
          <section id="faq" className="py-24 bg-surface-container-low border-y border-canopy-green/10">
            <div className="max-w-[960px] mx-auto px-5 md:px-8">
              <div className="text-center max-w-xl mx-auto mb-16">
                <span className="font-label-caps text-xs text-secondary uppercase tracking-widest bg-honeydew px-3 py-1 rounded-full font-bold">
                  Perguntas Frequentes
                </span>
                <h2 className="font-headline-xl text-3xl md:text-4xl text-primary font-bold mt-3 mb-4">
                  Dúvidas comuns
                </h2>
                <p className="font-body-lg text-base text-on-surface-variant">
                  Respostas rápidas sobre a nossa forma de trabalhar e os serviços que oferecemos.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  {
                    q: 'Quais são as principais áreas de actuação da SOGREEN?',
                    a: 'Actuamos em cinco frentes principais: recuperação e restauração ambiental, jardinagem e paisagismo, soluções ambientais para Oil & Gas e mineração, limpeza e controlo de pragas, e agropecuária.'
                  },
                  {
                    q: 'A SOGREEN realiza projectos fora de Luanda?',
                    a: 'Sim. Já executámos projectos em várias regiões do país, como o Governo Provincial do Bengo, e temos capacidade logística para intervir em outras províncias de Angola com equipas técnicas dedicadas.'
                  },
                  {
                    q: 'Como posso solicitar um orçamento?',
                    a: 'Através do formulário de contactos abaixo, por chamada telefónica ou directamente via WhatsApp. A nossa equipa técnica realiza um levantamento técnico no local e apresenta uma proposta adaptada à escala das suas necessidades.'
                  },
                  {
                    q: 'Vocês fazem manutenção permanente ou só projectos pontuais?',
                    a: 'Os dois. Temos contratos de manutenção permanente com visitas diárias ou semanais — como o assegurado junto do Ministério da Educação — e executamos igualmente projectos pontuais de implantação, destronca e recuperação ecológica.'
                  },
                  {
                    q: 'A SOGREEN trabalha com instituições públicas e concursos?',
                    a: 'Sim. Somos uma sociedade comercial devidamente registada em Angola, habilitada para concursos públicos e com experiência institucional comprovada (Ministério da Educação, Refinaria de Luanda, Fundo Soberano de Angola).'
                  },
                  {
                    q: 'Trabalham com residências e condomínios privados?',
                    a: 'Sim. Além dos clientes institucionais e industriais de grande porte, concebemos, arborizamos e mantemos jardins particulares de vivendas, quintas e complexos residenciais fechados com a mesma dedicação técnica.'
                  }
                ].map((faq, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div
                      key={idx}
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="bg-surface-white rounded-xl shadow-sm p-6 transition-all cursor-pointer border border-canopy-green/10"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <h3 className="font-headline-sm text-base md:text-lg text-primary font-semibold">
                          {faq.q}
                        </h3>
                        <span className={`material-symbols-outlined text-canopy-green text-[22px] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                          expand_more
                        </span>
                      </div>
                      {isOpen && (
                        <div className="mt-4 pt-4 border-t border-canopy-green/10">
                          <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                            {faq.a}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* CTA FINAL & FORMULÁRIO SECTION */}
          <section id="contactos" className="py-24 bg-deep-forest text-on-primary relative overflow-hidden">
            <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-lime-moss/10 blur-3xl pointer-events-none"></div>
            <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-canopy-green/20 blur-3xl pointer-events-none"></div>

            <div className="relative z-10 max-w-[1280px] mx-auto px-5 md:px-8 lg:px-16">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                {/* Coluna Esquerda: Texto de Impacto */}
                <div className="lg:col-span-6">
                  <span className="font-label-caps text-xs text-yellow-green uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full font-bold">
                    Iniciar Intervenção
                  </span>
                  <h2 className="font-headline-xl text-3xl md:text-5xl text-surface-white font-bold mt-3 mb-6">
                    Pronto para transformar o seu espaço?
                  </h2>
                  <p className="font-body-xl text-lg md:text-xl text-surface-variant/90 mb-10 leading-relaxed">
                    Seja um jardim institucional, a recuperação de uma área degradada ou a manutenção contínua das suas instalações, temos a solução técnica ideal para a sua organização.
                  </p>

                  <div className="space-y-6 mb-10">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-yellow-green flex-shrink-0">
                        <span className="material-symbols-outlined text-[22px]">call</span>
                      </div>
                      <div>
                        <p className="font-label-md text-xs text-willow-green uppercase font-bold">Linha Telefónica Directa</p>
                        <p className="font-headline-sm text-sm text-surface-white font-semibold">+244 923 000 000 / +244 912 000 000</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-yellow-green flex-shrink-0">
                        <span className="material-symbols-outlined text-[22px]">mail</span>
                      </div>
                      <div>
                        <p className="font-label-md text-xs text-willow-green uppercase font-bold">Correio Electrónico</p>
                        <p className="font-headline-sm text-sm text-surface-white font-semibold">contacto@sogreen.ao</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-yellow-green flex-shrink-0">
                        <span className="material-symbols-outlined text-[22px]">pin_drop</span>
                      </div>
                      <div>
                        <p className="font-label-md text-xs text-willow-green uppercase font-bold">Sede Corporativa</p>
                        <p className="font-headline-sm text-sm text-surface-white font-semibold">Talatona, Luanda, República de Angola</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <a
                      href="https://wa.me/244923000000"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center font-label-lg text-base px-8 py-3.5 bg-lime-moss text-slate-charcoal font-semibold rounded-lg shadow hover:bg-yellow-green transition-all"
                    >
                      <span className="material-symbols-outlined mr-2 text-[20px]">chat</span>
                      Falar no WhatsApp
                    </a>
                  </div>
                </div>

                {/* Coluna Direita: Formulário de Orçamento */}
                <div className="lg:col-span-6">
                  <div className="bg-surface-white rounded-2xl p-8 md:p-12 text-on-surface shadow-2xl border border-canopy-green/10">
                    <h3 className="font-headline-md text-2xl text-primary font-bold mb-2">
                      Pedir Orçamento Gratuito
                    </h3>
                    <p className="font-body-md text-sm text-on-surface-variant mb-8">
                      Preencha o formulário e receba contacto da nossa equipa técnica em menos de 24 horas úteis.
                    </p>

                    <form onSubmit={handleFormSubmit} className="space-y-5">
                      <div>
                        <label className="block font-label-md text-xs text-primary font-bold uppercase mb-1.5">Nome Completo</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={e => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Ex.: Manuel da Silva"
                          className="w-full px-4 py-3 rounded-lg bg-surface-container-low text-on-surface text-sm focus:outline-none focus:ring-2 focus:ring-canopy-green transition-all border border-canopy-green/10"
                        />
                      </div>

                      <div>
                        <label className="block font-label-md text-xs text-primary font-bold uppercase mb-1.5">Empresa / Instituição</label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={e => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Ex.: Ministério ou Nome da Empresa"
                          className="w-full px-4 py-3 rounded-lg bg-surface-container-low text-on-surface text-sm focus:outline-none focus:ring-2 focus:ring-canopy-green transition-all border border-canopy-green/10"
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block font-label-md text-xs text-primary font-bold uppercase mb-1.5">Telefone / WhatsApp</label>
                          <input
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={e => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="+244 9..."
                            className="w-full px-4 py-3 rounded-lg bg-surface-container-low text-on-surface text-sm focus:outline-none focus:ring-2 focus:ring-canopy-green transition-all border border-canopy-green/10"
                          />
                        </div>

                        <div>
                          <label className="block font-label-md text-xs text-primary font-bold uppercase mb-1.5">Tipo de Serviço</label>
                          <select
                            value={formData.serviceType}
                            onChange={e => setFormData({ ...formData, serviceType: e.target.value })}
                            className="w-full px-4 py-3 rounded-lg bg-surface-container-low text-on-surface text-sm focus:outline-none focus:ring-2 focus:ring-canopy-green transition-all border border-canopy-green/10"
                          >
                            <option value="recuperacao">Recuperação e Restauração Ambiental</option>
                            <option value="jardinagem">Jardinagem e Paisagismo</option>
                            <option value="oilgas">Soluções Oil & Gas e Mineração</option>
                            <option value="limpeza">Limpeza, Higienização e Pragas</option>
                            <option value="agropecuaria">Agropecuária</option>
                            <option value="outro">Outro Projecto</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block font-label-md text-xs text-primary font-bold uppercase mb-1.5">Descrição Breve do Projecto ou Local</label>
                        <textarea
                          rows={3}
                          value={formData.message}
                          onChange={e => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Indique a província, extensão aproximada e tipo de intervenção desejada..."
                          className="w-full px-4 py-3 rounded-lg bg-surface-container-low text-on-surface text-sm focus:outline-none focus:ring-2 focus:ring-canopy-green transition-all resize-none border border-canopy-green/10"
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        className="w-full py-4 px-8 bg-deep-forest text-on-primary font-label-lg text-base font-bold rounded-lg shadow hover:bg-canopy-green transition-all flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <span>Enviar Pedido de Orçamento</span>
                        <span className="material-symbols-outlined text-[20px]">send</span>
                      </button>

                      {formSubmitted && (
                        <div className="p-3 bg-honeydew text-canopy-green text-xs font-semibold rounded-lg text-center border border-canopy-green/30 animate-pulse">
                          ✓ Pedido registado com sucesso! A nossa equipa entrará em contacto brevemente.
                        </div>
                      )}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>
      </main>

      {/* FOOTER */}
      <footer className="w-full bg-surface-container-low border-t border-canopy-green/10">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-16 pt-20 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-canopy-green/10">
            <div className="lg:col-span-4 flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <img
                  alt="SOGREEN Logo"
                  className="h-8 w-auto object-contain"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfjEt4awq8TL1X8BY4DPhm0SEkM35_BU5PIGvCF-KrJ6d6CmIR7ILyndvi9ke_Rqgia47G-et9V38uqdjqRqg9yH-rajzs3zRU-yIZ1YsE0NFDLChIFg1kBb9T5iXMgLLFCdxFUy6_JWXXfaylI_0pTSkk6Qr23lc8G_Ds21tPQ_av3ehBL4kMiK5s6zFkPAmi_G_qSqKNNF3VQHfUQoRnsJmP04TXmTmUc0P6TNKJ3bcMEeijhVcC6A"
                  referrerPolicy="no-referrer"
                />
                <span className="font-headline-sm text-xl text-primary tracking-tight font-bold">SOGREEN, LDA</span>
              </div>
              <p className="font-body-md text-sm text-on-surface-variant max-w-sm leading-relaxed">
                Líder em Soluções Ambientais, Jardinagem e Paisagismo Corporativo em Angola. Especialistas em reabilitação ecológica, manutenção industrial e arquitectura verde sustentável.
              </p>
              <div className="flex items-center gap-3">
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-surface-white flex items-center justify-center text-on-surface-variant hover:bg-deep-forest hover:text-on-primary transition-all shadow-[0_2px_8px_rgba(25,35,26,0.04)] border border-canopy-green/10">
                  <span className="material-symbols-outlined text-[18px]">share</span>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-surface-white flex items-center justify-center text-on-surface-variant hover:bg-deep-forest hover:text-on-primary transition-all shadow-[0_2px_8px_rgba(25,35,26,0.04)] border border-canopy-green/10">
                  <span className="material-symbols-outlined text-[18px]">public</span>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-surface-white flex items-center justify-center text-on-surface-variant hover:bg-deep-forest hover:text-on-primary transition-all shadow-[0_2px_8px_rgba(25,35,26,0.04)] border border-canopy-green/10">
                  <span className="material-symbols-outlined text-[18px]">photo_camera</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-3 flex flex-col gap-4">
              <h4 className="font-label-caps text-xs text-primary tracking-wider uppercase font-bold">Serviços Principais</h4>
              <ul className="flex flex-col gap-3">
                <li><a href="#servicos" className="font-body-md text-sm text-on-surface-variant hover:text-on-surface transition-colors">Paisagismo e Arquitectura Verde</a></li>
                <li><a href="#servicos" className="font-body-md text-sm text-on-surface-variant hover:text-on-surface transition-colors">Manutenção e Conservação de Jardins</a></li>
                <li><a href="#servicos" className="font-body-md text-sm text-on-surface-variant hover:text-on-surface transition-colors">Sistemas de Rega Automatizada</a></li>
                <li><a href="#servicos" className="font-body-md text-sm text-on-surface-variant hover:text-on-surface transition-colors">Reabilitação e Reflorestamento</a></li>
                <li><a href="#servicos" className="font-body-md text-sm text-on-surface-variant hover:text-on-surface transition-colors">Controle Fitossanitário Ecológico</a></li>
              </ul>
            </div>

            <div className="lg:col-span-2 flex flex-col gap-4">
              <h4 className="font-label-caps text-xs text-primary tracking-wider uppercase font-bold">Institucional</h4>
              <ul className="flex flex-col gap-3">
                <li><a href="#sobre" className="font-body-md text-sm text-on-surface-variant hover:text-on-surface transition-colors">Sobre a Empresa</a></li>
                <li><a href="#valores" className="font-body-md text-sm text-on-surface-variant hover:text-on-surface transition-colors">Política Ambiental</a></li>
                <li><a href="#projectos" className="font-body-md text-sm text-on-surface-variant hover:text-on-surface transition-colors">Projectos Realizados</a></li>
                <li><a href="#clientes" className="font-body-md text-sm text-on-surface-variant hover:text-on-surface transition-colors">Parceiros e Clientes</a></li>
                <li><a href="#faq" className="font-body-md text-sm text-on-surface-variant hover:text-on-surface transition-colors">Dúvidas Frequentes</a></li>
              </ul>
            </div>

            <div className="lg:col-span-3 flex flex-col gap-4">
              <h4 className="font-label-caps text-xs text-primary tracking-wider uppercase font-bold">Sede e Contactos</h4>
              <div className="flex flex-col gap-3">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-canopy-green text-[20px] mt-0.5">location_on</span>
                  <span className="font-body-md text-sm text-on-surface-variant">Talatona, Luanda, Angola</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-canopy-green text-[20px]">call</span>
                  <span className="font-body-md text-sm text-on-surface-variant">+244 923 000 000 / +244 912 000 000</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-canopy-green text-[20px]">mail</span>
                  <span className="font-body-md text-sm text-on-surface-variant">contacto@sogreen.ao</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-canopy-green text-[20px]">badge</span>
                  <span className="font-body-md text-sm text-on-surface-variant">NIF: 5417089123</span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-body-md text-sm text-on-surface-variant text-center sm:text-left">
              © 2026 SOGREEN, LDA. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-8">
              <a href="#" className="font-label-md text-sm text-on-surface-variant hover:text-on-surface transition-colors">Termos de Serviço</a>
              <a href="#" className="font-label-md text-sm text-on-surface-variant hover:text-on-surface transition-colors">Privacidade</a>
              <a href="#" className="font-label-md text-sm text-on-surface-variant hover:text-on-surface transition-colors">Conformidade Ambiental</a>
            </div>
          </div>
        </div>
      </footer>

      {/* SERVICE DETAIL MODAL */}
      {selectedService && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-surface-white rounded-2xl max-w-xl w-full p-8 shadow-2xl relative border border-canopy-green/20 animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-surface-container-low text-on-surface flex items-center justify-center hover:bg-surface-container-high transition-colors"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>

            <div className="w-12 h-12 rounded-lg bg-honeydew text-canopy-green flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-[28px]">{selectedService.icon}</span>
            </div>

            <span className="font-label-caps text-xs text-secondary uppercase tracking-widest bg-honeydew px-3 py-1 rounded-full font-bold">
              {selectedService.category}
            </span>

            <h3 className="font-headline-xl text-2xl text-primary font-bold mt-3 mb-4">
              {selectedService.title}
            </h3>

            <p className="font-body-md text-base text-on-surface-variant leading-relaxed mb-6">
              {selectedService.details}
            </p>

            <div className="mb-8">
              <h4 className="font-label-caps text-xs text-primary uppercase tracking-wider mb-3 font-bold">Principais Entregas & Âmbito</h4>
              <ul className="space-y-2">
                {selectedService.deliverables.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-body-md text-sm text-on-surface-variant">
                    <span className="w-2 h-2 rounded-full bg-moss-green"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="#contactos"
                onClick={() => setSelectedService(null)}
                className="flex-1 py-3.5 px-6 bg-deep-forest text-on-primary font-label-lg text-sm font-bold rounded-lg text-center hover:bg-canopy-green transition-all"
              >
                Solicitar Este Serviço
              </a>
              <button
                onClick={() => setSelectedService(null)}
                className="py-3.5 px-6 bg-surface-container-low text-primary font-label-lg text-sm font-semibold rounded-lg hover:bg-surface-container-high transition-all"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
