"use client";
import Image from "next/image";
import Link from "next/link";
import CountdownTimer from "./_components/countdowntimer";
import { motion } from "motion/react";
import { Separator } from "@/components/ui/separator";
import { TypewriterEffect } from "./_components/_ui/typewritereffect";
import VenueMap from "./_components/venuemap";

export default function Home() {
  const words = [
    {
      text: "'Marriage ",
      className:
        "font-amatic text-2xl font-semibold leading-8 tracking-tight text-slate-900",
    },
    {
      text: "is ",
      className:
        "font-amatic text-2xl font-semibold leading-8 tracking-tight text-slate-900",
    },
    {
      text: "the ",
      className:
        "font-amatic text-2xl font-semibold leading-8 tracking-tight text-slate-900",
    },
    {
      text: "beginning ",
      className:
        "font-amatic text-2xl font-semibold leading-8 tracking-tight text-slate-900",
    },
    {
      text: "of ",
      className:
        "font-amatic text-2xl font-semibold leading-8 tracking-tight text-slate-900",
    },
    {
      text: "a ",
      className:
        "font-amatic text-2xl font-semibold leading-8 tracking-tight text-slate-900",
    },
    {
      text: "lifetime ",
      className:
        "font-amatic text-2xl font-semibold leading-8 tracking-tight text-slate-900",
    },
    {
      text: "of ",
      className:
        "font-amatic text-2xl font-semibold leading-8 tracking-tight text-slate-900",
    },
    {
      text: "love, ",
      className:
        "font-amatic text-2xl font-semibold leading-8 tracking-tight text-slate-900",
    },
    {
      text: "laughter, ",
      className:
        "font-amatic text-2xl font-semibold leading-8 tracking-tight text-slate-900",
    },
    {
      text: "and ",
      className:
        "font-amatic text-2xl font-semibold leading-8 tracking-tight text-slate-900",
    },
    {
      text: "companionship.'",
      className:
        "font-amatic text-2xl font-semibold leading-8 tracking-tight text-slate-900",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex  w-full max-w-2xl flex-col items-center justify-between  bg-white dark:bg-black ">
        <div className="relative w-full max-w-2xl h-screen">
          <Image
            src="/landingpageimage.png"
            alt="Next.js logo"
            fill
            className="object-cover object-center max-h-screen"
          />
          {/* Bg Fade */}
          <div className="h-[50vh] max-w-2xl w-full bg-linear-to-b from-white/0 via-[#431D19]/50 to-[#431D19] absolute bottom-0"></div>
        </div>

        {/* Text */}
        <div className="z-30 absolute text-center bottom-20 flex flex-col items-center">
          <h1 className="text-white text-7xl font-amatic  ">
            Iniyaa <br />&<br /> Murali
          </h1>
          <p className="text-white font-mono text-sm font-light">25.05.2026</p>
        </div>

        {/*Reception */}
        <div className="h-screen w-full bg-[#431D19] flex flex-col justify-center items-center ">
          <motion.div
            key="1"
            initial={{ y: 150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{
              duration: 0.8,
              delay: 0.2, // for stagger
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="flex flex-col justify-center items-center px-10"
          >
            <div className="w-20 h-20 bg-white rounded-full ">
              <Image
                src="/logoiniyaamurali.png"
                alt="Next.js logo"
                height={80}
                width={80}
                priority
              />
            </div>
            <h2 className="text-white my-6">WEDDING RECEPTION</h2>
            <p className="text-white font-mono text-justify">
              Together with their families Iniyaa and Murli request the pleasure
              of your presence at their wedding celebration on 24th May, 2026 at
              6:00 PM at Ramani Shankar Mahal, Vellore. Your blessings and
              presence will make our day truly special.
            </p>
            <ul className="mt-4">
              <Link href="https://share.google/dreicjbAcbqKvGA17">
                <p className=" text-white font-mono text-justify">
                  Location Link:
                  <span className="text-blue-300">
                    {" "}
                    Ramani Shankar Mahal, Vellore
                  </span>
                </p>
              </Link>
              <li>
                <p className=" text-white font-mono text-justify">
                  Time : 06:00 PM
                </p>
              </li>
            </ul>

            {/* Date */}
            <div className="w-full h-46  mt-4 flex flex-col items-center">
              <h2 className="text-white">May</h2>
              <div className="w-full flex gap-6 justify-center my-4">
                <div className="border-y-2 border-white w-20 h-10">
                  <h3 className="text-white">Sunday</h3>{" "}
                </div>
                <h1 className="text-white text-6xl -mt-3">24th</h1>
                <div className="border-y-2 w-20 h-10 border-white">
                  {" "}
                  <h3 className="text-white">2026</h3>{" "}
                </div>
              </div>
              <h2 className="text-white">06:00 PM</h2>
            </div>
          </motion.div>
        </div>
        {/* Muhurtham*/}
        <motion.div
          key="muhurtham"
          initial={{ y: 150, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{
            duration: 0.8,
            delay: 0.2, // for stagger
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <div className="h-screen w-full bg-white flex flex-col justify-center items-center my-6">
            <Image
              src="/logoiniyaamurali.png"
              alt="Next.js logo"
              height={80}
              width={80}
              priority
            />
            <h2 className="text-[#431D19] mt-2 mb-4">WEDDING - (MUHURTHAM)</h2>
            <p className="text-[#431D19] font-mono text-justify px-10">
              With the blessings of our families, we invite you to witness the
              sacred wedding rituals and celebrate the beginning of our forever
            </p>
            <ul className="mt-4">
              <Link href="https://share.google/dreicjbAcbqKvGA17">
                <p className=" text-[#431D19] font-mono text-justify">
                  Location Link:
                  <span className="text-blue-300"> Ramani Shankar Mahal</span>
                </p>
              </Link>
              <li>
                <p className=" text-[#431D19] font-mono text-justify">
                  Time : 06:00 PM
                </p>
              </li>
            </ul>

            {/* Date */}
            <div className="w-full h-46  mt-4 py-2 flex flex-col items-center bg-red-100">
              <h2 className="text-[#431D19]">May</h2>
              <div className="w-full flex gap-6 justify-center my-4">
                <div className="border-y-2 border-[#431D19] w-20 h-10">
                  <h3 className="text-[#431D19]">Sunday</h3>{" "}
                </div>
                <h1 className="text-[#431D19] text-6xl -mt-3">25th</h1>
                <div className="border-y-2 w-20 h-10 border-[#431D19]">
                  {" "}
                  <h3 className="text-[#431D19]">2026</h3>{" "}
                </div>
              </div>
              <h2 className="text-[#431D19]">09:00 AM</h2>
            </div>
            <motion.div
              key="1"
              initial={{ y: 150, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{
                duration: 0.8,
                delay: 0.2, // for stagger
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="flex flex-col justify-center items-center mt-6"
            >
              <CountdownTimer
                weddingDate={new Date("2026-05-25T09:00:00").getTime()}
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Image */}
        <section>
          {/* Separator */}
          <div className={"bg-[#431D19] h-px w-[80%] mx-auto my-10 "} />
          <div className="max-h-screen h-full w-full bg-white">
            <div className="w-full h-full flex flex-col  items-center  px-10">
              <Image
                src="/logoiniyaamurali.png"
                alt="Next.js logo"
                height={100}
                width={100}
                priority
                className="h-15 w-auto"
              />
              <Image
                className="mt-4 h-auto w-auto"
                src="/landingpageimage2.png"
                alt="Next.js logo"
                height={200}
                width={300}
                priority
              />
              {/* <h3 className="text-black mt-8 text-justify">
                “Marriage is the beginning of a lifetime of love, laughter, and
                companionship.”
              </h3> */}
              <TypewriterEffect
                words={words}
                className={"text-black mt-8 text-justify"}
              />
            </div>
          </div>
        </section>

        {/* RSVP */}
        {/* <section>
          <div className="max-h-screen w-full bg-[#431D19] flex flex-col items-center mt-10 px-10 py-10">
            <div className={"bg-white h-px w-[80%] mx-auto my-6"} />
            <h1 className="text-white mb-4">RSVP</h1>
            <Link href={"/rsvp"}>
              <Image
                src="/envelope.png"
                alt="Next.js logo"
                height={200}
                width={400}
                priority
                className="w-full h-auto my-4"
              />
            </Link>
            <p className="text-white font-mono text-justify px-4">
              Your presence means the world to us. Please let us know if you’ll
              be joining the celebration.
            </p>
          </div>
        </section> */}

        {/* Map */}
        <section>
          {/* Separator */}
          <div className={"bg-[#431D19] h-px w-[80%] mx-auto mt-20 "} />
          <div className="max-h-screen w-full bg-white flex flex-col items-center  px-10">
            <VenueMap />
          </div>
        </section>

        {/* Program */}
        <div className="h-auto w-full bg-[#431D19] mt-20 flex flex-col justify-center items-center py-20">
          {/* Separator */}
          <div className={"bg-white h-px w-[80%] mx-auto my-10"} />
          <div className="w-20 h-20 bg-white flex items-center justify-center rounded-full mb-4">
            <Image
              src="/logoiniyaamurali.png"
              alt="Next.js logo"
              height={100}
              width={100}
              priority
              className="h-15 w-auto"
            />
          </div>
          <h1 className="text-white mb-10">WEDDING EVENTS</h1>
          <h2 className="text-white">24th March</h2>
          <div className="mb-10">
            <div className="flex gap-4">
              <h3 className="text-white"> 04:00 PM</h3>{" "}
              <div className="border-l-2 h-6" />{" "}
              <h3 className="text-white">Engagement</h3>
            </div>
            <div className="flex gap-4">
              <h3 className="text-white"> 06:00 PM</h3>{" "}
              <div className="border-l-2 h-6" />{" "}
              <h3 className="text-white">Reception</h3>
            </div>
          </div>
          <h2 className="text-white">25th March</h2>
          <div>
            <div className="flex gap-4">
              <h3 className="text-white"> 09:00 AM</h3>{" "}
              <div className="border-l-2 h-6" />{" "}
              <h3 className="text-white">Muhurtham</h3>
            </div>
          </div>
          {/* Separator */}
          <div className={"bg-white h-0.5 w-[80%] mx-auto my-10 "} />

          <h3 className="text-white px-10 text-center tracking-wider">
            “Love grows deeper when shared with family and cherished friends.”
          </h3>
        </div>
      </main>
    </div>
  );
}
