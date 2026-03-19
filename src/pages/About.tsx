import { motion } from "framer-motion";
import aboutImg from "@/assets/logo.png";
import heroFactory from "@/assets/hero-factory.jpg";

const About = () => {
  return (
    <div>
      {/* Hero Banner */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center overflow-hidden">
        <img src={heroFactory} alt="Sreenex Factory" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-sreenex-navy/70" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent font-medium tracking-widest uppercase text-sm">Our Story</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mt-2">About Us</h1>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-card">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                A Legacy of Precision Engineering
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">SREENEX</strong> was founded in 1973 by Mr. Arjuna Rao Lolakpuri in Hyderabad. Drawing on his extensive experience as a former employee of I.D.P.L., Mr. Lolakpuri's vision led to the establishment of a company that has grown exponentially, developing a wide range of high-quality machinery.
                </p>
                <p>
                  Our unwavering commitment is to design and manufacture machines tailored to meet the unique needs of our valued customers. Over the years, we have successfully installed more than 6,000 specially designed machines across various industries, including pharmaceuticals, bulk drugs, formulations, chemicals, and allied products, both in India and abroad. This widespread presence has solidified our reputation as a trusted partner, recognized for our dedication to delivering quality products and engineering excellence.
                </p>
                <p>
                  As pioneers in the field of pharmaceutical machinery, we have been at the forefront of developing innovative equipment, such as Size Reduction Mills, Blenders, Roll Compactors, and Screen Separators, among others. With over <strong className="text-foreground">50 years</strong> of industry expertise, we specialize in providing cutting-edge machinery that ensures efficiency, regulatory compliance, and optimal performance.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="rounded-2xl shadow-xl bg-white flex items-center justify-center p-10 aspect-[4/3]">
  <img 
    src={aboutImg} 
    alt="Sreenex Logo" 
    className="max-h-full max-w-full object-contain" 
  />
</div>

              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: "50+", label: "Years Experience" },
                  { value: "6,000+", label: "Machines Installed" },
                  { value: "200+", label: "Trusted Clients" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-background border border-border rounded-xl p-4 text-center">
                    <div className="text-2xl md:text-3xl font-display font-bold text-primary">{stat.value}</div>
                    <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-medium tracking-widest uppercase text-sm">Our Process</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2">How We Work</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Pre-Purchase Technical Guidance", desc: "Analyze your requirements and recommend the best machinery." },
              { step: "02", title: "Execution & Manufacturing", desc: "Custom design and precision manufacturing of your equipment." },
              { step: "03", title: "Installation Assistance", desc: "Complete installation and commissioning support on-site." },
              { step: "04", title: "Certification & Turnkey", desc: "Documentation, compliance support, and turnkey acknowledgement." },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative p-8 bg-card border border-border rounded-2xl"
              >
                <div className="text-5xl font-display font-bold text-primary/10 mb-4">{item.step}</div>
                <h3 className="font-display font-bold text-foreground text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding bg-sreenex-navy text-primary-foreground">
        <div className="container-narrow text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-accent font-medium tracking-widest uppercase text-sm">Our Mission</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-6">
              For Compact and Efficient Powdering Solutions
            </h2>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Trust Sreenex, India's leading Pharma Machinery Manufacturer. We aim to contribute to the success of the pharmaceutical industry through precision engineering, dependable solutions, and unwavering commitment to quality.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
