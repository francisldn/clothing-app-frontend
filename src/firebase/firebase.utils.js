import {initializeApp} from 'firebase/app'
import 'firebase/firestore';
import {getAuth, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyCHdc9d9ul-hb3EQRWlNqi5MbrNc4bXCMQ",
    authDomain: "clothing-app-a6113.firebaseapp.com",
    projectId: "clothing-app-a6113",
    storageBucket: "clothing-app-a6113.appspot.com",
    messagingSenderId: "65320074675",
    appId: "1:65320074675:web:284eb2e9f6d8d116789fc6",
    measurementId: "G-5Q1LEYPBNT"
  };
  
  const app = initializeApp(firebaseConfig);
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});

  export const auth = getAuth();
  export const signInWithGoogle = ()=> signInWithPopup(auth, provider)
    .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
    })
    .catch((error) => {
        const errorCode= error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
    })


//   export default firebase;