import { motion, AnimatePresence } from "framer-motion";
import {Apple, ArrowUp, ArrowUpRight,  Globe, Mail, MessageSquare, Share2, Video,} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const shopLinks = [
  {
    name: "iPhone",
    category: "iPhone",
  },
  {
    name: "iPad",
    category: "iPad",
  },
  {
    name: "MacBook / Mac",
    category: "Mac",
  },
  {
    name: "Apple Watch",
    category: "Watch",
  },
  {
    name: "AirPods",
    category: "AirPods",
  },
];

const supportLinks = [
  ["Shipping", "/"],
  ["Returns", "/"],
  ["Contact", "/"],
  ["Help Center", "/"],
];

const socials = [
  {
    icon: Globe,
    label: "Instagram",
  },
  {
    icon: Share2,
    label: "Twitter",
  },
  {
    icon: Video,
    label: "YouTube",
  },
  {
    icon: MessageSquare,
    label: "Chat",
  },
];

const particles = [
  {
    className: "left-[12%] top-[18%]",
    delay: 0,
  },
  {
    className: "right-[15%] top-[24%]",
    delay: 0.4,
  },
  {
    className: "left-[18%] bottom-[18%]",
    delay: 0.8,
  },
  {
    className: "right-[20%] bottom-[20%]",
    delay: 1.2,
  },
];

