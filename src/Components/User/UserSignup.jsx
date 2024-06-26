
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";

import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import '../../pages/Users/UserAuth.css';
import backgroundImage from '../../assets/images/movielogin.jpg';
import { useNavigate } from "react-router-dom";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react'

const schema = yup.object({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup.string().email("Invalid email format").required("Email is required"),
  password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
}).required();

export default function Signup() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate(); // Initialize the useNavigate hook
  const [isSubmitting, setIsSubmitting] = useState(false); // State to prevent double submission

  const onSubmit = async (data) => {
    if (isSubmitting) return; // Prevent further submission
    setIsSubmitting(true); // Set submitting to true

    console.log('Form data:', data); // Log the data to ensure it is being captured correctly

    try {
      const res = await axios.post("https://movie-backendserver.onrender.com/api/v1/users/signin", data, {
        withCredentials: true,
      });
      alert('User signed up successfully!');
      
      navigate("/login");
      console.log(res.data);
      //  navigate('/movie')

    } catch (error) {
      console.log(error);
      if (error.response) {
        console.log('Error response data:', error.response.data);
        console.log('Error response status:', error.response.status);
        console.log('Error response headers:', error.response.headers);
        alert(`Error: ${error.response.data.message}`);
      } else if (error.request) {
        console.log('Error request data:', error.request);
      } else {
        console.log('Error message:', error.message);
      }
      // console.log('Error config:', error.config);
    
    }
    finally {
      setIsSubmitting(false); // Reset submitting state
    }
  
  };

  return (
    <div className="background-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <form onSubmit={handleSubmit(onSubmit)} className="form-container flex flex-col gap-y-2 rounded-md border p-6">
        <input
          {...register("firstName")}
          placeholder="First Name"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
        />
        {errors.firstName && <p className="text-red-500">{errors.firstName.message}</p>}

        <input
          {...register("lastName")}
          placeholder="Last Name"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
        />
        {errors.lastName && <p className="text-red-500">{errors.lastName.message}</p>}

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

        <input type="submit" className="rounded-md bg-blue-500 py-1 text-white" value="Sign Up" />
        <p>
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 underline">
            Log In
          </Link>
        </p>
      </form>
    </div>
  );
}






