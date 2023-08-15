import {Route, Routes, BrowserRouter} from 'react-router-dom'
import { Home } from "./page/home";
import { MyCv } from './components/myCv';
import { VirtualWaiterMobile } from './components/virtualWaiter';
import { MyWebMobile } from './components/myWeb';
import ErrorBoundary from './errors/errors';

function App() {
  return (
    <ErrorBoundary>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home />}></Route>
    <Route path='/miCv' element={<MyCv/>}></Route>
   <Route path='/works1' element={<VirtualWaiterMobile/>}></Route>
   <Route path='/works2' element={<MyWebMobile/>}></Route>
    </Routes>
    </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
