"use client";
import React, { useState, useEffect, useMemo } from "react";

type ImageSize = {
  width: number;
  height: number;
};

export default function Events() {
  const events = useMemo(
    () => [
      {
        title: "AI & Human Augmentation Expo",
        image: "/event_1.png",
        button: "More Info",
      },
      {
        title: "Product Launch and Demo Event",
        image: "/event_2.png",
        button: "Book Now",
      },
      {
        title: "Blockchain & Fintech",
        image: "/event_4.png",
        button: "Click Here",
        date: "02 JAN 2024",
      },
      {
        title: "Product Launch and Demo Event",
        image: "/event_3.png",
        button: "Book Now",
      },
      {
        title: "Blockchain & Fintech",
        image: "/event_4.png",
        button: "Click Here",
        date: "02 JAN 2024",
      },
      {
        title: "Blockchain & Fintech",
        image: "/event_1.png",
        button: "Click Here",
        date: "02 JAN 2024",
      },
    ],
    []
  );

  const [imageSizes, setImageSizes] = useState<ImageSize[]>([]);

  useEffect(() => {
    const calculateImageSizes = async () => {
      const sizes = await Promise.all(
        events.map(
          (event) =>
            new Promise<ImageSize>((resolve) => {
              const img = new Image();
              img.src = event.image;
              img.onload = () => {
                resolve({
                  width: img.naturalWidth,
                  height: img.naturalHeight,
                });
              };
            })
        )
      );
      setImageSizes(sizes);
    };

    calculateImageSizes();
  }, [events]);

  return (
    <div className="relative bg-gradient-bg min-h-screen">
      {/* Title Section */}
      <div className="flex items-center justify-start px-8 pt-36 pl-36">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight bg-clip-text text-transparent bg-text-gradient-sub max-w-lg">
          | Events
        </h1>
      </div>

      {/* Events Grid */}
      <div className="flex flex-wrap justify-center gap-10 mt-10 px-8">
        {events.map((event, index) => {
          const size = imageSizes[index];
          return (
            size && (
              <div
                key={index}
                className="relative rounded-xl shadow-lg overflow-hidden"
                style={{
                  width: `${size.width}px`,
                  height: `${size.height}px`,
                  backgroundImage: `url(${event.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                {/* Event Details */}
                <div className="absolute bottom-4 left-4 text-white z-10">
                  <h2 className="text-xl font-bold mb-2">{event.title}</h2>
                  {event.date && (
                    <p className="text-sm font-medium">{event.date}</p>
                  )}
                  <button className="mt-2 px-4 py-2 bg-black bg-opacity-80 rounded-md hover:bg-opacity-100">
                    {event.button}
                  </button>
                </div>
              </div>
            )
          );
        })}
      </div>
    </div>
  );
}
