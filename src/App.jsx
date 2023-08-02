import { Home } from "./page/home";
import "./App.css";
import ErrorBoundary from './errors/errors';

function App() {
  return (
    <ErrorBoundary>
      <Home />
    </ErrorBoundary>
  );
}

export default App;
