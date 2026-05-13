import React from "react";

const About = () => {
  return (
    <section
      className="
      relative w-full

      bg-[#f4f6fc]

      overflow-hidden

      px-6 md:px-14 xl:px-24

      py-28 md:py-36"
    >

      {/* NOISE */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/noise.png')]" />
      </div>

      {/* TOP LINE */}
      <div className="w-full h-[1px] bg-black/5 mb-16" />

      {/* CONTENT */}
      <div
        className="
        relative z-10

        max-w-[1600px]
        mx-auto"
      >

        {/* SMALL LABEL */}
        <p
          className="
          text-[11px]

          uppercase
          tracking-[0.45em]

          text-black/35

          mb-8"
        >
          About HRIJU
        </p>

        {/* BIG HEADING */}
        <h1
          className="
          text-5xl md:text-7xl xl:text-[110px]

          font-black

          uppercase

          tracking-[-0.08em]

          leading-[0.88]

          text-black

          max-w-[1200px]"
        >
          Built Around
          <br />
          Presence.
        </h1>

        {/* GRID */}
        <div
          className="
          mt-20

          grid grid-cols-1 xl:grid-cols-[1.2fr_0.8fr]

          gap-20"
        >

          {/* LEFT TEXT */}
          <div>

            <p
              className="
              text-[20px] md:text-[26px]

              leading-[1.7]

              tracking-[-0.03em]

              text-black/80"
            >
              HRIJU is more than a clothing label.
              It is a name with meaning.
            </p>

            <div className="mt-12 space-y-10">

              <p
                className="
                text-base md:text-[18px]

                leading-[2]

                text-black/55"
              >
                Built from a personal connection and transformed into a
                modern luxury streetwear brand, HRIJU represents
                individuality, confidence, and refined simplicity.
              </p>

              <p
                className="
                text-base md:text-[18px]

                leading-[2]

                text-black/55"
              >
                The brand blends premium streetwear aesthetics with clean
                design, elevated fabrics, and a calm but powerful visual
                identity.
              </p>

              <p
                className="
                text-base md:text-[18px]

                leading-[2]

                text-black/55"
              >
                We believe luxury is not about being loud.
                It is about how something feels.
              </p>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col justify-between">

            {/* CARD */}
            <div
              className="
              relative

              p-10 md:p-14

              bg-white/70
              backdrop-blur-xl

              border border-black/5

              overflow-hidden"
            >

              {/* LIGHT */}
              <div
                className="
                absolute top-[-120px] right-[-120px]

                w-[260px] h-[260px]

                bg-black/[0.03]

                blur-3xl

                rounded-full"
              />

              <p
                className="
                relative z-10

                text-[28px] md:text-[38px]

                font-light

                leading-[1.4]

                tracking-[-0.04em]

                text-black"
              >
                Clean visuals.
                <br />
                Premium construction.
                <br />
                Modern energy.
              </p>

            </div>

            {/* BOTTOM TEXT */}
            <div className="mt-12">

              <p
                className="
                text-[15px]

                uppercase

                tracking-[0.35em]

                text-black/35

                mb-5"
              >
                Philosophy
              </p>

              <p
                className="
                text-base md:text-[18px]

                leading-[2]

                text-black/55"
              >
                From oversized silhouettes and carefully selected
                materials to minimal detailing and dark visual direction,
                every HRIJU piece is designed to feel effortless,
                premium, and timeless.
              </p>

              <p
                className="
                mt-8

                text-base md:text-[18px]

                leading-[2]

                text-black/55"
              >
                Inspired by modern culture, fashion, architecture,
                and everyday emotion, HRIJU creates clothing that
                fits naturally into your identity rather than
                overpowering it.
              </p>

            </div>

          </div>

        </div>

        {/* BOTTOM STATEMENT */}
        <div
          className="
          mt-28

          pt-10

          border-t border-black/5"
        >

          <h2
            className="
            text-3xl md:text-5xl xl:text-6xl

            font-light

            tracking-[-0.05em]

            leading-[1.2]

            text-black

            max-w-[1000px]"
          >
            Some releases are limited.
            Some become essentials.
            But every piece is created with the same focus on quality,
            atmosphere, and timeless design.
          </h2>

          <p
            className="
            mt-10

            text-[14px]

            uppercase

            tracking-[0.4em]

            text-black/35"
          >
            Designed to feel elevated every day.
          </p>

        </div>

      </div>

    </section>
  );
};

export default About;