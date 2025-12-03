import { FaWhatsapp } from "react-icons/fa";

export function WhatsAppFloatingButton() {
  const phoneNumber = "628111622023"; // <-- replace with your real number
  const whatsappURL = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsappURL}
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed 
        bottom-6 
        right-6 
        z-50 
        bg-[#25D366] 
        text-white 
        w-16 
        h-16 
        rounded-full 
        flex 
        items-center 
        justify-center 
        shadow-xl 
        hover:scale-110 
        active:scale-95 
        transition-transform 
        cursor-pointer
      "
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={32} />
    </a>
  );
}