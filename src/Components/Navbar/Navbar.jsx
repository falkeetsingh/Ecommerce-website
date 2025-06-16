import {
    Armchair,
    Check,
    Heart,
    Info,
    Menu,
    Search,
    ShoppingCart,
    User,
  } from "lucide-react";
  import { Link, NavLink } from "react-router-dom";
  import { useDispatch, useSelector } from "react-redux";
  import { logout } from "../../store/slices/authSlice";
  import api from "../../config/axios";
  
  const Navbar = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);
  
    const handleLogout = async () => {
      try {
        await api.post("/auth/logout");
        dispatch(logout());
      } catch (error) {
        console.error("Logout failed:", error);
      }
    };
  
    return (
      <div>
        {/* Top Bar */}
        <div className="bg-[#272343] h-[45px] w-full flex items-center justify-center text-white text-sm font-light tracking-wide">
          <div className="lg:container flex justify-between items-center px-4">
            <p className="flex items-center gap-2">
              <Check size={16} /> Free on all orders over $50
            </p>
            <div className="flex items-center gap-6">
              <select className="bg-transparent text-white border-none outline-none">
                <option>ENG</option>
                <option>BANGLA</option>
              </select>
              <Link className="hover:underline">FAQs</Link>
              <Link className="flex items-center gap-1 hover:underline">
                <Info size={16} /> Need Help
              </Link>
            </div>
          </div>
        </div>
  
        {/* Middle Navbar */}
        <div className="bg-[#f8f9fa] border-b border-gray-200">
          <div className="lg:container grid grid-cols-3 items-center h-[84px] px-4">
            <div>
              <Link
                to="/"
                className="text-2xl font-bold text-[#272343] flex items-center gap-2"
              >
                <Armchair size={28} color="#007580" /> Comforty
              </Link>
            </div>
            <div>
              <form className="relative max-w-[443px] mx-auto w-full">
                <input
                  type="text"
                  placeholder="Search here..."
                  className="w-full h-[44px] rounded-full pl-5 pr-12 bg-white shadow-inner text-sm border border-gray-300 focus:outline-[#007580]"
                />
                <button
                  type="submit"
                  className="absolute top-1/2 right-4 transform -translate-y-1/2"
                >
                  <Search size={20} color="#272343" />
                </button>
              </form>
            </div>
            <div className="flex items-center justify-end gap-4">
              <button className="relative flex items-center gap-1 text-sm text-[#272343] hover:text-[#007580]">
                <ShoppingCart size={20} />
                Cart
                <span className="absolute -top-2 -right-3 bg-[#007580] text-white text-xs px-2 rounded-full">
                  2
                </span>
              </button>
              <button className="hover:text-[#007580]">
                <Heart size={20} />
              </button>
              <div className="relative">
                <div
                  tabIndex={0}
                  role="button"
                  className="w-10 h-10 bg-white border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100 transition"
                >
                  <User />
                </div>
                <ul className="absolute right-0 mt-2 w-44 bg-white shadow-md rounded-md py-2 text-sm z-10">
                  <li>
                    <Link className="block px-4 py-2 hover:bg-gray-100">
                      Account
                    </Link>
                  </li>
                  <li>
                    <a
                      onClick={handleLogout}
                      className="block px-4 py-2 cursor-pointer hover:bg-gray-100"
                    >
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
  
        {/* Bottom Navbar */}
        <div className="bg-white border-b border-gray-200">
          <div className="lg:container flex justify-between items-center h-[75px] px-4">
            <div className="flex items-center gap-8">
            <div className="dropdown dropdown-start">
            <div className="dropdown dropdown-start">
                <div tabIndex={0} role="button" className="btn m-1 flex items-center gap-5 capitalize"> <Menu /> all categories</div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><a>Chair</a></li>
                    <li><a>Pant</a></li>
                    <li><a>Shirt</a></li>
                    <li><a>T-Shirt</a></li>
                    <li><a>T-Shirt</a></li>
                </ul>
            </div>
            </div>
              <nav className="flex items-center gap-6 text-sm font-medium">
                <NavLink to="/" className="text-[#007580] hover:text-[#029fae]">Home</NavLink>
                <NavLink className="text-gray-600 hover:text-[#007580]">Shop</NavLink>
                <NavLink className="text-gray-600 hover:text-[#007580]">Product</NavLink>
                <NavLink className="text-gray-600 hover:text-[#007580]">Pages</NavLink>
                <NavLink className="text-gray-600 hover:text-[#007580]">About</NavLink>
              </nav>
            </div>
            <div>
              <p className="text-sm text-gray-600">
                Contact:{" "}
                <span className="text-[#272343] font-medium">(808) 555-0111</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Navbar;
  