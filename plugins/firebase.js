import firebase from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyDs5Z7aGKH_kZmzc9vhbIBMJmNdj9-fjiU",
  authDomain: "bat-project-5137f.firebaseapp.com",
  projectId: "bat-project-5137f",
  storageBucket: "bat-project-5137f.appspot.com",
  messagingSenderId: "54564407557",
  appId: "1:54564407557:web:2881b5e56cb5b29674cf6c"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export default firebase
