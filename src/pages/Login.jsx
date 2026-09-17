import { motion } from "framer-motion";
import { Apple, ArrowRight,Eye,EyeOff, Lock,Mail,ShieldCheck} from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/profile");
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#f5f5f7] px-4 py-12">
      <div className="absolute left-[-120px] top-[-120px] h-72 w-72 rounded-full bg-white blur-3xl" />
      <div className="absolute bottom-[-150px] right-[-100px] h-96 w-96 rounded-full bg-zinc-200/60 blur-3xl" />

      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute hidden h-[520px] w-[520px] rounded-full border border-zinc-300/40 sm:block"
      />

      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute hidden h-[680px] w-[680px] rounded-full border border-zinc-300/20 sm:block"
      />

      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.94 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 w-full max-w-md"
      >
<motion.div
  whileHover={{ rotateX: 1 }}
  style={{ transformStyle: "preserve-3d" }}
  className="w-full rounded-none border border-white/70 bg-white/80 p-6 shadow-2xl backdrop-blur-xl sm:p-8"
>
  {/* Logo */}
  <div className="mb-7 text-center">
    <motion.div
      whileHover={{
        scale: 1.08,
        rotateY: 15,
      }}
      className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-black text-white shadow-xl"
    >
      <Apple size={30} fill="currentColor" />
    </motion.div>
  </div>

  <h1 className="text-center text-3xl font-semibold tracking-tight text-[#1d1d1f]">
    Welcome back.
  </h1>
  <p className="mt-2 text-center text-sm text-zinc-500">
    Sign in to your iStore Express account.
  </p>
</motion.div>

        <motion.div
          whileHover={{ rotateX: 1 }}
          style={{ transformStyle: "preserve-3d" }}
          className=" border border-white/70 bg-white/80 p-6 shadow-2xl backdrop-blur-xl sm:p-8"
        >
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
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

            {/* Password */}
            <div>
              <div className="mb-2 flex items-center justify-between">
                <label className="text-sm font-medium">
                  Password
                </label>

                <button
                  type="button"
                  className="text-xs text-zinc-500 hover:text-black"
                >
                  Forgot password?
                </button>
              </div>

              <div className="relative">
                <Lock
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
                />

                <input
                  required
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
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

            {/* Login */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-black py-4 text-sm font-medium text-white shadow-lg transition hover:bg-zinc-800"
            >
              Sign In
              <ArrowRight size={17} />
            </motion.button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-zinc-200" />
            <span className="text-xs text-zinc-400">OR</span>
            <div className="h-px flex-1 bg-zinc-200" />
          </div>

          {/* Apple login */}
          <button
            type="button"
            className="flex w-full items-center justify-center gap-2 rounded-2xl border border-zinc-200 bg-white py-3.5 text-sm font-medium transition hover:bg-zinc-50"
          >
            <Apple size={18} fill="currentColor" />
            Continue with Apple
          </button>

          <div className="mt-6 flex items-center justify-center gap-1 text-sm">
            <span className="text-zinc-500">
              Don't have an account?
            </span>

            <Link
              to="/signup"
              className="font-semibold hover:underline"
            >
              Sign Up
            </Link>
          </div>
        </motion.div>

        {/* Security */}
        <div className="mt-5 flex justify-center gap-2 text-xs text-zinc-400">
          <ShieldCheck size={14} />
          Secure account protection
        </div>
      </motion.div>
    </main>
  );
}