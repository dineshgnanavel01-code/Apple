import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check, CreditCard, Home, MapPin, Minus, Package, Plus,ShieldCheck,Smartphone,Truck,WalletCards,X,} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const paymentMethods = [
  {
    id: "upi",
    name: "UPI",
    description: "Google Pay, PhonePe, Paytm",
    icon: Smartphone,
  },
  {
    id: "card",
    name: "Credit / Debit Card",
    description: "Visa, Mastercard, RuPay",
    icon: CreditCard,
  },
  {
    id: "cod",
    name: "Cash on Delivery",
    description: "Pay when your order arrives",
    icon: WalletCards,
  },
];

const trackingSteps = [
  {
    title: "Order placed",
    text: "Your order has been confirmed",
    icon: Check,
  },
  {
    title: "Preparing",
    text: "Your products are being packed",
    icon: Package,
  },
  {
    title: "Out for delivery",
    text: "Your order is on the way",
    icon: Truck,
  },
  {
    title: "Delivered",
    text: "Estimated delivery today",
    icon: Home,
  },
];

const Reveal = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
}) => {
  const directionMap = {
    up: {
      x: 0,
      y: 35,
    },
    down: {
      x: 0,
      y: -35,
    },
    left: {
      x: 35,
      y: 0,
    },
    right: {
      x: -35,
      y: 0,
    },
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...directionMap[direction],
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.65,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default function Cart() {
  const {
    cart,
    total,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  const [pageLoading, setPageLoading] = useState(true);
  const [payment, setPayment] = useState("upi");
  const [ordered, setOrdered] = useState(false);
  const [showTracking, setShowTracking] = useState(false);
  const [error, setError] = useState("");

  const [orderId] = useState(
    () => `IST${Date.now().toString().slice(-8)}`
  );

  const [address, setAddress] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setPageLoading(false);
    }, 550);

    return () => clearTimeout(timer);
  }, []);



  useEffect(() => {
    if (!ordered) {
      return undefined;
    }

    const timer = setTimeout(() => {
      setShowTracking(true);
    }, 900);

    return () => clearTimeout(timer);
  }, [ordered]);

  const delivery = total >= 50000 ? 0 : 99;
  const grandTotal = total + delivery;



  const handleAddressChange = (e) => {
    const { name, value } = e.target;

    setAddress((current) => ({
      ...current,
      [name]: value,
    }));

    setError("");
  };

  const validateOrder = () => {
    const requiredFields = [
      "name",
      "phone",
      "address",
      "city",
      "state",
      "pincode",
    ];

    const missingField = requiredFields.some(
      (field) => !address[field].trim()
    );

    if (missingField) {
      setError("Please complete your delivery address.");
      return false;
    }

    if (!/^[0-9]{10}$/.test(address.phone)) {
      setError("Please enter a valid 10-digit phone number.");
      return false;
    }

    if (!/^[0-9]{6}$/.test(address.pincode)) {
      setError("Please enter a valid 6-digit PIN code.");
      return false;
    }

    return true;
  };
  const handlePlaceOrder = (e) => {
    e.preventDefault();

    if (!validateOrder()) {
      return;
    }

    setError("");
    setOrdered(true);
    setShowTracking(false);
  };
  if (pageLoading) {
    return (
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="
          flex
          min-h-screen
          items-center
          justify-center
          bg-[#f5f5f7]
        "
      >
        <div className="text-center">
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.7,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              type: "spring",
              stiffness: 250,
              damping: 20,
            }}
            className="
              mx-auto
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-2xl
              bg-black
              text-white
              shadow-xl
            "
          >
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 1.1,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <Package size={26} />
            </motion.div>
          </motion.div>

          <motion.p
            initial={{
              opacity: 0,
              y: 8,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.2,
            }}
            className="
              mt-4
              text-sm
              font-medium
              text-zinc-500
            "
          >
            Loading your bag...
          </motion.p>

          <motion.div
            initial={{
              width: 0,
            }}
            animate={{
              width: 100,
            }}
            transition={{
              duration: 0.45,
              delay: 0.1,
            }}
            className="
              mx-auto
              mt-4
              h-1
              overflow-hidden
              rounded-full
              bg-zinc-200
            "
          >
            <motion.div
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 0.9,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                h-full
                w-1/2
                rounded-full
                bg-black
              "
            />
          </motion.div>
        </div>
      </motion.main>
    );
  }

  if (ordered) {
    return (
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.45 }}
        className="
          min-h-[calc(100svh-64px)]
          w-full
          overflow-x-hidden
          bg-[#f5f5f7]
          px-4
          pb-20
          pt-24
          sm:px-6
          sm:pt-28
          lg:px-8
        "
      >
        <div
          className="
            mx-auto
            flex
            w-full
            max-w-[1500px]
            flex-col
          "
        >

          <motion.section
            initial={{
              opacity: 0,
              y: 35,
              scale: 0.97,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.65,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              relative
              w-full
              overflow-hidden
              rounded-[1.75rem]
              bg-black
              px-5
              py-10
              text-center
              text-white
              shadow-[0_25px_80px_rgba(0,0,0,0.18)]
              sm:rounded-[2.5rem]
              sm:px-10
              sm:py-14
              lg:py-16
            "
          >

            <motion.div
              animate={{
                scale: [0.9, 1.15, 0.9],
                opacity: [0.08, 0.18, 0.08],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                pointer-events-none
                absolute
                left-1/2
                top-[-100px]
                h-72
                w-72
                -translate-x-1/2
                rounded-full
                bg-white
                blur-[100px]
              "
            />

            <div className="relative z-10">

              <motion.div
                initial={{
                  scale: 0,
                  rotate: -20,
                }}
                animate={{
                  scale: 1,
                  rotate: 0,
                }}
                transition={{
                  delay: 0.2,
                  type: "spring",
                  stiffness: 180,
                  damping: 14,
                }}
                className="
                  mx-auto
                  flex
                  h-20
                  w-20
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  text-black
                  shadow-[0_15px_50px_rgba(255,255,255,0.15)]
                  sm:h-24
                  sm:w-24
                "
              >
                <motion.div
                  initial={{
                    scale: 0,
                  }}
                  animate={{
                    scale: 1,
                  }}
                  transition={{
                    delay: 0.45,
                    type: "spring",
                  }}
                >
                  <Check
                    size={38}
                    strokeWidth={2.5}
                    className="sm:h-11 sm:w-11"
                  />
                </motion.div>
              </motion.div>


              <motion.p
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.45,
                }}
                className="
                  mt-7
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-zinc-500
                  sm:text-xs
                "
              >
                iStore Express
              </motion.p>

              {/* Heading */}

              <motion.h1
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.55,
                }}
                className="
                  mt-3
                  text-3xl
                  font-semibold
                  leading-tight
                  tracking-[-0.04em]
                  sm:text-5xl
                "
              >
                Order confirmed.
              </motion.h1>

              <motion.p
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.65,
                }}
                className="
                  mx-auto
                  mt-4
                  max-w-xl
                  text-sm
                  leading-6
                  text-zinc-400
                  sm:text-base
                  sm:leading-7
                "
              >
                Thank you for shopping with iStore Express.
                Your order has been successfully placed and
                is being prepared for delivery.
              </motion.p>


              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                  scale: 0.98,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                transition={{
                  delay: 0.75,
                }}
                className="
                  mx-auto
                  mt-8
                  w-full
                  max-w-md
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.07]
                  p-4
                  text-left
                  backdrop-blur-xl
                  sm:p-5
                "
              >
                <div
                  className="
                    flex
                    flex-col
                    gap-1
                    sm:flex-row
                    sm:items-center
                    sm:justify-between
                  "
                >
                  <span className="text-xs text-zinc-500 sm:text-sm">
                    Order ID
                  </span>

                  <span
                    className="
                      break-all
                      text-xs
                      font-semibold
                      text-white
                      sm:text-sm
                    "
                  >
                    #{orderId}
                  </span>
                </div>

                <div className="my-4 h-px bg-white/10" />

                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs text-zinc-500 sm:text-sm">
                    Total
                  </span>

                  <span className="text-base font-semibold sm:text-lg">
                    ₹{grandTotal.toLocaleString("en-IN")}
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.section>


          <AnimatePresence>
            {showTracking && (
              <motion.section
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="
                  mt-5
                  w-full
                  rounded-[1.75rem]
                  bg-white
                  p-5
                  shadow-sm
                  sm:mt-7
                  sm:rounded-[2.5rem]
                  sm:p-8
                  lg:p-9
                "
              >
                {/* Header */}

                <div
                  className="
                    flex
                    flex-col
                    gap-4
                    sm:flex-row
                    sm:items-center
                    sm:justify-between
                  "
                >
                  <div className="min-w-0">
                    <p
                      className="
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-[0.2em]
                        text-zinc-400
                        sm:text-xs
                      "
                    >
                      Order tracking
                    </p>

                    <h2
                      className="
                        mt-2
                        text-xl
                        font-semibold
                        leading-tight
                        tracking-tight
                        sm:text-2xl
                      "
                    >
                      Your order is on its way.
                    </h2>
                  </div>

                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 0.8,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    className="
                      flex
                      w-fit
                      shrink-0
                      items-center
                      gap-2
                      rounded-full
                      bg-green-50
                      px-3
                      py-2
                      text-xs
                      font-medium
                      text-green-700
                    "
                  >
                    <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
                    Live tracking
                  </motion.div>
                </div>


                <div className="mt-8 sm:mt-10">
                  {trackingSteps.map((step, index) => {
                    const Icon = step.icon;
                    const completed = index <= 2;
                    const isLast =
                      index === trackingSteps.length - 1;

                    return (
                      <motion.div
                        key={step.title}
                        initial={{
                          opacity: 0,
                          x: -20,
                        }}
                        animate={{
                          opacity: 1,
                          x: 0,
                        }}
                        transition={{
                          delay: 0.15 + index * 0.15,
                          duration: 0.5,
                        }}
                        className={`
                          relative
                          flex
                          min-w-0
                          gap-4
                          sm:gap-5
                          ${isLast ? "" : "pb-8"}
                        `}
                      >
                        {!isLast && (
                          <motion.div
                            initial={{
                              height: 0,
                            }}
                            animate={{
                              height: "100%",
                            }}
                            transition={{
                              delay:
                                0.35 + index * 0.15,
                              duration: 0.45,
                            }}
                            className={`
                              absolute
                              left-[19px]
                              top-10
                              bottom-0
                              w-px
                              ${
                                index < 2
                                  ? "bg-black"
                                  : "bg-zinc-200"
                              }
                            `}
                          />
                        )}

                        {/* Icon */}

                        <motion.div
                          initial={{
                            scale: 0,
                          }}
                          animate={{
                            scale: 1,
                          }}
                          transition={{
                            delay:
                              0.25 + index * 0.15,
                            type: "spring",
                            stiffness: 250,
                            damping: 18,
                          }}
                          whileHover={{
                            scale: 1.1,
                          }}
                          className={`
                            relative
                            z-10
                            flex
                            h-10
                            w-10
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            ${
                              completed
                                ? "bg-black text-white"
                                : "bg-zinc-100 text-zinc-400"
                            }
                          `}
                        >
                          <Icon size={16} />
                        </motion.div>

                        <div className="min-w-0 flex-1 pt-0.5">
                          <p
                            className={`
                              text-sm
                              font-semibold
                              ${
                                completed
                                  ? "text-black"
                                  : "text-zinc-400"
                              }
                            `}
                          >
                            {step.title}
                          </p>

                          <p
                            className="
                              mt-1
                              text-xs
                              leading-5
                              text-zinc-500
                              sm:text-sm
                            "
                          >
                            {step.text}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Delivery */}

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.8,
                  }}
                  className="
                    mt-8
                    flex
                    items-start
                    gap-3
                    rounded-2xl
                    bg-[#f5f5f7]
                    p-4
                    sm:items-center
                    sm:gap-4
                    sm:p-5
                  "
                >
                  <div
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-black
                      text-white
                      sm:h-11
                      sm:w-11
                    "
                  >
                    <Truck size={18} />
                  </div>

                  <div className="min-w-0">
                    <p className="text-sm font-semibold">
                      Estimated delivery
                    </p>

                    <p className="mt-1 text-xs leading-5 text-zinc-500 sm:text-sm">
                      Today, between 2:00 PM – 6:00 PM
                    </p>
                  </div>
                </motion.div>
              </motion.section>
            )}
          </AnimatePresence>


          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 1.1,
            }}
            className="
              mt-6
              flex
              w-full
              justify-center
              sm:mt-8
            "
          >
            <motion.div
              whileHover={{
                scale: 1.025,
                y: -2,
              }}
              whileTap={{
                scale: 0.97,
              }}
            >
              <Link
                to="/products"
                className="
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-black
                  px-7
                  py-3.5
                  text-sm
                  font-medium
                  text-white
                  shadow-lg
                  transition
                  sm:w-auto
                "
              >
                Continue Shopping

                <motion.span
                  whileHover={{
                    x: 4,
                  }}
                >
                  <ArrowRight size={16} />
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.main>
    );
  }



  if (cart.length === 0) {
    return (
      <motion.main
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        className="
          flex
          min-h-[calc(100svh-64px)]
          items-center
          justify-center
          overflow-hidden
          bg-[#f5f5f7]
          px-5
          py-24
        "
      >
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
            scale: 0.96,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.65,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="w-full max-w-md text-center"
        >
          <motion.div
            whileHover={{
              y: -5,
              rotate: -3,
            }}
            className="
              mx-auto
              flex
              h-20
              w-20
              items-center
              justify-center
              rounded-3xl
              bg-white
              shadow-sm
            "
          >
            <Package
              size={32}
              className="text-zinc-400"
            />
          </motion.div>

          <h1 className="mt-7 text-4xl font-semibold tracking-tight">
            Your Bag.
          </h1>

          <p className="mt-3 text-sm leading-6 text-zinc-500">
            Your bag is waiting for something great.
          </p>

          <motion.div
            whileHover={{
              scale: 1.025,
              y: -2,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="mt-7"
          >
            <Link
              to="/products"
              className="
                inline-flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-full
                bg-black
                px-6
                py-3.5
                text-sm
                font-medium
                text-white
                shadow-lg
                sm:w-auto
              "
            >
              Shop products

              <motion.span
                whileHover={{
                  x: 4,
                }}
              >
                <ArrowRight size={16} />
              </motion.span>
            </Link>
          </motion.div>
        </motion.div>
      </motion.main>
    );
  }


  return (
    <motion.main
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 0.45,
      }}
      className="
        min-h-screen
        w-full
        overflow-x-hidden
        bg-[#f5f5f7]
        px-4
        pb-20
        pt-24
        sm:px-6
        sm:pt-28
        lg:px-8
      "
    >
      <div className="mx-auto w-full max-w-[1500px]">
        

        <motion.header
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <p
            className="
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.22em]
              text-zinc-400
              sm:text-xs
            "
          >
            iStore Express
          </p>

          <div className="mt-2 flex flex-wrap items-end justify-between gap-3">
            <h1
              className="
                text-4xl
                font-semibold
                tracking-[-0.05em]
                sm:text-6xl
              "
            >
              Your Bag.
            </h1>

            <motion.span
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                delay: 0.2,
              }}
              className="
                rounded-full
                bg-white
                px-3
                py-1.5
                text-xs
                font-medium
                text-zinc-500
                shadow-sm
              "
            >
              {cart.length} item
              {cart.length !== 1 ? "s" : ""}
            </motion.span>
          </div>
        </motion.header>

        <form onSubmit={handlePlaceOrder}>
          <div
            className="
              mt-8
              grid
              gap-6
              lg:grid-cols-[minmax(0,1.45fr)_minmax(320px,0.65fr)]
              lg:gap-8
            "
          >

            <div className="min-w-0 space-y-5">
              

              <Reveal>
                <section
                  className="
                    rounded-[1.75rem]
                    bg-white
                    p-4
                    shadow-sm
                    sm:rounded-[2rem]
                    sm:p-7
                  "
                >
                  <div className="mb-5">
                    <h2 className="text-lg font-semibold sm:text-xl">
                      Your products
                    </h2>

                    <p className="mt-1 text-xs text-zinc-500 sm:text-sm">
                      Review your items before checkout.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <AnimatePresence initial={false}>
                      {cart.map((item, index) => (
                        <motion.div
                          layout
                          key={item.id}
                          initial={{
                            opacity: 0,
                            y: 25,
                            scale: 0.97,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                            scale: 1,
                          }}
                          exit={{
                            opacity: 0,
                            x: -30,
                            scale: 0.95,
                          }}
                          transition={{
                            duration: 0.45,
                            delay: index * 0.06,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                          whileHover={{
                            y: -4,
                            scale: 1.01,
                            boxShadow:
                              "0 20px 45px rgba(0,0,0,0.08)",
                          }}
                          className="
                            grid
                            min-w-0
                            grid-cols-[92px_minmax(0,1fr)]
                            gap-3
                            rounded-2xl
                            bg-[#f5f5f7]
                            p-3
                            transition-shadow
                            sm:flex
                            sm:gap-4
                            sm:rounded-3xl
                            sm:p-4
                          "
                        >
                          {/* Image */}

                          <motion.div
                            className="
                              flex
                              h-[92px]
                              w-[92px]
                              shrink-0
                              items-center
                              justify-center
                              overflow-hidden
                              rounded-2xl
                              bg-white
                              sm:h-32
                              sm:w-32
                            "
                          >
                            <motion.img
                              src={item.image}
                              alt={item.name}
                              whileHover={{
                                scale: 1.12,
                              }}
                              transition={{
                                duration: 0.45,
                                ease: "easeOut",
                              }}
                              className="
                                h-full
                                w-full
                                object-contain
                                p-2
                              "
                            />
                          </motion.div>

                          {/* Product info */}

                          <div className="min-w-0 flex-1">
                            <div className="flex items-start justify-between gap-2">
                              <div className="min-w-0">
                                <p
                                  className="
                                    truncate
                                    text-[9px]
                                    font-medium
                                    uppercase
                                    tracking-[0.15em]
                                    text-zinc-400
                                    sm:text-xs
                                  "
                                >
                                  {item.category}
                                </p>

                                <h3
                                  className="
                                    mt-1
                                    line-clamp-2
                                    text-sm
                                    font-semibold
                                    leading-5
                                    sm:text-lg
                                  "
                                >
                                  {item.name}
                                </h3>
                              </div>

                              {/* Remove */}

                              <motion.button
                                type="button"
                                whileHover={{
                                  scale: 1.1,
                                  rotate: 90,
                                }}
                                whileTap={{
                                  scale: 0.8,
                                }}
                                onClick={() =>
                                  removeFromCart(item.id)
                                }
                                className="
                                  flex
                                  h-8
                                  w-8
                                  shrink-0
                                  items-center
                                  justify-center
                                  rounded-full
                                  bg-white
                                  text-zinc-400
                                  transition
                                  hover:text-black
                                "
                                aria-label={`Remove ${item.name}`}
                              >
                                <X size={14} />
                              </motion.button>
                            </div>


                            <div className="mt-4 flex items-center justify-between gap-2">
                              <div
                                className="
                                  flex
                                  shrink-0
                                  items-center
                                  rounded-full
                                  bg-white
                                  p-1
                                "
                              >
                                <motion.button
                                  type="button"
                                  whileHover={{
                                    scale: 1.12,
                                  }}
                                  whileTap={{
                                    scale: 0.82,
                                  }}
                                  onClick={() =>
                                    decreaseQuantity(
                                      item.id
                                    )
                                  }
                                  className="
                                    flex
                                    h-7
                                    w-7
                                    items-center
                                    justify-center
                                    rounded-full
                                    hover:bg-zinc-100
                                    sm:h-8
                                    sm:w-8
                                  "
                                >
                                  <Minus size={13} />
                                </motion.button>

                                <motion.span
                                  key={item.quantity}
                                  initial={{
                                    opacity: 0,
                                    scale: 0.7,
                                    y: -4,
                                  }}
                                  animate={{
                                    opacity: 1,
                                    scale: 1,
                                    y: 0,
                                  }}
                                  className="
                                    w-7
                                    text-center
                                    text-xs
                                    font-semibold
                                    sm:w-8
                                    sm:text-sm
                                  "
                                >
                                  {item.quantity}
                                </motion.span>

                                <motion.button
                                  type="button"
                                  whileHover={{
                                    scale: 1.12,
                                    rotate: 90,
                                  }}
                                  whileTap={{
                                    scale: 0.82,
                                  }}
                                  onClick={() =>
                                    increaseQuantity(
                                      item.id
                                    )
                                  }
                                  className="
                                    flex
                                    h-7
                                    w-7
                                    items-center
                                    justify-center
                                    rounded-full
                                    hover:bg-zinc-100
                                    sm:h-8
                                    sm:w-8
                                  "
                                >
                                  <Plus size={13} />
                                </motion.button>
                              </div>


                              <motion.p
                                key={`${item.id}-${item.quantity}`}
                                initial={{
                                  opacity: 0,
                                  y: -4,
                                }}
                                animate={{
                                  opacity: 1,
                                  y: 0,
                                }}
                                className="
                                  truncate
                                  text-sm
                                  font-semibold
                                  sm:text-base
                                "
                              >
                                ₹
                                {(
                                  item.price *
                                  item.quantity
                                ).toLocaleString("en-IN")}
                              </motion.p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                </section>
              </Reveal>

              <Reveal delay={0.05}>
                <section
                  className="
                    rounded-[1.75rem]
                    bg-white
                    p-4
                    shadow-sm
                    sm:rounded-[2rem]
                    sm:p-7
                  "
                >
                  <div className="flex items-center gap-3">
                    <motion.div
                      whileHover={{
                        scale: 1.08,
                        rotate: -5,
                      }}
                      className="
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        bg-black
                        text-white
                        sm:h-11
                        sm:w-11
                        sm:rounded-2xl
                      "
                    >
                      <MapPin size={18} />
                    </motion.div>

                    <div className="min-w-0">
                      <h2 className="text-lg font-semibold sm:text-xl">
                        Delivery address
                      </h2>

                      <p className="mt-0.5 text-xs text-zinc-500 sm:text-sm">
                        Where should we deliver your order?
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2 sm:gap-4">
                    <input
                      required
                      name="name"
                      value={address.name}
                      onChange={handleAddressChange}
                      placeholder="Full name"
                      className="
                        min-w-0
                        rounded-2xl
                        border
                        border-zinc-200
                        bg-[#f8f8fa]
                        px-4
                        py-3.5
                        text-sm
                        outline-none
                        transition-all
                        focus:border-black
                        focus:bg-white
                        focus:shadow-[0_0_0_4px_rgba(0,0,0,0.04)]
                      "
                    />

                    <input
                      required
                      name="phone"
                      value={address.phone}
                      onChange={handleAddressChange}
                      placeholder="10-digit phone number"
                      inputMode="numeric"
                      maxLength={10}
                      className="
                        min-w-0
                        rounded-2xl
                        border
                        border-zinc-200
                        bg-[#f8f8fa]
                        px-4
                        py-3.5
                        text-sm
                        outline-none
                        transition-all
                        focus:border-black
                        focus:bg-white
                        focus:shadow-[0_0_0_4px_rgba(0,0,0,0.04)]
                      "
                    />

                    <textarea
                      required
                      name="address"
                      value={address.address}
                      onChange={handleAddressChange}
                      placeholder="House / Street / Area"
                      rows={3}
                      className="
                        min-w-0
                        resize-none
                        rounded-2xl
                        border
                        border-zinc-200
                        bg-[#f8f8fa]
                        px-4
                        py-3.5
                        text-sm
                        outline-none
                        transition-all
                        focus:border-black
                        focus:bg-white
                        focus:shadow-[0_0_0_4px_rgba(0,0,0,0.04)]
                        sm:col-span-2
                      "
                    />

                    <input
                      required
                      name="city"
                      value={address.city}
                      onChange={handleAddressChange}
                      placeholder="City"
                      className="
                        min-w-0
                        rounded-2xl
                        border
                        border-zinc-200
                        bg-[#f8f8fa]
                        px-4
                        py-3.5
                        text-sm
                        outline-none
                        transition-all
                        focus:border-black
                        focus:bg-white
                        focus:shadow-[0_0_0_4px_rgba(0,0,0,0.04)]
                      "
                    />

                    <input
                      required
                      name="state"
                      value={address.state}
                      onChange={handleAddressChange}
                      placeholder="State"
                      className="
                        min-w-0
                        rounded-2xl
                        border
                        border-zinc-200
                        bg-[#f8f8fa]
                        px-4
                        py-3.5
                        text-sm
                        outline-none
                        transition-all
                        focus:border-black
                        focus:bg-white
                        focus:shadow-[0_0_0_4px_rgba(0,0,0,0.04)]
                      "
                    />

                    <input
                      required
                      name="pincode"
                      value={address.pincode}
                      onChange={handleAddressChange}
                      placeholder="6-digit PIN code"
                      inputMode="numeric"
                      maxLength={6}
                      className="
                        min-w-0
                        rounded-2xl
                        border
                        border-zinc-200
                        bg-[#f8f8fa]
                        px-4
                        py-3.5
                        text-sm
                        outline-none
                        transition-all
                        focus:border-black
                        focus:bg-white
                        focus:shadow-[0_0_0_4px_rgba(0,0,0,0.04)]
                      "
                    />
                  </div>
                </section>
              </Reveal>

              <Reveal delay={0.08}>
                <section
                  className="
                    rounded-[1.75rem]
                    bg-white
                    p-4
                    shadow-sm
                    sm:rounded-[2rem]
                    sm:p-7
                  "
                >
                  <div className="flex items-center gap-3">
                    <motion.div
                      whileHover={{
                        scale: 1.08,
                        rotate: 5,
                      }}
                      className="
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        bg-black
                        text-white
                        sm:h-11
                        sm:w-11
                        sm:rounded-2xl
                      "
                    >
                      <CreditCard size={18} />
                    </motion.div>

                    <div className="min-w-0">
                      <h2 className="text-lg font-semibold sm:text-xl">
                        Payment method
                      </h2>

                      <p className="mt-0.5 text-xs text-zinc-500 sm:text-sm">
                        Select your preferred payment option.
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 space-y-3">
                    {paymentMethods.map((method) => {
                      const Icon = method.icon;
                      const selected =
                        payment === method.id;

                      return (
                        <motion.button
                          key={method.id}
                          type="button"
                          onClick={() =>
                            setPayment(method.id)
                          }
                          whileHover={{
                            y: -2,
                            scale: 1.01,
                          }}
                          whileTap={{
                            scale: 0.98,
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 25,
                          }}
                          className={`
                            flex
                            w-full
                            min-w-0
                            items-center
                            gap-3
                            rounded-2xl
                            border
                            p-3
                            text-left
                            transition-all
                            sm:gap-4
                            sm:p-4
                            ${
                              selected
                                ? "border-black bg-black text-white shadow-lg"
                                : "border-zinc-200 bg-white hover:border-zinc-400"
                            }
                          `}
                        >
                          <motion.div
                            animate={{
                              scale: selected ? 1 : 0.95,
                            }}
                            className={`
                              flex
                              h-10
                              w-10
                              shrink-0
                              items-center
                              justify-center
                              rounded-xl
                              ${
                                selected
                                  ? "bg-white text-black"
                                  : "bg-[#f5f5f7] text-black"
                              }
                            `}
                          >
                            <Icon size={17} />
                          </motion.div>

                          <div className="min-w-0 flex-1">
                            <p className="truncate text-sm font-medium">
                              {method.name}
                            </p>

                            <p
                              className={`
                                mt-1
                                truncate
                                text-[11px]
                                ${
                                  selected
                                    ? "text-zinc-400"
                                    : "text-zinc-500"
                                }
                              `}
                            >
                              {method.description}
                            </p>
                          </div>

                          <motion.div
                            animate={{
                              scale: selected ? 1 : 0.9,
                            }}
                            className={`
                              flex
                              h-5
                              w-5
                              shrink-0
                              items-center
                              justify-center
                              rounded-full
                              border
                              ${
                                selected
                                  ? "border-white bg-white text-black"
                                  : "border-zinc-300"
                              }
                            `}
                          >
                            <AnimatePresence>
                              {selected && (
                                <motion.span
                                  initial={{
                                    opacity: 0,
                                    scale: 0,
                                  }}
                                  animate={{
                                    opacity: 1,
                                    scale: 1,
                                  }}
                                  exit={{
                                    opacity: 0,
                                    scale: 0,
                                  }}
                                >
                                  <Check size={11} />
                                </motion.span>
                              )}
                            </AnimatePresence>
                          </motion.div>
                        </motion.button>
                      );
                    })}
                  </div>


                  <AnimatePresence mode="wait">
                    {payment === "card" && (
                      <motion.div
                        key="card-fields"
                        initial={{
                          opacity: 0,
                          height: 0,
                          y: 10,
                        }}
                        animate={{
                          opacity: 1,
                          height: "auto",
                          y: 0,
                        }}
                        exit={{
                          opacity: 0,
                          height: 0,
                          y: -10,
                        }}
                        transition={{
                          duration: 0.35,
                        }}
                        className="
                          mt-4
                          grid
                          gap-3
                          overflow-hidden
                          sm:grid-cols-2
                        "
                      >
                        <input
                          placeholder="Card number"
                          inputMode="numeric"
                          className="
                            min-w-0
                            rounded-2xl
                            border
                            border-zinc-200
                            bg-[#f8f8fa]
                            px-4
                            py-3.5
                            text-sm
                            outline-none
                            transition
                            focus:border-black
                            sm:col-span-2
                          "
                        />

                        <input
                          placeholder="MM / YY"
                          className="
                            min-w-0
                            rounded-2xl
                            border
                            border-zinc-200
                            bg-[#f8f8fa]
                            px-4
                            py-3.5
                            text-sm
                            outline-none
                            transition
                            focus:border-black
                          "
                        />

                        <input
                          placeholder="CVV"
                          type="password"
                          maxLength={3}
                          inputMode="numeric"
                          className="
                            min-w-0
                            rounded-2xl
                            border
                            border-zinc-200
                            bg-[#f8f8fa]
                            px-4
                            py-3.5
                            text-sm
                            outline-none
                            transition
                            focus:border-black
                          "
                        />
                      </motion.div>
                    )}

                    {payment === "upi" && (
                      <motion.div
                        key="upi-field"
                        initial={{
                          opacity: 0,
                          y: 10,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        exit={{
                          opacity: 0,
                          y: -10,
                        }}
                        transition={{
                          duration: 0.35,
                        }}
                        className="mt-4"
                      >
                        <input
                          placeholder="UPI ID (example@upi)"
                          className="
                            w-full
                            min-w-0
                            rounded-2xl
                            border
                            border-zinc-200
                            bg-[#f8f8fa]
                            px-4
                            py-3.5
                            text-sm
                            outline-none
                            transition
                            focus:border-black
                          "
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </section>
              </Reveal>
            </div>

            <Reveal
              direction="left"
              delay={0.12}
              className="
                min-w-0
                lg:sticky
                lg:top-28
                lg:h-fit
              "
            >

              <aside>
                <motion.div
                  whileHover={{
                    boxShadow:
                      "0 30px 80px rgba(0,0,0,0.22)",
                  }}
                  className="
                    rounded-[1.75rem]
                    bg-black
                    p-5
                    text-white
                    shadow-[0_25px_70px_rgba(0,0,0,0.18)]
                    sm:rounded-[2rem]
                    sm:p-7
                  "
                >
                  <p
                    className="
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.2em]
                      text-zinc-500
                      sm:text-xs
                    "
                  >
                    Summary
                  </p>

                  <h2 className="mt-2 text-2xl font-semibold tracking-tight">
                    Order total
                  </h2>

                  <div className="mt-7 space-y-4">
                    <div className="flex items-center justify-between gap-4 text-sm">
                      <span className="text-zinc-400">
                        Subtotal
                      </span>

                      <motion.span
                        key={total}
                        initial={{
                          opacity: 0,
                          y: -5,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                      >
                        ₹{total.toLocaleString("en-IN")}
                      </motion.span>
                    </div>

                    <div className="flex items-center justify-between gap-4 text-sm">
                      <span className="text-zinc-400">
                        Delivery
                      </span>

                      <span>
                        {delivery === 0
                          ? "FREE"
                          : `₹${delivery}`}
                      </span>
                    </div>

                    <div className="h-px bg-white/10" />

                    <div className="flex items-end justify-between gap-4">
                      <span className="text-sm text-zinc-400">
                        Total
                      </span>

                      <motion.span
                        key={grandTotal}
                        initial={{
                          opacity: 0,
                          scale: 0.9,
                        }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                        }}
                        className="
                          text-2xl
                          font-semibold
                          tracking-tight
                          sm:text-3xl
                        "
                      >
                        ₹{grandTotal.toLocaleString("en-IN")}
                      </motion.span>
                    </div>
                  </div>


                  <AnimatePresence>
                    {error && (
                      <motion.div
                        initial={{
                          opacity: 0,
                          y: -8,
                          scale: 0.97,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                          scale: 1,
                        }}
                        exit={{
                          opacity: 0,
                          y: -5,
                          scale: 0.97,
                        }}
                        transition={{
                          duration: 0.25,
                        }}
                        className="
                          mt-5
                          rounded-2xl
                          border
                          border-red-400/20
                          bg-red-500/10
                          px-4
                          py-3
                          text-xs
                          leading-5
                          text-red-300
                        "
                      >
                        {error}
                      </motion.div>
                    )}
                  </AnimatePresence>


                  <motion.button
                    whileHover={{
                      scale: 1.025,
                      y: -3,
                    }}
                    whileTap={{
                      scale: 0.96,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 22,
                    }}
                    type="submit"
                    className="
                      relative
                      mt-7
                      flex
                      w-full
                      items-center
                      justify-center
                      gap-2
                      overflow-hidden
                      rounded-2xl
                      bg-white
                      py-4
                      text-sm
                      font-semibold
                      text-black
                      shadow-xl
                    "
                  >
                    <motion.span
                      className="
                        pointer-events-none
                        absolute
                        inset-0
                        -translate-x-full
                        bg-gradient-to-r
                        from-transparent
                        via-black/10
                        to-transparent
                      "
                      whileHover={{
                        x: "200%",
                      }}
                      transition={{
                        duration: 0.7,
                      }}
                    />

                    <span className="relative z-10">
                      Place Order
                    </span>

                    <motion.span
                      className="relative z-10"
                      whileHover={{
                        x: 4,
                      }}
                    >
                      <ArrowRight size={17} />
                    </motion.span>
                  </motion.button>

                  <div className="mt-5 flex items-center justify-center gap-2 text-[11px] text-zinc-500">
                    <ShieldCheck size={14} />
                    Secure checkout
                  </div>
                </motion.div>


                <Reveal delay={0.12}>
                  <motion.div
                    whileHover={{
                      y: -3,
                    }}
                    className="
                      mt-4
                      rounded-[1.75rem]
                      bg-white
                      p-5
                      shadow-sm
                      sm:rounded-[2rem]
                      sm:p-6
                    "
                  >
                    <div className="flex gap-4">
                      <motion.div
                        whileHover={{
                          scale: 1.08,
                          rotate: 5,
                        }}
                        className="
                          flex
                          h-11
                          w-11
                          shrink-0
                          items-center
                          justify-center
                          rounded-2xl
                          bg-[#f5f5f7]
                        "
                      >
                        <Truck size={19} />
                      </motion.div>

                      <div className="min-w-0">
                        <p className="text-sm font-semibold">
                          Fast delivery
                        </p>

                        <p className="mt-1 text-xs leading-5 text-zinc-500 sm:text-sm">
                          Free delivery on orders above
                          ₹50,000.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </Reveal>


                <Reveal delay={0.18}>
                  <motion.div
                    whileHover={{
                      y: -2,
                    }}
                    className="
                      mt-3
                      flex
                      items-start
                      gap-3
                      rounded-2xl
                      bg-white
                      p-4
                      shadow-sm
                    "
                  >
                    <ShieldCheck
                      size={18}
                      className="mt-0.5 shrink-0"
                    />

                    <p className="text-xs leading-5 text-zinc-500">
                      Your payment and personal information
                      are protected.
                    </p>
                  </motion.div>
                </Reveal>
              </aside>
            </Reveal>
          </div>
        </form>
      </div>
    </motion.main>
  );
}