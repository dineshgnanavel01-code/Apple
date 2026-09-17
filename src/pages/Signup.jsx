import { motion } from "framer-motion";
import { Apple, ArrowRight, Check,Eye,EyeOff,Lock, Mail,UserRound} from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/profile");
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#f5f5f7] px-4 py-12">
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.35, 0.55, 0.35],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="absolute left-[-120px] top-[-100px] h-80 w-80 rounded-full bg-white blur-3xl"
      />

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute bottom-[-180px] right-[-100px] h-96 w-96 rounded-full bg-zinc-200 blur-3xl"
      />

      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute hidden h-[600px] w-[600px] rounded-full border border-zinc-300/30 sm:block"
      />

      <motion.div
        initial={{
          opacity: 0,
          y: 40,
          scale: 0.94,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        transition={{ duration: 0.7 }}
        className="relative z-10 w-full max-w-md"
      >
      <div className="mb-7 pt-6 text-center">
    <motion.div
      whileHover={{
        scale: 1.1,
        rotateY: 18,
      }}
      className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-black text-white shadow-xl"
    >
      <Apple size={30} fill="currentColor" />
    </motion.div>

          <h1 className="mt-5 text-3xl font-semibold tracking-tight">
            Create your account.
          </h1>

          <p className="mt-2 text-sm text-zinc-500">
            Join iStore Express and start shopping.
          </p>
        </div>

        {/* Card */}
        <motion.div
          whileHover={{
            rotateX: 1,
            rotateY: -1,
          }}
          style={{ transformStyle: "preserve-3d" }}
          className="rounded-[2rem] border border-white/70 bg-white/80 p-6 shadow-2xl backdrop-blur-xl sm:p-8"
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium">
                Full name
              </label>

              <div className="relative">
                <UserRound
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
                />

                <input
                  required
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      name: e.target.value,
                    })
                  }
                  className="w-full rounded-2xl border border-zinc-200 bg-[#f8f8fa] py-3.5 pl-11 pr-4 text-sm outline-none transition focus:border-black focus:bg-white"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Email address
              </label>

              <div className="relative">
                <Mail
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
                />

                <input
                  required
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      email: e.target.value,
                    })
                  }
                  className="w-full rounded-2xl border border-zinc-200 bg-[#f8f8fa] py-3.5 pl-11 pr-4 text-sm outline-none transition focus:border-black focus:bg-white"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Password
              </label>

              <div className="relative">
                <Lock
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
                />

                <input
                  required
                  minLength={6}
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a password"
                  value={form.password}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      password: e.target.value,
                    })
                  }
                  className="w-full rounded-2xl border border-zinc-200 bg-[#f8f8fa] py-3.5 pl-11 pr-12 text-sm outline-none transition focus:border-black focus:bg-white"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-black"
                >
                  {showPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>
            </div>

            {/* Benefits */}
            <div className="space-y-2 py-2">
              {[
                "Fast checkout",
                "Track your orders",
                "Save your favorite products",
              ].map((text) => (
                <div
                  key={text}
                  className="flex items-center gap-2 text-xs text-zinc-500"
                >
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-black text-white">
                    <Check size={12} />
                  </span>
                  {text}
                </div>
              ))}
            </div>

            {/* Create account */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-black py-4 text-sm font-medium text-white shadow-lg transition hover:bg-zinc-800"
            >
              Create Account
              <ArrowRight size={17} />
            </motion.button>
          </form>

          {/* Login */}
          <div className="mt-6 flex items-center justify-center gap-1 text-sm">
            <span className="text-zinc-500">
              Already have an account?
            </span>

            <Link
              to="/login"
              className="font-semibold hover:underline"
            >
              Sign In
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </main>
  );
}