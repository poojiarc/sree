import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Search, Settings, Wrench, Shield, Cog, Headphones, Phone, Mail, MapPin, Clock, Linkedin, ChevronRight } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import aboutImg from "@/assets/logo.png";
import { products } from "@/data/products";

import biocon from "@/assets/clients/biocon.webp";
import cargill from "@/assets/clients/Cargil.jpg";
import cipla from "@/assets/clients/cipla.png";
import clariant from "@/assets/clients/Clariant.jpg";
import cohance from "@/assets/clients/cohance.png";
import cronus from "@/assets/clients/cronus.png";
import divis from "@/assets/clients/divis.png";
import drReddy from "@/assets/clients/dr-reddy.png";
import gpt from "@/assets/clients/GPt.png";
import granules from "@/assets/clients/Granules.jpg";
import hetero from "@/assets/clients/hetero.png";
import lantech from "@/assets/clients/lantech.png";
import laurus from "@/assets/clients/Laurus.png";
import leePharma from "@/assets/clients/lee-Pharma.png";
import lupin from "@/assets/clients/lupin.png";
import malladi from "@/assets/clients/MALLADI.webp";
import metrochem from "@/assets/clients/METROCHEM.png";
import mfl from "@/assets/clients/MFL.png";
import microLabs from "@/assets/clients/micro-labs.jpg";
import msn from "@/assets/clients/MSN.png";
import natco from "@/assets/clients/natco-pharma.avif";
import neuland from "@/assets/clients/NEULAND.jpg";
import orchid from "@/assets/clients/orchid-pharma.jpg";
import sami from "@/assets/clients/Sami labs.webp";   // ✅ FIXED
import sekhmet from "@/assets/clients/Sekhmet.webp";
import srikrishna from "@/assets/clients/Srikirishna.jpg";
import virchows from "@/assets/clients/virchows.png";
import aurobindo from "@/assets/clients/aurbindo.jpg";
import balaPharma from "@/assets/clients/bala-pharma.png";

const heroImages = [hero1, hero2, hero3];
const clientLogos = [
  biocon,
  cargill,
  cipla,
  clariant,
  cohance,
  cronus,
  divis,
  drReddy,
  gpt,
  granules,
  hetero,
  lantech,
  laurus,
  leePharma,
  lupin,
  malladi,
  metrochem,
  mfl,
  microLabs,
  msn,
  natco,
  neuland,
  orchid,
  sami,
  sekhmet,
  srikrishna,
  virchows,
  aurobindo,
  balaPharma,
];

const services = [
  {
    title: "Pre-Purchase Technical Consultation",
    description: "Our experienced engineering team provides detailed technical guidance before equipment selection. We analyze the client's process requirements, production capacity, and product characteristics to recommend the most suitable machinery.",
    icon: Search,
  },
  {
    title: "Custom Machine Design & Development",
    description: "SREENEX specializes in designing and developing machinery based on customer-specific requirements. From laboratory scale equipment to full production scale systems, our engineering team creates tailored solutions.",
    icon: Settings,
  },
  {
    title: "Installation & Commissioning Support",
    description: "Our experts provide complete installation guidance and commissioning assistance to ensure that equipment is installed properly and operates efficiently, complying with cGMP standards.",
    icon: Wrench,
  },
  {
    title: "Documentation & Compliance Support",
    description: "SREENEX provides complete documentation required for pharmaceutical equipment validation, certifications to support regulatory compliance and validation requirements.",
    icon: Shield,
  },
  {
    title: "Operation & Equipment Safety Guidance",
    description: "We provide detailed instructions and technical assistance regarding safe operation, maintenance procedures, and equipment handling to ensure efficient machine performance and workplace safety.",
    icon: Cog,
  },
  {
    title: "After-Sales Technical Support",
    description: "Our relationship with clients continues after installation through ongoing technical support, troubleshooting assistance, and operational guidance to maintain optimal machine performance.",
    icon: Headphones,
  },
];

