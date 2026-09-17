import { AnimatePresence, motion } from "framer-motion";
import { Search, X, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { products } from "../data/products";

export default function SearchModal({ open, onClose }) {
  const [query, setQuery] = useState("");

  const results = products.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[80] bg-black/60 p-4 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: -30, scale: 0.96, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: -20, scale: 0.96, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.1 }}
            onClick={(e) => e.stopPropagation()}
            className="mx-auto mt-20 max-w-full overflow-hidden rounded-[30px] border border-white/10 bg-white shadow-2xl"
          >
            <div className="flex items-center gap-3 border-b border-zinc-100 p-5">
              <Search size={20} className="text-zinc-400" />

              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search iStore..."
                className="w-full bg-transparent text-lg text-zinc-900 outline-none placeholder:text-zinc-400"
              />

              <motion.button 
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
                onClick={onClose}
                className="rounded-full p-1 text-zinc-500 hover:bg-zinc-100 hover:text-black"
              >
                <X size={20} />
              </motion.button>
            </div>

            <div className="max-h-[60vh] overflow-y-auto p-3">
              {!query && (
                <div className="py-12 text-center">
                  <p className="text-sm text-zinc-400">Type something to search products...</p>
                </div>
              )}

              {query && (
                <motion.div 
                  initial="hidden"
                  animate="show"
                  variants={{
                    hidden: { opacity: 0 },
                    show: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.05
                      }
                    }
                  }}
                  className="space-y-2"
                >
                  {results.map((product) => (
                    <motion.div
                      key={product.id}
                      variants={{
                        hidden: { opacity: 0, y: 10 },
                        show: { opacity: 1, y: 0 }
                      }}
                    >
                      <Link
                        to={`/product/${product.id}`}
                        onClick={onClose}
                        className="group flex items-center justify-between rounded-2xl p-3 transition-colors hover:bg-zinc-100"
                      >
                        <div className="flex items-center gap-4">
                          <div className="overflow-hidden rounded-xl bg-zinc-100">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="h-14 w-14 object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                          </div>

                          <div>
                            <p className="font-medium text-zinc-900 transition-colors group-hover:text-black">
                              {product.name}
                            </p>
                            <p className="text-sm text-zinc-500">
                              ₹{product.price.toLocaleString("en-IN")}
                            </p>
                          </div>
                        </div>

                        <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-400 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:border-black group-hover:text-black">
                          <ArrowUpRight size={14} />
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {query && !results.length && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center text-zinc-500"
                >
                  <p>No products found for &ldquo;<span className="font-medium text-zinc-800">{query}</span>&rdquo;</p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}