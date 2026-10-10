import { Handshake, Building2, Calendar, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import { siteData } from "@/data/siteData";

const Partners = () => {
  return (
    <section className="py-20 fresh-gradient">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/15">
              Наши партнёры
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
              450+ компаний доверяют нам <span className="text-primary">ежедневно</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Мы работаем с розничными сетями, ресторанами, кафе, магазинами у дома
              и региональными дистрибьюторами. Каждый партнёр получает персонального
              менеджера и индивидуальные условия сотрудничества.
            </p>

            {/* Partners table */}
            <Card className="mb-6">
              <CardContent className="pt-2">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Партнёр</TableHead>
                      <TableHead>Тип</TableHead>
                      <TableHead className="text-right">С нами с</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {siteData.partners.map((partner) => (
                      <TableRow key={partner.name}>
                        <TableCell className="font-medium">{partner.name}</TableCell>
                        <TableCell>
                          <Badge variant="outline" className="text-[10px]">{partner.type}</Badge>
                        </TableCell>
                        <TableCell className="text-right text-muted-foreground">{partner.since}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            <Button asChild size="lg" className="accent-gradient text-secondary-foreground hover:opacity-90">
              <a href="#booking">
                Стать партнёром
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* Image + stats */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={siteData.images.partnership}
                alt="Партнёрство"
                className="w-full h-[420px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
            </div>
            <Card className="absolute -bottom-6 -left-6 max-w-[280px] shadow-xl border-2 border-primary/20 hidden md:block">
              <CardContent className="pt-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-xl accent-gradient flex items-center justify-center">
                    <Handshake className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <div className="text-3xl font-bold">450+</div>
                </div>
                <Separator className="mb-3" />
                <p className="text-xs text-muted-foreground">
                  Активных партнёров по всей России
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
