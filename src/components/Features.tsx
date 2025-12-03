import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const companyLogos = [
  {
    id: 1,
    url: "https://www.harianpilar.com/files/2015/03/pt-kereta-api-indonesia-kai-new-logo-logo.jpg"
  },
  {
    id: 2,
    url: "https://cdn.antaranews.com/cache/1200x800/2019/01/Logo-LKBN-Antara_fea.png"
  },
  {
    id: 3,
    url: "https://assets.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/2023/03/28/Logo-Otoritas-Jasa-Keuangan-OJK-2820697268.jpg"
  },
  {
    id: 4,
    url: "https://lokerbumn.com/wp-content/uploads/2024/09/PT-Kereta-Cepat-Indonesia-China-KCIC-02.jpg"
  },
  {
    id: 5,
    url: "https://media.licdn.com/dms/image/v2/D5605AQHRW3hJSRaBTA/feedshare-thumbnail_720_1280/feedshare-thumbnail_720_1280/0/1681207388371?e=2147483647&v=beta&t=83TaW_OJ7IOpDmspDHqMH_Y1Yl1oYH0zgeNfJub6LFY"
  },
  {
    id: 6,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQFUHBmAmEKnibLg_IT9mnBvnLtVCwK8xMdNECVFvGRmEPJCDH8j_06fCG4Zqy5lNYNRM&usqp=CAU"
  },
  {
    id: 7,
    url: "https://media.licdn.com/dms/image/v2/D4E0BAQEyVbdrBqE5GA/company-logo_200_200/B4EZYZHb2LHUAI-/0/1744178103714?e=2147483647&v=beta&t=ksn4grAqzBsnVza0gpdiZz3QVt7WutornOOF7uOT5PE"
  },
  {
    id: 8,
    url: "https://plaza-ambarrukmo.co.id/wp-content/uploads/2024/05/LG-Ramen-YA.png"
  },
  {
    id: 9,
    url: "https://news.getredy.id/wp-content/uploads/2025/06/Sagala-PT-Senang-Ganyang-Lapar.png"
  },
  {
    id: 10,
    url: "https://computradetech.com/wp-content/uploads/2021/11/btp-large.png"
  },
];

export function Features() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % companyLogos.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + companyLogos.length) % companyLogos.length);
  };

  return (
    <section id="about" className="py-32 px-6" style={{ backgroundColor: "#253c80" }}>
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl mb-6 tracking-tight text-white">
            Trusted by Many Company
          </h2>
        </div>
        
        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-lg h-96 bg-white shadow-2xl">
            <img 
              src={companyLogos[currentIndex].url}
              alt={`Company partner ${currentIndex + 1}`}
              className="w-full h-full object-cover transition-opacity duration-500"
            />
          </div>
          
          {/* Carousel Controls */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-50 p-3 rounded-full shadow-lg transition-all"
            style={{ color: "#253c80" }}
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-50 p-3 rounded-full shadow-lg transition-all"
            style={{ color: "#253c80" }}
          >
            <ChevronRight size={24} />
          </button>
          
          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-10">
            {companyLogos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'w-12' : 'w-1.5'
                }`}
                style={{ 
                  backgroundColor: index === currentIndex ? "#3fbd9e" : "#ffffff66" 
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}