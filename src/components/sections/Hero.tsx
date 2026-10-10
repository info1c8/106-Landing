import { ArrowRight, Truck, ShieldCheck, BadgePercent, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { siteData } from "@/data/siteData";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center pt-24 overflow-hidden">
      <div className="absolute inset-0 hero-gradient" />
      <div
        className="absolute inset-0 opacity-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${siteData.images.hero})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/75 to-primary/40" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-2xl">
          <Badge className="mb-6 accent-gradient text-secondary-foreground hover:opacity-90 text-sm py-1.5 px-4">
            <Star className="h-3.5 w-3.5 mr-1.5 fill-current" />
            Рейтинг {siteData.company.rating} / 5.0 — {siteData.company.partnersCount}+ партнёров
          </Badge>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-[1.1] text-balance mb-6">
            Свежие продукты оптом <br />
            <span className="text-secondary">для вашего бизнеса</span>
          </h1>

          <p className="text-lg text-primary-foreground/80 leading-relaxed mb-8 max-w-xl">
            Полный ассортимент продуктов питания для магазинов, ресторанов и
            торговых сетей. Доставка по всей России в течение 24 часов.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <Button asChild size="lg" className="accent-gradient text-secondary-foreground hover:opacity-90 text-base h-12 px-8">
              <a href="#catalog">
                Смотреть каталог
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-base h-12 px-8">
              <a href="#booking">Оставить заявку</a>
            </Button>
          </div>

          <Separator className="mb-6 bg-primary-foreground/20" />

          <div className="grid grid-cols-3 gap-6">
            {[
              { icon: Truck, label: "Доставка 24ч", sub: "по Москве и МО" },
              { icon: ShieldCheck, label: "Контроль качества", sub: "все сертификаты" },
              { icon: BadgePercent, label: "Скидки до 25%", sub: "от объёма" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary-foreground/15 flex items-center justify-center shrink-0">
                  <item.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-primary-foreground">{item.label}</div>
                  <div className="text-xs text-primary-foreground/60">{item.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative floating badges */}
      <div className="hidden lg:block absolute right-8 top-1/3 z-10">
        <div className="animate-float bg-card/95 backdrop-blur-sm rounded-2xl shadow-2xl p-5 max-w-[240px] border border-border">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center">
              <Truck className="h-6 w-6 text-success" />
            </div>
            <div>
              <div className="text-2xl font-bold text-foreground">300+</div>
              <div className="text-xs text-muted-foreground">заказов в день</div>
            </div>
          </div>
          <Separator className="my-3" />
          <p className="text-xs text-muted-foreground leading-relaxed">
            Доставляем свежие продукты более 300 клиентам ежедневно
          </p>
        </div>
      </div>

      <div className="hidden lg:block absolute right-12 top-2/3 z-10" style={{ animationDelay: "1s" }}>
        <div className="animate-float bg-card/95 backdrop-blur-sm rounded-2xl shadow-2xl p-5 max-w-[240px] border border-border">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
              <BadgePercent className="h-6 w-6 text-secondary-foreground" />
            </div>
            <div>
              <div className="text-2xl font-bold text-foreground">1200+</div>
              <div className="text-xs text-muted-foreground">товаров в каталоге</div>
            </div>
          </div>
          <Separator className="my-3" />
          <p className="text-xs text-muted-foreground leading-relaxed">
            8 категорий: от свежих овощей до бакалеи
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
