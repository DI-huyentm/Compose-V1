// import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Toaster } from "react-hot-toast";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import Homepage from "./pages/Homepage";
import AppLayouts from "./ui/layouts/user/AppLayouts";
// import Unauthorize from "./pages/Unauthorize";
// import NotFoundPage from "./pages/NotFoundPage";
// import { CartProvider } from "./contexts/CartContext";
// import PaymentStepper from "./features/payments/PaymentStepper";

const queryClient = new QueryClient();
const theme = createTheme({
  palette: {
    primary: {
      // main: "rgba(53, 162, 235, 1)",
      main: "#051650",
    },
    error: {
      main: "rgba(255, 99, 132, 1)",
    },
    success: {
      main: "rgba(75, 192, 192, 1)",
    },
    warning: {
      main: "rgba(255, 206, 86, 1)",
    },
    info: {
      main: "rgba(54, 162, 235, 1)",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <BrowserRouter>
            <Routes>
              <Route element={<AppLayouts />}>
                <Route path="/" element={<Homepage />} />
              </Route>
            </Routes>
        </BrowserRouter>

        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 3000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
            },
          }}
        />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
