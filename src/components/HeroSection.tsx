import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen gradient-hero flex items-center justify-center relative pt-20">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-slide-up">
            Интеллектуальные решения
            <span className="block text-gradient mt-2">для работы с данными</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Создаём программное обеспечение для систематизации, хранения и анализа критически важной информации
          </p>
          <button
            onClick={scrollToAbout}
            className="group inline-flex items-center gap-2 px-8 py-4 gradient-primary text-primary-foreground font-medium rounded-xl shadow-soft hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 animate-slide-up"
            style={{ animationDelay: '0.2s' }}
          >
            Узнать больше
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>
    </section>
  );
};

export default HeroSection;
