import { motion } from "framer-motion";
import { ArrowDown, Leaf, Sparkles, Grid3X3 } from "lucide-react";
import { useParams } from "react-router-dom";

import ProductGrid from "../components/ProductGrid";
import { products } from "../data/products";

export default function Category() {
  const { name } = useParams();

  const categoryName = decodeURIComponent(name || "Category");

  const categoryProducts = products.filter(
    (product) =>
      product.category.toLowerCase() === categoryName.toLowerCase()
  );

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f7f7f5] px-4 pb-24 pt-24 sm:px-6 sm:pt-28 lg:px-10">


      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.5, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl sm:h-96 sm:w-96"
        />

        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-32 top-40 h-80 w-80 rounded-full bg-violet-200/30 blur-3xl"
        />

        {/* Bottom orb */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-100/30 blur-3xl"
        />
      </div>

      <div className="relative mx-auto max-w-[1500px]">
    

        <section className="relative mb-14 overflow-hidden rounded-[2rem] border border-black/[0.06] bg-white/70 px-5 py-10 shadow-[0_20px_80px_rgba(0,0,0,0.06)] backdrop-blur-xl sm:px-10 sm:py-14 lg:px-16 lg:py-20">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          {/* Floating icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0, rotate: -30 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{
              delay: 0.15,
              duration: 0.7,
              type: "spring",
              stiffness: 180,
            }}
            className="absolute right-6 top-6 hidden h-20 w-20 items-center justify-center rounded-3xl bg-black text-white shadow-xl sm:flex lg:right-12 lg:top-10"
          >
            <Leaf size={32} strokeWidth={1.5} />
          </motion.div>

          <div className="relative max-w-full">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-medium text-zinc-600 shadow-sm"
            >
              <Sparkles size={14} />

              <span>Curated Collection</span>

              <span className="h-1 w-1 rounded-full bg-zinc-300" />

              <span>{categoryProducts.length} Products</span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.1,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-5xl font-semibold leading-[0.95] tracking-[-0.055em] text-[#1d1d1f] sm:text-7xl lg:text-8xl"
            >
              {categoryName}
              <span className="text-zinc-300">.</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.25,
                duration: 0.6,
              }}
              className="mt-6 max-w-2xl text-base leading-7 text-zinc-500 sm:text-lg"
            >
              Discover our carefully selected collection of{" "}
              <span className="font-medium text-zinc-800">
                {categoryName}
              </span>{" "}
              products, designed to bring quality, style, and a premium
              experience to your everyday life.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.35,
                duration: 0.6,
              }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <div className="flex items-center gap-2 rounded-full bg-black px-4 py-2.5 text-xs font-medium text-white">
                <Grid3X3 size={14} />
                {categoryProducts.length} Items
              </div>

              <div className="rounded-full border border-black/10 bg-white px-4 py-2.5 text-xs font-medium text-zinc-600">
                Premium Collection
              </div>

              <div className="rounded-full border border-black/10 bg-white px-4 py-2.5 text-xs font-medium text-zinc-600">
                iStore Express
              </div>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="absolute bottom-7 right-8 hidden items-center gap-2 text-xs text-zinc-400 lg:flex"
          >
            <span>Explore collection</span>

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



        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"
        >
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-zinc-400">
              Shop Collection
            </p>

            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Explore {categoryName}
            </h2>
          </div>

          <div className="flex h-10 w-fit items-center rounded-full border border-black/10 bg-white px-4 text-sm text-zinc-500 shadow-sm">
            {categoryProducts.length}{" "}
            {categoryProducts.length === 1 ? "product" : "products"}
          </div>
        </motion.div>

       

        {categoryProducts.length > 0 ? (
          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.08,
                },
              },
            }}
          >
            <ProductGrid products={categoryProducts} />
          </motion.div>
        ) : (
         

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex min-h-[420px] items-center justify-center rounded-[2rem] border border-black/[0.06] bg-white p-8 text-center shadow-sm"
          >
            <div className="max-w-md">
              <motion.div
                animate={{
                  y: [0, -8, 0],
                  rotate: [0, 3, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-zinc-100"
              >
                <Leaf
                  size={34}
                  strokeWidth={1.5}
                  className="text-zinc-400"
                />
              </motion.div>

              <h2 className="mt-7 text-2xl font-semibold tracking-tight">
                Nothing here yet
              </h2>

              <p className="mt-3 text-sm leading-6 text-zinc-500">
                We couldn't find any products in the{" "}
                <span className="font-medium text-zinc-800">
                  {categoryName}
                </span>{" "}
                category.
              </p>

              <a
                href="/products"
                className="mt-7 inline-flex rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:scale-105 hover:bg-zinc-800 active:scale-95"
              >
                Browse All Products
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </main>
  );
}