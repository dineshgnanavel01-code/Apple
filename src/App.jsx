import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SearchModal from "./components/SearchModal";
import CartDrawer from "./components/CartDrawer";
import LoadingScreen from "./components/LoadingScreen";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Category from "./pages/Category";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import OrderConfirmation from "./pages/OrderConfirmation";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white text-[#1d1d1f]">
        <Navbar />

        <SearchModal />
        <CartDrawer />
        <LoadingScreen />

        <Routes>
          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/products"
            element={<Products />}
          />

          <Route
            path="/product/:id"
            element={<ProductDetails />}
          />

          <Route
            path="/cart"
            element={<Cart />}
          />

          <Route
            path="/category/:name"
            element={<Category />}
          />

          <Route
            path="/profile"
            element={<Profile />}
          />

          <Route
            path="/login"
            element={<Login />}
          />

          <Route
            path="/signup"
            element={<Signup />}
          />

          <Route
            path="/order-confirmation"
            element={<OrderConfirmation ordered={true} />}
          />

          <Route
            path="*"
            element={
              <div className="flex min-h-[70vh] items-center justify-center px-6">
                <div className="text-center">
                  <p className="text-sm uppercase tracking-[0.25em] text-zinc-400">
                    iStore Express
                  </p>

                  <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
                    Page not found.
                  </h1>

                  <p className="mt-3 text-sm text-zinc-500">
                    The page you are looking for doesn't exist.
                  </p>

                  <a
                    href="/"
                    className="mt-6 inline-flex rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-zinc-800"
                  >
                    Back to Home
                  </a>
                </div>
              </div>
            }
          />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}