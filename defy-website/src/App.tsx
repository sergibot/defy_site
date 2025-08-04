import { useState } from "react";
import "./App.css";

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
  const tabs = [IntroTab, FiguresTab, WhoTab, WhatTab];
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
          {tabs.map(function (tab) {
            return (
              <div
                style={{ backgroundColor: "pink" }}
                onClick={() => setActiveTab(tab.name)}
              >
                <h2>{tab.name}</h2>
              </div>
            );
          })}
        </div>
        <div
          style={{
            backgroundColor: "red",
            flex: "1,1,25px",
            paddingLeft: "2em",
            paddingRight: "2em",
          }}
        >
          {tabs.map(function (tab) {
            return (
              <div>
                {activeTab == tab.name ? (
                  <div>{tab.content}</div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
