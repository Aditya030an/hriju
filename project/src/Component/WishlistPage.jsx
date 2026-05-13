import React, { useState } from "react";
import {
  Heart,
  ShoppingBag,
  Trash2,
  ArrowRight,
} from "lucide-react";

import tee1 from "./photos/tee1.png";
import tee2 from "./photos/tee2.png";
import tee3 from "./photos/tee3.png";

const WishlistPage = () => {
  const [wishlist, setWishlist] = useState([
    {
      id: 1,
      name: "Shadow Oversized Tee",
      price: "₹2,299",
      image: tee1,
      category: "Oversized Fit",
    },

    {
      id: 2,
      name: "Vintage Essential Tee",
      price: "₹1,999",
      image: tee2,
      category: "Minimal Streetwear",
    },

    {
      id: 3,
      name: "Earth Tone Hoodie",
      price: "₹3,499",
      image: tee3,
      category: "Luxury Basics",
    },
  ]);

  // DELETE
  const removeItem = (id) => {
    setWishlist(wishlist.filter((item) => item.id !== id));
  };

  return (
    <div className="w-full min-h-screen bg-[#f5f3ee] pt-[90px]">

      {/* EMPTY STATE */}
      {wishlist.length === 0 ? (

        <div
          className="
          w-full min-h-[calc(100vh-90px)]

          flex flex-col
          items-center justify-center

          px-6 text-center"
        >

          {/* ICON */}
          <div
            className="
            relative

            w-[120px]
            h-[120px]

            rounded-full

            bg-white/70
            backdrop-blur-xl

            border border-black/5

            flex items-center justify-center

            shadow-[0_20px_80px_rgba(0,0,0,0.06)]"
          >

            <Heart
              size={48}
              strokeWidth={1.5}
              className="text-black/70"
            />

          </div>

          {/* TEXT */}
          <div className="mt-10">

            <p
              className="
              text-[10px]

              uppercase
              tracking-[0.45em]

              text-black/30

              mb-4"
            >
              Nothing Saved
            </p>

            <h1
              className="
              text-4xl md:text-6xl

              font-semibold

              tracking-[-0.08em]

              leading-[0.95]

              text-black"
            >
              Your wishlist
              <br />
              is empty.
            </h1>

            <p
              className="
              mt-6

              text-black/45

              max-w-[500px]

              leading-relaxed"
            >
              Save premium essentials you love and
              build your curated fashion collection.
            </p>

          </div>

          {/* BUTTON */}
          <button
            className="
            h-[58px]

            px-8

            mt-12

            rounded-full

            bg-black
            text-white

            flex items-center gap-3

            text-[11px]

            uppercase
            tracking-[0.25em]

            font-medium

            hover:scale-[1.02]

            transition-all duration-500"
          >

            Continue Shopping

            <ArrowRight size={15} />

          </button>

        </div>

      ) : (

        <>
          {/* TOP */}
          <div
            className="
            max-w-[1500px]
            mx-auto

            px-5 md:px-10

            pt-10"
          >

            <p
              className="
              text-[11px]

              uppercase
              tracking-[0.4em]

              text-black/35

              mb-4"
            >
              Your Collection
            </p>

            <div
              className="
              flex flex-col md:flex-row
              md:items-end
              justify-between

              gap-6"
            >

              <div>

                <h1
                  className="
                  text-5xl md:text-7xl

                  font-semibold

                  tracking-[-0.08em]

                  leading-[0.9]"
                >
                  Wishlist
                </h1>

                <p
                  className="
                  mt-5

                  text-black/45

                  max-w-[500px]

                  leading-relaxed"
                >
                  Save your favorite premium essentials and
                  discover timeless everyday luxury.
                </p>

              </div>

              {/* COUNT */}
              <div
                className="
                h-[54px]

                px-6

                rounded-full

                bg-white/70
                backdrop-blur-xl

                border border-black/5

                flex items-center gap-3"
              >

                <Heart size={18} className="text-black/70" />

                <span
                  className="
                  text-[11px]

                  uppercase
                  tracking-[0.25em]

                  font-medium"
                >
                  {wishlist.length} Saved Items
                </span>

              </div>

            </div>

          </div>

          {/* GRID */}
          <div
            className="
            max-w-[1500px]
            mx-auto

            px-5 md:px-10

            py-14

            grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3

            gap-8"
          >

            {wishlist.map((item) => (
              <div
                key={item.id}
                className="
                group

                rounded-[34px]

                overflow-hidden

                bg-white/70
                backdrop-blur-xl

                border border-black/5

                hover:translate-y-[-4px]

                transition-all duration-500"
              >

                {/* IMAGE */}
                <div
                  className="
                  relative

                  h-[460px]

                  overflow-hidden"
                >

                  <img
                    src={item.image}
                    alt={item.name}
                    className="
                    w-full h-full

                    object-cover

                    transition-all duration-700

                    group-hover:scale-[1.04]"
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

                  {/* REMOVE */}
                  <button
                    onClick={() => removeItem(item.id)}
                    className="
                    absolute top-5 right-5

                    w-11 h-11

                    rounded-full

                    bg-white/85
                    backdrop-blur-xl

                    border border-white/50

                    flex items-center justify-center

                    hover:bg-black
                    hover:text-white

                    transition-all duration-500"
                  >

                    <Trash2 size={18} />

                  </button>

                  {/* CATEGORY */}
                  <div
                    className="
                    absolute top-5 left-5

                    h-[36px]

                    px-4

                    rounded-full

                    bg-white/80
                    backdrop-blur-xl

                    border border-white/40

                    flex items-center"
                  >

                    <span
                      className="
                      text-[10px]

                      uppercase
                      tracking-[0.22em]

                      font-medium"
                    >
                      {item.category}
                    </span>

                  </div>

                  {/* CONTENT */}
                  <div
                    className="
                    absolute bottom-0 left-0

                    w-full

                    p-7"
                  >

                    <h2
                      className="
                      text-3xl

                      font-light

                      tracking-[-0.04em]

                      text-white"
                    >
                      {item.name}
                    </h2>

                    <div
                      className="
                      flex items-center justify-between

                      mt-4"
                    >

                      <p
                        className="
                        text-xl

                        text-white/85"
                      >
                        {item.price}
                      </p>

                      <button
                        className="
                        h-[46px]

                        px-5

                        rounded-full

                        bg-white
                        text-black

                        flex items-center gap-3

                        text-[10px]

                        uppercase
                        tracking-[0.25em]

                        font-medium

                        hover:bg-black
                        hover:text-white

                        transition-all duration-500"
                      >

                        <ShoppingBag size={15} />

                        Add

                      </button>

                    </div>

                  </div>

                </div>

              </div>
            ))}

          </div>
        </>
      )}

    </div>
  );
};

export default WishlistPage;