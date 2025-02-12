"use client";

import { useForm } from "react-hook-form";

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Form Data:", data);
    alert("Message sent successfully!");
    reset();
  };

  return (
    <div className="min-h-screen">
      <div className="h-fit max-w-md mx-auto bg-[#272727] p-6 my-20 text-[#f5f5e6] rounded-lg shadow-lg border-2 border-[#D4AF37]">
        <h2 className="text-2xl font-bold text-center mb-4">
          Contact Diagon Alley Officials
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-[#D4AF37] text-black"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-[#D4AF37] text-black"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium">Message</label>
            <textarea
              {...register("message", { required: "Message is required" })}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-[#D4AF37] text-black"
              rows={4}
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#D4AF37] py-2 rounded-lg hover:bg-[#D4AF37]/90 font-semibold text-lg transition"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
}
