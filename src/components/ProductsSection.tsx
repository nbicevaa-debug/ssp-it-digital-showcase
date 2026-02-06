import { FileArchive, BookOpen, ExternalLink } from 'lucide-react';

const products = [
  {
    icon: FileArchive,
    title: 'Электронный архив технической документации',
    description: 'Централизованное и упорядоченное хранение технической документации',
    link: 'https://ssp-it.ru/',
  },
  {
    icon: BookOpen,
    title: 'ИнтЭграТоР',
    description: 'Интерактивное электронное техническое руководство',
    link: 'https://ietm.ssp-it.ru/',
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Продукты ССП-ИТ
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Мы предлагаем цифровые решения для работы с данными, позволяющие оптимизировать работу с максимальной эффективностью
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {products.map((product, index) => (
            <div
              key={product.title}
              className="group relative p-8 gradient-card rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 border border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <product.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-3">
                {product.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {product.description}
              </p>
              
              <a
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 gradient-primary text-primary-foreground font-medium rounded-xl shadow-soft hover:shadow-card-hover transition-all duration-300 hover:-translate-y-0.5"
              >
                Перейти на сайт
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
