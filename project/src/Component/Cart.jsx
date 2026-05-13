import React, { useState } from "react";
import {
  Minus,
  Plus,
  Trash2,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

import tee1 from "./photos/tee1.png";
import EmptyCart from "./EmptyCart";

const CartPage = () => {

  // CART STATE
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Shadow Tee",
      category: "Premium Streetwear",
      color: "Obsidian Black",
      price: 2299,
      qty: 1,
      image: tee1,
    },
  ]);

  const [selectedSize, setSelectedSize] = useState("L");

  const sizes = ["S", "M", "L", "XL"];

  // DELETE ITEM
  const removeItem = (id) => {
    const updatedCart = cartItems.filter(
      (item) => item.id !== id
    );

    setCartItems(updatedCart);
  };

  // EMPTY CART PAGE
  if (cartItems.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div className="w-full min-h-screen bg-[#f5f3ee] pt-[72px]">

      {/* TOP BAR */}
      <div
        className="w-full h-[65px]
        bg-white/70 backdrop-blur-xl
        border-b border-black/5
        flex items-center justify-center"
      >

        <div className="flex items-center gap-4 md:gap-7">

          <div className="flex items-center gap-3">

            <span
              className="text-[12px]
              tracking-[0.22em]
              font-semibold text-black"
            >
              BAG
            </span>

            <div className="w-12 h-[1px] bg-black/20" />

          </div>

          <div className="flex items-center gap-3">

            <span
              className="text-[12px]
              tracking-[0.22em]
              font-semibold text-black/30"
            >
              ADDRESS
            </span>

            <div className="w-12 h-[1px] bg-black/10" />

          </div>

          <span
            className="text-[12px]
            tracking-[0.22em]
            font-semibold text-black/30"
          >
            PAYMENT
          </span>

        </div>

      </div>

      {/* MAIN */}
      <div
        className="max-w-[1450px] mx-auto
        px-5 md:px-10 py-10
        grid grid-cols-1 xl:grid-cols-[1fr_380px]
        gap-8"
      >

        {/* LEFT */}
        <div>

          {/* HEADING */}
          <div className="mb-8">

            <p
              className="text-[10px]
              uppercase tracking-[0.35em]
              text-black/35 mb-3"
            >
              Your Selection
            </p>

            <h1
              className="text-4xl md:text-5xl
              font-semibold tracking-tight
              text-black"
            >
              Shopping Bag
            </h1>

          </div>

          {/* ITEMS */}
          <div className="space-y-5">

            {cartItems.map((item) => (
              <div
                key={item.id}
                className="
                bg-white/80 backdrop-blur-xl
                border border-black/5
                rounded-[30px]
                overflow-hidden
                shadow-[0_10px_40px_rgba(0,0,0,0.03)]"
              >

                <div
                  className="
                  p-5 md:p-6
                  flex flex-col lg:flex-row
                  gap-7"
                >

                  {/* IMAGE */}
                  <div
                    className="
                    w-full lg:w-[210px]
                    h-[260px]
                    rounded-[24px]
                    overflow-hidden
                    bg-[#efefef]"
                  >

                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />

                  </div>

                  {/* CONTENT */}
                  <div className="flex-1 flex flex-col justify-between">

                    {/* TOP */}
                    <div>

                      <div className="flex items-start justify-between gap-5">

                        <div>

                          <p
                            className="text-[10px]
                            uppercase tracking-[0.3em]
                            text-black/35 mb-3"
                          >
                            {item.category}
                          </p>

                          <h2
                            className="text-3xl
                            md:text-4xl
                            font-semibold tracking-tight
                            text-black"
                          >
                            {item.name}
                          </h2>

                        </div>

                        {/* DELETE */}
                        <button
                          onClick={() => removeItem(item.id)}
                          className="
                          w-10 h-10 rounded-full
                          bg-black/[0.03]
                          hover:bg-red-100
                          flex items-center justify-center
                          transition-all duration-300"
                        >
                          <Trash2 size={17} />
                        </button>

                      </div>

                      {/* OPTIONS */}
                      <div className="flex flex-wrap gap-10 mt-7">

                        {/* COLOR */}
                        <div>

                          <p
                            className="text-[10px]
                            uppercase tracking-[0.25em]
                            text-black/35 mb-3"
                          >
                            Color
                          </p>

                          <div className="flex items-center gap-3">

                            <div
                              className="
                              w-8 h-8 rounded-full
                              bg-black border-2 border-black"
                            />

                            <span className="text-sm text-black/60">
                              {item.color}
                            </span>

                          </div>

                        </div>

                        {/* SIZE */}
                        <div>

                          <p
                            className="text-[10px]
                            uppercase tracking-[0.25em]
                            text-black/35 mb-3"
                          >
                            Size
                          </p>

                          <div className="flex items-center gap-2">

                            {sizes.map((size) => (
                              <button
                                key={size}
                                onClick={() => setSelectedSize(size)}
                                className={`
                                  w-11 h-11 rounded-full
                                  text-sm font-medium
                                  transition-all duration-300

                                  ${
                                    selectedSize === size
                                      ? "bg-black text-white"
                                      : "bg-[#f3f3f3] text-black/60 hover:bg-black hover:text-white"
                                  }
                                `}
                              >
                                {size}
                              </button>
                            ))}

                          </div>

                        </div>

                      </div>

                    </div>

                    {/* BOTTOM */}
                    <div
                      className="
                      flex flex-col md:flex-row
                      items-start md:items-end
                      justify-between
                      gap-6 mt-10"
                    >

                      {/* QTY */}
                      <div>

                        <p
                          className="text-[10px]
                          uppercase tracking-[0.25em]
                          text-black/35 mb-3"
                        >
                          Quantity
                        </p>

                        <div
                          className="
                          flex items-center
                          h-[50px]
                          rounded-full
                          border border-black/10
                          overflow-hidden"
                        >

                          <button
                            className="
                            w-12 h-full
                            flex items-center justify-center
                            hover:bg-black/5 transition-all"
                          >
                            <Minus size={16} />
                          </button>

                          <div
                            className="
                            w-14 h-full
                            flex items-center justify-center
                            font-medium"
                          >
                            {item.qty}
                          </div>

                          <button
                            className="
                            w-12 h-full
                            flex items-center justify-center
                            hover:bg-black/5 transition-all"
                          >
                            <Plus size={16} />
                          </button>

                        </div>

                      </div>

                      {/* PRICE */}
                      <div className="text-right">

                        <p
                          className="text-[10px]
                          uppercase tracking-[0.25em]
                          text-black/35 mb-2"
                        >
                          Total
                        </p>

                        <h3
                          className="
                          text-4xl
                          font-bold tracking-tight
                          text-black"
                        >
                          ₹{item.price}
                        </h3>

                      </div>

                    </div>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>

        {/* RIGHT */}
        <div>

          <div
            className="
            sticky top-[95px]

            bg-white/80
            backdrop-blur-2xl

            border border-black/5

            rounded-[32px]

            shadow-[0_20px_80px_rgba(0,0,0,0.04)]

            overflow-hidden"
          >

            {/* TOP */}
            <div className="p-7">

              <p
                className="text-[10px]
                uppercase tracking-[0.3em]
                text-black/35 mb-3"
              >
                Order Summary
              </p>

              <h2
                className="text-3xl
                font-semibold tracking-tight
                text-black"
              >
                Checkout
              </h2>

              {/* ROWS */}
              <div className="space-y-5 mt-8">

                <div className="flex items-center justify-between">

                  <span className="text-black/45 text-sm">
                    Subtotal
                  </span>

                  <span className="text-base font-semibold text-black">
                    ₹2,299
                  </span>

                </div>

                <div className="flex items-center justify-between">

                  <span className="text-black/45 text-sm">
                    Shipping
                  </span>

                  <span className="text-base font-semibold text-green-600">
                    Free
                  </span>

                </div>

                <div className="flex items-center justify-between">

                  <span className="text-black/45 text-sm">
                    Taxes
                  </span>

                  <span className="text-base font-semibold text-black">
                    ₹99
                  </span>

                </div>

              </div>

              {/* DIVIDER */}
              <div className="w-full h-[1px] bg-black/5 my-8" />

              {/* TOTAL */}
              <div className="flex items-end justify-between">

                <div>

                  <p
                    className="text-[10px]
                    uppercase tracking-[0.25em]
                    text-black/35"
                  >
                    Grand Total
                  </p>

                  <h1
                    className="
                    text-4xl
                    font-bold tracking-tight
                    text-black
                    mt-2"
                  >
                    ₹2,398
                  </h1>

                </div>

              </div>

              {/* BUTTON */}
              <button
                className="
                w-full h-[56px]
                mt-8

                rounded-full

                bg-black
                text-white

                flex items-center justify-center
                gap-3

                text-[12px]
                uppercase
                tracking-[0.22em]
                font-medium

                hover:scale-[1.02]

                transition-all duration-500"
              >

                Secure Checkout

                <ArrowRight size={16} />

              </button>

            </div>

            {/* FOOTER */}
            <div
              className="
              border-t border-black/5

              px-7 py-4

              flex items-center gap-3

              text-black/45
              bg-black/[0.02]"
            >

              <ShieldCheck size={16} />

              <p className="text-xs">
                Secure payments & easy returns
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default CartPage;