import { Truck, Clock, Warehouse, PackageCheck, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { siteData } from "@/data/siteData";

const iconList = [Truck, Clock, Warehouse, PackageCheck];

const Logistics = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image + floating stats */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={siteData.images.delivery}
                alt="Логистика и доставка"
                className="w-full h-[420px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-3">
                  <Avatar className="w-12 h-12 border-2 border-background">
                    <AvatarFallback className="hero-gradient text-primary-foreground font-bold">
                      ЭП
                    </AvatarFallback>
                  </Avatar>
                  <div className="text-background">
                    <div className="font-semibold">Собственный автопарк</div>
                    <div className="text-sm opacity-80">40+ рефрижераторов с GPS</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/15">
              Логистика и склады
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
              Доставка в срок с <span className="text-primary">контролем температуры</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Наша логистическая инфраструктура включает современные склады
              класса «А», собственный автопарк рефрижераторов и систему
              GPS-мониторинга температуры в режиме реального времени.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              {siteData.logisticsFeatures.map((feat, idx) => {
                const Icon = iconList[idx] ?? Truck;
                return (
                  <Card key={feat.title} className="border-2 hover:border-primary/20 transition-colors">
                    <CardContent className="pt-5">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <div className="text-2xl font-bold">{feat.value}</div>
                      </div>
                      <div className="text-sm font-medium">{feat.title}</div>
                      <div className="text-xs text-muted-foreground mt-0.5">{feat.description}</div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <Separator className="mb-6" />

            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" /> Регионы доставки
              </h4>
              <div className="flex flex-wrap gap-2 mb-4">
                {siteData.regions.map((region) => (
                  <Badge key={region} variant="outline" className="text-xs">
                    {region}
                  </Badge>
                ))}
              </div>
              <Progress value={100} className="h-2" indicatorClassName="accent-gradient" />
              <p className="text-xs text-muted-foreground mt-2">
                Доставка по всей России через транспортные компании
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Logistics;
