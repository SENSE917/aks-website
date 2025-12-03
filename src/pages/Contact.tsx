import { Button } from "../components/ui/button";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  emailjs
    .send(
      "service_w8ex7fh", // EmailJS service ID
      "template_tgddq73", // Template ID
      {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company,
        phone: formData.phone,
        message: formData.message,
        to_email: "admin@aksinergy.com" // optional
      },
      "2zo0cHS9q7PfiJHxk" // public key from EmailJS
    )
    .then(
      (response) => {
        alert("Thank you for your message! We'll get back to you soon.");
        setFormData({ name: "", email: "", company: "", phone: "", message: "" });
      },
      (error) => {
        alert("Oops! Something went wrong. Please try again.");
        console.error(error);
      }
    );
};

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-32 px-6" style={{ 
        background: "linear-gradient(135deg, #253c80 0%, #3fbd9e 100%)" 
      }}>
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-7xl mb-6 tracking-tight text-white">
            Contact Us
          </h1>
          <p className="text-lg md:text-2xl text-white/80 leading-relaxed">
            Let's discuss how we can help transform your business
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-32 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl md:text-5xl mb-6 tracking-tight" style={{ color: "#253c80" }}>
                Send us a Message
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm mb-2" style={{ color: "#253c80" }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 transition-all"
                    style={{ focusRing: "#3fbd9e" }}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm mb-2" style={{ color: "#253c80" }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm mb-2" style={{ color: "#253c80" }}>
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm mb-2" style={{ color: "#253c80" }}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm mb-2" style={{ color: "#253c80" }}>
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 transition-all resize-none"
                  ></textarea>
                </div>

                <Button 
                  type="submit"
                  className="w-full text-white px-8 py-6 text-lg transition-all hover:scale-105"
                  style={{ backgroundColor: "#3fbd9e" }}
                >
                  Send Message
                  <Send className="ml-2" size={20} />
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl md:text-5xl mb-6 tracking-tight" style={{ color: "#253c80" }}>
                Get in Touch
              </h2>
              <p className="text-lg text-gray-600 mb-12 leading-relaxed">
                We're here to help and answer any questions you might have. We look forward to hearing from you.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: "#3fbd9e" }}>
                    <Mail size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2" style={{ color: "#253c80" }}>
                      Email
                    </h3>
                    <p className="text-gray-600">admin@aksinergy.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: "#3fbd9e" }}>
                    <Phone size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2" style={{ color: "#253c80" }}>
                      Phone
                    </h3>
                    <p className="text-gray-600">+62 811 1622 023</p>
                    <p className="text-gray-600">+62 218 9081 048</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: "#3fbd9e" }}>
                    <MapPin size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2" style={{ color: "#253c80" }}>
                      Main Office
                    </h3>
                    <p className="text-gray-600">
                      Gedung Wirausaha Lantai 1 Unit 104. 
                      Jl. HR. Rasuna Said Kav C-5, 
                      Kelurahan Karet, Kecamatan Setia Budi, Jakarta Selatan. 12920
                    </p>

                    <h3 className="text-xl mb-2" style={{ color: "#253c80" }}>
                      Workshop
                    </h3>
                    <p className="text-gray-600">
                      Ruko Berlian No. R 30 B
                      Jalan Tanah Baru, Tanah Baru, Kecamatan Beji,
                      Kota Depok, Jawa Barat - 16426
                    </p>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="mt-12 p-8 rounded-lg" style={{ backgroundColor: "#253c80" }}>
                <h3 className="text-2xl mb-4 text-white">
                  Office Hours
                </h3>
                <div className="space-y-2 text-white/80">
                  <p>Monday - Friday: 8:30 AM - 17:30 PM</p>
                  <p>Saturday & Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-32 px-6" style={{ backgroundColor: "#3fbd9e" }}>
  <div className="container mx-auto max-w-4xl text-center space-y-8">
    <h2 className="text-4xl md:text-6xl tracking-tight text-white">
      Visit Our Office
    </h2>
    <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
      Drop by and visit our Office
    </p>

    <div className="bg-white rounded-lg overflow-hidden shadow-2xl h-[400px]">
      <iframe
        title="Office Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.137292360133!2d106.8055028736408!3d-6.376271862368432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ef004056a5bf%3A0x153b8c4821c63c38!2sRuko%20Berlian%20Tanah%20Baru!5e0!3m2!1sen!2sid!4v1764747930362!5m2!1sen!2sid"
        className="w-full h-full border-0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</section>
    </div>
  );
}