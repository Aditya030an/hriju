import React, { useState } from "react";
import {
  ArrowRight,
  MessageCircle,
} from "lucide-react";

import { FcGoogle } from "react-icons/fc";

const AuthPage = () => {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <div
      className="
      relative

      w-full min-h-screen

      bg-[#f4f1ea]

      overflow-hidden

      flex items-center justify-center

      px-5 py-10"
    >

      {/* BIG LIGHT */}
      <div
        className="
        absolute top-[-300px] left-1/2
        -translate-x-1/2

        w-[1100px]
        h-[1100px]

        rounded-full

        bg-[radial-gradient(circle,rgba(255,255,255,0.9),transparent_60%)]

        blur-3xl"
      />

      {/* MAIN CARD */}
      <div
        className="
        relative z-10

        w-full max-w-[1150px]

        rounded-[40px]

        overflow-hidden

        bg-white

        shadow-[0_40px_120px_rgba(0,0,0,0.08)]

        grid grid-cols-1 lg:grid-cols-2"
      >

        {/* LEFT SIDE */}
        <div
          className="
          relative

          bg-[#111111]

          text-white

          p-10 md:p-14

          flex flex-col justify-between

          overflow-hidden"
        >

          {/* BG TEXT */}
          <h1
            className="
            absolute bottom-[-30px] left-[-10px]

            text-[180px]

            font-black

            leading-none

            text-white/[0.03]

            select-none"
          >
            H
          </h1>

          {/* TOP */}
          <div>

            <p
              className="
              text-[11px]

              uppercase
              tracking-[0.45em]

              text-white/40"
            >
              HRIJU MEMBERSHIP
            </p>

          </div>

          {/* CENTER */}
          <div className="relative z-10">

            <h1
              className="
              text-5xl md:text-7xl

              font-semibold

              tracking-[-0.08em]

              leading-[0.9]"
            >
              Enter
              <br />
              the future
              <br />
              of fashion.
            </h1>

            <p
              className="
              mt-8

              text-white/50

              text-base

              leading-relaxed

              max-w-[420px]"
            >
              Discover timeless silhouettes,
              premium fabrics and elevated essentials
              designed for modern luxury streetwear.
            </p>

          </div>

          {/* BOTTOM */}
          <div className="flex items-center gap-3 mt-16">

            <div className="w-12 h-[1px] bg-white/20" />

            <p
              className="
              text-[10px]

              uppercase
              tracking-[0.35em]

              text-white/35"
            >
              Minimal Luxury
            </p>

          </div>

        </div>

        {/* RIGHT SIDE */}
{/* RIGHT SIDE */}
<div
  className="
  bg-[#faf8f4]

  px-8 md:px-14 py-12

  flex flex-col justify-center"
>

  {/* TABS */}
  <div
    className="
    flex

    bg-white

    rounded-full

    p-1

    border border-black/5"
  >

    <button
      onClick={() => setActiveTab("login")}
      className={`
        flex-1 h-[54px]

        rounded-full

        text-[11px]
        uppercase
        tracking-[0.25em]
        font-medium

        transition-all duration-500

        ${
          activeTab === "login"
            ? "bg-black text-white"
            : "text-black/35"
        }
      `}
    >
      Login
    </button>

    <button
      onClick={() => setActiveTab("register")}
      className={`
        flex-1 h-[54px]

        rounded-full

        text-[11px]
        uppercase
        tracking-[0.25em]
        font-medium

        transition-all duration-500

        ${
          activeTab === "register"
            ? "bg-black text-white"
            : "text-black/35"
        }
      `}
    >
      Register
    </button>

  </div>

  {/* LOGIN UI */}
  {activeTab === "login" ? (

    <>
      {/* TITLE */}
      <div className="mt-14">

        <p
          className="
          text-[10px]

          uppercase
          tracking-[0.4em]

          text-black/30

          mb-4"
        >
          Welcome Back
        </p>

        <h2
          className="
          text-4xl md:text-5xl

          font-semibold

          tracking-[-0.06em]

          leading-[1]"
        >
          Continue your
          <br />
          journey.
        </h2>

      </div>

      {/* SOCIAL */}
      <div className="space-y-4 mt-12">

        {/* GOOGLE */}
        <button
          className="
          w-full h-[62px]

          rounded-full

          bg-white

          border border-black/6

          px-6

          flex items-center justify-between

          hover:border-black/15
          hover:scale-[1.01]

          transition-all duration-500"
        >

          <div className="flex items-center gap-4">

            <FcGoogle size={21} />

            <span
              className="
              text-[11px]

              uppercase
              tracking-[0.22em]
              font-medium"
            >
              Continue with Google
            </span>

          </div>

          <ArrowRight size={15} />

        </button>

        {/* WHATSAPP */}
        <button
          className="
          w-full h-[62px]

          rounded-full

          bg-[#25D366]
          text-white

          px-6

          flex items-center justify-between

          hover:scale-[1.01]

          transition-all duration-500"
        >

          <div className="flex items-center gap-4">

            <MessageCircle size={18} />

            <span
              className="
              text-[11px]

              uppercase
              tracking-[0.22em]
              font-medium"
            >
              Continue with WhatsApp
            </span>

          </div>

          <ArrowRight size={15} />

        </button>

      </div>

      {/* DIVIDER */}
      <div className="flex items-center gap-4 my-10">

        <div className="flex-1 h-[1px] bg-black/8" />

        <span
          className="
          text-[9px]

          uppercase
          tracking-[0.35em]

          text-black/25"
        >
          OR
        </span>

        <div className="flex-1 h-[1px] bg-black/8" />

      </div>

      {/* PHONE */}
      <input
        type="text"
        placeholder="+91 98765 43210"
        className="
        w-full
        h-[60px]

        rounded-full

        bg-white

        border border-black/6

        px-6

        outline-none

        text-[14px]

        placeholder:text-black/25"
      />

      {/* BUTTON */}
      <button
        className="
        w-full
        h-[60px]

        mt-8

        rounded-full

        bg-black
        text-white

        text-[11px]
        uppercase
        tracking-[0.25em]
        font-medium

        hover:scale-[1.01]

        transition-all duration-500"
      >
        Continue
      </button>
    </>

  ) : (

    /* REGISTER UI */

    <div className="mt-12">

      {/* TITLE */}
      <div className="mb-8">

        <p
          className="
          text-[10px]

          uppercase
          tracking-[0.35em]

          text-black/30

          mb-4"
        >
          Create Account
        </p>

        <h2
          className="
          text-4xl md:text-5xl

          font-semibold

          tracking-[-0.06em]

          leading-[1]"
        >
          Become part
          <br />
          of HRIJU.
        </h2>

      </div>

      {/* FORM */}
      <div className="space-y-4">

        {/* NAME */}
        <div className="grid grid-cols-2 gap-4">

          <input
            type="text"
            placeholder="First Name"
            className="
            h-[58px]

            rounded-full

            bg-white

            border border-black/6

            px-6

            outline-none

            text-[14px]

            placeholder:text-black/25"
          />

          <input
            type="text"
            placeholder="Last Name"
            className="
            h-[58px]

            rounded-full

            bg-white

            border border-black/6

            px-6

            outline-none

            text-[14px]

            placeholder:text-black/25"
          />

        </div>

        {/* EMAIL */}
        <input
          type="email"
          placeholder="Email Address"
          className="
          w-full
          h-[58px]

          rounded-full

          bg-white

          border border-black/6

          px-6

          outline-none

          text-[14px]

          placeholder:text-black/25"
        />

        {/* PASSWORD */}
        <input
          type="password"
          placeholder="Create Password"
          className="
          w-full
          h-[58px]

          rounded-full

          bg-white

          border border-black/6

          px-6

          outline-none

          text-[14px]

          placeholder:text-black/25"
        />

        {/* MOBILE */}
        <input
          type="text"
          placeholder="+91 Mobile Number"
          className="
          w-full
          h-[58px]

          rounded-full

          bg-white

          border border-black/6

          px-6

          outline-none

          text-[14px]

          placeholder:text-black/25"
        />

        {/* GENDER */}
        <div className="flex items-center gap-8 pt-2">

          <p
            className="
            text-[10px]

            uppercase
            tracking-[0.3em]

            text-black/35"
          >
            Gender
          </p>

          <div className="flex items-center gap-5 text-sm">

            <label className="flex items-center gap-2">
              <input type="radio" name="gender" />
              Male
            </label>

            <label className="flex items-center gap-2">
              <input type="radio" name="gender" />
              Female
            </label>

            <label className="flex items-center gap-2">
              <input type="radio" name="gender" />
              Other
            </label>

          </div>

        </div>

        {/* BUTTON */}
        <button
          className="
          w-full
          h-[60px]

          mt-5

          rounded-full

          bg-black
          text-white

          text-[11px]
          uppercase
          tracking-[0.25em]
          font-medium

          hover:scale-[1.01]

          transition-all duration-500"
        >
          Create Account
        </button>

      </div>

    </div>

  )}

</div>

      </div>

    </div>
  );
};

export default AuthPage;