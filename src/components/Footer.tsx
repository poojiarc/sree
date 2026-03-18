import { Link } from "react-router-dom";
import { Home, Info, Factory, Phone, ShoppingCart, Mail, MapPin, Clock, Linkedin, Heart, Wrench, Settings, Shield, Headphones, BookOpen, Cog } from "lucide-react";
import logo from "@/assets/sreenex-logo.png";

const Footer = () => {
  return (
    <footer className="bg-sreenex-navy text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <img src={logo} alt="Sreenex" className="h-12 mb-4 brightness-0 invert" />
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              Precision-engineered pharmaceutical machinery since 1970. Trusted by 200+ clients across India and abroad.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "Home", path: "/", icon: Home },
                { label: "About Us", path: "/about", icon: Info },
                { label: "Products", path: "/products", icon: Factory },
                { label: "Contact Us", path: "/contact", icon: Phone },
                { label: "Book a Product", path: "/book", icon: ShoppingCart },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.path}>
                    <Link to={item.path} className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                      <Icon size={14} />
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-3">
              {[
                { label: "Technical Consultation", icon: BookOpen },
                { label: "Custom Design", icon: Settings },
                { label: "Installation Support", icon: Wrench },
                { label: "Compliance Support", icon: Shield },
                { label: "Safety Guidance", icon: Cog },
                { label: "After-Sales Support", icon: Headphones },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.label} className="flex items-center gap-2 text-sm text-primary-foreground/70">
                    <Icon size={14} />
                    {item.label}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-primary-foreground/70">
                <Phone size={14} className="mt-0.5 shrink-0" />
                <span>+91 88850 44726<br />+91 98490 44726<br />+91 96666 34726</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-primary-foreground/70">
                <Mail size={14} className="shrink-0" />
                info@sreenex.com
              </li>
              <li className="flex items-start gap-2 text-sm text-primary-foreground/70">
                <MapPin size={14} className="mt-0.5 shrink-0" />
                <span>Plot No: 6/4, Road No. 11, IDA, Nacharam, Hyderabad-500076, Telangana, India</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-primary-foreground/70">
                <Clock size={14} className="shrink-0" />
                Mon–Sat: 9:30 AM – 5:30 PM
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/sreenex-machines-private-limited/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  <Linkedin size={14} />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center space-y-2">
          <p className="text-sm text-primary-foreground/60 flex items-center justify-center gap-1">
            Made with <Heart size={14} className="text-sreenex-red fill-current" /> by{" "}
            <a href="https://staffarc.com" target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-primary-foreground transition-colors">
              StaffArc
            </a>
          </p>
          <p className="text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} Sreenex Machines Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
