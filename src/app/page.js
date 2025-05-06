"use client";
import Image from "next/image";
import dynamic from "next/dynamic";
import Hero from "./components/Hero";
import ErrorBoundary from "./components/ErrorBoundary"; // Ensure correct case

function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <ErrorBoundary>
        <Hero heroName="Batman" />
      </ErrorBoundary>

      <ErrorBoundary>
        <Hero heroName="Superman" />
      </ErrorBoundary>

      <ErrorBoundary>
        <Hero heroName="Joker" />
      </ErrorBoundary>
    </div>
  );
}

export default Home;
