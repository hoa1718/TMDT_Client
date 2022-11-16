import { initializeApp }  from "firebase/app"
import { getStorage, ref, uploadBytes }  from "firebase/storage"
import uuid  from "uuid-v4"

const firebaseConfig = {
  apiKey: "AIzaSyBAkrAddi_HFxIh62Lb3ZCZm1EUSet0OVw",
  authDomain: "tmdt-21.firebaseapp.com",
  projectId: "tmdt-21",
  storageBucket: "tmdt-21.appspot.com",
  messagingSenderId: "738217066387",
  appId: "1:738217066387:web:74b3dc9eb900299b2bb266",
  measurementId: "G-PL8HLNBVWE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)