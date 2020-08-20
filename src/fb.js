import * as firebase from "firebase"

const firebaseConfig ={
  apiKey: "AIzaSyBTSDtH-BVZtU3S0rFifx0KuiMRsF4vAjM",
    authDomain: "moogi-go-bori.firebaseapp.com",
    databaseURL: "https://moogi-go-bori.firebaseio.com",
    projectId: "moogi-go-bori",
    storageBucket: "moogi-go-bori.appspot.com",
    messagingSenderId: "514195613855",
    appId: "1:514195613855:web:5f8f3fa2713072fc181aaa",
    measurementId: "G-B0FT269D53"


}

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth()
const db = firebase.firestore()



export {auth, db}
