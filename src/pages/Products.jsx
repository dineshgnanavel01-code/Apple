import { motion, AnimatePresence } from "framer-motion";
import {ArrowDown, Boxes, Check, Sparkles, SlidersHorizontal} from "lucide-react";
import { useMemo, useState } from "react";
import ProductGrid from "../components/ProductGrid";
import { products } from "../data/products";

export default function Products() {
  const [filter, setFilter] = useState("All");

  const filteredProducts = useMemo(() => {
    if (filter === "All") return products;

    return products.filter(
      (product) => product.category === filter
    );
  }, [filter]);

  const filters = [
    "All",
    "iPhone",
    "iPad",
    "Mac",
    "Watch",
    "AirPods",
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f5f5f7] px-4 pb-24 pt-24 sm:px-6 sm:pt-28 lg:px-10">
 

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-blue-200/30 blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-40 top-64 h-[420px] w-[420px] rounded-full bg-purple-200/30 blur-3xl"
        />

        <motion.div
          animate={{
            scale: [1, 1.12, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-20 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-pink-100/30 blur-3xl"
        />
      </div>

      <div className="relative mx-auto max-w-[25000px]">
    

        <section className="relative overflow-hidden rounded-[2rem] border border-black/[0.06] bg-white px-5 py-10 shadow-[0_25px_100px_rgba(0,0,0,0.06)] sm:px-10 sm:py-14 lg:px-16 lg:py-20">
          {/* Grid texture */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
              backgroundSize: "42px 42px",
            }}
          />

          {/* Floating box */}
          <motion.div
            initial={{ opacity: 0, scale: 0, rotate: -20 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{
              duration: 0.8,
              type: "spring",
              stiffness: 160,
            }}
            className="absolute right-7 top-7 hidden h-20 w-20 items-center justify-center rounded-[1.5rem] bg-black text-white shadow-2xl sm:flex lg:right-12 lg:top-12"
          >
            <Boxes
              size={34}
              strokeWidth={1.5}
            />
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-[#f5f5f7] px-4 py-2 text-xs font-medium text-zinc-600"
          >
            <Sparkles size={14} />

            <span>iStore Collection</span>

            <span className="h-1 w-1 rounded-full bg-zinc-300" />

            <span>2026</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative max-w-5xl text-5xl font-semibold leading-[0.92] tracking-[-0.06em] text-[#1d1d1f] sm:text-7xl lg:text-9xl"
          >
            Everything.
            <br />

            <span className="text-zinc-300">
              You want.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.6,
            }}
            className="relative mt-7 max-w-2xl text-base leading-7 text-zinc-500 sm:text-lg"
          >
            Explore the latest Apple products, thoughtfully selected
            for performance, design, and everyday innovation.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.35,
              duration: 0.6,
            }}
            className="relative mt-8 flex flex-wrap gap-3"
          >
            <div className="rounded-full bg-black px-5 py-2.5 text-xs font-medium text-white">
              {products.length} Products
            </div>

            <div className="rounded-full border border-black/10 bg-white px-5 py-2.5 text-xs font-medium text-zinc-600">
              Premium Selection
            </div>

            <div className="rounded-full border border-black/10 bg-white px-5 py-2.5 text-xs font-medium text-zinc-600">
              iStore Express
            </div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="absolute bottom-8 right-10 hidden items-center gap-2 text-xs text-zinc-400 lg:flex"
          >
            <span>Explore products</span>

            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            >
              <ArrowDown size={15} />
            </motion.div>
          </motion.div>
        </section>


        <section className="mt-12">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
          >
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-zinc-400">
                <SlidersHorizontal size={14} />
                Filter Collection
              </div>

              <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                Find your device.
              </h2>
            </div>

            <div className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm text-zinc-500 shadow-sm">
              Showing{" "}
              <span className="font-semibold text-black">
                {filteredProducts.length}
              </span>{" "}
              products
            </div>
          </motion.div>

          {/* Filter pills */}
          <div className="relative -mx-1 overflow-x-auto px-1 pb-3 scrollbar-hide">
            <div className="flex min-w-max gap-2">
              {filters.map((item, index) => {
                const active = filter === item;

                return (
                  <motion.button
                    key={item}
                    initial={{
                      opacity: 0,
                      y: 15,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: index * 0.06,
                      duration: 0.4,
                    }}
                    whileTap={{ scale: 0.94 }}
                    onClick={() => setFilter(item)}
                    className={`group relative flex items-center gap-2 overflow-hidden rounded-full px-5 py-3 text-sm font-medium transition-all duration-300 ${
                      active
                        ? "bg-black text-white shadow-lg shadow-black/10"
                        : "border border-black/[0.06] bg-white text-zinc-600 hover:-translate-y-0.5 hover:bg-zinc-100 hover:text-black"
                    }`}
                  >
                    <AnimatePresence>
                      {active && (
                        <motion.span
                          layoutId="activeFilter"
                          className="absolute inset-0 rounded-full bg-black"
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 30,
                          }}
                        />
                      )}
                    </AnimatePresence>

                    <span className="relative z-10">
                      {item}
                    </span>

                    {active && (
                      <motion.span
                        initial={{
                          opacity: 0,
                          scale: 0,
                        }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                        }}
                        className="relative z-10 flex h-4 w-4 items-center justify-center rounded-full bg-white text-black"
                      >
                        <Check size={10} strokeWidth={3} />
                      </motion.span>
                    )}
                  </motion.button>
                );
              })}
            </div>
          </div>
        </section>

    
        <AnimatePresence mode="wait">
          <motion.section
            key={filter}
            initial={{
              opacity: 0,
              y: 25,
              filter: "blur(8px)",
            }}
            animate={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            exit={{
              opacity: 0,
              y: -15,
              filter: "blur(8px)",
            }}
            transition={{
              duration: 0.45,
              ease: "easeOut",
            }}
            className="mt-8"
          >
            {filteredProducts.length > 0 ? (
              <ProductGrid products={filteredProducts} />
            ) : (
              <div className="flex min-h-[400px] items-center justify-center rounded-[2rem] border border-black/[0.06] bg-white text-center shadow-sm">
                <div className="px-6">
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-zinc-100"
                  >
                    <Boxes
                      size={34}
                      className="text-zinc-400"
                      strokeWidth={1.5}
                    />
                  </motion.div>

                  <h3 className="mt-7 text-2xl font-semibold">
                    No products found
                  </h3>

                  <p className="mt-2 text-sm text-zinc-500">
                    There are currently no products in this collection.
                  </p>

                  <button
                    onClick={() => setFilter("All")}
                    className="mt-6 rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-zinc-800"
                  >
                    View All Products
                  </button>
                </div>
              </div>
            )}
          </motion.section>
        </AnimatePresence>
      </div>
    </main>
  );
}