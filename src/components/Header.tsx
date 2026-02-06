import { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import logo from '@/assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'О компании', href: '#about' },
    { label: 'Продукты', href: '#products' },
    { label: 'Контакты', href: '#contacts' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md shadow-card">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Company Name */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="ССП-ИТ" className="h-12 w-12 object-contain" />
            <span className="text-xl font-bold text-foreground">ССП-ИТ</span>
          </div>

          {/* Contact Info - Desktop */}
          <div className="hidden lg:flex items-center gap-6">
            <a 
              href="tel:+79817875906" 
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">8 (981) 787-59-06</span>
            </a>
            <a 
              href="mailto:ssp-it@yandex.ru" 
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span className="text-sm font-medium">ssp-it@yandex.ru</span>
            </a>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-secondary rounded-lg transition-all duration-200"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground hover:bg-secondary rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 animate-fade-in">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-secondary rounded-lg transition-all duration-200 text-left"
                >
                  {item.label}
                </button>
              ))}
            </nav>
            <div className="mt-4 pt-4 border-t border-border flex flex-col gap-3">
              <a 
                href="tel:+79817875906" 
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors px-4"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm font-medium">8 (981) 787-59-06</span>
              </a>
              <a 
                href="mailto:ssp-it@yandex.ru" 
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors px-4"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm font-medium">ssp-it@yandex.ru</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
