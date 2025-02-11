"use client";

import { useForm } from "react-hook-form";

type RegisterData = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<RegisterData>();

  const onSubmitRegister = (data: RegisterData) => {
    console.log("Form Data:", data);
    alert("Message sent successfully!");
    reset();
  };

  return (
    <section className="max-w-md mx-auto bg-[#272727] p-6 my-20 text-[#f5f5e6] rounded-lg shadow-lg border-2 border-[#D4AF37]">
      <div>
        <h1 className="text-2xl font-bold text-center mb-4">Register</h1>
      </div>
      <div className="flex justify-center items-center">
        <form onSubmit={handleSubmit(onSubmitRegister)} className="space-y-4">
          <label className="block text-sm font-medium">Username</label>
          <input
            type="text"
            {...register("username", { required: true })}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-[#D4AF37] text-black"
          />
          {errors.username && (
            <p className="text-red-600">Enter your username</p>
          )}
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-[#D4AF37] text-black"
          />
          {errors.username && <p className="text-red-600">Enter email</p>}
          <label className="block text-sm font-medium">Password</label>
          <input
            type="text"
            {...register("password", { required: true })}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-[#D4AF37] text-black"
          />
          {errors.password && (
            <p className="text-red-600">Enter your password</p>
          )}
          <label className="block text-sm font-medium">Confirm password</label>
          <input
            type="text"
            {...register("confirmPassword", { required: true })}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-[#D4AF37] text-black"
          />
          {errors.password && (
            <p className="text-red-600">Confirm your password</p>
          )}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#D4AF37] py-2 rounded-lg hover:bg-[#D4AF37]/90 font-semibold text-lg transition"
          >
            Register
          </button>
        </form>
      </div>
    </section>
  );
};

export default Register;
