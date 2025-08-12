"use client";
import { Card, Carousel } from "@/components/projects/projectCarousel";
import { data } from "@/components/projects/projectData";


export default function AllProjects() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} layout={true} />
  ));
  console.log(data[0]);

  return (
    <div className="w-full h-full pt-8">
      <Carousel items={cards} />
    </div>
  );
}