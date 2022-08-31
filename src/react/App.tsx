import { ToastContainer } from "react-toastify";

// containers
import Router from "./pages/router";

// assets
import "react-toastify/dist/ReactToastify.css";


function App() {
  return (
    <div className="App">
      <Router/>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
