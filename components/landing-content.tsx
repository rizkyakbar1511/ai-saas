"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Muhammad Rizki Akbar",
    avatar: "M",
    title: "Front End Developer",
    description: "This is the best application I've used!",
  },
  {
    name: "Dandi Prayogi",
    avatar: "D",
    title: "Graphic Designer",
    description: "This tools help me improve my design",
  },
  {
    name: "Syamsul Hadi",
    avatar: "S",
    title: "Back End Developer",
    description: "it's help me to improve my coding skill",
  },
  {
    name: "Panji Gumilar",
    avatar: "P",
    title: "Back End Developer",
    description: "This is the best application I've used!",
  },
];

const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="mb-10 text-4xl font-extrabold text-center text-white">Testimonials</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {testimonials.map((item) => (
          <Card className="bg-[#192339] border-none text-white" key={item.description}>
            <CardHeader className="pb-4">
              <CardTitle className="flex gap-x-2">
                <Avatar>
                  <AvatarImage src="" />
                  <AvatarFallback className="bg-[#2d3436]">{item.avatar}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="overflow-hidden text-lg sm:w-32 text-ellipsis whitespace-nowrap">{item.name}</p>
                  <p className="text-sm text-zinc-400">{item.title}</p>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">{item.description}</CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default LandingContent;
