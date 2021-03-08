import firebase from 'firebase';	

const firebaseConfig = {	
    apiKey: "AIzaSyDnJ0huw2j3IcZUxgEBZJkddVvKBQYdv6s",
    authDomain: "treinazap-7bec8.firebaseapp.com",
    projectId: "treinazap-7bec8",
    storageBucket: "treinazap-7bec8.appspot.com",
    messagingSenderId: "317966996675",
    appId: "1:317966996675:web:a8bbbb017af425e1607e76"
};	

const firebaseApp = firebase.initializeApp(firebaseConfig);	

const db = firebaseApp.firestore();	
const auth = firebase.auth();	
const provider = new firebase.auth.GoogleAuthProvider();	
const storage = firebase.storage();

export { auth, provider, storage, firebase };	
export default db;  
