import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import toast from 'react-hot-toast';

type FormValues = {
  fullName: string;
  email: string;
  message: string;
};

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormValues>({
    defaultValues: {
      fullName: "",
      email: "",
      message: ""
    }
  });

  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = async () => {
    if (!formRef.current) return;

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_SECRET_KEY,     // e.g. "service_abcd123"
        import.meta.env.VITE_TEMPLATE_KEY,    // e.g. "template_xyz"
        formRef.current,
        import.meta.env.VITE_PUBLIC_KEY     // e.g. "abcd1234publickey"
      );
      toast("Message sent successfully!");
      reset(); // reset form
    } catch (error) {
      toast("Failed to send message. Please try again later.");
      console.error("EmailJS error:", error);
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-[485px]"
    >
      <div className="w-full">
        <label htmlFor="fullName" className="block text-base text-[rgba(94,94,94,1)] font-normal leading-[1.2]">
          Full Name
        </label>
        <input
          id="fullName"
          type="text"
          {...register("fullName", {
            required: "Name is required",
            minLength: { value: 2, message: "Name must be at least 2 characters" }
          })}
          name="fullName"
          className="w-full sm:mt-10 bg-transparent border-b border-zinc-700 pb-2 text-zinc-300 focus:outline-none focus:border-zinc-400"
          aria-invalid={errors.fullName ? "true" : "false"}
        />
        {errors.fullName && (
          <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
        )}
      </div>

      <div className="w-full whitespace-nowrap mt-11 max-md:mt-10">
        <label htmlFor="email" className="block text-base text-[rgba(94,94,94,1)] font-normal leading-[1.2]">
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
          name="email"
          className="w-full sm:mt-10 bg-transparent border-b border-zinc-700 pb-2 text-zinc-300 focus:outline-none focus:border-zinc-400"
          aria-invalid={errors.email ? "true" : "false"}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      <div className="w-full whitespace-nowrap mt-11 max-md:mt-10">
        <label htmlFor="message" className="block text-base text-[rgba(94,94,94,1)] font-normal leading-[1.2]">
          Message
        </label>
        <textarea
          id="message"
          {...register("message", {
            required: "Message is required",
            minLength: { value: 10, message: "Message must be at least 10 characters" }
          })}
          name="message"
          className="w-full sm:mt-10 bg-transparent border-b border-zinc-700 pb-2 text-zinc-300 focus:outline-none focus:border-zinc-400"
          aria-invalid={errors.message ? "true" : "false"}
        />
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
        )}
      </div>

      <div className="hidden sm:block pt-[40px]">
        <button type="submit" className="relative group py-4">
          <div className="absolute w-[228px] h-[56px] top-[1px] left-[1px] bg-[#09090B] rounded-lg shadow-[0_0_0_1px_rgba(255,255,255,0.1)]" />
          <span className="absolute w-[226px] h-[1px] left-[10px] top-[57px] rounded bg-gradient-to-r from-cyan-400/0 via-cyan-400/90 to-cyan-400/0" />
          <div
            className="relative z-10 w-[228px] h-[28px] rounded-lg flex items-center justify-center text-[#A1A1AA] text-[14px] font-medium leading-[24px]"
          >
            Send Message
          </div>
        </button>
      </div>
      <div className="sm:hidden pt-[40px]">
        <button type="submit" className="relative group py-4">
          <div className="absolute w-[113px] h-[34px] top-[1px] left-[1px] bg-[#09090B] rounded-lg shadow-[0_0_0_1px_rgba(255,255,255,0.1)]" />
          <span className="absolute w-[113px] h-[1px] left-[3px] top-[35px] rounded bg-gradient-to-r from-cyan-400/0 via-cyan-400/90 to-cyan-400/0" />
          <div
            className="relative z-10 w-[113px] h-[34px] rounded-lg -top-3.5 flex items-center justify-center text-[#A1A1AA] text-[10px] font-medium sm:leading-[24px]"
          >
            Send Message
          </div>
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
