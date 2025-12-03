import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section id="contact" className="py-32 px-6" style={{ backgroundColor: "#253c80" }}>
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl md:text-6xl mb-6 tracking-tight text-white">
          Ready to Transform Your Business?
        </h2>
        <Button 
          className="text-white px-10 py-6 text-lg transition-all hover:scale-105"
          style={{ backgroundColor: "#3fbd9e" }}
        >
          Contact Us
          <ArrowRight className="ml-2" size={20} />
        </Button>
      </div>
    </section>
  );
}