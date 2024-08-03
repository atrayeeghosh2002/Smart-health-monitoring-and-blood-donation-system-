import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./DonorTable.css";

function createData(name, bloodType, heartRate, sex, age) {
  return { name, bloodType, heartRate, sex, age };
}

const rows = [
  createData("Siddharta", "A+", 67, "M", 44),
  createData("JTest", "A+", 89, "M", 26),
  createData("Sidd", "A-", 78, "F", 23),
  createData("Sinaan", "O-", 68, "M", 31),
  createData("Paul", "A-", 83, "F", 35),
];

const DonorTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Blood Type</TableCell>
            <TableCell align="right">Heart Rate</TableCell>
            <TableCell align="right">Sex</TableCell>
            <TableCell align="right">Age</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <div className="tableProfile">
                  <img
                    className="tableProfileImage"
                    src="https://cdn.pixabay.com/photo/2020/04/09/13/27/man-5021469_1280.jpg"
                  ></img>
                  {row.name} &nbsp;
                  <Button variant="outlined">View Profile</Button>
                </div>
              </TableCell>
              <TableCell align="right">{row.bloodType}</TableCell>
              <TableCell align="right">{row.heartRate}</TableCell>
              <TableCell align="right">{row.sex}</TableCell>
              <TableCell align="right">{row.age}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DonorTable;
