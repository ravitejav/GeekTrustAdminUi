import './App.css';
import ErrorBoundary from "./Components/ErrorBoundary";
import { HomPage } from './Components/Hompage';

function App() {
  return (
    <ErrorBoundary>
      <HomPage />
    </ErrorBoundary>
  );
}

export default App;
