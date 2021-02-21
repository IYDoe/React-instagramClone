
// import { seedDatabase } from '../seed'

const firebaseConfig = {
    apiKey: "AIzaSyBKiB7_iMou71OA87grCfKvvBgkKJxz1UI",
    authDomain: "instagram-3902a.firebaseapp.com",
    projectId: "instagram-3902a",
    storageBucket: "instagram-3902a.appspot.com",
    messagingSenderId: "466446542662",
    appId: "1:466446542662:web:466d3d46c2ee36836fe747"
};

const firebase = window.firebase.initializeApp(firebaseConfig)
const { FieldValue } = window.firebase.firestore

// seedDatabase(firebase)

export { firebase, FieldValue }