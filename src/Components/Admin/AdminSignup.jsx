// import React from "react";
// import { useForm } from "react-hook-form";
//  import { yupResolver } from "@hookform/resolvers/yup";
//  import * as yup from "yup";
//  import axios from "axios";
//  import { Link } from "react-router-dom";

// const schema = yup.object({
//   firstName: yup.string().required("First name is required"),
//   lastName: yup.string().required("Last name is required"),
//   email: yup.string().email("Invalid email format").required("Email is required"),
//   password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
// }).required();

// export default function AdminSignup() {
//   const { register, handleSubmit, formState: { errors } } = useForm({
//     resolver: yupResolver(schema),
//   });

//   const onSubmit = async (data) => {
//     try {
//       const res = await axios.post("http://localhost:3000/api/v1/admin/signupAdmin", data, {
//         withCredentials: true,
//       });
//       console.log(res.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-2 rounded-md border p-6">
//       <input
//         {...register("name")}
//         placeholder="name"
//         className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
//       />
//       {errors.name && <p className="text-red-500">{errors.name.message}</p>}

      
//       <input
//         {...register("email")}
//         placeholder="Email"
//         className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
//       />
//       {errors.email && <p className="text-red-500">{errors.email.message}</p>}

//       <input
//         {...register("password")}
//         placeholder="Password"
//         type="password"
//         className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
//       />
//       {errors.password && <p className="text-red-500">{errors.password.message}</p>}

//       <input type="submit" className="rounded-md bg-blue-500 py-1 text-white" value="Sign Up" />
//       <p>
//         Already have an account?{" "}
//         <Link to="/login" className="text-blue-500 underline">
//           Log In
//         </Link>
//       </p>
//     </form>
//   );
// }
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { Link } from "react-router-dom";

// Define the validation schema using yup
const schema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email format").required("Email is required"),
  password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
}).required();

export default function SignupAdmin() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    console.log('Form data:', data); // Log the data to ensure it is being captured correctly

    try {
      const res = await axios.post("http://localhost:3000/api/v1/admin/signupAdmin", data, {
        withCredentials: true,
      });
      console.log(res.data);
      alert('Admin signed up successfully!');
    } catch (error) {
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
      console.log('Error config:', error.config);
    }
  };

  return (
    <div className="flex justify-center">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md flex flex-col gap-y-2 rounded-md border p-6">
        <input
          {...register("name")}
          placeholder="Name"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}

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
