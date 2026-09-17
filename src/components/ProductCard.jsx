import { motion } from "framer-motion";
import {  ArrowUpRight, Eye, Heart, ShoppingBag, Sparkles, Star,} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product, onPreview }) {
  const [liked, setLiked] = useState(false);
  const [imageError, setImageError] = useState(false);

  const { addToCart } = useCart();

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 35,
        rotateX: 8,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        rotateX: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.65,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{
        y: -12,
        rotateX: 2,
        rotateY: -3,
      }}
      className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[2rem] border border-black/[0.04] bg-[#f5f5f7] p-4 shadow-[0_10px_35px_rgba(0,0,0,0.05)] transition-shadow duration-500 hover:shadow-[0_30px_80px_rgba(0,0,0,0.14)] sm:p-5"
      style={{
        perspective: "1400px",
        transformStyle: "preserve-3d",
      }}
    >
      <motion.div
        animate={{
          x: ["-30%", "30%", "-30%"],
          y: ["-10%", "20%", "-10%"],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-20 -top-20 h-56 w-56 rounded-full bg-white blur-[80px]"
      />

      <div className="relative z-30 flex items-center justify-between pb-3">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-1.5 rounded-full border border-white/70 bg-white/75 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-widest text-zinc-500 shadow-sm backdrop-blur-xl"
        >
          <Sparkles size={11} />
          <span className="truncate">{product.category}</span>
        </motion.div>

        <motion.button
          type="button"
          onClick={() => setLiked((value) => !value)}
          whileHover={{
            scale: 1.12,
            rotateZ: liked ? 0 : 8,
            y: -2,
          }}
          whileTap={{ scale: 0.82 }}
          className={`flex h-10 w-10 items-center justify-center rounded-full border border-white/70 bg-white/80 shadow-[0_8px_25px_rgba(0,0,0,0.08)] backdrop-blur-xl transition-colors ${
            liked
              ? "text-red-500"
              : "text-zinc-600 hover:text-black"
          }`}
          aria-label={
            liked ? "Remove from wishlist" : "Add to wishlist"
          }
        >
          <motion.div
            animate={
              liked ? { scale: [1, 1.35, 1] } : { scale: 1 }
            }
            transition={{ duration: 0.35 }}
          >
            <Heart
              size={17}
              fill={liked ? "currentColor" : "none"}
            />
          </motion.div>
        </motion.button>
      </div>

      <div className="relative flex-1">
        <Link to={`/product/${product.id}`} className="block h-full">
          <motion.div
            className="relative flex h-[280px] w-full items-center justify-center overflow-hidden rounded-[1.6rem] bg-gradient-to-br from-white via-[#f1f1f3] to-[#dedee2] sm:h-80"
            style={{ perspective: "1200px" }}
          >
            {/* Floor Glow */}
            <motion.div
              animate={{
                scale: [0.85, 1.1, 0.85],
                opacity: [0.2, 0.35, 0.2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-5 h-24 w-44 rounded-full bg-black/10 blur-3xl"
            />

            {/* Orbit Rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-52 w-52 rounded-full border border-black/[0.05] sm:h-60 sm:w-60"
            >
              <motion.span
                animate={{ scale: [1, 1.6, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute right-5 top-1/2 h-1.5 w-1.5 rounded-full bg-black/30 shadow-[0_0_15px_rgba(0,0,0,0.3)]"
              />
            </motion.div>

            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 22,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-44 w-44 rounded-full border border-dashed border-black/[0.04]"
            />

            <motion.div
              animate={{
                y: [0, -8, 0],
                rotateZ: [0, 1.5, 0, -1.5, 0],
                rotateY: [0, 3, 0, -3, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.1,
                rotateY: 10,
                rotateX: -5,
                rotateZ: 2,
              }}
              className="relative z-10 flex h-[80%] w-[84%] items-center justify-center"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="absolute inset-x-8 bottom-2 h-8 rounded-full bg-black/20 blur-2xl" />

              {imageError ? (
                <div className="flex h-full w-full items-center justify-center rounded-3xl bg-gradient-to-br from-zinc-200 to-zinc-300">
                  <span className="text-5xl font-semibold text-zinc-400">
                    {product.name.charAt(0)}
                  </span>
                </div>
              ) : (
                <motion.img
                  src={product.image}
                  alt={product.name}
                  onError={() => setImageError(true)}
                  initial={{ scale: 1.12, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="h-full w-full rounded-3xl object-cover shadow-[0_25px_50px_rgba(0,0,0,0.18)]"
                />
              )}

              <motion.div
                animate={{ x: ["-130%", "130%"] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 2.5,
                  ease: "easeInOut",
                }}
                className="pointer-events-none absolute inset-y-0 left-0 w-20 rotate-[22deg] bg-gradient-to-r from-transparent via-white/35 to-transparent blur-md"
              />
            </motion.div>

            {/* Product Number Tag */}
            <div className="absolute bottom-4 left-4 z-20 rounded-full bg-white/65 px-3 py-1.5 text-[9px] font-medium text-zinc-500 backdrop-blur-xl">
              #{String(product.id).padStart(2, "0")}
            </div>
          </motion.div>
        </Link>

        {/* Action Buttons Overlay */}
        <div className="absolute bottom-4 right-4 z-30 flex items-center gap-2">
          <motion.button
            type="button"
            onClick={() => onPreview && onPreview(product)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/60 bg-white/80 text-black shadow-lg backdrop-blur-md transition-colors hover:bg-white"
            aria-label="Quick preview image"
          >
            <Eye size={15} />
          </motion.button>

          <Link
            to={`/product/${product.id}`}
            aria-label="View product details"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 45 }}
              whileTap={{ scale: 0.9 }}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-white shadow-xl"
            >
              <ArrowUpRight size={15} />
            </motion.div>
          </Link>
        </div>
      </div>

      {/* Product Info Section */}
      <div className="relative z-10 flex flex-col justify-between px-1 pt-4">
        <div>
          <h3 className="line-clamp-1 text-lg font-semibold tracking-[-0.03em] text-zinc-900 sm:text-xl">
            {product.name}
          </h3>

          <p className="mt-1 line-clamp-2 min-h-[32px] text-xs leading-relaxed text-zinc-400">
            {product.description}
          </p>
        </div>

        {/* Rating Display */}
        <div className="mt-3 flex items-center gap-2">
          <div className="flex items-center gap-1 rounded-full bg-white px-2.5 py-1 shadow-sm">
            <Star size={12} fill="currentColor" className="text-black" />
            <span className="text-xs font-semibold">{product.rating}</span>
          </div>

          <span className="text-xs text-zinc-400">
            ({product.reviews} reviews)
          </span>
        </div>

        {/* Price & Add to Cart Section */}
        <div className="mt-4 flex items-center justify-between gap-3 pt-2">
          <div className="flex flex-col">
            <span className="text-[9px] uppercase tracking-[0.18em] text-zinc-400">
              Starting from
            </span>

            <span className="mt-0.5 text-lg font-semibold tracking-tight text-black sm:text-xl">
              ₹{product.price.toLocaleString("en-IN")}
            </span>
          </div>

          <motion.button
            type="button"
            onClick={() => addToCart(product)}
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.93 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 20,
            }}
            className="group/cart relative flex items-center gap-2 overflow-hidden rounded-full bg-black px-4 py-2.5 text-xs font-medium text-white shadow-[0_12px_30px_rgba(0,0,0,0.18)] sm:px-5 sm:py-3 sm:text-sm"
          >
            <motion.span
              animate={{ x: ["-120%", "140%"] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatDelay: 2,
              }}
              className="absolute inset-y-0 w-8 -skew-x-12 bg-white/20 blur-sm"
            />

            <ShoppingBag size={15} className="relative z-10" />
            <span className="relative z-10">Add</span>
          </motion.button>
        </div>
      </div>

      {/* Bottom Shine Border Accent */}
      <motion.div
        initial={{ x: "-120%" }}
        whileHover={{ x: "140%" }}
        transition={{ duration: 0.8 }}
        className="pointer-events-none absolute bottom-0 left-0 h-px w-1/2 bg-gradient-to-r from-transparent via-black/20 to-transparent"
      />
    </motion.article>
  );
}