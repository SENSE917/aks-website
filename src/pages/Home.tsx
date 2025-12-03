import { Hero } from "../components/Hero";
import { Stats } from "../components/Stats";
import { Button } from "../components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import fotoAks from "../assets/FotoAKS.png";

export function Home() {
  return (
    <div>
      <Hero />
      
      {/* About Section */}
      <section className="py-32 px-6" style={{ backgroundColor: "#253c80" }}>
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl mb-6 tracking-tight text-white">
                Who We Are
              </h2>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 text-justify">
                Arda Karya Sinergy is a leading technology and procurement company dedicated to providing innovative solutions that maximize your investments with effectiveness, efficiency, and practical business concepts.
              </p>
              <p className="text-lg text-white/72 leading-relaxed mb-8 text-justify">
                We specialize in delivering comprehensive IT infrastructure, e-commerce solutions, information management systems, and strategic procurement services to help businesses thrive in the digital era.
              </p>
              <Link to="/about">
                <Button 
                  className="text-white px-8 py-6 text-lg transition-all hover:scale-105"
                  style={{ backgroundColor: "#3fbd9e" }}
                >
                  Learn More About Us
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <img 
                src={fotoAks}
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <Stats />

      {/* CTA Section */}
      <section className="py-32 px-6" style={{ backgroundColor: "#3fbd9e" }}>
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-6xl mb-6 tracking-tight text-white">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-12 leading-relaxed max-w-2xl mx-auto">
            Join hundreds of companies already using Arda Karya Sinergy to streamline their technology procurement and maximize efficiency.
          </p>
          <Link to="/contact">
            <Button 
              className="text-white px-10 py-6 text-lg transition-all hover:scale-105 border-2 border-white hover:bg-white"
              style={{ backgroundColor: "transparent" }}
            >
              Contact Us
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
