// import '@/styles/globals.css'

import Navbar from "@/Component/Navbar";
import { store } from "@/Redux/store";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  return (
    <>
    <Provider store={store}>
        <Navbar/>
        <Component {...pageProps} />
    </Provider>
    </>


  )
  
}
