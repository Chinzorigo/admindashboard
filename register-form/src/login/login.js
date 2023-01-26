import { useState } from "react";
import { useFormik } from "formik";
import "./login.css";
import "../shared/main.css";
import * as Yup from "yup";
import axios from "axios";
import { Link } from "react-router-dom";
import Register from "../register/register";

function Login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    onSubmit: (values) => {
      // Энд нэвтрэх тов дарагдахад баазаас тохирох өгөгдөл шалгана.
    },
  });


  return (
    <div className="container">
      <div className="title">Нэвтрэх</div>
      <form action="#" onSubmit={formik.handleSubmit}>
        <div className="userDetails">
          <div className="inputBox">
            <span className="details">Имэйл хаяг</span>
            <input
              name="email"
              type="email"
              placeholder="someone@gmail.com"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </div>

          <div className="inputBox">
            <span className="details">Нууц үг</span>
            <input
              name="password"
              type="text"
              placeholder="**"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
          </div>
        </div>
        <div className="button">
          <input type="submit" value="Нэвтрэх" />
        </div>
        <div>
          <button>
            <Link to="/register">Бүртгүүлэх</Link>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
