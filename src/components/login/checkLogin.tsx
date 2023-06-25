import {useRouter } from "next/navigation";
import AuthService from '@/firebase/services/auth'
import { useAppDispatch } from "@/redux/hooks";

import { addUser } from "@/redux/slices/userSlice";

type props = {
  children:any
}

export default function CheckLogin ({children}: props) {

  const router = useRouter();
  const dispatch = useAppDispatch();

  AuthService.onAuth((user:any)=>{
    if(user){
      console.log('comparacion user', user);
      dispatch(addUser({ 
        token: user.accessToken,
        email: user.email,
        id:user.uid
      }));      
    } 
  })


  return <>
  {children}
  </>


}
