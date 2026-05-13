import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import model from "./photos/teebanner.png";
import tee1 from "./photos/tee1.png";
import tee2 from "./photos/tee2.png";
import tee3 from "./photos/tee3.png";
import tee4 from "./photos/tee4.png";
import tee5 from "./photos/tee5.png";
import tee6 from "./photos/tee6.png";
import { Link } from "react-router-dom";
// IMPORT CART
import Cart from "./Cart";

export default function Hero() {
  const bgRef = useRef(null);
  const contentRef = useRef(null);

  // CART STATE
  const [openCart, setOpenCart] = useState(false);

  const products = [
    {
      id: 1,
      price: "₹2,299",
      image: tee1,
    },

    {
      id: 4,

      price: "₹2,299",
      image: tee4,
    },

    {
      id: 3,

      price: "₹2,299",
      image: tee3,
    },

    {
      id: 2,

      price: "₹2,299",
      image: tee2,
    },

    {
      id: 5,

      price: "₹2,299",
      image: tee5,
    },

    {
      id: 6,

      price: "₹2,299",
      image: tee6,
    },
  ];

  useEffect(() => {
    // BG ANIMATION
    gsap.fromTo(
      bgRef.current,
      {
        scale: 1.08,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 1.8,
        ease: "power3.out",
      }
    );

    // CONTENT ANIMATION
    gsap.fromTo(
      contentRef.current.children,
      {
        opacity: 0,
        y: 25,
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.12,
        duration: 1,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <>



      {/* HERO */}
      <section
  className="
  relative w-full
  h-screen
  overflow-hidden
  text-white"
>

  {/* BACKGROUND */}
  <div
    ref={bgRef}
    className="absolute inset-0"
  >

    <img
      src={model}
      alt="banner"
      className="
      w-full h-full
      object-cover
      object-top"
    />

    {/* DARK OVERLAY */}
    <div className="absolute inset-0 bg-black/20" />

    {/* PREMIUM LIGHT EFFECT */}
    <div
      className="
      absolute inset-0
      bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.10),transparent_60%)]"
    />

  </div>

  {/* CONTENT */}
  <div
    ref={contentRef}
    className="
    relative z-20

    min-h-screen

    flex flex-col
    items-center
    justify-end

    text-center

    pb-24
    px-6

    mt-[72px]"
  >

    {/* SUBTEXT */}
    <p
      className="
      text-[11px]

      text-white/70

      tracking-[0.35em]
      uppercase

      mb-4"
    >
      New Collection
    </p>

    {/* HEADING */}
    <h1
      className="
      text-5xl md:text-7xl xl:text-[110px]

      font-black
      uppercase

      leading-[0.9]

      tracking-[-0.05em]"
    >
      Elevate
      <br />
      Your Style
    </h1>

    {/* DESCRIPTION */}
    <p
      className="
      mt-6

      max-w-[720px]

      text-white/70

      text-sm md:text-base

      leading-relaxed"
    >
      Discover premium oversized fashion crafted for
      modern streetwear culture and elevated essentials.
    </p>

    {/* BUTTONS */}
    <div className="flex flex-wrap justify-center gap-4 mt-10">

      {/* LEARN MORE */}
      <button
        className="
        h-[56px]

        px-9

        bg-white/10
        backdrop-blur-xl

        border border-white/10

        text-[11px]
        uppercase

        tracking-[0.28em]

        hover:bg-white
        hover:text-black

        transition-all duration-500"
      >
        Learn More
      </button>

      {/* SHOP */}
      <button
        className="
        h-[56px]

        px-9

        bg-white
        text-black

        border border-white

        text-[11px]
        uppercase

        tracking-[0.28em]

        hover:bg-transparent
        hover:text-white

        transition-all duration-500"
      >
        Shop Collection
      </button>

    </div>

  </div>

</section>

      {/* PRODUCTS */}
      <section
  className="
  relative w-full
  bg-[#f5f3ee]
  text-black
  px-5 md:px-14
  py-28
  overflow-hidden"
>

  {/* PREMIUM BG */}
  <div className="absolute inset-0 bg-[#f4f6fc]">

<div className="absolute inset-0 opacity-[0.03]">
  <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/noise.png')]" />
</div>

</div>

  {/* TOP */}
  <div
    className="
    relative z-10
    flex flex-col md:flex-row
    md:items-end
    justify-between
    gap-10
    mb-16"
  >

    <div>

      <p
        className="
        text-[11px]
        tracking-[0.45em]
        uppercase
        text-black/40
        mb-6"
      >
        Latest Drop
      </p>

      <h1
        className="
        text-5xl md:text-7xl
        font-light
        leading-[0.95]
        tracking-[-0.04em]"
      >
        Designed for <br />
        elevated everyday.
      </h1>

    </div>

    <p
      className="
      max-w-md
      text-black/50
      leading-relaxed
      text-sm md:text-base"
    >
      Minimal silhouettes, premium fabrics, and timeless essentials inspired
      by modern luxury fashion culture.
    </p>

  </div>

  {/* GRID */}
  <div
  className="
  relative z-10

  grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4

  gap-5"
>

  {products.map((item) => (
    <div
      key={item.id}
      className="
      group relative

      overflow-hidden

      bg-white/70
      backdrop-blur-xl

      border border-black/5
      hover:border-black/10

      transition-all duration-700"
    >

      {/* IMAGE */}
      <div className="relative h-[340px] overflow-hidden">

        <img
          src={item.image}
          alt={item.name}
          className="
          w-full h-full
          object-cover

          transition-all duration-700
          group-hover:scale-105"
        />

        {/* OVERLAY */}
        <div
          className="
          absolute inset-0
          bg-gradient-to-t
          from-black/75
          via-black/10
          to-transparent"
        />

        {/* ADD TO CART */}
        <div
          className="
          absolute bottom-5 left-1/2
          -translate-x-1/2

          w-[84%]

          opacity-0
          translate-y-10

          group-hover:opacity-100
          group-hover:translate-y-0

          transition-all duration-700
          z-30"
        >

          <Link to="/cart">

            <button
              onClick={() => setOpenCart(true)}
              className="
              relative

              w-full
              h-[50px]

              overflow-hidden

              bg-white/90
              backdrop-blur-2xl

              border border-white/60

              hover:bg-black

              transition-all duration-700

              group/button"
            >

              {/* SHINE */}
              <div
                className="
                absolute top-0 left-[-120%]

                w-[120%] h-full

                bg-gradient-to-r
                from-transparent
                via-white/70
                to-transparent

                skew-x-[-20deg]

                group-hover/button:left-[120%]

                transition-all duration-1000"
              />

              {/* TEXT */}
              <div
                className="
                relative z-10

                flex items-center justify-center
                gap-2

                h-full

                uppercase
                tracking-[0.28em]

                text-[10px]
                font-medium

                text-black
                group-hover/button:text-white

                transition-all duration-500"
              >

                <span>Add To Cart</span>

                <span
                  className="
                  text-base

                  transition-all duration-500
                  group-hover/button:translate-x-1"
                >
                  +
                </span>

              </div>

            </button>

          </Link>

        </div>

      </div>

      {/* CONTENT */}
      <div
        className="
        absolute bottom-0 left-0
        w-full
        p-5
        z-20

        transition-all duration-500

        group-hover:translate-y-[90px]"
      >

        <h2
          className="
          text-[22px]

          font-light
          tracking-[-0.03em]

          text-white"
        >
          {item.name}
        </h2>

        <div className="flex items-center justify-between mt-2">

          <p
            className="
            text-white/80
            text-[15px]

            tracking-wide"
          >
            {item.price}
          </p>

        </div>

      </div>

    </div>
  ))}

</div>

</section>
    </>
  );
}