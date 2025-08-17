import { useState } from "react";
import UkLaw from "./laws/uk";
import AlabamaLaw from "./laws/alabama";

function Laws() {
  const [nation, setNation] = useState("UK");

  return (
    <div style={{height:'100%'}}>
      <div
        style={{
          height: "6%",
          // height: "60px",
          backgroundColor: "lightcoral",
          display: "flex",
          placeContent: "center",
          placeItems: "center",
        }}
      >
        <label htmlFor="laws">Country/State:</label>
        <select
          name="laws"
          id="laws"
          value={nation}
          onChange={(e) => setNation(e.target.value)}
          className="browser-default custom-select"
        >
          <option value="UK">United Kingdom</option>
          <option value="USA_Alabama">USA - Alabama</option>
        </select>
      </div>
      <div
        style={{
          // height: `calc(100%-60px)`,
          // height: "100%",
          height: "94%",
          width:'100%',
          backgroundColor: "blue",
          display: "flex",
          // placeContent: "center",
          // placeItems: "center",
          overflowY:'scroll'
        }}
      >
        {nation == "UK" ? <UkLaw /> : null}
        {nation == "USA_Alabama" ? <AlabamaLaw /> : null}
      </div>
    </div>
  );
}

export default Laws;
