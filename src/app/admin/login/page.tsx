"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/lib/validations/auth";
import { z } from "zod";
import { useRouter } from "next/navigation";

// Define TypeScript type from Zod schema
type LoginFormData = z.infer<typeof loginSchema>;

export default function AdminLogin() {
  const router = useRouter();
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    setError("");

    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await res.json();
    console.log("result:", result); // Debugging
    if (!res.ok) {
      setError(result.message || "Login failed");
      return;
    }
    console.log("hello");

    // ✅ Store access token in memory
    sessionStorage.setItem("accessToken", result.token);
    await new Promise((resolve) => setTimeout(resolve, 500)); // Small delay
    router.push("/admin/dashboard");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4">
      <div>
        <label>Email:</label>
        <input
          type="email"
          {...register("email")}
          className="border p-2 rounded w-full"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>

      <div>
        <label>Password:</label>
        <input
          type="password"
          {...register("password")}
          className="border p-2 rounded w-full"
        />
        {errors.password && (
          <p className="text-red-500">{errors.password.message}</p>
        )}
      </div>

      {error && <p className="text-red-500">{error}</p>}

      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-blue-500 text-white p-2 rounded"
      >
        {isSubmitting ? "Logging in..." : "Login"}
      </button>
    </form>
  );
}
