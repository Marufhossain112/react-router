import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Default from "./components/Default/Default";
import About2 from "./components/About2/About2";
import Home2 from "./components/Home2/Home2";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Default></Default> },
    { path: "/home", element: <Home></Home> },
    { path: "/home2", element: <Home2></Home2> },
    { path: "/about", element: <About2></About2> },
    { path: "/about2", element: <About></About> },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
