import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

export const HeroSection: React.FC = () => {
  return (
    <section className="fw-full max-w-5xl flex items-center justify-center px-4 sm:px-6 lg:px-24 ">
      <div className="container mx-auto text-center py-16">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6  drop-shadow-lg">
          Your AI-Powered Culinary Assistant
        </h1>
        <p className="text-sm md:text-lg mb-8 text-gray-700 dark:text-gray-100 drop-shadow">
          Discover recipes, get cooking tips, and explore the world of
          gastronomy with Gastro
        </p>
        <Button className=" border-2 text-xl font-bold tracking-wide py-6 px-8 rounded-xl my-10 transition duration-300 ease-in-out hover:scale-105">
          <Link href={"/generate"}>Get Started for Free</Link>
        </Button>
      </div>
    </section>
  );
};
