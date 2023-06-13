import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import logo from "@/../assets/logo.png";
import AuthService from "@/firebase/services/auth";

import { useAppDispatch } from "@/redux/hooks";
import { addUser } from "@/redux/slices/userSlice";
import { toast } from "react-toastify";
import Builder from '@/components/forms';

function LoginCard() {

  const router = useRouter();
  const dispatch = useAppDispatch();

  async function loginHandler(data, setLoading) {

    console.log(data);

    try {


      setLoading(true);
      const response = await AuthService.login(data.email, data.password);
      console.log(response);

      //! check if user is admin
      dispatch(addUser({ token: response.user.accessToken,  email: response.user.email }));
      router.push("/simuladores");

      setLoading(false);
    } catch (e) {
      console.log(e)
      setLoading(false);

      if(e.code == "auth/user-not-found") {
        toast.error("Usuario no encontrado");
      }
    }
  }




  const fields = [
    {
      'name':'email',
      placeholder:'Correo',
      required:true, 
    },    
    {
      'name':'password',
      placeholder:'Password',
      required:true, 
      type:"password"
    },

  ]




  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <Image src={logo} alt="logo" className="rounded-xl w-[75%]" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title mb-6">Admin Login</h2>


          <Builder fields={fields} onClick={loginHandler} />

          
        </div>
      </div>
    </>
  );
}

export default LoginCard;
