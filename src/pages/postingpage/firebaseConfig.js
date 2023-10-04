// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import {initializeApp} from 'firebase/app'
import{getFirestore,collection,getDocs,getDocs, addDoc, deleteDoc, doc} from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyAmJaiQ-y7ul6lBhCpqJ452f0C-7gy4wIg",
    authDomain: "socialmedia-a7e46.firebaseapp.com",
    projectId: "socialmedia-a7e46",
    storageBucket: "socialmedia-a7e46.appspot.com",
    messagingSenderId: "1013125728527",
    appId: "1:1013125728527:web:e0878dcbe15774c6aa567a",
    measurementId: "G-FZW4GB1ERN"
  };

  // init firebase app
  initializeApp(firebaseConfig)

  // init services
  const db = getFirestore();

  // collection ref
  const colRef = collection(db, 'accounts')

  // get collection data
  getDocs(colRef)
  .then((snapshot) => {
    let accs = []
    snapshot.docs.forEach((doc) => {
      books.push({ ...doc.data(), id: doc.id })
    })
    console.log(accs)
  })

  .catch(err => {
    console.log(err.message)
  })

// Adding accounts
const addAccounts  = document.querySelector('.add')
addBookForm.addEventListener('submit', (e)=>{
  e.preventDefault() 
  addDoc(colRef, {
    Name: addAccounts.name.value,
  })
  .then(() =>{
    addAccounts.reset()
  })

})


// Deleting accounts
const deleteAccounts  = document.querySelector('.delete')
addBookForm.addEventListener('submit', (e)=>{
  e.preventDefault()

  const docRef = doc(db, 'accounts', deleteAccounts.id.value )
  
  deleteDoc(docRef)
  .then(() => {
    deleteAccounts.reset
  })
})