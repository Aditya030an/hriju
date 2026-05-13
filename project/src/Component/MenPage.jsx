import React from "react";
import {
  Heart,
  ShoppingBag,
  SlidersHorizontal,
} from "lucide-react";

import tee1 from "./photos/tee1.png";
import tee2 from "./photos/tee2.png";
import tee3 from "./photos/tee3.png";
import tee4 from "./photos/tee4.png";
import tee5 from "./photos/tee5.png";
import tee6 from "./photos/tee6.png";

const MenPage = () => {
  const products = [
    {
      id: 1,

      price: "₹2,299",
      image: tee1,

    },

    {
      id: 2,

      price: "₹1,999",
      image: tee2,

    },

    {
      id: 3,

      price: "₹3,499",
      image: tee3,

    },

    {
      id: 4,

      price: "₹2,499",
      image: tee4,

    },

    {
      id: 5,

      price: "₹1,899",
      image: tee5,

    },

    {
      id: 6,

      price: "₹2,799",
      image: tee6,

    },
  ];

  return (
    <div className="w-full min-h-screen bg-[#f5f3ee] pt-[82px]">

      {/* HERO */}
      <section
        className="
        relative

        w-full

        px-5 md:px-10

        pt-16 pb-12"
      >

        <div
          className="
          max-w-[1600px]
          mx-auto"
        >

          {/* TOP */}
          <div
            className="
            flex flex-col lg:flex-row
            lg:items-end
            justify-between

            gap-10"
          >

            {/* LEFT */}
            <div>

              <p
                className="
                text-[11px]

                uppercase
                tracking-[0.45em]

                text-black/35

                mb-5"
              >
                Men Collection
              </p>

              <h1
                className="
                text-6xl md:text-8xl xl:text-[120px]

                font-black

                uppercase

                tracking-[-0.08em]

                leading-[0.85]

                text-black"
              >
                Modern
                <br />
                Essentials.
              </h1>

            </div>

            {/* RIGHT */}
            <div className="max-w-[420px]">

              <p
                className="
                text-black/50

                leading-relaxed

                text-base md:text-lg"
              >
                Discover oversized silhouettes,
                premium fabrics and elevated streetwear
                designed for modern everyday luxury.
              </p>

            </div>

          </div>

          {/* FILTER BAR */}
          <div
            className="
            mt-14

            flex flex-col md:flex-row
            md:items-center
            justify-between

            gap-5"
          >

            {/* FILTERS */}
            <div className="flex flex-wrap gap-3">

              {[
                "All",
                "Oversized",
                "Streetwear",
                "Hoodies",
                "Minimal",
                "Luxury",
              ].map((item, i) => (
                <button
                  key={i}
                  className={`
                    h-[46px]

                    px-6

                    rounded-full

                    text-[11px]

                    uppercase
                    tracking-[0.25em]

                    font-medium

                    transition-all duration-500

                    ${
                      i === 0
                        ? "bg-black text-white"
                        : "bg-white/70 border border-black/5 text-black/60 hover:bg-black hover:text-white"
                    }
                  `}
                >
                  {item}
                </button>
              ))}

            </div>

            {/* SORT */}
            <button
              className="
              h-[50px]

              px-6

              rounded-full

              bg-white/80
              backdrop-blur-xl

              border border-black/5

              flex items-center gap-3

              text-[11px]

              uppercase
              tracking-[0.25em]

              font-medium

              hover:bg-black
              hover:text-white

              transition-all duration-500"
            >

              <SlidersHorizontal size={15} />

              Sort & Filter

            </button>

          </div>

        </div>

      </section>

      {/* PRODUCTS */}
{/* PRODUCTS */}
<section
  className="
  max-w-[1600px]
  mx-auto

  px-5 md:px-10

  pb-20"
>

  <div
    className="
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
        <div
          className="
          relative

          h-[360px]

          overflow-hidden"
        >

          <img
            src={item.image}
            alt={item.name}
            className="
            w-full h-full

            object-cover

            transition-all duration-700

            group-hover:scale-[1.05]"
          />

          {/* OVERLAY */}
          <div
            className="
            absolute inset-0

            bg-gradient-to-t
            from-black/70
            via-black/10
            to-transparent"
          />

          {/* TOP */}
          <div
            className="
            absolute top-4 left-4 right-4

            flex items-center justify-between"
          >



            
          </div>

          {/* ADD TO BAG */}
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

            <button
              className="
              relative

              w-full
              h-[48px]

              overflow-hidden

              bg-white/92
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

                <ShoppingBag size={13} />

                Add To Bag

              </div>

            </button>

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

              tracking-[-0.04em]

              text-white"
            >
              {item.name}
            </h2>

            <div className="flex items-center justify-between mt-2">

              <p
                className="
                text-[15px]

                text-white/85"
              >
                {item.price}
              </p>

            </div>

          </div>

        </div>

      </div>
    ))}

  </div>

</section>

    </div>
  );
};

export default MenPage;