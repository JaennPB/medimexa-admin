import {useRouter } from "next/navigation";
import {useAppSelector} from '@/redux/hooks';

export default function CheckLogin (login:boolean=true) {

  const router = useRouter();
  const user  = useAppSelector(state=>state.user);


  if(process.browser) {
    if(login) {
      if(user.email==null) {
        router.push('/login')
      }
    } else {
      if (user.email) {
        router.push('/mexaquiz')
      }
    }
    
  }



}
