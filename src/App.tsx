/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ArrowRight, BookOpen, Briefcase, Globe, Users, Award, TrendingUp, ShieldCheck } from 'lucide-react';

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function App() {
  const { scrollYProgress } = useScroll();
  const headerOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);

  return (
    <div className="min-h-screen bg-[#f4f4f4] font-sans selection:bg-[#005eb8] selection:text-white">
      
      {/* Navigation / Header */}
      <motion.header 
        style={{ opacity: headerOpacity }}
        className="fixed top-0 left-0 right-0 p-6 md:p-10 z-50 flex justify-between items-center mix-blend-difference text-white"
      >
        <div className="font-sans font-semibold tracking-widest uppercase text-xs">
          Duoc UC
        </div>
        <div className="font-sans font-semibold tracking-widest uppercase text-xs">
          Escuela de Informática y Telecomunicaciones
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="relative min-h-[100dvh] flex items-center justify-center bg-[#051c2c] text-white overflow-hidden pb-24 pt-20">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
            alt="Abstract Technology" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-[#005eb8] font-sans font-semibold tracking-widest uppercase text-sm mb-6"
          >
            El diseño de nuestro futuro
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl leading-tight mb-8"
          >
            Liderazgo y Empleabilidad <br/><span className="italic text-gray-300">en la Era Digital</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="font-sans text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-light"
          >
            La empleabilidad no es una consecuencia, es un diseño. Descubra cómo estamos formando a los líderes que la industria tecnológica global demanda.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="relative z-20 flex flex-col items-center mt-16 md:mt-20"
          >
            <span className="text-xs uppercase tracking-widest mb-2 text-gray-400">Descubre</span>
            <div className="w-[1px] h-12 bg-gray-400/50 overflow-hidden">
              <motion.div 
                animate={{ y: [0, 48] }} 
                transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                className="w-full h-1/2 bg-white"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 1: Propuesta de Valor */}
      <section className="py-24 md:py-40 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5">
            <FadeIn>
              <h2 className="font-serif text-4xl md:text-5xl text-[#051c2c] leading-tight mb-6">
                El Puente entre el Talento y la Industria Global
              </h2>
            </FadeIn>
          </div>
          <div className="md:col-span-6 md:col-start-7 space-y-8">
            <FadeIn delay={0.2}>
              <div className="border-l-2 border-[#005eb8] pl-6">
                <h3 className="font-sans font-semibold text-sm uppercase tracking-widest text-gray-500 mb-2">Visión</h3>
                <p className="font-serif text-2xl text-gray-800">
                  No solo formamos técnicos; desarrollamos los líderes que la industria tecnológica demanda.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="border-l-2 border-gray-300 pl-6">
                <h3 className="font-sans font-semibold text-sm uppercase tracking-widest text-gray-500 mb-2">Fundamento</h3>
                <p className="font-sans text-lg text-gray-600 font-light leading-relaxed">
                  Un ecosistema donde la academia y la empresa convergen en tiempo real, asegurando que nuestra formación esté siempre un paso adelante.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Section 2: Evidencia (CAPE) - Data Driven Look */}
      <section className="py-24 md:py-32 bg-white px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="flex items-center gap-4 mb-16">
              <div className="w-12 h-[1px] bg-[#005eb8]"></div>
              <h2 className="font-sans font-semibold text-sm uppercase tracking-widest text-[#005eb8]">El Respaldo de la Evidencia</h2>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <FadeIn>
                <h3 className="font-serif text-4xl md:text-5xl text-[#051c2c] leading-tight mb-8">
                  Diseño Académico con Visión de Futuro
                </h3>
                <p className="font-sans text-lg text-gray-600 font-light leading-relaxed mb-8">
                  Nuestras carreras están diseñadas para lo que el mercado necesitará en los próximos 5 años, no en el pasado.
                </p>
              </FadeIn>
            </div>
            
            <div className="space-y-12">
              <FadeIn delay={0.2}>
                <div className="flex gap-6">
                  <div className="shrink-0 mt-1">
                    <BookOpen className="w-6 h-6 text-[#005eb8]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-serif text-2xl text-[#051c2c] mb-3">Proceso CAPE (2024-2025)</h4>
                    <p className="font-sans text-gray-600 font-light">Actualización curricular basada en el rigor científico y metodológico.</p>
                  </div>
                </div>
              </FadeIn>
              
              <FadeIn delay={0.4}>
                <div className="flex gap-6">
                  <div className="shrink-0 mt-1">
                    <TrendingUp className="w-6 h-6 text-[#005eb8]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-serif text-2xl text-[#051c2c] mb-3">Inteligencia de Mercado</h4>
                    <p className="font-sans text-gray-600 font-light">Uso de informes de prospección IDC para alinear nuestros programas con las tendencias internacionales más exigentes.</p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Big Numbers / Specialization */}
      <section className="py-24 md:py-40 bg-[#051c2c] text-white px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <FadeIn>
                <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-6">
                  Especialización de Alto Impacto
                </h2>
                <p className="font-sans text-lg text-gray-300 font-light mb-8">
                  El requerimiento de la industria es claro: menos generalismo, más profundidad técnica. Entregamos profesionales listos para operar en entornos de alta complejidad desde el primer día.
                </p>
              </FadeIn>
            </div>
            
            <div className="lg:col-span-6 lg:col-start-7 grid grid-cols-1 sm:grid-cols-2 gap-12">
              <FadeIn delay={0.2}>
                <div className="border-t border-white/20 pt-6">
                  <div className="font-serif text-6xl md:text-7xl text-white mb-2">+3.700</div>
                  <div className="font-sans text-sm uppercase tracking-widest text-[#005eb8] font-semibold mb-4">Horas de Enfoque</div>
                  <p className="font-sans text-gray-400 font-light text-sm">Un modelo de formación especializado y profundo.</p>
                </div>
              </FadeIn>
              
              <FadeIn delay={0.4}>
                <div className="border-t border-white/20 pt-6">
                  <div className="font-serif text-5xl md:text-6xl text-white mb-2 mt-2">3.500</div>
                  <div className="font-sans text-sm uppercase tracking-widest text-gray-400 font-semibold mb-4">Hrs Curriculares</div>
                  <p className="font-sans text-gray-400 font-light text-sm mb-6">Formación base sólida y avanzada.</p>
                  
                  <div className="font-serif text-4xl text-white mb-2">216</div>
                  <div className="font-sans text-sm uppercase tracking-widest text-gray-400 font-semibold mb-2">Hrs Co-curriculares</div>
                  <p className="font-sans text-gray-400 font-light text-sm">Especialización flexible y actualizada.</p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Real World Faculty */}
      <section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/2">
            <FadeIn>
              <div className="aspect-[4/5] bg-gray-200 relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop" 
                  alt="Professionals collaborating" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-[#051c2c]/10 mix-blend-multiply"></div>
              </div>
            </FadeIn>
          </div>
          <div className="w-full md:w-1/2 space-y-12">
            <FadeIn>
              <h2 className="font-sans font-semibold text-sm uppercase tracking-widest text-[#005eb8] mb-4">Formación en el Mundo Real</h2>
              <h3 className="font-serif text-4xl md:text-5xl text-[#051c2c] leading-tight mb-8">
                Docencia y Práctica al 100%
              </h3>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="flex gap-6 items-start">
                <div className="font-serif text-5xl text-[#005eb8] leading-none">67%</div>
                <div>
                  <h4 className="font-serif text-xl text-[#051c2c] mb-2">Docentes que son Actores</h4>
                  <p className="font-sans text-gray-600 font-light">De nuestra planta docente trabaja activamente en la industria. Traen los problemas reales de la mañana a la sala de clases por la tarde.</p>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.4}>
              <div className="flex gap-6 items-start">
                <div className="mt-1"><Briefcase className="w-8 h-8 text-[#005eb8]" strokeWidth={1.5}/></div>
                <div>
                  <h4 className="font-serif text-xl text-[#051c2c] mb-2">Aprender Haciendo</h4>
                  <p className="font-sans text-gray-600 font-light">Modelo de formación 100% práctica que reduce drásticamente la curva de aprendizaje al ingresar al mundo laboral.</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Section 5: Certifika & Ecosystem */}
      <section className="py-24 md:py-32 bg-white px-6 md:px-12 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            
            {/* Certifika */}
            <div>
              <FadeIn>
                <div className="flex items-center gap-3 mb-6">
                  <Globe className="w-5 h-5 text-[#005eb8]" />
                  <h2 className="font-sans font-semibold text-sm uppercase tracking-widest text-gray-500">Certifika</h2>
                </div>
                <h3 className="font-serif text-3xl md:text-4xl text-[#051c2c] mb-6">El Pasaporte Global</h3>
                <p className="font-sans text-gray-600 font-light mb-8">
                  Validación que la industria reconoce. Entregamos a los estudiantes certificaciones de las Big Techs mientras cursan su carrera.
                </p>
                
                <div className="space-y-6">
                  <div className="border-l border-gray-300 pl-4">
                    <p className="font-sans text-sm text-gray-600 font-light"><strong className="font-semibold text-[#051c2c]">Alianzas:</strong> Microsoft, AWS, Cisco, Salesforce.</p>
                  </div>
                  <div className="border-l border-gray-300 pl-4">
                    <p className="font-sans text-sm text-gray-600 font-light"><strong className="font-semibold text-[#051c2c]">Impacto:</strong> Portafolio de certificaciones internacionales que disparan la empleabilidad y capacidad de negociación salarial.</p>
                  </div>
                  <div className="border-l border-gray-300 pl-4">
                    <p className="font-sans text-sm text-gray-600 font-light"><strong className="font-semibold text-[#051c2c]">Validación:</strong> Actividades de aprendizaje validadas por la industria (ej. Telecomunicaciones RV con Entel, ACHS).</p>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Ecosystem */}
            <div>
              <FadeIn delay={0.2}>
                <div className="flex items-center gap-3 mb-6">
                  <Users className="w-5 h-5 text-[#005eb8]" />
                  <h2 className="font-sans font-semibold text-sm uppercase tracking-widest text-gray-500">Ecosistema</h2>
                </div>
                <h3 className="font-serif text-3xl md:text-4xl text-[#051c2c] mb-6">Somos Actores de Opinión</h3>
                <p className="font-sans text-gray-600 font-light mb-8">
                  Más que espectadores, somos referentes. Lideramos la conversación técnica y estratégica del país.
                </p>
                
                <div className="space-y-6">
                  <div className="bg-gray-50 p-6 border border-gray-100">
                    <h4 className="font-serif text-lg text-[#051c2c] mb-2">Liderazgo Activo</h4>
                    <p className="font-sans text-sm text-gray-600 font-light">Participación directa en Mesas de Trabajo ACTI y alianzas estratégicas con Huawei y la PUC.</p>
                  </div>
                  <div className="bg-gray-50 p-6 border border-gray-100">
                    <h4 className="font-serif text-lg text-[#051c2c] mb-2">Hitos de Impacto</h4>
                    <p className="font-sans text-sm text-gray-600 font-light">Espacios de validación como Ciberlab y SummIT, donde la Dirección de la Escuela marca la pauta.</p>
                  </div>
                </div>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>

      {/* Section 6: Sello Social & Futuro */}
      <section className="py-24 md:py-32 bg-[#f4f4f4] px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <ShieldCheck className="w-12 h-12 text-[#005eb8] mx-auto mb-8" strokeWidth={1} />
            <h2 className="font-serif text-3xl md:text-4xl text-[#051c2c] mb-8">
              Compromiso con la Equidad y Comunidad
            </h2>
            <p className="font-sans text-lg text-gray-600 font-light leading-relaxed mb-12">
              Formamos especialistas de alto nivel con validación internacional, éticamente comprometidos y conectados con la vanguardia del sector.
            </p>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mb-20">
            <FadeIn delay={0.2}>
              <div className="bg-white p-8 shadow-sm h-full">
                <h4 className="font-serif text-xl text-[#051c2c] mb-3">Más Mujeres en las TICs</h4>
                <p className="font-sans text-sm text-gray-600 font-light">Liderazgo activo para cerrar la brecha de género en la industria. Consolidando el programa como motor de talento diverso para Chile.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="bg-white p-8 shadow-sm h-full">
                <h4 className="font-serif text-xl text-[#051c2c] mb-3">CITT & Cibervoluntarios</h4>
                <p className="font-sans text-sm text-gray-600 font-light">Centro de Innovación y Transferencia Tecnológica. Innovación aplicada y transferencia con impacto social real.</p>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.4}>
            <div className="border-t border-gray-300 pt-16">
              <h3 className="font-sans font-semibold text-sm uppercase tracking-widest text-[#005eb8] mb-6">Hacia una Empleabilidad 2.0</h3>
              <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16">
                <div className="text-left">
                  <h4 className="font-serif text-lg text-[#051c2c] mb-2">Expansión Salesforce</h4>
                  <p className="font-sans text-sm text-gray-600 font-light">Integrar nuevas rutas de certificación de alta demanda.</p>
                </div>
                <div className="text-left">
                  <h4 className="font-serif text-lg text-[#051c2c] mb-2">Bolsa Laboral "MatchMaker"</h4>
                  <p className="font-sans text-sm text-gray-600 font-light">Conectando quirúrgicamente competencias con vacantes estratégicas.</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Footer / Conclusion */}
      <section className="py-32 bg-[#051c2c] text-white px-6 md:px-12 text-center">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <Award className="w-16 h-16 text-[#005eb8] mx-auto mb-10" strokeWidth={1} />
            <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-10">
              La empleabilidad en Duoc UC no es una consecuencia, <span className="italic text-[#005eb8]">es un diseño.</span>
            </h2>
            <p className="font-sans text-xl text-gray-400 font-light mb-16">
              Estamos listos para seguir liderando el ecosistema tecnológico nacional.
            </p>
            <button className="group inline-flex items-center gap-3 border border-white/30 px-8 py-4 hover:bg-white hover:text-[#051c2c] transition-colors duration-300 font-sans text-sm uppercase tracking-widest">
              Conozca Más
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}
