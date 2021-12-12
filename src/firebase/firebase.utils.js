import {initializeApp} from 'firebase/app'
import { getFirestore, doc, getDoc } from 'firebase/firestore';
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

  export const firebase = initializeApp(firebaseConfig);

  const db = getFirestore(firebase);

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
  
    const userRef = doc(db, "users", userAuth.uid);

    const snapShot = await getDoc(userRef);
 
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
    return userRef;
  }

  
  const provider = new GoogleAuthProvider();
  export const auth = getAuth();
  provider.setCustomParameters({prompt: 'select_account'});


  export const signInWithGoogle = () => signInWithPopup(auth, provider)
    