import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import Home from "./pages/Home.jsx";
import DefaultLayout from "./layouts/DefaultLayout.jsx";
import Jobs from "./pages/Jobs.jsx";
import JobAction from "./pages/JobAction.jsx";
import Job, { JobLoader } from "./pages/Job.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<DefaultLayout />}>
      <Route index element={<Home />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/jobs/:id" element={<Job />} loader={JobLoader} />
      <Route path="/add-job" element={<JobAction />} />
      <Route path="/edit-job/:id" element={<JobAction />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
