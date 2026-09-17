import { motion } from "framer-motion";
import { ArrowLeft, Check, Star } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((item) => item.id === Number(id));
  const { addToCart } = useCart();

  const [color, setColor] = useState(product?.colors?.[0]);
  const [storage, setStorage] = useState(product?.storage?.[0]);

  if (!product) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        Product not found.
      </main>
    );
  }

  return (
    <main className="min-h-screen px-5 pb-20 pt-28 sm:px-8">
      <div className="mx-auto max-w-full">
        <Link
          to="/products"
          className="mb-8 inline-flex items-center gap-2 text-sm text-zinc-500"
        >
          <ArrowLeft size={16} />
          Back
        </Link>

        <div className="grid items-center gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden rounded-[35px] bg-[#f5f5f7]"
          >
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
              src={product.image}
              alt={product.name}
              className="h-[450px] w-full object-cover sm:h-[600px]"
            />
          </motion.div>

          <div>
            <p className="text-sm text-zinc-500">
              {product.category}
            </p>

            <h1 className="mt-2 text-5xl font-semibold tracking-tight sm:text-7xl">
              {product.name}.
            </h1>

            <div className="mt-5 flex items-center gap-2">
              <Star size={17} fill="currentColor" />
              {product.rating}
              <span className="text-zinc-400">
                ({product.reviews} reviews)
              </span>
            </div>

            <p className="mt-7 text-3xl font-semibold">
              ₹{product.price.toLocaleString("en-IN")}
            </p>

            <div className="mt-10">
              <p className="mb-3 text-sm font-medium">Color</p>

              <div className="flex flex-wrap gap-2">
                {product.colors.map((item) => (
                  <button
                    key={item}
                    onClick={() => setColor(item)}
                    className={`rounded-full border px-4 py-2 text-sm ${
                      color === item
                        ? "border-black bg-black text-white"
                        : "border-zinc-200"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <p className="mb-3 text-sm font-medium">Storage</p>

              <div className="flex flex-wrap gap-2">
                {product.storage.map((item) => (
                  <button
                    key={item}
                    onClick={() => setStorage(item)}
                    className={`rounded-full border px-4 py-2 text-sm ${
                      storage === item
                        ? "border-black bg-black text-white"
                        : "border-zinc-200"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => addToCart(product)}
              className="mt-10 flex w-full items-center justify-center gap-2 rounded-full bg-black py-4 font-medium text-white transition hover:scale-[1.02]"
            >
              <Check size={18} />
              Add to Bag
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}