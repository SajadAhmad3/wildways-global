"use client";
import React, { useState } from "react";
import Container from "../components/Container";
import Image from "next/image";
import { Phone, Mail, MapPin, CheckCircle, Headset } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import { ADDRESS, EMAIL, PHONE_NUMBER } from "@/lib/constants";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    destination: "",
    request: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); 
    console.log("Form Data Submitted:", formData); 
    toast.success("Thank you! We'll get back to you shortly.");

    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      destination: "",
      request: "",
    });
  };

  return (
    <Container className="flex flex-col justify-center items-center min-h-screen">
      <div className="relative w-full h-[200px] lg:h-[350px] ">
        <Image
          src={"/images/home/snowboard.jpg"}
          alt="Banner"
          className="object-cover w-full h-full brightness-50"
          layout="fill"
          priority
        />
        <div className="absolute inset-0 top-20 flex items-center justify-center px-4">
          <h2 className="text-xxl md:text-xxxl lg:text-4xl font-bold mb-4 text-white font-modicaMedium">
            Contact Us
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 my-10">
        {/* Info Cards (25% Width) */}
        <div className="col-span-1 hidden md:flex md:flex-col gap-4 order-2 md:order-1 ">
          <div className="bg-primary text-white p-5 rounded-lg shadow-md flex flex-col gap-2 max-w-[238px] md:max-w-full">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <Headset /> Contact Details
            </h3>
            <div className="flex items-center gap-2">
              <Phone />
              <p className="mt-2">{PHONE_NUMBER}</p>
            </div>
            <div className="flex items-center gap-2 break-all">
              <Mail />
              <p>{EMAIL}</p>
            </div>
          </div>
          <div className="bg-primary text-white p-5 rounded-lg shadow-md flex flex-col gap-2 max-w-[238px] md:max-w-full">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <CheckCircle /> Our Commitment
            </h3>
            <p className="mt-2">✅ Available 24/7 for your needs</p>
            <p>✅ Dedicated support team</p>
          </div>
          <div className="bg-primary text-white p-5 rounded-lg shadow-md flex flex-col gap-2 max-w-[238px] md:max-w-full">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <MapPin /> Office Location
            </h3>
            <p className="mt-2">
              {ADDRESS}
            </p>
          </div>
        </div>

        <div className="col-span-3 bg-black/80 shadow-lg rounded-lg overflow-hidden">
          <div className="p-8">
            {/* Heading */}
            <h2 className="text-xxl font-bold text-center text-white-800">
              Get in Touch
            </h2>
            <p className="text-gray-300 text-center mb-6">
              We are actively catering to our clients. Drop us a line to start a
              conversation.
            </p>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="text-white text-[18px] space-y-10"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="border bg-transparent p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary transition"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border bg-transparent p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary transition"
                  required
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  maxLength={15}
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="border bg-transparent p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary transition"
                  required
                />
                <input
                  type="text"
                  name="date"
                  placeholder="Choose a Date"
                  value={formData.date}
                  onChange={handleChange}
                  onFocus={(e) => (e.target.type = "date")}
                  onBlur={(e) => (e.target.type = "text")}
                  className="border bg-transparent p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary transition"
                  required
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Destination"
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                  className="border bg-transparent p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary transition"
                  required
                />
              </div>
              <div>
                <textarea
                  name="request"
                  placeholder="Special Request"
                  value={formData.request}
                  onChange={handleChange}
                  rows={4}
                  className="border bg-transparent p-4 w-full rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-secondary transition"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary hover:bg-opacity-80 transition duration-300 text-white px-6 py-4 font-bold rounded-lg shadow-md"
              >
                Book Now
              </button>
            </form>
            <ToastContainer position="bottom-left" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ContactForm;
