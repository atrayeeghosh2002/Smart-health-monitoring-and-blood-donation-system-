import {
  Box,
  Typography,
  TextField,
  Stack,
  Button,
  Link,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { auth, db } from "../../../firebase";

import styles from "./Auth.module.css";

const Auth = () => {
  const [authState, setAuthState] = useState("Login");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [blood, setBlood] = useState("");
  const [disease, setDisease] = useState("");

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleBloodChange = (event) => {
    setBlood(event.target.value);
  };

  const handleDiseaseChange = (event) => {
    setDisease(event.target.value);
  };

  const signUp = async (e) => {
    console.log("Hello");
    const user = await createUserWithEmailAndPassword(auth, email, password)
      .then((credentials) => {
        console.log(credentials);
      })
      .catch((error) => {
        console.log(error);
      });
    try {
      const docref = await addDoc(collection(db, "users"), {
        // uuid: user.uid,
        Name: name,
        Age: age,
        Number: number,
        Address: address,
        Gender: gender,
        Blood: blood,
        Disease: disease,
      });
      console.log("Document written with ID: ", docref.id);
    } catch (e) {
      console.error("Error", e);
    }
  };

  const signIn = (e) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((credentials) => {
        console.log(credentials);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className={styles["auth-page"]}>
      <Box
        className={styles["auth-box"]}
        borderRadius="0.3rem"
        sx={{ boxShadow: 1, padding: 2 }}
      >
        <Typography variant="h4" sx={{ marginBottom: "1rem" }}>
          {authState}
        </Typography>
        <Stack spacing={2} alignItems="center">
          {authState == "Register" && (
            <TextField
              required
              label="Name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              sx={{ width: "75%" }}
            />
          )}
          <TextField
            required
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ width: "75%" }}
          />
          {authState == "Register" && (
            <>
              <TextField
                required
                label="Phone Number"
                type="text"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                sx={{ width: "75%" }}
              />
              <TextField
                required
                label="Address"
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                sx={{ width: "75%" }}
              />
              <FormControl sx={{ width: "75%" }}>
                <InputLabel id="demo-simple-select-label">Sex</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={gender}
                  label="Sex"
                  onChange={handleGenderChange}
                >
                  <MenuItem value="Male">Male</MenuItem>
                  <MenuItem value="Female">Female</MenuItem>
                </Select>
              </FormControl>
              <TextField
                required
                label="Age"
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                sx={{ width: "75%" }}
              />
              <FormControl sx={{ width: "75%" }}>
                <InputLabel id="blood-group">Blood Group</InputLabel>
                <Select
                  labelId="blood-group"
                  id="demo-simple-select"
                  value={blood}
                  label="Blood Group"
                  onChange={handleBloodChange}
                >
                  <MenuItem value="A+ve">A+ve</MenuItem>
                  <MenuItem value="B+ve">B+ve</MenuItem>
                  <MenuItem value="O+ve">O+ve</MenuItem>
                  <MenuItem value="AB+ve">AB+ve</MenuItem>
                  <MenuItem value="A-ve">A-ve</MenuItem>
                  <MenuItem value="B-ve">B-ve</MenuItem>
                  <MenuItem value="O-ve">O-ve</MenuItem>
                  <MenuItem value="AB-ve">AB-ve</MenuItem>
                </Select>
              </FormControl>
              <FormControl sx={{ width: "75%" }}>
                <InputLabel id="chronic-disease">
                  Any Chronic Disease?
                </InputLabel>
                <Select
                  labelId="chronic-disease"
                  id="demo-simple-select"
                  value={disease}
                  label="Any Chronic Disease?"
                  onChange={handleDiseaseChange}
                >
                  <MenuItem value="Yes">Yes</MenuItem>
                  <MenuItem value="No">No</MenuItem>
                </Select>
              </FormControl>
            </>
          )}
          <TextField
            required
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ width: "75%" }}
          />
          {authState === "Register" ? (
            <Button
              sx={{ width: "fit-content" }}
              variant="contained"
              onClick={(e) => signUp(e)}
            >
              {authState}
            </Button>
          ) : (
            <Button
              sx={{ width: "fit-content" }}
              variant="contained"
              onClick={(e) => signIn(e)}
            >
              {authState}
            </Button>
          )}
          <Typography variant="caption">
            {authState === "Register" ? (
              <>
                Already have an account?{" "}
                <Link
                  sx={{ cursor: "pointer" }}
                  onClick={(e) => {
                    setAuthState("Login");
                  }}
                >
                  Login
                </Link>
              </>
            ) : (
              <>
                {"Don't"} have an account?{" "}
                <Link
                  sx={{ cursor: "pointer" }}
                  onClick={(e) => {
                    setAuthState("Register");
                  }}
                >
                  Register
                </Link>
              </>
            )}
          </Typography>
        </Stack>
      </Box>
    </div>
  );
};

export default Auth;
