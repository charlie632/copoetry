import React from "react";
import { Grid } from "@material-ui/core";
import { FirebaseContext, Firebase } from "../../src/Firebase";

interface Poem {
  name: string;
}
const Write: React.FC<any> = () => {
  const firebase: Firebase = React.useContext(FirebaseContext) as Firebase;
  const db = firebase.db as firebase.firestore.Firestore;
  const [lastPoem, lastId] = useLastPoem(db);

  React.useEffect(() => {
    if (lastId !== "") {
      const unsubscribe = db
        .collection("Poems")
        .doc(lastId)
        .onSnapshot(doc => {
          console.log(doc.data());
        });

      return function() {
        unsubscribe();
      };
    }
  }, [lastId]);

  if (lastPoem === null) {
    return (
      <Grid container justify="center">
        {" "}
        Loading...
      </Grid>
    );
  }

  return <Grid container>Poem name: {lastPoem.name}</Grid>;
};

function useLastPoem(db: firebase.firestore.Firestore) {
  const [lastPoem, setLastPoem] = React.useState<[Poem, string]>([null, ""]);
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
        setLastPoem([docs[0] as Poem, snap.docs[0].id]);
      }
    }
  };

  return lastPoem;
}

export default Write;
