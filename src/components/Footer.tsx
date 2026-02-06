import { MapPin, Phone, Mail } from 'lucide-react';
import logo from '@/assets/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contacts" className="bg-foreground text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} alt="ССП-ИТ" className="h-12 w-12 object-contain bg-card rounded-lg p-1" />
              <span className="text-xl font-bold">ССП-ИТ</span>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Разработка программного обеспечения в области информационных технологий и цифровизации
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Контакты</h3>
            <div className="space-y-4">
              <a 
                href="tel:+79817875906" 
                className="flex items-start gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors group"
              >
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-sm">8 (981) 787-59-06</span>
              </a>
              <a 
                href="mailto:ssp-it@yandex.ru" 
                className="flex items-start gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors group"
              >
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-sm">ssp-it@yandex.ru</span>
              </a>
            </div>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Адрес</h3>
            <div className="flex items-start gap-3 text-primary-foreground/70">
              <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
              <span className="text-sm leading-relaxed">
                197110, г. Санкт-Петербург,<br />
                наб. Адмирала Лазарева, д. 14, стр.
              </span>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <p className="text-center text-primary-foreground/50 text-sm">
            © {currentYear} ССП-ИТ. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
