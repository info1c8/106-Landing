import { useState, useMemo } from "react";
import { Search, Star, Package, AlertCircle, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { siteData } from "@/data/siteData";

const ITEMS_PER_PAGE = 6;

const Catalog = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [inStockOnly, setInStockOnly] = useState("all");
  const [sortBy, setSortBy] = useState("popular");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    let result = [...siteData.popularProducts];
    if (search) {
      result = result.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()));
    }
    if (category !== "all") {
      const catName = siteData.categories.find((c) => c.id === category)?.name;
      if (catName) {
        result = result.filter((p) => p.category === catName || p.category.includes(catName));
      }
    }
    if (inStockOnly === "instock") {
      result = result.filter((p) => p.inStock);
    }
    if (sortBy === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    }
    return result;
  }, [search, category, inStockOnly, sortBy]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
  const currentItems = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  return (
    <section id="catalog" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-10">
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/15">
            Каталог продукции
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Популярные товары оптом
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Выберите категорию, найдите нужный товар и оформите заказ.
            Все цены указаны с учётом НДС.
          </p>
        </div>

        {/* Filters */}
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Поиск товара..."
                  value={search}
                  onChange={(e) => { setSearch(e.target.value); setPage(1); }}
                  className="pl-9"
                />
              </div>
              <Select value={category} onValueChange={(v) => { setCategory(v); setPage(1); }}>
                <SelectTrigger>
                  <SelectValue placeholder="Категория" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Все категории</SelectItem>
                  {siteData.categories.map((c) => (
                    <SelectItem key={c.id} value={c.id}>{c.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={inStockOnly} onValueChange={(v) => { setInStockOnly(v); setPage(1); }}>
                <SelectTrigger>
                  <SelectValue placeholder="Наличие" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Все товары</SelectItem>
                  <SelectItem value="instock">В наличии</SelectItem>
                </SelectContent>
              </Select>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger>
                  <SelectValue placeholder="Сортировка" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular">По популярности</SelectItem>
                  <SelectItem value="rating">По рейтингу</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Separator className="mt-4" />
            <div className="flex items-center justify-between mt-4 text-sm text-muted-foreground">
              <span>Найдено: <strong className="text-foreground">{filtered.length}</strong> товаров</span>
              <span>Страница {page} из {totalPages}</span>
            </div>
          </CardContent>
        </Card>

        {/* Products grid */}
        {currentItems.length === 0 ? (
          <Card className="py-16">
            <CardContent className="flex flex-col items-center gap-3">
              <AlertCircle className="h-12 w-12 text-muted-foreground/50" />
              <p className="text-muted-foreground">Товары не найдены. Измените параметры фильтра.</p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {currentItems.map((product) => {
              const img = siteData.images[product.image as keyof typeof siteData.images];
              return (
                <Card key={product.name} className="group overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 border-2 hover:border-primary/20">
                  <div className="relative h-48 overflow-hidden">
                    <img src={img} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    {product.inStock ? (
                      <Badge className="absolute top-3 right-3 bg-success text-success-foreground hover:bg-success/90">
                        <CheckCircle2 className="h-3 w-3 mr-1" /> В наличии
                      </Badge>
                    ) : (
                      <Badge variant="destructive" className="absolute top-3 right-3">
                        Нет в наличии
                      </Badge>
                    )}
                  </div>
                  <CardContent className="pt-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline" className="text-[10px]">{product.category}</Badge>
                      <div className="flex items-center gap-0.5">
                        <Star className="h-3 w-3 fill-secondary text-secondary" />
                        <span className="text-xs font-medium">{product.rating}</span>
                      </div>
                    </div>
                    <h3 className="font-semibold text-base leading-tight mb-3 line-clamp-2">{product.name}</h3>
                    <Separator className="mb-3" />
                    <div className="flex items-end justify-between">
                      <div>
                        <div className="text-lg font-bold text-primary">{product.price}</div>
                        <div className="text-xs text-muted-foreground flex items-center gap-1">
                          <Package className="h-3 w-3" /> {product.minOrder}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-0 pb-4 gap-2">
                    <Button asChild size="sm" className="flex-1 accent-gradient text-secondary-foreground hover:opacity-90" disabled={!product.inStock}>
                      <a href="#booking">Заказать</a>
                    </Button>
                    <Button variant="outline" size="sm" disabled={!product.inStock}>
                      В корзину
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <Pagination className="mt-8">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href="#catalog"
                  onClick={(e) => { e.preventDefault(); setPage(Math.max(1, page - 1)); }}
                  className={page === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                />
              </PaginationItem>
              {Array.from({ length: totalPages }, (_, i) => (
                <PaginationItem key={i}>
                  <PaginationLink
                    href="#catalog"
                    isActive={page === i + 1}
                    onClick={(e) => { e.preventDefault(); setPage(i + 1); }}
                    className="cursor-pointer"
                  >
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationNext
                  href="#catalog"
                  onClick={(e) => { e.preventDefault(); setPage(Math.min(totalPages, page + 1)); }}
                  className={page === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        )}
      </div>
    </section>
  );
};

export default Catalog;
