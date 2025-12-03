import { Features } from "../components/Features";
import { Users, Target, Award, Globe } from "lucide-react";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function About() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-32 px-6" style={{ 
        background: "linear-gradient(135deg, #253c80 0%, #3fbd9e 100%)" 
      }}>
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-7xl mb-6 tracking-tight text-white">
            About Us
          </h1>
          <p className="text-lg md:text-2xl text-white/80 leading-relaxed">
            Empowering businesses with innovative technology and strategic procurement solutions
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-32 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW18ZW58MHx8fHwxNzMyNDU2Nzg5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Our team"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-6xl mb-6 tracking-tight" style={{ color: "#253c80" }}>
                Our Profile
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                PT Arda Karya Sinergy (AKS) is an information technology company that provides innovative digital solutions, including Display Solution, Smart Systems, and IT infrastructure to support digital transformation across industries.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Our mission is to provide innovative solutions that maximize investments with effectiveness, efficiency, and practical business concepts. We believe in building long-term partnerships based on trust, transparency, and measurable results.
              </p>
              
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 px-6" style={{ backgroundColor: "#3fbd9e" }}>
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl mb-6 tracking-tight text-white">
              Our Values
            </h2>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                icon: Target,
                title: "Adaptibility",
                description: "We embrace change with confidence and agility. In a rapidly evolving digital landscape, AKS remains flexible continuously learning, evolving, and innovating to meet the needs of clients and the demands of technology."
              },
              {
                icon: Award,
                title: "Kindness",
                description: "We believe that success begins with empathy and respect. Kindness drives our teamwork, customer relationships, and corporate culture, ensuring every collaboration is built on trust and genuine care."
              },
              {
                icon: Users,
                title: "Synergy",
                description: "We value collaboration as the key to sustainable growth. By aligning the strengths of our people, partners, and technology, AKS creates unified solutions that generate greater impact and shared success."
              },
              
            ].map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-6">
                    <Icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl mb-4 text-white">
                    {value.title}
                  </h3>
                  <p className="text-white/80 leading-relaxed text-lg">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Vision and Mission Section */}
      <section className="py-32 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Vision */}
            <div className="text-center md:text-left">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6" style={{ backgroundColor: "#253c80" }}>
                <Target size={32} className="text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl mb-6 tracking-tight" style={{ color: "#253c80" }}>
                Vision
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To become the leading provider of digital technology solutions that drive digital transformation across key sectors in Indonesia
              </p>
            </div>

            {/* Mission */}
            <div className="text-center md:text-left">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6" style={{ backgroundColor: "#3fbd9e" }}>
                <Globe size={32} className="text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl mb-6 tracking-tight" style={{ color: "#253c80" }}>
                Mission
              </h2>
              <ul className="space-y-4">
                <li className="text-lg text-gray-600 leading-relaxed flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ backgroundColor: "#3fbd9e" }}></span>
                  <span>Deliver innovative, efficient, and user-friendly digital display solutions for the education, healthcare, retail, and other sectors.</span>
                </li>
                <li className="text-lg text-gray-600 leading-relaxed flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ backgroundColor: "#3fbd9e" }}></span>
                  <span>Develop a competitive, solution-oriented sales and service team that focuses on real client needs.</span>
                </li>
                <li className="text-lg text-gray-600 leading-relaxed flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{ backgroundColor: "#3fbd9e" }}></span>
                  <span>Actively contribute to building a sustainable national digital ecosystem that creates real impact.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Features />
    </div>
  );
}