
import { motion, AnimatePresence } from "framer-motion";
import {ArrowRight, ChevronDown, Sparkles, Zap,ShieldCheck,Star,Camera, Cpu,BatteryCharging,Headphones, Laptop, Smartphone,Watch,} from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const products = [
  {
    id: "iphone",
    name: "iPhone Pro",
    subtitle: "Pro. Beyond.",
    price: "₹1,34,900",
    image:
      "https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&w=1200&q=90",
    icon: Smartphone,
    label: "iPhone",
  },
  {
    id: "macbook",
    name: "MacBook Pro",
    subtitle: "Power. Unleashed.",
    price: "₹1,69,900",
    image:
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=1400&q=90",
    icon: Laptop,
    label: "Mac",
  },
  {
    id: "airpods",
    name: "AirPods Pro",
    subtitle: "Sound. Elevated.",
    price: "₹24,900",
    image:
      "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=1200&q=90",
    icon: Headphones,
    label: "AirPods",
  },
  {
    id: "watch",
    name: "Apple Watch",
    subtitle: "Your health. Your world.",
    price: "₹46,900",
    image:
      "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?auto=format&fit=crop&w=1200&q=90",
    icon: Watch,
    label: "Watch",
  },
];

const floatingVariants = {
  animate: {
    y: [0, -14, 0],
    rotate: [0, 3, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const orbitOne = {
  animate: {
    rotate: 360,
    transition: {
      duration: 24,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

const orbitTwo = {
  animate: {
    rotate: -360,
    transition: {
      duration: 17,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const activeProduct = products[activeIndex];


 useEffect(() => {
  const timer = setInterval(() => {
    setDirection(1);

    setActiveIndex((current) =>
      current === products.length - 1 ? 0 : current + 1
    );
  }, 7000); // 7 seconds

  return () => clearInterval(timer);
}, []);

  const changeSlide = (index) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#eef0f3] [perspective:1800px]">
    

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_45%,rgba(255,255,255,0.98),transparent_32%),radial-gradient(circle_at_15%_80%,rgba(220,225,232,0.8),transparent_38%)]" />

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.55, 0.3],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-white blur-[120px]"
      />

      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -bottom-48 left-1/3 h-[550px] w-[550px] rounded-full bg-slate-300/40 blur-[130px]"
      />

      {/* Grid */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "45px 45px",
        }}
      />

      <motion.div
        variants={orbitOne}
        animate="animate"
        className="pointer-events-none absolute left-[72%] top-[52%] hidden h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-black/[0.045] lg:block"
      >
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
          }}
          className="absolute -right-1 top-1/2 h-3 w-3 rounded-full bg-black shadow-xl"
        />
      </motion.div>

      <motion.div
        variants={orbitTwo}
        animate="animate"
        className="pointer-events-none absolute left-[72%] top-[52%] hidden h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-black/[0.055] lg:block"
      >
        <div className="absolute left-1/2 -top-1 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-zinc-500 shadow-lg" />
      </motion.div>


      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="pointer-events-none absolute left-[5%] top-[22%] hidden h-16 w-16 rounded-2xl border border-white/80 bg-white/40 shadow-xl backdrop-blur-xl md:block"
      />

      <motion.div
        animate={{
          y: [0, 18, 0],
          rotate: [0, -8, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute right-[7%] top-[20%] hidden h-24 w-24 rounded-full border border-white/80 bg-white/40 shadow-xl backdrop-blur-xl md:block"
      />

      <motion.div
        animate={{
          x: [0, 15, 0],
          y: [0, -15, 0],
          rotate: [0, 6, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute bottom-[17%] left-[8%] hidden h-10 w-10 rounded-xl bg-white/50 shadow-lg backdrop-blur-xl md:block"
      />

      <div className="relative mx-auto grid min-h-screen max-w-[1600px] items-center gap-6 px-5 pb-16 pt-28 sm:px-8 lg:grid-cols-2 lg:gap-0 lg:px-12">
      

        <motion.div
          initial={{
            opacity: 0,
            x: -60,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="relative z-30 text-center lg:text-left"
        >
          {/* Badge */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.1,
              duration: 0.5,
            }}
            className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-xs font-medium text-zinc-700 shadow-sm backdrop-blur-xl lg:mx-0"
          >
            <motion.span
              animate={{
                rotate: [0, 20, -20, 0],
                scale: [1, 1.15, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              <Sparkles size={13} />
            </motion.span>

            Welcome to iStore Express
          </motion.div>

          {/* Heading */}

          <motion.h1
            initial={{
              opacity: 0,
              y: 35,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.18,
              duration: 0.7,
            }}
            className="text-5xl font-semibold leading-[0.9] tracking-[-0.07em] text-[#1d1d1f] sm:text-7xl lg:text-[7rem]"
          >
            Think
            <br />

            <motion.span
              animate={{
                backgroundPosition: [
                  "0% 50%",
                  "100% 50%",
                  "0% 50%",
                ],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear",
              }}
              className="bg-gradient-to-r from-zinc-400 via-zinc-800 to-zinc-400 bg-[length:200%_auto] bg-clip-text text-transparent"
            >
              different.
            </motion.span>
          </motion.h1>

          {/* Description */}

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.3,
              duration: 0.6,
            }}
           className="mx-auto mt-7 max-w-full text-[15px] leading-7 text-zinc-500 sm:text-lg lg:mx-0"
          >
            Experience the next generation of technology. Discover
            iPhone, Mac, AirPods and Apple Watch in one beautiful
            ecosystem.
          </motion.p>

          {/* Buttons */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.4,
              duration: 0.55,
            }}
            className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start"
          >
            <Link to="/products">
              <motion.div
                whileHover={{
                  scale: 1.05,
                  y: -3,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="group flex items-center gap-2 rounded-full bg-black px-6 py-3.5 text-sm font-medium text-white shadow-xl shadow-black/15"
              >
                Explore Products

                <motion.span
                  animate={{
                    x: [0, 4, 0],
                  }}
                  transition={{
                    duration: 1.4,
                    repeat: Infinity,
                  }}
                >
                  <ArrowRight size={16} />
                </motion.span>
              </motion.div>
            </Link>

            <Link to="/category/iPhone">
              <motion.div
                whileHover={{
                  scale: 1.05,
                  y: -3,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="rounded-full border border-black/15 bg-white/60 px-6 py-3.5 text-sm font-medium text-zinc-800 shadow-sm backdrop-blur-xl transition-all hover:bg-black hover:text-white"
              >
                Shop iPhone
              </motion.div>
            </Link>
          </motion.div>

          {/* Trust */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.7,
            }}
            className="mt-8 flex flex-wrap justify-center gap-x-5 gap-y-3 text-xs text-zinc-400 lg:justify-start"
          >
            <span className="flex items-center gap-1.5 text-black">
              <ShieldCheck size={14} />
              Secure Shopping
            </span>

            <span className="flex items-center gap-1.5 text-black">
              <Zap size={14} />
              Fast Delivery
            </span>

            <span className="flex items-center gap-1.5 text-black">
              <Star size={14} fill="currentColor" />
              4.9/5 Rating
            </span>
          </motion.div>
        </motion.div>

        <div
          className="relative flex min-h-[570px] items-center justify-center lg:min-h-[720px]"
          style={{
            perspective: "1800px",
          }}
        >
          {/* Main glow */}

          <motion.div
            animate={{
              scale: [0.85, 1.15, 0.85],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute h-[300px] w-[300px] rounded-full bg-white blur-[90px] sm:h-[460px] sm:w-[460px]"
          />

          {/* Secondary glow */}

          <motion.div
            animate={{
              scale: [1, 1.35, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute h-[220px] w-[220px] rounded-full bg-zinc-500/20 blur-[70px] sm:h-[360px] sm:w-[360px]"
          />

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={activeProduct.id}
              custom={direction}
              initial={{
                opacity: 0,
                x: direction > 0 ? 120 : -120,
                rotateY: direction > 0 ? 35 : -35,
                rotateX: 8,
                scale: 0.82,
              }}
              animate={{
                opacity: 1,
                x: 0,
                rotateY: 0,
                rotateX: 0,
                scale: 1,
                y: [0, -15, 0],
              }}
              exit={{
                opacity: 0,
                x: direction > 0 ? -120 : 120,
                rotateY: direction > 0 ? -35 : 35,
                scale: 0.82,
              }}
              transition={{
                opacity: {
                  duration: 0.45,
                },
                x: {
                  duration: 0.75,
                  ease: [0.16, 1, 0.3, 1],
                },
                rotateY: {
                  duration: 0.75,
                  ease: [0.16, 1, 0.3, 1],
                },
                rotateX: {
                  duration: 0.75,
                },
                scale: {
                  duration: 0.75,
                  ease: [0.16, 1, 0.3, 1],
                },
                y: {
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              whileHover={{
                scale: 1.045,
                rotateY: 10,
                rotateX: -6,
              }}
              className="relative z-20"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              {/* Product shadow */}

              <motion.div
                animate={{
                  scale: [1, 0.85, 1],
                  opacity: [0.22, 0.1, 0.22],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-12 left-1/2 h-16 w-56 -translate-x-1/2 rounded-full bg-black/20 blur-2xl"
              />

              {/* Product frame */}

              <div className="relative rounded-[3.5rem] bg-gradient-to-br from-white via-zinc-300 to-zinc-800 p-[3px] shadow-[0_55px_120px_rgba(0,0,0,0.3)] sm:rounded-[4rem]">
                <div className="relative overflow-hidden rounded-[3.35rem] bg-black p-[7px] sm:rounded-[3.8rem]">
                  <div className="relative overflow-hidden rounded-[2.95rem] bg-black sm:rounded-[3.35rem]">
                    {/* Product image */}

                    <img
                      src={activeProduct.image}
                      alt={activeProduct.name}
                      className="h-[430px] w-[275px] object-cover sm:h-[570px] sm:w-[350px]"
                    />

                    {/* Cinematic overlay */}

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-black/60" />

                    {/* Shine animation */}

                    <motion.div
                      animate={{
                        x: ["-140%", "160%"],
                      }}
                      transition={{
                        duration: 3.8,
                        repeat: Infinity,
                        repeatDelay: 2.5,
                        ease: "easeInOut",
                      }}
                      className="pointer-events-none absolute inset-y-0 w-24 -skew-x-12 bg-gradient-to-r from-transparent via-white/25 to-transparent blur-lg"
                    />

                    {/* Top shine */}

                    <motion.div
                      animate={{
                        opacity: [0.1, 0.3, 0.1],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="pointer-events-none absolute left-8 right-8 top-10 h-28 rounded-full bg-white/10 blur-3xl"
                    />

                    {/* Product label */}

                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 20,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        delay: 0.25,
                        duration: 0.5,
                      }}
                      className="absolute bottom-5 left-4 right-4 rounded-[1.5rem] border border-white/20 bg-black/70 p-4 text-white shadow-2xl backdrop-blur-xl sm:bottom-6 sm:left-5 sm:right-5"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <p className="text-[9px] uppercase tracking-[0.25em] text-white/45">
                            {activeProduct.label}
                          </p>

                          <p className="mt-1 text-sm font-semibold sm:text-base">
                            {activeProduct.subtitle}
                          </p>
                        </div>

                        <div className="text-right">
                          <p className="text-[9px] text-white/45">
                            Starting
                          </p>

                          <p className="text-sm font-semibold">
                            {activeProduct.price}
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    {/* iPhone Dynamic Island */}

                    {activeProduct.id === "iphone" && (
                      <motion.div
                        animate={{
                          width: [82, 88, 82],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="absolute left-1/2 top-3 h-7 -translate-x-1/2 rounded-full bg-black shadow-2xl"
                      >
                        <div className="absolute right-3 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-zinc-700" />
                      </motion.div>
                    )}

                    {/* Bottom indicator */}

                    <div className="absolute bottom-2 left-1/2 h-1 w-24 -translate-x-1/2 rounded-full bg-white/70" />
                  </div>
                </div>

                {/* Side buttons */}

                {activeProduct.id === "iphone" && (
                  <>
                    <div className="absolute -left-[4px] top-28 h-14 w-[4px] rounded-full bg-zinc-500" />
                    <div className="absolute -left-[4px] top-48 h-10 w-[4px] rounded-full bg-zinc-500" />
                    <div className="absolute -right-[4px] top-40 h-20 w-[4px] rounded-full bg-zinc-500" />
                  </>
                )}
              </div>

              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotateZ: [0, 2, 0],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -left-12 top-24 hidden rounded-2xl border border-white/70 bg-white/85 px-4 py-3 shadow-2xl backdrop-blur-xl sm:block"
                style={{
                  transform: "translateZ(110px)",
                }}
              >
                <div className="flex items-center gap-1.5">
                  <Star size={14} fill="currentColor" />

                  <span className="text-xs font-semibold">
                    4.9
                  </span>
                </div>

                <p className="mt-1 text-[10px] text-zinc-400">
                  Customer rating
                </p>
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 9, 0],
                  rotateZ: [0, -2, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-12 top-28 hidden rounded-2xl border border-white/70 bg-white/85 p-4 shadow-2xl backdrop-blur-xl sm:block"
                style={{
                  transform: "translateZ(100px)",
                }}
              >
                {activeProduct.id === "macbook" ? (
                  <Laptop size={19} strokeWidth={1.7} />
                ) : activeProduct.id === "airpods" ? (
                  <Headphones size={19} strokeWidth={1.7} />
                ) : activeProduct.id === "watch" ? (
                  <Watch size={19} strokeWidth={1.7} />
                ) : (
                  <Camera size={19} strokeWidth={1.7} />
                )}

                <p className="mt-2 text-[10px] text-zinc-400">
                  Premium
                </p>

                <p className="text-xs font-semibold">
                  Apple Design
                </p>
              </motion.div>

              <motion.div
                animate={{
                  y: [0, -8, 0],
                  rotateZ: [0, 1, 0],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-10 bottom-32 hidden rounded-2xl border border-white/70 bg-white/85 p-4 shadow-2xl backdrop-blur-xl sm:block"
                style={{
                  transform: "translateZ(120px)",
                }}
              >
                <Cpu size={18} strokeWidth={1.7} />

                <p className="mt-2 text-[10px] text-black">
                  Performance
                </p>

                <p className="text-xs font-semibold">
                  Pro Power
                </p>
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 9, 0],
                }}
                transition={{
                  duration: 3.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -left-10 bottom-28 hidden rounded-2xl border border-white/70 bg-white/85 p-4 shadow-2xl backdrop-blur-xl sm:block"
                style={{
                  transform: "translateZ(90px)",
                }}
              >
                <BatteryCharging
                  size={18}
                  strokeWidth={1.7}
                />

                <p className="mt-2 text-[10px] text-zinc-400">
                  Battery
                </p>

                <p className="text-xs font-semibold">
                  All Day
                </p>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute bottom-1 left-1/2 z-40 flex -translate-x-1/2 items-center gap-2">
            {products.map((product, index) => {
              const Icon = product.icon;

              return (
                <motion.button
                  key={product.id}
                  onClick={() => changeSlide(index)}
                  whileHover={{
                    scale: 1.1,
                  }}
                  whileTap={{
                    scale: 0.9,
                  }}
                  className={`group relative flex h-10 w-10 items-center justify-center rounded-full border shadow-lg backdrop-blur-xl transition-all ${
                    activeIndex === index
                      ? "border-black bg-black text-white"
                      : "border-black/10 bg-white/70 text-zinc-500 hover:bg-white"
                  }`}
                  aria-label={`Show ${product.name}`}
                >
                  <Icon size={16} strokeWidth={1.8} />

                  {activeIndex === index && (
                    <motion.span
                      layoutId="activeProductDot"
                      className="absolute -bottom-2 h-1 w-5 rounded-full bg-black"
                    />
                  )}
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>

      <motion.div
        animate={{
          y: [0, 7, 0],
          opacity: [0.4, 1, 0.4],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-zinc-400 sm:flex"
      >
        <span className="text-[9px] uppercase tracking-[0.3em]">
          Scroll
        </span>

        <ChevronDown size={18} />
      </motion.div>
    </section>
  );
}
