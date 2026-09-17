import { useEffect } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function OrderConfirmation({ ordered = true }) {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  }, []);

  if (!ordered) return null;

  return (
    <main className="min-h-[calc(100svh-64px)] overflow-x-hidden bg-[#f5f5f7] px-4 py-10 sm:px-6 lg:py-16">
      <div className="mx-auto max-w-full">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="overflow-hidden rounded-[2rem] bg-black p-6 text-white shadow-2xl sm:p-10"
        >
          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ scale: 0, rotate: -20 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                delay: 0.2,
                type: "spring",
                stiffness: 180,
              }}
              className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-black"
            >
              <Check size={38} strokeWidth={2.5} />
            </motion.div>

            <p className="mt-7 text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400">
              iStore Express
            </p>

            <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">
              Order Confirmed
            </h1>

            <p className="mt-4 max-w-lg text-sm leading-6 text-zinc-400 sm:text-base">
              Thank you for your purchase. Your order has been successfully
              placed and is being prepared for delivery.
            </p>

            <div className="mt-8 w-full rounded-2xl border border-white/10 bg-white/[0.06] p-5">
              <div className="flex items-center justify-between gap-4">
                <div className="text-left">
                  <p className="text-xs text-zinc-500">Order ID</p>
                  <p className="mt-1 break-all text-sm font-semibold">
                    #ISTOREEXPRESS
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-xs text-zinc-500">Status</p>
                  <p className="mt-1 text-sm font-medium text-green-400">
                    Confirmed
                  </p>
                </div>
              </div>
            </div>

            <a
              href="/products"
              className="mt-8 flex w-full items-center justify-center rounded-full bg-white px-6 py-4 text-sm font-semibold text-black transition hover:bg-zinc-200"
            >
              Continue Shopping
            </a>
          </div>
        </motion.div>
      </div>
    </main>
  );
}