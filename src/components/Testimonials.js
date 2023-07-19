import React from "react";
import { TerminalIcon, UsersIcon } from "@heroicons/react/solid";
import { testimonials } from "../data";

export default function Testimonials() {
  return (
    <section id="testimonials">
      <div className="container px-5 py-10 mx-auto text-center">
        <UsersIcon className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          Resume & Social Media
        </h1>
        <div className="flex flex-wrap m-4">
          {testimonials.map((testimonial) => (
             <a
             href={testimonial.link}  
             key={testimonial.quote}
             className="sm:w-1/2 w-100 p-4">
             <div className="flex relative">
               <img
                 alt="gallery"
                 className="absolute inset-0 w-full h-full object-cover object-center"
                 src={testimonial.image}
               />
               <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                 <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                   {testimonial.subtitle}
                 </h2>
                 <h1 className="title-font text-lg font-medium text-white mb-3">
                   {testimonial.title}
                 </h1>
                 <p className="leading-relaxed">{testimonial.description}</p>
               </div>
             </div>
           </a>
         ))}
       </div>
     </div>
    </section>
  );
}