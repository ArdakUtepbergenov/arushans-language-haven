const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Аружан Калаубайкызы</h3>
              <p className="text-primary-foreground/80 text-sm">
                Профессиональный репетитор английского и китайского языка, помогающий ученикам достигать их языковых целей.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Быстрые ссылки</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>
                  <a href="#about" className="hover:text-accent transition-colors">
                    О себе
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-accent transition-colors">
                    Услуги
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-accent transition-colors">
                    Контакты
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Языки</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>Уроки английского языка</li>
                <li>Уроки китайского языка (путунхуа)</li>
                <li>Подготовка к экзаменам</li>
                <li>Деловой язык</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
            <p>&copy; {new Date().getFullYear()} Аружан Калаубайкызы. Все права защищены.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
