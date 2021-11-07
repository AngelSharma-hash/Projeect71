import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
 //Add configuration here
 apiKey: "AIzaSyDISlsecVY1mvbVqP6yZo1OazhmNawY23U",
 authDomain: "project71-a168d.firebaseapp.com",
 projectId: "project71-a168d",
 storageBucket: "project71-a168d.appspot.com",
 messagingSenderId: "144346676085",
 appId: "1:144346676085:web:2f24dd5681fcb00e7eb13c"
 
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

