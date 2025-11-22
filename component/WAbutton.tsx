import React from "react";

interface WhatsappButtonProps {
  phone: string;
  message?: string;
}

const WhatsappButton: React.FC<WhatsappButtonProps> = ({
  phone,
  message = "Halo, saya tertarik dengan layanan Anda!",
}) => {
  const waLink = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition-colors"
      title="Chat via WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        className="w-7 h-7"
      >
        <path d="M12 0C5.373 0 0 5.372 0 12c0 2.11.552 4.083 1.512 5.805L0 24l6.31-1.512A11.959 11.959 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm6.373 17.847c-.256.72-1.502 1.346-2.088 1.43-.544.079-1.211.112-4.205-1.053-3.042-1.18-5.02-4.071-5.168-4.26-.147-.189-1.21-1.616-1.21-3.08 0-1.464.797-2.184 1.08-2.48.287-.29.628-.365.844-.365.216 0 .43.003.617.01.201.007.47-.075.733.552.256.62.868 2.14.945 2.29.074.15.123.334.024.541-.097.206-.145.334-.287.52-.147.19-.31.42-.442.563-.147.162-.3.34-.136.652.164.313.726 1.197 1.556 1.938 1.074 1.004 1.97 1.347 2.28 1.5.308.153.488.13.667-.078.18-.207.776-.902.983-1.21.207-.31.414-.258.71-.154.297.104 1.876.883 2.196 1.04.32.156.534.234.613.364.078.13.078.754-.178 1.473z" />
      </svg>
    </a>
  );
};

export default WhatsappButton;
