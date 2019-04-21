import firebase from "firebase/app";
import "firebase/firestore";
//https://github.com/zeit/next.js/issues/6073#issuecomment-467589586
var config = {
  apiKey: "AIzaSyBUcqxtHzVMkJGB4Fr7nH1dRBMPnCMVu24",
  authDomain: "copoetry-a560a.firebaseapp.com",
  databaseURL: "https://copoetry-a560a.firebaseio.com",
  projectId: "copoetry-a560a",
  storageBucket: "copoetry-a560a.appspot.com",
  messagingSenderId: "1035607456245"
};

class Firebase {
  db: firebase.firestore.Firestore | null =
    firebase.apps.length > 0 ? firebase.firestore() : null;
  constructor() {
    if (firebase.apps.length === 0) {
      firebase.initializeApp(config);
      this.db = firebase.firestore();
    }
  }
}

export default Firebase;
