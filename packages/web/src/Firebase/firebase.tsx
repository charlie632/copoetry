import app from "firebase/app";

var config = {
  apiKey: "AIzaSyBUcqxtHzVMkJGB4Fr7nH1dRBMPnCMVu24",
  authDomain: "copoetry-a560a.firebaseapp.com",
  databaseURL: "https://copoetry-a560a.firebaseio.com",
  projectId: "copoetry-a560a",
  storageBucket: "copoetry-a560a.appspot.com",
  messagingSenderId: "1035607456245"
};

class Firebase {
  constructor() {
    if (app.apps.length === 0) {
      app.initializeApp(config);
    }
  }
}

export default Firebase;
