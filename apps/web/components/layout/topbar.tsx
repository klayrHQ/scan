"use client"
import React, {ReactNode, useEffect, useRef, useState} from "react";
import {cls} from "ui/utils";

interface TopBarClientProps {
  children: ReactNode | ReactNode[]
}

export const TopBarClient = ({
                         children,
                       }: TopBarClientProps) => {
  const [isStuck, setIsStuck] = useState(false);
  const stickyRef = useRef(null);

  useEffect(() => {
    const cachedRef = stickyRef.current

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsStuck(entry.intersectionRatio < 1);
      },
      {threshold: [1],},
    );

    if (cachedRef) {
      observer.observe(cachedRef);
    }

    return () => {
      if (cachedRef) {
        observer.unobserve(cachedRef);
      }
    };
  }, []);

  return (
    <div
      className={cls([
        "z-50 w-full mb-8 sticky tablet:static -top-0",
        " transition-all duration-200"
      ])}
      ref={stickyRef}
    >
      {children}
    </div>
  )
}
