import { useState } from "react";
import { motion } from "framer-motion";
import { Send, User, Phone, Mail, MessageSquare, Package } from "lucide-react";
import { products } from "@/data/products";
import { useToast } from "@/hooks/use-toast";

const BookProduct = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    product: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Product Inquiry: ${form.product}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nProduct: ${form.product}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:info@sreenex.com?subject=${subject}&body=${body}`;
    toast({
      title: "Redirecting to email",
      description: "Your email client should open shortly with the inquiry details.",
    });
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center bg-sreenex-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-accent font-medium tracking-widest uppercase text-sm">Inquire Now</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mt-2">Enquire Now</h1>
            <p className="text-lg text-primary-foreground/70 mt-4 max-w-xl">
              Fill out the form below and our team will get back to you shortly.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="max-w-2xl mx-auto">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-background border border-border rounded-2xl p-8 md:p-12 shadow-lg space-y-6"
          >
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
                <User size={16} /> Customer Name *
              </label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-input bg-card text-foreground focus:ring-2 focus:ring-ring focus:border-transparent outline-none transition-all"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
                <Phone size={16} /> Phone Number *
              </label>
              <input
                type="tel"
                required
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-input bg-card text-foreground focus:ring-2 focus:ring-ring focus:border-transparent outline-none transition-all"
                placeholder="+91 XXXXX XXXXX"
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
                <Mail size={16} /> Email ID *
              </label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-input bg-card text-foreground focus:ring-2 focus:ring-ring focus:border-transparent outline-none transition-all"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
                <Package size={16} /> Select Product *
              </label>
              <select
                required
                value={form.product}
                onChange={(e) => setForm({ ...form, product: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-input bg-card text-foreground focus:ring-2 focus:ring-ring focus:border-transparent outline-none transition-all"
              >
                <option value="">Choose a product...</option>
                {products.map((p) => (
                  <option key={p.id} value={p.name}>{p.name}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
                <MessageSquare size={16} /> Message
              </label>
              <textarea
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-input bg-card text-foreground focus:ring-2 focus:ring-ring focus:border-transparent outline-none transition-all resize-none"
                placeholder="Tell us about your requirements..."
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-sreenex-red text-primary-foreground py-4 rounded-full font-semibold hover:opacity-90 transition-opacity shadow-lg text-lg"
            >
              <Send size={18} />
              Submit Inquiry
            </button>
          </motion.form>
        </div>
      </section>
    </div>
  );
};

export default BookProduct;
