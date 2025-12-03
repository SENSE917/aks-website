import { Services as ServicesSection } from "../components/Services";
import { Check } from "lucide-react";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function ServicesPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-32 px-6" style={{ 
        background: "linear-gradient(135deg, #253c80 0%, #3fbd9e 100%)" 
      }}>
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-7xl mb-6 tracking-tight text-white">
            Our Services
          </h1>
          <p className="text-lg md:text-2xl text-white/80 leading-relaxed">
            Comprehensive solutions tailored to transform your business through technology and strategic procurement
          </p>
        </div>
      </section>

      <ServicesSection />

      {/* Why Choose Us Section */}
      <section className="py-32 px-6" style={{ backgroundColor: "#253c80" }}>
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl mb-6 tracking-tight text-white">
              Why Choose Us
            </h2>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              We deliver excellence through innovation, expertise, and dedication
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Industry Expertise",
                description: "Over a decade of experience serving global enterprises across multiple industries"
              },
              {
                title: "Cost Efficiency",
                description: "Proven track record of reducing operational costs while improving performance"
              },
              {
                title: "24/7 Support",
                description: "Round-the-clock technical support to ensure your operations never stop"
              },
              {
                title: "Scalable Solutions",
                description: "Flexible services that grow with your business needs"
              },
              {
                title: "Innovation Driven",
                description: "Leveraging cutting-edge technology to keep you ahead of the curve"
              },
              {
                title: "Trusted Partnership",
                description: "Building long-term relationships based on transparency and results"
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-4" style={{ backgroundColor: "#3fbd9e" }}>
                  <Check size={24} className="text-white" />
                </div>
                <h3 className="text-xl md:text-2xl mb-3 text-white">
                  {item.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6" style={{ backgroundColor: "#3fbd9e" }}>
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-6xl mb-6 tracking-tight text-white">
            Let's Build Something Great
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-12 leading-relaxed max-w-2xl mx-auto">
            Get in touch with our team to discuss how we can help transform your business
          </p>
          <Link to="/contact">
            <Button 
              className="text-white px-10 py-6 text-lg transition-all hover:scale-105 border-2 border-white hover:bg-white"
              style={{ backgroundColor: "transparent" }}
            >
              Get Started
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}