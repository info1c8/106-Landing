import {
  PhoneCall, ClipboardList, Calculator, Truck,
  type LucideProps,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { siteData } from "@/data/siteData";

const iconMap: Record<string, React.ComponentType<LucideProps>> = {
  PhoneCall, ClipboardList, Calculator, Truck,
};

const Process = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/15">
            Как мы работаем
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            4 простых шага до получения заказа
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            От заявки до доставки — прозрачный и отлаженный процесс,
            обеспечивающий свежесть и качество на каждом этапе.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {siteData.processSteps.map((step, idx) => {
            const Icon = iconMap[step.icon] ?? PhoneCall;
            return (
              <div key={step.step}>
                <Card className="relative hover:shadow-lg transition-all h-full border-2 hover:border-primary/20">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-14 h-14 rounded-2xl hero-gradient flex items-center justify-center text-primary-foreground">
                        <Icon className="h-7 w-7" />
                      </div>
                      <div className="text-5xl font-black text-primary/10 leading-none">
                        0{step.step}
                      </div>
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {step.description}
                    </p>
                    <Progress value={(idx + 1) * 25} className="h-1.5" />
                  </CardContent>
                </Card>
                {idx < siteData.processSteps.length - 1 && (
                  <div className="hidden lg:flex items-center justify-center -mt-20 mb-16 relative z-10">
                    <div className="w-8 h-8 rounded-full bg-accent border-2 border-primary/20 flex items-center justify-center text-primary text-sm font-bold">
                      →
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <Separator className="my-12" />

        <div className="text-center">
          <p className="text-muted-foreground mb-4">Готовы сделать первый шаг?</p>
          <Badge variant="outline" className="text-sm py-2 px-4">
            Среднее время обработки заявки — 30 минут
          </Badge>
        </div>
      </div>
    </section>
  );
};

export default Process;
