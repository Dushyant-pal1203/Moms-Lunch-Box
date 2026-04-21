import { Link } from "wouter";
import { Phone } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card py-5">
      <div className="container-fluid">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Logo"
              className="w-12 h-12 rounded-full object-cover shadow-sm"
            />
            <div>
              <div className="font-display font-bold text-foreground">
                Taste of Mom's Hand
              </div>
              <div className="text-xs text-muted-foreground">
                Made with Love. Served with Care.
              </div>
            </div>
          </div>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/menu" className="hover:text-primary transition-colors">
              Menu
            </Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors flex items-center gap-1"
            >
              <Phone className="w-3.5 h-3.5" />
              WhatsApp
            </a>
          </div>
        </div>
        <div className="mt-4 pt-6 border-t border-border text-center text-xs text-muted-foreground/60">
          © 2026 Taste of Mom's Hand · All rights reserved · +91 93100 04022
        </div>
      </div>
    </footer>
  );
}
