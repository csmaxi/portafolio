'use client'
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";
import { Menu } from "lucide-react";
import { useState } from "react";

const navigation = [
  { name: "Inicio", href: "#" },
  { name: "Servicios", href: "#servicios" },
  { name: "Proceso", href: "#proceso" },
  { name: "Precios", href: "#precios" },
  { name: "Preguntas frecuentes", href: "#faq" },
];
      
function handleNavClick(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) {
  if (href.startsWith('#') && href.length > 1) {
    e.preventDefault();
    const el = document.getElementById(href.slice(1));
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="text-xl font-bold">
              csmaxi
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                onClick={e => handleNavClick(e, item.href)}
              >
                {item.name}
              </a>
            ))}
            {/* <Button asChild>
              <a href="#contacto" onClick={e => handleNavClick(e, '#contacto')}>Contacto</a>
            </Button> */}
            <ModeToggle />
          </div>

          {/* Mobile Navigation Button */}
          <div className="flex md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-base font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                  onClick={e => {
                    handleNavClick(e, item.href);
                    setIsMenuOpen(false);
                  }}
                >
                  {item.name}
                </a>
              ))}
              <div className="mt-4 flex items-center justify-between px-3">
                {/* <Button asChild className="w-full">
                  <a href="#contacto" onClick={e => { handleNavClick(e, '#contacto'); setIsMenuOpen(false); }}>Contacto</a>
                </Button> */}
                <ModeToggle />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}