import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => (
  <footer className="bg-card border-t border-border mt-16">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <h3 className="text-xl font-bold text-primary">Glow & Shine</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Enhancing your natural beauty every day
          </p>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <p className="text-sm text-muted-foreground">📞 +1 (555) 123-4567</p>
          <p className="text-sm text-muted-foreground">✉️ hello@glowandshine.com</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <div className="flex flex-col gap-1">
            {[
              { to: "/", label: "Home" },
              { to: "/services", label: "Services" },
              { to: "/privacy", label: "Privacy Policy" },
              { to: "/terms", label: "Terms of Service" },
            ].map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-semibold mb-3">Follow Us</h4>
          <div className="flex gap-3">
            <a href="#" className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Transparency notice */}
      <div className="mt-8 pt-6 border-t border-border">
        <p className="text-xs text-muted-foreground text-center italic">
          We are committed to transparency and honesty. All services, prices, and policies are clearly communicated to our clients with no hidden fees.
        </p>
        <p className="text-xs text-muted-foreground text-center mt-3">
          © {new Date().getFullYear()} Glow & Shine Beauty Salon. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
