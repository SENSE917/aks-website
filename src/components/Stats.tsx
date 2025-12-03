import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 100, label: "Tech Talents" },
  { value: 100, label: "Projects Done" },
  { value: 100, label: "Enterprise Customers" },
  { value: 100, label: "Overseas Clients" }
];

// Count-up hook that runs only once when element is visible
function useCountUpOnView(target: number, duration = 8000) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          let start = 0;
          const step = Math.ceil(target / (duration / 16));

          const timer = setInterval(() => {
            start += step;
            if (start >= target) {
              start = target;
              clearInterval(timer);
            }
            setCount(start);
          }, 16);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration, hasAnimated]);

  return { count, ref };
}

export function Stats() {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: "#3fbd9e" }}>
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-16">

          {stats.map((stat, index) => {
            const { count, ref } = useCountUpOnView(stat.value);

            return (
              <div key={index} className="text-center">
                
                {/* Elegant stroked 3D text (no glow) */}
                <div
                  ref={ref}
                  className="
                    text-white
                    text-5xl md:text-6xl font-extrabold mb-3 tracking-tight
                  "
                  style={{
                    // Elegant text-stroke with subtle depth
                    WebkitTextStroke: "2px rgba(255,255,255,0.35)",
                    textShadow: `
                      1px 1px 0px rgba(0,0,0,0.25),
                      2px 2px 4px rgba(0,0,0,0.25)
                    `
                  }}
                >
                  {count}
                </div>

                <div className="text-sm md:text-base text-white/90 uppercase tracking-widest">
                  {stat.label}
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}