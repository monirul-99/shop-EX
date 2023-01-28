import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { Router } from "./Router/Routes";
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
    AOS.refresh();
  });
  return (
    <div className="bg-white font-Josefin">
      <RouterProvider router={Router}></RouterProvider>
    </div>
  );
}

export default App;
