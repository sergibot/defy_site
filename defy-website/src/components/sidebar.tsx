import { MouseEventHandler } from "react";

interface SidebarProps {
  selected: string;
}

function Sidebar({ selected }: SidebarProps) {
  // function Sidebar(activeTab: string, setActiveTab) {
  // function Sidebar(activeTab: string, setActiveTab: (arg0: string) => MouseEventHandler<HTMLParagraphElement> | undefined) {
  // function Sidebar(activeTab: string, setActiveTab: object): object {
  // <Sidebar active={activeTab} setActiveTab={(clickedOnTab:string)=>setActiveTab(clickedOnTab)} />
  return (
    <div
      style={{
        backgroundColor: "blue",
        display: "flex",
        flexDirection: "column",
        paddingLeft: "2em",
        paddingRight: "2em",
      }}
    >
      {/* {activeTab == "intro" ? (
        <p onClick={setActiveTab("intro")}>Intro</p>
      ) : ( */}
      <h2>Intro</h2>
      <h2>{selected}</h2>
      {/* )} */}
      <p>Who</p>
      <p>What</p>
      <p>Why</p>
      <p>Research</p>
    </div>
  );
}

export default Sidebar;
