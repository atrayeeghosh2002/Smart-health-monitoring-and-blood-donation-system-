import { FormControlLabel, Switch } from '@mui/material';
import { useState, useEffect } from "react";
import { db } from '../../../firebase';
import { getDatabase, ref, onValue, off, set } from 'firebase/database';
import { doc, updateDoc } from 'firebase/firestore';

export const SuperPower = () => {
  const [checked, setChecked] = useState(false);
  const handleChange = async (event) => {
    setChecked(event.target.checked);
    try {
      const docRef = doc(db, "super", "NYDtGNpragrFiM1Wpa4y");
      await updateDoc(docRef, {
        superKey: event.target.checked ? true : false
      });
      console.log("Document updated successfully");
    } catch (error) {
      console.error("Error updating document: ", error);
    }
  };

  return (
    <FormControlLabel
      control={<Switch  checked={checked} onChange={handleChange} />}
      label={checked ? "Enabled" : "Disabled"}
    />
  );
};
