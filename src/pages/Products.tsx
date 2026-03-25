// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { ChevronRight } from "lucide-react";
// import { products } from "@/data/products";

// const Products = () => {
//   const categories = [
//     { key: "pulverisers" as const, label: "Pulverisers" },
//     { key: "mills" as const, label: "Mills" },
//     { key: "process" as const, label: "Process Equipment" },
//   ];

//   return (
//     <div>
//       {/* Hero */}
//       <section className="relative h-[40vh] md:h-[50vh] flex items-center bg-sreenex-navy">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//           <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
//             <span className="text-accent font-medium tracking-widest uppercase text-sm">Our Equipment</span>
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mt-2">Products</h1>
//             <p className="text-lg text-primary-foreground/70 mt-4 max-w-xl">
//               Precision-engineered pharmaceutical machinery for size reduction, blending, and processing.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Products by Category */}
//       {categories.map((cat) => {
//         const catProducts = products.filter((p) => p.category === cat.key);
//         if (catProducts.length === 0) return null;
//         return (
//           <section key={cat.key} className="section-padding bg-card even:bg-background">
//             <div className="container-narrow">
//               <motion.h2
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-8"
//               >
//                 {cat.label}
//               </motion.h2>
//               <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {catProducts.map((product, i) => (
//                   <motion.div
//                     key={product.id}
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.5, delay: i * 0.1 }}
//                   >
//                     <Link
//                       to={`/products/${product.slug}`}
//                       className="group block bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all"
//                     >
//                       <div className="aspect-[4/3] bg-muted overflow-hidden">
//                         <img
//                           src={product.image}
//                           alt={product.name}
//                           className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
//                         />
//                       </div>
//                       <div className="p-6">
//                         <h3 className="font-display font-bold text-foreground text-lg mb-2">{product.name}</h3>
//                         <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{product.shortDescription}</p>
//                         <span className="inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
//                           View Details <ChevronRight size={14} />
//                         </span>
//                       </div>
//                     </Link>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           </section>
//         );
//       })}
//     </div>
//   );
// };

// export default Products;
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { products } from "@/data/products";

// ✅ ISO images
import iso1 from "@/assets/iso/iso1.jpg";
import iso2 from "@/assets/iso/iso2.jpg";

const Products = () => {
  const categories = [
    { key: "pulverisers" as const, label: "Pulverisers" },
    { key: "mills" as const, label: "Mills" },
    { key: "process" as const, label: "Process Equipment" },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center bg-sreenex-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-accent font-medium tracking-widest uppercase text-sm">Our Equipment</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mt-2">
              Products
            </h1>
            <p className="text-lg text-primary-foreground/70 mt-4 max-w-xl">
              Precision-engineered pharmaceutical machinery for size reduction, blending, and processing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products by Category */}
      {categories.map((cat) => {
        const catProducts = products.filter((p) => p.category === cat.key);
        if (catProducts.length === 0) return null;

        return (
          <section key={cat.key} className="py-8 bg-card even:bg-background">
            <div className="container-narrow">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6"
              >
                {cat.label}
              </motion.h2>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {catProducts.map((product, i) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <Link
                      to={`/products/${product.slug}`}
                      className="group block bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all"
                    >
                      <div className="aspect-[4/3] bg-muted overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>

                      <div className="p-6">
                        <h3 className="font-display font-bold text-foreground text-lg mb-2">
                          {product.name}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                          {product.shortDescription}
                        </p>
                        <span className="inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                          View Details <ChevronRight size={14} />
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* ✅ ISO Certification Section */}
      <section className="py-10 bg-background">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary font-medium tracking-widest uppercase text-sm">
                ISO Certification
              </span>

              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2 mb-6">
                Commitment to Quality & Excellence
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">Sreenex Machines</strong> is an 
                <strong className="text-primary"> ISO-certified organization</strong>, 
                reflecting our commitment to maintaining the highest standards of 
                <strong className="text-foreground"> quality, consistency, and reliability</strong>.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-4">
                Our certification ensures that all processes — from 
                <strong className="text-foreground"> design to manufacturing</strong> — 
                follow strict international quality guidelines.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                This enables us to deliver 
                <strong className="text-foreground"> dependable machinery</strong>, 
                <strong className="text-foreground"> continuous improvement</strong>, 
                and enhanced 
                <strong className="text-foreground"> customer satisfaction</strong>.
              </p>
            </motion.div>

            {/* Images */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="bg-card p-4 rounded-xl shadow-lg hover:scale-105 transition-all">
                <img src={iso1} alt="ISO Certificate 1" className="w-full h-full object-contain" />
              </div>

              <div className="bg-card p-4 rounded-xl shadow-lg hover:scale-105 transition-all">
                <img src={iso2} alt="ISO Certificate 2" className="w-full h-full object-contain" />
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;