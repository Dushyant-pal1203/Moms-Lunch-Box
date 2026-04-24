import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Phone } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container-fluid px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          data-testid="link-nav-home"
          className="flex items-center gap-2.5"
        >
          <img
            src="/logo.png"
            alt="Logo"
            className="w-9 h-9 rounded-full object-cover shadow-sm"
          />
          <span className="font-display font-bold text-base text-foreground hidden sm:block">
            Taste of Mom's Hand
          </span>
        </Link>
        <div className="flex items-center gap-3">
          <Link
            href="/menu"
            data-testid="link-nav-menu"
            className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors px-3 py-1.5"
          >
            Menu
          </Link>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="button-nav-order"
            className="flex items-center gap-1.5 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-4 py-2 rounded-full transition-all duration-200 shadow-sm hover:shadow-md"
          >
            <Phone className="w-3.5 h-3.5" />
            Order
          </a>
        </div>
      </div>
    </nav>
  );
}
