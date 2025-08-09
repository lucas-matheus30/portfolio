import { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  Code,
  Database,
  Server,
  Globe,
  User,
  GraduationCap,
  ChevronDown
} from 'lucide-react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
}

function App() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Create particles for background animation
    const newParticles: Particle[] = [];
    for (let i = 0; i < 50; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 4 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
      });
    }
    setParticles(newParticles);

    // Animate particles
    const animateParticles = () => {
      setParticles(prev => prev.map(particle => {
        const nextX = particle.x + particle.speedX;
        const nextY = particle.y + particle.speedY;
        return {
          ...particle,
          x: nextX > window.innerWidth ? 0 : nextX < 0 ? window.innerWidth : nextX,
          y: nextY > window.innerHeight ? 0 : nextY < 0 ? window.innerHeight : nextY,
        };
      }));
    };

    const interval = setInterval(animateParticles, 16);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
  };

  const projects = [
    {
      title: 'Poupa+',
      description: 'Plataforma de gerenciamento de finanças pessoais com controle de gastos e receitas - EM DESENVOLVIMENTO',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      github: '#',
      live: '#'
    },
    {
      title: 'Forneria 77',
      description: 'Aplicativo full stack para gerenciamento de pedidos e entrega de um delivery',
      tech: ['React', 'Spring Boot', 'MySQL', 'JWT'],
      github: 'https://github.com/Projeto-Integrador-Time03/forneria-React',
      live: '#'
    },
    {
      title: 'Blog Pessoal',
      description: 'Blog pessoal com sistema de login e cadastro de posts',
      tech: ['React', 'Java', 'Spring Boot', 'MySQL'],
      github: 'https://github.com/lucas-matheus30/projeto_blog_pessoal',
      live: '#'
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated Background Particles */}
      <div className="fixed inset-0 pointer-events-none">
        {particles.map(particle => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-blue-500 opacity-20"
            style={{
              left: `${particle.x}px`,
              top: `${particle.y}px`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Lucas Matheus
            </div>
            <div className="hidden md:flex space-x-8">
              {['home', 'Sobre Mim', 'Habilidades', 'Projetos', 'Contato'].map(section => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors duration-300 hover:text-blue-400 ${
                    activeSection === section ? 'text-blue-400' : 'text-gray-300'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="h-screen flex items-center justify-center relative">
        <div className="text-center z-10">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
              <Code size={48} className="text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              Lucas Matheus
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-2">
              Desenvolvedor Full Stack
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Transformando ideias em soluções digitais inovadoras com tecnologias modernas
            </p>
          </div>
          
          <div className="flex justify-center space-x-6 mb-12">
            <a href="https://github.com/lucas-matheus30" target="_blank" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/lucas-matheus-lima/" target="_blank" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
              <Linkedin size={24} />
            </a>
            <a href="mailto:lucas-matheusdev@outlook.com" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
              <Mail size={24} />
            </a>
          </div>

          <button
            onClick={() => scrollToSection('Projetos')}
            className="bg-gradient-to-r from-blue-500 to-blue-600 px-8 py-3 rounded-full text-white font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
          >
            Ver Meu Trabalho
          </button>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-blue-400" />
        </div>
      </section>

      {/* Sobre mim */}
      <section id="Sobre Mim" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Sobre Mim
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
            Desenvolvedor apaixonado por tecnologia com experiência prática em criação de aplicações web e participação em projetos full stack            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800">
                <User className="text-blue-400 mb-4" size={32} />
                <h3 className="text-2xl font-bold mb-4">Minha História</h3>
                <p className="text-gray-300 mb-6">
                  Comecei minha jornada na programação nos últimos anos e desde então me especializei 
                  em desenvolvimento full stack, criando aplicações web modernas e escaláveis.
                </p>
                <p className="text-gray-300">
                  Tenho experiência com tecnologias como React, Node.js, Java, Spring Boot, TypeScript e bancos de dados,
                  sempre focando em entregar soluções de alta qualidade.
                </p>
              </div>
            </div>

            <div className="space-y-3">
              
              <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800">
                <div className="flex items-center mb-3">
                  <Code className="text-blue-400 mr-3" size={24} />
                  <span className="text-sm text-blue-400">2024 - 2025</span>
                </div>
                <h4 className="font-bold text-lg">Bootcamp Desenvolvedor Full Stack</h4>
                <p className="text-gray-400">Generation Brasil</p>
              </div>

              <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800">
                <div className="flex items-center mb-3">
                  <GraduationCap className="text-blue-400 mr-3" size={24} />
                  <span className="text-sm text-blue-400">2024 - Presente</span>
                </div>
                <h4 className="font-bold text-lg">Ciência da Computação</h4>
                <p className="text-gray-400">Centro Universitário - IBMR</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Habilidades */}
      <section id="Habilidades" className="py-20 bg-gray-900/30">
      <div className="container mx-auto px-6 text-center">
    
    <div className="mb-16">
      <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
        Habilidades
      </h2>
      <p className="text-gray-400 max-w-2xl mx-auto">
        Tecnologias e ferramentas que utilizo para criar soluções digitais
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
      
      <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 text-center">
        <Globe className="text-blue-400 mx-auto mb-4" size={32} />
        <h4 className="font-bold mb-2">Frontend</h4>
        <p className="text-gray-400 text-sm">React, JavaScript, TypeScript, Tailwind CSS</p>
      </div>

      <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 text-center">
        <Server className="text-blue-400 mx-auto mb-4" size={32} />
        <h4 className="font-bold mb-2">Backend</h4>
        <p className="text-gray-400 text-sm">Node.js, Java, Spring Boot</p>
      </div>

      <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 text-center">
        <Database className="text-blue-400 mx-auto mb-4" size={32} />
        <h4 className="font-bold mb-2">Database</h4>
        <p className="text-gray-400 text-sm">PostgreSQL, MongoDB, MySQL</p>
      </div>

    </div>
  </div>
      </section>

      {/* Projetos */}
      <section id="Projetos" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Projetos
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Confira alguns dos meus trabalhos mais recentes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 overflow-hidden group hover:border-blue-500 transition-all duration-300">
                <div className="h-48 bg-gradient-to-br from-blue-500/20 to-purple-600/20 relative">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300" />
                  <div className="absolute bottom-4 left-4">
                    <Code className="text-blue-400" size={32} />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between">
                    <a href={project.github} target="_blank" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="Contato" className="py-20 bg-gray-900/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Contato
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Vamos trabalhar juntos! Entre em contato para discutir seu próximo projeto
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-8">Informações de Contato</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Mail className="text-blue-400 mr-4" size={24} />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-400">lucas-matheusdev@outlook.com</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Phone className="text-blue-400 mr-4" size={24} />
                  <div>
                    <p className="font-semibold">Telefone</p>
                    <p className="text-gray-400">+55 (21) 98037-9104</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <MapPin className="text-blue-400 mr-4" size={24} />
                  <div>
                    <p className="font-semibold">Localização</p>
                    <p className="text-gray-400">Rio de Janeiro</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2025 Lucas Matheus. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
