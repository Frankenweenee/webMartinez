import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Home } from "./page/home";
import { MyCv } from "./components/myCv";
import { VirtualWaiterMobile } from "./components/virtualWaiter";
import { MyWebMobile } from "./components/myWeb";
import { Projects } from "./components/Projects";
import ErrorBoundary from "./errors/errors";

function App() {
    return (
        <ErrorBoundary>
            <BrowserRouter>
                <Routes>
                <Route path="/mini_proyectos" element={<Projects />}></Route>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/miCv" element={<MyCv />}></Route>
                    <Route
                        path="/virtual_waiter"
                        element={<VirtualWaiterMobile />}></Route>
                    <Route path="/mi_web" element={<MyWebMobile />}></Route>
                </Routes>
            </BrowserRouter>
        </ErrorBoundary>
    );
}

export default App;