const SectionHeader = ({ subtitle, title }: { subtitle: string; title: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="text-center mb-12 md:mb-16"
  >
    <span className="text-primary font-medium tracking-widest uppercase text-sm">{subtitle}</span>
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mt-2">{title}</h2>
  </motion.div>
);

const Index = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const previewProducts = products.slice(0, 6);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-svh w-full overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImage}
              src={heroImages[currentImage]}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="h-full w-full object-cover"
              alt="Sreenex Machines"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-sreenex-navy/60 backdrop-blur-[2px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-3xl"
          >
            <span className="text-accent font-medium tracking-widest uppercase text-sm mb-4 block">
              Precision Engineering Since 1970
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-tight mb-6 text-balance">
              Building Partnerships, <br className="hidden sm:block" /> Not Just Machines.
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-primary-foreground/85 leading-relaxed mb-8 max-w-2xl">
              At SREENEX MACHINES PVT. LTD, we believe in building more than just machines — we build partnerships. By understanding our clients' needs and providing dependable technical support, we aim to contribute to the success and growth of the pharmaceutical industry by providing high-quality, precision-engineered machinery and dependable solutions.
            </p>
            <p className="text-sm sm:text-base text-primary-foreground/70 mb-8">
              With a legacy of trust and a future driven by innovation, SREENEX MACHINES PVT. LTD continues to move forward as a reliable partner.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold transition-all hover:opacity-90 shadow-lg"
              >
                Explore Our Solutions
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/book"
                className="inline-flex items-center justify-center gap-2 border border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-full font-semibold transition-all hover:bg-primary-foreground/10"
              >
                Book a Product Now
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Hero indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {heroImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentImage(i)}
              className={`w-3 h-3 rounded-full transition-all ${i === currentImage ? "bg-primary-foreground w-8" : "bg-primary-foreground/40"}`}
            />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-card">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary font-medium tracking-widest uppercase text-sm">About Us</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2 mb-6">
                50+ Years of Engineering Excellence
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                SREENEX was founded in 1973 by Mr. Arjuna Rao Lolakpuri in Hyderabad. Drawing on his extensive experience as a former employee of I.D.P.L., Mr. Lolakpuri's vision led to the establishment of a company that has grown exponentially, developing a wide range of high-quality machinery.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our unwavering commitment is to design and manufacture machines tailored to meet the unique needs of our valued customers. Over the years, we have successfully installed more than 6,000 specially designed machines across various industries, including pharmaceuticals, bulk drugs, formulations, chemicals, and allied products, both in India and abroad.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                As pioneers in the field of pharmaceutical machinery, we have been at the forefront of developing innovative equipment, such as Size Reduction Mills, Blenders, Roll Compactors, and Screen Separators.
              </p>
              <div className="flex flex-wrap gap-6">
                <div className="text-center">
                  <div className="text-3xl font-display font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-display font-bold text-primary">6,000+</div>
                  <div className="text-sm text-muted-foreground">Machines Installed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-display font-bold text-primary">200+</div>
                  <div className="text-sm text-muted-foreground">Trusted Clients</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="rounded-2xl shadow-2xl bg-white flex items-center justify-center p-8 aspect-[4/3]">
  <img
    src={aboutImg}
    alt="Sreenex Logo"
    className="max-w-full max-h-full object-contain"
  />
</div>
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-xl hidden md:block">
                <div className="text-2xl font-display font-bold">EST. 1970</div>
                <div className="text-sm text-primary-foreground/80">Hyderabad, India</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <SectionHeader subtitle="What We Offer" title="Our Services" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="p-8 bg-card border border-border rounded-2xl shadow-sm hover:shadow-xl transition-all group"
                >
                  <div className="w-12 h-12 bg-muted text-primary rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-lg font-display font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="section-padding bg-card">
        <div className="container-narrow">
          <SectionHeader subtitle="Our Equipment" title="Featured Products" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {previewProducts.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link
                  to={`/products/${product.slug}`}
                  className="group block bg-background border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all"
                >
                  <div className="aspect-[4/3] bg-muted overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display font-bold text-foreground text-lg mb-2">{product.name}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{product.shortDescription}</p>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                      Learn More <ChevronRight size={14} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-opacity shadow-lg"
            >
              View All Products
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Clients Marquee */}
      <section className="py-16 bg-muted border-y border-border overflow-hidden">
        <div className="container-narrow mb-10">
          <SectionHeader subtitle="Trusted Partners" title="Our Clients" />
          <p className="text-center text-muted-foreground -mt-8 mb-8">
            Trusted by over 200+ clients. Our clients are our top priority and we are committed to providing them with the highest level of services.
          </p>
        </div>
        <div className="overflow-hidden whitespace-nowrap">
          <div className="flex gap-12 items-center animate-marquee w-max">
            {[...clientLogos, ...clientLogos].map((logo, i) => (
              <img
                key={i}
                src={logo}
                alt={`Client ${(i % clientLogos.length) + 1}`}
                className="h-14 md:h-16 w-auto object-contain hover:scale-105 transition-all duration-300"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Preview */}
      <section className="section-padding bg-card">
        <div className="container-narrow">
          <SectionHeader subtitle="Get In Touch" title="Contact Us" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Phone,
                title: "Phone",
                lines: ["+91 88850 44726", "+91 98490 44726", "+91 96666 34726"],
              },
              {
                icon: Mail,
                title: "Email",
                lines: ["info@sreenex.com"],
              },
              {
                icon: MapPin,
                title: "Address",
                lines: ["Plot No: 6/4, Road No. 11, IDA, Nacharam, Hyderabad-500076, Telangana, India"],
              },
              {
                icon: Clock,
                title: "Business Hours",
                lines: ["Mon–Sat: 9:30 AM – 5:30 PM", "Sunday: Holiday"],
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="p-6 bg-background border border-border rounded-2xl text-center"
                >
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-display font-bold text-foreground mb-2">{item.title}</h3>
                  {item.lines.map((line, j) => (
                    <p key={j} className="text-sm text-muted-foreground">{line}</p>
                  ))}
                </motion.div>
              );
            })}
          </div>
          <div className="text-center mt-8">
            <a
              href="https://www.linkedin.com/company/sreenex-machines-private-limited/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
            >
              <Linkedin size={18} />
              Follow us on LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
