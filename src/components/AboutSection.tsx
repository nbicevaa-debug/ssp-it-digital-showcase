import { Target, Users, Lightbulb, Shield } from 'lucide-react';

const aboutCards = [
  {
    icon: Target,
    title: 'Наш опыт',
    description: '4 года мы фокусируемся на ИТ-проектах в области управления знаниями и документацией.',
  },
  {
    icon: Users,
    title: 'Наша команда',
    description: 'Менеджеры, разработчики, тестировщики имеют опыт ведения ИТ-проектов.',
  },
  {
    icon: Lightbulb,
    title: 'Наша цель',
    description: 'Создавать инструменты для работы с массивами данных так, чтобы каждая единица информации могла быть использована с максимальной эффективностью.',
  },
  {
    icon: Shield,
    title: 'Наши ценности',
    description: 'Надежность, глубокая экспертиза и ориентация на потребности бизнеса.',
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            О компании
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Мы — команда специалистов по разработке программного обеспечения в области информационных технологий и цифровизации. Наша миссия — создавать интеллектуальные решения для систематизации, хранения и анализа критически важных данных.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {aboutCards.map((card, index) => (
            <div
              key={card.title}
              className="group p-6 bg-background rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 gradient-primary rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <card.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {card.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
