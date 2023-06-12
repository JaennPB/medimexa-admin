import {useRouter } from "next/navigation";
import AuthService from '@/firebase/services/auth'
import { useAppDispatch } from "@/redux/hooks";

import { addUser } from "@/redux/slices/userSlice";


export default function CheckLogin ({children}) {

  const router = useRouter();
  const dispatch = useAppDispatch();

  AuthService.onAuth((user)=>{
    if(user){
      console.log('compracion user', user);
      dispatch(addUser({ token: user.accessToken,  email: user.email }));      
    } 
  })


  return <>
  {children}
  </>


}
