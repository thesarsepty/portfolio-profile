"use client";

import React from "react";
import { servicesData } from "../Data/data";
import { easeIn, motion } from "framer-motion";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: easeIn },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {servicesData.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 group flex flex-col justify-center gap-6"
              >
                {/* TOP */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline group-hover:text-outline-hover transition-all duration-500 text-transparent">
                    {service.num}
                  </div>
                  <Link
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                    href={service.href}
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* Title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                {/* Desc */}
                <p className="text-white/60">{service.description}</p>
                {/* Border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