export default function Footer() {
  const location = useLocation();

  const [showBackTop, setShowBackTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleCategoryClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  };

  return (
    <footer className="relative overflow-hidden bg-[#050505] text-white">
    
      <motion.div
        animate={{
          x: [-80, 80, -80],
          y: [-20, 40, -20],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-[10%] top-20 h-[280px] w-[280px] rounded-full bg-white/[0.07] blur-[110px]"
      />

      <motion.div
        animate={{
          x: [80, -60, 80],
          y: [20, -30, 20],
          scale: [1, 1.25, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute right-[5%] top-[40%] h-[350px] w-[350px] rounded-full bg-zinc-400/[0.05] blur-[120px]"
      />

      {/* Grid */}

      <div className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)] [background-size:55px_55px]" />

      <div className="relative mx-auto max-w-full px-5 sm:px-8">
        {/* =========================================================
            HERO / 3D SHOWCASE
        ========================================================= */}

        <section
          className="relative min-h-[500px] overflow-hidden border-b border-white/[0.08]"
          style={{
            perspective: "1600px",
          }}
        >
          {/* Rotating Rings */}

          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute right-[8%] top-1/2 h-[360px] w-[360px] -translate-y-1/2 rounded-full border border-white/[0.06] sm:h-[500px] sm:w-[500px]"
          />

          <motion.div
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute right-[13%] top-1/2 h-[280px] w-[280px] -translate-y-1/2 rounded-full border border-dashed border-white/[0.05] sm:h-[410px] sm:w-[410px]"
          />

          <div className="grid min-h-[500px] items-center gap-10 py-16 lg:grid-cols-2 lg:py-20">
          

            <motion.div
              initial={{
                opacity: 0,
                x: -50,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative z-20"
            >
              {/* Brand Badge */}

              <motion.div
                whileHover={{
                  scale: 1.05,
                  rotateY: 8,
                }}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs text-zinc-400 backdrop-blur-xl"
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                <Apple
                  size={14}
                  fill="currentColor"
                />

                iStore Express
              </motion.div>

              {/* Heading */}

              <h2 className="max-w-xl text-4xl font-semibold tracking-[-0.05em] sm:text-6xl lg:text-7xl">
                Technology
                <br />

                <span className="bg-gradient-to-r from-white via-zinc-400 to-zinc-700 bg-clip-text text-transparent">
                  beautifully simple.
                </span>
              </h2>

              <p className="mt-6 max-w-md text-sm leading-7 text-zinc-500 sm:text-base">
                Premium technology, thoughtfully curated
                for the way you live, work and create.
              </p>

              {/* CTA */}

              <motion.div
                className="mt-8 inline-flex"
                whileHover={{
                  scale: 1.05,
                  y: -3,
                }}
                whileTap={{
                  scale: 0.96,
                }}
              >
                <Link
                  to="/products"
                  onClick={handleCategoryClick}
                  className="group flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black shadow-[0_15px_50px_rgba(255,255,255,0.08)]"
                >
                  Explore Products

                  <motion.span
                    className="transition-transform duration-300 group-hover:rotate-45"
                  >
                    <ArrowUpRight size={17} />
                  </motion.span>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                x: 80,
                rotateY: -25,
                scale: 0.8,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                rotateY: 0,
                scale: 1,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 1.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative flex h-[360px] items-center justify-center overflow-visible sm:h-[460px]"
              style={{
                perspective: "1400px",
              }}
            >

              <motion.div
                initial={{
                  scale: 1.15,
                  opacity: 0,
                }}
                whileInView={{
                  scale: 1,
                  opacity: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 1.4,
                }}
                className="absolute inset-0 overflow-hidden rounded-[40px]"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.06, 1],
                    x: [0, 8, 0],
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-[-8%] bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=90')",
                  }}
                />


                <div className="absolute inset-0 bg-black/55" />


                <motion.div
                  animate={{
                    opacity: [0.25, 0.5, 0.25],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                  }}
                  className="absolute inset-0 bg-gradient-to-br from-blue-500/30 via-transparent to-purple-500/30"
                />

                {/* Glass */}

                <div className="absolute inset-0 bg-white/[0.03] backdrop-blur-[2px]" />
              </motion.div>

              <motion.div
                animate={{
                  scale: [0.8, 1.15, 0.8],
                  opacity: [0.2, 0.45, 0.2],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute h-[220px] w-[220px] rounded-full bg-blue-500/30 blur-[100px] sm:h-[320px] sm:w-[320px]"
              />

              {/* Purple Glow */}

              <motion.div
                animate={{
                  x: [-30, 30, -30],
                  y: [20, -20, 20],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute h-[160px] w-[160px] rounded-full bg-purple-500/20 blur-[90px]"
              />

              {particles.map(({ className, delay }, index) => (
                <motion.span
                  key={index}
                  animate={{
                    y: [0, -15, 0],
                    opacity: [0.3, 0.9, 0.3],
                    scale: [0.8, 1.2, 0.8],
                  }}
                  transition={{
                    duration: 3 + index,
                    repeat: Infinity,
                    delay,
                  }}
                  className={`absolute ${className} z-10 h-2 w-2 rounded-full bg-white shadow-[0_0_20px_rgba(255,255,255,0.9)]`}
                />
              ))}

              <motion.div
                animate={{
                  y: [0, -16, 0],
                  rotateZ: [0, 2, 0, -2, 0],
                  rotateY: [0, 5, 0, -5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{
                  scale: 1.08,
                  rotateY: 16,
                  rotateX: -8,
                }}
                className="relative z-20 w-[190px] sm:w-[245px]"
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                {/* PHONE SHADOW */}

                <motion.div
                  animate={{
                    scale: [1, 0.85, 1],
                    opacity: [0.5, 0.25, 0.5],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                  }}
                  className="absolute -bottom-10 left-1/2 h-12 w-[85%] -translate-x-1/2 rounded-full bg-black/80 blur-2xl"
                />

                {/* PHONE BODY */}

                <div
                  className="relative overflow-hidden rounded-[42px] border border-white/25 bg-gradient-to-br from-zinc-700 via-zinc-950 to-black p-2 shadow-[0_40px_100px_rgba(0,0,0,0.85)]"
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >
                  {/* Side Light */}

                  <div className="absolute inset-y-8 left-0 w-[2px] bg-white/30 blur-[1px]" />

                  <div className="relative aspect-[9/16] overflow-hidden rounded-[34px] bg-black">
                    {/* SCREEN IMAGE */}

                    <motion.div
                      animate={{
                        scale: [1, 1.05, 1],
                        backgroundPosition: [
                          "50% 50%",
                          "55% 45%",
                          "50% 50%",
                        ],
                      }}
                      transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage:
                          "url('https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=700&q=90')",
                      }}
                    />

                    {/* Screen Gradient */}

                    <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70" />

                    {/* Dynamic Island */}

                    <motion.div
                      animate={{
                        width: ["64px", "72px", "64px"],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute left-1/2 top-3 h-5 -translate-x-1/2 rounded-full bg-black shadow-[0_0_20px_rgba(0,0,0,0.8)]"
                    />

                    {/* Reflection */}

                    <motion.div
                      animate={{
                        x: ["-180%", "180%"],
                      }}
                      transition={{
                        duration: 3.5,
                        repeat: Infinity,
                        repeatDelay: 2,
                        ease: "easeInOut",
                      }}
                      className="absolute inset-y-0 z-20 w-20 rotate-[25deg] bg-gradient-to-r from-transparent via-white/25 to-transparent blur-md"
                    />

                    {/* Apple Logo */}

                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        animate={{
                          scale: [1, 1.08, 1],
                          opacity: [0.65, 1, 0.65],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                        }}
                        className="text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.5)]"
                      >
                        <Apple
                          size={62}
                          fill="currentColor"
                          strokeWidth={1}
                        />
                      </motion.div>
                    </div>

                    {/* Bottom Glass */}

                    <motion.div
                      initial={{
                        y: 30,
                        opacity: 0,
                      }}
                      whileInView={{
                        y: 0,
                        opacity: 1,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        delay: 0.7,
                      }}
                      className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/15 bg-black/45 px-3 py-3 text-center backdrop-blur-xl"
                    >
                      <p className="text-[8px] uppercase tracking-[0.3em] text-white/50">
                        iStore Express
                      </p>

                      <p className="mt-1 text-xs font-semibold text-white">
                        Think Different.
                      </p>
                    </motion.div>
                  </div>
                </div>

                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    rotateZ: [0, 3, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  whileHover={{
                    scale: 1.08,
                  }}
                  className="absolute -right-10 top-12 rounded-2xl border border-white/15 bg-black/60 px-4 py-3 text-white shadow-2xl backdrop-blur-xl sm:-right-16"
                >
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-green-400 shadow-[0_0_12px_rgba(74,222,128,0.9)]" />

                    <p className="text-[9px] uppercase tracking-widest text-white/50">
                      Performance
                    </p>
                  </div>

                  <p className="mt-1 text-sm font-semibold">
                    Ultra Fast
                  </p>
                </motion.div>

                <motion.div
                  animate={{
                    y: [0, 9, 0],
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  whileHover={{
                    scale: 1.08,
                  }}
                  className="absolute -left-10 bottom-16 rounded-2xl border border-white/15 bg-black/60 px-4 py-3 text-white shadow-2xl backdrop-blur-xl sm:-left-16"
                >
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-blue-400 shadow-[0_0_12px_rgba(96,165,250,0.9)]" />

                    <p className="text-[9px] uppercase tracking-widest text-white/50">
                      Battery
                    </p>
                  </div>

                  <p className="mt-1 text-sm font-semibold">
                    All Day
                  </p>
                </motion.div>

                <motion.div
                  animate={{
                    y: [0, -7, 0],
                    rotateZ: [0, -2, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -bottom-5 -right-5 rounded-xl border border-white/10 bg-white/[0.08] px-3 py-2 text-white backdrop-blur-xl"
                >
                  <p className="text-[8px] uppercase tracking-widest text-white/40">
                    Chip
                  </p>

                  <p className="text-xs font-bold">
                    A-Series
                  </p>
                </motion.div>
              </motion.div>

              {/* Front Glass Border */}

              <div className="pointer-events-none absolute inset-0 z-30 rounded-[40px] border border-white/10 bg-gradient-to-br from-white/[0.08] via-transparent to-transparent" />
            </motion.div>
          </div>
        </section>

        <div className="relative grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:py-16">
          {/* BRAND */}

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
          >
            <motion.div
              whileHover={{
                scale: 1.04,
                rotateY: 8,
              }}
              className="inline-flex items-center gap-3"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] shadow-[0_10px_30px_rgba(255,255,255,0.04)]">
                <Apple
                  size={20}
                  fill="currentColor"
                />
              </span>

              <span className="text-lg font-semibold">
                iStore Express
              </span>
            </motion.div>

            <p className="mt-5 max-w-xs text-sm leading-7 text-zinc-500">
              Premium technology. Simple shopping.
              Designed for the future.
            </p>

            {/* Social */}

            <div className="mt-6 flex gap-2">
              {socials.map(({ icon: Icon, label }) => (
                <motion.button
                  key={label}
                  whileHover={{
                    y: -5,
                    scale: 1.1,
                    rotateY: 12,
                  }}
                  whileTap={{
                    scale: 0.9,
                  }}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-zinc-500 transition-all duration-300 hover:bg-white hover:text-black"
                  aria-label={label}
                >
                  <Icon size={15} />
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* SHOP */}

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.1,
            }}
          >
            <p className="mb-5 text-sm font-semibold">
              Shop
            </p>

            <div className="space-y-3">
              {shopLinks.map(({ name, category }) => (
                <Link
                  key={name}
                  to={`/category/${encodeURIComponent(category)}`}
                  onClick={handleCategoryClick}
                  className="group flex items-center justify-between text-sm text-zinc-500 transition hover:text-white"
                >
                  <span>{name}</span>

                  <ArrowUpRight
                    size={13}
                    className="opacity-0 transition duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                  />
                </Link>
              ))}
            </div>
          </motion.div>

          {/* SUPPORT */}

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
          >
            <p className="mb-5 text-sm font-semibold">
              Support
            </p>

            <div className="space-y-3">
              {supportLinks.map(([name, path]) => (
                <Link
                  key={name}
                  to={path}
                  onClick={handleCategoryClick}
                  className="group flex items-center justify-between text-sm text-zinc-500 transition hover:text-white"
                >
                  <span>{name}</span>

                  <ArrowUpRight
                    size={13}
                    className="opacity-0 transition duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                  />
                </Link>
              ))}
            </div>
          </motion.div>


          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.3,
            }}
          >
            <p className="mb-5 text-sm font-semibold">
              Stay connected
            </p>

            <p className="mb-4 text-sm leading-6 text-zinc-500">
              Get product updates, new arrivals and
              exclusive offers.
            </p>

            <div className="group flex items-center rounded-full border border-white/10 bg-white/[0.04] p-1.5 transition hover:border-white/20">
              <Mail
                size={16}
                className="ml-3 text-zinc-600"
              />

              <input
                type="email"
                placeholder="Your email"
                className="min-w-0 flex-1 bg-transparent px-3 py-2 text-xs text-white outline-none placeholder:text-zinc-600"
              />

              <motion.button
                whileHover={{
                  scale: 1.05,
                  rotateZ: 3,
                }}
                whileTap={{
                  scale: 0.92,
                }}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-black transition-shadow duration-300 hover:shadow-[0_0_25px_rgba(255,255,255,0.25)]"
                aria-label="Subscribe"
              >
                <ArrowUpRight size={15} />
              </motion.button>
            </div>
          </motion.div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/[0.08] py-7 text-xs text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} iStore Express.
            All rights reserved.
          </p>

          <div className="flex gap-5">
            <span className="cursor-pointer transition hover:text-zinc-300">
              Privacy
            </span>

            <span className="cursor-pointer transition hover:text-zinc-300">
              Terms
            </span>

            <span className="cursor-pointer transition hover:text-zinc-300">
              Cookies
            </span>
          </div>
        </div>
      </div>

      <motion.div
        animate={{
          x: ["-100%", "200%"],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatDelay: 3,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute bottom-0 h-px w-1/3 bg-gradient-to-r from-transparent via-white/50 to-transparent"
      />

      <AnimatePresence>
        {showBackTop && (
          <motion.button
            initial={{
              opacity: 0,
              y: 15,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 15,
              scale: 0.8,
            }}
            whileHover={{
              scale: 1.08,
              y: -2,
            }}
            whileTap={{
              scale: 0.9,
            }}
            onClick={scrollToTop}
            className="fixed bottom-5 right-5 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-red-500/40 bg-red-500/10 text-red-400 shadow-[0_12px_30px_rgba(0,0,0,0.5)] backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:bg-red-500 hover:text-white hover:shadow-[0_0_30px_rgba(239,68,68,0.4)] sm:bottom-6 sm:right-7 sm:h-11 sm:w-11"
            aria-label="Back to top"
          >
            <motion.span
              animate={{
                y: [0, -3, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ArrowUp size={22} />
            </motion.span>

            <span className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-white/10" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}