import React from "react";
import { Grid } from "@material-ui/core";
import { FirebaseContext, Firebase } from "../../src/Firebase";
import { Poem } from "shared";
const Write: React.FC<any> = () => {
  const firebase: Firebase = React.useContext(
    FirebaseContext
  ) as Firebase;
  const db = firebase.db as firebase.firestore.Firestore;
  const lastPoem: Poem = useLastPoem(db) as Poem;

  React.useEffect(() => {
    const unsubscribe = db.collection("Poems").onSnapshot(doc => {
      console.log(doc.docs.map(d => d.data()));
    });

    return function() {
      unsubscribe();
    };
  }, []);

  React.useEffect(() => {
    console.log(lastPoem);
  }, [lastPoem]);

  return <Grid container>This is write</Grid>;
};

function useLastPoem(db: firebase.firestore.Firestore) {
  const [lastPoem, setLastPoem] = React.useState<Poem | null>(null);
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
      const docs = snap.docs.map(d => d.data());
      if (docs.length > 0) {
        setLastPoem(docs[0] as Poem);
      }
    }
  };

  return lastPoem;
}

export default Write;
