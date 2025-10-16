"use client";

import React from "react";
import Image from "next/image";
import { MapPin, Calendar, Users, MessageCircle, Phone } from "lucide-react";
import { useRouter } from "next/navigation";
import { PHONE_NUMBER } from "@/lib/constants";

interface PackageProps {
  title: string;
  image: string;
  location: string;
  duration: string;
  people: string;
  price: string;
}

const PackageCard: React.FC<PackageProps> = ({
  title,
  image,
  location,
  duration,
  people,
  price,
}) => {
  const router = useRouter();

  const handleWhatsAppRedirect = () => {
    const message =
      "Hello! I'm interested in knowing more about your services.";
    const whatsappURL = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(
      message
    )}`;
    window.location.href = whatsappURL;
  };

  const handleBook = () => {
    router.push(`/contact-us`);
  };

  const handleCallRedirect = () => {
    window.location.href = `tel:${PHONE_NUMBER}`;
  };
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* Image */}
      <div className="relative w-full h-56 overflow-hidden">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          priority
          className="hover:scale-105 transition-all duration-300 cursor-pointer"
        />
      </div>

      {/* Package Details */}
      <div className="p-4">
        {/* Location, Duration, People */}
        <div className="flex justify-between items-center text-sm text-gray-600 mb-2 flex-wrap">
          <div className="flex items-center gap-1">
            <MapPin size={16} className="text-primary" />
            <span className="text-md font-semibold">{location}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar size={16} className="text-primary" />
            <span className="text-md font-semibold">{duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users size={16} className="text-primary" />
            <span className="text-md font-semibold">{people}</span>
          </div>
        </div>

        {/* Price and Title */}
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-xl font-bold text-primary mt-1">
          <span className="text-lg font-semibold text-black">
            Starting from :
          </span>{" "}
          {price}{" "}
          <span className="text-md font-medium text-gray-600">per person</span>
        </p>

        {/* Buttons */}
        <div className="flex items-center justify-between gap-2 mt-4">
          <div className="flex items-center gap-4">
            <div
              className="hover:scale-110 bg-primary hover:bg-secondary transition duration-300 text-white px-4 py-2 rounded-lg text-sm"
              onClick={handleCallRedirect}
            >
              <Phone className="cursor-pointer" />
            </div>
            <div
              className="hover:scale-110 bg-primary hover:bg-secondary transition duration-300 text-white px-4 py-2 rounded-lg text-sm"
              onClick={handleWhatsAppRedirect}
            >
              <MessageCircle className="cursor-pointer" />
            </div>
          </div>
          <button
            className="w-1/2 px-3 py-2 bg-primary text-white font-medium rounded-md hover:bg-secondary"
            onClick={handleBook}
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
