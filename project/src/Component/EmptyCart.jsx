import React from "react";
import {
  ShoppingBag,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const EmptyCart = () => {
  return (
    <div className="w-full min-h-screen bg-[#f5f3ee] pt-[72px] overflow-hidden relative">

      {/* NOISE TEXTURE */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/noise.png')]" />
      </div>

      {/* TOP BAR */}
      <div
        className="
        relative z-20
        w-full h-[65px]

        border-b border-black/5

        bg-white/60
        backdrop-blur-2xl

        flex items-center justify-center"
      >

        <div className="flex items-center gap-5 md:gap-8">

          <div className="flex items-center gap-3">

            <span
              className="
              text-[12px]
              tracking-[0.25em]
              font-semibold
              text-black"
            >
              BAG
            </span>

            <div className="w-12 h-[1px] bg-black/20" />

          </div>

          <div className="flex items-center gap-3">

            <span
              className="
              text-[12px]
              tracking-[0.25em]
              font-semibold
              text-black/25"
            >
              ADDRESS
            </span>

            <div className="w-12 h-[1px] bg-black/10" />

          </div>

          <span
            className="
            text-[12px]
            tracking-[0.25em]
            font-semibold
            text-black/25"
          >
            PAYMENT
          </span>

        </div>

      </div>

      {/* MAIN */}
      <div
        className="
        relative z-10

        max-w-[1100px]
        mx-auto

        min-h-[calc(100vh-137px)]

        px-6

        flex flex-col
        items-center justify-center
        text-center

        pt-10"
      >

        {/* PREMIUM ICON SECTION */}
        <div className="relative mt-12">

          {/* OUTER GLOW */}
          <div
            className="
            absolute inset-0
            scale-[1.5]

            bg-[radial-gradient(circle,rgba(0,0,0,0.05),transparent_70%)]

            blur-3xl"
          />

          {/* RINGS */}
          <div
            className="
            absolute inset-[-22px]

            rounded-full
            border border-black/[0.04]"
          />

          <div
            className="
            absolute inset-[-42px]

            rounded-full
            border border-black/[0.03]"
          />

          {/* MAIN ICON BOX */}
          <div
            className="
            relative

            w-[125px]
            h-[125px]

            rounded-full

            bg-white/80
            backdrop-blur-2xl

            border border-black/5

            shadow-[0_20px_60px_rgba(0,0,0,0.05)]

            flex items-center justify-center"
          >

            {/* FLOATING DOT */}
            <div
              className="
              absolute top-5 right-5

              w-2.5 h-2.5 rounded-full

              bg-black/10"
            />

            {/* SMALL ICON */}
            <div
              className="
              absolute bottom-5 left-5

              w-7 h-7 rounded-full

              bg-black text-white

              flex items-center justify-center"
            >

              <Sparkles size={11} />

            </div>

            {/* BAG ICON */}
            <ShoppingBag
              size={48}
              strokeWidth={1.5}
              className="text-black/80"
            />

          </div>

        </div>

        {/* TEXT */}
        <div className="text-center mt-16">

          <p
            className="
            text-[10px]
            uppercase
            tracking-[0.4em]

            text-black/35

            mb-5"
          >
            Nothing Here Yet
          </p>

          <h1
            className="
            text-4xl md:text-6xl xl:text-7xl

            font-semibold
            tracking-[-0.06em]

            text-black

            leading-[0.92]"
          >
            Your bag feels
            <br />
            a little lonely.
          </h1>

          <p
            className="
            mt-6

            max-w-[520px]

            mx-auto

            text-black/45

            text-sm md:text-base

            leading-relaxed"
          >
            Explore premium essentials crafted with
            modern silhouettes and timeless streetwear aesthetics.
          </p>

        </div>

        {/* BUTTONS */}
        <div className="flex flex-wrap justify-center gap-4 mt-12">

          {/* SHOP */}
          <button
            className="
            h-[56px]

            px-8

            rounded-full

            bg-black
            text-white

            flex items-center gap-3

            text-[11px]
            uppercase
            tracking-[0.22em]
            font-medium

            hover:scale-[1.03]

            transition-all duration-500"
          >

            Continue Shopping

            <ArrowRight size={15} />

          </button>

          {/* LOGIN */}
          <button
            className="
            h-[56px]

            px-8

            rounded-full

            border border-black/10

            bg-white/70
            backdrop-blur-xl

            text-[11px]
            uppercase
            tracking-[0.22em]
            font-medium

            hover:bg-black
            hover:text-white

            transition-all duration-500"
          >
            Login
          </button>

        </div>

        {/* CATEGORY TAGS */}
        <div
          className="
          flex flex-wrap justify-center
          gap-2.5

          mt-14"
        >

          {[
            "Oversized",
            "Streetwear",
            "Sneakers",
            "Minimal",
            "Luxury",
            "Essentials",
          ].map((item, i) => (
            <button
              key={i}
              className="
              px-4 py-2.5

              rounded-full

              bg-white/70
              backdrop-blur-xl

              border border-black/5

              text-[10px]
              tracking-[0.15em]

              text-black/55

              hover:bg-black
              hover:text-white

              transition-all duration-500"
            >
              {item}
            </button>
          ))}

        </div>

      </div>

    </div>
  );
};

export default EmptyCart;