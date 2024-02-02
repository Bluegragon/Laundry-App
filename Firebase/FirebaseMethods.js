import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {auth, db} from './firebaseConfig'
import { doc, setDoc } from "firebase/firestore";



export async function userSignIn(email,password,phone) {
     let user;
    await createUserWithEmailAndPassword(auth, email, password)
     .then((userCredential) => {
       // Signed up 
        user = userCredential.user;
        const myUserId=auth.currentUser.uid;
        console.log(myUserId);
        setDoc(doc(db,"users",`${myUserId}`),{
          email: email,
          password: password,
          phone:phone,
        });
       // ...
     })
     .catch((error) => {
       const errorCode = error.code;
       const errorMessage = error.message;
       // ..
     });
     return user;
}
export const login=(email,password)=>{
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}