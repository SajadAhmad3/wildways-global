import React from "react";
import Container from "../components/Container";
import Image from "next/image";
import PackageCard from "../components/packages/packageCard";
import { skiPackagesData } from "../utils/packages/skiPackages";

const SkiCourses = () => {
  return (
    <Container className="mb-10 mt-[70px]">
      <div className="relative w-full h-[200px] lg:h-[350px] ">
        <Image
          src={"/images/home/snowboard.jpg"}
          alt="Banner"
          className="object-cover w-full h-full brightness-50"
          layout="fill"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <h2 className="text-xxl md:text-xxxl lg:text-4xl font-bold mb-4 text-white font-modicaMedium">
            Ski Courses
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {skiPackagesData.map((pkg, index) => (
          <PackageCard key={index} {...pkg} />
        ))}
      </div>
    </Container>
  );
};

export default SkiCourses;
