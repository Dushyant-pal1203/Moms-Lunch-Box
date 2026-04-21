import { ReactNode } from "react";
import { FloatingWhatsApp } from "@/components/common/FloatingWhatsApp";
import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <FloatingWhatsApp />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
