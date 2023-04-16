import React from "react";
import Booking from "./Booking";
import Seat from "./Seat";
import { doc, getDoc, addDoc, updateDoc, setDoc } from "firebase/firestore";
import { db } from "../pages/firebase";

const seats = ["livingRoom1", "kitchen1", "kitchen2", "kitchen3", "kitchen4"];

export async function initDate(date) {
  seats.map(async (seat) => {
    let docRef = doc(db, `dates/${date}`);
    await setDoc(docRef, {});
    docRef = doc(db, `dates/${date}/seats/${seat}`);
    await setDoc(docRef, {
      id: seat,
      isAvailable: true,
      seatedByName: "",
      seatedByUID: "",
    });
  });
}
