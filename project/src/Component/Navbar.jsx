

import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  Mic,
  Heart,
  ShoppingBag,
  User,
  Menu,
  X,
} from "lucide-react";

import logo from "./photos/logo.png";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav
        className="
  fixed top-0 left-0 w-full z-20

  bg-white/[0.03]

  backdrop-blur-xs

  border-b border-white/10

  transition-all duration-500"
      >

        {/* TOP LINE */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        {/* MAIN */}
        <div
          className="
  max-w-[1700px]
  mx-auto

  h-[72px]

  px-5 md:px-8

  grid grid-cols-[1fr_auto_1fr]
  items-center

  gap-6"
        >
          {/* LEFT */}
          <div className="flex items-center">

            {/* MOBILE MENU */}
            <button
              onClick={() => setMobileOpen((o) => !o)}
              className="
              lg:hidden

              w-10 h-10 rounded-full

              flex items-center justify-center

              text-white/80 hover:text-white

              hover:bg-white/10

              transition-all duration-300"
            >
              {mobileOpen ? (
                <X size={22} strokeWidth={1.9} />
              ) : (
                <Menu size={22} strokeWidth={1.9} />
              )}
            </button>

            {/* DESKTOP LINKS */}
            <div className="hidden lg:flex items-center gap-8">

              <Link to="/MenPage">

                <button
                  className="
    relative

    text-[14px]
    font-semibold

    tracking-[0.18em]
    uppercase

    text-white/70
    hover:text-white

    transition-all duration-300

    group"
                >

                  Men

                  <span
                    className="
      absolute left-0 -bottom-[4px]

      w-0 h-[2px]

      bg-white rounded-full

      transition-all duration-500

      group-hover:w-full"
                  />

                </button>

              </Link>

              <button
                className="
                text-[14px]
                font-semibold

                tracking-[0.18em]
                uppercase

                text-white/60
                hover:text-white

                transition-all duration-300"
              >
                Women
              </button>

              <button
                className="
                text-[14px]
                font-semibold

                tracking-[0.18em]
                uppercase

                text-white/60
                hover:text-white

                transition-all duration-300"
              >
                OWNDAYS
              </button>



              <Link to="/Aboutus">

                <button
                  className="
  relative

  text-[14px]
  font-semibold

  tracking-[0.18em]
  uppercase

  text-white/70
  hover:text-white

  transition-all duration-300

  group"
                >

                  About Us

                  <span
                    className="
    absolute left-0 -bottom-[4px]

    w-0 h-[2px]

    bg-white rounded-full

    transition-all duration-500

    group-hover:w-full"
                  />

                </button>

              </Link>

            </div>

          </div>

          {/* LOGO */}
          <Link to="/">

            <div className="flex items-center justify-center relative z-20">

              <img
                src={logo}
                alt="logo"
                className="
                w-[85px] md:w-[105px]

                object-contain

                select-none"
              />

            </div>

          </Link>

          {/* RIGHT */}
          <div className="flex items-center justify-end gap-4">

            {/* SEARCH */}
            <div
              className="
              hidden xl:flex items-center

              w-[270px]
              2xl:w-[340px]

              h-[50px]

              rounded-full

              border border-white/10

              bg-white/10
              backdrop-blur-xl

              px-5 py-2

              transition-all duration-300"
            >

              <input
                type="text"
                placeholder="Search products"
                className="
                flex-1

                bg-transparent
                outline-none

                text-[13px]
                font-medium

                py-2

                text-white

                placeholder:text-white/40"
              />

              <div className="flex items-center gap-3 text-white/60">

                <button
                  className="
                  hover:text-white
                  transition-all duration-300"
                >
                  <Mic size={17} strokeWidth={2} />
                </button>

                <div className="w-[1px] h-4 bg-white/10" />

                <button
                  className="
                  hover:text-white
                  transition-all duration-300"
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
                  className="
                  w-10 h-10 rounded-full

                  flex items-center justify-center

                  text-white/80
                  hover:text-white

                  hover:bg-white/10

                  transition-all duration-300"
                >

                  <User size={21} strokeWidth={1.9} />

                </button>

              </Link>


              {/* CART */}
              <Link to="/cart">

                <button
                  className="
                  relative

                  w-10 h-10 rounded-full

                  flex items-center justify-center

                  text-white/80
                  hover:text-white

                  hover:bg-white/10

                  transition-all duration-300"
                >

                  <ShoppingBag size={21} strokeWidth={1.9} />

                  {/* COUNT */}
                  <span
                    className="
                    absolute top-[6px] right-[6px]

                    w-[15px] h-[15px]

                    rounded-full

                    bg-white
                    text-black

                    text-[8px]
                    font-semibold

                    flex items-center justify-center"
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
        className={`
        fixed inset-0 z-[998]

        lg:hidden

        transition-all duration-300

        ${mobileOpen
            ? "pointer-events-auto"
            : "pointer-events-none"
          }`}
      >

        {/* BACKDROP */}
        <div
          onClick={() => setMobileOpen(false)}
          className={`
          absolute inset-0

          bg-black/40
          backdrop-blur-sm

          transition-opacity duration-300

          ${mobileOpen
              ? "opacity-100"
              : "opacity-0"
            }`}
        />

        {/* DRAWER */}
        <div
          className={`
          absolute top-[73px] left-0

          w-full

          bg-black/50
          backdrop-blur-2xl

          border-b border-white/10

          px-6 py-6

          flex flex-col gap-1

          transition-all duration-300 ease-out

          ${mobileOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-2"
            }`}
        >

          {/* MOBILE SEARCH */}
          <div
            className="
            flex items-center

            h-[48px]

            rounded-full

            border border-white/10

            bg-white/10

            px-5 mb-4"
          >

            <input
              type="text"
              placeholder="Search products"
              className="
              flex-1

              bg-transparent
              outline-none

              text-[13px]
              font-medium

              text-white

              placeholder:text-white/40"
            />

            <Search
              size={16}
              strokeWidth={2}
              className="text-white/40"
            />

          </div>

          {/* LINKS */}
          {["Men", "Women", "OWNDAYS"].map((label, i) => (
            <button
              key={label}
              onClick={() => setMobileOpen(false)}
              className={`
              text-left

              text-[15px]
              font-semibold

              tracking-[0.18em]
              uppercase

              py-4

              border-b border-white/10

              transition-colors duration-200

              ${i === 0
                  ? "text-white"
                  : "text-white/60 hover:text-white"
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