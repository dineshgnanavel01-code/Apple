import { AnimatePresence, motion } from "framer-motion";
import { Apple, ChevronDown, ChevronRight, LogIn, Menu, Search,ShoppingBag, Sparkles, UserPlus, UserRound, X,} from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const links = [
  ["Home", "/"],
  ["iPhone", "/category/iPhone"],
  ["iPad", "/category/iPad"],
  ["Mac", "/category/Mac"],
  ["Watch", "/category/Apple%20Watch"],
  ["AirPods", "/category/AirPods"],
];

const mobileMenuVariants = {
  hidden: {
    opacity: 0,
    y: -25,
    scale: 0.92,
    rotateX: -18,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      duration: 0.35,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.055,
      delayChildren: 0.05,
    },
  },

  exit: {
    opacity: 0,
    y: -15,
    scale: 0.96,
    rotateX: 8,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
};

const mobileItemVariants = {
  hidden: {
    opacity: 0,
    x: -25,
    rotateY: -15,
  },

  visible: {
    opacity: 1,
    x: 0,
    rotateY: 0,
    transition: {
      type: "spring",
      stiffness: 450,
      damping: 25,
    },
  },
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [search, setSearch] = useState("");

  const { cartCount } = useCart();
  const location = useLocation();
  const navigate = useNavigate();


  const isActive = (path) => {
    const current = decodeURIComponent(location.pathname);
    const target = decodeURIComponent(path);

    if (target === "/") {
      return current === "/";
    }

    return current.toLowerCase() === target.toLowerCase();
  };

  const goTo = (path) => {
    // Close all menus
    setOpen(false);
    setAccountOpen(false);

    navigate(path);

    requestAnimationFrame(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  };

  useEffect(() => {
    const closeAccount = (event) => {
      if (!event.target.closest("[data-account-menu]")) {
        setAccountOpen(false);
      }
    };

    document.addEventListener("click", closeAccount);

    return () => {
      document.removeEventListener("click", closeAccount);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className="fixed inset-x-0 top-0 z-[100] px-3 pt-3 sm:px-6 lg:px-8"
      style={{
        perspective: "1400px",
      }}
    >
      <motion.nav
        initial={{
          opacity: 0,
          y: -30,
          rotateX: -20,
        }}
        animate={{
          opacity: 1,
          y: 0,
          rotateX: 0,
        }}
        transition={{
          duration: 0.7,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="relative z-[110] mx-auto flex h-14 w-full max-w-full items-center justify-between rounded-full border border-white/70 bg-white/75 px-4 shadow-[0_12px_45px_rgba(0,0,0,0.10)] backdrop-blur-2xl sm:h-16 sm:px-6"
        style={{
          transformStyle: "preserve-3d",
        }}
      >

        <motion.div
          animate={{
            x: ["-120%", "120%"],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatDelay: 4,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute inset-y-0 left-0 w-24 -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent blur-sm"
        />
        <div className="flex shrink-0 items-center">
          <motion.button
            type="button"
            onClick={() => goTo("/")}
            whileHover={{
              scale: 1.03,
            }}
            whileTap={{
              scale: 0.96,
            }}
            className="group flex items-center gap-3"
            aria-label="iStore Express Home"
          >
            {/* Apple Logo */}

            <span className="relative flex h-10 w-10 shrink-0 items-center justify-center">
              <motion.span
                className="absolute inset-1 rounded-full bg-black/10 blur-lg"
                animate={{
                  scale: [0.8, 1.15, 0.8],
                  opacity: [0.15, 0.35, 0.15],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <span
                className="
                  absolute inset-0
                  rounded-full
                  border border-black/[0.06]
                  bg-white/60
                  shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]
                  backdrop-blur-xl
                  transition-all duration-300
                  group-hover:bg-white
                  group-hover:shadow-[0_8px_25px_rgba(0,0,0,0.10)]
                "
              />

              <motion.span
                whileHover={{
                  rotateY: 180,
                  rotateZ: 8,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 18,
                }}
                style={{
                  transformStyle: "preserve-3d",
                }}
                className="relative z-10 flex items-center justify-center text-black"
              >
                <Apple
                  size={21}
                  fill="currentColor"
                  strokeWidth={1.5}
                />
              </motion.span>
            </span>

            {/* Brand */}

            <span className="flex flex-col items-start leading-none">
              <span
                className="
                  text-[16px]
                  font-semibold
                  tracking-[-0.04em]
                  text-zinc-900
                  sm:text-[17px]
                "
              >
                iStore <span className="text-zinc-500">Express</span>
              </span>

              <span
                className="
                  mt-1
                  hidden
                  text-[8px]
                  font-medium
                  uppercase
                  tracking-[0.22em]
                  text-zinc-400
                  sm:block
                "
              >
                Premium Apple Store
              </span>
            </span>
          </motion.button>
        </div>

        <div className="hidden items-center justify-center gap-1 md:flex">
          {links.map(([name, path]) => {
            const active = isActive(path);

            return (
              <motion.button
                key={name}
                type="button"
                onClick={() => goTo(path)}
                whileHover={{
                  y: -3,
                  scale: 1.04,
                }}
                whileTap={{
                  scale: 0.94,
                }}
                transition={{
                  type: "spring",
                  stiffness: 450,
                  damping: 22,
                }}
                className={`group relative rounded-full px-4 py-2 text-[13px] font-medium transition-colors ${
                  active
                    ? "text-black"
                    : "text-zinc-500 hover:text-black"
                }`}
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                {active && (
                  <motion.span
                    layoutId="desktopActive"
                    className="absolute inset-0 -z-10 rounded-full border border-black/[0.04] bg-black/[0.055] shadow-[0_5px_15px_rgba(0,0,0,0.06)]"
                  />
                )}

                <span className="relative z-10">
                  {name}
                </span>

                <motion.span
                  initial={{
                    width: 0,
                    opacity: 0,
                  }}
                  whileHover={{
                    width: "55%",
                    opacity: 1,
                  }}
                  className="absolute bottom-1 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-black"
                />
              </motion.button>
            );
          })}
        </div>
        <div className="flex items-center justify-end gap-1 sm:gap-2">

               <AnimatePresence mode="wait">
            {!searchOpen ? (
              <motion.button
                key="search-button"
                type="button"
                onClick={() => setSearchOpen(true)}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                whileHover={{
                  scale: 1.08,
                  rotateY: 12,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.85,
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 20,
                }}
                className="hidden h-9 w-9 cursor-pointer items-center justify-center rounded-full text-zinc-700 hover:bg-black/[0.06] hover:text-black sm:flex"
                aria-label="Open search"
                title="Search products"
              >
                <Search size={18} strokeWidth={2} />
              </motion.button>
            ) : (
              <motion.div
                key="search-bar"
                initial={{
                  opacity: 0,
                  width: 40,
                  scale: 0.9,
                }}
                animate={{
                  opacity: 1,
                  width: 260,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  width: 40,
                  scale: 0.9,
                }}
                transition={{
                  type: "spring",
                  stiffness: 350,
                  damping: 25,
                }}
                className="hidden h-10 items-center overflow-hidden rounded-full border border-black/10 bg-white/80 px-3 shadow-sm backdrop-blur-xl sm:flex"
              >
                <Search
                  size={17}
                  strokeWidth={2}
                  className="shrink-0 text-zinc-500"
                />

                <input
                  autoFocus
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && search.trim()) {
                      navigate(`/products?search=${encodeURIComponent(search.trim())}`);
                      setSearchOpen(false);
                    }

                    if (e.key === "Escape") {
                      setSearch("");
                      setSearchOpen(false);
                    }
                  }}
                  placeholder="Search products..."
                  className="ml-2 w-full bg-transparent text-sm text-zinc-900 outline-none placeholder:text-zinc-400"
                />

                <motion.button
                  type="button"
                  onClick={() => {
                    setSearch("");
                    setSearchOpen(false);
                  }}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.85 }}
                  className="ml-2 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-zinc-500 hover:bg-black/[0.06] hover:text-black"
                  aria-label="Close search"
                >
                  <X size={16} />
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>

          <div
            className="relative hidden sm:block"
            data-account-menu
          >
            <motion.button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                setAccountOpen((value) => !value);
              }}
              whileHover={{
                scale: 1.06,
                y: -2,
              }}
              whileTap={{
                scale: 0.9,
              }}
              className={`flex h-9 items-center gap-1.5 rounded-full px-3 text-zinc-700 transition ${
                accountOpen
                  ? "bg-black text-white"
                  : "hover:bg-black/[0.06] hover:text-black"
              }`}
              aria-label="Account"
              aria-expanded={accountOpen}
            >
              <UserRound size={17} />

              <ChevronDown
                size={13}
                className={`transition-transform ${
                  accountOpen ? "rotate-180" : ""
                }`}
              />
            </motion.button>

            {/* ACCOUNT DROPDOWN */}

            <AnimatePresence>
              {accountOpen && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: -12,
                    scale: 0.92,
                    rotateX: -15,
                  }}
                  animate={{
                    opacity: 1,
                    y: 8,
                    scale: 1,
                    rotateX: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -8,
                    scale: 0.95,
                    rotateX: 8,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 25,
                  }}
                  className="absolute right-0 top-full w-64 origin-top-right rounded-[24px] border border-white/80 bg-white/90 p-2 shadow-[0_25px_70px_rgba(0,0,0,0.18)] backdrop-blur-2xl"
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                  onClick={(event) => event.stopPropagation()}
                >
                  <div className="mb-1 rounded-2xl bg-[#f5f5f7] p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white">
                        <UserRound size={18} />
                      </div>

                      <div>
                        <p className="text-sm font-semibold">
                          My Account
                        </p>

                        <p className="text-xs text-zinc-500">
                          iStore Express
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Profile */}

                  <motion.button
                    type="button"
                    whileHover={{
                      x: 4,
                      scale: 1.01,
                    }}
                    onClick={() => goTo("/profile")}
                    className="flex w-full items-center gap-3 rounded-2xl px-3 py-3 text-left transition hover:bg-[#f5f5f7]"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-black text-white">
                      <UserRound size={16} />
                    </div>

                    <div className="flex-1">
                      <p className="text-sm font-medium">
                        View Profile
                      </p>

                      <p className="text-[11px] text-zinc-400">
                        Manage your account
                      </p>
                    </div>

                    <ChevronRight
                      size={15}
                      className="text-zinc-400"
                    />
                  </motion.button>

                  {/* Login */}

                  <motion.button
                    type="button"
                    whileHover={{
                      x: 4,
                      scale: 1.01,
                    }}
                    onClick={() => goTo("/login")}
                    className="flex w-full items-center gap-3 rounded-2xl px-3 py-3 text-left transition hover:bg-[#f5f5f7]"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#f5f5f7]">
                      <LogIn size={16} />
                    </div>

                    <div className="flex-1">
                      <p className="text-sm font-medium">
                        Login
                      </p>

                      <p className="text-[11px] text-zinc-400">
                        Sign in to your account
                      </p>
                    </div>

                    <ChevronRight
                      size={15}
                      className="text-zinc-400"
                    />
                  </motion.button>

                  {/* Sign Up */}

                  <motion.button
                    type="button"
                    whileHover={{
                      x: 4,
                      scale: 1.01,
                    }}
                    onClick={() => goTo("/signup")}
                    className="flex w-full items-center gap-3 rounded-2xl px-3 py-3 text-left transition hover:bg-[#f5f5f7]"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#f5f5f7]">
                      <UserPlus size={16} />
                    </div>

                    <div className="flex-1">
                      <p className="text-sm font-medium">
                        Sign Up
                      </p>

                      <p className="text-[11px] text-zinc-400">
                        Create a new account
                      </p>
                    </div>

                    <ChevronRight
                      size={15}
                      className="text-zinc-400"
                    />
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <motion.button
            type="button"
            onClick={() => goTo("/cart")}
            whileHover={{
              scale: 1.08,
              y: -2,
              rotateY: -10,
            }}
            whileTap={{
              scale: 0.85,
            }}
            className="relative flex h-9 w-9 items-center justify-center rounded-full text-zinc-700 hover:bg-black/[0.06] hover:text-black"
            aria-label="Shopping cart"
          >
            <ShoppingBag size={18} />

            <AnimatePresence mode="popLayout">
              {cartCount > 0 && (
                <motion.span
                  key={cartCount}
                  initial={{
                    scale: 0,
                    opacity: 0,
                    rotate: -30,
                  }}
                  animate={{
                    scale: 1,
                    opacity: 1,
                    rotate: 0,
                  }}
                  exit={{
                    scale: 0,
                    opacity: 0,
                  }}
                  className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-black px-1 text-[9px] font-bold text-white"
                >
                  {cartCount}
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>

         
          <motion.button
            type="button"
            onClick={() => setOpen((value) => !value)}
            whileTap={{
              scale: 0.82,
              rotate: 8,
            }}
            className="relative z-[130] flex h-9 w-9 items-center justify-center rounded-full bg-black/[0.06] text-zinc-800 md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.div
                  key="close"
                  initial={{
                    opacity: 0,
                    rotate: -90,
                    scale: 0.5,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    rotate: 90,
                    scale: 0.5,
                  }}
                >
                  <X size={19} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{
                    opacity: 0,
                    rotate: 90,
                    scale: 0.5,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    rotate: -90,
                    scale: 0.5,
                  }}
                >
                  <Menu size={19} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}

            <motion.button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close navigation"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              className="fixed inset-0 z-[90] bg-black/15 backdrop-blur-[5px] md:hidden"
            />

            {/* Panel */}

            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative z-[105] mx-auto mt-2 max-w-md overflow-hidden rounded-[30px] border border-white/70 bg-white/90 p-3 shadow-[0_30px_90px_rgba(0,0,0,0.2)] backdrop-blur-3xl md:hidden"
              style={{
                transformOrigin: "top center",
                transformStyle: "preserve-3d",
              }}
            >
              <motion.div
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 2,
                }}
                className="pointer-events-none absolute top-0 h-full w-20 -skew-x-12 bg-gradient-to-r from-transparent via-white/50 to-transparent blur-md"
              />

              {/* Header */}

              <motion.div
                variants={mobileItemVariants}
                className="mb-2 flex items-center justify-between px-3 py-2"
              >
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-400">
                    iStore Express
                  </p>

                  <p className="mt-1 text-xs font-medium text-zinc-700">
                    Explore products
                  </p>
                </div>

                <Sparkles
                  size={15}
                  className="text-zinc-400"
                />
              </motion.div>

              {/* Main Links */}

              <div className="relative flex flex-col gap-1">
                {links.map(([name, path]) => {
                  const active = isActive(path);

                  return (
                    <motion.button
                      key={name}
                      variants={mobileItemVariants}
                      type="button"
                      onClick={() => goTo(path)}
                      whileHover={{
                        x: 4,
                        scale: 1.015,
                      }}
                      whileTap={{
                        scale: 0.97,
                      }}
                      className={`group relative flex w-full items-center justify-between overflow-hidden rounded-2xl px-4 py-3.5 text-left text-[15px] font-medium ${
                        active
                          ? "bg-black text-white shadow-[0_10px_25px_rgba(0,0,0,0.2)]"
                          : "text-zinc-800 hover:bg-black/[0.05]"
                      }`}
                    >
                      {active && (
                        <motion.span
                          layoutId="mobileActive"
                          className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/10"
                        />
                      )}

                      <span className="relative z-10">
                        {name}
                      </span>

                      <ChevronRight
                        size={17}
                        className={`relative z-10 ${
                          active
                            ? "text-white/70"
                            : "text-zinc-400"
                        }`}
                      />
                    </motion.button>
                  );
                })}
              </div>

              {/* ACCOUNT */}

              <motion.div
                variants={mobileItemVariants}
                className="mt-4 border-t border-zinc-200 pt-4"
              >
                <div className="mb-2 flex items-center gap-2 px-3">
                  <UserRound
                    size={14}
                    className="text-zinc-400"
                  />

                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-400">
                    Account
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  {/* Profile */}

                  <motion.button
                    type="button"
                    whileHover={{
                      y: -3,
                      scale: 1.03,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    onClick={() => goTo("/profile")}
                    className="flex flex-col items-center justify-center rounded-2xl bg-[#f5f5f7] px-2 py-3 text-center transition hover:bg-black hover:text-white"
                  >
                    <UserRound size={18} />

                    <span className="mt-2 text-[11px] font-medium">
                      Profile
                    </span>
                  </motion.button>

                  {/* Login */}

                  <motion.button
                    type="button"
                    whileHover={{
                      y: -3,
                      scale: 1.03,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    onClick={() => goTo("/login")}
                    className="flex flex-col items-center justify-center rounded-2xl bg-[#f5f5f7] px-2 py-3 text-center transition hover:bg-black hover:text-white"
                  >
                    <LogIn size={18} />

                    <span className="mt-2 text-[11px] font-medium">
                      Login
                    </span>
                  </motion.button>

                  {/* Sign Up */}

                  <motion.button
                    type="button"
                    whileHover={{
                      y: -3,
                      scale: 1.03,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    onClick={() => goTo("/signup")}
                    className="flex flex-col items-center justify-center rounded-2xl bg-black px-2 py-3 text-center text-white shadow-lg"
                  >
                    <UserPlus size={18} />

                    <span className="mt-2 text-[11px] font-medium">
                      Sign Up
                    </span>
                  </motion.button>
                </div>
              </motion.div>

              {/* Cart */}

              <motion.button
                variants={mobileItemVariants}
                type="button"
                onClick={() => goTo("/cart")}
                className="mt-3 flex w-full items-center justify-between rounded-2xl bg-black px-4 py-3.5 text-white"
              >
                <div className="flex items-center gap-3">
                  <ShoppingBag size={18} />

                  <span className="text-sm font-medium">
                    Your Bag
                  </span>
                </div>

                <span className="flex items-center gap-2 text-xs text-zinc-400">
                  {cartCount} items

                  <ChevronRight size={15} />
                </span>
              </motion.button>

              <motion.div
                initial={{
                  opacity: 0,
                  scaleX: 0,
                }}
                animate={{
                  opacity: 1,
                  scaleX: 1,
                }}
                transition={{
                  delay: 0.4,
                }}
                className="mx-auto mt-3 h-1 w-12 rounded-full bg-black/10"
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}