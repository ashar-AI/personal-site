import React from "react";
import { LayoutGrid } from "@/components/ui/layout-grid";

// Photography content components
const PhotoContent1 = () => (
  <div>
    <p className="font-bold md:text-4xl text-xl text-white">Mountain Vista</p>
    <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Captured during a sunrise hike in the Rocky Mountains. The golden hour light
      creates a magical atmosphere across the peaks.
    </p>
  </div>
);

const PhotoContent2 = () => (
  <div>
    <p className="font-bold md:text-4xl text-xl text-white">Ocean Serenity</p>
    <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Early morning waves at the Pacific coast. The calm before the day begins,
      with gentle waves reflecting the sky.
    </p>
  </div>
);

const PhotoContent3 = () => (
  <div>
    <p className="font-bold md:text-4xl text-xl text-white">Forest Path</p>
    <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Autumn colors illuminate this hidden trail. Nature's carpet of leaves
      creates a perfect pathway through the woods.
    </p>
  </div>
);

const PhotoContent4 = () => (
  <div>
    <p className="font-bold md:text-4xl text-xl text-white">Lake Reflection</p>
    <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Mirror-like waters capture the surrounding landscape. A moment of perfect
      stillness in nature's embrace.
    </p>
  </div>
);

const PhotoContent5 = () => (
  <div>
    <p className="font-bold md:text-4xl text-xl text-white">Urban Sunset</p>
    <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      City lights begin to twinkle as the sun sets behind the skyline.
      The perfect blend of urban and natural beauty.
    </p>
  </div>
);

const PhotoContent6 = () => (
  <div>
    <p className="font-bold md:text-4xl text-xl text-white">Desert Dreams</p>
    <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Vast expanses of sand dunes create patterns that shift with the wind.
      A landscape of solitude and infinite beauty.
    </p>
  </div>
);

// Photo cards data
const cards = [
  {
    id: 1,
    content: <PhotoContent1 />,
    className: "md:col-span-2",
    thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    content: <PhotoContent2 />,
    className: "col-span-1",
    thumbnail: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    content: <PhotoContent3 />,
    className: "col-span-1",
    thumbnail: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    content: <PhotoContent4 />,
    className: "md:col-span-2",
    thumbnail: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    content: <PhotoContent5 />,
    className: "col-span-1",
    thumbnail: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    content: <PhotoContent6 />,
    className: "col-span-1",
    thumbnail: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export function PhotographyGallery() {
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
          Photography Gallery
        </h1>
        <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto">
          A collection of moments captured through my lens. Click on any image to explore the story behind it.
        </p>
      </div>
      <LayoutGrid cards={cards} />
    </div>
  );
}
