import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
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
  db: firebase.firestore.Firestore;

  auth: firebase.auth.Auth = firebase.apps.length > 0 ? firebase.auth() : null;
  constructor() {
    if (firebase.apps.length === 0) {
      firebase.initializeApp(config);
      this.db = firebase.firestore();
      const settings = { /* your settings... */ timestampsInSnapshots: true };
      this.db.settings(settings);
      this.auth = firebase.auth();
    } else {
      this.db = firebase.firestore();
      const settings = { /* your settings... */ timestampsInSnapshots: true };
      this.db.settings(settings);
      this.auth = firebase.auth();
    }
  }

  signIn() {
    return this.auth.signInAnonymously();
  }
}

export default Firebase;
