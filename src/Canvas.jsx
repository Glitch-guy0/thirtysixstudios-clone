import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import canvasImages from "./canvasimages";

export default function Canvas({ startIndex }) {
  const canvasRef = useRef(null);
  const [index, setIndex] = useState({ value: startIndex });

  useGSAP(
    () =>
      gsap.to(index, {
        value: startIndex+149,
        repeat: -1,
        duration: 3,
        ease: "linear",
        onUpdate: () => setIndex({ value: Math.round(index.value) }),
      })
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const image = new Image();
    image.src = canvasImages[index.value];
    image.onload = () => {
      canvas.width = image.width;
      canvas.height = image.height;
      context.drawImage(image, 0, 0);
    };
  }, [index]);

  return <canvas ref={canvasRef} id="canvas" className="size-[22rem]"></canvas>;
}

