import { motion } from "framer-motion";
import {ArrowRight,ArrowUpRight, Apple, ChevronRight,Cpu, Headphones,Laptop,Smartphone, Sparkles,Watch, Zap,} from "lucide-react";
import { Link } from "react-router-dom";

import Hero from "../components/Hero";
import FeaturedBanner from "../components/FeaturedBanner";
import ProductGrid from "../components/ProductGrid";
import { products } from "../data/products";

const categories = [
  {
    name: "iPhone",
    path: "/category/iPhone",
    icon: Smartphone,
    number: "01",
    text: "Powerful. Personal.",
  },
  {
    name: "iPad",
    path: "/category/iPad",
    icon: Cpu,
    number: "02",
    text: "Create without limits.",
  },
  {
    name: "Mac",
    path: "/category/Mac",
    icon: Laptop,
    number: "03",
    text: "Built for what matters.",
  },
  {
    name: "Watch",
    path: "/category/Apple Watch",
    icon: Watch,
    number: "04",
    text: "Your world at a glance.",
  },
  {
    name: "AirPods",
    path: "/category/AirPods",
    icon: Headphones,
    number: "05",
    text: "Sound. Reimagined.",
  },
];

const categoryVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    rotateX: 12,
  },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      delay: index * 0.08,
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export default function Home() {
  return (
    <main className="overflow-hidden bg-white">

  

      <Hero />

   

      <section className="relative overflow-hidden bg-[#f5f5f7] px-5 py-20 sm:px-8 sm:py-28 lg:px-10">


        <motion.div
          animate={{
            x: [-100, 100, -100],
            y: [0, 60, 0],
            scale: [1, 1.25, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute left-[10%] top-20 h-[300px] w-[300px] rounded-full bg-white blur-[120px]"
        />

        <motion.div
          animate={{
            x: [100, -100, 100],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute right-[5%] top-[40%] h-[350px] w-[350px] rounded-full bg-zinc-300/30 blur-[120px]"
        />

        {/* Header */}

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
          }}
          className="relative z-10 mx-auto max-w-7xl"
        >
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <div className="mb-4 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.25em] text-zinc-400">
                <Sparkles size={13} />
                Explore the collection
              </div>

              <h2 className="max-w-2xl text-4xl font-semibold tracking-[-0.055em] text-zinc-900 sm:text-6xl">
                Find your
                <span className="text-zinc-400">
                  {" "}perfect device.
                </span>
              </h2>
            </div>

            <Link
              to="/products"
              className="group inline-flex items-center gap-2 text-sm font-medium text-zinc-500 transition hover:text-black"
            >
              View all products

              <motion.span
                whileHover={{
                  x: 4,
                }}
              >
                <ArrowRight size={16} />
              </motion.span>
            </Link>
          </div>
        </motion.div>


        <div
          className="relative z-10 mx-auto mt-12 grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-5"
          style={{
            perspective: "1600px",
          }}
        >
          {categories.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={category.name}
                custom={index}
                variants={categoryVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                whileHover={{
                  y: -12,
                  rotateX: 4,
                  rotateY: index % 2 === 0 ? -4 : 4,
                }}
                transition={{
                  type: "spring",
                  stiffness: 280,
                  damping: 20,
                }}
                className="group relative"
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                <Link
                  to={category.path}
                  className="relative block h-full min-h-[250px] overflow-hidden rounded-[2rem] border border-black/[0.04] bg-white p-6 shadow-[0_12px_35px_rgba(0,0,0,0.05)] transition-shadow duration-500 hover:shadow-[0_30px_70px_rgba(0,0,0,0.14)]"
                >
                  {/* Card glow */}

                  <motion.div
                    animate={{
                      scale: [1, 1.15, 1],
                      opacity: [0.15, 0.25, 0.15],
                    }}
                    transition={{
                      duration: 4 + index,
                      repeat: Infinity,
                    }}
                    className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-zinc-300 blur-[55px]"
                  />

                  {/* Number */}

                  <div className="absolute right-5 top-5 text-[10px] font-medium tracking-[0.2em] text-zinc-300">
                    {category.number}
                  </div>

                  {/* Icon */}

                  <motion.div
                    whileHover={{
                      rotateY: 180,
                      rotateZ: 5,
                      scale: 1.12,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 18,
                    }}
                    className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f5f5f7] text-black shadow-inner"
                    style={{
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <Icon size={25} strokeWidth={1.5} />
                  </motion.div>

                  {/* Text */}

                  <div className="relative z-10 mt-16">
                    <h3 className="text-xl font-semibold tracking-tight">
                      {category.name}
                    </h3>

                    <p className="mt-2 text-xs leading-5 text-zinc-400">
                      {category.text}
                    </p>
                  </div>

                  {/* Arrow */}

                  <motion.div
                    whileHover={{
                      scale: 1.1,
                      rotate: 45,
                    }}
                    className="absolute bottom-5 right-5 flex h-9 w-9 items-center justify-center rounded-full bg-black text-white"
                  >
                    <ArrowUpRight size={15} />
                  </motion.div>

                  {/* Shine */}

                  <motion.div
                    initial={{
                      x: "-130%",
                    }}
                    whileHover={{
                      x: "150%",
                    }}
                    transition={{
                      duration: 0.7,
                    }}
                    className="pointer-events-none absolute inset-y-0 w-16 -skew-x-12 bg-gradient-to-r from-transparent via-white/60 to-transparent blur-sm"
                  />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

  
    <FeaturedBanner />

      <section className="relative bg-white px-5 py-20 sm:px-8 lg:px-10 lg:py-28">

        <div className="mx-auto max-w-full">

          <motion.div
            initial={{
              opacity: 0,
              y: 35,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
            className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"
          >
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-zinc-400">
                Curated for you
              </p>

              <h2 className="mt-3 text-4xl font-semibold tracking-[-0.05em] sm:text-6xl">
                Latest products.
              </h2>

              <p className="mt-4 max-w-lg text-sm leading-6 text-zinc-500">
                Discover powerful devices designed to fit
                seamlessly into your everyday life.
              </p>
            </div>

            <Link
              to="/products"
              className="group inline-flex items-center gap-2 rounded-full border border-black/10 px-5 py-3 text-sm font-medium transition hover:bg-black hover:text-white"
            >
              Explore all

              <ChevronRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </motion.div>

          <ProductGrid products={products} />
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#050505] px-5 py-24 text-white sm:px-8 sm:py-32">

        {/* Grid */}

        <div className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)] [background-size:55px_55px]" />

        {/* Center glow */}

        <motion.div
          animate={{
            scale: [0.8, 1.2, 0.8],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white blur-[130px]"
        />

        {/* Orbit */}

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute left-1/2 top-1/2 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.06] sm:h-[500px] sm:w-[500px]"
        />

        <motion.div
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute left-1/2 top-1/2 h-[230px] w-[230px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/[0.05] sm:h-[380px] sm:w-[380px]"
        />

        <div
        className="relative z-10 mx-auto max-w-full text-center"
          style={{
            perspective: "1400px",
          }}
        >
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.7,
              rotateX: 20,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
              rotateX: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{
              rotateY: 5,
              scale: 1.02,
            }}
            className="relative"
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {/* Floating icon */}

            <motion.div
              animate={{
                y: [0, -12, 0],
                rotateZ: [0, 5, 0, -5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl border border-white/10 bg-white/[0.07] shadow-[0_20px_60px_rgba(255,255,255,0.08)] backdrop-blur-xl"
            >
              <Apple size={28} fill="currentColor" />
            </motion.div>

            <p className="mt-8 text-xs font-medium uppercase tracking-[0.3em] text-zinc-500">
              iStore Express
            </p>

            <h2 className="mx-auto mt-5 max-w-full text-4xl font-semibold tracking-[-0.055em] sm:text-6xl lg:text-7xl">
              Technology that feels
              <span className="block bg-gradient-to-r from-white via-zinc-400 to-zinc-700 bg-clip-text text-transparent">
                effortless.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-zinc-500 sm:text-base">
              Explore our complete collection and discover
              technology designed around your world.
            </p>

            {/* CTA */}

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">

              <Link to="/products">
                <motion.div
                  whileHover={{
                    scale: 1.06,
                    y: -3,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black shadow-[0_15px_50px_rgba(255,255,255,0.12)]"
                >
                  Explore Now

                  <ArrowRight size={16} />
                </motion.div>
              </Link>

              <Link to="/category/iPhone">
                <motion.div
                  whileHover={{
                    scale: 1.04,
                    y: -3,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-7 py-3.5 text-sm font-medium text-white backdrop-blur-xl"
                >
                  Shop iPhone

                  <Zap size={15} />
                </motion.div>
              </Link>

            </div>

            {/* Stats */}

            <div className="mx-auto mt-12 flex max-w-md justify-center gap-8 border-t border-white/[0.08] pt-8 text-center sm:gap-14">
              <div>
                <p className="text-xl font-semibold">
                  5+
                </p>
                <p className="mt-1 text-[10px] uppercase tracking-widest text-zinc-600">
                  Categories
                </p>
              </div>

              <div>
                <p className="text-xl font-semibold">
                  4.9
                </p>
                <p className="mt-1 text-[10px] uppercase tracking-widest text-zinc-600">
                  Rating
                </p>
              </div>

              <div>
                <p className="text-xl font-semibold">
                  100%
                </p>
                <p className="mt-1 text-[10px] uppercase tracking-widest text-zinc-600">
                  Premium
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom shine */}

        <motion.div
          animate={{
            x: ["-100%", "200%"],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatDelay: 2,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 left-0 h-px w-1/3 bg-gradient-to-r from-transparent via-white/40 to-transparent"
        />
      </section>
    </main>
  );
}