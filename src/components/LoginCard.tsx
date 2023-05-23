import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import logo from "../../assets/logo.png";
import AuthService from "../app/services/auth";

import { useAppDispatch } from "@/redux/hooks";
import { addUser } from "@/redux/slices/userSlice";

function LoginCard() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const router = useRouter();
  const dispatch = useAppDispatch();

  async function loginHandler() {
    try {
      if (!email || !password) {
        setError(true);

        setTimeout(() => {
          setError(false);
        }, 2000);

        return;
      }

      setLoading(true);
      const response = await AuthService.login(email, password);
      console.log(response);

      //! check if user is admin
      dispatch(addUser({ token: "abcd", username: "abcd", email: "abcd" }));
      router.push("/simuladores");

      setLoading(false);
    } catch (e) {
      console.log(e);
      setEmail("");
      setPassword("");

      setError(true);

      setTimeout(() => {
        setError(false);
      }, 2000);
    }
  }

  return (
    <>
      {error && (
        <div className="alert alert-warning shadow-lg absolute w-96 top-5 right-5">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current flex-shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Por favor llena todos los datos.</span>
          </div>
        </div>
      )}
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <Image src={logo} alt="logo" className="rounded-xl w-[75%]" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title mb-6">Admin Login</h2>
          <input
            type="text"
            placeholder="Correo"
            className="input input-bordered input-primary w-full max-w-xs mb-6"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="input input-bordered input-primary w-full max-w-xs mb-6"
            onChange={(e) => setPassword(e.target.value)}
          />

          {loading ? (
            <button className="btn btn-primary loading btn-block">
              Cargando...
            </button>
          ) : (
            <button
              className="btn btn-primary btn-block"
              onClick={loginHandler}
            >
              INGRESAR
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default LoginCard;
