
import React from "react";
import { useForm } from "react-hook-form";
import {Link} from "react-router-dom"

type FormValues = {
  fullName: string;
  email: string;
  message: string;
};

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, }
  } = useForm<FormValues>({
    defaultValues: {
      fullName: "",
      email: "",
      message: ""
    }
  });

  const onSubmit = async (data: FormValues) => {
    // Simulate form submission
    console.log("Form submitted:", data);
    // In a real application, you would send this data to your backend
    await new Promise(resolve => setTimeout(resolve, 1000));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-[485px]">
      <div className="w-full">
        <label 
          htmlFor="fullName" 
          className="block text-base text-[rgba(94,94,94,1)] font-normal leading-[1.2]"
        >
          Full Name
        </label>
        <input
          id="fullName"
          type="text"
          {...register("fullName", { 
            required: "Name is required",
            minLength: { value: 2, message: "Name must be at least 2 characters" }
          })}
          className="w-full mt-10 bg-transparent border-b border-zinc-700 pb-2 text-zinc-300 focus:outline-none focus:border-zinc-400"
          aria-invalid={errors.fullName ? "true" : "false"}
        />
        {errors.fullName && (
          <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
        )}
      </div>

      <div className="w-full whitespace-nowrap mt-11 max-md:mt-10">
        <label 
          htmlFor="email" 
          className="block text-base text-[rgba(94,94,94,1)] font-normal leading-[1.2]"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Please enter a valid email address"
            }
          })}
          className="w-full mt-10 bg-transparent border-b border-zinc-700 pb-2 text-zinc-300 focus:outline-none focus:border-zinc-400"
          aria-invalid={errors.email ? "true" : "false"}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      <div className="w-full whitespace-nowrap mt-11 max-md:mt-10">
        <label 
          htmlFor="message" 
          className="block text-base text-[rgba(94,94,94,1)] font-normal leading-[1.2]"
        >
          Message
        </label>
        <textarea
          id="message"
          {...register("message", {
            required: "Message is required",
            minLength: { value: 10, message: "Message must be at least 10 characters" }
          })}
          className="w-full mt-10 bg-transparent border-b border-zinc-700 pb-2 text-zinc-300 focus:outline-none focus:border-zinc-400 "
          aria-invalid={errors.message ? "true" : "false"}
        />
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
        )}
      </div>

      <div className="pt-[40px]">
        <button type="submit" className="relative group py-4">
          <div className="absolute w-[228px] h-[56px] top-[1px] left-[1px] bg-[#09090B] rounded-lg shadow-[0_0_0_1px_rgba(255,255,255,0.1)]" />
          <span className="absolute w-[226px] h-[1px] left-[10px] top-[57px] rounded bg-gradient-to-r from-cyan-400/0 via-cyan-400/90 to-cyan-400/0" />
          <Link
            to="/contact"
            className="relative z-10 w-[228px] h-[28px] rounded-lg flex items-center justify-center text-[#A1A1AA] text-[14px] font-medium leading-[24px]"
          >
            Contact Us
          </Link>
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
