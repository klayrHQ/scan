"use client"
import {MutableRefObject, useEffect, useRef, useState} from "react"

export const useIsStuck = (offset = 0): [boolean, MutableRefObject<HTMLDivElement | null>] => {
  const [isStuck, setIsStuck] = useState<boolean>(false);
  const stickyRef = useRef<HTMLDivElement>(null);

  const calcPixels = (twNumber: number, remSize: number = 16, twNumberSize: number = 0.25) => {
    return (twNumber * twNumberSize) * remSize;
  }

  useEffect(() => {
    const handleScroll = () => {
      const element = stickyRef.current;
      if (element) {
        const { top } = element.getBoundingClientRect();
        setIsStuck(top <= calcPixels(offset));
      }
    };

    // Attach the event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return [isStuck, stickyRef]
}