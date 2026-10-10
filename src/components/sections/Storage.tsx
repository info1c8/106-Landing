import { Snowflake, ThermometerSun, Package, Boxes } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { siteData } from "@/data/siteData";

const storageZones = [
  {
    zone: "Глубокая заморозка",
    icon: Snowflake,
    temp: "-24°C",
    area: "3 000 м²",
    products: "Замороженное мясо, рыба, полуфабрикаты, мороженое",
    color: "text-info",
    bg: "bg-info/10",
  },
  {
    zone: "Охлаждение",
    icon: ThermometerSun,
    temp: "+2°C ... +6°C",
    area: "5 000 м²",
    products: "Молочные продукты, свежие овощи и фрукты, охлаждённое мясо",
    color: "text-success",
    bg: "bg-success/10",
  },
  {
    zone: "Сухое хранение",
    icon: Package,
    temp: "+15°C ... +22°C",
    area: "7 000 м²",
    products: "Бакалея, консервы, напитки, хлеб, непищевые товары",
    color: "text-primary",
    bg: "bg-primary/10",
  },
];

const Storage = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-10">
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/15">
            Складская инфраструктура
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Современные склады класса «А»
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            15 000 м² складских площадей с тремя температурными зонами,
            автоматизированной системой управления и круглосуточным мониторингом.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-5 mb-8">
          {storageZones.map((zone) => (
            <Card key={zone.zone} className="border-2 hover:border-primary/20 transition-all hover:shadow-lg overflow-hidden">
              <div className={`h-2 ${zone.bg}`} />
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-14 h-14 rounded-2xl ${zone.bg} flex items-center justify-center`}>
                    <zone.icon className={`h-7 w-7 ${zone.color}`} />
                  </div>
                  <Badge variant="outline" className="font-mono text-xs">{zone.temp}</Badge>
                </div>
                <h3 className="font-semibold text-lg mb-1">{zone.zone}</h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Boxes className="h-4 w-4" /> Площадь: {zone.area}
                </div>
                <Separator className="mb-3" />
                <p className="text-xs text-muted-foreground leading-relaxed">{zone.products}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Details tabs */}
        <Card>
          <CardContent className="pt-6">
            <Tabs defaultValue="tech">
              <TabsList className="w-full justify-start">
                <TabsTrigger value="tech">Технологии</TabsTrigger>
                <TabsTrigger value="automation">Автоматизация</TabsTrigger>
                <TabsTrigger value="ecology">Экология</TabsTrigger>
              </TabsList>
              <TabsContent value="tech" className="mt-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <ThermometerSun className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">Температурный контроль 24/7</h4>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        Датчики в каждой зоне с автоматическим оповещением при отклонениях
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Package className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">Адресное хранение</h4>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        Каждая партия имеет уникальный код и точное местоположение на складе
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="automation" className="mt-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  WMS-система управляет приёмкой, размещением, отбором и отгрузкой
                  товара. Рабочие места оснащены сканерами штрих-кодов и терминалами
                  сбора данных. Это исключает ошибки и ускоряет обработку заказов.
                </p>
              </TabsContent>
              <TabsContent value="ecology" className="mt-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Холодильное оборудование работает на озонобезопасных хладагентах.
                  Склад оснащён LED-освещением с датчиками движения. Упаковочные
                  материалы подлежат переработке.
                </p>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Storage;
