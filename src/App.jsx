import {Route, Routes, BrowserRouter} from 'react-router-dom'
import { Home } from "./page/home";
import { MyCv } from './components/myCv';
import ErrorBoundary from './errors/errors';

function App() {
  return (
    <ErrorBoundary>
    <BrowserRouter>
    <Routes>

    <Route path='/' element={<Home />}></Route>
    <Route path='/miCv' element={<MyCv/>}></Route>
    </Routes>
    </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
