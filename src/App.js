import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary Cat 🐱 </h1>
        </header>
        <main>
          <Dictionary defaultKeyword="feline" />
        </main>
        <footer className="App-footer">
          <small>
            This project was coded with 💙 by{" "}
            <a
              href="https://www.shecodes.io/graduates/79171-emma-whitney"
              target="_blank"
              rel="noreferrer"
            >
              Emma Whitney
            </a>{" "}
            and is{" "}
            <a
              href="https://github.com/EmLu26/react-dictionary-app"
              target="_blank"
              rel="noreferrer"
            >
              open-sourced on GitHub.
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
