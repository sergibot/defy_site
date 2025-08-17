import { useState } from "react";
import { Logo } from "./assets/jsx_of_svg/logo";
import Laws from "./components/laws";
import Donate from "./components/donate";
import Mission from "./components/mission";
import Who from "./components/who";
import Goals from "./components/goals";
import Search from "./assets/jsx_of_svg/search";
import Globe from "./assets/jsx_of_svg/globe";
import Crosshairs from "./assets/jsx_of_svg/crosshairs";
import SheriffsBadge from "./assets/jsx_of_svg/sheriffs_badge";
import Flame from "./assets/jsx_of_svg/flame2";
import "./App.css";
// https://2019.wattenberger.com/blog/react-and-d3
import { useMediaQuery } from "react-responsive";

function App() {
  const [activeTab, setActiveTab] = useState("intro");

  function TopBar() {
    return (
      <>
        <div
          id="topbar"
          style={{
            // width: "98vw",
            height: "12vh",
            display: "flex",
            flexDirection: "row",
            placeContent: "center",
            placeItems: "center",
            placeSelf: "center",
            paddingTop: "0.4em",
            paddingBottom: "0.4em",
          }}
        >
          <div
            style={{ width: "20vw", height: "10vh" }}
            onClick={() => setActiveTab(IntroTab.id)}
          >
            <SheriffsBadge />
          </div>
          <div
            style={{ width: "20vw", height: "10vh" }}
            onClick={() => setActiveTab(FiguresTab.id)}
          >
            <Search />
          </div>
          <div
            style={{ width: "20vw", height: "10vh" }}
            onClick={() => setActiveTab(WhoTab.id)}
          >
            <Globe />
          </div>
          <div
            style={{ width: "20vw", height: "10vh" }}
            onClick={() => setActiveTab(GoalsTab.id)}
          >
            <Crosshairs />
          </div>
          <div
            style={{ width: "20vw", height: "10vh" }}
            onClick={() => setActiveTab(DonateTab.id)}
          >
            <Flame />
          </div>
        </div>
      </>
    );
  }

  function SideBar() {
    return (
      <>
        <div
          id="sidebar"
          style={{
            height: "70vh",
            display: "flex",
            flexDirection: "column",
            // backgroundColor: "blue",
            placeContent: "center",
            placeSelf: "center",
          }}
        >
          <div
            id="logo"
            style={{
              color: "black",
              margin: "0",
              height: "15vh",
              width: "15vw",
              placeContent: "center",
              placeSelf: "center",
              userSelect: "none",
            }}
            onClick={() => setActiveTab(DonateTab.id)}
          >
            {isBigScreen && <Logo />}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              paddingTop: "2em",
              paddingBottom: "2em",
              fontFamily: "Cafe",
              width: "100%",
            }}
          >
            {tabs.map(function (tab) {
              return (
                <div
                  style={{
                    width: "100%",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    height: "7vh",
                    position: "relative",
                  }}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {activeTab == tab.id ? (
                    <div
                      style={{
                        zIndex: 1,
                        height: "7vh",
                        width: "100%",
                        position: "absolute",
                        backgroundColor: "black",
                        alignContent: "center",
                        textAlign: "center",
                      }}
                    >
                      <h2>{tab.name}</h2>
                    </div>
                  ) : (
                    <div
                      style={{
                        zIndex: 1,
                        height: "7vh",
                        width: "100%",
                        alignContent: "center",
                      }}
                    >
                      <h2
                        style={{
                          textAlign: "right",
                          paddingRight: "1em",
                          color: "rgb(35,31,32)",
                        }}
                      >
                        {tab.name}
                      </h2>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <div
            style={{
              width: "80%",
              right: "18px",
              height: "10vh",
              placeSelf: "center",
              placeContent: "center",
            }}
          >
            {activeTab == DonateTab.id ? (
              <div
                style={{
                  height: "100%",
                  backgroundColor: "rgb(50,220,94)",
                  placeSelf: "center",
                  placeContent: "center",
                  paddingLeft: "2em",
                  paddingRight: "2em",
                  borderRadius: "5px",
                  border: "9px solid rgb(35,31,32)",
                }}
                onClick={() => setActiveTab(DonateTab.id)}
              >
                {isHugeScreen ? (
                  <h2
                    style={{
                      fontFamily: "AnotherTypewriter",
                      fontWeight: "900",
                      color: "black",
                      textShadow:
                        "0px 0px 1px white, 0 0 25px white, 0 0 5px white",
                    }}
                  >
                    Keep Our <br />
                    Lights On!
                  </h2>
                ) : (
                  <h2
                    style={{
                      fontFamily: "AnotherTypewriter",
                      fontWeight: "900",
                      color: "black",
                      textShadow:
                        "0px 0px 1px white, 0 0 25px white, 0 0 5px white",
                    }}
                  >
                    Donate
                  </h2>
                )}
              </div>
            ) : (
              <div
                style={{
                  height: "100%",
                  backgroundColor: "black",
                  placeSelf: "center",
                  placeContent: "center",
                  position: "relative",
                  borderRadius: "5px",
                  paddingLeft: "2em",
                  paddingRight: "2em",
                  animation: "tremble 4000ms",
                  animationIterationCount: "infinite",
                  border: "9px solid rgb(35,31,32)",
                }}
                onClick={() => setActiveTab(DonateTab.id)}
              >
                {isHugeScreen ? (
                  <h2
                    style={{
                      fontFamily: "AnotherTypewriter",
                      fontWeight: "900",
                      color: "rgb(50,220,94)",
                    }}
                  >
                    Keep Our <br />
                    Lights On!
                  </h2>
                ) : (
                  <h2
                    style={{
                      fontFamily: "AnotherTypewriter",
                      fontWeight: "900",
                      color: "rgb(50,220,94)",
                    }}
                  >
                    Support Us!
                  </h2>
                )}
              </div>
            )}
          </div>
        </div>
      </>
    );
  }
  function MainPanel(landscape:any) {
    let heightHere = '10vh'
    heightHere = landscape ? "85vh" : "100vh";
    return (
      <>
        <div
          id="main_panel"
          style={{
            fontFamily: "Cafe",
            fontSize: "x-large",
            // height: "90%",
            height:heightHere,
            backgroundColor: "white",
            zIndex: 2,
          }}
        >
          <div
            style={{
              paddingLeft: "50px",
              paddingRight: "50px",
              color: "rgb(35,31,32)",
              height: "100%",
              maxWidth: "100%",
              // overflowY: "scroll",
            }}
          >
            {activeTab == IntroTab.id ? <Mission /> : null}
            {activeTab == WhoTab.id ? <Who /> : null}
            {activeTab == FiguresTab.id ? <Laws /> : null}
            {activeTab == GoalsTab.id ? <Goals /> : null}
            {activeTab == DonateTab.id ? <Donate /> : null}
          </div>
        </div>
      </>
    );
  }
  const isBigScreen = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isHugeScreen = useMediaQuery({
    query: "(min-width: 1824px)",
  });
  class Tab {
    id: string;
    name: string;
    constructor(id: string, name: string) {
      this.id = id;
      this.name = name;
    }
  }
  const IntroTab = new Tab("intro", "Statistics");
  const FiguresTab = new Tab("figures", "Laws");
  const WhoTab = new Tab("who", "Report!");
  const GoalsTab = new Tab("what", "About Us");
  const DonateTab = new Tab("donate", "Support Us!");
  const tabs = [IntroTab, FiguresTab, WhoTab, GoalsTab];
  return (
    <>
      <div
        id="full_background"
        style={{
          height: "100vh",
          width: "100vw",
          backgroundColor: "rgb(240,240,240)",
          placeItems: "center",
          placeContent: "center",
        }}
      >
        {isBigScreen && (
          <div
            id="centre_panel"
            style={{
              display: "flex",
              backgroundColor: "white",
              placeItems: "center",
              placeContent: "center",
              flexDirection: "row",
            }}
          >
            <SideBar />
            <MainPanel landscape={isBigScreen}/>
          </div>
        )}
        {!isBigScreen && (
          <div
            id="centre_panel"
            style={{
              display: "flex",
              // placeItems: "center",
              // placeContent: "center",
              flexDirection: "column",
            }}
          >
            <TopBar />
            <MainPanel landscape={isBigScreen} />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
