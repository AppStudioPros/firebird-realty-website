"use client";
import { useEffect, useRef, ReactNode } from "react";

export default function HeadingUnderline({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const heading = el.querySelector(".heading-underline");
          if (heading) heading.classList.add("animated");
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ marginBottom: 16 }}>
      <div className="heading-underline">{children}</div>
    </div>
  );
}
