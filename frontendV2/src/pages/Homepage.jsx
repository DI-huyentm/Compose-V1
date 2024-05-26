import { Box } from "@mui/material";
import StudentCardList from "../features/students/StudentCardList";
import StudentCreate from "../features/students/StudentCreate";

function Homepage() {
  return (
    <Box sx={{ width: { md: "80%", xs: "90%" }, margin: "0 auto" }}>
      <StudentCreate />
      <StudentCardList />
    </Box>
  );
}

export default Homepage;
