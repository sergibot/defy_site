import { useState } from "react";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("intro");
  class Tab {
    id: string;
    name: string;
    content: string;
    constructor(id: string, name: string, content: string) {
      this.id = name;
      this.name = name;
      this.content = content;
    }
  }
  const IntroTab = new Tab(
    "intro",
    "Introduction",
    `DeepfAIke "porn" (DFIAM) is a type of image-based sexual abuse material (DFIAM), separated from child sexual abuse material (CSAM) only by the (apparent) age of the victim-survivor depicted.
Distribution of DFIAM is illegal in ___ countries, including ___.
Creation of DFIAM is illegal in ____.

Despite this, there were 1,000 websites distributing DFIAM as of June 2025, and 1,000 websites where visitors can create DFIAM.

500 of these websites allow the visitor to create DFIAM of a real individual by uploading a single photo of the person they want to "nudify". 
As of 2025, these websites were receiving ___ visits per month.

`
  );
  // at DefyAbuse.org we are the only entity monitoring the proliferation of DFIAM.

  // We are doing our best to tackle it: outside of annually collecting and combing through thousands of websites (at minimum 18,000 urls per year), we have advised the home office vawg team and the dist etc

  const FiguresTab = new Tab("figures", "Figures", "figures content here");
  const WhoTab = new Tab("who", "Who We Are", "who content here");
  const WhatTab = new Tab("what", "What We Do", "what content here");
  const DonateTab = new Tab(
    "donate",
    "We Need Your Help",
    "Despite our professional look, we are only one person and we have received zero funding. "
  );
  const tabs = [IntroTab, FiguresTab, WhoTab, WhatTab];
  return (
    <>
      <div
        style={{
          height: "100vh",
          width: "100vw",
          backgroundColor: "grey",
          placeItems: "center",
          placeContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            backgroundColor: "white",
            height: "75vh",
            width: "83vw",
            boxShadow: "0px 0px 50px 20px white",
            placeItems: "center",
            placeContent: "center",
            // box-shadow: 20px -5px 32px 35px #70D7E0;
            // boxShadow:'20px 5px 5px red',
          }}
        >
          <div
            style={{
              height: "70vh",
              // backgroundColor: "brown",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                // backgroundColor: "green",
                color: "black",
                margin: "0",
                height: "15vh",
                fontFamily: "AnotherTypewriter",
                width: "15vw",
                placeContent: "center",
                userSelect: "none",
              }}
            >
              <h1>DefyAbuse</h1>
              <h2>
                <span style={{ textDecoration: "underline" }}>Consent</span> is
                the line.
              </h2>
            </div>
            <div
              style={{
                // backgroundColor: "blue",
                display: "flex",
                flexDirection: "column",
                paddingTop: "2em",
                paddingBottom: "2em",
                fontFamily: "HighWay",
                width: "15vw",
                userSelect: "none",
              }}
            >
              {tabs.map(function (tab) {
                return (
                  <div
                    style={{
                      width: "100%",
                      paddingTop: "10px",
                      paddingBottom: "10px",
                    }}
                    onClick={() => setActiveTab(tab.name)}
                  >
                    {activeTab == tab.id ? (
                      <h2
                        style={{
                          fontWeight: "900",
                          paddingBlock: "20px",
                          color: "black",
                          marginRight: "-30px",
                          paddingRight: "30px",
                          borderRadius: "35px",
                          // backgroundColor: "purple",
                          boxShadow: "inset 0px 0px 15px 2px purple",
                        }}
                      >
                        {tab.name}
                      </h2>
                    ) : (
                      <h2
                        style={{
                          boxShadow: "inset 0px 0px 81px 81px purple",
                          // backgroundColor: "pink",
                          paddingBlock: "10px",
                          // marginLeft:'130px',
                          marginRight: "-30px",
                          textAlign: "right",
                          paddingRight: "60px",
                          borderRadius: "25px",
                        }}
                      >
                        {tab.name}
                      </h2>
                    )}
                  </div>
                );
              })}
              <div
                style={{
                  width: "100%",
                  paddingTop: "10px",
                  paddingBottom: "10px",
                }}
                onClick={() => setActiveTab(DonateTab.name)}
              >
                <h2
                  style={{
                    fontWeight: "900",
                    paddingBlock: "20px",
                    color: "black",
                    marginTop: "25px",
                    marginRight: "-30px",
                    paddingRight: "30px",
                    borderRadius: "35px",
                    // backgroundColor: "purple",
                    boxShadow: "inset 0px 0px 25px 2px red",
                  }}
                >
                  {DonateTab.name}
                </h2>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundColor: "red",
              // paddingLeft: "2em",
              // paddingRight: "2em",
              // paddingTop: "2em",
              fontFamily: "Cafe",
              // paddingBottom: "2em",
              fontSize: "x-large",
              width: "65vw",
              height: "70vh",
            }}
          >
            <div
              style={{
                paddingBlock: "50px",
                paddingLeft: "50px",
                paddingRight: "50px",
              }}
            >
              {tabs.map(function (tab) {
                return (
                  <div>
                    {activeTab == tab.id ? <div>{tab.content}</div> : null}
                  </div>
                );
              })}
              <div>
                {activeTab == DonateTab.id ? (
                  <div>{DonateTab.content}</div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
