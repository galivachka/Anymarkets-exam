import { useState } from "react";
import { AuthUser } from "../../utils/auth";
import "./Login.scss";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
// import { useNotifyContext } from "../../components/loginToastify/LoginToastify";

const Login = () => {
  const { login } = AuthUser();
  const navigate = useNavigate();
  const [local, setLocal] = useState(() => {
    const storeItems = localStorage.getItem("data");
    return storeItems ? JSON.parse(storeItems) : [];
  });

  const { register, handleSubmit, formState, reset } = useForm();
  const { errors } = formState;

  const onSubmit = (data) => {
    setLocal([
      ...local,
      {
        id: Date.now(),
        email: data.email,
        password: data.password,
      },
    ]);

    login({ local });
    navigate("/home");
    // notify();
    reset();
  };

  localStorage.setItem("data", JSON.stringify(local));

  return (
    <>
      <section className="login">
        <div className="container">
          <div className="login__box">
            <p className="text">Assalomu alleykum Ustoz</p>
            <h1 className="title">Xush Kelibsiz,siz uchun login otish shart emas</h1>
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <p>Email</p>
                <input
                  type="email"
                  name="email"
                  autoComplete="off"
                  placeholder="Please enter your email"
                  {...register("email", {
                    required: "Error: Email is empty!",
                    pattern: {
                      message: "Please enter email address!",
                      value: /^\w+([/.-]?\w+)*@\w+([/.-]?\w+)*(\w{2,3})+$/,
                    },
                  })}
                />
                <br />
                {errors.email ? (
                  <span className="error">{errors.email.message}</span>
                ) : null}
              </div>

              <div className="form-control">
                <p>Password</p>
                <input
                  type="password"
                  name="password"
                  autoComplete="off"
                  placeholder="Enter password"
                  {...register("password", {
                    required: "Error: Password is empty!",
                  })}
                />
                <br />
                {errors.password ? (
                  <span className="error">{errors.password.message}</span>
                ) : null}
              </div>

              <button type="submit" className="form-btn">
                Login
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
