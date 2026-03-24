import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { products } from "@/data/products";

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-2xl font-display font-bold text-foreground mb-4">Product Not Found</h1>
          <Link to="/products" className="text-primary hover:underline">← Back to Products</Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Breadcrumb */}
      <section className="bg-muted border-b border-border pt-24 pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link to="/products" className="hover:text-foreground transition-colors">Products</Link>
            <ChevronRight size={14} />
            <span className="text-foreground">{product.name}</span>
          </div>
        </div>
      </section>

      {/* Product Content */}
      <section className="section-padding bg-card">
        <div className="container-narrow">
          <Link to="/products" className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 mb-8 transition-colors">
            <ArrowLeft size={16} /> Back to Products
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-muted rounded-2xl p-8 flex items-center justify-center"
            >
              <img src={product.image} alt={product.name} className="max-h-[400px] w-auto object-contain" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary font-medium tracking-widest uppercase text-xs">
                {product.category === "pulverisers" ? "Pulveriser" : product.category === "mills" ? "Mill" : "Process Equipment"}
              </span>
              <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-1 mb-6">{product.name}</h1>
              <p className="text-muted-foreground leading-relaxed mb-8">{product.description}</p>

              {product.finenessRange && (
                <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 mb-6">
                  <span className="text-sm font-medium text-primary">Fineness Range:</span>
                  <span className="text-sm text-foreground ml-2">{product.finenessRange}</span>
                </div>
              )}

              {product.specs && product.specs.length > 0 && (
                <div>
                  <h3 className="font-display font-bold text-foreground text-lg mb-4">Technical Specifications</h3>
                  <div className="border border-border rounded-xl overflow-hidden">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-muted">
                          <th className="text-left px-4 py-3 font-semibold text-foreground">Model</th>
                          <th className="text-left px-4 py-3 font-semibold text-foreground">Capacity</th>
                          <th className="text-left px-4 py-3 font-semibold text-foreground">Motor</th>
                        </tr>
                      </thead>
                      <tbody>
                        {product.specs.map((spec) => (
                          <tr key={spec.model} className="border-t border-border">
                            <td className="px-4 py-3 text-foreground font-medium">{spec.model}</td>
                            <td className="px-4 py-3 text-muted-foreground">{spec.capacity}</td>
                            <td className="px-4 py-3 text-muted-foreground">{spec.motor}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              <div className="mt-8">
                <Link
                  to="/book"
                  className="inline-flex items-center gap-2 bg-sreenex-red text-primary-foreground px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-opacity shadow-lg"
                >
                  Enquire Now
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
