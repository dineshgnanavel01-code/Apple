import { AnimatePresence, motion } from "framer-motion";
import ProductCard from "./ProductCard";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 35,
    scale: 0.96,
    filter: "blur(6px)",
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    y: 20,
    scale: 0.96,
    filter: "blur(5px)",
    transition: {
      duration: 0.25,
    },
  },
};

export default function ProductGrid({ products = [] }) {
  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        layout
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            layout
            variants={itemVariants}
            custom={index}
            whileHover={{
              y: -8,
              scale: 1.012,
              transition: {
                duration: 0.25,
                ease: "easeOut",
              },
            }}
            className="relative min-w-0"
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="pointer-events-none absolute -inset-2 -z-10 rounded-[2rem] bg-black/[0.04] blur-xl"
            />

            <ProductCard product={product} />
          </motion.div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
}