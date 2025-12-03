import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ChevronDown } from "lucide-react";
import fotoAks from "../assets/FotoAKS.png";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden flex items-center">
      {/* Full-screen Background Image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src={fotoAks}
          alt="Arda Karya Sinergy"
          className="w-full h-full object-cover"
        />
        {/* Lighter gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#253c80dd] to-[#3fbd9ecc]"></div>
</div>
      
      {/* Content */}
      <div className="relative w-full py-32 flex items-center justify-center text-center px-6">
        <div className="max-w-5xl">
          <h1 className="text-white text-5xl md:text-7xl lg:text-8xl mb-8 tracking-tight">
            Arda Karya Sinergy
          </h1>
          <p className="text-white/90 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed text-justify">
            Our company is ready to compete with companies in the same field because we provide solutions and assist clients in maximizing their investments. We also ensure the effectiveness and efficiency of strategically targeted costs. We also implement practical business concepts to actualize them into real-world outcomes.
          </p>
        </div>
      </div>

      
    </section>
  );
}