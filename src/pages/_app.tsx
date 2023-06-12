import { store } from "@/redux/store";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import CheckLogin from '@/components/login/checkLogin';

export default function App({ Component, pageProps }: AppProps) {

 

  return (
    <Provider store={store}>

      <CheckLogin>
        <Component {...pageProps} />
        <ToastContainer />
      </CheckLogin>
    </Provider>
  );
}
