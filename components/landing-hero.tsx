"use client";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import TypewriterComponent from "typewriter-effect";
import { Button } from "@/components/ui/button";

const LandingHero = () => {
  const { isSignedIn } = useAuth();
  return (
    <div className="space-y-5 font-bold text-center text-white py-36">
      <div className="space-y-5 text-4xl font-extrabold sm:text-5xl md:text-6xl lg:text-7xl">
        <h1>The Best AI Tool for</h1>
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          <TypewriterComponent
            options={{
              strings: ["Chatbot.", "Image Generation.", "Music Generation.", "Code Generation.", "Video Generation."],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className="text-sm font-light md:text-xl text-zinc-400">Create content using AI 10x faster.</div>
      <div>
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button className="p-4 font-semibold rounded-full md:text-lg" variant="premium">
            Start Generating For Free
          </Button>
        </Link>
      </div>
      <div className="text-xs font-normal text-zinc-400 md:text-sm">No credit card required.</div>
    </div>
  );
};

export default LandingHero;
