import { DonorTable, ProfilePanel } from "../../Components";
import { Typography, Button, Box } from "@mui/material";

import "./Home.css";

const Home = () => {
  return (
    <div id="homeContainer">
      <ProfilePanel />
      <div id="sidePanel">
        <Box
          className="question"
          borderRadius="0.3rem"
          sx={{ boxShadow: 1, padding: 2 }}
        >
          <Typography display="inline" variant="h6" component="div">
            Are you willing to Donate?
          </Typography>
          <Button variant="contained">Yes</Button>
          <Button variant="outlined">No</Button>
        </Box>
        <Box
          className="planelDonateHeading"
          borderRadius="0.3rem"
          sx={{ boxShadow: 1, padding: 2 }}
        >
          <Typography variant="h5" component="div">
            Donors of your Blood Group
          </Typography>
        </Box>
        <DonorTable />
      </div>
    </div>
  );
};

export default Home;
