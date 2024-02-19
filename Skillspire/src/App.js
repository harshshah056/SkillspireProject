import "./App.css";
import { BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./pages/Home";

function App() {
  return (
   <div className="flex min-h-screen w-screen flex-col bg-richblack-900 font-inter">
     <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />} />
    </Routes>
    </BrowserRouter>
   </div>   
  );
}

export default App;
