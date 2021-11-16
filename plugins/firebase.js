import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// import { getDatabase } from 'firebase/database'

const firebaseApp = initializeApp({

  apiKey: 'AIzaSyBAj1mp4Whrb9MD9lN1UGjVl3atEg-wK68',
  authDomain: 'test-94ef6.firebaseapp.com',
  databaseURL: 'https://test-94ef6-default-rtdb.firebaseio.com',
  projectId: 'test-94ef6',
  storageBucket: 'test-94ef6.appspot.com',
  messagingSenderId: '931043952268',
  appId: '1:931043952268:web:c90d4de8a4efbac1291da9'
})
// eslint-disable-next-line no-unused-vars
const db = getFirestore(firebaseApp)
export {
  db
}
