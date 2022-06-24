import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebae.config";


const initializeAuth = () => {
    initializeApp(firebaseConfig);
}

export default initializeAuth;