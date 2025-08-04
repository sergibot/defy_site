import { useState } from "react";
import "./App.css";
import Hero from "./components/hero";
import Intro from "./components/intro";
import Figures from "./components/figures";

function App() {
  const [activeTab, setActiveTab] = useState("intro");
  class Tab {
    name: string;
    content: string;
    constructor(name:string, content:string) {
      this.name = name;
      this.content = content;
    }
  }
  const IntroTab = new Tab("introtab name","introtab content here")
  return (
    <>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div
          style={{
            backgroundColor: "blue",
            display: "flex",
            flexDirection: "column",
            paddingLeft: "2em",
            paddingRight: "2em",
          }}
        >
          <h2>{IntroTab.name}</h2>
          <p>Who</p>
          <p>What</p>
          <p>Why</p>
          <p>Research</p>
          <p>{activeTab}</p>
        </div>
        <div
          style={{
            backgroundColor: "red",
            flex: "1,1,25px",
            paddingLeft: "2em",
            paddingRight: "2em",
          }}
        >
          <div>{IntroTab.content}</div>
          <Hero />
          <Intro />
          <Figures />
        </div>
      </div>
    </>
  );
}

export default App;
