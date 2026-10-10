import { ShieldCheck, FileCheck, Award, Stethoscope } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { siteData } from "@/data/siteData";

const qualitySteps = [
  { icon: Stethoscope, title: "Входной контроль", description: "Проверка каждой партии при приёмке на складе" },
  { icon: FileCheck, title: "Сертификация", description: "Все необходимые документы и декларации соответствия" },
  { icon: ShieldCheck, title: "Хранение", description: "Соблюдение температурных режимов на всех этапах" },
  { icon: Award, title: "Отгрузка", description: "Финальная проверка качества перед доставкой клиенту" },
];

const Quality = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <Breadcrumb className="mb-4">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="#hero">Главная</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Контроль качества</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/15">
              Контроль качества
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
              4 ступени контроля — <span className="text-primary">гарантия свежести</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Мы внедрили систему ХАССП и стандарт ISO 22000. Каждый продукт
              проходит четырёхуровневый контроль качества перед тем, как
              попасть к нашему клиенту.
            </p>

            <div className="space-y-3 mb-6">
              {qualitySteps.map((step, idx) => (
                <div key={step.title} className="flex items-start gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <step.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-primary">ШАГ {idx + 1}</span>
                      <h4 className="font-semibold">{step.title}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground mt-0.5">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Alert className="mb-6 border-primary/20 bg-primary/5">
              <ShieldCheck className="h-5 w-5 text-primary" />
              <AlertTitle className="text-primary">Гарантия возврата</AlertTitle>
              <AlertDescription>
                При обнаружении брака — заменим или вернём средства в течение 24 часов.
              </AlertDescription>
            </Alert>

            <Button asChild variant="outline">
              <a href="#contacts">Запросить сертификаты</a>
            </Button>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={siteData.images.quality}
                alt="Контроль качества продукции"
                className="w-full h-[420px] object-cover"
              />
            </div>
            <Card className="absolute -top-6 -left-6 max-w-[200px] shadow-xl border-2 border-primary/20 hidden md:block">
              <CardContent className="pt-5">
                <div className="text-3xl font-bold text-primary">100%</div>
                <Separator className="my-2" />
                <p className="text-xs text-muted-foreground">
                  продукции проходит контроль качества
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quality;
