import { useState } from "react";
import { Logo } from "./assets/svg/logo";
import { TabSVG } from "./assets/svg/tab";
import "./App.css";
// https://2019.wattenberger.com/blog/react-and-d3

function App() {
  const [activeTab, setActiveTab] = useState("intro");
  class Tab {
    id: string;
    name: string;
    constructor(id: string, name: string) {
      this.id = id;
      this.name = name;
    }
  }
  const IntroTab = new Tab("intro", "Mission Statement");
  // at DefyAbuse.org we are the only entity monitoring the proliferation of DFIAM.

  // We are doing our best to tackle it: outside of annually collecting and combing through thousands of websites (at minimum 18,000 urls per year), we have advised the home office vawg team and the dist etc

  const FiguresTab = new Tab("figures", "Research Findings");
  const WhoTab = new Tab("who", "Who Are We?");
  const WhatTab = new Tab("what", "Our Next Goals");
  const DonateTab = new Tab("donate", "Keep Our Lights On!");
  const tabs = [IntroTab, FiguresTab, WhoTab, WhatTab];
  return (
    <>
      <div
        style={{
          height: "100vh",
          width: "100vw",
          backgroundColor: "rgb(240,240,240)",
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
            boxShadow: "0px 0px 50px 20px grey",
            placeItems: "center",
            placeContent: "center",
          }}
        >
          <div
            style={{
              height: "70vh",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                color: "black",
                margin: "0",
                height: "15vh",
                width: "15vw",
                placeContent: "center",
                userSelect: "none",
              }}
            >
              <Logo />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                paddingTop: "2em",
                paddingBottom: "2em",
                fontFamily: "Cafe",
                width: "12vw",
              }}
            >
              {tabs.map(function (tab) {
                return (
                  <div
                    style={{
                      width: "20vw",
                      paddingTop: "10px",
                      paddingBottom: "10px",
                      height: "7vh",
                      position: "relative",
                    }}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {activeTab == tab.id ? (
                      <div>
                        <div
                          style={{
                            zIndex: 0,
                            position: "absolute",
                            height: "7vh",
                            width: "20vw",
                            top: 0,
                          }}
                        >
                          <TabSVG />
                        </div>
                        <div
                          style={{
                            zIndex: 1,
                            height: "7vh",
                            width: "10vw",
                            position: "absolute",
                            top: 0,
                            left: "75px",
                            alignContent: "center",
                            textAlign: "left",
                          }}
                        >
                          <h2
                            style={{
                              fontWeight: "900",
                              marginRight: "-30px",
                            }}
                          >
                            {tab.name}
                          </h2>
                        </div>
                      </div>
                    ) : (
                      <div>
                        <div
                          style={{
                            zIndex: 0,
                            position: "absolute",
                            height: "7vh",
                            width: "20vw",
                            right: "-150px",
                            top: 0,
                          }}
                        >
                          {/* <TabSVG /> */}
                        </div>
                        <div
                          style={{
                            zIndex: 1,
                            height: "7vh",
                            width: "10vw",
                            alignContent: "center",
                            position: "absolute",
                            top: 0,
                          }}
                        >
                          <h2
                            style={{
                              position: "absolute",
                              alignSelf: "center",
                              right: "-110px",
                              textAlign: "right",
                              color: "rgb(35,31,32)",
                            }}
                          >
                            {tab.name}
                          </h2>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            {activeTab == DonateTab.id ? (
              <div
                style={{
                  width: "80%",
                  backgroundColor: "rgb(50,220,94)",
                  right: "18px",
                  height: "15vh",
                  alignSelf: "center",
                  alignContent: "center",
                  position: "relative",
                  borderRadius: "5px",
                  border: "9px solid rgb(35,31,32)",
                }}
                onClick={() => setActiveTab(DonateTab.id)}
              >
                <h2
                  style={{
                    fontFamily: "AnotherTypewriter",
                    fontWeight: "900",
                    color: "black",
                    textShadow:'0px 0px 1px white, 0 0 25px white, 0 0 5px white'
                  }}
                >
                  {DonateTab.name}
                </h2>
              </div>
            ) : (
              <div
                style={{
                  width: "80%",
                  backgroundColor: "black",
                  right: "18px",
                  height: "15vh",
                  alignSelf: "center",
                  alignContent: "center",
                  position: "relative",
                  borderRadius: "5px",
                  animation:'tremble 4000ms',
                  animationIterationCount:'infinite',
                  border: "9px solid rgb(35,31,32)",
                }}
                onClick={() => setActiveTab(DonateTab.id)}
              >
                <h2
                  style={{
                    fontFamily: "AnotherTypewriter",
                    fontWeight: "900",
                    color: "rgb(50,220,94)",
                  }}
                >
                  {DonateTab.name}
                </h2>
              </div>
            )}
          </div>
          <div
            style={{
              fontFamily: "Cafe",
              fontSize: "x-large",
              backgroundColor: "white",
              border: "4px solid rgb(35,31,32)",
              zIndex: 2,
              width: "65vw",
              height: "70vh",
            }}
          >
            <div
              style={{
                paddingBlock: "50px",
                paddingLeft: "50px",
                paddingRight: "50px",
                color: "rgb(35,31,32)",
              }}
            >
              <div>
                {activeTab == IntroTab.id ? (
                  <div>
                    DeepfAIke "porn" (DFIAM) is a type of image-based sexual
                    abuse material (DFIAM), separated from child sexual abuse
                    material (CSAM) only by the (apparent) age of the
                    victim-survivor depicted. Distribution of DFIAM is illegal
                    in ___ countries, including ___. Creation of DFIAM is
                    illegal in ____. Despite this, there were 1,000 websites
                    distributing DFIAM as of June 2025, and 1,000 websites where
                    visitors can create DFIAM. 500 of these websites allow the
                    visitor to create DFIAM of a real individual by uploading a
                    single photo of the person they want to "nudify". As of
                    2025, these websites were receiving ___ visits per month.
                  </div>
                ) : null}
              </div>
              <div>{activeTab == WhoTab.id ? <div>b</div> : null}</div>
              <div>{activeTab == WhatTab.id ? <div>c</div> : null}</div>
              <div>
                {activeTab == DonateTab.id ? (
                  <div>
                    <p>
                      At odds, perhaps, with appearances, we are only one person
                      and we have received zero funding.
                    </p>
                  </div>
                ) : null}
              </div>
              <div>
                {activeTab == FiguresTab.id ? (
                  <div>
                    <div id="chart-container">
                      <svg
                        className="chart-svg"
                        width="561"
                        height="345"
                        viewBox="0 0 561 345"
                        fill="rgb(200,200,200)"
                      ></svg>
                      chart here...
                    </div>
                  </div>
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
