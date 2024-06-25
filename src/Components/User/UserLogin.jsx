
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { Link } from "react-router-dom";
import '../../pages/Users/UserAuth.css';
import backgroundImage from '../../assets/images/movielogin.jpg';
import { useNavigate } from "react-router-dom";

const schema = yup.object({
  email: yup.string().email("Invalid email format").required("Email is required"),
  password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
}).required();

export default function Login({ setFormType }) {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const onSubmit = async (data) => {
    try {
      const res = await axios.post("http://localhost:3000/api/v1/users/login", data, {
        withCredentials: true,
      });
      if (res.data && res.data.token) {
        sessionStorage.setItem('token', res.data.token);
        navigate('/movie');
      } else {
        throw new Error("Admin not authorized");
      }
    } catch (error) {
      console.log(error);
      alert("user not found");
      // Optionally, you can redirect to a different page or stay on the login page
    }
  };
      

  //     sessionStorage.setItem('token', res.data.token);
  //     navigate('/movie');

  //     if (!token) {
  //       throw new Error("user not authorized");
  //     }
  //     console.log(res.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <div className="background-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <form onSubmit={handleSubmit(onSubmit)} className="form-container flex flex-col gap-y-2 rounded-md border p-6">
        <input
          {...register("email")}
          placeholder="Email"
          className="input-field"
        />
        {errors.email && <p className="error-message">{errors.email.message}</p>}

        <input
          {...register("password")}
          placeholder="Password"
          type="password"
          className="input-field"
        />
        {errors.password && <p className="error-message">{errors.password.message}</p>}

        <input type="submit" className="submit-button" value="Login" />
        <p>
          Already have an account?{" "}
          <Link to="/" className="signup-link">
            Signup
          </Link>
        </p>
      
      </form>
    </div>
  );
}

