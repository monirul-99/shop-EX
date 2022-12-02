import { RouterProvider } from "react-router-dom";
import { Router } from "./Router/Routes";
function App() {
  return (
    <div className="bg-[#1E293B]">
      <RouterProvider router={Router}></RouterProvider>
    </div>
  );
}

export default App;
