import { Calendar, Package, Users, Truck, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { siteData } from "@/data/siteData";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Calendar,
  Package,
  Users,
  Truck,
};

const Stats = () => {
  return (
    <section className="py-16 bg-muted/30 -mt-1 relative z-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {siteData.stats.map((stat, idx) => {
            const Icon = iconMap[stat.icon] ?? TrendingUp;
            return (
              <Card key={stat.label} className="border-2 hover:border-primary/30 transition-all hover:shadow-lg group">
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <Badge variant="outline" className="text-[10px]">#{idx + 1}</Badge>
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                  <Progress value={100} className="mt-3 h-1 opacity-20" />
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
