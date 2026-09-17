import { motion } from "framer-motion";
import { ArrowRight,Cpu, Sparkles, Zap,} from "lucide-react";
import { Link } from "react-router-dom";

const floatingItems = [
{
  icon: Cpu,
  text: "Pro Performance",
  className:
    "left-5 top-10 sm:left-10 sm:top-14 text-purple-500 drop-shadow-[0_0_12px_rgba(168,85,247,0.5)]",
  delay: 0,
},
  {
    icon: Zap,
    text: "All-day power",
    className: "bottom-10 right-5 sm:bottom-14 sm:right-10",
    delay: 0.3,
  },
];

export default function FeaturedBanner() {
  return (
    <section className="overflow-hidden px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
      <div
       className="group relative mx-auto max-w-full overflow-hidden rounded-[2rem] bg-[#050505] shadow-[0_35px_100px_rgba(0,0,0,0.18)] sm:rounded-[3rem]"
        style={{
          perspective: "1600px",
        }}
      >
    

        <motion.div
          animate={{
            x: ["-20%", "30%", "-20%"],
            y: ["-10%", "15%", "-10%"],
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/4 top-1/4 h-[350px] w-[350px] rounded-full bg-white blur-[120px] sm:h-[500px] sm:w-[500px]"
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_50%,rgba(255,255,255,0.10),transparent_35%)]" />

       

        <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)] [background-size:50px_50px]" />

          <div className="relative grid min-h-[620px] items-center lg:grid-cols-[0.9fr_1.1fr]">

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
              amount: 0.3,
            }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative z-20 px-7 py-14 sm:px-12 sm:py-16 lg:px-16 lg:py-20"
          >

            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.15,
              }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs font-medium text-white/60 backdrop-blur-xl"
            >
              <Sparkles size={13} />
              The new MacBook Pro
            </motion.div>


            <motion.h2
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
                delay: 0.25,
                duration: 0.65,
              }}
              className="mt-6 text-4xl font-semibold leading-[0.95] tracking-[-0.055em] text-white sm:text-6xl lg:text-[5rem]"
            >
              Pro power.
              <br />

              <span className="bg-gradient-to-r from-white via-zinc-400 to-zinc-700 bg-clip-text text-transparent">
                Pro everything.
              </span>
            </motion.h2>


            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.35,
                duration: 0.55,
              }}
              className="mt-6 max-w-md text-sm leading-7 text-zinc-400 sm:text-base"
            >
              Serious performance meets an extraordinary
              design. Built for creators, developers and
              professionals who demand more.
            </motion.p>


            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.45,
              }}
              className="mt-8"
            >
              <Link to="/category/Mac">
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    y: -3,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 20,
                  }}
                  className="group/button inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black shadow-[0_15px_40px_rgba(255,255,255,0.12)]"
                >
                  Explore Mac

                  <motion.span
                    animate={{
                      x: [0, 4, 0],
                    }}
                    transition={{
                      duration: 1.4,
                      repeat: Infinity,
                    }}
                  >
                    <ArrowRight size={17} />
                  </motion.span>
                </motion.div>
              </Link>
            </motion.div>


            <motion.div
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.65,
              }}
              className="mt-10 flex gap-7 text-xs text-zinc-500"
            >
              <div>
                <p className="text-lg font-semibold text-white">
                  M-series
                </p>
                <span>Pro chip</span>
              </div>

              <div>
                <p className="text-lg font-semibold text-white">
                  18h+
                </p>
                <span>Battery</span>
              </div>

              <div>
                <p className="text-lg font-semibold text-white">
                  XDR
                </p>
                <span>Display</span>
              </div>
            </motion.div>
          </motion.div>

                  <motion.div
            initial={{
              opacity: 0,
              x: 80,
              rotateY: -25,
              scale: 0.85,
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
              duration: 1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative flex min-h-[420px] items-center justify-center overflow-hidden px-5 pb-12 lg:min-h-[620px] lg:pb-0"
            style={{
              perspective: "1400px",
            }}
          >
            {/* Product glow */}

            <motion.div
              animate={{
                scale: [0.9, 1.12, 0.9],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute h-[280px] w-[280px] rounded-full bg-white blur-[80px] sm:h-[400px] sm:w-[400px]"
            />

            {/* Orbit */}

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-[330px] w-[330px] rounded-full border border-white/[0.07] sm:h-[470px] sm:w-[470px]"
            >
              <motion.span
                animate={{
                  scale: [1, 1.7, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="absolute right-8 top-1/2 h-2 w-2 rounded-full bg-white shadow-[0_0_20px_white]"
              />
            </motion.div>

        
            <motion.div
              animate={{
                y: [0, -14, 0],
                rotateZ: [0, 1, 0, -1, 0],
                rotateY: [0, 3, 0, -3, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.05,
                rotateY: 10,
                rotateX: -5,
                rotateZ: 1,
              }}
              className="relative z-10 w-[92%] max-w-[570px]"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              {/* Shadow */}

              <div className="absolute -inset-5 rounded-[3rem] bg-black/60 blur-3xl" />

              {/* Laptop */}

              <div
                className="relative overflow-hidden rounded-[1.5rem] border border-white/20 bg-zinc-900 p-1 shadow-[0_40px_100px_rgba(0,0,0,0.65)] sm:rounded-[2rem] sm:p-2"
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="relative overflow-hidden rounded-[1.2rem] bg-black sm:rounded-[1.5rem]">

                <motion.img
  src="https://images.unsplash.com/photo-1517336714739-489689fd1ca8?auto=format&fit=crop&w=1400&q=90"
  alt="MacBook Pro"
  onError={(e) => {
    e.currentTarget.onerror = null;
    e.currentTarget.src =
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1400&q=90";
  }}
  className="h-[260px] w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-[380px] lg:h-[420px]"
/>

                  {/* Screen reflection */}

                  <motion.div
                    animate={{
                      x: ["-120%", "120%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatDelay: 2,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-y-0 w-24 rotate-[20deg] bg-gradient-to-r from-transparent via-white/10 to-transparent blur-md"
                  />

                  {/* Glass overlay */}

                  <div className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-2xl border border-white/10 bg-black/65 px-4 py-3 backdrop-blur-xl sm:inset-x-6 sm:bottom-6 sm:px-5 sm:py-4">
                    <div>
                      <p className="text-[9px] uppercase tracking-[0.2em] text-white/40">
                        MacBook Pro
                      </p>

                      <p className="mt-1 text-sm font-semibold text-white sm:text-base">
                        Power unleashed.
                      </p>
                    </div>

                    <div className="text-right">
                      <p className="text-[9px] text-white/40">
                        Starting
                      </p>

                      <p className="text-sm font-semibold text-white sm:text-base">
                        ₹1,69,900
                      </p>
                    </div>
                  </div>
                </div>
              </div>



              {floatingItems.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.text}
                    initial={{
                      opacity: 0,
                      scale: 0.7,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: 0.8 + item.delay,
                      type: "spring",
                      stiffness: 300,
                    }}
                    animate={{
                      y: [0, index === 0 ? -8 : 8, 0],
                    }}
                    className={`absolute z-30 hidden items-center gap-2 rounded-2xl border border-white/15 bg-white/[0.08] px-4 py-3 text-[10px] text-white/80 shadow-xl backdrop-blur-2xl sm:flex ${item.className}`}
                    style={{
                      transform: "translateZ(80px)",
                    }}
                  >
                    <Icon size={14} />
                    {item.text}
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom shine */}

        <motion.div
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatDelay: 2,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 left-0 h-px w-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent"
        />
      </div>
    </section>
  );
}