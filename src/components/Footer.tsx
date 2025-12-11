import { Linkedin, Instagram, Mail } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Link } from "react-router-dom";

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

export function Footer() {
  return (
    <footer className="py-16 px-6" style={{ backgroundColor: "#1a2d5f" }}>
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <ImageWithFallback
                src="/images/LOGO.png"
                alt="Arda Karya Sinergy Logo"
                className="h-10 w-auto max-w-[180px]"
                style={{ filter: 'brightness(0) invert(1)', WebkitFilter: 'brightness(0) invert(1)' }}
              />
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Providing innovative solutions for technology and strategic procurement excellence.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm tracking-widest uppercase text-white">Social Media</h4>
            <ul className="space-y-3 text-white/70 text-sm">
              <li>
                <a href="https://www.linkedin.com/company/pt-arda-karya-sinergy/" target="_blank" rel="noopener noreferrer" className="hover:text-[#3fbd9e] transition-colors flex items-center gap-2">
                  <Linkedin size={16} /> LinkedIn
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/aksinergy/" target="_blank" rel="noopener noreferrer" className="hover:text-[#3fbd9e] transition-colors flex items-center gap-2">
                  <Instagram size={16} /> Instagram
                </a>
              </li>
              <li>
                <a href="https://www.tiktok.com/@aksinergy" target="_blank" rel="noopener noreferrer" className="hover:text-[#3fbd9e] transition-colors flex items-center gap-2">
                  <TikTokIcon /> TikTok
                </a>
              </li>
              <li>
                <a href="mailto:admin@aksinergy.com" className="hover:text-[#3fbd9e] transition-colors flex items-center gap-2">
                  <Mail size={16} /> Email
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm tracking-widest uppercase text-white">Company</h4>
            <ul className="space-y-3 text-white/70 text-sm">
              <li><Link to="/" className="hover:text-[#3fbd9e] transition-colors">Home</Link></li>
              <li><Link to="/blog" className="hover:text-[#3fbd9e] transition-colors">Articles</Link></li>
              <li><Link to="/services" className="hover:text-[#3fbd9e] transition-colors">Services</Link></li>
              <li><Link to="/about" className="hover:text-[#3fbd9e] transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-[#3fbd9e] transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">
            © 2025 Arda Karya Sinergy. All rights reserved.
          </p>
          <div className="flex gap-6 text-white/60 text-sm">
            <a href="#" className="hover:text-[#3fbd9e] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#3fbd9e] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#3fbd9e] transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}