import app from "firebase/app";
import "firebase/firestore";
var config = {
  apiKey: "AIzaSyBUcqxtHzVMkJGB4Fr7nH1dRBMPnCMVu24",
  authDomain: "copoetry-a560a.firebaseapp.com",
  databaseURL: "https://copoetry-a560a.firebaseio.com",
  projectId: "copoetry-a560a",
  storageBucket: "copoetry-a560a.appspot.com",
  messagingSenderId: "1035607456245"
};

class Firebase {
  db: app.firestore.Firestore | null =
    app.apps.length > 0 ? app.firestore() : null;
  constructor() {
    if (app.apps.length === 0) {
      app.initializeApp(config);
      this.db = app.firestore();
    }
  }
}

export default Firebase;
