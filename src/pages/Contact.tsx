import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Linkedin, MessageCircle } from "lucide-react";

const Contact = () => {
  const whatsappLink = "https://wa.me/+919666634726?text=Hello%20Sreenex%20Machines%2C%20I%20would%20like%20to%20inquire%20about%20your%20products.";

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center bg-sreenex-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-accent font-medium tracking-widest uppercase text-sm">Get In Touch</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mt-2">Contact Us</h1>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-display font-bold text-foreground mb-4">Let's Connect</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We'd love to hear from you. Reach out for inquiries, technical consultation, or to discuss your machinery needs.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  { icon: Phone, title: "Phone", lines: ["+91 96666 34726", "+91 98490 44726","+91 88850 44726" ] },
                  { icon: Mail, title: "Email", lines: ["info@sreenex.com"] },
                  { icon: MapPin, title: "Address", lines: ["Plot No: 6/4, Road No. 11, IDA, Nacharam,", "Hyderabad-500076, Telangana, India"] },
                  { icon: Clock, title: "Business Hours", lines: ["Monday to Saturday: 9:00 AM – 5:30 PM", "Sunday: Holiday"] },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0">
                        <Icon size={22} />
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-foreground">{item.title}</h3>
                        {item.lines.map((line, i) => (
                          <p key={i} className="text-sm text-muted-foreground">{line}</p>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex gap-4">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-600 text-primary-foreground px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors shadow-lg"
                >
                  <MessageCircle size={18} />
                  Chat on WhatsApp
                </a>
                <a
                  href="https://www.linkedin.com/company/sreenex-machines-private-limited/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-700 text-primary-foreground px-6 py-3 rounded-full font-semibold hover:bg-blue-800 transition-colors shadow-lg"
                >
                  <Linkedin size={18} />
                  LinkedIn
                </a>
              </div>
            </motion.div>

            {/* Map placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden border border-border shadow-lg"
            >
              <iframe
  src="https://www.google.com/maps/place/Sreenex+Machines+Pvt+Ltd/@17.4332417,78.5610865,17.28z/data=!4m6!3m5!1s0x3bcb90f74bffffff:0xc168de0ce54b2a87!8m2!3d17.4329891!4d78.5607157!16s%2Fg%2F1tcyjhbz!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDMyMi4wIKXMDSoASAFQAw%3D%3D"
  width="100%"
  height="100%"
  style={{ border: 0, minHeight: "450px" }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  title="Sreenex Machines Location"
/>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
