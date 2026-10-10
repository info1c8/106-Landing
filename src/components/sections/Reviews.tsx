import { Star, Quote, TrendingUp, Award, Users, Clock } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { siteData } from "@/data/siteData";

const highlights = [
  { icon: TrendingUp, label: "Прирост выручки", value: "+18%" },
  { icon: Award, label: "NPS клиентов", value: "72" },
  { icon: Users, label: "Повторных заказов", value: "85%" },
  { icon: Clock, label: "Срок доставки", value: "24ч" },
];

const Reviews = () => {
  return (
    <section id="reviews" className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-10">
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/15">
            Отзывы клиентов
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Нам доверяют 450+ компаний
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Реальные отзывы наших партнёров — магазинов, ресторанов и торговых сетей,
            которые работают с нами годами.
          </p>
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
          {highlights.map((h) => (
            <Card key={h.label} className="text-center border-2 hover:border-primary/20 transition-colors">
              <CardContent className="pt-5 pb-5">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-2">
                  <h.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-2xl font-bold">{h.value}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{h.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Reviews list */}
          <div className="lg:col-span-2">
            <ScrollArea className="h-[520px] pr-4">
              <div className="space-y-4">
                {siteData.testimonials.map((review) => (
                  <Card key={review.name} className="border-2 hover:border-primary/20 transition-colors">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <Avatar className="w-12 h-12 border-2 border-border">
                            <AvatarImage src={review.avatar} alt={review.name} />
                            <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-semibold">{review.name}</div>
                            <div className="text-xs text-muted-foreground">{review.company}</div>
                          </div>
                        </div>
                        <Quote className="h-8 w-8 text-primary/20 shrink-0" />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-1 mb-2">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < review.rating
                                ? "fill-secondary text-secondary"
                                : "fill-muted text-muted"
                            }`}
                          />
                        ))}
                        <span className="text-xs text-muted-foreground ml-2">{review.date}</span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        "{review.text}"
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </ScrollArea>
          </div>

          {/* Review form */}
          <Card className="border-2 border-primary/20 h-fit">
            <CardHeader>
              <h3 className="text-xl font-bold">Оставить отзыв</h3>
              <p className="text-sm text-muted-foreground">
                Поделитесь опытом работы с нами
              </p>
            </CardHeader>
            <CardContent>
              <ReviewForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Send } from "lucide-react";

const ReviewForm = () => {
  const [rating, setRating] = useState(5);
  const [loading, setLoading] = useState(false);
  const [anonymous, setAnonymous] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Спасибо за отзыв!",
        description: "Ваш отзыв будет опубликован после модерации.",
      });
      (e.target as HTMLFormElement).reset();
      setRating(5);
      setAnonymous(false);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="space-y-1.5">
        <Label htmlFor="r-name">Ваше имя</Label>
        <Input id="r-name" placeholder="Иван Иванов" disabled={anonymous} required={!anonymous} />
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="r-company">Компания</Label>
        <Input id="r-company" placeholder="ООО «Ромашка»" disabled={anonymous} />
      </div>
      <div className="space-y-1.5">
        <Label>Оценка</Label>
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => setRating(star)}
              className="transition-transform hover:scale-110"
            >
              <Star
                className={`h-7 w-7 ${
                  star <= rating
                    ? "fill-secondary text-secondary"
                    : "fill-muted text-muted"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="r-text">Текст отзыва</Label>
        <Textarea id="r-text" placeholder="Расскажите о вашем опыте работы с нами..." rows={4} required />
      </div>
      <div className="flex items-center gap-2">
        <Switch id="r-anon" checked={anonymous} onCheckedChange={setAnonymous} />
        <Label htmlFor="r-anon" className="text-sm font-normal cursor-pointer">
          Анонимный отзыв
        </Label>
      </div>
      <Separator />
      <Button type="submit" disabled={loading} className="w-full accent-gradient text-secondary-foreground hover:opacity-90">
        {loading ? (
          <><Loader2 className="h-4 w-4 animate-spin" /> Отправка...</>
        ) : (
          <><Send className="h-4 w-4" /> Опубликовать отзыв</>
        )}
      </Button>
    </form>
  );
};

export default Reviews;
