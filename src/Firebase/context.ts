import React from "react";
import { Firebase } from ".";

const FirebaseContext = React.createContext<Firebase | null>(null);

export default FirebaseContext;
