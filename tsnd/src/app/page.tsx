"use client";
import React from "react";
import { FloatingNav } from "../components/ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import { Vortex } from "../components/ui/vortex";
import { BackgroundBeams } from "../components/ui/background-beams";
import { StickyScroll } from "../components/ui/sticky-scroll-reveal";
import Image from "next/image";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { PlaceholdersAndVanishInput } from "../components/ui/placeholders-and-vanish-input";
import { cn } from "@/lib/utils";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";

export function FloatingNavDemo() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact Us ",
      link: "/#contact-us",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About Us",
      link: "/#about-us",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
export function VortexDemo() {
  return (
    <div className="w-full h-screen mx-auto overflow-hidden">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
          Your Stars, Your Destiny.
        </h2>
        <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
          Revolutionizing astrology with technology to bring clarity and
          insights into your life.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Get Started
            </span>
          </button>
          <button className="px-4 py-2  text-white "></button>
        </div>
      </Vortex>
    </div>
  );
}
export function BackgroundBeamsDemo() {
  return (
    <div  id="about-us" className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4 ">
        <h1 className="relative z-10  mb-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          About Us
        </h1>
        <p></p>
        <p className="text-neutral-400 max-w-lg mx-auto  text-sm text-center relative z-10">
          At SoulBuddy, we blend the timeless art of astrology with cutting-edge
          AI technology to bring personalized insights directly to you. Our
          mission is to guide you in discovering your true potential, making
          informed decisions, and navigating life’s challenges with clarity and
          confidence. With a focus on innovation and authenticity, we aim to
          make astrology accessible, empowering, and meaningful for everyone.
        </p>
      </div>
      <BackgroundBeams />
    </div>
  );
}
const content = [
  {
    title: "Personalized Horoscope Predictions",
    description:
      "Receive daily, weekly, or monthly horoscope readings based on your birth details. Our AI analyzes your astrological chart to offer tailored insights, considering planetary movements and transits.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white rounded-lg">
        <Image
          src="/images/horoscope.png"
          width={300}
          height={300}
          className="h-full w-full object-cover rounded-lg"
          alt="numerology insights"
        />
      </div>
    ),
  },
  {
    title: "Numerology Insights",
    description:
      "Discover the hidden meanings behind your name, birthdate, and other personal details. Our numerology AI analyzes your life path, expression number, and soul urge to provide personalized predictions and advice.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/images/numerology.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="numerology insights"
        />
      </div>
    ),
  },
  {
    title: "Personalized Kundli Generation",
    description:
      "Generate your personal Kundli (birth chart) based on your date, time, and place of birth. Our AI calculates and interprets key aspects of your life, such as career, relationships, health, and more.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/images/kundli.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="numerology insights"
        />
      </div>
    ),
  },
  {
    title: "Astrological Compatibility Analysis",
    description:
      "Find out how compatible you are with your partner or friends by comparing your astrological charts. Our AI evaluates sun signs, moon signs, and ascendants to give you insights into relationship dynamics.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/images/astrology.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="numerology insights"
        />
      </div>
    ),
  },
];

export function StickyScrollRevealDemo() {
  return (
    <div className="p-4">
      <h1 className="relative z-10  text-lg md:text-5xl mb-10  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
        Why choose us?
      </h1>
      <StickyScroll content={content} />
    </div>
  );
}

export function SignupFormDemo() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <div className="max-w-md w-full mx-auto mb-12 rounded-none md:rounded-2xl mt-12 p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 id="contact-us" className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        have a doubt? ask us
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        
      </p>
 
      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input id="firstname" placeholder="Enter you first Name" type="text" />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input id="lastname" placeholder="Enter your last Name" type="text" />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="Enter your email address " type="email" />
        </LabelInputContainer>
        
        <LabelInputContainer className="mb-8">
          <Label htmlFor="text">Enter Your Question</Label>
          <Input
            id="question"
            placeholder="your Question"
            type="question"
          />
        </LabelInputContainer>
 
        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white  rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Ask &rarr;
          <BottomGradient />
        </button>
      </form>
    </div>
  );
}
 
const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};
 
const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "SoulBuddy's readings are incredibly accurate! The birth chart analysis helped me understand myself better.",
      name: "Tabish ahemad",
      designation: "Product Manager at TechFlow",
      src: "/images/man1.jpg",
    },
    {
      quote:
        "I found the Kundli on SoulBuddy really insightful. It helped me strengthen my carrer.",
      name: "Rajesh singh",
      designation: "CTO at InnovateSphere",
      src: "/images/man2.jpg",
    },
    {
      quote:
        "The daily horoscopes on SoulBuddy are spot on and guide me through my day. A must-try!",
      name: "Pradeep Rattan",
      designation: "Operations Director at CloudScale",
      src: "/images/man3.jpg",
    },
    
  ];
  return (
    <>
    <h1 className="relative z-10  text-lg md:text-5xl    bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
        what our customers say?
      </h1>
      <AnimatedTestimonials testimonials={testimonials} />
    </>
  );
}

export function PlaceholdersAndVanishInputDemo() {
  const placeholders = [
    "Unlock your cosmic insights—enter your email!",
    "Get your star-studded updates delivered!",
    "Sign up and align with the universe!",
    "Your horoscope awaits—don’t miss it!",
    "Discover what the stars have in store for you!",
  ];
 
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <div className="h-[40rem] flex flex-col justify-center  items-center px-4">
      <h2 className="mb-10 sm:mb-20 text-xl text-center sm:text-5xl dark:text-white text-black">
        Subscribe to our newsletter
      </h2>
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
    </div>
  );
}

export default function Home() {
  return (
    <>
      <FloatingNavDemo />
      <VortexDemo />
      <BackgroundBeamsDemo />
      <StickyScrollRevealDemo />
      <SignupFormDemo />
      <AnimatedTestimonialsDemo />
      <PlaceholdersAndVanishInputDemo/>
    </>
  );
}
