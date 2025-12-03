import { GraduationCap, Heart, ShoppingBag, Monitor, Radio, Building2, Briefcase } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const services = [
  {
    icon: GraduationCap,
    title: "Smart Education",
    description: "A technology-driven learning ecosystem that integrates digital tools, data, and interactive platforms to enhance teaching, learning, and school management. It promotes personalized learning, collaboration, and efficiency, creating a more engaging and future-ready educational environment.",
    image: "https://images.unsplash.com/photo-1758270704534-fd9715bffc0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGNsYXNzcm9vbSUyMGVkdWNhdGlvbiUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYzOTc2NTY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    icon: Heart,
    title: "Smart Hospital",
    description: "A technology-integrated healthcare system that leverages digital solutions, data analytics, and automation to improve patient care, operational efficiency, and decision-making. It connects people, processes, and devices to create a safer, more responsive, and patient-centered hospital environment.",
    image: "https://images.unsplash.com/photo-1560306990-18fa759c8713?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3NwaXRhbCUyMGhlYWx0aGNhcmUlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MzkxOTM5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    icon: ShoppingBag,
    title: "Smart Retail",
    description: "A technology-enabled retail ecosystem that utilizes digital tools, data analytics, and automation to enhance customer experience, streamline operations, and optimize sales performance. It combines online and offline strategies to create a seamless, personalized, and efficient shopping experience.",
    image: "https://images.unsplash.com/photo-1761795084688-bb007bc51697?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjByZXRhaWwlMjBzdG9yZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYzOTM3NDYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    icon: Monitor,
    title: "Smart Display",
    description: "A dynamic digital screen solution that delivers real-time information and engaging content. With a built-in Content Management System (CMS), it enables remote updates, scheduling, and monitoring with ease. Smart Display enhances communication efficiency, strengthens brand image, and supports digital transformation initiatives.",
    image: "https://images.unsplash.com/photo-1728486887318-398f1448f7ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwZGlzcGxheSUyMHNjcmVlbnxlbnwxfHx8fDE3NjM5NzY1Njl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    icon: Radio,
    title: "Integrated Command Center",
    description: "A centralized digital hub that connects and monitors various systems, devices, and data sources in real time. It enables faster decision-making, coordinated responses, and improved operational efficiency across different functions such as security, facilities, and IT management.",
    image: "https://images.unsplash.com/photo-1685720543547-cc4873188c75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tYW5kJTIwY2VudGVyJTIwY29udHJvbCUyMHJvb218ZW58MXx8fHwxNzYzOTc2NTY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    icon: Building2,
    title: "Building Management System",
    description: "An intelligent control platform that monitors and manages a building's essential operations—such as lighting, HVAC, power, and security—through an integrated digital system. It enhances energy efficiency, safety, and comfort while optimizing overall building performance.",
    image: "https://images.unsplash.com/photo-1561719998-e6763867e182?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidWlsZGluZyUyMGF1dG9tYXRpb24lMjBzeXN0ZW18ZW58MXx8fHwxNzYzOTA2NDM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    icon: Briefcase,
    title: "Smart Office",
    description: "A digitally connected workspace that integrates cameras, smart access doors, and interactive flat panels to create intelligent meeting rooms and seamless collaboration. Through automation and real-time connectivity, it enhances productivity, security, and communication in a modern, efficient work environment.",
    image: "https://images.unsplash.com/photo-1630855796530-b5d8c7737863?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMG9mZmljZSUyMHdvcmtzcGFjZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYzOTc2NTcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

export function Services() {
  return (
    <section id="services" className="py-32 px-6" style={{ backgroundColor: "#f8f9fa" }}>
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl mb-6 tracking-tight" style={{ color: "#253c80" }}>
            Technology-Information-Trade
          </h2>
          
        </div>

        {/* Services Grid - 2x2 with Images */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            
            return (
              <div
                key={index}
                className="relative h-[400px] overflow-hidden rounded-lg group"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div 
                    className="absolute inset-0 transition-opacity duration-300"
                    style={{ 
                      background: `linear-gradient(135deg, ${index % 2 === 0 ? '#253c80' : '#3fbd9e'}dd, ${index % 2 === 0 ? '#3fbd9e' : '#253c80'}cc)`
                    }}
                  ></div>
                </div>

                {/* Content */}
                <div className="relative h-full p-8 flex flex-col justify-end text-white">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm mb-4">
                    <Icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl mb-3">
                    {service.title}
                  </h3>
                  <p className="text-white/90 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}