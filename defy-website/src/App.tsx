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
    constructor(name: string, content: string) {
      this.name = name;
      this.content = content;
    }
  }
  const IntroTab = new Tab("intro", "introtab content here");
  const FiguresTab = new Tab("figures", "figures content here");
  const WhoTab = new Tab("who", "who content here");
  const WhatTab = new Tab("what", "what content here");
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
          <div style={{backgroundColor:'pink'}} onClick={() => setActiveTab(IntroTab.name)}>
            <h2>{IntroTab.name}</h2>
          </div>
          <div style={{backgroundColor:'purple'}} onClick={() => setActiveTab(FiguresTab.name)}>
            <h2>{FiguresTab.name}</h2>
          </div>
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
          {activeTab == IntroTab.name ? <div>{IntroTab.content}</div> : null}
          {activeTab == FiguresTab.name ? (
            <div>{FiguresTab.content}</div>
          ) : null}
          {/* {activeTab == IntroTab.name ? <div>{IntroTab.content}</div> : null} */}
          {/* {activeTab == IntroTab.name ? <div>{IntroTab.content}</div> : null} */}
          {/* <Hero /> */}
          {/* <Intro /> */}
          {/* <Figures /> */}
        </div>
      </div>
    </>
  );
}

export default App;
