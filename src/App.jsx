import {Route, Routes, BrowserRouter} from 'react-router-dom'
import { Home } from "./page/home";
import { MyCv } from './components/myCv';
import { CvForm } from './components/cVcreator/cvForm';
import ErrorBoundary from './errors/errors';

function App() {
  return (
    <ErrorBoundary>
    <BrowserRouter>
    <Routes>
    <Route path='/cv' element={<CvForm />}></Route>
    <Route path='/*' element={<Home />}></Route>
    <Route path='/miCv' element={<MyCv/>}></Route>
    </Routes>
    </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
