import { RouterProvider } from "react-router-dom";
import { Router } from "./Router/Routes";
function App() {
  return (
    <div className="bg-white font-Josefin">
      <RouterProvider router={Router}></RouterProvider>
    </div>
  );
}

export default App;
