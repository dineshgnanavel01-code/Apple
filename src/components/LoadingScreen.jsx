import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {Apple,Sparkles, ShieldCheck, Zap, Cpu,} from "lucide-react";

const particles = Array.from({ length: 18 });

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          return 100;
        }

        return prev + 1;
      });
    }, 24);

    const hideTimer = setTimeout(() => {
      setVisible(false);
    }, 3200);

    return () => {
      clearInterval(progressTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[99999] flex items-center justify-center overflow-hidden bg-[#020203] text-white"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.04,
            filter: "blur(14px)",
          }}
          transition={{
            duration: 0.8,
            ease: [0.76, 0, 0.24, 1],
          }}
        >

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(255,255,255,0.09),transparent_28%),radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.035),transparent_25%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.035),transparent_25%)]" />

          <motion.div
            className="absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.07] blur-[100px] sm:h-[420px] sm:w-[420px]"
            animate={{
              scale: [0.8, 1.25, 0.8],
              opacity: [0.25, 0.55, 0.25],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)] [background-size:55px_55px] [mask-image:radial-gradient(circle_at_center,black,transparent_75%)]" />

          <motion.div
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="absolute left-1/2 top-[8%] flex -translate-x-1/2 flex-col items-center"
          >
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] backdrop-blur-xl">
                <Apple size={16} fill="white" strokeWidth={1.4} />
              </div>

              <span className="text-[11px] font-semibold tracking-[0.3em] text-white/70">
                iSTORE EXPRESS
              </span>
            </div>

            <div className="mt-3 flex items-center gap-2 text-[9px] uppercase tracking-[0.35em] text-white/25">
              <Sparkles size={10} />
              Premium Technology
            </div>
          </motion.div>

          <div
            className="relative flex h-[360px] w-[360px] items-center justify-center sm:h-[480px] sm:w-[480px]"
            style={{
              perspective: "1400px",
            }}
          >
            <motion.div
              className="absolute h-[230px] w-[230px] rounded-full bg-white/[0.04] blur-[70px] sm:h-[320px] sm:w-[320px]"
              animate={{
                scale: [1, 1.18, 1],
                opacity: [0.3, 0.65, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <motion.div
              className="absolute h-[280px] w-[280px] rounded-full border border-white/[0.08] sm:h-[370px] sm:w-[370px]"
              animate={{
                rotateZ: 360,
                rotateX: 68,
                rotateY: 15,
              }}
              transition={{
                duration: 9,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              <motion.div
                className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-white"
                animate={{
                  scale: [0.7, 1.4, 0.7],
                  boxShadow: [
                    "0 0 8px rgba(255,255,255,.3)",
                    "0 0 35px rgba(255,255,255,.9)",
                    "0 0 8px rgba(255,255,255,.3)",
                  ],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
              />
            </motion.div>

            <motion.div
              className="absolute h-[220px] w-[220px] rounded-full border border-white/[0.06] sm:h-[300px] sm:w-[300px]"
              animate={{
                rotateZ: -360,
                rotateX: 70,
                rotateY: -25,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              <span className="absolute right-0 top-1/2 h-2.5 w-2.5 rounded-full bg-white/80 shadow-[0_0_20px_white]" />
            </motion.div>

            <motion.div
              className="absolute h-[160px] w-[160px] rounded-full border border-dashed border-white/[0.08] sm:h-[230px] sm:w-[230px]"
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 14,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {particles.map((_, index) => {
              const angle =
                (index / particles.length) * Math.PI * 2;

              const radius = 120 + (index % 4) * 25;

              return (
                <motion.span
                  key={index}
                  className="absolute h-1 w-1 rounded-full bg-white/60"
                  initial={{
                    x: Math.cos(angle) * radius,
                    y: Math.sin(angle) * radius,
                    opacity: 0,
                    scale: 0.3,
                  }}
                  animate={{
                    x: [
                      Math.cos(angle) * radius,
                      Math.cos(angle + 0.7) * (radius + 20),
                      Math.cos(angle) * radius,
                    ],
                    y: [
                      Math.sin(angle) * radius,
                      Math.sin(angle + 0.7) * (radius + 20),
                      Math.sin(angle) * radius,
                    ],
                    opacity: [0.15, 1, 0.15],
                    scale: [0.4, 1.6, 0.4],
                  }}
                  transition={{
                    duration: 3 + (index % 5) * 0.4,
                    repeat: Infinity,
                    delay: index * 0.12,
                    ease: "easeInOut",
                  }}
                />
              );
            })}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.3,
                rotateY: -180,
                rotateX: 25,
                z: -250,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                rotateY: 0,
                rotateX: 0,
                z: 0,
              }}
              transition={{
                duration: 1.4,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative z-30"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              {/* Apple glow */}
              <motion.div
                className="absolute inset-[-35%] rounded-full bg-white/[0.08] blur-[45px]"
                animate={{
                  scale: [0.9, 1.3, 0.9],
                  opacity: [0.25, 0.6, 0.25],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* 3D glass card */}
              <motion.div
                animate={{
                  rotateY: [0, 8, 0, -8, 0],
                  rotateX: [0, -5, 0, 5, 0],
                  y: [0, -9, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative flex h-32 w-32 items-center justify-center overflow-hidden rounded-[2.5rem] border border-white/20 bg-white/[0.055] shadow-[0_40px_100px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.15)] backdrop-blur-2xl sm:h-40 sm:w-40"
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Glass reflection */}
                <motion.div
                  animate={{
                    x: ["-150%", "150%"],
                  }}
                  transition={{
                    duration: 2.8,
                    repeat: Infinity,
                    repeatDelay: 1.5,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-y-[-20%] z-20 w-12 rotate-[25deg] bg-gradient-to-r from-transparent via-white/25 to-transparent blur-md"
                />

                {/* Inner ring */}
                <div className="absolute inset-3 rounded-[2rem] border border-white/[0.07]" />

                {/* Apple */}
                <motion.div
                  animate={{
                    scale: [1, 1.07, 1],
                    rotateZ: [0, 2, 0, -2, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{
                    transform: "translateZ(45px)",
                  }}
                >
                  <Apple
                    size={76}
                    strokeWidth={1.2}
                    fill="white"
                    className="text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.4)] sm:h-[90px] sm:w-[90px]"
                  />
                </motion.div>
              </motion.div>
            </motion.div>


            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-[3%] top-[28%] hidden rounded-2xl border border-white/10 bg-white/[0.05] p-3 backdrop-blur-xl sm:block"
            >
              <ShieldCheck
                size={17}
                className="text-white/70"
              />
            </motion.div>

            <motion.div
              animate={{
                y: [0, 8, 0],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute right-[4%] top-[25%] hidden rounded-2xl border border-white/10 bg-white/[0.05] p-3 backdrop-blur-xl sm:block"
            >
              <Zap size={17} className="text-white/70" />
            </motion.div>

            <motion.div
              animate={{
                y: [0, -7, 0],
              }}
              transition={{
                duration: 3.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-[25%] right-[6%] hidden rounded-2xl border border-white/10 bg-white/[0.05] p-3 backdrop-blur-xl sm:block"
            >
              <Cpu size={17} className="text-white/70" />
            </motion.div>
          </div>

          <div className="absolute bottom-[8%] flex w-full flex-col items-center px-6">
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
                delay: 0.5,
                duration: 0.7,
              }}
              className="flex items-center gap-2 text-[11px] font-medium tracking-[0.35em] text-white/60"
            >
              <Sparkles size={12} />
              THINK DIFFERENT
            </motion.div>

            <motion.p
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.8,
              }}
              className="mt-2 text-[9px] tracking-[0.25em] text-white/25"
            >
              EXPERIENCE THE FUTURE
            </motion.p>

            {/* Progress bar */}
            <div className="mt-5 flex items-center gap-3">
              <div className="h-[2px] w-40 overflow-hidden rounded-full bg-white/10 sm:w-56">
                <motion.div
                  className="h-full rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.9)]"
                  style={{
                    width: `${progress}%`,
                  }}
                />
              </div>

              <span className="w-8 text-right text-[9px] font-medium tracking-wider text-white/35">
                {progress}%
              </span>
            </div>
          </div>

          {/* Bottom fade */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/40 to-transparent" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}