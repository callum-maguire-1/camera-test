import "./App.css";

import { WebcamComponent } from "./Webcam";

function App() {
  return (
    <div className="App">
      <a
        className="App-link"
        href="http://localhost:3003"
        target="_blank"
        data-cy="camera-link"
        rel="noopener noreferrer"
      >
        Learn React
      </a>

      <WebcamComponent></WebcamComponent>
    </div>
  );
}

export default App;
