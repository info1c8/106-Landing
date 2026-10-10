import { CheckCircle2, Award, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { siteData } from "@/data/siteData";

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={siteData.images.warehouse}
                alt="Склад компании"
                className="w-full h-[420px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>
            {/* Floating card */}
            <Card className="absolute -bottom-6 -right-6 max-w-[260px] shadow-xl border-2 border-primary/20 hidden md:block">
              <CardContent className="pt-5">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg accent-gradient flex items-center justify-center">
                    <Award className="h-5 w-5 text-secondary-foreground" />
                  </div>
                  <div className="text-2xl font-bold">12 лет</div>
                </div>
                <p className="text-sm text-muted-foreground">
                  на рынке оптовой дистрибьюции продуктов питания
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Text side */}
          <div>
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/15">О компании</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
              Надёжный партнёр в сфере <span className="text-primary">продовольственной дистрибьюции</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {siteData.company.name} — один из ведущих оптовых дистрибьюторов
              продуктов питания в России. С 2013 года мы обеспечиваем магазины,
              рестораны и торговые сети свежими и качественными продуктами,
              контролируя каждую стадию от фермы до полки.
            </p>

            <Tabs defaultValue="mission" className="mb-6">
              <TabsList className="w-full">
                <TabsTrigger value="mission" className="flex-1">
                  <Target className="h-4 w-4 mr-1.5" /> Миссия
                </TabsTrigger>
                <TabsTrigger value="values" className="flex-1">
                  <Award className="h-4 w-4 mr-1.5" /> Ценности
                </TabsTrigger>
                <TabsTrigger value="approach" className="flex-1">
                  <CheckCircle2 className="h-4 w-4 mr-1.5" /> Подход
                </TabsTrigger>
              </TabsList>
              <TabsContent value="mission" className="mt-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Наша миссия — обеспечить бизнес качественными продуктами питания
                  по справедливым ценам, обеспечивая бесперебойные поставки и
                  поддерживая отечественного производителя. Мы строим
                  долгосрочные отношения с каждым клиентом.
                </p>
              </TabsContent>
              <TabsContent value="values" className="mt-4">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    Прозрачность и честность во всех отношениях
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    Ответственность за качество каждого продукта
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    Поддержка экологичного и локального производства
                  </li>
                </ul>
              </TabsContent>
              <TabsContent value="approach" className="mt-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Персональный менеджер для каждого клиента, индивидуальный
                  прайс-лист, гибкие условия оплаты и отсрочка до 14 дней.
                  Мы не просто продаём продукты — мы помогаем вашему бизнесу расти.
                </p>
              </TabsContent>
            </Tabs>

            <Separator className="mb-6" />

            <div className="grid grid-cols-2 gap-4 mb-6">
              {siteData.certificates.map((cert) => (
                <div key={cert.title} className="flex items-center gap-3 p-3 rounded-lg border border-border bg-muted/20">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{cert.title}</div>
                    <div className="text-xs text-muted-foreground">{cert.description}</div>
                  </div>
                </div>
              ))}
            </div>

            <Button asChild size="lg" className="accent-gradient text-secondary-foreground hover:opacity-90">
              <a href="#booking">Стать партнёром</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
