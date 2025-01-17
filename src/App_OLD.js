import React from "react";
import "./styles/App.css";
import data from "../src/employees.json";
import Hero from "./components/hero/";
import Modal from "./components/modal/";

function App() {
  const numOfMembers = data.length;

  return (
    <div className="App">
      <Hero />
      <section className="main-content">
        <h2 className="main-subheader">
          Our team of<span className="numOfMembers">{numOfMembers}</span>
          strategists, designers, managers, developers make custom products for
          startups and leading brands.
        </h2>

        <Modal data={data} />
      </section>
      <footer className="base-footer">
        <div>
          Icons made by{" "}
          <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
            Freepik
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
