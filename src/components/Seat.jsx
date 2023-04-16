import React, { useEffect, useState } from "react";
import { doc, onSnapshot, getDoc, updateDoc } from "firebase/firestore";
import { auth, db } from "../../src/pages/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  Chair,
  ReverseChair,
  LivingRoom,
  ChairTaken,
  ReverseChairTaken,
  LivingRoomTaken,
} from "../icons/icons";
import "../styles/Seat.css";

function Seat({
  seat,
  date,
  reverse,
  livingRoom,
  setShowCongratsPopup,
  setReservationDetails,
}) {
  const [user] = useAuthState(auth);
  const [seatedByUID, setSeatedByUID] = useState("");
  const [seatedByName, setSeatedByName] = useState("");

  const docRef = doc(db, `dates/${date}/seats`, seat.id);

  useEffect(() =>
    onSnapshot(docRef, (doc) => {
      console.log(doc.data());
      setSeatedByUID(doc.data()?.seatedByUID);
      setSeatedByName(doc.data()?.seatedByName);
    })
  );

  const occupyChair = async () => {
    console.log("inside occupyChair", docRef);
    await updateDoc(docRef, {
      isAvailable: false,
      seatedByUID: user.uid,
      seatedByName: user.displayName,
    });
    alert(`congrats ${user.displayName}! you reserved ${seat.id} for ${date}`);
    // setReservationDetails({
    //   date,
    //   seatID: seat.id,
    //   userName: user.displayName,
    // });
    // setShowCongratsPopup(true);
  };

  const releaseSeat = async () => {
    await updateDoc(docRef, {
      isAvailable: true,
      seatedByUID: "",
      seatedByName: "",
    });
  };

  const isSeatAvailable = async () => {
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("doc exists");
      return docSnap.data().isAvailable;
    } else {
      console.log("No such document!");
      return false;
    }
  };

  const handleOrderSeat = async () => {
    if (!user) {
      alert("You must log in to reserve a seat");
      return;
    }
    console.log(`order seat ${seat.id} by ${user?.email}`);
    //check if seat is available
    const isAvailable = await isSeatAvailable();
    if (isAvailable) {
      console.log("here");
      occupyChair();
    }
    if (!isAvailable) {
      alert("chair is not available");
    }
  };
  return (
    <div>
      {seatedByUID === user?.uid ? (
        <div className="chair-with-header">
          <button className="char-icon" onClick={releaseSeat}>
            {livingRoom && LivingRoomTaken}
            {!livingRoom && reverse && ReverseChairTaken}
            {!livingRoom && !reverse && ChairTaken}
          </button>
          <span className="white">{seatedByName}</span>
        </div>
      ) : (
        seatedByUID &&
        seatedByUID !== user?.uid && (
          <div className="chair-with-header">
            <span>
              {livingRoom && LivingRoomTaken}
              {!livingRoom && reverse && ReverseChairTaken}
              {!livingRoom && !reverse && ChairTaken}
            </span>
            <span className="white">{seatedByName}</span>
          </div>
        )
      )}
      {seatedByUID === "" && (
        <div>
          <button className="char-icon" onClick={handleOrderSeat}>
            {livingRoom && LivingRoom}
            {!livingRoom && reverse && ReverseChair}
            {!livingRoom && !reverse && Chair}
          </button>
          {/* <button onClick={handleOrderSeat}>
            Order Seat {seat.id} {date}
          </button> */}
        </div>
      )}
      {/* {showCongratsPopup && <h1>waiting!</h1>} */}
    </div>
  );
}

export default Seat;
