import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function CategoryCard({
  name,
  image,
  description,
}) {
  return (
    <Link
      to={`/category/${encodeURIComponent(name)}`}
      className="block h-full"
    >
      <motion.article
        initial={{
          opacity: 0,
          y: 35,
          scale: 0.96,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        whileHover={{
          y: -12,
          rotateX: 2,
          rotateY: -2,
          scale: 1.015,
        }}
        style={{
          transformStyle: "preserve-3d",
        }}
        className="group relative min-h-[390px] overflow-hidden rounded-[2rem] bg-zinc-900 shadow-[0_20px_60px_rgba(0,0,0,0.12)] transition-shadow duration-500 hover:shadow-[0_35px_90px_rgba(0,0,0,0.22)] sm:min-h-[430px]"
      >

        <motion.img
          src={image}
          alt={name}
          loading="lazy"
          initial={{
            scale: 1.08,
          }}
          whileHover={{
            scale: 1.18,
          }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/15 to-black/85" />

        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 bg-gradient-to-tr from-black/50 via-transparent to-white/10"
        />

        <motion.div
          animate={{
            x: ["-120%", "140%"],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatDelay: 3,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute inset-y-0 -skew-x-12 w-24 bg-gradient-to-r from-transparent via-white/15 to-transparent blur-xl"
        />

        <motion.div
          initial={{
            opacity: 0,
            y: -10,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.15,
            duration: 0.5,
          }}
          className="absolute left-5 top-5"
        >
          <div className="flex items-center gap-2 rounded-full border border-white/20 bg-black/25 px-3.5 py-2 text-xs font-medium text-white backdrop-blur-xl">
            <Sparkles
              size={13}
              className="text-white/80"
            />

            <span>Featured</span>
          </div>
        </motion.div>

           <motion.div
          whileHover={{
            scale: 1.1,
          }}
          className="absolute right-5 top-5"
        >
          <motion.div
            animate={{
              y: [0, -4, 0],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{
              rotate: 45,
            }}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/15 text-white shadow-xl backdrop-blur-xl transition-colors duration-300 group-hover:bg-white group-hover:text-black"
          >
            <ArrowUpRight
              size={20}
              strokeWidth={1.8}
            />
          </motion.div>
        </motion.div>

        <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
          <motion.div
            initial={{
              y: 15,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              delay: 0.2,
              duration: 0.6,
            }}
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/55">
              Explore Collection
            </p>

            <div className="mt-2 flex items-end justify-between gap-4">
              <h3 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                {name}
              </h3>

              <motion.div
                initial={{
                  width: 0,
                }}
                whileHover={{
                  width: 40,
                }}
                className="mb-2 hidden h-[2px] bg-white sm:block"
              />
            </div>

            <motion.p
              initial={{
                opacity: 0,
                y: 8,
              }}
              whileHover={{
                opacity: 1,
                y: 0,
              }}
              className="mt-3 max-w-sm text-sm leading-6 text-white/70"
            >
              {description}
            </motion.p>
          </motion.div>

          <div className="mt-5 flex items-center justify-between border-t border-white/15 pt-4">
            <span className="text-xs font-medium text-white/60 transition-colors group-hover:text-white">
              Discover products
            </span>

            <motion.span
              animate={{
                x: [0, 4, 0],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
              }}
              className="text-xs text-white/50"
            >
              →
            </motion.span>
          </div>
        </div>

     

        <div className="pointer-events-none absolute inset-0 rounded-[2rem] border border-white/10 transition-colors duration-500 group-hover:border-white/25" />
      </motion.article>
    </Link>
  );
}