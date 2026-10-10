import { useState } from "react";
import { Calendar as CalendarIcon, Clock, Check, User, Building2, Phone, Mail, Package, Loader2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Calendar } from "@/components/ui/calendar";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/hooks/use-toast";
import { siteData } from "@/data/siteData";
import { dateFnsLocalizer } from "react-big-calendar";

const Booking = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [bookingType, setBookingType] = useState("consult");
  const [category, setCategory] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const today = new Date();
  const maxDate = new Date(today.getFullYear(), today.getMonth() + 2, today.getDate());

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!date || !selectedSlot) {
      toast({
        title: "Заполните все поля",
        description: "Выберите дату и время визита",
        variant: "destructive",
      });
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      toast({
        title: "Заявка принята!",
        description: `Мы свяжемся с вами для подтверждения визита на ${date.toLocaleDateString("ru-RU")} в ${selectedSlot}`,
      });
    }, 1200);
  };

  const resetForm = () => {
    setSubmitted(false);
    setDate(undefined);
    setSelectedSlot(null);
    setBookingType("consult");
    setCategory("");
  };

  return (
    <section id="booking" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-10">
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/15">
            Бронирование визита
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Запланируйте визит на склад
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Выберите удобную дату и время. Посетите наш склад, продегустируйте
            продукцию или заключите договор — всё в одном визите.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Calendar + slots */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CalendarIcon className="h-5 w-5 text-primary" />
                Выбор даты
              </CardTitle>
              <CardDescription>Бронирование доступно на 2 месяца вперёд</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  disabled={(d) => d < today || d > maxDate || d.getDay() === 0}
                  className="rounded-md border"
                />
              </div>

              <Separator className="my-4" />

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="h-4 w-4 text-primary" />
                  <Label className="text-sm font-semibold">Выберите время</Label>
                </div>
                {!date ? (
                  <p className="text-sm text-muted-foreground text-center py-4">
                    Сначала выберите дату
                  </p>
                ) : (
                  <ScrollArea className="h-[180px] pr-3">
                    <div className="grid grid-cols-2 gap-2">
                      {siteData.bookingSlots.map((slot) => (
                        <button
                          key={slot.time}
                          disabled={!slot.available}
                          onClick={() => setSelectedSlot(slot.time)}
                          className={`flex items-center justify-between px-3 py-2.5 rounded-lg border text-sm font-medium transition-all ${
                            selectedSlot === slot.time
                              ? "border-primary bg-primary text-primary-foreground"
                              : slot.available
                              ? "border-border hover:border-primary/40 hover:bg-accent cursor-pointer"
                              : "border-border opacity-40 cursor-not-allowed line-through"
                          }`}
                        >
                          {slot.time}
                          {slot.available && selectedSlot === slot.time && (
                            <Check className="h-3.5 w-3.5" />
                          )}
                        </button>
                      ))}
                    </div>
                  </ScrollArea>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Form */}
          <Card className="lg:col-span-3">
            <CardHeader>
              <CardTitle>Данные для бронирования</CardTitle>
              <CardDescription>
                Заполните форму, и мы подтвердим бронирование в течение 30 минут
              </CardDescription>
            </CardHeader>
            <CardContent>
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mb-4">
                    <Check className="h-8 w-8 text-success" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Заявка успешно отправлена!</h3>
                  <p className="text-muted-foreground max-w-md mb-6">
                    Мы свяжемся с вами по указанному телефону для подтверждения.
                    Дата: <strong>{date?.toLocaleDateString("ru-RU")}</strong>, время: <strong>{selectedSlot}</strong>
                  </p>
                  <Button onClick={resetForm} variant="outline">
                    Создать новую заявку
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1.5">
                      <Label htmlFor="name" className="flex items-center gap-1.5">
                        <User className="h-3.5 w-3.5 text-muted-foreground" /> Имя *
                      </Label>
                      <Input id="name" placeholder="Иван Иванов" required />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="company" className="flex items-center gap-1.5">
                        <Building2 className="h-3.5 w-3.5 text-muted-foreground" /> Компания *
                      </Label>
                      <Input id="company" placeholder="ООО «Ромашка»" required />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1.5">
                      <Label htmlFor="phone" className="flex items-center gap-1.5">
                        <Phone className="h-3.5 w-3.5 text-muted-foreground" /> Телефон *
                      </Label>
                      <Input id="phone" type="tel" placeholder="+7 (___) ___-__-__" required />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="email" className="flex items-center gap-1.5">
                        <Mail className="h-3.5 w-3.5 text-muted-foreground" /> Email *
                      </Label>
                      <Input id="email" type="email" placeholder="info@company.ru" required />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <Label className="flex items-center gap-1.5">
                      <Package className="h-3.5 w-3.5 text-muted-foreground" /> Интересующая категория
                    </Label>
                    <Select value={category} onValueChange={setCategory}>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите категорию" />
                      </SelectTrigger>
                      <SelectContent>
                        {siteData.categories.map((cat) => (
                          <SelectItem key={cat.id} value={cat.id}>{cat.name}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Тип визита</Label>
                    <RadioGroup value={bookingType} onValueChange={setBookingType} className="grid grid-cols-2 gap-2">
                      {siteData.bookingTypes.map((type) => (
                        <div key={type.value} className="flex items-center space-x-2">
                          <RadioGroupItem value={type.value} id={`type-${type.value}`} />
                          <Label htmlFor={`type-${type.value}`} className="text-sm font-normal cursor-pointer">
                            {type.label}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="comment">Комментарий</Label>
                    <Textarea id="comment" placeholder="Дополнительные пожелания или вопросы..." rows={3} />
                  </div>

                  <Separator />

                  <div className="flex items-center justify-between">
                    <div className="text-sm text-muted-foreground">
                      {date && selectedSlot ? (
                        <span className="flex items-center gap-1.5">
                          <CalendarIcon className="h-4 w-4 text-primary" />
                          {date.toLocaleDateString("ru-RU")} · {selectedSlot}
                        </span>
                      ) : (
                        "Выберите дату и время"
                      )}
                    </div>
                    <Button type="submit" disabled={loading} size="lg" className="accent-gradient text-secondary-foreground hover:opacity-90">
                      {loading ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" /> Отправка...
                        </>
                      ) : (
                        "Забронировать"
                      )}
                    </Button>
                  </div>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Booking;
