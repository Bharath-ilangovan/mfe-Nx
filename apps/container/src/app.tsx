import * as React from 'react';
import { Link, Route, RouterProvider, Routes } from 'react-router-dom';
import { router } from './router/ModuleRoutes';
import "./app.module.css"

// const Masterdata = React.lazy(() => import('masterdata/Module'));

export function App() {
  return (
    <React.Fragment>
      {/* <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/masterdata">Masterdata</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<>
          <h1>mesxui</h1>
          <Button />
        </>} />
        <Route path="/masterdata" element={<Masterdata />} />
      </Routes> */}
      <RouterProvider router={router} />
    </React.Fragment>
  );
}

export default App;
