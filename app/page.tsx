'use client';  // <-- add this line at the top
import AboutPage from "@/components/LandingPage/AboutPage";
import HomeSection from "@/components/LandingPage/Home";
import Navbar from "@/components/LandingPage/Navbar";
import Skills from "@/components/LandingPage/Skills";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "../components/ui/stars-background";
export default function Home() {
  return (
    <>
      <Navbar />
      <ShootingStars className="z-0 pointer-events-none" />
      <StarsBackground className="z-0 pointer-events-none" />
      <HomeSection />
      
      <AboutPage />
      <Skills />
    </>
  );
}
