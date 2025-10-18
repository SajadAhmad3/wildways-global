"use client";

import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { destinations } from "@/app/utils/destinations/destData";
import Container from "@/app/components/Container";
import { Heading } from "@/app/elements/Heading";
import { useRouter } from "next/navigation";

interface DestinationPageProps {
  params: Promise<{
    slug: string;
  }>;
}

const DestinationPage = ({ params }: DestinationPageProps) => {
  const router = useRouter();
  const resolvedParams = React.use(params);
  const destination = destinations.find((dest) => dest.slug === resolvedParams.slug);

  if (!destination) {
    notFound();
  }

  const handleBookNow = () => {
    router.push("/contact-us");
  };

  // Additional images for gallery (you can add more images for each destination)
  const galleryImages = [
    destination.image,
    destination.image, // You can replace these with actual gallery images
    destination.image,
    destination.image,
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full h-[60vh] lg:h-[80vh]">
        <Image
          src={destination.image}
          alt={destination.destinationName}
          fill
          priority
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 font-modicaMedium">
              {destination.destinationName}
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto">
              {destination.description}
            </p>
          </div>
        </div>
      </div>

      <Container className="py-16">
        {/* About Section */}
        <div className="mb-16">
          <Heading 
            title="ABOUT" 
            description={`Discover ${destination.destinationName}`} 
          />
          <div className="mt-8 max-w-4xl mx-auto">
            <p className="text-lg leading-relaxed text-gray-700">
              {destination.description} Experience the beauty and adventure that awaits you in this 
              magnificent destination. From breathtaking landscapes to thrilling activities, 
              {destination.destinationName} offers an unforgettable journey for every traveler.
            </p>
          </div>
        </div>

        {/* Activities Section */}
        <div className="mb-16">
          <Heading 
            title="ACTIVITIES" 
            description="Things to do in this destination" 
          />
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {destination.activities.map((activity, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <h3 className="text-lg font-semibold text-gray-800">{activity}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery Section */}
        <div className="mb-16">
          <Heading 
            title="GALLERY" 
            description="Beautiful moments captured" 
          />
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative overflow-hidden rounded-lg group">
                <Image
                  src={image}
                  alt={`${destination.destinationName} - Image ${index + 1}`}
                  width={300}
                  height={200}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Best Time to Visit */}
        <div className="mb-16">
          <Heading 
            title="BEST TIME TO VISIT" 
            description="Plan your perfect trip" 
          />
          <div className="mt-8 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <h3 className="text-xl font-bold text-primary mb-2">Spring</h3>
                <p className="text-gray-600">March - May</p>
                <p className="text-sm text-gray-500 mt-2">Perfect weather for outdoor activities</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-primary mb-2">Summer</h3>
                <p className="text-gray-600">June - August</p>
                <p className="text-sm text-gray-500 mt-2">Ideal for trekking and adventure sports</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-primary mb-2">Autumn</h3>
                <p className="text-gray-600">September - November</p>
                <p className="text-sm text-gray-500 mt-2">Beautiful fall colors and pleasant weather</p>
              </div>
            </div>
          </div>
        </div>

        {/* Travel Tips */}
        <div className="mb-16">
          <Heading 
            title="TRAVEL TIPS" 
            description="Essential information for your visit" 
          />
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">What to Pack</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Warm clothing and layers</li>
                <li>• Comfortable walking shoes</li>
                <li>• Camera for photography</li>
                <li>• Sunscreen and sunglasses</li>
                <li>• First aid kit</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Important Notes</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Check weather conditions before travel</li>
                <li>• Book accommodations in advance</li>
                <li>• Carry valid ID and permits</li>
                <li>• Respect local culture and environment</li>
                <li>• Stay hydrated at high altitudes</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-primary to-secondary rounded-lg p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Explore {destination.destinationName}?</h2>
          <p className="text-lg mb-8 opacity-90">
            Let us help you plan the perfect trip to this amazing destination.
          </p>
          <button
            onClick={handleBookNow}
            className="bg-white text-primary hover:bg-gray-100 transition-colors duration-300 font-bold py-3 px-8 rounded-full text-lg"
          >
            Book Your Trip Now
          </button>
        </div>
      </Container>
    </div>
  );
};

export default DestinationPage;
