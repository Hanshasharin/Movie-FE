
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import '../../pages/Users/UserAuth.css';
import backgroundImage from '../../assets/images/movielogin.jpg';

const schema = yup.object({
  email: yup.string().email("Invalid email format").required("Email is required"),
  password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
}).required();

export default function AdminLogin() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const res = await axios.post("https://movie-backendserver.onrender.com/api/v1/admin/loginAdmin", data, {
        withCredentials: true
      });
      
      // Check if the response contains the token
      if (res.data && res.data.token) {
        sessionStorage.setItem('token', res.data.token);
        navigate('/admin/users');
      } else {
        throw new Error("Admin not authorized");
      }
    } catch (error) {
      console.log(error);
      alert("Admin not found or not authorized");
      // Optionally, you can redirect to a different page or stay on the login page
    }
  };

  return (
    <div className="background-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <form onSubmit={handleSubmit(onSubmit)} className="form-container flex flex-col gap-y-2 rounded-md border p-6">
        <input
          {...register("email")}
          placeholder="Email"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}

        <input
          {...register("password")}
          placeholder="Password"
          type="password"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
        />
        {errors.password && <p className="text-red-500">{errors.password.message}</p>}

        <input type="submit" className="rounded-md bg-blue-500 py-1 text-white" value="Log In" />
        <p>
          Don't have an account?{" "}
          <Link to="/admin/signup" className="text-blue-500 underline">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
}
