import React, { useState, useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import LinearProgress from '@mui/material/LinearProgress';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { db, redb } from '../../../firebase';
import { get, getDatabase, onValue, ref } from 'firebase/database';
import { useRef } from 'react';
import { doc, getDoc } from 'firebase/firestore';

const CustomModal = ({ open, handleClose }) => {
  const [heartRateReadings, setHeartRateReadings] = useState([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isError, setIsError] = useState(false);
  const intervalId = useRef();
  const count = useRef(0);

  // Function to generate random heart rate readings
  const generateRandomReading = () => {
    let min, max;
    // Determine heart rate range based on previous readings
    if (count.current <= 7) {
      // First 5 readings: Heart rate range (95, 120)
      min = 95;
      max = 135;
    } else {
      // Rest of the readings: Heart rate range (70, 85)
      min = 60;
      max = 90;
    }

    // Generate random heart rate within the specified range
    const newReading = {
      date: new Date().toISOString().slice(0, 19).replace('T', ' '), // Current date and time
      rate: Math.floor(Math.random() * (max - min + 1)) + min, // Random heart rate within the range
    };
    count.current++;
    setHeartRateReadings(prevReadings => [...prevReadings, newReading]);
  };

  // Start generating heart rate readings
  const handleStart = async () => {
    setHeartRateReadings([]);
    setIsGenerating(true);
    count.current = 0;
    const docRef = doc(db, "super", "NYDtGNpragrFiM1Wpa4y")
    const docSnap = await getDoc(docRef);
    if(docSnap.exists() && docSnap.data().superKey===true) {
      setIsError(false);
      intervalId.current = setInterval(() => {
        generateRandomReading();
      }, 1500);
    }else{
      setIsError(true);
      setIsGenerating(false);
    }
  };

  // Stop generating heart rate readings
  const handleStop = () => {
    clearInterval(intervalId.current); // Clear interval when not generating
    setIsGenerating(false);
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth>
      <DialogTitle>Heart Rate Measurement</DialogTitle>
      <DialogContent>
        {/* Progress bar for measurement */}
        {isGenerating && <LinearProgress variant="indeterminate" />}
        {isError && "Error try again"}
        {/* List of previous readings */}
        <List>
          <ListItem>
            <ListItemText primary="Previous Readings" />
          </ListItem>
          {heartRateReadings.map((reading, index) => (
            <ListItem key={index}>
              <ListItemText primary={`Date: ${reading.date}`} secondary={`Rate: ${reading.rate}`} />
            </ListItem>
          ))}
        </List>
      </DialogContent>
      <DialogActions>
        {!isGenerating ? (
          <Button onClick={handleStart}>Start</Button>
        ) : (
          <Button onClick={handleStop}>Stop</Button>
        )}
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default CustomModal;
