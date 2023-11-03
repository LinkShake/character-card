"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface PicsDisplayerProps {
  profilePictures: string[];
  alt?: string;
}

export const PicsDisplayer: React.FC<PicsDisplayerProps> = ({
  profilePictures,
  alt,
}) => {
  const [activePicture, setActivePicture] = useState<number>(0);

  useEffect(() => {
    const pics = [
      document.getElementById("picture_0"),
      document.getElementById("picture_1"),
      document.getElementById("picture_2"),
    ];

    pics.forEach((pic, i) => {
      pic.style.transform = `translateX(-${100 * i}%)`;
    });
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePicture(
        activePicture >= 0 && activePicture < profilePictures.length - 1
          ? activePicture + 1
          : 0
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [activePicture, profilePictures.length]);

  return (
    <div
      style={{
        maxWidth: "225px",
        overflowX: "hidden",
        display: "flex",
      }}
    >
      {profilePictures.map((picRef: string, idx) => {
        return (
          <Image
            key={idx}
            src={picRef}
            width={225}
            height={225}
            style={{
              borderRadius: "50%",
              transition: "2s",
              width: "100%",
              objectFit: "cover",
              opacity: activePicture === idx ? 1 : 0,
            }}
            id={"picture_" + idx}
            alt={alt as string}
          />
        );
      })}
    </div>
  );
};
