import Home from "./pages/home/Home";
import Root from "./pages/Root";
import NotFound from './pages/NotFound'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Create from "./pages/create/Create";



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="create" element={<Create />} />


      <Route path="*" element={<NotFound />} />

      {/* ... etc. */}
    </Route>
  )
);



function App() {
 
  return (
    
      <RouterProvider router={router} />
   
  )
}

export default App;