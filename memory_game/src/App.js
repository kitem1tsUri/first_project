import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Link to="/easy">easy</Link>
      <div>medium</div>
      <div>hard</div>
    </div>
  );
}

export default App;
