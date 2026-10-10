import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Send, Facebook, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { siteData } from "@/data/siteData";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg accent-gradient flex items-center justify-center text-secondary-foreground font-bold text-lg">
                ЭП
              </div>
              <div className="font-bold text-lg">{siteData.company.name}</div>
            </div>
            <p className="text-sm text-background/70 leading-relaxed">
              Оптовая дистрибьюция продуктов питания. Поставляем свежие продукты
              в магазины, рестораны и сети по всей России с 2013 года.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-lg bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors">
                <Send className="h-4 w-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-base">Навигация</h3>
            <ul className="space-y-2">
              {siteData.navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-background/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="font-semibold text-base">Категории</h3>
            <ul className="space-y-2">
              {siteData.categories.slice(0, 6).map((cat) => (
                <li key={cat.id}>
                  <a
                    href="#catalog"
                    className="text-sm text-background/70 hover:text-accent transition-colors"
                  >
                    {cat.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts + newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold text-base">Контакты</h3>
            <ul className="space-y-3 text-sm text-background/70">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                {siteData.company.address}
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                {siteData.company.phone}
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" />
                {siteData.company.email}
              </li>
              <li className="flex items-start gap-2">
                <Clock className="h-4 w-4 mt-0.5 shrink-0" />
                {siteData.company.workHours}
              </li>
            </ul>
            <div className="space-y-2">
              <p className="text-sm text-background/70">Подписка на прайс-лист:</p>
              <div className="flex gap-2">
                <Input placeholder="Email" className="bg-background/10 border-background/20 text-background placeholder:text-background/50" />
                <Button size="sm" className="accent-gradient text-secondary-foreground hover:opacity-90 shrink-0">
                  OK
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-background/20" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-background/50">
          <p>© 2025 {siteData.company.name}. {siteData.company.inn}. Все права защищены.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-background/80 transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-background/80 transition-colors">Договор оферты</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
