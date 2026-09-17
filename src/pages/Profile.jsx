import { motion } from "framer-motion";
import {Apple,ChevronRight, CreditCard,Package,Settings, ShieldCheck,UserRound} from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
  { label: "Orders", value: "12", icon: Package },
  { label: "Wishlist", value: "8", icon: Apple },
  { label: "Payments", value: "4", icon: CreditCard },
];

const menuItems = [
  {
    title: "Personal Information",
    text: "Manage your name, email and profile details",
    icon: UserRound,
  },
  {
    title: "Orders & Delivery",
    text: "Track your recent purchases and deliveries",
    icon: Package,
  },
  {
    title: "Payment Methods",
    text: "Manage your saved payment options",
    icon: CreditCard,
  },
  {
    title: "Account Settings",
    text: "Security and account preferences",
    icon: Settings,
  },
];

export default function Profile() {
  return (
    <main className="min-h-screen bg-[#f5f5f7] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-full pt-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-8"
        >
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-400">
            iStore Express
          </p>

          <h1 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">
            Your Profile
          </h1>

          <p className="mt-3 max-w-full text-zinc-500">
            Manage your account, orders and preferences in one place.
          </p>
        </motion.div>

        {/* Profile Card */}
        <motion.section
          initial={{ opacity: 0, scale: 0.96, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7 }}
          whileHover={{ rotateX: 1, rotateY: -1 }}
          style={{ transformStyle: "preserve-3d" }}
          className="relative overflow-hidden rounded-[2rem] bg-black p-6 text-white shadow-2xl sm:p-10"
        >
          {/* Glow */}
          <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-white/5 blur-3xl" />

          <div className="relative z-10 flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-5">
              <motion.div
                whileHover={{ scale: 1.08, rotateY: 15 }}
                className="flex h-20 w-20 items-center justify-center rounded-3xl bg-white text-black shadow-xl"
              >
                <UserRound size={34} />
              </motion.div>

              <div>
                <p className="text-sm text-zinc-400">Welcome back</p>

                <h2 className="mt-1 text-2xl font-semibold sm:text-3xl">
                 Dinesh G
                </h2>

                <p className="mt-1 text-sm text-zinc-400">
                 istoreexpress@gmail.com
                </p>
              </div>
            </div>

            <Link
              to="/"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:scale-105"
            >
              Continue Shopping
              <ChevronRight size={16} />
            </Link>
          </div>
        </motion.section>

        {/* Stats */}
        <div className="mt-6 grid grid-cols-3 gap-3 sm:gap-5">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 + index * 0.1 }}
                whileHover={{
                  y: -6,
                  rotateX: 4,
                  rotateY: -4,
                }}
                className="rounded-3xl bg-white p-4 shadow-sm sm:p-6"
                style={{ transformStyle: "preserve-3d" }}
              >
                <Icon size={20} className="text-zinc-500" />

                <p className="mt-4 text-2xl font-semibold sm:text-3xl">
                  {item.value}
                </p>

                <p className="mt-1 text-xs text-zinc-500 sm:text-sm">
                  {item.label}
                </p>
              </motion.div>
            );
          })}
        </div>

        <section className="mt-10">
          <div className="mb-5">
            <h2 className="text-2xl font-semibold">Account</h2>
            <p className="mt-1 text-sm text-zinc-500">
              Everything you need to manage your iStore account.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {menuItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.button
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 + index * 0.08 }}
                  whileHover={{
                    y: -7,
                    scale: 1.01,
                    rotateX: 2,
                  }}
                  whileTap={{ scale: 0.98 }}
                  style={{ transformStyle: "preserve-3d" }}
                  className="group flex w-full items-center gap-5 rounded-[1.7rem] bg-white p-5 text-left shadow-sm transition-shadow hover:shadow-xl sm:p-6"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#f5f5f7] transition group-hover:bg-black group-hover:text-white">
                    <Icon size={21} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="mt-1 text-sm leading-5 text-zinc-500">
                      {item.text}
                    </p>
                  </div>

                  <ChevronRight
                    size={19}
                    className="shrink-0 text-zinc-300 transition group-hover:translate-x-1 group-hover:text-black"
                  />
                </motion.button>
              );
            })}
          </div>
        </section>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8 flex items-center gap-4 rounded-3xl border border-zinc-200 bg-white p-5"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-black text-white">
            <ShieldCheck size={21} />
          </div>

          <div>
            <p className="font-medium">Your account is protected</p>
            <p className="mt-1 text-xs text-zinc-500">
              Your personal information is securely stored.
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  );
}