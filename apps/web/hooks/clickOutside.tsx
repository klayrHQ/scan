"use client"

import {useEffect, useRef} from "react";

export const useClickOutside = (handler: () => void) => {
  const domNode = useRef();

  useEffect(() => {
    const targetHandler = (event: Event) => {
      // @ts-ignore
      if (!domNode.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", targetHandler);

    return () => {
      document.removeEventListener("mousedown", targetHandler);
    };
  });

  return domNode;
};