import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

//Pages
import Speakers from "./Pages/Speakers";
import Headphones from "./Pages/Headphones";
import RootLayout from "./Pages/RootLayout";
import Earphones from "./Pages/Earphones";
import Home from "./Pages/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="speakers" element={<Speakers />} />
      <Route path="headphones" element={<Headphones />} />
      <Route path="earphones" element={<Earphones />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
