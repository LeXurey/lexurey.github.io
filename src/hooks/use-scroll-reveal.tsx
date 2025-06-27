"use client";

import { useEffect, useRef, useState } from "react";

export const useScrollReveal = (
  threshold = 0.1,
  rootMargin = "0px 0px -50px 0px"
) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once visible, we can disconnect the observer for performance
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, rootMargin]);

  return { ref, isVisible };
};

export const useScrollRevealMultiple = (
  threshold = 0.1,
  rootMargin = "0px 0px -50px 0px"
) => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  const setRef = (index: number) => (element: HTMLDivElement | null) => {
    refs.current[index] = element;
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = refs.current.findIndex((ref) => ref === entry.target);
            if (index !== -1) {
              setVisibleItems((prev) => {
                const newSet = new Set(prev);
                newSet.add(index);
                return newSet;
              });
              observer.unobserve(entry.target);
            }
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    refs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      refs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, [threshold, rootMargin]);

  const isVisible = (index: number) => visibleItems.has(index);

  return { setRef, isVisible };
};
