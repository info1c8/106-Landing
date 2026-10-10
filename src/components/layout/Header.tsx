import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone, Mail, ShoppingCart, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { siteData } from "@/data/siteData";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-md border-b border-border"
          : "bg-background/80 backdrop-blur-sm"
      }`}
    >
      {/* Top bar */}
      <div className="hidden lg:flex items-center justify-between px-8 py-1.5 border-b border-border text-xs text-muted-foreground">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <Phone className="h-3 w-3" /> {siteData.company.phone}
          </span>
          <span className="flex items-center gap-1.5">
            <Mail className="h-3 w-3" /> {siteData.company.email}
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span>{siteData.company.workHours}</span>
          <Badge variant="secondary" className="text-[10px]">
            НДС включён
          </Badge>
        </div>
      </div>

      {/* Main nav */}
      <div className="flex items-center justify-between px-4 lg:px-8 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <div className="w-10 h-10 rounded-lg hero-gradient flex items-center justify-center text-primary-foreground font-bold text-lg">
            ЭП
          </div>
          <div className="hidden sm:block">
            <div className="font-bold text-foreground leading-tight">
              {siteData.company.name}
            </div>
            <div className="text-[11px] text-muted-foreground">
              {siteData.company.slogan}
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {siteData.navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-accent/50 rounded-md transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="hidden md:flex">
                <ShoppingCart className="h-4 w-4 mr-1" />
                Каталог
                <ChevronDown className="h-3 w-3 ml-1" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>Категории товаров</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {siteData.categories.slice(0, 6).map((cat) => (
                <DropdownMenuItem key={cat.id} asChild>
                  <a href="#catalog" className="flex items-center justify-between">
                    {cat.name}
                    <Badge variant="outline" className="text-[10px]">
                      {cat.count}
                    </Badge>
                  </a>
                </DropdownMenuItem>
              ))}
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <a href="#categories">Все категории →</a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button asChild size="sm" className="hidden sm:flex accent-gradient text-secondary-foreground hover:opacity-90">
            <a href="#booking">Заказать звонок</a>
          </Button>

          {/* Mobile menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex items-center justify-between mb-6">
                <div className="font-bold text-lg">{siteData.company.name}</div>
                <SheetClose asChild>
                  <Button variant="ghost" size="icon">
                    <X className="h-5 w-5" />
                  </Button>
                </SheetClose>
              </div>
              <nav className="flex flex-col gap-1">
                {siteData.navLinks.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <a
                      href={link.href}
                      className="px-4 py-3 text-sm font-medium rounded-lg hover:bg-accent transition-colors"
                    >
                      {link.label}
                    </a>
                  </SheetClose>
                ))}
              </nav>
              <div className="mt-6 pt-6 border-t border-border space-y-3">
                <Button asChild className="w-full accent-gradient text-secondary-foreground">
                  <a href="#booking">Оставить заявку</a>
                </Button>
                <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <Phone className="h-4 w-4" /> {siteData.company.phone}
                  </span>
                  <span className="flex items-center gap-2">
                    <Mail className="h-4 w-4" /> {siteData.company.email}
                  </span>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
