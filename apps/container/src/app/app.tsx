import * as React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { Button } from "@product-ui/cds";

const Masterdata = React.lazy(() => import('masterdata/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
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
      </Routes>
    </React.Suspense>
  );
}

export default App;
