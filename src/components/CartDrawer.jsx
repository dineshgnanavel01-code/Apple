import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus, Trash2, X } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function CartDrawer({ open, onClose }) {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    total,
  } = useCart();

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[90] bg-black/40 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28 }}
            onClick={(e) => e.stopPropagation()}
            className="ml-auto flex h-full w-full max-w-md flex-col bg-white p-5"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">Your Bag</h2>

              <button onClick={onClose}>
                <X />
              </button>
            </div>

            <div className="mt-6 flex-1 space-y-4 overflow-y-auto">
              {cart.length === 0 ? (
                <div className="flex h-full items-center justify-center text-zinc-500">
                  Your bag is empty.
                </div>
              ) : (
                cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-3 rounded-2xl bg-zinc-50 p-3"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-24 w-20 rounded-xl object-cover"
                    />

                    <div className="flex flex-1 flex-col">
                      <p className="font-medium">{item.name}</p>

                      <p className="mt-1 text-sm text-zinc-500">
                        ₹{item.price.toLocaleString("en-IN")}
                      </p>

                      <div className="mt-auto flex items-center justify-between">
                        <div className="flex items-center rounded-full bg-white">
                          <button
                            onClick={() =>
                              decreaseQuantity(item.id)
                            }
                            className="p-2"
                          >
                            <Minus size={14} />
                          </button>

                          <span className="text-sm">
                            {item.quantity}
                          </span>

                          <button
                            onClick={() =>
                              increaseQuantity(item.id)
                            }
                            className="p-2"
                          >
                            <Plus size={14} />
                          </button>
                        </div>

                        <button
                          onClick={() =>
                            removeFromCart(item.id)
                          }
                          className="text-zinc-400 hover:text-red-500"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="border-t pt-5">
              <div className="flex justify-between text-lg font-semibold">
                <span>Total</span>
                <span>
                  ₹{total.toLocaleString("en-IN")}
                </span>
              </div>

              <button className="mt-4 w-full rounded-full bg-black py-4 font-medium text-white">
                Checkout
              </button>
            </div>
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  );
}