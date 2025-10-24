import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext"; 
import { LoaderProvider } from "./context/LoaderContext"; 
import Loader from "./components/Loader"; 
import ErrorBoundary from "./components/ErrorBoundary";
import ApiStatus from "./components/ApiStatus";
import { ToastContainer } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css"; 

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AddTransaction from "./components/AddTransaction";
import Transactions from "./components/Transactions";
import Budget from "./components/Budget";
import Charts from "./components/Charts";
import Landing from "./pages/Landing";

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <LoaderProvider>
          {/* ✅ Global Loader */}
          <Loader />
          
          {/* ✅ API Status Check */}
          <ApiStatus />

          <Router>
            {/* ✅ Toast container */}
            <ToastContainer
              position="top-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
            />

            {/* ✅ Routes */}
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/home" element={<Home />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/budget" element={<Budget />} />
              <Route path="/charts" element={<Charts />} />
              <Route path="/add" element={<AddTransaction />} />
            </Routes>
          </Router>
        </LoaderProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
