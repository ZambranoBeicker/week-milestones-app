import React,{ createContext  } from "react"
import Firebase from "./firebaseConfig.js" 

const FirebaseContext = createContext(null)

export {Firebase, FirebaseContext}
