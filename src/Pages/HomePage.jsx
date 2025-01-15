import React, { useState, useEffect } from 'react';
import { ChevronRight, Code, Globe, Zap, Menu, X, ArrowRight, Users, Shield } from 'lucide-react';

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      const sections = ['home', 'features', 'testimonials'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= 0 && rect.top <= window.innerHeight / 2;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechCorp",
      content: "TechNova has transformed our digital infrastructure. The results have been phenomenal.",
      image: "https://mailmktg.makemytrip.com/mybusiness/images/CTM-2.jpg"
    },
    {
      name: "Mike Chen",
      role: "Founder, StartupX",
      content: "Implementing TechNova's solutions doubled our productivity within months.",
      image: "https://mailmktg.makemytrip.com/mybusiness/images/CTM-2.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">


      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                  Innovation Meets <span className="text-blue-400">Excellence</span>
                </h1>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl">
                  Transform your digital presence with cutting-edge solutions. We help businesses navigate the future of technology with confidence.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-500 transition-colors flex items-center gap-2">
                    Get Started
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <button className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
              <div className="flex-1 relative">
                <div className="aspect-square bg-gradient-to-br from-blue-500 to-purple-600 rounded-full opacity-20 absolute blur-3xl"></div>
                <img
                  src="https://mailmktg.makemytrip.com/mybusiness/images/CTM-2.jpg"
                  alt="Hero"
                  className="relative rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful Features
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Discover the tools that will revolutionize your business
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe className="w-6 h-6 text-blue-400" />,
                title: "Global Reach",
                description: "Connect with customers worldwide through our scalable solutions."
              },
              {
                icon: <Code className="w-6 h-6 text-blue-400" />,
                title: "Advanced Tech",
                description: "Leverage cutting-edge technology to stay ahead of the competition."
              },
              {
                icon: <Zap className="w-6 h-6 text-blue-400" />,
                title: "Fast Performance",
                description: "Experience lightning-fast solutions optimized for performance."
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-colors group"
              >
                <div className="mb-4 p-3 bg-blue-500/10 rounded-lg w-fit group-hover:bg-blue-500/20 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Don't just take our word for it
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-900/50 p-6 rounded-xl border border-gray-800"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full"
                  />
                  <div>
                    <h4 className="text-lg font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300">{testimonial.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { number: "99%", label: "Customer Satisfaction" },
              { number: "24/7", label: "Support Available" },
              { number: "100+", label: "Enterprise Clients" },
            ].map((stat, index) => (
              <div key={index} className="p-6">
                <div className="text-4xl font-bold text-blue-400 mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;