import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Search, Mic, ShoppingBag, User, Menu, X } from "lucide-react";

import logo from "./photos/logo.png";
import logoWhite from "./photos/logo_white.png";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const textBase = scrolled ? "text-black/70" : "text-white/70";
  const textMuted = scrolled ? "text-black/60" : "text-white/60";
  const textStrong = scrolled ? "text-black/80" : "text-white/80";
  const textHover = scrolled ? "hover:text-black" : "hover:text-white";
  const hoverBg = scrolled ? "hover:bg-black/5" : "hover:bg-white/10";
  const underlineColor = scrolled ? "bg-black" : "bg-white";
  const inputText = scrolled ? "text-black" : "text-white";
  const placeholder = scrolled
    ? "placeholder:text-black/40"
    : "placeholder:text-white/40";
  const divider = scrolled ? "bg-black/10" : "bg-white/10";
  const searchBorder = scrolled ? "border-black/10" : "border-white/10";
  const searchBg = scrolled ? "bg-black/5" : "bg-white/10";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 z-50 w-full border-b transition-all duration-500 ${
          scrolled
            ? "border-black/10 bg-white/90 backdrop-blur-md"
            : "border-white/10 bg-white/[0.03] backdrop-blur-xs"
        }`}
      >
        {/* TOP LINE */}
        <div
          className={`h-[1px] w-full bg-gradient-to-r from-transparent to-transparent ${
            scrolled ? "via-black/10" : "via-white/20"
          }`}
        />

        {/* MAIN */}
        <div className="mx-auto grid h-[72px] max-w-[1700px] grid-cols-[1fr_auto_1fr] items-center gap-6 px-5 md:px-8">
          {/* LEFT */}
          <div className="flex items-center">
            {/* MOBILE MENU */}
            <button
              onClick={() => setMobileOpen((o) => !o)}
              className={`flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 lg:hidden ${textStrong} ${hoverBg} ${textHover}`}
            >
              {mobileOpen ? (
                <X size={22} strokeWidth={1.9} />
              ) : (
                <Menu size={22} strokeWidth={1.9} />
              )}
            </button>

            {/* DESKTOP LINKS */}
            <div className="hidden items-center gap-8 lg:flex">
              <Link to="/MenPage">
                <button
                  className={`group relative text-[14px] font-semibold uppercase tracking-[0.18em] transition-all duration-300 ${textBase} ${textHover}`}
                >
                  Men
                  <span
                    className={`absolute -bottom-[4px] left-0 h-[2px] w-0 rounded-full transition-all duration-500 group-hover:w-full ${underlineColor}`}
                  />
                </button>
              </Link>

              <button
                className={`text-[14px] font-semibold uppercase tracking-[0.18em] transition-all duration-300 ${textMuted} ${textHover}`}
              >
                Women
              </button>

              <button
                className={`text-[14px] font-semibold uppercase tracking-[0.18em] transition-all duration-300 ${textMuted} ${textHover}`}
              >
                OWNDAYS
              </button>

              <Link to="/Aboutus">
                <button
                  className={`group relative text-[14px] font-semibold uppercase tracking-[0.18em] transition-all duration-300 ${textBase} ${textHover}`}
                >
                  About Us
                  <span
                    className={`absolute -bottom-[4px] left-0 h-[2px] w-0 rounded-full transition-all duration-500 group-hover:w-full ${underlineColor}`}
                  />
                </button>
              </Link>
            </div>
          </div>

          {/* LOGO */}
          <Link to="/">
            <div className="relative z-20 flex items-center justify-center">
              <img
                src={scrolled ? logo : logoWhite}
                alt="logo"
                className="h-10 w-auto max-w-[120px] select-none object-contain transition-opacity duration-300 md:h-12"
              />
            </div>
          </Link>

          {/* RIGHT */}
          <div className="flex items-center justify-end gap-4">
            {/* SEARCH */}
            <div
              className={`hidden h-[50px] w-[270px] items-center rounded-full border px-5 py-2 backdrop-blur-xl transition-all duration-300 xl:flex 2xl:w-[340px] ${searchBorder} ${searchBg}`}
            >
              <input
                type="text"
                placeholder="Search products"
                className={`flex-1 bg-transparent py-2 text-[13px] font-medium outline-none ${inputText} ${placeholder}`}
              />

              <div className={`flex items-center gap-3 ${textMuted}`}>
                <button
                  className={`transition-all duration-300 ${textHover}`}
                >
                  <Mic size={17} strokeWidth={2} />
                </button>

                <div className={`h-4 w-[1px] ${divider}`} />

                <button
                  className={`transition-all duration-300 ${textHover}`}
                >
                  <Search size={17} strokeWidth={2} />
                </button>
              </div>
            </div>

            {/* ICONS */}
            <div className="flex items-center gap-1">
              {/* USER */}
              <Link to="/login">
                <button
                  className={`flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 ${textStrong} ${hoverBg} ${textHover}`}
                >
                  <User size={21} strokeWidth={1.9} />
                </button>
              </Link>

              {/* CART */}
              <Link to="/cart">
                <button
                  className={`relative flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 ${textStrong} ${hoverBg} ${textHover}`}
                >
                  <ShoppingBag size={21} strokeWidth={1.9} />

                  {/* COUNT */}
                  <span
                    className={`absolute right-[6px] top-[6px] flex h-[15px] w-[15px] items-center justify-center rounded-full text-[8px] font-semibold ${
                      scrolled ? "bg-black text-white" : "bg-white text-black"
                    }`}
                  >
                    1
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* MOBILE DRAWER */}
      <div
        className={`fixed inset-0 z-[998] transition-all duration-300 lg:hidden ${
          mobileOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* BACKDROP */}
        <div
          onClick={() => setMobileOpen(false)}
          className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* DRAWER */}
        <div
          className={`absolute left-0 top-[73px] flex w-full flex-col gap-1 border-b px-6 py-6 backdrop-blur-2xl transition-all duration-300 ease-out ${
            scrolled
              ? "border-black/10 bg-white/95"
              : "border-white/10 bg-black/50"
          } ${
            mobileOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-2 opacity-0"
          }`}
        >
          {/* MOBILE SEARCH */}
          <div
            className={`mb-4 flex h-[48px] items-center rounded-full border px-5 ${searchBorder} ${searchBg}`}
          >
            <input
              type="text"
              placeholder="Search products"
              className={`flex-1 bg-transparent text-[13px] font-medium outline-none ${inputText} ${placeholder}`}
            />

            <Search
              size={16}
              strokeWidth={2}
              className={scrolled ? "text-black/40" : "text-white/40"}
            />
          </div>

          {/* LINKS */}
          {["Men", "Women", "OWNDAYS"].map((label, i) => (
            <button
              key={label}
              onClick={() => setMobileOpen(false)}
              className={`border-b py-4 text-left text-[15px] font-semibold uppercase tracking-[0.18em] transition-colors duration-200 ${
                scrolled ? "border-black/10" : "border-white/10"
              } ${
                i === 0
                  ? scrolled
                    ? "text-black"
                    : "text-white"
                  : `${textMuted} ${textHover}`
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
