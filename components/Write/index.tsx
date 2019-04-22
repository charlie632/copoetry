import React from "react";
import { Grid } from "@material-ui/core";
import { FirebaseContext, Firebase } from "../../src/Firebase";
import { Poem } from "../../interfaces";

const PoemContext = React.createContext<Poem>(null);

const Write: React.FC<any> = () => {
  const poem = usePoemSubscription();
  const userId = useSignIn();

  if (poem === null) {
    return (
      <Grid container justify="center">
        Loading...
      </Grid>
    );
  }

  return (
    <PoemContext.Provider value={poem}>
      <PoemHolder />
    </PoemContext.Provider>
  );
};

interface PoemProps {}
const PoemHolder: React.FC<PoemProps> = () => {
  const poem = React.useContext(PoemContext);
  return (
    <Grid container justify="center">
      <Grid item xs={12} sm={7}>
        <p style={{ textAlign: "center" }}>title: {poem.name}</p>
      </Grid>
    </Grid>
  );
};

function useSignIn() {
  const firebase: Firebase = React.useContext(FirebaseContext) as Firebase;
  const [userId, setUserId] = React.useState<string>(null);

  React.useEffect(() => {
    const unsuscribe = firebase.auth.onAuthStateChanged(
      (user: firebase.User) => {
        if (!user) {
          firebase.signIn();
        } else {
          const isAnnonymous = user.isAnonymous;
          if (!isAnnonymous) {
            console.log("ERROR");
          }
          const uid = user.uid;
          setUserId(uid);
        }
      }
    );

    return function() {
      unsuscribe();
    };
  }, []);

  return userId;
}

function usePoemSubscription() {
  const firebase: Firebase = React.useContext(FirebaseContext) as Firebase;
  const db = firebase.db as firebase.firestore.Firestore;
  const poemId = useLastPoem(db);
  const [poem, setPoem] = React.useState<Poem>(null);

  React.useEffect(() => {
    if (poemId !== null) {
      const unsubscribe = db
        .collection("Poems")
        .doc(poemId)
        .onSnapshot(doc => {
          setPoem(doc.data() as Poem);
        });

      return function() {
        unsubscribe();
      };
    }
  }, [poemId]);

  return poem;
}

function useLastPoem(db: firebase.firestore.Firestore) {
  const [lastId, setLastId] = React.useState<string>(null);
  React.useEffect(() => {
    getLastPoem();
  }, []);

  const getLastPoem = async () => {
    const snap = await db
      .collection("Poems")
      .orderBy("creationDate")
      .limit(1)
      .get();
    if (!snap.empty) {
      if (snap.docs.length > 0) {
        setLastId(snap.docs[0].id);
      }
    }
  };

  return lastId;
}

export default Write;
