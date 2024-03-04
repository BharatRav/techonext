import logo from "./logo.svg";
import "./App.css";
import { Suspense } from "react";
import { Loading, RegisterForm } from "./LazyLoading/Loading";
import ThreeDots from "./components/Loadings/ThreeDots/ThreeDots";

function App() {
  return (
    <Suspense fallback={<Loading />}>
      {/* <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div> */}
      <div>
        <RegisterForm />
      </div>
    </Suspense>
  );
}

export default App;
