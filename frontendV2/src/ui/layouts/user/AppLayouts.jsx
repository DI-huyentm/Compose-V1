import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Main from "./Main";

function AppLayouts() {
  return (
    <Box sx={{ width: "100%" }}>
      <Main>
        <Outlet />
      </Main>
    </Box>
  );
}

export default AppLayouts;
