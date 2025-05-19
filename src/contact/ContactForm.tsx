
import React from "react";
import { useForm } from "react-hook-form";

type FormValues = {
  fullName: string;
  email: string;
  message: string;
};

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
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
          className="w-full mt-10 bg-transparent border-b border-zinc-700 pb-2 text-zinc-300 focus:outline-none focus:border-zinc-400 resize-none h-20"
          aria-invalid={errors.message ? "true" : "false"}
        />
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-blend-normal bg-zinc-950 shadow-[0px_0px_0px_rgba(0,0,0,0)] flex w-[228px] max-w-full flex-col overflow-hidden items-center text-base text-zinc-400 font-medium mt-[65px] pt-[17px] pb-[11px] px-[46px] rounded-2xl border border-zinc-800 hover:bg-zinc-900 transition-colors max-md:mt-10 max-md:px-5 relative"
      >
        <span className="relative z-10">Contact Us</span>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-blend-normal w-[103px] h-px bg-zinc-700" />
      </button>
    </form>
  );
};

export default ContactForm;
