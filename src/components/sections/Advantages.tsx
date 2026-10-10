import {
  Truck, ShieldCheck, Snowflake, BadgePercent, Headset, Leaf,
  type LucideProps,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { siteData } from "@/data/siteData";

const iconMap: Record<string, React.ComponentType<LucideProps>> = {
  Truck, ShieldCheck, Snowflake, BadgePercent, Headset, Leaf,
};

const Advantages = () => {
  return (
    <section className="py-20 fresh-gradient">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/15">
            Преимущества
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Почему выбирают нас
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Мы предоставляем комплексные решения для бизнеса в сфере оптовых поставок
            продуктов питания с полным циклом логистики и контроля качества.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {siteData.advantages.map((adv, idx) => {
            const Icon = iconMap[adv.icon] ?? ShieldCheck;
            return (
              <HoverCard key={adv.title}>
                <HoverCardTrigger asChild>
                  <Card className="group cursor-help hover:shadow-xl transition-all hover:-translate-y-1 border-2 hover:border-primary/20">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="w-14 h-14 rounded-2xl bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground flex items-center justify-center transition-all">
                          <Icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
                        </div>
                        <Badge variant="outline" className="text-[10px]">0{idx + 1}</Badge>
                      </div>
                      <CardTitle className="text-xl mt-3">{adv.title}</CardTitle>
                      <CardDescription className="leading-relaxed">
                        {adv.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="flex justify-between space-x-4">
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold">{adv.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        Узнайте подробнее об этом преимуществе у вашего персонального менеджера.
                      </p>
                    </div>
                    <Icon className="h-8 w-8 text-primary/30 shrink-0" />
                  </div>
                </HoverCardContent>
              </HoverCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
