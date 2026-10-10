import {
  Carrot, Apple, Milk, Wheat, Beef, Fish, CupSoda, ShoppingBasket,
  type LucideProps,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { siteData } from "@/data/siteData";

const iconMap: Record<string, React.ComponentType<LucideProps>> = {
  Carrot, Apple, Milk, Wheat, Beef, Fish, CupSoda, ShoppingBasket,
};

const Categories = () => {
  return (
    <section id="categories" className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/15">
            Категории товаров
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            8 категорий — {siteData.company.productsCount}+ позиций
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Полный ассортимент продуктов питания под ключ. От свежих овощей
            до бакалеи — всё в одном месте с быстрой доставкой.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {siteData.categories.map((cat) => {
            const Icon = iconMap[cat.icon] ?? ShoppingBasket;
            const img = siteData.images[cat.image as keyof typeof siteData.images];
            return (
              <Card
                key={cat.id}
                className="group overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer border-2 hover:border-primary/20"
              >
                <div className="relative h-36 overflow-hidden">
                  <img
                    src={img}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <div className="w-10 h-10 rounded-lg bg-background/90 backdrop-blur-sm flex items-center justify-center">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  <div className="absolute top-3 right-3">
                    <Badge className="bg-background/90 text-foreground hover:bg-background/90 text-[10px]">
                      {cat.count} SKU
                    </Badge>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="text-background font-semibold text-base leading-tight">
                      {cat.name}
                    </h3>
                  </div>
                </div>
                <CardContent className="pt-4 pb-4">
                  <p className="text-xs text-muted-foreground leading-relaxed mb-3 line-clamp-2">
                    {cat.description}
                  </p>
                  <Button asChild variant="ghost" size="sm" className="w-full text-primary hover:text-primary hover:bg-primary/5">
                    <a href="#catalog">Перейти →</a>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;
